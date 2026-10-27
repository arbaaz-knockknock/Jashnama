export const brand = {
  name: 'Jashnama',
  descriptor: 'Wedding films & photography',
  signature: 'Celebrations. Directed.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || '',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '') || '',
  images: {
    hero: '/images/hero.webp',
    detail: '/images/ritual.webp',
    light: '/images/lighting.webp',
  },
};

export const services = [
  { number: '01', title: 'Wedding films', description: 'The quiet anticipation. The voices you love. The energy in the room. Films shaped around your story, with thoughtful editing, colour and sound.', detail: 'Story conversations · Cinematic coverage · Edit, colour & sound', href: '/films' },
  { number: '02', title: 'Wedding photography', description: 'Honest moments and considered portraits. Photographs that hold the feeling of a celebration, and the people who make it yours.', detail: 'Candid moments · Portraits · Curated collections', href: '/photography' },
  { number: '03', title: 'The complete experience', description: 'Creative preparation, considered production, collaborative reviews and a private place for your finished memories. Care, beyond the camera.', detail: 'Creative direction · Client reviews · Private delivery', href: '/experience' },
];

export const chapters = [
  { number: '01', title: 'First, your story.', subtitle: 'Listen & discover', body: 'We begin with you. The people, traditions and little things that matter. Together, we find the feeling that will guide the photographs and the film.' },
  { number: '02', title: 'A shared creative vision.', subtitle: 'Plan & collaborate', body: 'We work closely with your event curators, planners and lighting team. From the ceremony light to the portrait window, we align the coverage with the celebration they are creating.' },
  { number: '03', title: 'Present for the real moments.', subtitle: 'Photograph & film', body: 'A considered coverage plan lets the team anticipate what is coming while staying open to what unfolds. You experience the celebration; we pay attention to its story.' },
  { number: '04', title: 'Shaped with intention.', subtitle: 'Edit & refine', body: 'The story takes shape in the edit, the colour, and the sound. A clear review process gives your feedback a place and keeps the agreed deliverables moving.' },
  { number: '05', title: 'Yours, to return to.', subtitle: 'Deliver & preserve', body: 'Your approved films and photographs come together in an organised private collection, with sharing and downloads for the hosting period agreed in your service scope.' },
];
