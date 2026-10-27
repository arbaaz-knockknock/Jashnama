import {test} from 'node:test';
import assert from 'node:assert/strict';
import {WEDDINGS,createDemoState,calendarText} from '../src/lib/demo.ts';

test('Savage invitation uses the five supplied Indian local starts without invented durations',()=>{
  const starts=WEDDINGS.savage.events.map(e=>new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',dateStyle:'short',timeStyle:'short',hour12:false}).format(new Date(e.startAt)));
  assert.deepEqual(Array.from(starts),['11/12/2026, 19:00','12/12/2026, 10:00','12/12/2026, 16:00','13/12/2026, 10:00','13/12/2026, 19:00']);
  const ics=calendarText(WEDDINGS.savage);
  assert.equal((ics.match(/BEGIN:VEVENT/g)||[]).length,5);
  assert.ok(ics.includes('DTSTART:20261212T103000Z'));
  assert.ok(!ics.includes('DTEND:'));assert.ok(!ics.includes('DURATION:'));
  assert.ok(ics.includes('Venue details coming soon'));
  assert.equal((calendarText(WEDDINGS.savage,'royal').match(/BEGIN:VEVENT/g)||[]).length,1);
});

test('each wedding and fresh session have independent mutable demo records',()=>{
  const first=createDemoState(),second=createDemoState();
  first.weddings.savage.favorites.push('savage-media-1');
  first.weddings.savage.brief.story='Private test note';
  first.weddings.savage.settings.sharedGallery=false;
  first.weddings.savage.deliverables[0].comments.push({id:'test',body:'Private feedback'});
  first.weddings.savage.crew.gujarat={photographers:3};
  assert.equal(first.weddings.sample.deliverables[0].comments.length,0);
  assert.equal(second.weddings.savage.deliverables[0].comments.length,0);
  assert.equal(first.weddings.sample.crew.gujarat,undefined);
  assert.equal(first.weddings.sample.favorites.length,0);
  assert.equal(first.weddings.sample.brief.story,'');
  assert.equal(first.weddings.sample.settings.sharedGallery,true);
  assert.equal(second.weddings.savage.brief.story,'');
  for(const [id,value] of Object.entries(first.weddings))for(const media of value.media){assert.equal(media.weddingId,id);assert.ok(WEDDINGS[id].events.some(e=>e.id===media.eventId));}
});

test('sample wedding does not acquire invented dates or actual couple photography',()=>{
  assert.equal(WEDDINGS.sample.fictional,true);
  assert.equal((calendarText(WEDDINGS.sample).match(/BEGIN:VEVENT/g)||[]).length,0);
  assert.ok(createDemoState().weddings.sample.media.every(m=>m.placeholder&&!m.image));
});
