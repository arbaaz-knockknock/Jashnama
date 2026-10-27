import type { Metadata } from 'next';
import { EnquiryForm } from '@/components/enquiry-form';
export const metadata:Metadata={title:'Tell Us About Your Wedding',description:'Start your wedding films and photography story with Jashnama. Share your dates, celebrations and creative vision.'};
export const dynamic='force-dynamic';
export default function Enquire(){return <main id="main" className="inner-page"><EnquiryForm backendReady={process.env.ENQUIRIES_ENABLED==='true'&&!!process.env.ENQUIRY_WEBHOOK_URL}/></main>}
