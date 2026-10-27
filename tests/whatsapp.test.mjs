import test from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { verifyWhatsAppSignature, extractWhatsAppMessages } from '../src/lib/whatsapp-ingress.ts';
const payload={object:'whatsapp_business_account',entry:[{changes:[{field:'messages',value:{metadata:{phone_number_id:'business-1'},messages:[{id:'wamid.example',from:'919876543210',timestamp:'1234',type:'image',image:{id:'media-id',mime_type:'image/jpeg',caption:'A celebration'}}]}}]}]};
test('WhatsApp ingress authenticates exact body and isolates configured business number',()=>{
 const body=JSON.stringify(payload),secret='test-secret';const signature='sha256='+createHmac('sha256',secret).update(body).digest('hex');
 assert.equal(verifyWhatsAppSignature(body,signature,secret),true);
 assert.equal(verifyWhatsAppSignature(body+' ',signature,secret),false);
 assert.equal(verifyWhatsAppSignature(body,'sha256=bad',secret),false);
 assert.deepEqual(extractWhatsAppMessages(payload,'other-business'),[]);
 const items=extractWhatsAppMessages(payload,'business-1');assert.equal(items.length,1);assert.equal(items[0].mediaId,'media-id');assert.equal(items[0].weddingId,undefined);assert.equal(items[0].faceConsent,undefined);
 assert.throws(()=>extractWhatsAppMessages({},'business-1'));
});

test('WhatsApp webhook never acknowledges an unconfigured or failed ingestion queue',async()=>{
 const {readFile}=await import('node:fs/promises');const {stripTypeScriptTypes}=await import('node:module');
 const source=(await readFile(new URL('../src/app/api/whatsapp/webhook/route.ts',import.meta.url),'utf8')).replace("'@/lib/whatsapp-ingress'",JSON.stringify(new URL('../src/lib/whatsapp-ingress.ts',import.meta.url).href));
 const {POST,GET}=await import(`data:text/javascript;base64,${Buffer.from(stripTypeScriptTypes(source)).toString('base64')}`);
 const keys=['WHATSAPP_INGRESS_ENABLED','WHATSAPP_APP_SECRET','WHATSAPP_PHONE_NUMBER_ID','WHATSAPP_QUEUE_URL','WHATSAPP_QUEUE_TOKEN','WHATSAPP_VERIFY_TOKEN'];const previous=keys.map(k=>process.env[k]);const oldFetch=globalThis.fetch;
 const raw=JSON.stringify(payload);const request=(signature='sha256='+createHmac('sha256','test-secret').update(raw).digest('hex'))=>new Request('https://jashnama.vercel.app/api/whatsapp/webhook',{method:'POST',headers:{'x-hub-signature-256':signature},body:raw});
 try{
  for(const key of keys)delete process.env[key];assert.equal((await POST(request())).status,503);
  Object.assign(process.env,{WHATSAPP_INGRESS_ENABLED:'true',WHATSAPP_APP_SECRET:'test-secret',WHATSAPP_PHONE_NUMBER_ID:'business-1',WHATSAPP_QUEUE_URL:'https://queue.example.test/inbound',WHATSAPP_QUEUE_TOKEN:'queue-test',WHATSAPP_VERIFY_TOKEN:'verify-test'});
  assert.equal((await POST(request('bad'))).status,401);
  assert.equal((await GET(new Request('https://site.test?hub.mode=subscribe&hub.verify_token=bad&hub.challenge=123'))).status,403);
  assert.equal(await (await GET(new Request('https://site.test?hub.mode=subscribe&hub.verify_token=verify-test&hub.challenge=123'))).text(),'123');
  globalThis.fetch=async()=>Response.json({accepted:false});assert.equal((await POST(request())).status,503);
  globalThis.fetch=async()=>{throw new Error('offline');};assert.equal((await POST(request())).status,503);
  globalThis.fetch=async(_url,options)=>{assert.equal(JSON.parse(options.body).messages[0].messageId,'wamid.example');return Response.json({accepted:true});};assert.equal((await POST(request())).status,200);
 }finally{globalThis.fetch=oldFetch;keys.forEach((key,i)=>{if(previous[i]===undefined)delete process.env[key];else process.env[key]=previous[i];});}
});
