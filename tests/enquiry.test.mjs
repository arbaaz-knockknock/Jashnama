import test from 'node:test';
import assert from 'node:assert/strict';
import { emptyEnquiry, validateEnquiry, enquiryText } from '../src/lib/enquiry.ts';

const valid=()=>({...emptyEnquiry,names:' A & B ',email:'couple@example.com',services:['Wedding films'],consent:true});
test('enquiries validate contact, consent, dates, scope and size without automatic marketing opt-in',()=>{
  const result=validateEnquiry(valid());
  assert.equal(result.draft.names,'A & B');assert.equal(result.draft.marketing,false);
  assert.match(enquiryText(result.draft),/Not opted in/);
  for(const [patch,field] of [
    [{names:'  '},'names'],[{email:'missing-domain'},'email'],[{consent:false},'consent'],
    [{services:['Unlisted package']},'services'],[{story:'a'.repeat(2501)},'story'],
    [{date:'2026-02-30'},'date'],[{method:'WhatsApp',phone:'-------'},'phone'],
    [{method:'WhatsApp',phone:'1234567890123456'},'phone'],
  ])assert.ok(validateEnquiry({...valid(),...patch}).errors[field],field);
  assert.ok(validateEnquiry({...valid(),method:'WhatsApp',phone:'+91 98765 43210'}).draft);
  assert.ok(validateEnquiry(null).errors.names);
  for(const services of [['Jashnama app'],['The whole experience'],['Photography','Wedding films','Jashnama app','The whole experience']])assert.deepEqual(validateEnquiry({...valid(),services}).draft.services,services);
});
