import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {return {rules:{userAgent:'*',allow:'/',disallow:['/wedding/','/couple/','/studio','/your-wedding']},sitemap:'https://jashnama.vercel.app/sitemap.xml'};}
