export const enquiryServices=['Photography','Wedding films','Jashnama app','The whole experience'] as const;
export interface EnquiryDraft {
  names: string; method: 'Email'|'WhatsApp'; email: string; phone: string;
  date: string; flexible: boolean; location: string; events: string; services: string[];
  story: string; budget: string; source: string; consent: boolean; marketing: boolean; website: string;
}
export const emptyEnquiry: EnquiryDraft = {names:'',method:'Email',email:'',phone:'',date:'',flexible:false,location:'',events:'',services:[],story:'',budget:'',source:'',consent:false,marketing:false,website:''};
export type EnquiryErrors = Partial<Record<keyof EnquiryDraft,string>>;
export function validateEnquiry(input: unknown): {draft?:EnquiryDraft; errors:EnquiryErrors} {
  if(!input || typeof input!=='object' || Array.isArray(input)) return {errors:{names:'Please complete your enquiry.'}};
  const obj=input as Record<string,unknown>;
  const draft={...emptyEnquiry,services:[]} as EnquiryDraft;
  const errors:EnquiryErrors={};
  const limits={names:120,email:120,phone:25,date:10,location:160,events:250,story:2500,budget:100,source:120,website:100};
  for(const [key,max] of Object.entries(limits)){
    const value=obj[key];
    if(typeof value!=='string'){errors[key as keyof EnquiryDraft]='Please enter a valid value.';continue;}
    if(value.length>max){errors[key as keyof EnquiryDraft]=`Please keep this under ${max} characters.`;continue;}
    (draft as unknown as Record<string,unknown>)[key]=value.trim();
  }
  draft.method=obj.method==='WhatsApp'?'WhatsApp':'Email';
  if(!['Email','WhatsApp'].includes(String(obj.method))) errors.method='Choose email or WhatsApp.';
  for(const key of ['flexible','consent','marketing'] as const){draft[key]=obj[key]===true;}
  if(Array.isArray(obj.services)&&obj.services.length<=4&&obj.services.every(s=>enquiryServices.includes(s))){draft.services=[...new Set(obj.services)] as string[];}
  if(!draft.names) errors.names='Please tell us your names.';
  if(draft.method==='Email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email)) errors.email='Enter an email address we can reply to.';
  if(draft.method==='WhatsApp'&&(!/^\+?[\d\s()-]{7,25}$/.test(draft.phone)||draft.phone.replace(/\D/g,'').length<7||draft.phone.replace(/\D/g,'').length>15)) errors.phone='Add your number with the country code.';
  if(draft.date && (!/^\d{4}-\d{2}-\d{2}$/.test(draft.date)||Number.isNaN(Date.parse(draft.date))||new Date(draft.date).toISOString().slice(0,10)!==draft.date)) errors.date='Choose a valid wedding date, or leave it open.';
  if(!draft.services.length) errors.services='Choose at least one service or the whole experience.';
  if(!draft.consent) errors.consent='Please read and accept the privacy note for this enquiry.';
  return {draft:Object.keys(errors).length?undefined:draft,errors};
}
export function enquiryText(draft:EnquiryDraft){
  return ['A wedding enquiry for Jashnama','',`Names: ${draft.names}`,`${draft.method}: ${draft.method==='Email'?draft.email:draft.phone}`,`Wedding date: ${draft.date||'Still deciding'}${draft.flexible?' (flexible)':''}`,`City / venue: ${draft.location||'To be confirmed'}`,`Celebrations / days: ${draft.events||'To be discussed'}`,`Interested in: ${draft.services.join(' & ')}`,...(draft.budget?[`Budget indication: ${draft.budget}`]:[]),...(draft.source?[`Found you through: ${draft.source}`]:[]),'',`What matters most: ${draft.story||'Let’s talk about our story.'}`,'',`Future updates: ${draft.marketing?'Interested; contact preference to be confirmed':'Not opted in'}`].join('\n');
}
