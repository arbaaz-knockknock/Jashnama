import type { Metadata } from 'next';
import { Header, Footer } from '@/components/site-shell';
import { DemoProvider } from '@/components/demo-context';
import { EnquiryDraftProvider } from '@/components/enquiry-state';
import { ExperienceMotion } from '@/components/experience-motion';
import './globals.css';
import './refinements.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jashnama.vercel.app'),
  title: {default: 'Jashnama — Wedding Films & Photography', template: '%s · Jashnama'},
  description: 'Celebrations. Directed. Wedding films, photography and visual storytelling, from your first conversation to your final collection.',
  robots: {index: true, follow: true},
  openGraph: {type:'website',siteName:'Jashnama',title:'Jashnama — Wedding Films & Photography',description:'Celebrations. Directed. Cinematic storytelling, thoughtful photography, and care from the first hello to the final frame.'},
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body><DemoProvider><EnquiryDraftProvider><Header/>{children}<Footer/><ExperienceMotion/></EnquiryDraftProvider></DemoProvider></body></html>;
}
