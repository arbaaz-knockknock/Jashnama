import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { stripTypeScriptTypes } from 'node:module';
import { randomUUID } from 'node:crypto';
import { emptyEnquiry } from '../src/lib/enquiry.ts';

// Execute the actual handler, replacing only Next's import alias for Node's runner.
const source=(await readFile(new URL('../src/app/api/enquiries/route.ts',import.meta.url),'utf8')).replace("'@/lib/enquiry'",JSON.stringify(new URL('../src/lib/enquiry.ts',import.meta.url).href));
const {POST}=await import(`data:text/javascript;base64,${Buffer.from(stripTypeScriptTypes(source)).toString('base64')}`);
const body=()=>({...emptyEnquiry,names:'Preview couple',email:'preview@example.com',services:['Photography'],consent:true});
const request=(payload=body(),options={})=>new Request('https://jashnama.vercel.app/api/enquiries',{method:'POST',headers:{origin:'https://jashnama.vercel.app','content-type':'application/json','idempotency-key':randomUUID(),'x-real-ip':randomUUID(),...options},body:JSON.stringify(payload)});

test('enquiry handoff fails closed, validates and deduplicates without real delivery',async()=>{
  const previous={enabled:process.env.ENQUIRIES_ENABLED,url:process.env.ENQUIRY_WEBHOOK_URL,token:process.env.ENQUIRY_WEBHOOK_TOKEN,fetch:globalThis.fetch};
  try{
    delete process.env.ENQUIRIES_ENABLED;delete process.env.ENQUIRY_WEBHOOK_URL;
    assert.equal((await POST(request())).status,503);
    process.env.ENQUIRIES_ENABLED='true';process.env.ENQUIRY_WEBHOOK_URL='https://receiver.example.test/enquiry';
    let calls=0;globalThis.fetch=async(_url,options)=>{calls++;assert.equal(options.redirect,'error');assert.equal(JSON.parse(options.body).enquiry.names,'Preview couple');return new Response(null,{status:202});};
    assert.equal((await POST(request(body(),{origin:'https://elsewhere.example'}))).status,403);
    assert.equal((await POST(request(body(),{'content-type':'text/plain'}))).status,415);
    assert.equal((await POST(request({...body(),consent:false}))).status,422);
    assert.equal((await POST(request({...body(),website:'spam.example'}))).status,422);
    assert.equal((await POST(request({...body(),story:'x'.repeat(17000)}))).status,413);
    assert.equal(calls,0);
    const key=randomUUID();const responses=await Promise.all([POST(request(body(),{'idempotency-key':key})),POST(request(body(),{'idempotency-key':key}))]);
    assert.equal(calls,1);assert.equal(responses[0].status,202);assert.deepEqual(await responses[0].json(),await responses[1].json());
    assert.equal((await POST(request({...body(),names:'Changed'},{'idempotency-key':key}))).status,409);
    globalThis.fetch=async()=>{throw new Error('Simulated receiver outage');};
    const retryKey=randomUUID();assert.equal((await POST(request(body(),{'idempotency-key':retryKey}))).status,502);
    globalThis.fetch=async()=>new Response(null,{status:202});
    assert.equal((await POST(request(body(),{'idempotency-key':retryKey}))).status,202);
    const ip=randomUUID();for(let i=0;i<6;i++)assert.equal((await POST(request(body(),{'x-real-ip':ip}))).status,202);
    assert.equal((await POST(request(body(),{'x-real-ip':ip}))).status,429);
  }finally{
    globalThis.fetch=previous.fetch;
    for(const [key,value] of [['ENQUIRIES_ENABLED',previous.enabled],['ENQUIRY_WEBHOOK_URL',previous.url],['ENQUIRY_WEBHOOK_TOKEN',previous.token]]){if(value===undefined)delete process.env[key];else process.env[key]=value;}
  }
});
