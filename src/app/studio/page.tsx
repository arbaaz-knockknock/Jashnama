import type { Metadata } from 'next';
import { StudioWorkspace } from '@/components/workspace';
export const metadata:Metadata={title:'Studio Preview',robots:{index:false,follow:false}};
export default async function Page({searchParams}:{searchParams:Promise<{wedding?:string}>}){const {wedding}=await searchParams;return <StudioWorkspace key={wedding||'savage'} initialId={wedding==='sample'?'sample':'savage'}/>}
