'use client';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { createDemoState, type DemoState } from '@/lib/demo';
const DemoContext = createContext<{ state: DemoState; setState: React.Dispatch<React.SetStateAction<DemoState>> } | null>(null);
export function addDemoEnquiry() { if (typeof window !== 'undefined') window.dispatchEvent(new Event('jashnama:enquiry-demo')); }
export function DemoProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DemoState>(createDemoState);
  useEffect(() => { const handle = () => setState(previous => ({ ...previous, enquiries: [{ id: `preview-enquiry-${Date.now()}`, label: 'Website preview enquiry', city: 'Private details are not retained', service: 'Service enquiry · synthetic record', status: 'New', synthetic: true }, ...previous.enquiries] })); window.addEventListener('jashnama:enquiry-demo', handle); return () => window.removeEventListener('jashnama:enquiry-demo', handle); }, []);
  const attachmentUrls=useRef(new Set<string>());
  useEffect(()=>{const next=new Set(Object.values(state.weddings).flatMap(w=>w.attachments.map(a=>a.url)));for(const url of attachmentUrls.current)if(!next.has(url))URL.revokeObjectURL(url);attachmentUrls.current=next;},[state]);
  useEffect(()=>()=>{for(const url of attachmentUrls.current)URL.revokeObjectURL(url);},[]);
  return <DemoContext.Provider value={{ state, setState }}>{children}</DemoContext.Provider>;
}
export function useDemo() { const context = useContext(DemoContext); if (!context) throw new Error('DemoProvider is required'); return context; }
