import { timingSafeEqual } from 'node:crypto';
import { extractWhatsAppMessages, verifyWhatsAppSignature } from '@/lib/whatsapp-ingress';
export const runtime='nodejs';
const json=(body:unknown,status:number)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
export async function GET(request:Request){
 const expected=process.env.WHATSAPP_VERIFY_TOKEN;const query=new URL(request.url).searchParams;const token=query.get('hub.verify_token')||'';
 if(!expected)return json({connected:false},503);
 if(query.get('hub.mode')!=='subscribe'||Buffer.byteLength(token)!==Buffer.byteLength(expected)||!timingSafeEqual(Buffer.from(token),Buffer.from(expected)))return json({verified:false},403);
 return new Response(query.get('hub.challenge')||'',{headers:{'Cache-Control':'no-store','Content-Type':'text/plain'}});
}
export async function POST(request:Request){
 const {WHATSAPP_INGRESS_ENABLED:enabled,WHATSAPP_APP_SECRET:secret,WHATSAPP_PHONE_NUMBER_ID:phoneId,WHATSAPP_QUEUE_URL:queue,WHATSAPP_QUEUE_TOKEN:token}=process.env;
 if(enabled!=='true'||!secret||!phoneId||!queue||!token)return json({connected:false},503);
 let destination:URL;try{destination=new URL(queue);if(destination.protocol!=='https:')throw new Error();}catch{return json({connected:false},503);}
 let raw='';try{const reader=request.body?.getReader();if(!reader)return json({accepted:false},400);let bytes=0;const decoder=new TextDecoder();while(true){const {done,value}=await reader.read();if(done)break;bytes+=value.byteLength;if(bytes>1048576){await reader.cancel();return json({accepted:false},413);}raw+=decoder.decode(value,{stream:true});}raw+=decoder.decode();}catch{return json({accepted:false},400);}
 if(!verifyWhatsAppSignature(raw,request.headers.get('x-hub-signature-256'),secret))return json({accepted:false},401);
 let messages;try{messages=extractWhatsAppMessages(JSON.parse(raw),phoneId);}catch{return json({accepted:false},400);}
 if(!messages.length)return json({accepted:true,ignored:true},200);
 try{
  // Queue must durably deduplicate messageId and acknowledge only committed jobs.
  const response=await fetch(destination,{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${token}`},body:JSON.stringify({version:1,messages}),redirect:'error',signal:AbortSignal.timeout(8000),cache:'no-store'});
  if(!response.ok||(await response.json()).accepted!==true)throw new Error();
  return json({accepted:true},200);
 }catch{return json({accepted:false,retry:true},503);}
}
