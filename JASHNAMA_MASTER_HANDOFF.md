# Jashnama — Master Product, UI and Data-System Handoff

**Version:** 1.0 · **Prepared:** 28 October 2026, Asia/Kolkata  
**Purpose:** Move the existing project to another computer or development agent without losing product decisions, client-side software requirements, implementation history or the production data-management plan.

> **Start here:** Continue the existing Jashnama application. Do not rebuild it from scratch. The public website and interactive workspaces exist; most private workflows still use in-memory demonstration data. A deployed interface is not evidence that authentication, private cloud storage, messaging or face matching is live.

This file is self-contained for planning: the consolidated handoff comes first, followed by embedded snapshots of the original briefs and detailed supporting documents. Source code, actual images and credentials must be transferred separately. Nothing in this document is a secret or a substitute for the application repository.

## Contents

1. [Quick start and verified migration status](#start)
2. [Decision precedence and working rules](#rules)
3. [Brand, positioning and public website](#brand)
4. [Integrated client-side software](#client)
5. [Guest experience and WhatsApp journey](#guest)
6. [Studio workflow and production management](#studio)
7. [Implementation status and source map](#status)
8. [Data-management architecture](#data)
9. [Identity, access and privacy](#access)
10. [Uploads, processing and delivery](#media)
11. [API contracts and integrations](#api)
12. [Retention, backup, recovery and costs](#operations)
13. [Exact wedding content](#seed)
14. [New-system setup and deployment](#migration)
15. [Implementation roadmap and acceptance gates](#roadmap)
16. [Copy-ready instructions for the next developer or AI](#next-agent)
17. [Complete source-planning archive](#archive)

<a id="start"></a>
## 1. Quick start and verified migration status

| Item | Recorded value / evidence |
| --- | --- |
| Product | Jashnama — wedding films, photography and an integrated wedding experience |
| Current public deployment | https://jashnama.vercel.app |
| Existing separate wedding deployment | https://the-savage-wedding.vercel.app — do not modify or migrate without explicit instruction |
| Configured Git remote | https://github.com/arbaaz-knockknock/Jashnama.git |
| Local baseline inspected for this handoff | `2c7ac61` — Add personalized couple planning and WhatsApp ingestion boundary |
| Previous implementation commits | `b3b2b4d` — interaction/enquiry refinement; `c798a17` — original integrated website and previews |
| Original local checkout | `/Users/arbaaznasser/Documents/Jashnama` |
| Vercel project | `jashnama`, team/scope `kkk-cy-s2-cyos` |
| Vercel project identifier | `prj_KxjUpe4NoU1ONpMNaFmo2L63Fh8l` |
| Latest deployment recorded in this chat | `dpl_DNqwtNYQL7MgEN94wo3rxmG2QYA4`, reported READY after the personalization pass |
| Repository state at start of this handoff | Clean working tree at the local baseline above |
| Remote check on 28 October 2026 | Both `git ls-remote origin refs/heads/main` and `git ls-remote --heads origin` completed successfully but returned no branch refs |

**Publication update — 28 October 2026:** The owner explicitly authorized publishing the application and this master handoff to the existing public GitHub repository. The earlier empty-remote check above records the state before publication. Use `main` at https://github.com/arbaaz-knockknock/Jashnama and verify its latest commit before moving systems. Historical appendix statements about pending publication approval are superseded by this update.

The original master prompt and positioning brief are excluded by `.gitignore`, as are original brand-board images, `.env*` secrets, `.vercel/`, `artifacts/`, dependencies and build output. The textual plans are embedded below so they travel with this file. The original raster brand board and any future approved media still need separate copying.

### Fast orientation

- **Use the software:** `/` → `/your-wedding` → couple, guest or studio preview.
- **Inspect client functionality:** `src/components/workspace.tsx` and `src/components/personalized-experience.tsx`.
- **Inspect current state:** `src/components/demo-context.tsx`, `src/lib/demo.ts`, `src/lib/contracts.ts`.
- **Inspect the two server integrations:** `src/app/api/enquiries/route.ts` and `src/app/api/whatsapp/webhook/route.ts`.
- **Next substantial engineering milestone:** authenticated persistent client collaboration and private media storage, not another visual redesign.

<a id="rules"></a>
## 2. Decision precedence and working rules

When documents disagree, apply this order:

1. The owner's latest explicit instructions and confirmed business facts.
2. The current source code for what is actually implemented; this consolidated document for planned intent and known limitations.
3. Latest personalization requirements and the UI/UX refinement brief.
4. The original master prompt and positioning brief as historical planning context.
5. Earlier implementation notes and optional provider estimates.

The archive retains old instructions verbatim for completeness. Statements such as “build the UI now,” “no adapters exist,” old review-tab names, older test counts or historical cost estimates must not override the newer implementation inventory here. Proposed limits, retention periods, delivery dates and provider choices are not agreed client terms.

Preserve the existing routes, visual identity, working interactions, media labels and multi-wedding separation. Use the installed stack and lockfile. Do not introduce dependencies, create replacement projects, change account permissions or provision paid infrastructure merely to complete a handoff. Use provider documentation and current account evidence when live integration begins. Do not ask the owner to paste secret keys into chat.

<a id="brand"></a>
## 3. Brand, positioning and public website

### Business and service promise

Jashnama is a wedding media studio serving couples and families. The service spans story discovery, creative planning, shoot production, photography, filmmaking, editing, colour, sound, feedback, organised delivery and an agreed hosting period. “Your Wedding” is a client-navigation label, not a separate software brand.

Cinematic visuals and storytelling are central. Work closely with the event curator/planner, lighting team and production team on atmosphere, timing, portraits and camera needs. Do not imply that Jashnama provides decor, catering, venues, hospitality or complete event planning unless the owner explicitly adds those services.

The owner confirmed professional cinematic experience with **Knock Knock**. Use it subtly as credibility for craft and production experience. Do not invent years, awards, client counts, testimonials, credits or claim that concept images are Knock Knock/Jashnama commissioned work.

### Brand system

| Element | Current direction |
| --- | --- |
| Signature | Celebrations. Directed. |
| Public category | Wedding films & photography |
| Wordmark descriptor | Wedding Cinema & Visual Direction |
| Charcoal | `#111111` |
| Warm ivory | `#F5EFE6` |
| Burnished gold | `#B38A4A` |
| Deep oxblood | `#5B1E26` |
| Display / UI fonts | Playfair Display / Montserrat, locally hosted packages |
| Wordmark and favicon | Provisional typographic treatments; approved vector assets remain pending |
| Photography | Cinematic, emotional, natural proportions, considered crops and visible faces |

Three optimised WebP concept images exist under `public/images/`: `hero.webp`, `ritual.webp`, `lighting.webp`. They are generated placeholders, not photographs of Vedant/Sakshi or completed client weddings. Preserve concept labels until authentic, approved replacements are supplied. Original brand-board contact details were not treated as verified business contacts.

### Routes and conversion

| Route | Purpose |
| --- | --- |
| `/` | Immediate service clarity, cinematic opening, selected visuals, collaboration, process and enquiry |
| `/films` | Curated film direction and concept previews; replace with approved playable films later |
| `/photography` | Photography filters and responsive concept viewer |
| `/experience` | Discovery → preparation → capture → post-production → delivery |
| `/services` | Explain confirmed media-production scope without invented packages or prices |
| `/about` | Approach and restrained Knock Knock experience reference |
| `/enquire` | Qualified enquiry, draft recovery, validation and configured contact handoff |
| `/privacy` | Current data handling, concept credits and preview boundaries |
| `/your-wedding` | Entry for couples and guests; future invitation exchange and recovery |

Stories/case studies remain deferred until authentic approved content is available. Primary CTA: “Tell us about your wedding.” Keep returning-client access easy to find.

### UI and interaction standard

Maintain the cinematic editorial layout. Warm solid surfaces remain behind copy/forms. Liquid glass is restrained to navigation, mobile menu, media controls and the homepage film CTA. Do not apply glass to every card. Preserve contrast, opaque fallbacks and reduced-transparency support.

Current motion uses CSS and Web Animations API with 120 ms micro, 240 ms standard and 420 ms cinematic timing. Prefer opacity and transform, selective one-time reveals and short transitions. Keep scrolling native, browser Back/Forward meaningful, content visible without animation, and reduced-motion preferences respected. No new WebGL or animation framework is required.

Use labelled controls, visible keyboard focus, native dialog focus management, Escape dismissal, comfortably sized touch targets and readable mobile inputs. Preserve existing English/Hindi guest controls and large text; full Hindi translation of every advanced control remains incomplete.

<a id="client"></a>
## 4. Integrated client-side software

The couple's product is not just a gallery. It is the continuing relationship with Jashnama before, during and after the wedding.

### Our journey and creative brief

- Two separate audio contributions: the couple's relationship journey, and how they want that story told.
- Seven current answer areas: story; storytelling direction; music; priorities; important people/family photographs; visual references; curator/lighting notes.
- Every answer accepts text and optional voice/music/reference attachments.
- Current attachment formats: supported audio MIME types, JPEG/PNG/WebP, PDF and MP4; native audio/video playback and image/PDF viewing.
- Current local-preview limits: 25 MB/file, 30 attachments and 150 MB total per wedding. These are not server-enforced production quotas.
- Save/version the brief; changes to attachments invalidate previous preview approval. In production, immutable versions must capture the attachment set, not just the text fields.
- Music uploads/links are references; publishing music in films requires an appropriate rights/licensing workflow.

Current attachments use browser object URLs and in-memory state. They survive internal route changes during the visit and disappear after reload/reset/removal; they are not received by the studio on another device. Production must replace these URLs with authorised asset records and persistent storage while preserving the UI.

### Coverage plan

For every event, provide counts and eventual assignments for cinematographers, photographers, drone operators, creative producers and line producers, plus assistants, sound crew or other roles in notes. Include names, responsibilities, time windows, portrait plans and curator/lighting coordination as the production model matures.

Current counts are shared preview planning preferences. Production must distinguish **requested → proposed → confirmed → changed/canceled** assignments, record who confirmed them, and avoid presenting unbooked crew as available or committed.

### Collection and feedback CRM

Replace the earlier single “Film review” experience with **Feedback & reviews** across films and photographs. The current sample deliverables are Wedding teaser, Highlight film, Wedding feature and Photograph collection; actual deliverables must come from each agreed scope.

Required behavior:

1. Each deliverable has its own versions, media, review status and conversation.
2. Comments identify author and version, with optional film timecode or photo/frame reference.
3. Studio replies remain in the same conversation. Notes can be resolved or reopened.
4. New versions retain history and require fresh approval. Approval applies to an exact immutable version.
5. Collection progress updates from the same records as studio delivery; avoid duplicate disconnected status stores.
6. Private photo shortlists, submission, review rounds, due dates, approved downloads and final handover remain part of the journey.
7. Separate internal studio notes from comments visible to the couple. Notification delivery must be tracked separately from comment creation.

Current comments, approvals, crew plans and selections are in-memory demonstrations. They need server persistence, access enforcement, conflict checks and reliable cross-device updates before real client use.

### Enquiry and WhatsApp conversion

Offer Photography, Wedding films, Jashnama app and The whole experience. The whole experience includes the three service areas; it does not imply an invented price or automatic booking.

Preserve optional date/location/budget/referral fields, separate marketing consent, inline errors, first-error focus, retained drafts during navigation, copy/download/edit receipt and clear retry handling. A verified WhatsApp number enables a prefilled receipt handoff so the prospect chooses to send. Without that number, do not fabricate a destination or claim delivery. An accepted enquiry is not a confirmed booking or a gallery membership.

<a id="guest"></a>
## 5. Guest experience and WhatsApp journey

### Guest interface

Keep invitation/itinerary, exact calendar starts, event-based collections, favourites, contribution history, optional contributor display names, personal photo results and authorised downloads easy to access. Separate:

- **Your memories:** the full collection shared with that guest, organised/filterable by event and source.
- **Photos of me:** private, scoped results from an optional face-search session.
- **My contributions:** uploads owned by that guest, including processing/moderation status.
- **Share on WhatsApp:** a guest-initiated chat path that does not require opening the website to contribute.

The “full photo dump” means the approved collection that the guest is permitted to see. It must not expose RAW archives, hidden images, private family albums or unmoderated submissions. Contributor tags use an approved display alias, never a public phone number by default.

### Desired production WhatsApp flow

1. Guest opens the official business chat from a valid private invitation/deep link, or requests an invitation.
2. Verify invitation and create a wedding-scoped guest session. If multiple weddings are available, let the guest choose explicitly.
3. Collect a preferred contributor alias and relevant sharing permission; choose an event.
4. Guest sends photos or permitted videos as WhatsApp media. A webhook enqueues processing; a worker retrieves and stores the files privately.
5. Acknowledge actual processing state, then moderate. Approved contributions appear under the correct wedding/event with permitted uploader credit.
6. Separately offer optional selfie discovery with a clear purpose and consent. Never publish that query selfie as a gallery contribution.
7. Search only the authorised wedding/shared albums and return private expiring result links. Display partial/unavailable states honestly.
8. Support retry, unsupported files, event correction, consent withdrawal, deletion and a human support path.

Current website flows demonstrate these journeys. The signed webhook entry point exists, but its durable worker, cloud ingestion, invitation state machine, outbound messaging and face service are not implemented/connected in this checkout. A copy/open-WhatsApp button does not itself create cloud uploads.

<a id="studio"></a>
## 6. Studio workflow and production management

Maintain one connected operational chain:

**Enquiry → discovery → proposal → agreed booking → wedding/project → brief → crew/coverage → capture → ingest → moderation → post-production → review → delivery → archive/retention.**

Studio needs qualified leads, assigned producers, booking evidence, scope/deliverables/revision allowances, tasks, milestones, crew assignments, couple brief/reference access, professional batches, moderation, internal editing status, client feedback, approvals, storage/usage and integration health.

Current studio tabs: Production, Enquiries, Creative brief, Media & moderation, Delivery & reviews, Access & settings. Lead and media actions are simulations, not real bookings, customer messages or security grants. Keep synthetic leads separate from actual prospect contact data.

Production must support assigned photographers/videographers, producers, editors, moderators and administrators. A contributor may upload without having publication or unrestricted client-data access. Studio access is also wedding-scoped; a privileged support action should be audited.

<a id="status"></a>
## 7. Implementation status and source map

### Status legend

- **Implemented UI:** working interaction in the existing application, possibly backed only by fixtures.
- **Adapter implemented:** server code exists; actual service operation depends on external configuration.
- **Planned:** architecture/contract exists, but no live implementation is established.

| Capability | Verified local implementation boundary |
| --- | --- |
| Public website, motion/glass, responsive navigation | Implemented UI and previously deployed |
| Enquiry validation, drafts, receipt, contact links | Implemented UI; contact destinations need verification/configuration |
| Enquiry server handoff | Adapter implemented, disabled by default; no durable receiver established |
| Couple recordings/references/crew/collection/feedback | Implemented UI, in-memory session state |
| Guest itinerary/gallery/favourites/contributions | Implemented UI; local upload simulation |
| Photos of me | Predetermined sample results; no actual recognition |
| Studio leads/tasks/moderation/reviews | Implemented UI using shared demo state |
| WhatsApp verification/signature/queue forwarding | Adapter implemented, disabled by default |
| WhatsApp media download and gallery ingestion worker | Planned; not implemented |
| Authentication and private invitations | Planned; role switcher is a public preview control |
| Database and private object storage | Planned; no schema migrations or live client persistence established |
| Video encoding/playback, originals and archive delivery | Planned; no real films/private originals supplied |
| Biometric search/indexing | Planned; no provider connected or measured accuracy established |
| Notifications, payments, automated quotes | Not connected; payments/accounting require separate scope |

### Source ownership map

| Location | Responsibility |
| --- | --- |
| `src/app/*/page.tsx` | Public pages and wedding/couple/studio route composition |
| `src/app/layout.tsx` | Shared shell, demo/enquiry providers and motion |
| `src/app/globals.css`, `src/app/refinements.css` | Public tokens/layout and shared refinement/personalisation styles |
| `src/components/site-shell.tsx`, `editorial.tsx` | Navigation, footer, public cards/dialogs, process and FAQs |
| `src/components/workspace.tsx`, `workspace.css` | Guest/couple/studio screens and preview interactions |
| `src/components/personalized-experience.tsx` | Brief attachments, crew planner, collection progress, feedback hub and WhatsApp guest panel |
| `src/components/demo-context.tsx` | In-memory shared wedding state and attachment URL cleanup |
| `src/components/enquiry-form.tsx`, `enquiry-state.tsx` | Enquiry UI and visit-scoped draft |
| `src/lib/demo.ts`, `contracts.ts` | Fixtures, calendar helpers, current types and proposed service contracts |
| `src/lib/brand.ts`, `motion.ts` | Brand/contact configuration and timing tokens |
| `src/lib/enquiry.ts` | Shared enquiry input validation/formatting |
| `src/lib/whatsapp-ingress.ts` | Webhook signature verification and scoped message extraction |
| `src/app/api/enquiries/route.ts` | Optional enquiry receiver adapter |
| `src/app/api/whatsapp/webhook/route.ts` | Optional Meta verification and queue forwarding |
| `docs/backend-contracts.ts` | More detailed proposed backend specification, not an implemented API |
| `tests/*.test.mjs` | Domain, enquiry and webhook checks |
| `public/images/`, `src/app/icon.svg` | Current visual assets |

<a id="data"></a>
## 8. Data-management architecture

### Current storage reality

`DemoProvider` owns `DemoState`, with separate `savage` and `sample` wedding records. A wedding currently contains media, attachments, crew plans, deliverables/comments, personal-match IDs, favourites, selections, brief, tasks, settings, project stage and reports. Enquiry drafts use a separate context. These values are not a production database, do not survive reload and do not synchronise between users or computers.

A guest upload currently adds a placeholder record rather than an uploaded original. Selfie results are samples. The first production task is to replace reads/writes at this boundary with authenticated services while preserving presentation and truthful loading/error states.

### Proposed provider architecture — not provisioned

| Layer | Original preferred direction | Responsibility |
| --- | --- | --- |
| Web | Next.js on Vercel | Public/client/studio UI and small authenticated request handlers |
| Identity and metadata | Supabase Postgres/Auth; Mumbai preferred | Accounts, membership, relational records, policy enforcement |
| Original media | Private Amazon S3; Mumbai preferred | Originals, attachments and derived objects |
| Processing | SQS + Lambda, container worker where necessary | Durable processing, retries, conversions, indexing and cleanup |
| Face matching | Amazon Rekognition Image; Mumbai preferred | Wedding-scoped indexing/search behind an adapter |
| Photo delivery | CloudFront/private origin | Authorised previews and downloads |
| Video | Cloudflare Stream, subject to residency review | Adaptive playback; preserve source originals separately |
| Messaging | Official Meta WhatsApp Cloud API | Inbound guest flow and permitted outbound service messages |

These are retained planning preferences, not freshly verified provider recommendations or live accounts. Confirm current availability, regions, API versions, cost and processing terms before implementation. R2 was a possible later evaluation, not a second required original store. Keep internal IDs independent of provider IDs.

### Logical records and relationships

All tenant-owned records need `studio_id`, `wedding_id` where applicable, immutable ID, timestamps, ownership and appropriate version/state fields. Enquiries may precede a wedding.

| Entity group | Essential contents |
| --- | --- |
| Studios / memberships | Configuration, staff identity/role, active status and expiry |
| Enquiries / activity | Contact preference, services, date/city, consent, status, assignee and retention |
| Scopes / bookings | Agreed services, deliverables, revision allowances, hosting terms and booking evidence |
| Weddings / events | Couple names, slug, hashtag, timezone; event start/end/venue/focal point/order |
| Invitations / guest sessions / wedding memberships | Hashed token, role/grants, verification, expiry, revocation and guest session |
| Briefs / versions / answers | Immutable snapshot, seven question areas, author and approval |
| Reference attachments | Brief version/answer, private media ID, purpose such as voice/music/image, owner, MIME/bytes and rights notes |
| Coverage / crew assignments | Event, role, requested/confirmed count, assigned person, time window and confirmation status |
| Tasks / milestones | Assignee, dependencies, client/internal visibility, agreed due date and completion |
| Albums / album-media links | Wedding, title, access group, event mapping and ordered same-wedding assets |
| Media / variants | Wedding/event/contributor, channel, source, MIME/size/checksum, storage key, dimensions/duration, rights and independent states |
| Upload sessions / items | Reserved quota, multipart state, expected checksum, expiry, retry/cancel/completion |
| Jobs / webhook inbox | Durable dedupe key, provider event/message ID, attempts, safe failure code and acknowledgement state |
| WhatsApp conversations | Business account/phone, verified guest, scoped wedding/event, consent step and minimal sender identifier |
| Face partitions / index records | Wedding, provider collection/generation, media mapping, readiness and deletion |
| Search sessions / results | Actor, consent version, permitted scope, partition completeness, expiry and deduplicated media |
| Favourites / selection sets | Wedding, private owner, media, version and submission |
| Deliverables / versions / comments / approvals | Agreed type, immutable version/media, author, optional timecode/frame, resolved state and exact-version approval |
| Consents / communications | Subject, wedding, purpose, notice version, granted/withdrawn time and channel preferences |
| Moderation / reports | Reporter/reason, reviewer, decision, timestamps and visibility action |
| Notifications / receipts | Recipient/purpose, dedupe key, queued/sent/delivered/failed/canceled and provider reference |
| Portfolio permissions | Independent public-use evidence and explicit marketing publication state |
| Usage / entitlements / retention | Wedding limits, metered quantity/unit, policy version and expiry anchor |
| Deletion requests / audits | Authorised scope, cleanup across providers/backups, actor/action and redacted evidence |

### Required database invariants

- Enforce wedding ownership in foreign keys/policies, including event-media, album-media, selections, reviews, jobs and face results. Client-side filtering is insufficient.
- One original may appear in several albums within the same wedding without duplicating bytes.
- Use uniqueness for favourites, provider message IDs and scoped idempotency keys. Retries must not create duplicate media, notifications or usage charges.
- Keep source, processing, moderation, publication, access and approval independent. “Uploaded,” “indexed” or “professional” must not mean “published.”
- Use optimistic concurrency for brief/coverage/selection changes and immutable deliverable versions for reviews.
- Use cursor pagination with a stable time/ID tie-breaker and indexes for real tenant/membership/event/publication queries. Avoid loading 30,000 assets or issuing one variant lookup per row.
- Use controlled schema migrations, separate staging/production data, reproducible synthetic seeds and tested rollback/recovery. Never copy real private records into public fixtures.

### UI-to-service integration map

| User action | Persistent records / service work | UI completion condition |
| --- | --- | --- |
| Save story or voice reference | Brief version + verified attachment asset | Server confirms saved version; failed upload remains retryable |
| Change coverage | Coverage revision and assignment request | Saved preference; confirmation shown only after authorised studio action |
| Add feedback / approve | Comment or exact-version approval | Persisted receipt; notification delivery shown separately |
| Upload guest photo | Upload session → verified original → jobs | Stored/processing status, never automatic publication |
| Send WhatsApp media | Durable webhook inbox → scoped conversation → ingestion | Acknowledge accepted job, then actual processing/moderation outcome |
| Find my photos | Consent + search job/results | Partial or complete according to searched partitions and current permissions |
| Download collection | Authorised archive job | Expiring signed link after archive is ready |
| Request deletion | Deletion workflow and provider cleanup | Distinguish hidden, deleted from active systems and backup-expiry pending |

<a id="access"></a>
## 9. Identity, access and privacy

Public pages and public enquiries do not grant wedding membership. The current couple/guest/studio URLs are public demonstrations; `noindex`, hidden buttons and a role dropdown are not authentication.

Production roles: guest; couple/authorised family collaborator; assigned photographer/videographer; producer/project lead; assigned editor; moderator when delegated; studio owner/admin; narrowly authorised operations support.

Guests see only their permitted shared media and own submissions/search results. Couples see their own brief, agreed production information, reviews and authorised family collections. Contributors upload to assigned events; publication is separately granted. Editors/producers see only assigned projects and relevant fields. Do not expose internal costs, private staff notes or other couples' references to clients.

Apply policy enforcement in database queries, storage signing, workers, callbacks, caches and search, not just the router. Test revoked access, expired invitations, stale sessions, guessed IDs and cross-wedding writes. A person may attend several weddings without a global biometric identity linking them.

Keep consent for enquiry handling, marketing messages, contribution sharing, face processing and public portfolio use separate. Face search is optional discovery, not identity verification. Provide ordinary browsing without a selfie. Define guardian handling and depicted-person permissions before launch. Set privacy/support contacts and retention terms with the owner; no compliance claim follows from adding a checkbox.

<a id="media"></a>
## 10. Uploads, processing and delivery

### Web uploads

Authenticated scope → reserve quota → issue narrow expiring direct-upload authorisation → resumable/multipart transfer → verify stored size/checksum/type → persist original → queue derivatives/video/index jobs → moderation → authorised publication.

Avoid routing large photo/video bodies through normal Vercel handlers. Validate on the client for usability and on the server/worker for enforcement. Support supported-format explanation, duplicates, pause/retry/cancel, expired sessions, abandoned-part cleanup, network interruptions, orientation handling, metadata stripping for guest-facing variants and reconciliation.

Current guest preview limits are 30 MB/photo, 500 MB/video, 120 seconds/video and 30 selected files. Initial production concurrency of 2–3 phone files is a proposal. Professional batches need separate allowances, manifests and reliable resume/reconciliation. RAW archives are outside the initial default scope.

### Face search

Index eligible photos once into wedding-scoped collections/partitions. Preserve media-to-face mappings and index generations. Search all relevant partitions with bounded concurrency, deduplicate media and filter against current access/publication. Return searched/total partition counts; never call truncated results complete. Revoke cached results when permissions, publication, index generation or deletion changes.

Do not use query selfies for model training, public albums or persistent alerts. Persistent face references are disabled initially. Indexing quality and accuracy need evaluation on a consented representative set, including group shots and low light; no current accuracy is claimed.

### Delivery

Use responsive image variants, lazy thumbnails and fixed aspect ratios. Load films on intent with a poster; avoid autoplay audio. Approved video versions need adaptive playback/captions where applicable. Original downloads and archives require current access checks and expiring URLs. Preserve independent photographer backups. Couple approval and private sharing do not automatically authorise public portfolio use.

<a id="api"></a>
## 11. API contracts and integrations

### Existing server routes

**`POST /api/enquiries`** — disabled unless explicitly configured. Shared validation, same-origin JSON handling, bounded 16 KB body, honeypot, optional receiver token, eight-second upstream timeout and no reflected upstream body. Six attempts/minute and ten-minute idempotency use bounded per-instance memory; they are not distributed enforcement or durable deduplication. Receiver must durably accept/deduplicate before replying. A 202 means enquiry acceptance, never booking.

**`GET /api/whatsapp/webhook`** — verification-token challenge handler. **POST** — validates HMAC-SHA256 signature over the body, caps body at 1 MB, filters the configured business phone, extracts supported messages and forwards to an authenticated HTTPS queue. It acknowledges relevant messages only after the queue returns `{ "accepted": true }`; failures return 503. The downstream worker and actual media/face providers remain absent.

### Proposed production APIs

Preserve typed interfaces in `src/lib/contracts.ts` and `docs/backend-contracts.ts`; add versioned routes as services are implemented:

- Invitation exchange/recovery and scoped sessions.
- Wedding/events/albums/media with bounded cursor queries.
- Upload create/parts/complete/abort/status.
- Brief versions, reference attachment association, coverage revisions and milestones.
- Private favourites/selection sets and submitted revisions.
- Deliverable versions, review comments, resolution, approvals and client-visible status.
- Face-search create/status/cancel and purpose-specific consent withdrawal.
- Moderation/reporting and authorised publication.
- Download/archive jobs and expiry.
- Studio enquiries, booking conversion, assignment, settings and usage.
- Deletion requests, audit trail and replay-safe provider callbacks.

Resolve actor and tenant server-side. Bind idempotency to actor/wedding/operation/normalised input. Reject stale versions and same-key/different-payload submissions. Use explicit retryable error codes and bounded retries. Never fetch arbitrary user-supplied reference URLs automatically.

### Configuration inventory — names only

| Variable | Exposure / use |
| --- | --- |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Verified public enquiry email, embedded at build time |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Verified public international digits, embedded at build time |
| `ENQUIRIES_ENABLED` | Server flag; false until receiver verified |
| `ENQUIRY_WEBHOOK_URL`, `ENQUIRY_WEBHOOK_TOKEN` | Server-only receiver endpoint and optional token |
| `WHATSAPP_INGRESS_ENABLED` | Server flag; false until durable queue/worker ready |
| `WHATSAPP_VERIFY_TOKEN`, `WHATSAPP_APP_SECRET` | Server-only Meta verification/signature credentials |
| `WHATSAPP_PHONE_NUMBER_ID` | Server-side configured business phone identifier |
| `WHATSAPP_QUEUE_URL`, `WHATSAPP_QUEUE_TOKEN` | Server-only private durable queue handoff |

These are the current keys; future identity/storage/recognition/video secrets must be added deliberately after provider selection. Keep real values in local/deployment secret management. Do not infer account connections from plugin availability or checked-in variable names.

<a id="operations"></a>
## 12. Retention, backup, recovery and costs

### Proposed retention — owner approval required before enforcement

| Data | Planning baseline |
| --- | --- |
| Unbooked enquiry | 90 days after last meaningful contact, subject to confirmed business policy |
| Query selfie | Discard after search; proposed cleanup target within 15 minutes, including failure cleanup |
| Persistent face reference | Disabled initially |
| Wedding face index | 90 days after confirmed final ceremony anchor |
| Originals and derivatives | 12 months after agreed final ceremony anchor, subject to hosting contract |
| Temporary archive | Proposed 24 hours; regenerate on authorised request |
| Briefs/approvals/booking records | Separate business-record schedule |
| Routine diagnostic logs | Proposed 30 days, redacted |
| Backup recovery window | Proposed maximum 35 days, with deletion tombstones reapplied after restore |

No final ceremony end has been supplied. Do not invent an expiry timestamp from the last event's start. Hosting expiry must involve agreed terms, advance notices and an export/extension path; do not silently erase memories.

Deletion: verify authority → hide/revoke and cancel affected work → delete objects/variants/video/index/query/results/archives → track provider outcomes/retry failures → handle backup expiry → retain minimal authorised audit evidence.

Define business-approved RPO/RTO, independent backups and restore tests. A storage bucket is not a verified backup plan. Audit restores so withdrawn/deleted assets are not republished. Monitor queue age, failed uploads, processing throughput, search completeness, message failures, storage/egress and per-wedding cost. Keep tokens, signed URLs, faces and personal stories out of logs.

Cost model must include web/database/auth, originals/derivatives/backups, worker processing, face indexing/storage/search fan-out, CDN/egress/archives, video encoding/storage/viewing, WhatsApp category/market charges, monitoring, staff tools, moderation/support/engineering and taxes. Use dated official quotes and pilot measurements. Historic illustrative totals are not current quotations. The complete worksheet is retained in the archive.

<a id="seed"></a>
## 13. Exact wedding content

**The Savage Wedding · Vedant & Sakshi · #TheSavageWedding · Lucknow · 11–13 December 2026 · Asia/Kolkata.** Do not invent surnames. Venue, detailed addresses, end times, dress codes, transport and support contacts are pending.

| ID | Event | Local start | UTC start |
| --- | --- | --- | --- |
| `gujarat` | Rangilo Gujarat Bhaat | 11 Dec 2026, 7:00 PM IST | `2026-12-11T13:30:00Z` |
| `haldi` | Krishna Nagri Haldi | 12 Dec 2026, 10:00 AM IST | `2026-12-12T04:30:00Z` |
| `royal` | The Royal Affair | 12 Dec 2026, 4:00 PM IST | `2026-12-12T10:30:00Z` |
| `lunch` | Bridgerton Lunch | 13 Dec 2026, 10:00 AM IST | `2026-12-13T04:30:00Z` |
| `raas` | Rave & Raas | 13 Dec 2026, 7:00 PM IST | `2026-12-13T13:30:00Z` |

Calendar exports must preserve these starts without fabricated ends/durations. Real Royal Affair/frontal varmala hero and preferred Rave & Raas assets were requested but not supplied to this checkout; preserve faces/crops when those assets arrive.

A separate fictional Sample Wedding (`sample-wedding`, Sample A & Sample B) has independent fixtures and unknown dates. Do not copy Savage media, personal data or invented schedule into it. Production must replace the two-value demo `WeddingId` union with persistent IDs through a deliberate migration.

<a id="migration"></a>
## 14. New-system setup and deployment

### Transfer checklist

- [ ] Clone the GitHub repository on the other system and confirm that this master Markdown file and the complete application source are present.
- [ ] Include `src/`, `public/`, `tests/`, `docs/`, package/lock/config files, `.env.example`, `.gitignore` and repository history where available.
- [ ] Copy the original raster brand board separately. The original textual briefs are already embedded in this document.
- [ ] Transfer approved original media separately when available. A Markdown file cannot contain the real media library.
- [ ] Recreate secrets through the owner's authorised password/secret management. Do not email or commit `.env` files.
- [ ] Do not copy machine-specific `node_modules`, `.next`, `.pnpm-store`, absolute runtime paths or the old machine's CLI credentials.
- [ ] Keep the original working copy until the other system runs and verifies successfully.

### Runtime

At the inspected revision: Node.js **24.x**, pnpm **11.25.0**, Next.js **16.3.7**, React/React DOM **19.3.0**, TypeScript native compiler **7.0.2** plus the official TypeScript 6 API compatibility alias **6.0.2** for lint tooling. Do not remove that compatibility setup without checking tool support. Exact versions live in `package.json` and `pnpm-lock.yaml`.

Install Node/pnpm from their normal trusted distribution on the new computer. From the transferred project directory:

```sh
node --version
pnpm --version
pnpm install --frozen-lockfile
```

Create `.env.local` from `.env.example` using your operating system's file-copy function. Leave integration flags false and contact fields blank unless verified values are available. Then:

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm dev
```

Open `http://localhost:3000`. To inspect a production build, stop the development server, run `pnpm start`, and check the same port. The original computer used bundled runtimes only because normal shell tools were unavailable; those absolute paths are not project requirements.

### Git validation

```sh
git remote -v
git branch --show-current
git log -5 --oneline
git status --short
git ls-remote --heads origin
```

Compare the transferred code against baseline `2c7ac61` or a verified later descendant. Do not reset or force-push newer work to match this snapshot. The owner authorized public publication of the app and this master on 28 October 2026. This master includes the internal textual planning; source prompt files and the raster brand board remain separately ignored. Confirm the remote `main` commit matches the intended handoff revision.

### Vercel

Use the existing **jashnama** project in the correct account. Inspect project ownership before linking; do not link to **the-savage-wedding**. Recreate required environment values in the correct deployment environment, using separate staging and production credentials. Contact `NEXT_PUBLIC_*` changes require a rebuild.

When authorised to deploy, use the installed/current Vercel CLI to link the existing project, build and publish, then verify deployment READY status and https://jashnama.vercel.app. A cloned checkout alone does not transfer Vercel environment variables or account access. Do not treat this documentation request as permission to redeploy.

### Smoke-test checklist

- [ ] Public navigation, mobile menu, keyboard focus, photography filters, previews and enquiry validation.
- [ ] Both new service options; receipt edit/copy/download; correct configured WhatsApp destination.
- [ ] Story/narrative audio upload, all seven brief question attachments, playback, removal and expected reload behavior.
- [ ] Couple/studio crew-plan agreement; notes/comments/version history and exact-version approval.
- [ ] Guest itinerary/ICS, event filters, contributions, uploader alias, optional sample search and personal-results clearing.
- [ ] Independent state for both sample weddings; no private media in public fixtures.
- [ ] Desktop and 360/390/430 px mobile layouts, tablet, zoom, keyboard, Hindi/large text, reduced motion and actual target browsers.

The previous implementation pass recorded seven passing tests, lint/typecheck/build success and specific browser interactions. Those results are historical; rerun on the new system. Safari/Firefox, physical mobile devices, live provider delivery, production load, biometric accuracy and production tenant isolation have not been proven by the existing tests.

<a id="roadmap"></a>
## 15. Implementation roadmap and acceptance gates

### Gate 0 — safe transfer

Working checkout and full planning present; correct remote/account established; clean install and checks pass; known preview limitations preserved. No new visual redesign required.

### Gate 1 — persistent couple/studio collaboration

Choose/confirm provider accounts and region; create version-controlled schema migrations; implement verified identity, invitations, memberships, row-level/server policy and private attachment storage. Replace demo reads/writes for briefs, crew, reviews and collections with services. Prove save/reload/cross-device persistence and two-wedding isolation. Keep demo mode explicit and separate.

### Gate 2 — reliable media library

Direct/multipart uploads, verified objects, quota reservation, durable processing, thumbnails/video derivatives, moderation, event/album organisation and controlled delivery. Test interrupted batches, duplicates, unsupported files, expired credentials, hidden/private assets, deleted records and worker retries. Surface actual progress and recoverable failures.

### Gate 3 — WhatsApp contributions

Verified sender/business phone, signed webhook and durable inbox/queue, invitation-to-guest/session resolution, event selection, media retrieval/storage and moderated publication. Test repeated webhooks, multiple weddings, unassigned events, unavailable media URLs, unsupported files, provider outage and contributor privacy. Acknowledge only durable acceptance.

### Gate 4 — optional personal-photo discovery

Confirm consent/retention/deletion process and provider quotas; run a 500–1,000-photo consented pilot across two weddings. Implement wedding-scoped indexing, complete partition search, expiry and private results. Validate quality, precision and recall. Keep guest browsing available when search is disabled or unavailable.

### Gate 5 — production release and operations

Approved portfolio assets, verified contact details, agreed service/hosting terms, genuine deliverable deadlines, privacy/support contact, operational ownership, monitoring, backups, deletion tests and rehearsal/fallback procedures. Enable production flags only after successful end-to-end evidence.

Original pilot ambitions: 300–800 guests and 10,000–30,000 photos per wedding; useful gallery content around 2–3 seconds on an agreed mid-range/4G profile; initial face results within 5 seconds and complete results within 15 seconds; at least 99% precision on a consented labelled evaluation set, reporting recall separately; rehearsal of 100 uploaders, 300 viewers and 50 simultaneous fresh searches. These are **targets, not measured capacity or commercial promises**.

Original timing suggested late-November rehearsal and early-December readiness for the December wedding. As of 28 October 2026, reassess feasibility against actual staffing, provider onboarding and pilot evidence. Preserve a manual delivery fallback; do not promise an unverified feature for wedding day.

### Outstanding owner inputs

Verified email/WhatsApp business number; provider/account ownership and region; private sender onboarding; approved real portfolio and couple/event imagery; final logo vectors; actual service packages/crew commitments/deliverables/revision terms; venue/end-time details; hosting/retention/consent terms; support owner and budget; intended GitHub repository/branch and source visibility.

Payments, automated pricing, print ordering, live slideshows, RAW archives, video face matching, third-party studio SaaS and white-label sales remain separately scoped future work. Do not silently add them to the public promise.

<a id="next-agent"></a>
## 16. Copy-ready instructions for the next developer or AI

> Read `JASHNAMA_MASTER_HANDOFF.md` first, then inspect the actual repository and any applicable `AGENTS.md`. Continue the existing Next.js/React Jashnama project; preserve its brand, routes, imagery labels, current client UI and working behavior. Verify the source revision and remote instead of assuming GitHub contains the local work. Use the current source and latest owner instructions ahead of historical appendix wording.
>
> Treat this as one integrated product: public conversion website, personalised couple workspace, guest event/media experience and studio production/feedback system. Keep story/narrative voice notes and reference/music attachments, per-event crew planning, version-specific film/photo feedback, collection updates, the four enquiry options, guest personal-photo results, contributor tags and planned WhatsApp ingestion.
>
> Distinguish demo, configured adapter and live service. Never claim that a browser object URL is cloud storage, a sample result is a face match, a queue acknowledgement is gallery publication or an enquiry is a booking. First implement authenticated, durable, wedding-scoped data management and private media workflows behind the existing UI. Do not put actual client data into public fixtures.
>
> Use the supplied architecture and contracts as the production plan; verify provider accounts, current docs, regions, costs and consent requirements before activation. Keep secrets server-side. Test cross-wedding access, revocation, retries, deduplication, version conflicts, deletion and recovery. Preserve native scrolling, reduced motion, keyboard access and restrained glass. Avoid needless dependencies, new generated media or broad refactors.
>
> Work in small verifiable increments. Run the applicable lint/type/tests/build and browser checks, document what is now live, and maintain this master/status record. Do not modify the separate Savage Wedding deployment without explicit authorisation.

<a id="archive"></a>
## 17. Complete source-planning archive

The following snapshots preserve the full planning trail in this single file. They are reference material, not commands to execute blindly. The consolidated sections above and newer owner decisions take precedence. Historic dates, implementation boundaries, costs and test counts remain verbatim so no original requirement is silently lost.

- [Original website and web-app master prompt](#archive-original-master)
- [Original positioning and experience brief](#archive-positioning)
- [Supplied UI/UX refinement prompt](#archive-ux-prompt)
- [Brand](#archive-brand)
- [Ui Ux Refinement](#archive-ui-ux-refinement)
- [Personalized Experience](#archive-personalized-experience)
- [Production Handoff](#archive-production-handoff)
- [Journeys And Permissions](#archive-journeys-and-permissions)
- [Enquiry Backend](#archive-enquiry-backend)
- [Retention And Costs](#archive-retention-and-costs)
- [Feature Status](#archive-feature-status)
- [Launch Checklist](#archive-launch-checklist)
- [Verification](#archive-verification)
- [Proposed backend TypeScript contracts](#archive-typed-backend)
- [Environment template — no credentials](#archive-env-template)

<a id="archive-original-master"></a>
### Original website and web-app master prompt

<details>
<summary>Expand full snapshot: JASHNAMA_WEBSITE_AND_WEB_APP_MASTER_PROMPT.md</summary>

# Jashnama — website and wedding experience master prompt

Version 2 · 1 October 2026 · Positioning confirmed: couples and families book Jashnama; the digital wedding space is part of Jashnama's service.

I am attaching Jashnama's brand guidelines and relevant media assets. Design and build a beautiful, responsive public website and an integrated private wedding experience for Jashnama.

Jashnama is a wedding films and photography studio covering the complete media journey: creative planning, shoot production, editing and post-production, organization, review, and final content delivery. Its primary customers are couples and families. The website should help them discover and book Jashnama; the private application should support the relationship before, during and after the wedding.

Act as a senior product designer and full-stack architect. The immediate deliverable is a high-fidelity, runnable interactive UI with realistic demonstration data. Specify the complete production architecture, typed backend contracts and implementation handoff without pretending mocked services are live.

This document replaces the earlier generic multi-wedding platform brief. Retain its upload, gallery, face-search, privacy and reliability requirements, but organize the experience around Jashnama's service and its clients. A standalone software business for other studios is a possible future decision, not the present positioning.

## 1. Immediate scope and delivery boundary

Build four connected surfaces under Jashnama:

1. A public brand website that presents films, photography, approach and services, and turns interest into a qualified enquiry.
2. A private couple's workspace for onboarding, creative planning, feedback, selections and delivery.
3. A simple wedding/guest experience with invitation details, albums, contributions and optional selfie search.
4. An internal Jashnama studio workspace for enquiries, production coordination, media, approvals and delivery.

Implement key interactions, responsive layouts and loading/error states using a replaceable demo data layer. Produce reusable components, typed service interfaces and backend documentation.

Real cloud storage, authentication, recognition, messaging, payments, provisioning and production deployment require a subsequent live-integration phase unless explicitly authorized. The UI must run without production credentials.

Clearly identify simulated outcomes. Do not say a file is stored, a selfie recognized, an enquiry delivered, an approval communicated or a WhatsApp message sent when the behavior is mocked. Use an unobtrusive preview indicator and accurate action-level feedback, while keeping technical details out of normal customer journeys.

Deliver connected user journeys, not only a homepage or disconnected mockups. Use thoughtful provisional choices where the brief leaves implementation detail open. Do not replace the existing live wedding experience during a prototype exercise.

## 2. How to use my attachments

Read every supplied brand guideline and inspect supplied logos, photographs, illustrations, font files, icons, and reference screens before establishing the visual direction.

Extract and document:

- The company's exact name, positioning, tone of voice, and preferred terminology.
- Approved logos, variants, clear space, minimum sizes, and placement rules.
- Primary, secondary, neutral, background, text, and accent colors.
- Approved typefaces, weights, hierarchy, licensing/availability, and a Devanagari fallback.
- Photography/art direction, image treatments, decorative motifs, icon style, and motion guidance.
- Spacing, shape, borders, shadows, and layout principles where defined.
- Rules for co-branding the company with an individual couple or wedding.

Jashnama is the company and master brand. “The Savage Wedding” is the first wedding experience within it. Model two brand layers: Jashnama's platform/company identity and restrained wedding-specific content/theme overrides. The public website foregrounds Jashnama; the private wedding experience foregrounds the couple with a discreet Jashnama endorsement.

Apply the attached company guidelines before the existing website's visual defaults. If the guidelines are silent, the current warm ivory/burgundy wedding direction can inform a provisional treatment; do not override explicit brand rules with it. Maintain readable contrast and accessible interactions. Document any necessary accessibility adjustment to a brand color.

If essential brand files are missing, identify them and use a clearly provisional treatment while continuing useful work. Jashnama's name is supplied; its official visual assets and wording must come from the attachments. Do not fabricate a logo, font license, testimonial, venue, phone number, award, portfolio credit or business claim.

## 3. Positioning, service scope and product principles

Primary audience: couples and families who want to hire Jashnama for wedding films, photography and the associated media experience. Secondary users are their guests, family collaborators and Jashnama's production team.

Recommended public category: **Wedding films & photography**.
Expanded description: **A wedding media studio, from creative planning to final delivery.**

Draft positioning statement, subject to the attached brand voice:
“Jashnama creates wedding films and photographs with care at every stage—from understanding your story and planning the coverage to shaping, organizing and delivering your memories.”

Optional copy direction, not a finalized tagline:
“Your celebrations, beautifully told.”
Support it with a concrete service descriptor so visitors immediately understand what Jashnama does. Do not introduce an additional app sub-brand by default.

Present the complete service through a clear lifecycle:

| Stage | Jashnama's media responsibility | What the couple experiences |
| --- | --- | --- |
| Before the wedding | Story conversations, creative references, media brief, coverage planning and shoot coordination | A team that understands what matters to them |
| During the wedding | Photography, filmmaking and agreed social-content capture, coordinated with the event schedule | Thoughtful coverage and an easy way for guests to contribute |
| After the wedding | Selection, editing, grading, sound, album/film feedback and agreed revisions | Clear progress and a manageable review process |
| Delivery and preservation | Finished films/photos, organized private galleries, downloads and a defined hosting term | Their collection ready to enjoy and share |

Scope creative direction around the media: how stories are captured, interviews prepared, portraits scheduled and deliverables produced. Coordinate with wedding planners and venue teams as needed. Event planning, decor, catering and venue logistics are not Jashnama services unless later explicitly added by the owner. Avoid “event curation” as the main category because it leaves that responsibility unclear.

Lead the public experience with the quality and emotional value of the work. Introduce the private wedding space as a benefit included in the service: one place to prepare, collaborate, share and receive the collection. Face search, uploads and storage belong inside that experience rather than dominating the brand's first impression.

Build for multiple Jashnama weddings from the start, with 300–800 guests and 10,000–30,000 photos per wedding. Multiple wedding projects require isolation and operational capacity; they do not require public software subscriptions, a photographer marketplace or competing-studio onboarding.

Retain these core functions:

- Public portfolio, service explanation and qualified enquiry.
- Couple onboarding, creative brief and agreed production milestones.
- A wedding invitation/itinerary and guest gallery.
- Guest-selected phone photos and short videos contributed centrally in production.
- Approved professional and guest media in one permission-controlled library.
- Optional selfie-based “Find my photos.”
- Event/source/album organization, private selections and final delivery.
- Jashnama team workflow from pre-production through post-production.

“Diarization” in the earlier discussion means organizing photographs by person and event, not identifying speakers or transcribing speeches. A face match is a discovery aid, not proof of identity or permission to access private material. Guests can browse contributed media that has been shared with them; the platform never accesses other people's phone libraries.

## 4. First wedding: exact seed content

Use this first wedding as the primary demonstration:

- Wedding name: The Savage Wedding.
- Couple: Vedant and Sakshi. Do not invent surnames.
- Hashtag: #TheSavageWedding.
- City: Lucknow, India.
- Time zone: Asia/Kolkata.
- Dates: 11–13 December 2026.
- Venue/address: pending. Display “Lucknow · Venue details coming soon.”
- Existing deployment reference: https://the-savage-wedding.vercel.app.

| Event ID | Display name | Local date | Local start time | UTC start |
| --- | --- | --- | --- | --- |
| gujarat | Rangilo Gujarat Bhaat | Friday, 11 December 2026 | 7:00 PM IST | 2026-12-11T13:30:00Z |
| haldi | Krishna Nagri Haldi | Saturday, 12 December 2026 | 10:00 AM IST | 2026-12-12T04:30:00Z |
| royal | The Royal Affair | Saturday, 12 December 2026 | 4:00 PM IST | 2026-12-12T10:30:00Z |
| lunch | Bridgerton Lunch | Sunday, 13 December 2026 | 10:00 AM IST | 2026-12-13T04:30:00Z |
| raas | Rave & Raas | Sunday, 13 December 2026 | 7:00 PM IST | 2026-12-13T13:30:00Z |

Event end times, dress codes, detailed addresses, transport, accommodation, and contacts are not yet supplied. Keep these configurable and show appropriate pending states. Enable maps only when a real venue location is configured. Calendar files must preserve the correct time zone/start time without inventing event durations.

Use #TheSavageWedding near the opening names/welcome, on relevant share cards, and in the footer where the earlier design used “V & S.”

Photo choices matter:

- The Royal Affair should use an attractive frontal-angle varmala image.
- The hero should use a strong varmala photograph or another supplied Royal Affair image.
- Preserve the preferred Rave & Raas image while correcting its crop so heads remain visible at every breakpoint.
- Choose the strongest supplied image for each event; assess clarity, emotion, composition, face visibility, and available text space.
- Preserve natural proportions. Use image-specific focal points and avoid zoom effects that crop heads.
- Do not substitute invented photographs of the couple. If an asset is absent, label the placeholder and document the required replacement.

If working in the existing repository, inspect wedding-guest-app, its AGENTS.md, package scripts, app/page.tsx, app/events.json, public/events, and UPDATING.md. Preserve useful existing behavior, including day filters, large text, calendar downloads, and reduced-motion support. Use framework documentation appropriate to the installed version.

## 5. Parameter sheet and configurable defaults

Create one documented configuration model rather than scattering these values through components. Distinguish supplied facts, proposed defaults, and unresolved business decisions.

| Parameter group | Required fields / initial treatment |
| --- | --- |
| Company identity | companyName = Jashnama; public descriptor, logos, brandTokens, fonts, brandTone and supportContact from attachments; no separate app name required |
| Public website | approvedPortfolioItems, servicesOffered, companyStory, teamCredits, enquiryFields, contactMethods, socialLinks, SEO/share metadata; publish supplied facts only |
| Client journey | enquiryStatus, bookingStatus, creativeBrief, familyShotList, coveragePlan, deliverables, dueDates, feedbackRounds, approvalRights and deliveryStatus |
| Wedding identity | id, studioId, slug, coupleNames, weddingTitle, hashtag, heroAsset, focalPoint, themeOverrides, city, timezone, start/end dates |
| Event | id, weddingId, name, startAt, endAt optional, venue/address/map optional, description, image/focalPoint, dressCode optional, sortOrder |
| Languages | English and Hindi; English initial default; event names may remain proper nouns |
| Accessibility | largeText, reducedMotion, accessible contrast, keyboard support, approximately 48-pixel primary touch targets |
| Guest access | invite policy, session lifetime, album visibility, contribution permissions, download permissions, optional verified access for restricted areas |
| Media allowances | per-wedding storage/photo/video quotas, upload concurrency, accepted formats, individual size/duration limits, archive download limits |
| Proposed guest limits | 30 MB/photo, 500 MB/video and 120 seconds/video as editable pilot assumptions; confirm against actual footage and provider capabilities |
| Professional limits | separate batch/file/video allowances, configurable by package; selected JPEGs and finished films initially; RAW archive excluded from the default package |
| Initial upload behavior | 2–3 concurrent phone files, retry support, explicit processing states; tune using device/network tests |
| Publication | guest submissions pending review by default; authorized studio staff publish professional media; couple privileges configurable |
| Face search | optional consent, permitted album scope, quality/threshold configuration, index partitions, cache expiry, incomplete-search status |
| Proposed retention | query selfie discarded after search; face index expires 90 days after the final ceremony; media retained 12 months after it; all subject to final policy review |
| Notifications | opt-in state, language, allowed message types, digest frequency, quiet hours in wedding time zone, template/provider status |
| Commercial | Jashnama media-service scope, agreed deliverables, quote/booking status, hosting allowance/term, extension rules, currency and tax treatment; manual billing/status initially |
| Operations | upload/retry limits, service quotas, queue thresholds, audit retention, backup policy, spending alerts, deletion workflow |

Unknown values must not stop a UI prototype. Use explicit placeholders or reversible configuration choices and record the assumptions. Never request API secrets in the conversation or include them in client code.

## 6. Product structure and user roles

Primary hierarchy: Jashnama → client wedding/project → events/albums → media. Public enquiries can exist before a wedding/project is booked. Retain an internal organization identifier for sound data ownership and future extensibility. An album belongs to one wedding and may contain media from one or several events within that wedding. Media can appear in multiple albums without duplicating its original file.

| Role | Main capabilities |
| --- | --- |
| Guest | Join permitted wedding, browse authorized albums, contribute if allowed, use optional self-search, favorite/download permitted media, report content |
| Couple | Booking/onboarding information, creative brief, references, permitted planning information, private selections/feedback, approvals and delivery tracking; guest moderation only when delegated |
| Photographer/videographer contributor | Upload to assigned weddings/events, manage own batches and supplied deliverables; publication only when delegated |
| Producer / project lead | Manage assigned enquiries/projects, plan media coverage, collect briefs, coordinate team assignments and communicate agreed milestones |
| Studio editor | Manage assigned post-production tasks, media versions, selections, feedback and publication when authorized |
| Studio owner/admin | Create weddings, manage team/permissions, branding, quotas, retention, integrations and operational status within the studio |
| Jashnama operations administrator | Manage service health, access and infrastructure; customer-content access must be narrowly authorized and audited |

Do not equate a signed-in account with access to every wedding. Staff assignment, guest invitation, album visibility and action permissions are separate decisions. Support the same human belonging to multiple weddings without merging face identities across them.

## 7. Required screens and interactions

Design the public site and couple/guest journeys for mobile first, then adapt to tablet/desktop. Studio production workflows should be excellent on desktop and usable on mobile.

### Public website and conversion journey

Build these public surfaces before the private media tools. Use Jashnama's own work and approved facts; if real portfolio media is unavailable, provide honest preview placeholders without attributing invented work to the company.

**Home:** a strong film poster or photograph, Jashnama identity, a clear films/photography descriptor, a short emotional introduction, selected stories, service overview, the working process, and a useful introduction to the private wedding space. Primary CTA: “Tell us about your wedding.” Secondary CTA: “Watch our films.” Returning-client access: “Your Wedding.” Video should load on intent with a poster fallback and no autoplay sound.

**Films:** a curated collection with meaningful titles, short context and fast poster previews. Film detail may include an approved story, selected stills, legitimate credits and an enquiry link. Use real work and supplied descriptions.

**Photography:** a carefully edited visual portfolio with useful story/event collections, image credits and responsive viewing. Public photographs must be explicitly approved for portfolio use; private gallery publication does not imply public marketing permission.

**Stories:** selected full wedding case studies, combining approved films, photographs and narrative. Publish a case study only when enough authentic content exists. The Savage Wedding can be a preview/example experience; do not claim a future wedding has already been shot.

**The Experience:** explain discovery, creative planning, filming/photography, editing/review and delivery in language couples understand. Show how the private “Your Wedding” space supports that relationship. Demonstrate a sample collection with approved/demo assets instead of exposing a real private gallery.

**Services:** photography, wedding films, and optional social/same-day or archival services only when confirmed by Jashnama. State the media planning, post-production and delivery included in each agreed offering. Avoid invented packages, prices, turnaround promises and service locations.

**About:** brand story, approach and genuine team information from supplied materials. Use no fabricated years of experience, awards, client counts or testimonials.

**Enquire:** short, accessible form with names, contact method, dates/date flexibility, city/venue if known, events/days and required media services. Add optional budget range, referral source and “What matters most to you?” Keep marketing permission separate from responding to this enquiry. Include validation, submission progress, retry and an honest demo receipt. In production, use anti-abuse controls and a secure lead inbox; do not publish submitted details or silently enroll enquiries as gallery members.

**Client entry:** a clear “Your Wedding” route for existing couples and invited guests, with invitation-based access/recovery. Couples land on their project overview; guests land on the simpler wedding/gallery experience appropriate to their invitation.

Recommended public navigation: Films, Photography, The Experience, About, Enquire; add Stories when real case studies justify it. Keep “Your Wedding” available as a secondary utility. Prioritize a compact mobile menu.



### A. Wedding invitation and welcome

Include the hero, couple names, hashtag, dates, Lucknow, event itinerary, calendar actions, and a clear entry into the media hub. Preserve a pleasant invitation experience before albums exist. Model upcoming, during-event and post-event states. Do not fabricate a countdown or “live” state inconsistent with dates.

### B. Media home

Prioritize three actions: **Upload memories**, **Find my photos**, **Browse celebrations**. Include selected highlights, event filters, newly published albums, a films entry, help, and a discreet studio credit. Distinguish guest contributions and professional photographs with text labels.

### C. Join and access recovery

Support invite-link entry, event QR preselection, access-expired and access-denied screens, a simple recovery/help route, and appropriate verified access for restricted roles. A QR can identify the wedding/event but must not masquerade as verification of identity. Avoid repeated login prompts during a normal visit.

### D. Guest upload flow

Steps: select files → choose/confirm event → explain sharing visibility → upload → receipt. Support multiple files, thumbnails, size/type feedback, remove-before-upload, selected-file counts, per-file progress, overall summary, pause/cancel where supported, retry failed files, partial success, quota exceeded, duplicate detected, unsupported format and interrupted connection. The receipt distinguishes saved, processing, awaiting approval, and published. Provide a “My contributions” page.

In demo mode, local selections can be previewed and status transitions simulated, but explain that files have not been stored on a server. Keep personal file bytes out of persistent browser storage and third-party services; revoke temporary object URLs when no longer needed.

### E. Find my photos

Explain the purpose in plain language and offer a consent choice. Support taking a single-person selfie or selecting one when camera access is unavailable. Show permission denied, no clear face, multiple faces, processing, partial results, completed results, no matches, search temporarily unavailable, index expired, and retry states. Always offer permitted album browsing as an alternative.

Results have event/source filters, favorites, selection and downloads. Avoid displaying technical confidence percentages to guests. In the prototype, use deterministic sample matches and explicitly identify them as demonstration results. Do not send a supplied selfie to an external model.

### F. Event albums and gallery

Support all-events and individual-event views, guest/professional source, photographs/films, curated highlights, sort order, selection mode and cursor-style pagination. Preserve scroll position and filters when returning from the viewer. Show skeleton, empty, partial loading, failed request and expired-access states. Visibility labels distinguish shared albums, restricted family albums and drafts.

### G. Photo viewer and downloads

Provide a large image, previous/next controls, keyboard access, optional swipe, caption/event/source credit when available, favorite, download, share where permitted, and report/remove-request actions. Provide button equivalents for gestures. A download chooser distinguishes original quality and a smaller mobile copy. A large archive request has preparing, ready, expired and failed states. Private originals must not be exposed through unrestricted links.

### H. Films and reels

Use a polished poster grid with title, event, duration and delivery status. Playback has captions where supplied, audio controls, loading/failure states and permitted download choices. Respect autoplay preferences and do not autoplay audio. Include teasers, highlight films, full ceremony films and reels as configurable categories, not invented delivered assets.

### I. Couple's “Your Wedding” workspace

Provide a calm project overview with the wedding identity, next agreed action, team contact and milestone timeline. Change the emphasis with the stage of the relationship.

Before the wedding: onboarding, story questionnaire, priorities, creative references/moodboard, key people and must-have family photographs, event coverage details, permissions/preferences, approved creative brief and supplied schedule. Identify which fields the couple can edit and which require discussion with the producer. Never show another couple's references or internal crew notes.

During the wedding: simple event details, guest-sharing/QR links, selected approved previews and support contact. Avoid bombarding the couple with internal operational detail.

After the wedding: album shortlists, selection counts, film review links, organized feedback, agreed revision status, approvals, final deliverables and download/hosting expiry information. Make the next action clear, such as “Choose your album photos” or “Review your highlight film,” only when that task is actually ready.

A milestone timeline might include Creative brief, Coverage plan, Wedding captured, Photo selection, Film review and Final collection. Due dates and revision limits must come from the agreed scope. Demo dates/statuses must be labeled as examples. Private notes and versions are not guest-visible.

### J. Internal Jashnama workspace

Include an enquiry inbox, basic lead status, booked-project list and a production overview. An authorized user can convert a qualified enquiry into a project, assign the couple and team, capture agreed service scope, and open the couple workspace. Keep a demo booking separate from a real confirmed contract or payment.

Lead states can be New, Contacted, Discovery, Proposal, Booked, Closed; allow manual updates initially. Project stages can be Pre-production, Coverage, Post-production, Review, Delivered and Archived. These business stages are separate from file-processing states.

For each wedding include: overview, creative brief/references, media coverage schedule, assigned crew, production tasks, deliverable list, media library, uploads, albums, guest submissions, selections, film versions, approvals, access, communications and settings. Use progressive disclosure and role-based visibility.

Show useful workload information: awaiting client input, upcoming shoots, edits due, reviews awaiting action, pending guest moderation and processing failures. Do not build a full payroll, procurement or accounting system.

Retain event editing, focal-point controls, invitation/QR generation, team permissions and gallery publishing from the original brief. Technical diagnostics stay in internal views.

### K. Professional uploader and moderation

Support desktop file selection and folder ingestion where the browser permits it, event mapping, draft/publish destination, batch manifests, duplicate flags, failed-file retries, processing progress and completion summaries. A moderation queue supports approve, hide, reject with reason, report review and restoration where applicable. Destructive actions need a clear explanation of scope.

### L. Settings, usage and operational states

Include branding, language, visibility, downloads, consent/retention settings, integrations, agreed service/hosting allowance, media usage and expiry warnings. Show WhatsApp disconnected/setup pending/connected states without implying an integration exists in demo mode. Include an accessible demo control for switching test weddings and roles, confined to the preview environment.

### M. Later feature previews

Document extension points for an approved live slideshow, video guestbook, shot requests, family photo lists, retouching requests, print/album ordering, film revision review and agreed hosting extensions. Build these only after core flows work, or represent them as clearly labeled planned features. Do not dilute the first release into a marketplace or a full video editor.

Optional itinerary additions such as dress code, transport, accommodation, RSVP and FAQs must use supplied information. Treat them as configurable extensions, not confirmed wedding details.

## 8. Visual and interaction design

Make the public Jashnama website feel cinematic, editorial and grounded in its actual work. Explain the service clearly alongside the imagery. Treat the private workspace as a quieter continuation of the same brand. Make guest surfaces feel like a thoughtfully designed wedding publication: excellent imagery, deliberate type hierarchy, generous spacing, clear reading order and restrained ornament derived from the brand. Studio surfaces emphasize clarity and efficient handling of large media libraries while sharing the same identity.

Test mobile layouts at approximately 360, 390 and 430 pixels, plus tablet and desktop. Respect safe areas, readable text at 200% zoom and layouts without horizontal overflow. Maintain a comfortable base text size around 16–18 pixels, with a real large-text mode. Hindi text must not clip or fall back to an unsuitable typeface.

Use subtle transitions, generally around 160–280 ms, for navigation, sheets, filters, selection and upload completion. Provide reduced-motion alternatives. Keep focus, reading order and scroll position sensible during transitions. Essential content must never depend on finishing an animation. Avoid scroll hijacking, long cinematic loading gates and decorative effects that slow an older phone.

Create tokens for colors, semantic states, typography, spacing, radii, elevation, borders, motion, image aspect ratios and focal points. Use semantic controls, visible focus indicators, text labels for important icons, clear contrast and meaningful errors. Status must not be conveyed by color alone.

## 9. Frontend implementation specification

Preferred foundation: React, Next.js and TypeScript, preserving the existing project's appropriate dependencies and conventions. Inspect package.json, lockfile, AGENTS.md and relevant installed documentation before changing code. If another build environment is supplied, preserve its constraints and explain the closest equivalent architecture.

Use components driven by brand tokens. Suggested components: BrandHeader, FilmPoster, PortfolioStory, ServiceCard, ProcessTimeline, EnquiryForm, ClientProjectOverview, CreativeBriefForm, ReferenceBoard, DeliverableTimeline, ApprovalPanel, WeddingHeader, GuestNavigation, EventCard, EventFilter, MediaGrid, MediaCard, MediaViewer, UploadTray, UploadItem, ConsentPanel, SelfieCapture, SearchProgress, AlbumCard, FilmPlayer, SelectionToolbar, StatusBadge, EmptyState, ErrorState, AccessibleDialog, StudioNavigation, UsageMeter and ActivityList.

Separate components, domain types, authorization-aware service contracts, fixture data, formatting/localization, and provider adapters. Do not embed large datasets or provider calls in page components. Use existing form/validation tooling where suitable. Keep shared filters in URL state where useful; keep consent/session/private search state out of shareable URLs.

Use responsive image variants, lazy loading below the fold, stable image dimensions and restrained prefetching. Serve view-size derivatives in grids rather than originals. Split heavy studio/media features from the public homepage and invitation's initial bundles. Virtualize genuinely long lists where needed without breaking accessibility.

Demo requirements:

- Two separate test weddings with different memberships, albums and settings.
- The Savage Wedding seeded with the exact events above; the second clearly fictional.
- Representative photographs, clips, records and edge states, using supplied/licensed assets appropriately.
- Never represent the same private media as belonging to both weddings by accident.
- Realistic counts labeled as demonstration data; do not imply 30,000 real photos have been uploaded.
- Replaceable async adapters with latency/failure simulation; connected state updates across screens.
- Store safe preferences and demonstration metadata only; do not persist personal selfies or file bytes in localStorage.
- Forms, selections, filters, navigation, moderation and mock job status behave consistently.

Proposed route structure:
- /, /films, /photography, /stories/[slug], /experience, /services, /about, /enquire for Jashnama's public website.
- /your-wedding for returning-client entry and project selection.
- /your-wedding/[projectId] for a couple's private brief, milestones, reviews and delivery.
- /w/[weddingSlug] and /w/[weddingSlug]/media for the invited guest experience.
- /studio/... for Jashnama's internal operations.

Use one brand/domain structure initially; a separate subdomain can be introduced if deployment needs justify it. Names/paths are illustrative. Route structure is not authorization. Private responses must not leak through shared caches, public metadata or search indexing.


## 10. Production backend architecture

Document this production design and expose matching frontend interfaces. Do not provision it merely to complete the UI.

| Layer | Preferred choice | Responsibility |
| --- | --- | --- |
| Web application | Next.js on Vercel | Public brand/portfolio/enquiry pages, couple and guest spaces, internal studio tools and small API requests |
| Metadata and authentication | Supabase Postgres/Auth; Mumbai region preferred | Membership, wedding/event records, access, consents, albums, selections, jobs and usage |
| Original files | Private Amazon S3, Mumbai | Direct uploads, originals and generated image variants |
| Processing | SQS and Lambda; a container worker when conversions exceed function constraints | Validation, derivatives, indexing, archives, retries and cleanup |
| Face matching | Amazon Rekognition Image, Mumbai | Index permitted photo faces once and search wedding-specific partitions |
| Photo delivery | CloudFront with a private origin and authorized delivery | Fast previews and controlled originals |
| Video delivery | Cloudflare Stream, subject to residency requirements | Adaptive playback of approved films/clips; source originals remain separately stored |
| Messaging | Official Meta WhatsApp Cloud API; optional provider adapter | Guest-initiated assistance and opted-in album notifications |
| Observability | Structured logs, error reporting, queue metrics, cost alerts | Troubleshooting and wedding-day operations without leaking personal content |

One Jashnama application serves multiple isolated wedding projects. An internal organization model can remain extensible, but the first product does not offer third-party studio registration, white-label sales or software subscription checkout. Originals belong in object storage, metadata in Postgres, and processing in durable jobs. Keep storage, recognition, video and messaging behind small provider interfaces. Maintain stable internal media IDs independent of provider IDs.

R2 can be evaluated later for storage/delivery economics. Avoid adding a second original-file storage system to the first release without a measured benefit. Mumbai database/storage selection does not establish that all CDN, video, messaging or analytics processing remains in India.

Before live implementation, check official provider documentation, current Supabase changelog, installed SDK versions, supported regions, service limits and commercial terms. Preserve a lockfile and pin integration dependencies appropriately.

## 11. Logical data model

Produce a data dictionary and relationship specification. Use UUID identifiers, explicit ownership, timestamps, constrained statuses and a consistent soft-delete/physical-delete policy. Exact SQL migrations are a production-phase deliverable unless separately requested.

| Entity group | Important fields and relationships |
| --- | --- |
| studios / studio_memberships | Jashnama organization identity, brand settings; user, studio, role, status |
| enquiries / enquiry_activity | names, contact preference, proposed dates, city, service interests, optional budget, status, assigned producer, consent/purpose, retention; private lead activity |
| service_scopes / bookings | enquiry/project relation, agreed media services, deliverables, revision/hosting terms, manually recorded booking status; quotes/payment integrations optional later |
| portfolio_stories / portfolio_items | approved public title/narrative/credits, media reference, public-use permission, publication state, SEO fields |
| creative_briefs / reference_items | wedding, version, story priorities, style references, preferences, approval state, author, visibility |
| coverage_plans / shoot_assignments / production_tasks | wedding/event, media coverage times, crew/role, responsibilities, dependencies, due dates, client/internal visibility |
| project_milestones / client_actions | wedding, stage, agreed dates, next action, owner, completion/review state |
| weddings / wedding_memberships | studio, slug, couple display names, city, time zone, dates, theme, status; assigned user/session, role, permitted actions, expiry |
| profiles / guest_sessions / invitations | minimal identity/contact data, verification state; wedding-scoped membership, token hash, expiry, revocation, inviter |
| events | wedding, name, start/end, optional venue, description, cover asset, focal point, display order |
| albums / album_media | wedding, title, cover, visibility/access group, publication state; media relation, sort order, optional caption override |
| media_assets | wedding, event optional, contributor, guest/professional source, photo/video kind, source name, verified MIME/size, checksum, capture time, dimensions, duration, original storage key, rights/credit, independent workflow states |
| media_variants | parent media, variant type, dimensions/codec, storage/provider key, checksum, status |
| upload_sessions / upload_items | wedding, contributor, quota reservation, expected files, multipart reference, bytes, checksum, expiry, retry/cancel/completion state |
| processing_jobs | wedding/media, job type, idempotency key, attempts, scheduled/start/end times, state, safe error code |
| face_partitions / indexed_faces | wedding, provider collection, version/generation, face count, readiness; media, provider face ID, partition, deletion/index state |
| face_search_sessions / face_search_results | wedding, authorized guest/session, consent version, index generation, searched/remaining partitions, expiry, state; deduplicated media match, internal score/rank |
| consent_records / communication_preferences | subject/session, wedding, purpose, notice version, grant/withdrawal time, permitted scope, language/channel preferences |
| favorites / selection_sets / selection_items | wedding, owner, media; private set name, submission/approval/version state, notes |
| deliverables / deliverable_versions / review_comments | wedding, type, assigned contributor, due date if known, stage, version, related media, private review URL, optional timecode |
| moderation_reports / moderation_actions | reporter, wedding/media, reason, review state, authorized reviewer, decision/audit timestamps |
| notification_jobs / message_receipts | wedding, recipient, purpose/template, consent snapshot, deduplication key, queued/sent/delivered/failed/canceled state, provider reference |
| usage_events / service_entitlements | wedding/studio, metered operation, quantity/unit/time, billing period; limits and active retention allowances |
| retention_policies / deletion_requests / audit_events | policy/version/expiry; scope, requester, authorization, cleanup progress; actor, action, resource and redacted change metadata |

Model source, access and processing independently. A professional file is not automatically published, and a successful face index is not permission to reveal a photo.

Relationship constraints must prevent a media asset from one wedding being attached to another wedding's event, album, selection, face result or job. Use appropriate composite foreign keys/unique constraints or an equally robust database-enforced design.

Add indexes for membership lookups, tenant filtering, relevant foreign keys, gallery publication/event/source queries and stable cursor ordering. Example query shapes include wedding + event + publication state + sort time + ID. Make favorites unique per user/wedding/media and processing operations unique per idempotency key. Use cursor pagination with a deterministic tie-breaker rather than deeply paginating with OFFSET.

Avoid loading all 30,000 rows, N+1 media-variant lookups or repeated count scans on every guest request. Use a supported database connection pool for serverless workloads. Validate actual plans and indexes against representative data before optimizing further.

## 12. API and service contracts

Define typed request/response contracts, validation, permissions, pagination, errors and idempotency. The paths below are proposed contracts. They can map to route handlers or equivalent services without changing their access requirements.

Wedding-scoped base example: /api/v1/weddings/{weddingId}. Add a separate public enquiry endpoint and explicitly public portfolio read model. Enquiry submission must not create or grant wedding membership.

Additional contracts:
- GET public portfolio stories/items: only reviewed, publicly licensed/approved material and safe metadata.
- POST enquiries: bounded, validated inputs, anti-abuse/rate limits, idempotent handling and honest receipt; no delivery promise until server acceptance.
- Authorized enquiry listing, assignment and status changes within Jashnama.
- Authorized conversion from enquiry to booked project with duplicate protection and an explicit membership/invitation step.
- Scoped creative-brief/reference create/update/approve operations with versions.
- Scoped production-task, coverage-plan and milestone operations with staff/client visibility.
- Deliverable review/approval with version checks so a comment cannot approve a replacement film accidentally.

The following gallery contracts remain required:

| Operation | Proposed contract and behavior |
| --- | --- |
| Read wedding invitation | GET public wedding metadata by slug; explicitly allowlisted public fields only |
| Join / recover access | POST invitation exchange; establish scoped session; validate expiry/revocation; no raw invitation token in logs |
| Events / albums | GET events, GET albums, GET albums/{id}; return only permitted records |
| Browse media | GET media with event/source/type/album/sort/cursor/limit; return authorized variants and nextCursor |
| Begin upload | POST upload-sessions with files and selected event; validate rights, format/size declarations and reserve allowance |
| Multipart upload | Obtain permitted part-upload authorizations; explicit complete/abort endpoints; trust verified storage state rather than client claims |
| Upload receipt | GET upload-sessions/{id}; per-file saved/processing/publication state |
| Favorite / selections | PUT/DELETE favorite; create/edit/submit private selection set with version checks |
| Selfie search | POST face-searches after consent; bounded selfie input handling; GET face-searches/{id} for partial/completed results |
| Download | POST download-jobs with permitted selected IDs and size variant; GET download-jobs/{id}; short-lived authorized delivery |
| Moderation | POST media/{id}/report; authorized approve/reject/hide/publish actions; auditable results |
| Wedding administration | Authorized create/update events, albums, branding, team assignments, invites and settings |
| Privacy | Record/withdraw purpose-specific consent; request scoped deletion; view relevant request status |
| Communications | Update preferences; authorized queue-notification action; cancellation if permission is withdrawn |
| Provider callbacks | Dedicated signed webhook endpoints for storage/video/messaging, validated and replay-safe |

Use structured responses with data, a safe error code/message, requestId and pagination/job metadata as appropriate. Distinguish validation errors, missing access, unsupported media, quota exhaustion, expired requests, rate limiting and temporary processing failures. Do not expose private resource existence through inconsistent error details.

Long-running work returns an accepted/job response and progress, not an HTTP request held open until all processing finishes. Every mutation must derive or verify tenant scope server-side. An arbitrary weddingId supplied by the browser is not trusted authorization.

Use idempotency for upload finalization, processing, archive creation and messaging. Validate webhook signatures, reject replay when applicable, and reconcile provider callbacks with known internal records. Do not fetch arbitrary remote URLs supplied by guests.

## 13. Direct upload and processing pipeline

Production sequence:

1. Validate membership, destination, file declarations and allowance.
2. Reserve capacity and issue short-lived, narrowly scoped upload authorization.
3. Client uploads directly to private object storage, using multipart transfer where appropriate.
4. Server verifies object existence, ownership, size, actual format and checksum before acknowledging verified storage.
5. A durable queue schedules validation, orientation handling, metadata extraction, preview generation, optional face indexing and video processing.
6. Moderate/publish according to role and album rules.
7. Deliver authorized previews and original downloads.
8. Reconcile abandoned or incomplete uploads and release expired reservations.

Original bytes must not travel through normal Vercel function upload bodies. Provider payload limits must be checked during implementation. File type/size restrictions need both client-friendly feedback and server enforcement.

Preserve the original file and create separate display/indexing derivatives. Normalize rotation. Convert HEIC/HEIF appropriately; validate HEVC/video playback with the selected pipeline. Do not destroy originals by compressing them to gallery quality. Strip sensitive metadata such as precise GPS from guest-facing derivatives; define original-download metadata policy explicitly.

Separate these state dimensions:

- Upload: selected, validating, queued, uploading, paused, uploaded-unverified, verified, failed, canceled.
- Processing: queued, processing, ready, failed.
- Moderation: pending, approved, rejected.
- Publication: draft, published, hidden, expired.
- Face indexing: ineligible, pending, indexed, failed, deleted.
- Video delivery: not-required, queued, processing, ready, failed.

Design which transitions are legal and which role/job can make them. A UI success animation is never evidence of server completion.

Use tenant-local checksums for exact duplicates. Flag near-duplicates for human review; never automatically delete a meaningful moment because it resembles another frame. Retry transient failures with backoff, cap attempts, use a dead-letter path, and surface stalled batches to staff. Workers and callbacks must tolerate duplicate delivery.

Provide fair scheduling and quotas across weddings so a large professional batch cannot starve everyone else's guest uploads. Clean up orphan objects, abandoned multipart parts, expired archives and temporary selfie material. Test browser suspension and file reselection rather than promising uploads will always continue after the screen locks.

## 14. Face matching design

Production matching is a managed-service integration, not a new face-recognition model trained for this project.

Index eligible photos once during ingestion and retain a mapping from provider face records to internal media IDs. Scope every collection/partition and result to one wedding. Convert input into the provider's supported format. Record unindexed/low-quality cases so photos remain browsable even if they cannot be found by a selfie.

For search: confirm authorized wedding access → obtain specific consent → accept a clear single-person selfie → validate suitability → search eligible partitions with controlled concurrency → deduplicate matching media → apply current album/media permissions → show progressive results.

The September 2026 research found a 4,096-match response limit in SearchFacesByImage and a default five-requests/second quota for the relevant Mumbai operations. Recheck current limits. Use partitioning and result aggregation to avoid silent truncation, track completeness, and request the required regional capacity before a live launch.

A conservative initial partition policy can cap total indexed face records below the response limit, with headroom for each incoming photo. Benchmark its cost and latency; optimize only while preserving complete results. Never advertise an incomplete search as complete.

Cache by wedding, authorized session, relevant permissions and index generation. Changes to access, publication, deletion or index content must invalidate affected results. Do not run all guests against every new photo individually.

Thresholds need evaluation on consented, labeled wedding photographs, including group shots, side profiles, low light, glasses, jewellery, makeup, different ages and similar-looking relatives. Report precision and recall separately. Similarity scores are not accuracy guarantees.

The first version discards a query selfie after matching, with bounded cleanup on failure. Persistent face references for personalized future alerts require separate consent, retention and deletion handling. Default notifications can announce a new album without retaining a personal face reference.

Keep ordinary album browsing available when matching is declined, fails, expires or misses a photo. Do not create a public named-face directory, identify strangers across weddings, infer sensitive traits, or use wedding faces for model training. Searching for a person inside videos is a separate future scope.

## 15. Authentication, privacy and access controls

Use a simple wedding-specific guest session and stronger verified access for studio staff, couples and restricted family albums. Choose an invitation exchange/authentication model compatible with current Supabase Auth documentation; document revocation, refresh, expiry and recovery.

Production database requirements:

- RLS on every exposed tenant-owned table, with appropriate grants and explicit membership/ownership policies.
- No authorization based on user-editable profile metadata.
- A signed-in/anonymous-authenticated role alone never grants wedding access.
- INSERT/UPDATE checks must prevent tenant or owner reassignment; read policies must support legitimate updates.
- Protect views and privileged functions so they do not accidentally bypass intended restrictions.
- Keep service/secret keys on the server; public configuration contains only intended public keys.
- Test revoked/stale sessions and changed roles; do not assume deleting a user instantly invalidates every issued token.

Object storage, CDN delivery, face queries, background jobs and provider callbacks need matching tenant checks. Folder names and hidden navigation are not security. Cache keys must include the necessary tenant/access context. Signed URLs expire; document the revocation delay they imply and use stricter delivery controls for sensitive material when needed.

Record distinct purposes for contribution sharing, optional face processing and optional communications. Consent to one is not consent to all. Establish an appropriate permissions process for people appearing in indexed photos, not just the selfie submitter. Define guardian-managed handling for children's photos before enabling enrollment.

Provide visible privacy information, access/removal requests, consent withdrawal, data export where applicable, retention expiry and a reliable cleanup workflow. Removal needs to cover relevant originals, derivatives, face records, match caches, video-provider copies and backup expiry. Distinguish hiding content immediately from completing physical deletion.

Verify applicable Indian DPDP requirements and commencement dates before commercial launch. Do not claim compliance based only on a checkbox or selecting an Indian database region. Keep contact data, selfies, biometrics, signed URLs and message content out of ordinary analytics and logs.

Public portfolio permission is separate from private client delivery and guest sharing. Publishing a photo inside an invited wedding gallery never automatically grants use on Jashnama's homepage, social channels or advertising.

Enquiry data belongs in a private lead workflow. Configure a separate retention policy for unbooked leads; do not reuse the media-retention period indiscriminately. Responding to a requested enquiry and sending later promotional messages are distinct purposes.

## 16. Complete Jashnama media-production workflow

Make the production journey explicit in the UI and data model, with role-appropriate information at each stage.

**Discovery and booking:** understand dates, celebrations, priorities and desired media coverage; record a service scope and agreed deliverables. Manual proposal/booking tracking is sufficient initially. Do not invent contracts, prices, payments or guarantees.

**Pre-production:** story/creative questionnaire, reference board, important people, family group list, ceremony coverage plan, interview preferences, portrait opportunities, production contacts, team assignments and client-approved priorities. Coordinate camera coverage with the supplied wedding schedule. Internal equipment or crew notes stay with the team.

**Production:** show the team the agreed event/coverage plan, record shoot/batch status, ingest professional media, collect guest contributions, and publish selected same-day previews only when included and approved. Media capture responsibilities should be clear.

**Post-production:** culling, photo editing/retouching, film edit, color and sound stages, versions, internal quality review, couple review, organized revision requests and approval. Clients see meaningful milestones rather than every technical subtask. Retain original media and version history according to the agreed policy.

**Delivery:** publish an approved collection with photos, films, reels and any agreed album selections. Explain what is ready, what remains due, permitted download choices and the hosting period. Provide a clear support and extension route.

Represent a deliverable as uploaded draft → processing → internal review → couple review when applicable → approved → published. Store versions and identify precisely which version was approved. Visibility, job state and project stage are separate.

First UI release: public enquiry flow, simple client brief/next-action timeline, photo/film gallery, guest collection, sample selfie discovery, private selections/review and an internal production overview. Live backend work follows the documented phased plan.

Use private Frame.io review links initially if the studio already uses it. A full timeline editor, automatic film generator, detailed production accounting, RAW archive and custom frame-accurate review engine are separately scoped extensions.

Optional service additions include social-content capture, same-day edits, a staffed slideshow, guest-memory montage, prints/albums, archival extensions and additional revisions. Only display an addition as an available Jashnama service after the owner confirms its scope and fulfillment. AI suggestions must preserve photographer/editor control and must not fabricate captured memories.

## 17. WhatsApp integration

Stage 1: invitation/gallery share links, QR codes, a “Share wedding” action and human help contact. No automated API is necessary merely to share a URL.

Stage 2: official business messaging for opted-in album-ready updates and guest-initiated assistance. Prefer links into the app over delivering every original in chat. Begin with a clearly identified service number and explicit wedding selection/session mapping.

Stage 3: investigate inbound chat uploads or selfies separately. Validate current provider policies, media formats/size limits, quality, sharing permissions and moderation before implementing. Do not assume personal group history can be imported, or that content received in one customer's chat can be redistributed to others.

Document the current customer-service window, approved-template requirements, message categories, recipient-market pricing, sender onboarding and template approval. Reverify these before connecting live messaging. A planned integration is not connected because its settings screen exists.

Implement opt-in/withdrawal, language choice, deduplication, quiet hours, useful digests, delivery/failure status and human escalation. Cancel pending messages when consent/access is withdrawn. Generic album updates do not need a retained selfie; personalized match alerts would need the separate face-reference design described above.

Use an adapter for direct Meta or a provider such as Twilio. Compare total provider and Meta fees. Never use unofficial WhatsApp automation or send real messages from the UI prototype.


## 18. Deployment and configuration handoff

Keep the UI runnable without cloud accounts. Default the prototype to demo mode. Provide an environment template containing placeholder names only and document which process needs each value.

Suggested application configuration names follow; adapt them to verified SDK requirements rather than assuming these are provider-mandated names.

| Configuration | Scope / treatment |
| --- | --- |
| APP_ENV, DATA_MODE | Deployment environment and demo/live selection; server must enforce live behavior independently of client controls |
| NEXT_PUBLIC_SITE_URL | Public application URL for navigation, invitations and configured redirects |
| NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY | Intended public Supabase connection information when live auth is enabled |
| SUPABASE_SECRET_KEY | Server-only privileged access; not a default substitute for user-scoped requests |
| AWS_REGION, MEDIA_BUCKET, PROCESSING_QUEUE_URL | Server/worker configuration; Mumbai preferred after availability verification |
| AWS role/identity configuration | Prefer deployment roles and short-lived credentials; document the actual hosting-to-AWS trust setup |
| CDN_DOMAIN, CDN_SIGNING_KEY_ID, CDN_PRIVATE_KEY | Public delivery domain and server-only signing material |
| VIDEO_ACCOUNT_ID, VIDEO_API_TOKEN, VIDEO_WEBHOOK_SECRET | Video provider server/worker configuration; scoped secrets |
| WHATSAPP_PHONE_NUMBER_ID, WHATSAPP_BUSINESS_ACCOUNT_ID | Server-side sender/business identifiers |
| WHATSAPP_ACCESS_TOKEN, WHATSAPP_APP_SECRET, WHATSAPP_WEBHOOK_VERIFY_TOKEN | Server-only messaging/webhook secrets |
| TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN | Optional provider configuration only if Twilio is selected |
| Error reporting configuration | Document browser-visible project routing versus server-only management tokens; redact personal content |
| Upload/retention/search defaults | Typed configuration and/or per-studio/per-wedding settings with safe validation |
| Feature flags | enquiries, creativeBriefs, faceSearch, guestUploads, films, messaging, liveSlideshow, selections, paymentIntegration; independent demo/live support |

Do not put secrets in NEXT_PUBLIC variables, screenshots, logs, sample fixtures, generated URLs or committed files. Explain local, preview and production separation; preview builds must not accidentally use production messages or private galleries.

For this stage, provide a working local or existing preview URL and startup commands for the public website and private demo journeys. Prefer Vercel for the eventual web deployment, as requested in the original project. Preserve the existing live wedding and routing when extending the repository. Production deployment and external provisioning are separate from delivering this UI prompt's requested prototype.

Document domain/HTTPS setup, storage CORS, authentication redirect URLs, webhook URLs, runtime regions, job retries, observability and rollback. Do not assume a desired domain or company subdomain is available until checked. Make public invitation metadata shareable while keeping private gallery content out of search indexes and public social-preview fetches.

The public website and private application should feel continuous under Jashnama, with shared tokens and identity but appropriate navigation and privacy boundaries. A proposed Jashnama domain must be checked for ownership/availability; do not assume jashnama.com or any alternative is owned. The existing Savage Wedding URL should continue working until an authorized migration/redirect plan is verified.

## 19. Cost, quotas and commercial operations

Provide a cost worksheet with editable inputs rather than an “unlimited” promise.

Inputs must include: active weddings, photos/wedding, average original size, derivative multiplier, average indexed faces/photo, search sessions/guest, partition count, API retries, monthly downloads/egress, video storage minutes, watched minutes, message counts/category/recipient market, retention months, backup copies, staff seats and support effort.

Separate:

1. Shared platform subscription/compute.
2. Initial and incremental media processing.
3. Face searches and stored index records.
4. Original/derivative storage.
5. CDN requests and downloaded bytes.
6. Video encoding/storage/delivery.
7. Messaging and optional identity-verification costs.
8. Backup, logs, monitoring and restoration.
9. Engineering, moderation, support, taxes and payment fees where applicable.

Historical research from 30 September 2026 used illustrative starting figures of $20/month for Vercel Pro and $25/month for Supabase Pro. A scenario with 20,000 initial image-indexing calls, 500 guests × 3 searches × 24 partitions, and 80,000 face vectors calculated $20 initial indexing, $36 searches and $0.80/month vector storage using AWS's published example rates. These are not a confirmed Mumbai quote.

The same research modeled 1,000 stored video minutes and 20,000 watched minutes at $25, and 2,000 Twilio-handled messages at $10 before Meta charges. The resulting listed subtotal was $136.80 for that scenario, excluding original storage/CDN/workers, Meta charges, taxes, engineering and support. Do not present that subtotal as the complete bill or a current guaranteed rate. Recheck all provider prices and use actual pilot measurements.

Jashnama earns revenue primarily through agreed photography/film/media-production services. Position the digital wedding space as part of that service. Keep storage, search calls and video-processing units in internal cost/operations views, not as the public site's main pricing story.

Document included hosting, optional archival extensions and any clearly agreed limits in client terms. Sell optional media services only after scope and fulfillment are confirmed. Automated software subscriptions, per-guest gallery checkout and third-party studio plans are outside the present release.

Track costs per project to protect service margins. Alerts, fair scheduling and configurable limits must prevent an abusive upload link or large batch from consuming the budget. Explain limit/expiry resolution without silently deleting customer memories.

## 20. Performance and reliability criteria

These are proposed pilot targets, not claims that the prototype has proven production capacity:

- Useful guest gallery content within roughly 2–3 seconds on an agreed mid-range phone/4G profile.
- Initial selfie results within 5 seconds and complete results within 15 seconds at the agreed load, after necessary API capacity is approved.
- At least 99% precision for automatically displayed matches on a labeled, consented evaluation set; report recall separately and investigate misses.
- Correct behavior at 10,000–30,000 photos per wedding with cursor pagination and lightweight thumbnails.
- Rehearsal scenarios of 100 uploaders, 300 viewers and 50 simultaneous fresh face searches, adjusted to actual expected use.
- No silent file loss, duplicate publication, truncated search result set or cross-wedding access.
- Clear degraded behavior if recognition, messaging or video conversion is delayed.

Raw upload bandwidth cannot be solved with animation. At 20 Mbps upstream, transferring 200 GB takes roughly 22 hours before overhead. Plan for edited batches during events and complete-library uploads afterward.

Instrument upload failures, queue age, conversion/index throughput, search completeness and latency, CDN/download costs, message failures and tenant usage. Use aggregate metrics and safe identifiers rather than personal content. Provide health alerts and a wedding-day runbook for stalled jobs, lost connections, vendor outages and manual gallery delivery.

Retain independent photographer backups. Define recovery objectives with the business, test restoration, and keep invitation/browsing functional when optional services fail. Avoid claiming that a cloud storage bucket by itself is a tested backup strategy.

## 21. Implementation sequence

Complete the UI now in this order:

1. Audit the supplied brand/asset material and existing code; summarize brand interpretation and unresolved factual inputs.
2. Establish Jashnama tokens, typography, public/client navigation and exact wedding seed data.
3. Build the public home, film/photography portfolios, experience/services, about and enquiry flow, plus returning-client entry.
4. Build the couple brief/milestones/review workspace, guest invitation/media/upload/selfie-demo flows, and internal enquiry/production/media tools.
5. Connect shared demo state, permissions simulation, realistic async/error behavior and two-wedding isolation.
6. Validate responsive layouts, crop safety, large text, Hindi, keyboard use and reduced motion.
7. Deliver backend contracts, configuration template, handoff documentation and a clear implementation-status matrix.

After the UI is reviewed, the production sequence is:

- Proof of concept using 500–1,000 consented photographs across two test weddings; verify upload resilience, actual matching, index completeness, tenant isolation, service quotas and cost.
- Core production auth/database/storage/queue pipeline.
- Face matching, professional batch delivery, video and downloads.
- Optional official WhatsApp messaging.
- Load rehearsal, privacy/deletion verification, recovery testing and launch preparation.
- Subsequent confirmed Jashnama production services, improved client collaboration and optional payment/accounting integrations.

Earlier planning suggested approximately 6–10 weeks for a focused team's first production release, subject to staffing, assets, provider onboarding and measured failures. Treat it as an estimate, not a promise. For the December 2026 pilot, aim for a guest rehearsal and fallback decision by late November and a stable essential release in early December. Reassess dates if the start date or staffing differs.

## 22. Required deliverables

Deliver the following, scaled sensibly to the supplied environment:

1. A runnable interactive frontend with a working preview/start command.
2. A concise brand interpretation with extracted design tokens and asset decisions.
3. Responsive public website, couple workspace, guest media experience and internal Jashnama screens with their essential journeys connected.
4. Reusable components and typed domain/service interfaces.
5. Deterministic, privacy-conscious demo fixtures for two weddings.
6. A public-to-private journey map, route/screen inventory and role/action permission matrix.
7. Backend architecture, logical data dictionary/relationships, API contracts and workflow states.
8. An environment/configuration template with no credentials.
9. A feature-status matrix distinguishing working UI, simulated behavior, production integration required and future scope.
10. A cost-input worksheet, retention proposal, operational assumptions and launch checklist.
11. A README explaining setup, changing events/images/branding, demo limitations, verification and the next production milestones.
12. Representative mobile and desktop screenshots if the environment supports them.

Do not report planned work as implemented. If a tool or environment prevents an item, deliver the rest and identify the exact limitation.

## 23. Acceptance criteria

For the UI delivery:

- The company brand is Jashnama and can be traced to the attachments; wedding-specific styling remains configurable.
- A new visitor can quickly understand that Jashnama offers wedding films/photography and the complete associated media journey.
- The public site leads to portfolio viewing and a qualified enquiry; existing clients can find “Your Wedding.”
- The enquiry, brief, coverage planning, edit review and delivery stages form a coherent relationship.
- Public portfolio items require explicit marketing approval and never reveal private albums automatically.
- The interface offers Jashnama services rather than third-party software subscription plans.
- The Savage Wedding names, five events, dates, timings, city and hashtag are correct.
- Exact venue details remain pending rather than fabricated.
- Hero/Royal Affair use the best available appropriate varmala/Royal imagery; the preferred Rave & Raas image does not crop heads.
- Guest uploads, sample face search, album filters, favorites, selections, moderation and navigation have coherent interaction states.
- Guest/professional, shared/restricted, and draft/published distinctions are understandable.
- Every key action either works in the demo or explains its unavailable state clearly.
- Demo upload/matching/messaging does not claim a live backend outcome.
- Switching test weddings cannot expose the other's private fixture records; document that this does not prove server security.
- Mobile layouts, long names, Hindi text, large text, keyboard operation and reduced motion are checked.
- Useful content appears without waiting for decorative animation; there are no broken assets, dead-end primary actions or obvious console errors.
- Build/type/lint checks appropriate to the actual project pass, and meaningful interaction checks cover the primary flows.
- A feature-status matrix and concrete production handoff are included.

Before production:

- Test database policies, APIs, storage signing, search sessions, jobs and callbacks for cross-tenant access and privilege escalation.
- Verify actual upload integrity, cancellation/retry/reconciliation, indexing completeness and provider webhook handling.
- Measure face precision/recall, shared regional quotas, latency and cost using representative consented media.
- Verify revocation, consent withdrawal, deletion/expiry across providers, retention and restoration.
- Rehearse realistic load and vendor failure paths.
- Confirm current provider pricing, contracts, API eligibility and applicable privacy requirements.
- Have older guests complete upload/find/download tasks without coaching and fix observed friction.

## 24. Research context and verification references

The architecture comes from the research conducted in this project on 30 September 2026. If attached, WEDDING_MEDIA_PLATFORM_RESEARCH.md provides the rationale and fuller comparisons. The current document is self-contained; use research links to verify current implementation details, not to substitute for building the requested UI.

Existing-product benchmarks: Kwikpic for guest/professional wedding sharing; AccioPix for WhatsApp selfie delivery; GUESTPIX for simple guest collection; Pic-Time for professional galleries/selfie discovery; Frame.io for video review. Do not copy their identity or assume their products expose APIs, embedding, reseller rights or white-label licenses.

Primary references:

- Vercel upload limitation: https://vercel.com/docs/errors/function_payload_too_large
- Supabase documentation and security: https://supabase.com/docs and https://supabase.com/docs/guides/database/postgres/row-level-security
- Supabase change verification: https://supabase.com/changelog.md
- S3 multipart uploads: https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html
- Rekognition indexing: https://docs.aws.amazon.com/rekognition/latest/APIReference/API_IndexFaces.html
- Rekognition search: https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchFacesByImage.html
- Rekognition regions/quotas: https://docs.aws.amazon.com/general/latest/gr/rekognition.html
- AWS recognition pricing: https://aws.amazon.com/rekognition/pricing/
- Stream pricing: https://developers.cloudflare.com/stream/pricing/
- WhatsApp policy: https://business.whatsapp.com/policy
- WhatsApp pricing: https://business.whatsapp.com/products/platform-pricing/
- Twilio WhatsApp pricing: https://www.twilio.com/en-us/whatsapp/pricing
- Frame.io review workflow: https://help.frame.io/en/articles/9105251-commenting-on-your-media
- India's notified rules/timeline: https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa?pageTitle=Digit

## 25. Begin work

Inspect the attached Jashnama brand guidelines, supplied portfolio/wedding assets and existing project. Briefly state the brand interpretation and material assumptions, then build the public website and connected private UI.

Use the confirmed service-led positioning. Choose sensible defaults for reversible implementation details and continue independently. Ask only for missing information that materially blocks correctness. Missing venue addresses, prices, marketing claims, portfolio permissions or integration secrets should be represented honestly without blocking a useful demo.

Prioritize Jashnama's creative work and service clarity on the public site, a calm collaborative experience for the couple, an easy guest gallery, and dependable internal production workflows. Deliver the prototype with a credible, clearly documented route to the production architecture above.


</details>

[Back to contents](#start)

<a id="archive-positioning"></a>
### Original positioning and experience brief

<details>
<summary>Expand full snapshot: JASHNAMA_POSITIONING_AND_EXPERIENCE.md</summary>

# Jashnama positioning and website direction

Discussion synthesis · 1 October 2026

## Confirmed direction

Jashnama serves couples and families booking wedding films, photography and the associated media-production service. The web application is part of that service. It is designed to support multiple Jashnama weddings from the start.

## Recommended positioning

**Public category:** Wedding films & photography.

**Expanded description:** A wedding media studio, from creative planning to final delivery.

**Draft positioning statement:** Jashnama creates wedding films and photographs with care at every stage—from understanding your story and planning the coverage to shaping, organizing and delivering your memories.

**Optional copy direction:** “Your celebrations, beautifully told.”

The descriptive line establishes what people can book. The emotional line can express the brand's character. Final tone and wording should follow the supplied brand guidelines; the suggested line is not a finalized tagline.

“Media management” describes important work behind the experience, but couples are more likely to understand its value through concrete outcomes: an organized collection, a simple review process, dependable downloads and clear delivery updates. Explain the capability through those outcomes.

Use media creative direction, production planning or coverage coordination for the planning work. “Event curation” can suggest responsibility for decor, venues, hospitality and other event operations. Jashnama's stated scope covers how the celebration is captured and delivered.

## One brand, four connected experiences

| Experience | Primary audience | Job |
| --- | --- | --- |
| Jashnama public website | Prospective couples/families | Show the quality of the work, explain the approach, earn trust and invite an enquiry |
| Your Wedding | Booked couple and authorized family collaborators | Share a brief, references and priorities; track agreed milestones; review and receive work |
| Wedding gallery | Invited guests and family | Browse approved media, contribute phone memories, optionally find photos with a selfie |
| Jashnama studio workspace | Producer, photographers, filmmakers, editors and owner | Coordinate the media project, handle files, manage versions/approvals and deliver |

Keep Jashnama as the master brand. “Your Wedding” is a navigation label rather than a separate app brand. The Savage Wedding is an individual client experience: its names, hashtag and imagery take priority within its private wedding space, with a discreet Jashnama endorsement.

## How the relationship works

1. A couple discovers an approved film, photograph or wedding story.
2. They explore Jashnama's approach and send an enquiry.
3. The team discusses the requirements and confirms an agreed service scope.
4. The booked couple receives access to Your Wedding.
5. Before the celebrations, they share references, key people, priorities and the media brief.
6. During the wedding, the crew follows the coverage plan and guests can contribute selected memories.
7. Afterward, the couple sees meaningful editing/review milestones, makes selections and gives feedback.
8. The approved collection becomes available for viewing, sharing and permitted downloads for the agreed hosting term.

A person submitting an enquiry is not automatically a booked client, and a guest is not automatically allowed to view private production discussions.

## Public website structure

Recommended main navigation: Films, Photography, The Experience, About, Enquire.

Keep Your Wedding as a visible utility for returning clients and guests. Add Stories when there are authentic, approved case studies.

The homepage should establish:
- What Jashnama does.
- What the work feels like.
- How the team works with a couple.
- What happens after the shoot.
- How to enquire.

Suggested primary CTA: “Tell us about your wedding.”
Suggested secondary CTA: “Watch our films.”

Present the private wedding space as a service benefit: a place to prepare, collaborate and enjoy the collection. Lead with real work and an understandable promise. Technical features can support the explanation deeper in the site and within the client experience.

A branded gallery combining photo and film delivery is an established product pattern; Pic-Time provides one practical reference. This supports the integration concept, not a recommendation to copy its branding or assume access to its APIs. [Pic-Time photo/video delivery](https://www.pic-time.com/features/video-delivery).

## Service architecture

- **Creative planning:** understand the couple's story, references, important people and coverage priorities.
- **Capture:** photography, filmmaking and any explicitly agreed social-content coverage.
- **Post-production:** photo selection/editing, film edit, grade/sound, client reviews and agreed revisions.
- **Delivery:** curated galleries, films/reels, selections, downloads and a defined hosting period.

Same-day edits, staffed slideshows, guest-memory montages, prints/albums and archival extensions are optional offerings for the owner to confirm. Public pages must not promise services, prices, crew availability or turnaround times that have not been established.

## Business and product priorities

The immediate business model is Jashnama's media-production service. Hosting and gallery access can be included in the agreed scope, with clearly explained extensions where appropriate. Per-photo API calls and internal storage costs belong in operations, not the main customer proposition.

Maintain project isolation and a sound organization model internally. Selling the software to other studios can be evaluated later after the Jashnama workflow is proven. It does not need to appear in the initial navigation, onboarding or checkout.

## What changes in the master prompt

The revised prompt adds public portfolio and enquiry pages, client onboarding, creative briefs, coverage planning, production roles, deliverable/version review and final handover. It retains the earlier guest uploads, professional library, face matching, video, WhatsApp options, accessibility, tenant controls and cloud architecture.

It also separates public portfolio permission from private delivery, and keeps the first build as an honest UI prototype with documented live integrations.

Use **JASHNAMA_WEBSITE_AND_WEB_APP_MASTER_PROMPT.md** as the updated build brief, together with the brand guidelines and approved media assets.


</details>

[Back to contents](#start)

<a id="archive-ux-prompt"></a>
### Supplied UI/UX refinement prompt

<details>
<summary>Expand full snapshot: Pasted text.txt</summary>

You are working on an EXISTING React-based premium wedding media website/app called Jashnama.

This is NOT a redesign.

The existing product already has:
- its UI
- page structure
- layouts
- backend
- routes
- components
- brand identity
- colours
- imagery
- wedding films
- photography
- copy
- functionality
- data structures

Treat the existing implementation as the source of truth.

Your job is to upgrade the EXPERIENCE, MOTION SYSTEM, INTERACTION QUALITY, VISUAL FINISH, RESPONSIVENESS, TYPOGRAPHIC POLISH and perceived quality of the existing product so it feels comparable to an extremely refined Apple-quality consumer product combined with a world-class luxury creative studio.

Do not invent a new website.

DO NOT:
- redesign pages from scratch
- change the brand identity
- replace the existing creative assets
- invent new photography or video
- create new sections simply for visual effect
- rewrite the website copy unnecessarily
- change the site's content strategy
- restructure the backend
- change APIs or database models unless absolutely required for compatibility
- alter working business logic
- remove existing functionality
- introduce generic AI-looking gradients or excessive glassmorphism
- turn every surface into glass
- make the site feel like a SaaS dashboard
- copy another website literally

Preserve Jashnama.

Upgrade how Jashnama FEELS.

REFERENCE PHILOSOPHY

Study the interaction philosophy and level of craft of:

Wedding / luxury storytelling:
- The Wedding Filmer
- House on the Clouds
- WeddingNama
- Stories by Joseph Radhik

Premium digital storytelling:
- Immersive Garden
- Unseen Studio
- Lusion
- Cuberto
- Locomotive
- Refokus
- Obys

World-class software / UX:
- Apple
- Linear
- Raycast
- Stripe
- Vercel
- Framer
- Notion

Do not clone these products.

Extract principles from them:
- motion feels intentional
- navigation feels effortless
- interactions respond instantly
- content remains the hero
- transitions maintain spatial continuity
- typography creates hierarchy
- controls are obvious without looking heavy
- complex functionality feels simple
- every state feels designed
- premium does not mean complicated
- animation communicates relationships instead of merely decorating the screen


==================================================
1. FIRST AUDIT THE EXISTING APPLICATION
==================================================

Before making changes, inspect the entire frontend architecture.

Understand:
- framework and React version
- routing
- layouts
- page hierarchy
- component system
- CSS architecture
- Tailwind/configuration if present
- animation libraries already installed
- typography
- responsive breakpoints
- media handling
- forms
- modals
- navigation
- galleries
- project/couple pages
- video players
- loading states
- hover states
- route transitions
- mobile navigation
- accessibility
- current performance bottlenecks

Reuse the existing stack whenever possible.

Do not add libraries just because they are fashionable.

If Framer Motion / Motion already exists, use it intelligently.

If GSAP already exists, use it for sophisticated timeline or scroll-linked sequences.

If neither exists, determine whether the required polish can be implemented with CSS, the Web Animations API and existing React capabilities before introducing another dependency.

Do not globally hijack native scrolling merely to make scrolling feel "smooth".

Trackpads, touchscreens, mouse wheels, keyboard navigation and browser scrolling should continue feeling natural.


==================================================
2. CREATE A COHERENT MOTION SYSTEM
==================================================

The existing site should feel as though one motion designer designed the entire application.

Create reusable motion tokens/primitives instead of writing unrelated animations in every component.

Establish:
- micro interaction timing
- standard transition timing
- cinematic transition timing
- easing curves
- spring behaviour
- stagger rules
- reveal behaviour
- opacity transitions
- scale behaviour
- route transition behaviour
- modal behaviour
- drawer behaviour
- hover behaviour

Motion must feel fluid, calm, expensive and physical.

Avoid:
- bouncy startup-template animations
- huge overshoots
- excessive rotation
- random floating
- constant animation
- unnecessarily long entrance animations
- animating every piece of text independently
- scroll hijacking
- effects that make the site tiring to navigate

Animations should generally rely on transform and opacity rather than layout-changing properties.

Preserve 60fps wherever reasonably possible.

Desktop motion can be richer than mobile motion.

On touch devices, replace hover-dependent behaviour with appropriate tap behaviour.

Support prefers-reduced-motion throughout the application.


==================================================
3. PREMIUM LIQUID GLASS SYSTEM
==================================================

Introduce a restrained Apple-inspired Liquid Glass visual language.

IMPORTANT:
Liquid Glass is a FUNCTIONAL interface layer.

It should not become the visual treatment of the entire website.

Content — especially wedding imagery and cinema — must remain visually dominant.

Good candidates for glass treatment include EXISTING:
- navigation
- floating navigation states
- mobile navigation
- menus
- dropdowns
- overlays
- lightboxes
- media controls
- modal surfaces
- floating action controls
- filters
- selected controls
- compact sticky utilities

Only apply it where the existing interface naturally contains these elements.

The glass should feel optically sophisticated rather than like a basic:
backdrop-filter: blur(...)

Build a reusable glass treatment that can account for:
- background translucency
- backdrop blur
- subtle saturation
- hairline translucent borders
- soft inner highlight
- subtle edge/specular highlight
- restrained layered shadow
- contextual light/dark adaptation
- elevation
- hover/focus state
- active/pressed state
- surrounding imagery

Glass must retain readable contrast regardless of what media scrolls behind it.

Where practical, allow the glass/navigation layer to respond subtly to whether the underlying content is predominantly light or dark.

Do not stack multiple heavy glass layers on top of one another.

Avoid "frosted card soup".

The feeling should be closer to Apple / current Raycast:
content underneath,
functional material floating above it.

Provide graceful fallbacks where backdrop-filter is unavailable.


==================================================
4. TYPOGRAPHY
==================================================

Do not throw away Jashnama's existing typographic identity.

Preserve the current brand/display typeface if it is part of the brand language.

Improve the APPLICATION/UI typography around it.

The UI should have the clarity, spacing discipline and familiarity associated with premium Apple software.

For interface typography, prefer the existing system if already strong.

Otherwise use a system-oriented stack such as:

-apple-system,
BlinkMacSystemFont,
"Segoe UI",
Geist,
Inter,
Helvetica,
Arial,
sans-serif

Do NOT download, bundle or self-host Apple's SF Pro font files for the website.

On Apple hardware, the system stack can naturally use the native Apple system typeface.

If Geist or Inter already exists in the project, use it rather than introducing another redundant font.

Use restrained font weights.

Improve:
- hierarchy
- line height
- text wrapping
- optical alignment
- tracking
- label sizing
- button typography
- metadata
- captions
- form typography

Avoid tiny ultra-light text merely because it looks "luxury".

Elegance should come from proportion and spacing, not poor legibility.


==================================================
5. PAGE AND ROUTE TRANSITIONS
==================================================

Navigation between pages should feel continuous rather than like the browser is replacing one document with another.

Introduce tasteful page transition behaviour where technically appropriate.

Transitions should:
- be fast
- preserve orientation
- maintain context
- avoid blank flashes
- avoid unnecessary loading screens
- avoid making repeat navigation slow

For project/couple/film pages, preserve visual continuity where possible.

When navigating back to a gallery/index, restore appropriate scroll context whenever the current architecture supports it.

Do not force cinematic transitions onto every functional action.


==================================================
6. SCROLL EXPERIENCE
==================================================

Scrolling should feel native and extremely polished.

Use scroll animation selectively for:
- revealing important sections
- subtle media parallax
- typography entrances
- project transitions
- image/video framing
- sticky storytelling sequences already present in the design

Avoid animating every section just because it enters the viewport.

The website should still be enjoyable when somebody scrolls quickly.

The experience should never trap the user inside an animation.

Use IntersectionObserver or appropriate existing animation infrastructure rather than attaching expensive continuous listeners everywhere.


==================================================
7. IMAGE, FILM AND GALLERY INTERACTIONS
==================================================

Jashnama is fundamentally a visual storytelling product.

Media should remain the hero.

Do NOT replace or invent media.

Improve the way EXISTING media behaves:
- loading
- transitions
- hover response
- reveal
- lightbox behaviour
- gallery navigation
- fullscreen behaviour
- video controls
- poster transitions
- next/previous navigation
- responsive cropping
- loading placeholders

Avoid layout shift.

Preload only high-priority media.

Lazy-load content that is below the fold.

Do not automatically load several heavy wedding films simultaneously.

Use video rather than GIF for moving photographic assets when relevant.

Respect reduced-motion and bandwidth constraints.


==================================================
8. MICROINTERACTIONS
==================================================

Audit every interactive element.

Buttons, links, thumbnails, cards, menus, close buttons, arrows, inputs, filters and controls should visibly respond.

Create refined:
- hover
- focus
- active
- pressed
- selected
- disabled
- loading
- success
- error

states.

Interaction response should begin immediately.

The site should feel tactile without becoming playful or gimmicky.

Use very small changes in:
- opacity
- translation
- scale
- border intensity
- glass highlight
- icon position
- underline/reveal behaviour

rather than dramatic effects.


==================================================
9. CUSTOMER JOURNEY
==================================================

Apply product-UX lessons from Apple, Linear, Raycast, Stripe and Vercel.

The luxury aesthetic must never make the website harder to use.

Review the existing journey from:
discovery
→ portfolio/work
→ wedding/project details
→ understanding Jashnama
→ enquiry/contact
→ completion/confirmation

DO NOT redesign this journey or change backend requirements.

Instead remove interaction friction inside the existing journey.

Make sure:
- the next logical action is understandable
- navigation is predictable
- back behaviour works naturally
- CTAs respond immediately
- users never reach dead ends
- errors explain how to recover
- loading is communicated intelligently
- mobile behaviour is as considered as desktop
- important actions do not depend on hover
- forms preserve entered information when possible
- autofill works
- validation appears near the relevant field
- keyboard navigation works
- focus indicators remain visible
- touch targets are comfortably sized
- browser Back/Forward behaviour is respected

Do not sacrifice clarity for cleverness.


==================================================
10. MOBILE EXPERIENCE
==================================================

Do not treat mobile as a scaled-down desktop site.

Audit every page at:
- small iPhone widths
- modern large phones
- tablets
- laptops
- desktop
- ultra-wide screens

Preserve the same Jashnama identity at every breakpoint.

Reduce motion complexity where necessary.

Avoid:
- tiny controls
- accidental horizontal overflow
- clipped typography
- overlapping glass navigation
- giant desktop typography simply shrinking proportionally
- hover-only functionality
- video layouts that destroy page performance

Mobile inputs should remain comfortably readable and should not trigger unwanted browser zoom.


==================================================
11. PERFORMANCE
==================================================

Premium means fast.

Do not achieve visual quality by making the site sluggish.

Audit:
- JS bundle size
- unused animation libraries
- image sizing
- next/image or equivalent usage
- video loading
- font loading
- layout shift
- unnecessary rerenders
- excessive observers/listeners
- backdrop-filter cost
- WebGL cost if any already exists
- route bundle splitting

Do not add WebGL/Three.js merely because Lusion or Immersive Garden uses it.

Only keep/use expensive visual technology where it genuinely improves an EXISTING Jashnama interaction.

Ensure expensive effects degrade gracefully on low-power/mobile devices.


==================================================
12. ACCESSIBILITY AND INPUT QUALITY
==================================================

Premium interaction quality includes accessibility.

Maintain semantic HTML.

Ensure:
- keyboard navigation
- visible focus states
- sufficient contrast
- labelled icon-only controls
- correct button/link semantics
- usable modal focus management
- Escape closes appropriate overlays
- reduced-motion support
- meaningful image alt behaviour
- accessible video controls
- no interaction depends solely on colour
- no interaction depends solely on pointer hover

Do not disable browser zoom.


==================================================
13. DESIGN SYSTEM CLEANUP
==================================================

Where useful, consolidate repeated behaviour into shared primitives/tokens.

Potential examples:
- motion tokens
- easing tokens
- glass surface component
- interactive button primitive
- modal transition
- page transition wrapper
- image reveal primitive
- hover media primitive
- typography utilities
- focus styles

Do this only when it reduces duplication.

Do not perform a huge architectural rewrite solely for cleanliness.


==================================================
14. QUALITY BAR
==================================================

When reviewing an interaction, ask:

Does this feel like it belongs in a premium native application?

Does it respond immediately?

Does the movement explain something?

Does it help users understand where they came from and where they are going?

Does it allow the wedding film/photography to remain the hero?

Would removing this animation make the interface less understandable or less refined?

If the animation exists only to prove that the site has animation, remove it.

The desired feeling is:

cinematic
+
editorial
+
luxurious
+
intimate
+
technologically sophisticated
+
extremely easy to use

NOT:

flashy agency demo
+
glass everywhere
+
3D everywhere
+
animation everywhere.


==================================================
15. IMPLEMENTATION PROCESS
==================================================

Work directly with the existing repository.

Phase 1:
Audit the project and identify the highest-impact areas.

Phase 2:
Create the shared motion/glass/interaction foundation.

Phase 3:
Upgrade global navigation and page transitions.

Phase 4:
Upgrade homepage and major portfolio/gallery interactions.

Phase 5:
Upgrade project/wedding/film-detail interactions.

Phase 6:
Upgrade enquiry/forms and functional product interactions.

Phase 7:
Mobile/responsive polish.

Phase 8:
Accessibility and performance pass.

Phase 9:
Cross-browser QA.

Do not stop after producing recommendations.

Implement the improvements.

After implementation:
- run lint
- run type checking
- run tests if present
- run the production build
- fix errors you introduce

Finally give me a concise report containing:

1. files changed
2. motion system created
3. glass system created
4. interactions upgraded
5. performance optimisations
6. accessibility improvements
7. anything intentionally left unchanged and why

Most importantly:

DO NOT REDESIGN JASHNAMA.

Make the Jashnama that already exists feel as if the same interface was taken through several additional rounds of obsessive interaction design, motion design, product design and frontend refinement by a world-class team.

</details>

[Back to contents](#start)

<a id="archive-brand"></a>
### Brand

<details>
<summary>Expand full snapshot: BRAND.md</summary>

# Brand interpretation

Source: supplied Jashnama identity concept board, inspected before implementation.

| Element | Source interpretation / implementation |
| --- | --- |
| Master brand | Jashnama |
| Source descriptor | Wedding Cinema & Visual Direction |
| Public service descriptor | Wedding films & photography |
| Source signature | Celebrations. Directed. |
| Charcoal | `#111111` |
| Warm ivory | `#F5EFE6` |
| Burnished gold | `#B38A4A` |
| Deep oxblood | `#5B1E26` |
| Display type | Playfair Display, locally hosted open-font package |
| Body type | Montserrat, locally hosted open-font package |
| Devanagari | Noto Sans Devanagari / system Devanagari fallback; no invented proprietary font license |

The board supplies a raster wordmark and monogram, not approved vector files. The website uses a provisional typographic JASHNAMA wordmark and simple J favicon; it does not claim a reconstructed SVG is the official mark. No clear-space or minimum-size rules were supplied, so spacing is an implementation choice. Final vector artwork remains an owner input.

The visual direction combines a charcoal cinematic opening, gold accents, warm ivory editorial sections, restrained rules and generous spacing. Oxblood anchors private action controls. Gold small text is darkened on ivory (`#866432`) and lightened on charcoal (`#D3B079`) where needed for readability. Main body text is charcoal or muted brown. The source gold is not used as white-on-gold body text.

Three AI-generated concept photographs were created for this build: heritage-arch couple scene, ritual hands detail and coordinated celebration lighting. They are clearly labeled and never attributed as actual Jashnama portfolio work or photographs of Vedant/Sakshi. WebP copies are optimized for delivery; original generation outputs remain local. Real Royal Affair / varmala and Rave & Raas photographs were not supplied, so the future wedding uses an expressly identified concept image and restrained sample placeholders.

The couple's private identity appears ahead of the discreet Jashnama endorsement. The second wedding is explicitly fictional and uses separate abstract placeholders. Future theme overrides should stay confined to wedding views.

Unconfirmed generated stationery contact details were not adopted. No portfolio credit, venue, client testimonial, team biography, award, price, deadline, service location or business claim was invented.


</details>

[Back to contents](#start)

<a id="archive-ui-ux-refinement"></a>
### Ui Ux Refinement

<details>
<summary>Expand full snapshot: UI_UX_REFINEMENT.md</summary>

# Experience refinement · 1 October 2026

This pass preserves the existing page hierarchy, palettes, fonts, imagery, service positioning, wedding records and preview business flows. The Knock Knock reference is limited to the owner's supplied professional cinematic experience; no portfolio attribution, awards or client claims were added.

## Changed surfaces

- `src/app/refinements.css`, `src/lib/motion.ts`, `src/components/experience-motion.tsx`: reusable 120 / 240 / 420 ms timings, calm easing, small opacity/transform transitions, selective one-time reveals and reduced-motion cancellation. Browser Back/Forward keeps native scroll restoration; scrolling is not intercepted.
- `src/components/site-shell.tsx`, `editorial.tsx`, `workspace.tsx`: sticky navigation, native modal focus containment and Escape dismissal, scroll locking, readable controls, touch targets and existing gallery interactions.
- `src/components/enquiry-form.tsx`, `enquiry-state.tsx`, `src/lib/enquiry.ts`: visit-scoped draft preservation across client navigation, contact-method values retained independently, inline validation with first-error focus, copy/download/edit receipt, optional fields, pending/error/retry states. Reload clears the draft; no browser storage stores personal details.
- `src/app/api/enquiries/route.ts`, `.env.example`: optional server handoff adapter. It remains disabled in production until a real receiving service is configured.
- `src/app/{page,about/page,privacy/page,enquire/page,layout,robots,sitemap}.tsx/ts`: small credibility/privacy clarification, endpoint readiness and public discovery metadata.
- `tests/`, `eslint.config.mjs`, package manifest/lockfile: input and backend failure-path coverage, lint tooling and the official TypeScript 6 API compatibility alias alongside the TypeScript 7 compiler.

## Material and performance

Dark translucent material appears on scrolled navigation, mobile navigation and compact image controls. Warm solid surfaces remain behind copy, forms, cards and dialog content. Opaque fallbacks, reduced-transparency/contrast preferences and smaller mobile blur are included. Borders, an inner highlight and restrained shadows give controls separation without stacking large blurred panels.

No new animation framework, imagery, WebGL or background video was introduced. WAAPI animates only opacity and transform. IntersectionObservers disconnect after use; listeners and animations clean up when routes change. Selected videos receive a five-second metadata timeout, error cleanup and temporary URL cleanup. Selection is capped before file preview creation; same-batch duplicates are detected. Existing image dimensions, lazy gallery loading and optimized WebP assets are preserved.

## Accessibility

Native dialogs provide background inertness and keyboard focus handling. Form errors are associated with inputs; success headings receive focus. Focus outlines remain visible; checked/selected controls have semantic state. Input sizes avoid mobile zoom, most functional controls have at least 44 px touch areas, and essential actions remain available without hover. Display typography remains Playfair Display with Montserrat UI text. No Apple font files were added.

## Deliberately preserved and pending

The public design and private demo data model remain intact. No real films or approved portfolio assets were supplied; concept labels remain. Authentication, cloud galleries, face matching, live messaging and a durable studio database are still unconnected. This pass does not turn public demonstration routes into private client spaces. Cross-device/browser evidence and limitations are recorded in `VERIFICATION.md`.

Primary design references: [Apple motion guidance](https://developer.apple.com/design/human-interface-guidelines/motion), [The Wedding Filmer](https://www.theweddingfilmer.com/), [House on the Clouds](https://www.houseontheclouds.in/). Implementation compatibility follows [Microsoft's TypeScript side-by-side guidance](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6-0).


</details>

[Back to contents](#start)

<a id="archive-personalized-experience"></a>
### Personalized Experience

<details>
<summary>Expand full snapshot: PERSONALIZED_EXPERIENCE.md</summary>

# Personalised wedding experience

Implemented in the existing React/Next.js application without additional runtime libraries.

## Couple and studio

- Our journey accepts two separate recordings: how the relationship began and how the couple wants their story told.
- Every creative-brief answer accepts audio files and reference attachments, including music files, images, PDFs and MP4. Music references do not imply licensed use. Supported attachments are capped at 25 MB each, 30 files and 150 MB per wedding.
- Audio/video use native playback controls. Attachment previews remain in memory across route changes and release their temporary URLs when removed/reset or the app closes. They are not uploaded to cloud storage. Attachments invalidate the previous brief approval.
- Per-event crew planning includes cinematographers, photographers, drone operators, creative producers, line producers and freeform crew/coordination notes. Couple and studio see the same preview state. Counts are preferences, not confirmed bookings.
- A collection status panel and feedback hub replace the single-film review. Each sample film or photo collection has version-scoped comments, optional timecode/frame references, studio replies, resolved/reopened notes and sample approval. A new version retains older notes and clears approval.

## Enquiries and guest galleries

- The form supports Photography, Wedding films, Jashnama app and The whole experience in both client and server validation.
- The prepared/accepted receipt offers a prefilled WhatsApp handoff whenever an owner-verified business number is configured. The visitor chooses to send in WhatsApp. No number is fabricated while configuration is blank.
- Guest views separate Photos of me, event-filtered collections and My contributions. Sample search results can be saved to Photos of me; actual face matching remains disconnected. Only approved, published, shared photographs can appear as sample matches. An optional contributor display name is shown with gallery cards; sender phone numbers are never used as public labels.
- Share on WhatsApp explains the planned chat journey and allows copying an invitation request, or opening WhatsApp if a business number is configured. It does not claim that WhatsApp uploads are already operational.

## WhatsApp ingress: implemented boundary

`/api/whatsapp/webhook` implements Meta verification and HMAC-SHA256 signed POST validation, bounded body size, configured business-phone filtering and forwarding to a private durable queue. It is disabled by default. It acknowledges media-bearing events only after the configured queue returns `{ "accepted": true }`. A failure returns 503 so delivery can be retried. No incoming payload or sender number is logged.

Server-only environment variables are listed in `.env.example`. Never put app secrets or queue tokens into `NEXT_PUBLIC_*`. No provider, storage account, WhatsApp phone number or face service has been configured in this release.

The downstream worker is **not implemented or connected**. Before live activation it must:

1. Deduplicate by WhatsApp message ID in durable storage and queue media-download jobs before acknowledgement.
2. Resolve the guest through a valid private invitation; maintain a scoped wedding/event session. Never infer authority from a public wedding slug, profile name or caption. Ask which event before accepting unassigned media.
3. Retrieve Meta media IDs with server credentials, download their temporary URLs, enforce MIME/size/checksum rules, scan/process media and store it in private wedding-scoped cloud storage.
4. Keep query selfies out of gallery ingestion. Require explicit face-processing consent and a separate selfie step; discard query media according to agreed retention. Provide browsing without face search.
5. Match only against the guest's authorised wedding and shared collection, then issue private expiring result links. Face matching must not identify or link a guest across unrelated weddings.
6. Add contributor aliases only with permission. Publish contributions only after moderation, tag the correct event and update authenticated collection APIs. Do not expose real files through the current public preview fixtures.
7. Implement withdrawal/deletion, failed-job retries and reconciliation, rate limits, signed storage access and provider-appropriate outbound messaging.

This prevents a webhook from pretending that data has reached a gallery merely because an HTTP request arrived. A durable storage/authentication integration is required for real personal recordings, collections and studio feedback as well.

Protocol references: [Meta webhook verification and signature handling](https://whatsapp.github.io/WhatsApp-Nodejs-SDK/api-reference/webhooks/start/) (protocol reference only; archived SDK not installed) and [Meta Cloud API media reference](https://www.postman.com/meta/whatsapp-business-platform/folder/13382743-ecb27be5-4d27-4763-bbee-6a8002c04bf3).


</details>

[Back to contents](#start)

<a id="archive-production-handoff"></a>
### Production Handoff

<details>
<summary>Expand full snapshot: PRODUCTION_HANDOFF.md</summary>

# Jashnama production handoff

Prepared 1 October 2026 from the supplied master prompt and positioning brief. This document specifies the next live-integration phase; it is not evidence that these services are running. The application is a Next.js App Router + React + TypeScript website with browser-local demonstration journeys, suitable for a separate Vercel project. Keep the existing Savage Wedding deployment intact until a migration is explicitly agreed.

## Delivery boundary

The business is wedding films, photography and the related media-production service. Creative planning includes story conversations, shot priorities, lighting coordination with the event curator/planner and lighting team, production, editing, review and delivery. Event planning, decor, venue operations and unconfirmed optional services are outside the published service scope.

The public website, couple workspace, guest gallery and studio workspace share one brand. Their access boundaries are different. A prospect is not a booked client, a guest cannot read private production notes, and signing in never grants access to all weddings.

No authentication, private server storage, real recognition, automated messaging, payment or durable enquiry inbox is connected in this release. Browser-local demo state is not an access-control system. Enquiry contact requires owner-verified `NEXT_PUBLIC_CONTACT_EMAIL` or `NEXT_PUBLIC_WHATSAPP_NUMBER`; the visitor opens the provider and sends the message. A preview receipt means neither server acceptance nor delivery.

## Production architecture proposal

| Layer | Responsibility | Important boundary |
| --- | --- | --- |
| Next.js web application on Vercel | Public pages, role-appropriate UI, small request handlers | Never proxy original photo/video bodies through ordinary web handlers |
| Identity and relational metadata service | Verified staff/couple identity, scoped guest sessions, memberships, wedding records and permissions | Enforce authorization in database policies and server operations; never trust a client wedding ID |
| Private object storage | Original files and generated image variants | Narrow, expiring direct-upload permissions; private origin and authorized delivery |
| Durable queue and workers | File validation, derivatives, indexing, archive generation, reconciliation and cleanup | Idempotent jobs, bounded retries, dead-letter path and fair scheduling across weddings |
| Managed face-matching adapter | Optional photo indexing and scoped selfie search | Separate consent, per-wedding indexes, completeness tracking and expiry |
| Video adapter | Encoding and adaptive playback | Approved versions only; retain source originals separately |
| Official messaging adapter | Opted-in service notifications and support | Consent checked at send time; deduplication, quiet hours and signed callbacks |
| Operations | Audit trail, job metrics, costs, alerts and restore procedure | Safe identifiers rather than personal content in logs |

The master prompt names preferred providers. Treat those names as a proposed procurement direction. Before integrating, verify official documentation, installed SDKs, regional availability, data-processing terms, quotas, pricing and current policies. This handoff deliberately does not claim current provider limits or legal compliance. Keep each provider behind an interface and use stable internal IDs. A region selection does not establish the processing location of every downstream provider.

### Request and job flow

1. Resolve the authenticated actor or scoped guest session. Verify wedding membership, resource visibility, action permission, expiry and revocation.
2. Validate bounded input and reserve the relevant allowance. Return an idempotent result or a short-lived direct-upload authorization.
3. Verify the stored object's size, checksum, actual type and ownership before acknowledging verified storage.
4. Queue durable processing. Preserve originals, normalize orientation, create display/index derivatives and remove sensitive metadata from guest-facing variants.
5. Moderate and publish only through an authorized decision. A successful upload, conversion or face index is not publication.
6. Recheck current permissions before returning gallery results, private review links, search matches or signed download URLs.
7. Reconcile abandoned uploads, reservations, callbacks and jobs. Surface actionable failures to studio staff.

### Independent workflow states

| Domain | States / rule |
| --- | --- |
| Lead | New → Contacted → Discovery → Proposal → Booked, or Closed; manual transitions recorded |
| Project | Pre-production → Coverage → Post-production → Review → Delivered → Archived |
| Upload | Selected → Validating → Queued → Uploading → Uploaded-unverified → Verified; Paused, Failed, Canceled supported |
| Processing | Queued → Processing → Ready, or Failed |
| Moderation | Pending → Approved or Rejected; decisions are auditable |
| Publication | Draft → Published → Hidden or Expired; restoring visibility requires authorization |
| Face index | Ineligible, Pending, Indexed, Failed, Deleted |
| Video | Not required, Queued, Processing, Ready, Failed |
| Deliverable | Draft → Processing → Internal review → Couple review when applicable → Approved → Published |
| Download/archive | Queued → Preparing → Ready → Expired; Failed supported |
| Notification | Queued → Sent → Delivered; Failed or Canceled; never infer delivery from queue acceptance |

Approvals bind to a specific immutable deliverable version. Uploading a replacement invalidates neither history nor the need for a new approval. Business project stage, visibility and job state remain separate.

## Logical data dictionary and relationships

Use UUIDs, explicit ownership, timestamps, constrained enums and version fields for conflicting edits. Soft hiding and physical deletion must be distinguishable.

| Entity group | Key fields and relationships |
| --- | --- |
| Studios, studio memberships | Brand/configuration; studio + user + role + active/expired status |
| Enquiries, enquiry activity | Private contact preference, names, desired dates/city/services, purpose/consent, status, assigned producer, retention expiry |
| Service scopes, bookings | Enquiry/project, agreed services/deliverables/revisions/hosting period, recorded booking state |
| Weddings, wedding memberships | Studio, unique slug, couple display names, city/time zone/dates/theme; user/session + role + grants + expiry |
| Profiles, guest sessions, invitations | Minimal identity, verification state, wedding scope, token hash, expiry/revocation; never store invitation tokens in logs |
| Events | Wedding, supplied name/start, optional end/venue/address/map, focal point and order |
| Creative briefs, reference items | Wedding, version, story/priorities/references, author, visibility and approval state |
| Coverage plans, crew assignments, tasks | Wedding/event, supplied times, responsibilities, dependencies, due dates, client/internal visibility |
| Milestones, client actions | Wedding, agreed stage/date, owner, next action, completion/review state |
| Albums, album-media junction | Wedding, title, access group, publication state; ordered many-to-many media membership within that wedding |
| Media assets, variants | Wedding/event/contributor, source and kind, verified MIME/size/checksum, capture metadata, original key, rights/credit; derivative keys and independent statuses |
| Upload sessions/items, processing jobs | Wedding, quota reservation, manifest/part IDs/checksums/expiry; job type, idempotency key, attempts, state and safe error code |
| Face partitions/index records | Wedding, provider collection/generation/readiness; face ID → media ID mapping and deletion state |
| Face search sessions/results | Wedding, actor/session, consent version, index generation, partition progress, expiry; deduplicated authorized media matches |
| Favorites, selection sets/items | Wedding + owner + media; private selection purpose, version, submitted state and comments |
| Deliverables, versions, review comments | Wedding, agreed type/due date, immutable version/media reference, review stage, approver/version and optional timecode |
| Portfolio stories/items | Separate public title, credits, public-use permission evidence, safe metadata and explicit publication state |
| Consents, communication preferences | Subject/session + wedding + purpose + notice version + grant/withdrawal time; channel/language preferences |
| Moderation reports/actions | Wedding/media, reporter, reason, decision, reviewer and audit timestamps |
| Notifications, message receipts | Wedding/recipient/purpose, consent snapshot, dedupe key, provider ID and independent delivery state |
| Usage, entitlements, retention policies | Wedding/studio, metered units/time, agreed allowances, policy version and expiry |
| Deletion requests, audit events | Authorized scope, cleanup progress across providers/backups; actor/resource/action and redacted changes |

Enquiries may exist without weddings. A booking creates a wedding relationship through an explicit authorized action; membership/invitations are separate. One wedding has many events, albums, members, media assets and deliverables. A media original can appear in several same-wedding albums without duplication. A person may be a member of multiple weddings without sharing biometric identities between them.

Enforce composite ownership constraints so cross-wedding references cannot be inserted into events, album membership, selections, search results, jobs or approvals. Scope uniqueness of favorites and idempotency keys appropriately. Use stable cursor ordering with an ID tie-breaker. Index actual membership, tenant and publication/event/source query shapes; fetch derivatives in batches. Validate representative 10,000–30,000-photo query plans before setting capacity claims.

## API rules

The companion [backend-contracts.ts](docs/backend-contracts.ts) is a typed specification, not an implemented server. Mount a versioned API such as `/api/v1`; resolve tenant context server-side. Public portfolio and invitation responses contain only allowlisted public fields. Consistent errors must not disclose whether a forbidden private record exists.

| Operation | Proposed endpoint | Access / behavior |
| --- | --- | --- |
| Public portfolio | `GET /public/portfolio` | Explicit marketing approval + published status only |
| Enquiry | `POST /enquiries` | Bounded validation, abuse limits, idempotency; acceptance does not grant project access |
| Lead management / booking | `GET/PATCH /studio/enquiries/:id`; `POST .../:id/convert` | Assigned producer/admin; explicit scope and duplicate protection |
| Public invitation | `GET /public/weddings/:slug` | Allowlisted itinerary and approved share metadata |
| Invitation exchange/recovery | `POST /invitations/exchange`; `POST /access/recovery` | Token hash/expiry/revocation, throttling; avoid identity enumeration |
| Scoped metadata/media | `GET /weddings/:id/events|albums|media` | Membership + album/media policy; bounded cursor pagination |
| Upload | `POST /weddings/:id/upload-sessions`; `POST .../:session/parts|complete|abort` | Assigned destination, actual object verification and reserved quota |
| Upload receipt | `GET /weddings/:id/upload-sessions/:session` | Owner/assigned staff; separate stored, processing and publication state |
| Brief / coverage / milestones | `GET/PUT /weddings/:id/brief|coverage|milestones` | Role-specific visibility, optimistic version check and audit |
| Selections | `PUT/DELETE .../favorites/:media`; `POST/PUT .../selection-sets` | Private owner scope; scoped media and versioned submit |
| Deliverable review | `POST .../deliverables/:id/versions/:version/reviews|approvals` | Assigned client/staff; exact approved version |
| Selfie search | `POST .../face-searches`; `GET .../face-searches/:search` | Specific consent + authorized album scope; accepted job and completeness state |
| Download | `POST .../download-jobs`; `GET .../download-jobs/:job` | Current download rights, selection bounds, expiring authorized delivery |
| Moderation | `POST .../media/:media/reports|moderation` | Guest report, delegated moderator decision; audit |
| Administration | `PUT .../events|albums|settings|memberships` | Explicit administrative grants; no privilege escalation |
| Privacy / preferences | `POST .../consents|withdrawals|deletion-requests`; `PUT .../communications` | Purpose-specific scope, revocation and traceable cleanup |
| Messaging | `POST .../notification-jobs` | Authorized staff; opt-in checked again at dispatch |
| Callbacks | `POST /callbacks/:provider` | Verified signature, known internal record, replay/dedup protection |

Validate sizes and formats on client for usability and server for enforcement. Return `202` plus a job for long work. Retry only appropriate failures, respect `retryAfterSeconds`, and use bounded exponential backoff. An idempotency key binds actor, wedding, operation and normalized request; reject reuse with different content. Do not fetch arbitrary user-supplied URLs.

## Access and privacy design

Use stronger verified access for staff, couples and restricted family albums. Apply membership/ownership policies to every exposed tenant table and equivalent checks in storage signing, workers, caches, search and callbacks. Mutable profile metadata, folder names, slugs, route guards and hidden buttons are not authorization. Test role changes and stale/revoked sessions. Keep privileged credentials server-only and minimize their use.

Face matching is optional discovery, not identity verification. Index eligible consented photos once, scope partitions to one wedding, record missed/unindexed images, search with bounded concurrency and track all partitions. Never label partial results complete. Filter results against current visibility and invalidate caches on access, publication, deletion or index-generation changes. Evaluate precision and recall on consented representative images before launch; do not expose confidence scores as an accuracy promise. Ordinary browsing remains available without a selfie.

Separate private gallery permission, public marketing permission, contribution sharing, face processing and messaging consent. Define the process for people depicted in indexed images and guardian-managed handling before enabling this feature. Verify applicable privacy requirements with qualified review before commercial launch; a checkbox is not proof of compliance.

## Operational integration sequence

1. Confirm assets, genuine public-use permission, real contact destinations, service/hosting terms and a public launch review.
2. Build a small live pilot across two isolated test weddings with 500–1,000 consented images; measure failure, quality, latency and cost.
3. Implement identity, metadata policies, private storage, direct uploads, queues, derivatives, moderation and basic authorized delivery.
4. Add versioned couple collaboration, professional batch recovery, optional face matching, video and archives.
5. Add official messaging only after sender onboarding, opt-in model, template/policy/pricing verification and failure handling.
6. Rehearse realistic load, tenant attacks, privacy cleanup and recovery before replacing any demo control with live behavior.

For each deployed environment document ownership, domain/HTTPS, auth redirect allowlist, storage CORS, worker region, signed callback URL, secret rotation, retry limits, queue thresholds, dashboards and rollback. Preview environments must not point to live private galleries or send production notifications. Keep independent photographer backups and test restoration; object storage alone is not a tested backup plan.


</details>

[Back to contents](#start)

<a id="archive-journeys-and-permissions"></a>
### Journeys And Permissions

<details>
<summary>Expand full snapshot: JOURNEYS_AND_PERMISSIONS.md</summary>

# Journeys, routes and permissions

The route inventory describes this release's intended navigation. Private-looking routes are public demonstration screens until a live identity and authorization layer is implemented. Role selection and wedding switching are preview controls, not authentication.

## Route map

| Route | Audience | Main journey / onward action |
| --- | --- | --- |
| `/` | Prospects | Understand films + photography → explore work or enquire |
| `/films` | Prospects | Inspect clearly labeled visual/film placeholders → discuss a film |
| `/photography` | Prospects | Browse the photographic direction → enquire |
| `/experience` | Prospects | Story, creative planning, lighting coordination, capture, review and delivery → enquiry / wedding-space preview |
| `/services` | Prospects | Photography, films and the agreed media-production scope → enquiry |
| `/about` | Prospects | Understand Jashnama's approach without invented team/history claims → enquiry |
| `/enquire` | Prospects | Enter date/place/service priorities → preview receipt or open a configured provider to send |
| `/privacy` | All visitors | Concept-image credits, local-demo limitations and contact handling |
| `/your-wedding` | Returning couples and guests | Select an expressly labeled demonstration experience; future invitation exchange/recovery entry |
| `/wedding/:slug` | Invited guest preview | Exact supplied itinerary → calendar → filter/browse sample media → contribute locally / sample photo search |
| `/couple/:slug` | Couple preview | View next action and example milestones → edit brief → private sample selections / version-specific review |
| `/studio` | Team preview | Select wedding → lead/project overview → production / moderation / delivery status |

`/stories/:slug` is deferred until authentic approved case studies exist. Story, album, modal and tab states should preserve clear navigation and return focus.

### Primary journeys

1. **Prospect:** homepage descriptor → films/photography → approach → enquiry. A local draft does not create a booked project. Email/WhatsApp contact works only with a configured, verified destination, and the visitor sends through that provider.
2. **Booked couple, production target:** explicit invitation → verified access → brief and references → agreed coverage/milestones → versioned reviews → approved final delivery. Guests do not see these discussions.
3. **Guest, preview:** wedding entry → itinerary → browse permitted sample albums → choose event and preview local contributions → simulated receipt. Optional sample selfie discovery has separate consent and a browse alternative; it never proves actual recognition.
4. **Studio, preview:** select wedding → inspect enquiries/production → review sample submissions → update local demonstration status. These changes are neither contracts nor messages to a couple.
5. **Production recovery:** expired invitation/session → neutral access explanation → verified recovery/help route. Revocation must affect API access, new download signatures and search results; previously issued delivery URLs have a documented expiry window.

## Exact Savage Wedding source facts

Wedding: **The Savage Wedding**. Couple: **Vedant and Sakshi**. Hashtag: **#TheSavageWedding**. Dates: **11–13 December 2026**. City/time zone: **Lucknow, India / Asia/Kolkata**. Venue label: **Lucknow · Venue details coming soon.** No surnames, address, event duration, dress code, hotel, transport or contact was supplied.

| ID | Event | Local start (IST) | UTC start |
| --- | --- | --- | --- |
| `gujarat` | Rangilo Gujarat Bhaat | 11 Dec 2026, 7:00 PM | `2026-12-11T13:30:00Z` |
| `haldi` | Krishna Nagri Haldi | 12 Dec 2026, 10:00 AM | `2026-12-12T04:30:00Z` |
| `royal` | The Royal Affair | 12 Dec 2026, 4:00 PM | `2026-12-12T10:30:00Z` |
| `lunch` | Bridgerton Lunch | 13 Dec 2026, 10:00 AM | `2026-12-13T04:30:00Z` |
| `raas` | Rave & Raas | 13 Dec 2026, 7:00 PM | `2026-12-13T13:30:00Z` |

Calendar output must preserve those starts and omit an invented `DTEND`/duration. Maps stay unavailable until a real location is supplied. As of the supplied project date, this is an upcoming wedding: imagery and delivery stages shown as demonstrations must not imply that Jashnama has already captured it.

The second fixture is explicitly fictional, using Sample Wedding / Sample A / Sample B terminology rather than plausible factual couple names. Each fixture needs distinct IDs, members, albums, private records and local storage keys. Switching fixtures must not merge selections, brief text, moderation, contributions or search results. Browser fixture isolation demonstrates UI behavior only; it does not validate server security.

## Production role / action matrix

**Assigned** means an active wedding-specific assignment. **Delegated** means an explicit additional grant. Admin authority stays inside the studio. Every action is also constrained by resource visibility, consent and current access.

| Action | Guest | Couple | Contributor | Producer | Editor | Studio admin | Operations |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Browse shared, published media | Invited | Assigned | Assigned | Assigned | Assigned | Studio scope | Explicit support grant |
| Browse restricted family media | Explicit album grant | Granted scope | Explicit grant | Explicit grant | Explicit grant | Explicit grant | Explicit audited grant |
| Contribute media | If invitation permits | If permitted | Assigned events/batches | Assigned | Assigned | Studio scope | No default |
| Use optional selfie search | Own consent/session | Own consent/session | Own permitted scope | Own permitted scope | Own permitted scope | No global face directory | No default |
| Favorite / private selection | Own | Own / agreed client set | Own | Assigned review scope | Assigned review scope | Granted scope | No default |
| Edit couple brief | No | Own project | Assigned input only | Assigned | Read if assigned | Studio scope | No default |
| Edit coverage / internal notes | No | Discuss/request; permitted fields only | Assigned input | Assigned | Assigned task scope | Studio scope | No default |
| Edit deliverable versions | No | No | Assigned submissions | Assigned | Assigned | Studio scope | No default |
| Approve a deliverable version | No | Agreed approval right | No | Internal approval/delegated | Internal review/delegated | Studio scope | No default |
| Moderate / publish gallery | No | Delegated | Delegated | Assigned + grant | Assigned + grant | Studio scope | Emergency audited grant |
| Manage leads / record bookings | No | Own supplied booking view | No | Assigned | No default | Studio scope | No default |
| Manage members / settings | No | Delegated guest invite scope | No | Delegated | No | Studio scope | Narrow infrastructure grant |
| Approve public marketing use | Own applicable permission only | Applicable permission process | Submit rights evidence | Verify evidence + grant | Prepare draft | Verify evidence + grant | No default |
| Request removal / report | Own request / permitted report | Own scope | Own content | Assigned | Assigned | Studio scope | Audited support scope |
| Operate infrastructure | No | No | No | No | No | Configured administrative scope | Audited infrastructure scope |

Giving someone a signed-in account, sharing a QR code or knowing a wedding slug never grants these permissions. Staff source files are not automatically published. Couple approval of delivery does not establish permission from every depicted person for public marketing or face processing.

## Meaningful verification scenarios

- Submit invalid and valid enquiry drafts; confirm receipt wording does not claim delivery and unconfigured contact methods do not invent addresses.
- Browse into a gallery, filter by event/source, open/close viewer by keyboard, and retain filters/position where implemented.
- Select local files, reject unsupported/oversize input, remove items, simulate processing, and confirm no bytes or selfies enter localStorage or an external service.
- Save different briefs/selections in both fixtures; reload and switch weddings; confirm no crossover. Do the equivalent with server APIs and storage in the live phase.
- Ensure no stage implies the upcoming Savage Wedding has already been filmed; all future production examples remain labeled.
- Check a deliverable version swap cannot be approved by a stale approval request in the live phase.
- Check 360/390/430 px, tablet and desktop; keyboard-only, 200% zoom, large text, Hindi rendering and reduced-motion preferences; no clipped faces or horizontal overflow.


</details>

[Back to contents](#start)

<a id="archive-enquiry-backend"></a>
### Enquiry Backend

<details>
<summary>Expand full snapshot: ENQUIRY_BACKEND.md</summary>

# Optional enquiry delivery adapter

The deployed default is `ENQUIRIES_ENABLED=false`. Visitors prepare a local enquiry and receive explicit copy/download guidance. `POST /api/enquiries` returns 503 while disconnected. No real customer details were sent during development or testing.

To connect a receiver, configure these server-only Vercel environment variables:

```dotenv
ENQUIRIES_ENABLED=true
ENQUIRY_WEBHOOK_URL=https://your-owned-receiver.example/enquiry
ENQUIRY_WEBHOOK_TOKEN=
```

Use a verified receiver with durable storage/inbox delivery, appropriate access controls, retention and an owner-verified contact channel. The URL must use HTTPS. Redirects are rejected; requests time out after eight seconds. An optional token is sent as a bearer token and never exposed to the browser.

The payload is `{ version: 1, enquiry: EnquiryDraft, requestId: string }`; the same request ID is included in `Idempotency-Key`. The receiver **must durably deduplicate that key before accepting** and return 2xx only after durable acceptance. Response bodies from the receiver are not reflected to visitors. A successful client response is 202 with `accepted: true` and a receipt ID; it means enquiry acceptance, never a confirmed booking.

The adapter validates all fields and consent, rejects unknown service selections, checks same-origin JSON requests, limits bodies to 16 KB and uses a honeypot. A bounded in-memory limit allows six attempts per minute per hashed client address. An in-memory ten-minute idempotency cache deduplicates simultaneous requests within a server instance. Different payloads using the same key receive 409; upstream errors return 502 and keep the visitor's draft.

These memory protections are **not distributed rate limiting, a durable queue or durable idempotency**. Configure an edge/WAF limit and durable receiver deduplication before enabling production traffic. Server restarts and multi-instance execution bypass memory-only history. Do not enable this adapter for real enquiries until the receiver is verified end to end; a generic webhook that always returns 200 is insufficient.

Email and WhatsApp build-time contact values remain optional, separate direct-draft fallbacks. Keep actual receiver secrets out of version control. The adapter does not send marketing messages; marketing consent is optional and separate.

Tests stub the receiver and cover disconnected, origin, content-type, consent, honeypot, body size, concurrent duplicate, changed-payload conflict, failed/retried delivery and rate-limit behavior. They do not prove real inbox delivery or provider reliability.


</details>

[Back to contents](#start)

<a id="archive-retention-and-costs"></a>
### Retention And Costs

<details>
<summary>Expand full snapshot: RETENTION_AND_COSTS.md</summary>

# Retention proposal and cost-input worksheet

These are editable planning assumptions, not approved client terms, a current provider quote or a compliance statement. No production retention job runs in the browser demonstration. Confirm the actual policy, processing agreements and applicable requirements before collecting customer media.

## Retention proposal

| Data | Proposed starting policy | Required decision / implementation |
| --- | --- | --- |
| Demo file/selfie bytes | Memory/object URLs only; never persistent browser storage or external upload | Release object URLs after removal/unmount; reload clears local bytes |
| Demo preferences and record metadata | Local browser state until reset/cleared | Explain local behavior and avoid sensitive real input in sample workspaces |
| Unbooked enquiries | 90 days after last meaningful contact, unless a documented need changes it | Owner-approved lead policy; separate optional marketing purpose and withdrawal |
| Query selfie | Discard after search; proposed cleanup target within 15 minutes after completion and bounded failure cleanup | Measure cleanup and alert on failures; never reuse for model training or persistent alerts |
| Persistent face references | Disabled initially | Separate purpose, permission, retention and deletion design required before enabling |
| Wedding face index | Expire 90 days after the confirmed final ceremony timestamp | Confirm anchor and policy with client; delete provider records and invalidate caches |
| Original media and display derivatives | 12 months after confirmed final ceremony, subject to agreed scope | Hosting term, export notice, extension route, backup policy and explicit deletion workflow |
| Temporary archives / upload reservations | Proposed 24-hour archive expiry; short bounded upload reservation | Publish user-visible expiry; clean parts/orphans; permit a new authorized request |
| Briefs, reviews and booking records | Separate business-record schedule | Do not assume media expiry can erase required agreement/approval evidence |
| Operational logs | Proposed 30-day routine diagnostic retention | Redact personal content, signed URLs, tokens and selfies; choose a minimal audit schedule separately |
| Backups | Proposed maximum 35-day rolling recovery window | Test restore, document backup expiry, and reapply deletion tombstones after a restore |

The final event currently has a supplied start, not a supplied end. Do not silently choose a final-ceremony retention anchor. Calculate and display real expiry dates only after that anchor and the signed service terms are known. Do not erase memories merely because a provisional quota or date was reached.

### Deletion sequence

1. Verify the requester's authority and requested scope without exposing unrelated media.
2. Hide/revoke the relevant records promptly; cancel pending notifications, processing and archive jobs where possible.
3. Remove originals, variants, index records, query material, result caches, video copies and temporary archives from the applicable providers.
4. Record each provider's cleanup result; retry and escalate failures. Distinguish hidden, actively deleted and awaiting backup expiry.
5. Complete applicable backup expiry and retain only minimal authorized audit evidence. Restoration must not republish deleted material.

## Editable operating inputs

Populate the Value column using a representative pilot. Photo quantities of 10,000–30,000 and guest quantities of 300–800 per wedding come from the planning brief; they are load assumptions, not measured capacity.

| Variable | Input | Unit / guidance | Value |
| --- | --- | --- | --- |
| `W` | Active hosted weddings | Wedding count | TBD |
| `N` | New weddings ingested this month | Wedding count | TBD |
| `P` | Photos per new wedding | Images | TBD |
| `S` | Average original size | Decimal MB/image; measure actual files | TBD |
| `D` | Derivative storage multiplier | Additional bytes / original bytes; 0.20 means +20% | TBD |
| `B` | Additional full-equivalent backup copies | Weighted copy count; include regional/backup pricing separately | TBD |
| `G` | Guests per wedding | People | TBD |
| `F` | Average indexed faces per photo | Face records | TBD |
| `Q` | Search sessions per guest/month | Sessions | TBD |
| `K` | Search partitions queried per session | Partitions; measure completeness and latency | TBD |
| `Ri` | Indexing retry overhead | Extra requests / baseline requests | TBD |
| `Rs` | Search retry overhead | Extra requests / baseline requests | TBD |
| `U` | Incremental images per hosted wedding/month | Images | TBD |
| `E` | Monthly downloads and other egress | GiB; measure originals + derivatives + archives | TBD |
| `Cr` | Monthly CDN requests | Requests | TBD |
| `Vm` | Stored video duration | Minutes, total active collection | TBD |
| `Vw` | Monthly video viewing | Watched minutes | TBD |
| `Ve` | Newly encoded duration | Minutes | TBD |
| `M[c,r]` | Messages by category and recipient market | Separate each category/market/provider path | TBD |
| `H` | Media hosting duration | Months per agreed client term | 12 proposed |
| `Hf` | Face-index term | Days after confirmed final ceremony | 90 proposed |
| `A` | Staff seats | Count, including billable collaborators | TBD |
| `Su` | Support effort | Hours/month × loaded hourly cost | TBD |
| `Mo` | Moderation effort | Hours/month × loaded hourly cost | TBD |
| `Eng` | Engineering/maintenance effort | Hours/month × loaded hourly cost | TBD |
| `Tax` | Applicable taxes and transaction fees | Verified basis and rates | TBD |

For stored inventory, replace a single average with per-wedding totals when projects differ materially. Include films' original bytes in original storage separately from playback-provider minutes. Hosting duration determines the number of retained wedding cohorts; do not multiply a current hosted inventory by the duration again.

## Calculation worksheet

Fill provider unit rates from current official quotes with a source/date/currency. Leave blanks unpriced rather than turning them into zero. Treat included allowances, tiers, minimums and overages explicitly.

| Cost line | Quantity calculation | Rate input |
| --- | --- | --- |
| Shared platform / web / metadata compute | Selected plan + measured compute/connections | Monthly base and measured overage |
| Initial photo processing | `N × P` image jobs | Cost/image + worker time |
| Incremental photo processing | `W × U` image jobs | Cost/image + worker time |
| Indexing calls | `(N × P + W × U) × (1 + Ri)` | Price/call; excluded images reduce actual count |
| Stored index records | Sum of active indexed face records; estimate `eligible active photos × F` | Price/record-month |
| Face search calls | `W × G × Q × K × (1 + Rs)` | Price/call; use measured cache hit rate separately |
| Current original storage | `sum(original bytes) ÷ 2^30` GiB; rough photo-only estimate `W × P × S × 10^6 ÷ 2^30` | Price/GiB-month |
| Derivative storage | `original photo GiB × D` | Price/GiB-month |
| Backup storage | Inventory by policy × equivalent copies `B` | Storage, backup and restore rates |
| Download/CDN traffic | `E` GiB and `Cr` requests | Region/tier egress and request rates |
| Video | `Ve` encoded + `Vm` stored + `Vw` watched minutes | Separate encoding, storage, delivery rates |
| Messaging | `sum(M[c,r] × current category/market rate)` + provider fees | Verify both platform and intermediary fees |
| Identity verification | Actual verification attempts and retries | Per-attempt/provider rate, if applicable |
| Monitoring / logs / recovery | Measured logs, metrics, events, restore tests | Base + usage + engineering effort |
| Staff tools | `A × seat price` | Verify minimum seats and external reviewer fees |
| Human operations | `Su + Mo + Eng` measured hours × respective loaded rates | Internal labor cost |
| Taxes / payments | Applicable verified base × rates, plus fixed fees | Finance-approved inputs |

**Monthly operating total:** sum all applicable lines after confirming unit consistency, included allowances, taxes and currency conversion. **Project contribution:** agreed production-service revenue minus capture, editing, equipment/travel, allocated technology, moderation/support and other project costs. Storage/search usage is an internal cost model, not the public service proposition.

Do not reuse the historical illustrative subtotal in the master prompt as a complete or current bill. It omitted material components. Record low/expected/high usage scenarios and use actual pilot measurements before selling hosting extensions or setting limits.

## Cost controls and assumptions

- Separate upload/photo/video quotas per wedding, with professional batch allowances. Proposed guest limits from the brief are 30 MB/photo, 500 MB/video and 120 seconds/video; validate them before enforcement.
- Reserve storage before upload, release abandoned reservations and charge usage from verified operations. Account for duplicate callbacks without duplicate billable internal usage.
- Alert at configurable budget/usage thresholds and on unusual share-link traffic. Apply fair queues so one wedding cannot starve another.
- Track original and derivative storage, egress, archives, search fan-out, retries, video viewing and message receipts per wedding. Keep private content out of cost telemetry.
- Resolve an approaching limit through clear staff review and client communication. Do not silently delete customer content or advertise unlimited storage.
- Validate real bandwidth: large professional batches may require staged delivery and independent local backups. Decorative progress animations do not establish upload reliability.


</details>

[Back to contents](#start)

<a id="archive-feature-status"></a>
### Feature Status

<details>
<summary>Expand full snapshot: FEATURE_STATUS.md</summary>

# Feature status and release boundary

This matrix separates interactive presentation from live capability. **UI** means frontend behavior; **demo** means fixture/local behavior; **production required** means no live adapter is connected. A successful static Vercel deployment does not change that boundary. Build and browser-check evidence belongs in the repository README and final delivery record.

| Area | UI / demo status at handoff | Live status / remaining work |
| --- | --- | --- |
| Public home, films, photography, approach, about, services | Public pages deployed; visual/responsive browser checks completed | Genuine approved portfolio, team facts and real films remain owner inputs |
| Concept photography | Labeled generated placeholders, never attributed as commissioned client work | Replace with licensed/approved Jashnama assets before claiming portfolio history |
| Brand styling | Supplied visual direction interpreted by the implementation | Confirm final logo/font files, license and public wording |
| Enquiry qualification | Inline validation, visit-scoped draft, edit/copy/download receipt, optional server handoff | Adapter tested with stub receiver; no live inbox or automatic delivery |
| Email / WhatsApp contact | Blank configuration by default | Set verified public destination, rebuild and test actual provider opening; visitor still sends |
| Public portfolio publication | Display direction with concept labels | Server-side marketing approval workflow and rights evidence required |
| Returning-client entry | Connected demonstration entry implemented | Invitation exchange, verification, expiry, recovery and revocation required |
| Exact Savage Wedding schedule | Exact fixture starts exist; calendar helper omits absent ends | Real venue/maps/contacts/dress codes remain pending |
| Guest gallery, filtering and viewer | Fixture UI verified: filters, favorites, viewer and moderation | Authorized cursor API, original/derivative delivery and real assets required |
| Favorites / selections | Wedding-scoped memory demonstration verified | Per-user ownership, persistence, conflict checks and real submit workflow required |
| Guest upload | Temporary local previews and simulated pause/retry/cancel; no real uploads | Direct storage upload, integrity/retry/reconciliation, moderation and quota enforcement required |
| Optional selfie discovery | Deterministic sample results implemented; no recognition | Consent, real matching, quality checks, partition completeness, deletion and evaluation required |
| Film playback / review | Concept posters / demonstration review only | Approved playable files, captions, versions and provider integration required |
| Couple brief and milestones | Local versioned brief and example timeline verified | Authenticated scoped persistence, agreed dates/rights and versioned approval required |
| Studio leads and project workflow | Synthetic fixtures and local state implemented | Durable inbox, assignments, booking evidence and invitations required |
| Moderation / settings / permissions | Local simulation implemented | Server grants, auditing, storage/search policy alignment and isolation tests required |
| Two-wedding isolation | Separate fixture IDs and state model | UI transitions verified; this does not prove database/API isolation |
| Language / large text / reduced motion | Frontend controls/styles implemented | Verify coverage, Hindi clipping, 200% zoom, keyboard and mobile behavior |
| Calendar / sharing | Browser-generated calendar/share behavior implemented | Verify exact starts and share metadata; QR/invite token access remains separate |
| Downloads | No original private media is present | Authorized signed URLs, archive jobs, expiry, failure and revocation required |
| Messaging automation | Not connected | Official sender setup, consent, templates, policy/pricing verification and delivery webhooks required |
| Payments / automated quotes | Not connected | Outside this release; scope separately |
| Face matching in video / RAW archive / slideshow / print orders | Not implemented | Future confirmed scope only |
| Backend types / architecture / policy and cost handoff | Specification delivered in `docs/` and application types | Implement and test adapters; types are not a live service |
| Git / Vercel | Local Git repository committed; Vercel site deployed | Public GitHub push awaits explicit source-publication approval; see README for site URL |

## Explicit limitations

There are no real customer galleries, authenticated private routes, cloud uploads, analysed selfies, connected automated WhatsApp messages, accepted payments, production authorization tests, measured matching accuracy or demonstrated 30,000-photo capacity. Mock approvals and bookings do not communicate with or bind anyone. Production performance targets in the master prompt remain pilot targets.

No testimonial, price, team history, award, turnaround commitment, venue address or business contact should be inferred from a generated brand board. Every unpublished service addition needs confirmed scope and fulfillment before appearing as bookable.


</details>

[Back to contents](#start)

<a id="archive-launch-checklist"></a>
### Launch Checklist

<details>
<summary>Expand full snapshot: LAUNCH_CHECKLIST.md</summary>

# Launch checklist

The current delivery can be deployed as a public brand website with clearly labeled interactive previews. Opening real private galleries is a later release with a separate readiness gate. Checkboxes below are work to verify, not claims of completed tests.

## Public website release

- [ ] Record repository URL/commit, actual Vercel project and deployment URL; confirm project ownership and HTTPS.
- [ ] Keep `the-savage-wedding.vercel.app` unchanged unless an authorized migration is separately reviewed.
- [ ] Set only owner-verified contact values in the deployment environment. Rebuild after changing public build-time values.
- [ ] Test valid/invalid enquiry input, local receipt wording, copy/download, and configured email/WhatsApp handoff. Confirm the visitor explicitly sends through the provider.
- [ ] Confirm every public image is approved or clearly labeled as a concept placeholder; no generated image represents actual commissioned work or the real couple.
- [ ] Confirm brand assets, font licensing/availability, credits and final terminology. Use a text identity if an official logo file is unavailable.
- [ ] Remove unverified business claims, guessed social/contact links, packages/prices, addresses, testimonials and turnarounds.
- [ ] Check every CTA, mobile menu, portfolio viewer, dialog close behavior and route, including unknown wedding slugs and not-found states.
- [ ] Check current schedule starts, missing venues, calendar imports and absence of invented event durations.
- [ ] Confirm preview notices remain on private demonstration surfaces and at simulated action receipts.
- [ ] Confirm no real private customer media is included in the static assets or page source.
- [ ] Run build/type checks and appropriate interaction checks; record results honestly, including limitations.
- [ ] Inspect mobile 360/390/430 px, tablet and desktop; 200% zoom, keyboard/focus, large text, Hindi and reduced motion.
- [ ] Check image crops and dimensions, useful content before animation, lazy loading, no broken assets, and console/network errors.
- [ ] Verify canonical/social metadata uses the actual owned deployment/domain; do not assume `jashnama.com` or a preferred deployment hostname is available.
- [ ] Verify private preview routes are excluded from search discovery as intended. Search directives are not access control.
- [ ] Keep production secrets absent from source, client environment, logs, fixtures and committed files; contact values are intentionally public.
- [ ] Capture representative desktop/mobile screenshots if the available environment supports it.

## Live enquiry and private collection gate

- [ ] Confirm provider ownership, region, terms, supported SDK versions, quotas and current pricing from official sources.
- [ ] Establish verified studio/couple identity, scoped guest invitations, expiry/recovery/revocation and least-privilege team assignments.
- [ ] Test database/API/storage/search/jobs/callbacks for cross-wedding reads, writes, role escalation and stale sessions.
- [ ] Enforce tenant relationships in the database, not only frontend filtering. Test a real user assigned to two weddings.
- [ ] Add validated, rate-limited, idempotent live enquiry acceptance, private inbox, retention and consent treatment.
- [ ] Verify direct uploads, checksums, actual MIME/size, multipart complete/abort, browser interruption, reselection, retries, duplicates and abandoned reservations.
- [ ] Keep original bytes out of ordinary application request bodies; establish storage CORS and upload token scope/expiry.
- [ ] Test HEIC/HEIF orientation, video compatibility, derivative metadata removal and original-download policy with real devices.
- [ ] Verify moderation and publication are independent of file processing and source; drafts stay inaccessible to guests.
- [ ] Ensure reviews/approvals bind to immutable versions; stale clients cannot approve replacement files.
- [ ] Test authorized thumbnail/original/archive delivery, expiration, delayed jobs and revoked access; document signed-link revocation delay.
- [ ] Confirm face-processing permission process, purpose-specific consent, guardian handling and optional browse fallback.
- [ ] Evaluate precision and recall, missed images, low light/group shots, partition completeness, regional concurrency and cost on a consented pilot.
- [ ] Prove selfie failure cleanup, consent withdrawal, cache invalidation and index expiry; no cross-wedding face identity mapping.
- [ ] Verify public marketing permission independently of private gallery sharing and client delivery approval.
- [ ] Verify privacy information, contacts, requests, deletion across providers and backup expiry with applicable qualified review.
- [ ] Confirm actual hosting terms, renewal/export notices and agreed client deliverables. Display only real due dates and revision allowances.
- [ ] Add signed, replay-safe provider callbacks and idempotent workers, bounded retry/backoff, dead-letter queues and reconciliation.
- [ ] Verify preview/live environment separation, auth redirect allowlists, webhook URLs, least-privilege secrets and rotation.

## Operations and pilot rehearsal

- [ ] Run two isolated test weddings with 500–1,000 consented images before scaling.
- [ ] Rehearse 100 uploaders, 300 viewers and 50 concurrent fresh searches or a revised agreed load; report actual results and failure paths.
- [ ] Measure gallery usability on the agreed mid-range phone/4G profile; benchmark target initial/complete search times without asserting unmeasured success.
- [ ] Monitor queue age, upload/processing failure, index completeness, search latency, egress, message failures and cost per wedding.
- [ ] Add usage budgets, fair scheduling and a human path for quota/expiry problems.
- [ ] Test independent backups and recovery objectives. Verify a restore does not republish withdrawn/deleted media.
- [ ] Have older guests complete browse/upload/find/download tasks without coaching; fix observed friction.
- [ ] Rehearse identity, storage, video, recognition and messaging outages; keep invitation/browsing useful when optional services fail.
- [ ] Prepare wedding-day contacts and a manual gallery-delivery fallback using actual verified details.
- [ ] Confirm a late-November rehearsal/fallback decision and early-December essential release only if staffing and measured readiness support those proposed dates.

## Minimal runbook

| Symptom | First actions | Recovery evidence |
| --- | --- | --- |
| Upload stalled | Check connectivity, reservation/session expiry and storage completion; avoid repeated new uploads blindly | Verified checksum/object receipt; replay only missing work |
| Processing backlog | Check queue age, worker errors and per-wedding fairness | Recovered throughput and reconciled failed jobs |
| Search incomplete | Show partial/unavailable state and browse fallback; check index generation and partition progress | Every permitted partition accounted for; no truncated result set |
| Wrong media visibility | Revoke/hide immediately; stop new signatures/jobs and audit scope | Database/API/storage/cache checks confirm intended permissions |
| Video unavailable | Keep poster and truthful status; inspect provider job/callback | Approved version plays on target devices |
| Notification failed | Inspect consent and provider status; deduplicate before retry | Actual receipt state; no duplicate or withdrawn-recipient send |
| Cost spike | Identify wedding/operation, enforce configured limits and investigate abuse | Stable measured usage; legitimate guest access preserved |
| Deployment regression | Restore known-good deployment and compatible configuration | Public journey smoke tests; database changes assessed separately |

Define actual responders, escalation contacts, service thresholds and recovery objectives before the first live wedding. This document supplies the checklist, not a staffed support promise.


</details>

[Back to contents](#start)

<a id="archive-verification"></a>
### Verification

<details>
<summary>Expand full snapshot: VERIFICATION.md</summary>

# Verification record · 1 October 2026

## Automated checks

- `pnpm lint`: passed with zero errors.
- `pnpm typecheck`: passed.
- `pnpm test`: five tests passed. Coverage includes the exact five supplied wedding/ICS starts, omitted unsupplied event ends, independent wedding/session state, fictional fixtures, enquiry field validation and server handoff failure/retry/idempotency paths.
- `pnpm build`: passed; 19 static outputs generated with dynamic enquiry, enquiry API and studio routes also built.
- `git diff --check`: passed.

Backend tests use a stub receiver and never send real enquiries. The Node test runner reports an experimental warning for its built-in TypeScript stripping helper; tests complete successfully.

## Browser checks

In the Codex in-app browser, the final refinement pass checked home, films, photography, experience, services, about, returning-client entry, Savage guest/couple previews and studio at 360, 768 and 1440 px. All inspected pages had no document horizontal overflow or broken completed image loads. The enquiry form also passed width checks at 390, 430 and 1920 px. Inputs compute to 16 px on the public form. These checks are viewport simulation, not physical-device certification.

Interaction checks passed:

- Mobile menu opens as a native modal; Escape closes and restores focus to its trigger.
- Empty enquiry shows four field-specific errors and focuses the first invalid input.
- Names, email and service selection survive navigation to the privacy page and browser Back.
- Prepared enquiry can be edited with fields and consent retained.
- Upload dialog is a native modal; same-batch duplicate files are rejected; a valid local file completes the clearly labelled simulation; Escape returns focus to Upload memories.
- No console errors were captured during the inspected route pass.
- Chrome desktop renders the films page and opens/closes the concept preview with initial focus on its close control.

Earlier implementation checks also covered favourites/filtering, viewer keyboard dismissal, day filtering, Hindi and large-text layouts, sample selfie states, couple-to-studio brief updates, moderation-to-gallery publication and isolated switching between two wedding fixtures. These are local demonstration behaviors, not production authorization tests.

## Limits and outstanding inputs

Safari launch timed out, so Safari/WebKit and Firefox are unverified. Physical iOS/Android, assistive-technology testing, 200% browser zoom, slow-network profiles, a Lighthouse benchmark and measured 60 fps are not claimed. Reduced-motion and reduced-transparency handling are implemented in CSS/WAAPI and reviewed in code; OS preference testing was not performed. Existing private previews remain public demo routes with noindex, not authenticated client access.

The receiving service and verified email/WhatsApp destination remain unconfigured. Live enquiry delivery, real gallery storage, face recognition and automated messages were not tested or enabled. Portfolio assets remain clearly labelled concepts. See `ENQUIRY_BACKEND.md` for the receiver requirements and `FEATURE_STATUS.md` for remaining production work.

Production URL: https://jashnama.vercel.app. The separate Savage Wedding deployment was not modified. Local Git source is retained; pushing to the existing public GitHub repository awaits the user's explicit source-publication approval.

## Personalised experience follow-up

Browser checks verified a local WAV attachment appears in both Our journey and the creative brief, seven brief questions expose attachment controls, a cinematographer count of three is visible after switching to the studio, couple feedback reaches the studio, studio replies retain their author/version, and advancing a sample deliverable retains earlier comments. The feedback view and WhatsApp guest panel fit 390 px and 360 px viewports respectively. A sample face-search result saves three permitted images to Photos of me with contributor labels. Both new enquiry options can be selected. These remain in-memory preview workflows; no external message, biometric analysis or cloud upload was performed.


</details>

[Back to contents](#start)

<a id="archive-typed-backend"></a>
### Proposed backend TypeScript contracts

<details>
<summary>Expand full snapshot: backend-contracts.ts</summary>

```ts
/**
 * Production API specification. No functions here are implemented or connected.
 * Runtime validation, identity, authorization and database constraints are required.
 * IDs supplied by a browser are lookup inputs, never evidence of authorization.
 */
export type ID = string;
export type ISODateTime = string;
export type ISODate = string;
export type Cursor = string;

export type ErrorCode =
  | "VALIDATION"
  | "ACCESS_REQUIRED"
  | "NOT_FOUND_OR_FORBIDDEN"
  | "EXPIRED"
  | "VERSION_CONFLICT"
  | "UNSUPPORTED_MEDIA"
  | "QUOTA_EXCEEDED"
  | "RATE_LIMITED"
  | "IDEMPOTENCY_CONFLICT"
  | "PROCESSING_FAILED"
  | "TEMPORARILY_UNAVAILABLE";

export type Result<T> =
  | { ok: true; data: T; requestId: string }
  | {
      ok: false;
      error: {
        code: ErrorCode;
        message: string;
        fieldErrors?: Record<string, string>;
        retryAfterSeconds?: number;
      };
      requestId: string;
    };

export interface Page<T> {
  items: T[];
  nextCursor: Cursor | null;
}

export interface MutationOptions {
  idempotencyKey: string;
}

export interface VersionedInput extends MutationOptions {
  expectedVersion: number;
}

export type Role =
  | "guest"
  | "couple"
  | "contributor"
  | "producer"
  | "editor"
  | "studio-admin"
  | "operations";

export type Permission =
  | "media:view"
  | "media:upload"
  | "media:download"
  | "media:moderate"
  | "media:publish"
  | "brief:edit"
  | "brief:approve"
  | "coverage:edit"
  | "deliverable:edit"
  | "deliverable:approve"
  | "enquiry:manage"
  | "booking:record"
  | "membership:manage"
  | "settings:manage";

/** Internal only: constructed from verified identity and current memberships. */
export interface AuthorizedContext {
  actorId: ID;
  studioId: ID;
  weddingId?: ID;
  role: Role;
  permissions: Permission[];
  sessionExpiresAt: ISODateTime;
}

export type ProjectStage =
  | "pre-production"
  | "coverage"
  | "post-production"
  | "review"
  | "delivered"
  | "archived";
export type LeadState = "new" | "contacted" | "discovery" | "proposal" | "booked" | "closed";
export type PublicationState = "draft" | "published" | "hidden" | "expired";
export type ModerationState = "pending" | "approved" | "rejected";
export type ProcessingState = "queued" | "processing" | "ready" | "failed";
export type UploadState =
  | "selected"
  | "validating"
  | "queued"
  | "uploading"
  | "paused"
  | "uploaded-unverified"
  | "verified"
  | "failed"
  | "canceled";
export type FaceIndexState = "ineligible" | "pending" | "indexed" | "failed" | "deleted";
export type MediaKind = "photo" | "video";
export type MediaSource = "guest" | "professional";
export type Visibility = "shared" | "restricted-family" | "couple-and-team" | "team-only";
export type ConsentPurpose = "contribution-sharing" | "face-processing" | "service-messaging" | "marketing";

export interface EventSummary {
  id: ID;
  weddingId: ID;
  name: string;
  startAt: ISODateTime;
  endAt?: ISODateTime;
  timeZone: string;
  venue?: { name: string; address?: string; latitude?: number; longitude?: number };
  cover?: { url: string; alt: string; focalPoint: { x: number; y: number } };
  sortOrder: number;
}

/** Explicit public allowlist; no member names/contacts, private albums or notes. */
export interface PublicInvitation {
  slug: string;
  weddingTitle: string;
  coupleDisplayNames: string[];
  hashtag?: string;
  city: string;
  timeZone: string;
  startDate: ISODate;
  endDate: ISODate;
  events: EventSummary[];
}

export interface PortfolioItem {
  id: ID;
  title: string;
  description?: string;
  kind: MediaKind;
  poster: { url: string; width: number; height: number; alt: string };
  credits: string[];
  playbackUrl?: string;
  /** Server emits only approved, published items; evidence stays private. */
  publicUseApproved: true;
}

export interface EnquiryInput extends MutationOptions {
  names: string;
  preferredContact: "email" | "whatsapp";
  email?: string;
  phone?: string;
  proposedDate?: ISODate;
  dateFlexibility?: string;
  city: string;
  venue?: string;
  eventsOrDays?: string;
  services: ("photography" | "films")[];
  priorities?: string;
  budgetRange?: string;
  referralSource?: string;
  privacyNoticeVersion: string;
  optionalMarketingOptIn: boolean;
}

export interface EnquiryReceipt {
  id: ID;
  acceptedAt: ISODateTime;
  status: "accepted";
  /** Server acceptance does not promise email or WhatsApp delivery. */
  nextStep: string;
}

export interface EnquiryRecord extends Omit<EnquiryInput, "idempotencyKey"> {
  id: ID;
  studioId: ID;
  status: LeadState;
  assignedProducerId?: ID;
  version: number;
  createdAt: ISODateTime;
  retentionExpiresAt: ISODateTime;
}

export interface BookingInput extends VersionedInput {
  enquiryId: ID;
  weddingTitle: string;
  coupleDisplayNames: string[];
  slug: string;
  agreedScope: string;
  confirmedBy: ID;
  /** Real confirmation evidence; never generated by a demo conversion. */
  bookingReference: string;
}

export interface BookingReceipt {
  bookingId: ID;
  weddingId: ID;
  membershipSetup: "required";
}

export interface InvitationExchangeInput {
  token: string;
  /** Optional scoped event preselection, not authentication. */
  eventId?: ID;
}

export interface AccessReceipt {
  weddingId: ID;
  role: Role;
  expiresAt: ISODateTime;
  /** Session material is managed using a secure transport appropriate to auth. */
  landingPath: string;
}

export interface GalleryQuery {
  weddingId: ID;
  eventId?: ID;
  albumId?: ID;
  source?: MediaSource;
  kind?: MediaKind;
  sort: "captured-asc" | "captured-desc" | "curated";
  cursor?: Cursor;
  limit: number;
}

export interface AuthorizedVariant {
  kind: "thumbnail" | "display" | "mobile" | "original";
  url: string;
  expiresAt: ISODateTime;
  width?: number;
  height?: number;
  mimeType: string;
}

export interface MediaSummary {
  id: ID;
  weddingId: ID;
  eventId?: ID;
  source: MediaSource;
  kind: MediaKind;
  caption?: string;
  credit?: string;
  capturedAt?: ISODateTime;
  width?: number;
  height?: number;
  durationSeconds?: number;
  variants: AuthorizedVariant[];
  allowedActions: ("favorite" | "download" | "share" | "report")[];
  publication: PublicationState;
  moderation: ModerationState;
  processing: ProcessingState;
}

export interface AlbumSummary {
  id: ID;
  weddingId: ID;
  title: string;
  visibility: Visibility;
  publication: PublicationState;
  permittedMediaCount: number;
  cover?: MediaSummary;
}

export interface UploadFileDeclaration {
  clientFileId: string;
  filename: string;
  declaredMimeType: string;
  declaredBytes: number;
  checksum: string;
  durationSeconds?: number;
}

export interface BeginUploadInput extends MutationOptions {
  weddingId: ID;
  eventId?: ID;
  files: UploadFileDeclaration[];
  consentRecordId: ID;
  requestedDestination: "guest-review" | "professional-draft";
}

export interface UploadItemReceipt {
  id: ID;
  clientFileId: string;
  mediaId?: ID;
  state: UploadState;
  verifiedBytes?: number;
  processing?: ProcessingState;
  moderation?: ModerationState;
  publication?: PublicationState;
  duplicateOfMediaId?: ID;
  errorCode?: ErrorCode;
  retryAllowed: boolean;
}

export interface UploadSessionReceipt {
  id: ID;
  weddingId: ID;
  expiresAt: ISODateTime;
  reservedBytes: number;
  items: UploadItemReceipt[];
}

export interface PartAuthorization {
  partNumber: number;
  uploadUrl: string;
  expiresAt: ISODateTime;
  requiredHeaders: Record<string, string>;
}

export interface CompleteUploadInput extends MutationOptions {
  weddingId: ID;
  sessionId: ID;
  itemId: ID;
  parts: { partNumber: number; etag: string }[];
  /** Claimed checksum; the server must verify actual storage. */
  checksum: string;
}

export interface CreativeBrief {
  weddingId: ID;
  version: number;
  story: string;
  priorities: string[];
  keyPeople: { displayName: string; relationship?: string }[];
  familyShots: string[];
  preferences: string;
  state: "draft" | "submitted" | "approved";
  referenceIds: ID[];
}

export interface CoverageItem {
  id: ID;
  weddingId: ID;
  eventId: ID;
  title: string;
  startAt?: ISODateTime;
  endAt?: ISODateTime;
  assignedMemberIds: ID[];
  visibility: "couple-and-team" | "team-only";
  notes?: string;
}

export interface Milestone {
  id: ID;
  weddingId: ID;
  title: string;
  dueAt?: ISODateTime;
  state: "planned" | "awaiting-client" | "in-progress" | "ready-for-review" | "complete";
  clientAction?: { label: string; resourceId: ID; kind: "brief" | "selection" | "review" | "download" };
}

export interface SelectionSet {
  id: ID;
  weddingId: ID;
  ownerId: ID;
  title: string;
  mediaIds: ID[];
  version: number;
  state: "draft" | "submitted" | "approved";
}

export interface DeliverableVersion {
  id: ID;
  weddingId: ID;
  deliverableId: ID;
  versionNumber: number;
  mediaId?: ID;
  reviewUrl?: string;
  state: "draft" | "processing" | "internal-review" | "couple-review" | "approved" | "published";
  approvedBy?: ID;
  approvedAt?: ISODateTime;
}

export interface ReviewInput extends VersionedInput {
  weddingId: ID;
  deliverableId: ID;
  deliverableVersionId: ID;
  decision: "comment" | "request-revision" | "approve";
  comment?: string;
  timecodeSeconds?: number;
}

export interface ConsentInput extends MutationOptions {
  weddingId: ID;
  purpose: ConsentPurpose;
  noticeVersion: string;
  granted: boolean;
}

export interface ConsentReceipt {
  id: ID;
  weddingId: ID;
  purpose: ConsentPurpose;
  noticeVersion: string;
  grantedAt?: ISODateTime;
  withdrawnAt?: ISODateTime;
}

export interface BeginFaceSearchInput extends MutationOptions {
  weddingId: ID;
  consentRecordId: ID;
  /** Opaque, expiring input handle. Never an arbitrary remote URL. */
  temporarySelfieHandle: string;
  albumIds?: ID[];
}

export interface FaceSearchStatus {
  id: ID;
  weddingId: ID;
  state: "queued" | "validating" | "searching" | "partial" | "complete" | "failed" | "expired";
  qualityIssue?: "no-clear-face" | "multiple-faces" | "unsupported-input";
  searchedPartitions: number;
  totalPartitions: number;
  indexGeneration: number;
  results: Page<MediaSummary>;
  expiresAt: ISODateTime;
  /** No confidence percentage or inferred identity is exposed to guests. */
  complete: boolean;
}

export interface DownloadInput extends MutationOptions {
  weddingId: ID;
  mediaIds: ID[];
  variant: "original" | "mobile";
}

export interface DownloadJob {
  id: ID;
  weddingId: ID;
  state: "queued" | "preparing" | "ready" | "failed" | "expired";
  completedItems: number;
  totalItems: number;
  delivery?: { url: string; expiresAt: ISODateTime };
  errorCode?: ErrorCode;
}

export interface ModerationInput extends VersionedInput {
  weddingId: ID;
  mediaId: ID;
  action: "approve" | "reject" | "hide" | "restore" | "publish";
  reason?: string;
}

export interface DeletionRequestInput extends MutationOptions {
  weddingId: ID;
  scope:
    | { kind: "media"; mediaIds: ID[] }
    | { kind: "face-reference"; subjectId: ID }
    | { kind: "own-contributions" }
    | { kind: "project" };
  reason?: string;
}

export interface DeletionStatus {
  id: ID;
  state: "requested" | "verifying-authority" | "hidden" | "cleaning" | "completed" | "rejected";
  requestedAt: ISODateTime;
  activeProviderCleanupComplete: boolean;
  backupExpiryAt?: ISODateTime;
  completedAt?: ISODateTime;
}

export interface CommunicationPreferences {
  weddingId: ID;
  language: "en" | "hi";
  serviceUpdates: boolean;
  marketing: boolean;
  quietHours?: { startLocal: string; endLocal: string; timeZone: string };
}

export interface NotificationInput extends MutationOptions {
  weddingId: ID;
  recipientIds: ID[];
  purpose: "album-ready" | "requested-support";
  templateId?: ID;
  albumId?: ID;
}

export interface JobReceipt {
  id: ID;
  state: "accepted";
  statusPath: string;
}

/** Each adapter applies runtime validation and current server authorization. */
export interface ProductionServices {
  listPublicPortfolio(cursor?: Cursor): Promise<Result<Page<PortfolioItem>>>;
  createEnquiry(input: EnquiryInput): Promise<Result<EnquiryReceipt>>;
  listEnquiries(status?: LeadState, cursor?: Cursor): Promise<Result<Page<EnquiryRecord>>>;
  updateEnquiry(id: ID, input: VersionedInput & { status: LeadState; assignedProducerId?: ID }): Promise<Result<EnquiryRecord>>;
  convertEnquiry(input: BookingInput): Promise<Result<BookingReceipt>>;
  readPublicInvitation(slug: string): Promise<Result<PublicInvitation>>;
  exchangeInvitation(input: InvitationExchangeInput): Promise<Result<AccessReceipt>>;
  listEvents(weddingId: ID): Promise<Result<EventSummary[]>>;
  listAlbums(weddingId: ID, cursor?: Cursor): Promise<Result<Page<AlbumSummary>>>;
  browseMedia(query: GalleryQuery): Promise<Result<Page<MediaSummary>>>;
  beginUpload(input: BeginUploadInput): Promise<Result<UploadSessionReceipt>>;
  authorizeUploadParts(input: { weddingId: ID; sessionId: ID; itemId: ID; partNumbers: number[] }): Promise<Result<PartAuthorization[]>>;
  completeUpload(input: CompleteUploadInput): Promise<Result<UploadSessionReceipt>>;
  abortUpload(input: MutationOptions & { weddingId: ID; sessionId: ID; itemId?: ID }): Promise<Result<UploadSessionReceipt>>;
  getUpload(weddingId: ID, sessionId: ID): Promise<Result<UploadSessionReceipt>>;
  readBrief(weddingId: ID): Promise<Result<CreativeBrief>>;
  updateBrief(input: VersionedInput & { brief: CreativeBrief }): Promise<Result<CreativeBrief>>;
  readCoverage(weddingId: ID): Promise<Result<CoverageItem[]>>;
  readMilestones(weddingId: ID): Promise<Result<Milestone[]>>;
  setFavorite(input: MutationOptions & { weddingId: ID; mediaId: ID; favorite: boolean }): Promise<Result<{ favorite: boolean }>>;
  saveSelection(input: VersionedInput & { selection: SelectionSet }): Promise<Result<SelectionSet>>;
  reviewDeliverable(input: ReviewInput): Promise<Result<DeliverableVersion>>;
  recordConsent(input: ConsentInput): Promise<Result<ConsentReceipt>>;
  beginFaceSearch(input: BeginFaceSearchInput): Promise<Result<JobReceipt>>;
  getFaceSearch(weddingId: ID, searchId: ID, cursor?: Cursor): Promise<Result<FaceSearchStatus>>;
  requestDownload(input: DownloadInput): Promise<Result<DownloadJob>>;
  getDownload(weddingId: ID, jobId: ID): Promise<Result<DownloadJob>>;
  reportMedia(input: MutationOptions & { weddingId: ID; mediaId: ID; reason: string }): Promise<Result<{ reportId: ID }>>;
  moderateMedia(input: ModerationInput): Promise<Result<MediaSummary>>;
  requestDeletion(input: DeletionRequestInput): Promise<Result<DeletionStatus>>;
  getDeletion(weddingId: ID, requestId: ID): Promise<Result<DeletionStatus>>;
  updateCommunicationPreferences(input: VersionedInput & { preferences: CommunicationPreferences }): Promise<Result<CommunicationPreferences>>;
  queueNotification(input: NotificationInput): Promise<Result<JobReceipt>>;
}

```

</details>

[Back to contents](#start)

<a id="archive-env-template"></a>
### Environment template — no credentials

<details>
<summary>Expand full snapshot: .env.example</summary>

```dotenv
# Public, build-time contact destinations. Set only owner-verified values.
# Leave blank until verified; the UI must not invent a contact destination.
NEXT_PUBLIC_CONTACT_EMAIL=
# International-format digits only, including country code; no + or spaces.
NEXT_PUBLIC_WHATSAPP_NUMBER=

# Optional server-only enquiry adapter, disabled until a trusted receiver exists.
ENQUIRIES_ENABLED=false
ENQUIRY_WEBHOOK_URL=
ENQUIRY_WEBHOOK_TOKEN=

# This release has no live backend. Do not put private API keys in NEXT_PUBLIC_*.
# Email and WhatsApp links open the visitor's provider. The visitor must send
# the message there. A local demo receipt is not evidence of delivery.

# Optional signed WhatsApp webhook -> durable ingestion queue. Disabled by default.
WHATSAPP_INGRESS_ENABLED=false
WHATSAPP_VERIFY_TOKEN=
WHATSAPP_APP_SECRET=
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_QUEUE_URL=
WHATSAPP_QUEUE_TOKEN=

```

</details>

[Back to contents](#start)

---

End of master handoff. Keep this file with the source checkout; update the consolidated status and change date as live services are implemented.
