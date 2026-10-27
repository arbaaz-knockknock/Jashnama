'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { Menu, X, Mail, MessageCircle } from 'lucide-react';
import { brand } from '@/lib/brand';

const links = [['Films', '/films'], ['Photography', '/photography'], ['The Experience', '/experience'], ['About', '/about']];
const privatePath = (p: string) => ['/wedding/', '/couple/', '/studio'].some(x => p.startsWith(x));

export function Wordmark({small = false}: {small?: boolean}) {
  return <span className={`wordmark ${small ? 'small' : ''}`}><span>JASHNAMA</span><span className="wordmark-caption">WEDDING CINEMA & VISUAL DIRECTION</span></span>;
}

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinel = useRef<HTMLSpanElement>(null);
  const menu = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    const dialog=menu.current;
    if(open){dialog?.showModal();const before=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{dialog?.close();document.body.style.overflow=before;};}
    dialog?.close();
  },[open]);
  useEffect(()=>{const observer=new IntersectionObserver(([entry])=>setScrolled(!entry.isIntersecting));if(sentinel.current)observer.observe(sentinel.current);return()=>observer.disconnect();},[path]);
  function closeMenu(){setOpen(false);trigger.current?.focus();}

  if (privatePath(path)) return null;
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <span ref={sentinel} className="nav-sentinel" aria-hidden="true"/><header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <Link href="/" className="brand-link" aria-label="Jashnama home"><Wordmark /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={path === href ? 'page' : undefined}>{label}</Link>)}</nav>
      <div className="header-actions"><Link className="client-link" href="/your-wedding">Your Wedding</Link><Link className="button button-small button-gold" href="/enquire">Let’s create together</Link></div>
      <button ref={trigger} className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    </header>
    <dialog ref={menu} id="mobile-menu" className="mobile-menu glass-dark" aria-label="Explore Jashnama" onCancel={e=>{e.preventDefault();closeMenu();}} onClick={e=>{if(e.target===e.currentTarget)closeMenu();}}><div className="mobile-menu-heading"><span>Explore Jashnama</span><button className="menu-button" aria-label="Close menu" onClick={closeMenu}><X/></button></div><nav aria-label="Mobile navigation">{[...links, ['Your Wedding', '/your-wedding'], ['Tell us about your wedding', '/enquire']].map(([label, href]) => <Link href={href} key={href} aria-current={path===href?'page':undefined} onClick={() => setOpen(false)}>{label}</Link>)}</nav></dialog>
  </>;
}

export function Footer() {
  const path = usePathname();
  if (privatePath(path)) return null;
  return <footer className="site-footer">
    <div className="footer-top"><Link href="/" aria-label="Jashnama home"><Wordmark /></Link><p>Stories. People. Celebrations.<br/>Forever.</p><div className="footer-links"><Link href="/experience">The Experience</Link><Link href="/services">Our services</Link><Link href="/enquire">Enquire</Link><Link href="/your-wedding">Your Wedding</Link></div>
    <div className="footer-contact"><span className="eyebrow">BEGIN A CONVERSATION</span>{brand.email ? <a href={`mailto:${brand.email}`}><Mail size={16}/>{brand.email}</a> : <Link href="/enquire">Tell us about your wedding</Link>}{brand.whatsapp && <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={16}/>WhatsApp Jashnama</a>}</div></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Jashnama</span><span>CELEBRATIONS. DIRECTED.</span><Link href="/privacy">Privacy & image credits</Link></div>
  </footer>;
}
