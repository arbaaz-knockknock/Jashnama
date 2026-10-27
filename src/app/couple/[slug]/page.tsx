import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CoupleWorkspace } from '@/components/workspace';
export const metadata:Metadata={title:'Couple Workspace Preview',robots:{index:false,follow:false}};
export function generateStaticParams(){return [{slug:'savage-wedding'},{slug:'sample-wedding'}]}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!['savage-wedding','sample-wedding'].includes(slug))notFound();return <CoupleWorkspace key={slug} id={slug==='savage-wedding'?'savage':'sample'}/>}
