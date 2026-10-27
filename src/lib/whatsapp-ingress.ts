import { createHmac, timingSafeEqual } from 'node:crypto';
export function verifyWhatsAppSignature(body:string,signature:string|null,secret:string){
 if(!signature||!/^sha256=[a-f0-9]{64}$/i.test(signature)||!secret)return false;
 const expected=createHmac('sha256',secret).update(body).digest();return timingSafeEqual(expected,Buffer.from(signature.slice(7),'hex'));
}
export interface InboundWhatsAppMessage { messageId:string; sender:string; businessPhoneId:string; timestamp:string; type:string; text?:string; mediaId?:string; mime?:string; checksum?:string; caption?:string; }
type Obj=Record<string,unknown>;
const object=(v:unknown):Obj=>v&&typeof v==='object'&&!Array.isArray(v)?v as Obj:{};
const list=(v:unknown):unknown[]=>Array.isArray(v)?v:[];
const str=(v:unknown,max=4096)=>typeof v==='string'?v.slice(0,max):'';
/** No wedding or selfie classification is inferred from a sender or a caption.
 * An authenticated worker must resolve the guest's private invitation and consent.
 */
export function extractWhatsAppMessages(payload:unknown,phoneId:string):InboundWhatsAppMessage[]{
 const root=object(payload);if(root.object!=='whatsapp_business_account')throw new Error('Invalid object');
 const result:InboundWhatsAppMessage[]=[];
 for(const entry of list(root.entry))for(const change of list(object(entry).changes)){
  const event=object(change);if(event.field!=='messages')continue;const value=object(event.value);
  if(object(value.metadata).phone_number_id!==phoneId)continue;
  for(const candidate of list(value.messages)){
   const m=object(candidate);const id=str(m.id,256),sender=str(m.from,25),type=str(m.type,30);
   if(!id||!/^\d{5,20}$/.test(sender)||!['text','image','video','audio','document','interactive'].includes(type))continue;
   const item:InboundWhatsAppMessage={messageId:id,sender,businessPhoneId:phoneId,timestamp:str(m.timestamp,20),type};
   if(type==='text')item.text=str(object(m.text).body);
   else if(type==='interactive'){const interactive=object(m.interactive);item.text=str(object(interactive.button_reply).id||object(interactive.list_reply).id,256);}
   else{const media=object(m[type]);item.mediaId=str(media.id,100);item.mime=str(media.mime_type,100);item.checksum=str(media.sha256,128);item.caption=str(media.caption);if(!item.mediaId)continue;}
   result.push(item);
  }
 }
 return result;
}
