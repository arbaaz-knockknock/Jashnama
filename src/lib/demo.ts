import type { BriefAttachment, CrewPlan, Deliverable, CreativeBrief, Enquiry, MediaAsset, ProjectStage, Task, Wedding, WeddingId, WeddingSettings } from './contracts';
export const WEDDINGS: Record<WeddingId, Wedding> = {
  savage: { id: 'savage', title: 'The Savage Wedding', names: 'Vedant & Sakshi', hashtag: '#TheSavageWedding', city: 'Lucknow', timezone: 'Asia/Kolkata', dateLabel: '11—13 December 2026', fictional: false, events: [
    { id: 'gujarat', weddingId: 'savage', name: 'Rangilo Gujarat Bhaat', startAt: '2026-12-11T13:30:00Z' },
    { id: 'haldi', weddingId: 'savage', name: 'Krishna Nagri Haldi', startAt: '2026-12-12T04:30:00Z' },
    { id: 'royal', weddingId: 'savage', name: 'The Royal Affair', startAt: '2026-12-12T10:30:00Z' },
    { id: 'lunch', weddingId: 'savage', name: 'Bridgerton Lunch', startAt: '2026-12-13T04:30:00Z' },
    { id: 'raas', weddingId: 'savage', name: 'Rave & Raas', startAt: '2026-12-13T13:30:00Z' },
  ] },
  sample: { id: 'sample', title: 'Sample Wedding', names: 'Sample A & Sample B', hashtag: '#SampleWeddingDemo', city: 'City to be decided', timezone: 'Asia/Kolkata', dateLabel: 'Dates to be decided', fictional: true, events: [
    { id: 'garden-welcome', weddingId: 'sample', name: 'Welcome evening · fictional' },
    { id: 'garden-ceremony', weddingId: 'sample', name: 'Garden ceremony · fictional' },
  ] },
};
const makeMedia = (weddingId: WeddingId, count: number): MediaAsset[] => Array.from({ length: count }, (_, i) => ({
  id: `${weddingId}-media-${i + 1}`, weddingId, eventId: WEDDINGS[weddingId].events[i % WEDDINGS[weddingId].events.length].id,
  title: ['A gathering of hearts', 'The little details', 'In the moment', 'An evening together', 'All the joy', 'A story in motion'][i % 6],
  source: i % 3 === 1 ? 'guest' : 'professional', kind: i === 5 ? 'film' : 'photo', publication: i === count - 1 ? 'draft' : 'published', moderation: i === count - 1 ? 'pending' : 'approved', processing: 'ready', image: weddingId === 'savage' && (i === 0 || i === 2) ? '/images/hero.webp' : undefined,
  uploaderLabel: i % 3 === 1 ? 'Guest contributor · sample' : 'Jashnama team · sample', channel:'web', placeholder: true, access: i === count - 2 ? 'family' : 'shared', createdAt: `2026-09-${String(10 + i).padStart(2, '0')}T09:00:00Z`,
}));
export interface DemoWeddingState { media: MediaAsset[]; attachments:BriefAttachment[]; crew:Record<string,CrewPlan>; deliverables:Deliverable[]; personalMatches:string[]; favorites: string[]; selections: string[]; submittedSelections: boolean; brief: CreativeBrief; stage: ProjectStage; tasks: Task[]; settings: WeddingSettings; reviewComments: string[]; reviewApproved: boolean; reports: string[]; }
export interface DemoState { weddings: Record<WeddingId, DemoWeddingState>; enquiries: Enquiry[]; }
const initialWedding = (id: WeddingId): DemoWeddingState => ({ media: makeMedia(id, id === 'savage' ? 8 : 4), favorites: [], selections: [], submittedSelections: false,
  attachments:[], crew:{}, personalMatches:[], deliverables:['Wedding teaser','Highlight film','Wedding feature','Photograph collection'].map((title,i)=>({id:`${id}-deliverable-${i}`,title,kind:i===3?'photo':'film',version:1,status:'Awaiting upload',comments:[]})),
  brief: { version: 1, story: '', narrative:'', music:'', priorities: '', people: '', references: '', lighting: '', approved: false }, stage: 'Pre-production',
  tasks: [{ id: `${id}-brief`, title: 'Confirm the creative brief with the couple', complete: false }, { id: `${id}-lighting`, title: 'Coordinate lighting and portrait windows with the event team', complete: false }, { id: `${id}-scope`, title: 'Agree coverage, delivery and hosting scope', complete: false }],
  settings: { downloads: true, guestUploads: true, sharedGallery: true, language: 'en', largeText: false, notifications: false }, reviewComments: [], reviewApproved: false, reports: [],
});
export const createDemoState = (): DemoState => ({ weddings: { savage: initialWedding('savage'), sample: initialWedding('sample') }, enquiries: [
  { id: 'sample-enquiry-1', label: 'Sample enquiry 01', city: 'Location pending', service: 'Photography & films', status: 'New', synthetic: true },
  { id: 'sample-enquiry-2', label: 'Sample enquiry 02', city: 'Location pending', service: 'Wedding films', status: 'Discovery', synthetic: true },
] });
export function eventDate(startAt?: string, language = 'en') { return startAt ? new Intl.DateTimeFormat(language === 'hi' ? 'hi-IN' : 'en-IN', { timeZone: 'Asia/Kolkata', weekday: 'long', day: 'numeric', month: 'long' }).format(new Date(startAt)) : 'Date to be agreed'; }
export function eventTime(startAt?: string, language = 'en') { return startAt ? `${new Intl.DateTimeFormat(language === 'hi' ? 'hi-IN' : 'en-IN', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', hour12: true }).format(new Date(startAt))} IST` : 'Time to be agreed'; }
export function calendarText(wedding: Wedding, eventId?: string) {
  const escape = (value: string) => value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
  const events = wedding.events.filter(event => event.startAt && (!eventId || event.id === eventId));
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Jashnama//Wedding Invitation//EN', 'CALSCALE:GREGORIAN', ...events.flatMap(event => ['BEGIN:VEVENT', `UID:${event.weddingId}-${event.id}@jashnama-preview`, 'DTSTAMP:20261001T000000Z', `DTSTART:${event.startAt!.replace(/[-:]/g, '').replace('.000', '')}`, ...(event.endAt ? [`DTEND:${event.endAt.replace(/[-:]/g, '').replace('.000', '')}`] : []), `SUMMARY:${escape(event.name)}`, `LOCATION:${escape(event.venue || `${wedding.city} · Venue details coming soon`)}`, `DESCRIPTION:${escape(`${wedding.title} ${wedding.hashtag}. Times shown in Asia/Kolkata. End time not supplied.`)}`, 'END:VEVENT']), 'END:VCALENDAR'].join('\r\n');
}
