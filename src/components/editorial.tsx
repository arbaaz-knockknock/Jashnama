'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Aperture, Camera, Check, ChevronDown, Film, Play, Plus, X } from 'lucide-react';
import { brand, chapters } from '@/lib/brand';

export function Cta({compact = false}: {compact?: boolean}) {
  return <section className={`closing-cta ${compact ? 'compact' : ''}`}><div className="star-mark" aria-hidden="true">✦</div><p className="eyebrow">EVERY GREAT STORY STARTS WITH A CONVERSATION</p><h2>Let’s make something<br/><em>worth remembering.</em></h2><Link href="/enquire" className="button button-gold">Tell us about your wedding</Link><p className="quiet">Your story. Our undivided attention.</p></section>;
}

export function Process({expanded = false}: {expanded?: boolean}) {
  const [active, setActive] = useState(0);
  return <div className={`process ${expanded ? 'expanded' : ''}`}><div className="process-intro"><p className="eyebrow">THE JASHNAMA EXPERIENCE</p><h2>Considered.<br/>From the first hello<br/>to <em>the final frame.</em></h2><p>A seamless creative journey, with your story at its heart.</p><Link href="/experience" className="text-link">Explore the experience</Link></div><div className="process-list">{chapters.map((c, i) => <div className={`process-item ${active === i ? 'active' : ''}`} key={c.number}><button onClick={() => setActive(active === i ? -1 : i)} aria-expanded={active === i} aria-controls={`chapter-${i}`}><span className="chapter-number">{c.number}</span><span><span className="process-subtitle">{c.subtitle}</span><span className="process-title">{c.title}</span></span><Plus size={18} className="plus"/></button><div hidden={active !== i} id={`chapter-${i}`}><p>{c.body}</p></div></div>)}</div></div>;
}

export function ConceptModal({kind, onClose}: {kind: string; onClose: () => void}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => { const dialog = ref.current; const overflow=document.body.style.overflow; dialog?.showModal(); document.body.style.overflow='hidden'; return () => {dialog?.close();document.body.style.overflow=overflow;}; }, []);
  return <dialog ref={ref} className="concept-dialog" aria-labelledby="concept-title" onCancel={onClose} onClick={e => {if(e.target === e.currentTarget) onClose();}}><button className="dialog-close" onClick={onClose} aria-label="Close preview"><X/></button><div className="dialog-image"><Image src={kind === 'Light, feeling & atmosphere' ? brand.images.light : kind === 'The little things' ? brand.images.detail : brand.images.hero} alt="Generated wedding visual concept" fill sizes="(max-width: 700px) 100vw, 800px"/></div><div className="dialog-copy"><p className="eyebrow">A CREATIVE DIRECTION · CONCEPT PREVIEW</p><h2 id="concept-title">{kind}</h2><p>Our approach to wedding cinema begins with feeling: light, a sense of place, and the moments between the moments.</p><p className="quiet">This is a visual concept, not a film or a completed Jashnama wedding. Approved portfolio films will be added here.</p><Link href="/enquire" className="button button-gold" onClick={onClose}>Discuss your wedding film</Link></div></dialog>;
}

export function StoryCards({full = false}: {full?: boolean}) {
  const [selected, setSelected] = useState<string | null>(null);
  const stories = [
    {title: 'A feeling, forever.', type: 'WEDDING CINEMA', image: brand.images.hero, cls: 'story-wide'},
    {title: 'The little things', type: 'WEDDING PHOTOGRAPHY', image: brand.images.detail, cls: 'story-narrow'},
    ...(full ? [{title: 'Light, feeling & atmosphere', type: 'VISUAL DIRECTION', image: brand.images.light, cls: 'story-wide'}] : []),
  ];
  return <><div className={`story-grid ${full ? 'three' : ''}`}>{stories.map(s => <button key={s.title} className={`story-card ${s.cls}`} onClick={() => setSelected(s.title)}><div className="story-image"><Image src={s.image} alt={`${s.title} — generated visual concept`} fill sizes={full ? '(max-width: 700px) 100vw, 33vw' : '(max-width: 700px) 100vw, 60vw'}/><span className="concept-label">CONCEPT PREVIEW</span><span className="round-icon">{s.type === 'WEDDING PHOTOGRAPHY' ? <Camera size={20}/> : <Play size={20}/>}</span></div><div className="story-caption"><div><span className="eyebrow">{s.type}</span><h3>{s.title}</h3></div><span className="view-label">Explore</span></div></button>)}</div>{selected && <ConceptModal kind={selected} onClose={() => setSelected(null)}/>}</>;
}

export function PhotographyGallery() {
  const [filter, setFilter] = useState('All frames');
  const [selected, setSelected] = useState<string | null>(null);
  const shots = [{name:'A feeling, forever.',category:'Portraits',image:brand.images.hero},{name:'The little things',category:'Details',image:brand.images.detail},{name:'Light, feeling & atmosphere',category:'Atmosphere',image:brand.images.light}];
  return <><div className="filter-row" aria-label="Filter photography">{['All frames','Portraits','Details','Atmosphere'].map(f=><button key={f} aria-pressed={filter===f} className={filter===f?'selected':''} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="photo-gallery">{shots.filter(s=>filter==='All frames'||s.category===filter).map((s,i)=><button key={s.name} className={`photo-tile photo-${i}`} onClick={()=>setSelected(s.name)}><div><Image src={s.image} alt={`${s.category} — generated concept, not a client photograph`} fill sizes="(max-width: 700px) 100vw, 50vw"/><span className="concept-label">CONCEPT PREVIEW</span></div><h3>{s.name}</h3><span>{s.category}</span></button>)}</div>{selected&&<ConceptModal kind={selected} onClose={()=>setSelected(null)}/>}</>;
}

export function Faq() {
  const faqs = [
    ['What does Jashnama take care of?', 'Wedding filmmaking and photography, from creative conversations and coverage planning to editing, review and final delivery. We agree the services and deliverables with you before the celebrations.'],
    ['Do you work with our wedding planner and lighting team?', 'Yes. We collaborate closely with your curators, planner and lighting team to understand the setting, the flow of each event, and the light. Our role is media creative direction and coverage; your event team leads the celebration itself.'],
    ['How will we receive our films and photographs?', 'Your agreed collection comes together in your private wedding space, with organised galleries, film reviews, selections and permitted downloads. Hosting duration and delivery milestones are confirmed in your service scope.'],
    ['Can we share our own ideas and references?', 'Absolutely. The story conversation and creative brief are where we gather your references, priorities, traditions and the people you want us to pay special attention to.'],
    ['How do we begin?', 'Tell us your dates, location and the celebrations you are planning. We can then discuss your vision and the coverage you need. No preset package is assumed.'],
  ];
  return <section className="faq section-pad"><div><p className="eyebrow">A FEW THINGS YOU MAY BE WONDERING</p><h2>Before we<br/><em>say hello.</em></h2></div><div>{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown size={18}/></summary><p>{a}</p></details>)}</div></section>;
}

export function WeddingSpacePreview() {
  return <section className="wedding-space section-pad"><div><p className="eyebrow">THE EXPERIENCE CONTINUES</p><h2>Your wedding.<br/><em>One beautiful place.</em></h2><p>A private space to share your vision, follow the journey, review your films, and return to your favourite photographs. Thoughtfully included in the Jashnama experience.</p><ul className="check-list"><li><Check size={16}/>Your ideas, references and important people</li><li><Check size={16}/>Clear milestones and considered feedback</li><li><Check size={16}/>Your collection, ready to share and enjoy</li></ul><Link className="text-link" href="/your-wedding">Explore a sample wedding space</Link></div><div className="space-preview"><div className="space-preview-header"><span className="serif">Your Wedding</span><span className="pill">INTERACTIVE PREVIEW</span></div><div className="space-photo"><Image src={brand.images.hero} alt="Illustrative wedding concept" fill sizes="(max-width: 700px) 90vw, 40vw"/><div><span className="eyebrow">11–13 DECEMBER 2026 · LUCKNOW</span><h3>Vedant & Sakshi</h3><p>#TheSavageWedding</p></div></div><div className="space-actions"><span><Aperture size={20}/>Your creative brief</span><span><Camera size={20}/>Your photographs</span><span><Film size={20}/>Your films</span></div><div className="space-next"><span className="gold-dot"/>Up next: bringing your vision together<Link href="/your-wedding">Open preview</Link></div></div></section>;
}
