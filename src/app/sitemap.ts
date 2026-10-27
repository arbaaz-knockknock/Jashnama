import type { MetadataRoute } from 'next';
export default function sitemap():MetadataRoute.Sitemap{return ['','/films','/photography','/experience','/services','/about','/enquire','/privacy'].map(path=>({url:`https://jashnama.vercel.app${path}`,changeFrequency:'monthly',priority:path===''?1:.7}));}
