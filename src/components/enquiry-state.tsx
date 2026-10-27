'use client';
import {createContext,useContext,useState,type ReactNode} from 'react';
import {emptyEnquiry,type EnquiryDraft} from '@/lib/enquiry';
const Context=createContext<{draft:EnquiryDraft;setDraft:React.Dispatch<React.SetStateAction<EnquiryDraft>>}|null>(null);
export function EnquiryDraftProvider({children}:{children:ReactNode}){const [draft,setDraft]=useState<EnquiryDraft>(()=>({...emptyEnquiry,services:[]}));return <Context.Provider value={{draft,setDraft}}>{children}</Context.Provider>}
export function useEnquiryDraft(){const state=useContext(Context);if(!state)throw new Error('EnquiryDraftProvider is required');return state;}
