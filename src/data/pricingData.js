// Wyatt's real package structure from his Pixieset Investment page.
//
// NOTE: The actual prices on his site were too small to read in the
// screenshots. The numbers below are placeholders preserved from the
// previous code — confirm exact amounts with Wyatt before launch.

export const pricingPackages = [
  {
    id: 'sports',
    name: 'Sports — Standard',
    tagline: 'Game day & athlete coverage',
    startsAt: 50,
    currency: '$',
    description:
      'Coverage for athletes, teams, and programs. Edited photos via a downloadable link to preserve quality. From 1 game or training session.',
    features: [
      'Full game or training session',
      'Edited high-resolution images',
      'Download link delivery',
      'Action, team, and detail frames',
      'Same-week turnaround',
    ],
    cta: 'Inquire',
    featured: true,
  },
  {
    id: 'automotive',
    name: 'Automotive — Standard',
    tagline: 'Cars, builds, meets',
    startsAt: 50,
    currency: '$',
    description:
      'For automotive sessions, this package includes around 20 edited photos via a downloadable link to preserve quality. ~30 minute shoot time, 1 location.',
    features: [
      '~30 minute shoot',
      '1 location',
      '~20 edited high-resolution photos',
      'Download link delivery',
      'Color-graded final images',
    ],
    cta: 'Inquire',
  },
  {
    id: 'portraits',
    name: 'Portraits — Standard',
    tagline: 'Portraits & individuals',
    startsAt: 50,
    currency: '$',
    description:
      'A standard portrait package includes around 20 edited photos via a downloadable link to preserve quality. ~45 minute shoot time, 1 location.',
    features: [
      '~45 minute shoot',
      '1 location',
      '~20 edited high-resolution photos',
      'Download link delivery',
      'Personal use print release',
    ],
    cta: 'Inquire',
  },
  {
    id: 'custom',
    name: 'Custom Project',
    tagline: 'Campaigns, events, travel',
    startsAt: 250,
    currency: '$',
    description:
      'Ambitious work shaped to scope. Multi-location, travel, or full campaign coverage. Pre-session consultation, post-session editing, and high-resolution files included.',
    features: [
      'Pre-session consultation',
      'Custom shoot length & locations',
      'Full post-session editing',
      'High-resolution digital files',
      'Travel-friendly anywhere',
    ],
    cta: 'Discuss',
  },
]
