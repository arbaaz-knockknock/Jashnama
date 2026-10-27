'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { motion } from '@/lib/motion';

export function ExperienceMotion() {
  const pathname = usePathname();
  const previous = useRef(pathname);
  const historyNavigation = useRef(false);
  useEffect(() => {
    const back = () => {historyNavigation.current = true;};
    window.addEventListener('popstate',back);
    return () => window.removeEventListener('popstate',back);
  },[]);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations: Animation[] = [];
    const main = document.querySelector('main');
    const changed = previous.current !== pathname;
    if (changed && !historyNavigation.current && !preference.matches && main) {
      animations.push(main.animate([{opacity:.88,transform:'translateY(4px)'},{opacity:1,transform:'translateY(0)'}],{duration:motion.standard,easing:motion.ease}));
    }
    previous.current = pathname;
    historyNavigation.current = false;
    // Content stays visible without JS, during quick scrolls, and with reduced motion.
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if(!entry.isIntersecting) continue;
        if(!preference.matches && entry.boundingClientRect.top > 0) {
          animations.push(entry.target.animate([{opacity:.72,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:motion.cinematic,easing:motion.ease}));
        }
        observer.unobserve(entry.target);
      }
    },{threshold:.12});
    document.querySelectorAll('.section-heading,.light-copy,.process-intro').forEach(element => {
      if(element.getBoundingClientRect().top > window.innerHeight) observer.observe(element);
    });
    const stop = () => {if(preference.matches) animations.forEach(a=>a.cancel());};
    preference.addEventListener('change',stop);
    return () => {observer.disconnect();animations.forEach(a=>a.cancel());preference.removeEventListener('change',stop);};
  },[pathname]);
  return null;
}
