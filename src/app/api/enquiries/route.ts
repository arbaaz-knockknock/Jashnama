import { createHash, randomUUID } from 'node:crypto';
import { validateEnquiry } from '@/lib/enquiry';

export const runtime='nodejs';
const MAX_BYTES=16_384;
const requests=new Map<string,{hash:string;expires:number;result:Promise<Response>}>();
const attempts=new Map<string,{count:number;expires:number}>();
const json=(body:unknown,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});

/** Optional handoff adapter. Disabled until an owner-configured receiver is connected.
 * Maps are a bounded per-instance safeguard, not a durable queue or distributed limit.
 * The receiver must persist Idempotency-Key before accepting a real enquiry.
 */
export async function POST(request:Request){
  const destination=process.env.ENQUIRY_WEBHOOK_URL;
  if(process.env.ENQUIRIES_ENABLED!=='true'||!destination)return json({code:'NOT_CONNECTED',message:'Online enquiries are not connected yet. Your draft is still available to copy or download.'},503);
  let receiver:URL;
  try{receiver=new URL(destination);if(receiver.protocol!=='https:')throw new Error();}catch{return json({code:'NOT_CONNECTED',message:'The enquiry channel is unavailable. Please keep your draft and use a direct contact option.'},503);}
  if(request.headers.get('origin')!==new URL(request.url).origin)return json({code:'ORIGIN',message:'Please send your enquiry from the Jashnama website.'},403);
  if(!request.headers.get('content-type')?.startsWith('application/json'))return json({code:'FORMAT',message:'Please use the enquiry form.'},415);
  const key=request.headers.get('idempotency-key');
  if(!key||!/^[0-9a-f-]{36}$/i.test(key))return json({code:'REQUEST_ID',message:'Refresh the form and try again.'},400);
  const now=Date.now();
  for(const [id,value] of attempts)if(value.expires<now)attempts.delete(id);
  for(const [id,value] of requests)if(value.expires<now)requests.delete(id);
  if(attempts.size>=500||requests.size>=500)return json({code:'BUSY',message:'The enquiry service is busy. Please try again shortly; your draft is safe.'},503);
  const client=createHash('sha256').update(request.headers.get('x-real-ip')||request.headers.get('x-forwarded-for')?.split(',')[0]||'anonymous').digest('hex');
  const rate=attempts.get(client)||{count:0,expires:now+60_000};rate.count++;attempts.set(client,rate);
  if(rate.count>6)return json({code:'RATE_LIMIT',message:'Please wait a minute before trying again. Your draft is safe.'},429);
  let raw='';
  try{
    const reader=request.body?.getReader();if(!reader)throw new Error();
    const decoder=new TextDecoder();let bytes=0;
    while(true){const {value,done}=await reader.read();if(done)break;bytes+=value.byteLength;if(bytes>MAX_BYTES){await reader.cancel();return json({code:'TOO_LARGE',message:'Please shorten your enquiry and try again.'},413);}raw+=decoder.decode(value,{stream:true});}
    raw+=decoder.decode();
  }catch{return json({code:'INVALID',message:'Your enquiry could not be read. Please try again.'},400);}
  let payload:unknown;try{payload=JSON.parse(raw);}catch{return json({code:'INVALID',message:'Please check the form and try again.'},400);}
  const validation=validateEnquiry(payload);
  if(!validation.draft)return json({code:'VALIDATION',errors:validation.errors,message:'Please check the highlighted details.'},422);
  if(validation.draft.website)return json({code:'VALIDATION',message:'Please use the enquiry form.'},422);
  const hash=createHash('sha256').update(JSON.stringify(validation.draft)).digest('hex');
  const existing=requests.get(key);
  if(existing){if(existing.hash!==hash)return json({code:'CONFLICT',message:'This enquiry has changed. Please prepare it again.'},409);return (await existing.result).clone();}
  const send=async()=>{
    try{
      const response=await fetch(receiver,{method:'POST',headers:{'Content-Type':'application/json','Idempotency-Key':key,...(process.env.ENQUIRY_WEBHOOK_TOKEN?{'Authorization':`Bearer ${process.env.ENQUIRY_WEBHOOK_TOKEN}`}:{})},body:JSON.stringify({version:1,enquiry:validation.draft,requestId:key}),signal:AbortSignal.timeout(8000),redirect:'error',cache:'no-store'});
      if(!response.ok)throw new Error();
      return json({accepted:true,receiptId:randomUUID(),message:'Your enquiry was accepted by our enquiry service.'},202);
    }catch{return json({code:'UNCONFIRMED',message:'We couldn’t confirm receipt. Your details are still here. Retry with this same draft or use a direct contact option.'},502);}
  };
  const result=send();requests.set(key,{hash,expires:now+10*60_000,result});
  const response=await result;
  if(response.status>=500)requests.delete(key);
  return response.clone();
}
