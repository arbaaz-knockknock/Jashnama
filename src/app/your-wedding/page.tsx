import type { Metadata } from 'next';
import { WorkspaceEntry } from '@/components/workspace';
export const metadata:Metadata={title:'Your Wedding',robots:{index:false,follow:false}};
export default function Page(){return <WorkspaceEntry/>}
