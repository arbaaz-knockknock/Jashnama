# Jashnama

**Start here for migration and complete planning:** [Jashnama Master Handoff](JASHNAMA_MASTER_HANDOFF.md).


A cinematic wedding films and photography website, with connected **demonstration** workspaces for couples, guests and the studio.

## GitHub repository

https://github.com/arbaaz-knockknock/Jashnama — branch `main`.

```sh
git clone https://github.com/arbaaz-knockknock/Jashnama.git
cd Jashnama
```

## Run locally

Use Node.js 24 and pnpm 11:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. Production checks:

```sh
pnpm lint
pnpm test
pnpm typecheck
pnpm build
pnpm start
```

The application uses Next.js App Router, React, TypeScript, locally hosted Playfair Display / Montserrat fonts, responsive WebP concept imagery and Lucide icons. Dependencies are pinned and the lockfile is committed.

## What is included

- Public home, films, photography, experience, services, about and enquiry pages.
- Mobile navigation, photography filters, concept viewer, process accordion and FAQs.
- A validated enquiry draft with copy/download. Verified email and WhatsApp destinations can open a draft in the visitor's selected provider; the visitor sends it.
- `/your-wedding`: entry to clearly marked previews.
- `/wedding/savage-wedding`: Vedant and Sakshi's exact supplied itinerary, calendar downloads, sample galleries, favorites, local contribution simulation and optional sample selfie flow.
- `/couple/savage-wedding`: creative brief, milestones, coverage plan, private shortlist and sample film-version feedback.
- `/studio`: synthetic enquiry inbox, project stages/tasks, brief, moderation, selections, review and scoped settings.
- `/wedding/sample-wedding` and `/couple/sample-wedding`: a separate fictional project to check UI isolation.

## Connect enquiries

Copy `.env.example` to `.env.local`, then set only **verified** public business details:

```dotenv
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
```

WhatsApp uses international-format digits, including the country code. Rebuild after changing these build-time values. Until a destination is configured, the UI clearly states that enquiries are local drafts and have not been sent. The website never invents a phone number or email address from the conceptual brand board.

The optional server enquiry adapter is documented in [ENQUIRY_BACKEND.md](docs/ENQUIRY_BACKEND.md). It adds validated, rate-limited handoff and duplicate protection; no live receiver is connected.

## Updating the site

- Brand, services, process copy and contact configuration: `src/lib/brand.ts`.
- Colors, typography and public responsive rules: `src/app/globals.css`.
- Public page content: `src/app/*/page.tsx` and shared editorial components.
- Exact wedding event starts and demo fixtures: `src/lib/demo.ts`.
- Private UI and styling: `src/components/workspace.tsx` / `workspace.css`.
- Replace `/public/images/hero.webp`, `ritual.webp` and `lighting.webp` with approved portfolio assets; update alt text and remove concept labels only after rights and attribution are confirmed.
- Current wordmark and favicon are provisional typographic treatments. Replace with approved vector assets when supplied.

Venue addresses, end times, prices, crew assignments, delivery commitments and hosting terms are intentionally pending. Calendar files use exact UTC starts corresponding to Asia/Kolkata and omit unsupplied end times.

## Preview limitations

There is no production authentication, database, cloud upload, actual face recognition, live lead inbox, automated messaging or payment integration. All private routes are **public demonstration pages**, marked noindex; noindex is not authorization. Do not put actual client media or personal records into fixtures.

Demo state lives in memory and resets after a reload. Briefs, feedback and favorites are wedding-scoped. Public enquiry personal details are not copied into studio fixtures; only a synthetic preview lead is added. Selected file bytes and selfies are never persisted or sent to a service. Temporary URLs are revoked on close; a sample selfie is also discarded after the demo search. Upload progress, moderation, approvals and lead conversion are simulations, never live delivery or booking claims.

Hindi currently covers key guest navigation and invitation labels, with English fallback for advanced controls. Large text and reduced motion are available. Production service contracts are typed. An optional enquiry handoff adapter is implemented but disabled until a verified receiver is configured.

## Verification

- `pnpm build`: production routes compile and prerender successfully, with TypeScript verification.
- `pnpm test`: exact event/ICS starts, absence of invented durations, independent wedding/session state, fictional fixture handling.
- Browser checks cover public navigation, responsive layouts, enquiry receipt, gallery filters, couple/studio state and preview role switching. See `docs/VERIFICATION.md` for the final recorded results and limits.

## Deployment

Deploy as a new Vercel Next.js project named `jashnama`, using the existing account. Never link this directory to the existing `the-savage-wedding` project. The original wedding deployment is not migrated or modified.

```sh
vercel link --yes --project jashnama
vercel --prod
```

Current production site: https://jashnama.vercel.app. The project is `kkk-cy-s2-cyos/jashnama`. Vercel's Next.js detection uses `pnpm build`. Secrets, local runtime state, original source brief files and the original brand board are excluded from source uploads. The owner-authorized master handoff includes the textual planning.

## Handoff

- [Personalised journey and WhatsApp integration boundary](docs/PERSONALIZED_EXPERIENCE.md)

- [UI/UX refinement report](docs/UI_UX_REFINEMENT.md)
- [Enquiry backend connection](docs/ENQUIRY_BACKEND.md)

- [Brand interpretation](docs/BRAND.md)
- [Feature status](docs/FEATURE_STATUS.md)
- [Journeys and permissions](docs/JOURNEYS_AND_PERMISSIONS.md)
- [Production architecture and data model](docs/PRODUCTION_HANDOFF.md)
- [Typed proposed backend contracts](docs/backend-contracts.ts)
- [Retention and cost inputs](docs/RETENTION_AND_COSTS.md)
- [Launch checklist](docs/LAUNCH_CHECKLIST.md)

Implementation references: [Next.js installation](https://nextjs.org/docs/app/getting-started/installation), [Vercel deployment CLI](https://vercel.com/docs/cli/deploy).
