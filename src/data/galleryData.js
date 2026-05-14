// All image paths point to /public/images/. Drop in real JPEGs with the same
// filenames and they replace these placeholders 1:1.

export const sportsImages = [
  { id: 'sp-01', src: '/images/sports-football-motion.jpg',      alt: 'Football player in motion blur',         title: 'Full Speed',     year: '2025', category: 'sports' },
  { id: 'sp-02', src: '/images/sports-football-catch.jpg',       alt: 'Football athlete rising for a catch',    title: 'Reach',          year: '2025', category: 'sports' },
  { id: 'sp-03', src: '/images/sports-football-99.jpg',          alt: 'Player number 99 on the sideline',       title: 'Locked In',      year: '2025', category: 'sports' },
  { id: 'sp-04', src: '/images/sports-coach-pointing.jpg',       alt: 'Coach giving direction on the field',    title: 'The Call',       year: '2025', category: 'sports' },
  { id: 'sp-05', src: '/images/sports-cleats-reflection.jpg',    alt: 'Athlete reflected in water on turf',     title: 'Reflection',     year: '2025', category: 'sports' },
  { id: 'sp-06', src: '/images/sports-lacrosse-celebration.jpg', alt: 'Lacrosse players battling for the ball', title: 'Contact',        year: '2025', category: 'sports' },
  { id: 'sp-07', src: '/images/sports-sprinter-motion.jpg',      alt: 'Sprinter blurred in motion',             title: 'Acceleration',   year: '2025', category: 'sports' },
]

export const portraitImages = [
  { id: 'pr-01', src: '/images/lifestyle-forest-seated.jpg',     alt: 'Subject seated in a green forest',       title: 'Stillness',      year: '2025', category: 'portraits' },
  { id: 'pr-02', src: '/images/lifestyle-forest-stance.jpg',     alt: 'Subject standing among dense trees',     title: 'Canopy',         year: '2025', category: 'portraits' },
  { id: 'pr-03', src: '/images/portrait-editorial-grunge.jpg',   alt: 'Editorial black & white portrait',       title: 'Inversion',      year: '2025', category: 'portraits' },
  { id: 'pr-04', src: '/images/event-couple-watch.jpg',          alt: 'Hands and watch detail',                 title: 'Detail',         year: '2025', category: 'portraits' },
  { id: 'pr-05', src: '/images/event-prom-couple.jpg',           alt: 'Prom couple walking through a park',     title: 'Promenade',      year: '2025', category: 'portraits' },
  { id: 'pr-06', src: '/images/event-grad-lake.jpg',             alt: 'Graduate by the water',                  title: 'First Generation', year: '2025', category: 'portraits' },
  { id: 'pr-07', src: '/images/event-grad-meredith.jpg',         alt: 'Graduate seated at Meredith College',    title: 'Commencement',   year: '2025', category: 'portraits' },
]

export const lifestyleImages = [
  { id: 'ls-01', src: '/images/wyatt-home-camera.png',           alt: 'Wyatt holding a camera by the water',    title: 'Coastline Study',year: '2025', category: 'lifestyle' },
  { id: 'ls-02', src: '/images/wyatt-hero-palm.jpg',             alt: 'Low-angle beneath a palm tree',          title: 'Palm Light',     year: '2025', category: 'lifestyle' },
  { id: 'ls-03', src: '/images/lifestyle-skater-street.jpg',     alt: 'Skatepark and street scene',             title: 'Street Heat',    year: '2025', category: 'lifestyle' },
  { id: 'ls-04', src: '/images/lifestyle-sky-diptych.jpg',       alt: 'Plane and palm against soft sky',        title: 'Skyline',        year: '2025', category: 'lifestyle' },
  { id: 'ls-05', src: '/images/lifestyle-flora-diptych.jpg',     alt: 'Floral diptych in soft light',           title: 'Bloom',          year: '2025', category: 'lifestyle' },
]

export const galleryCategories = [
  {
    slug: 'sports',
    label: 'Sports',
    blurb: 'Action, timing, and the seconds around competition.',
    cover: sportsImages[1]?.src,
    images: sportsImages,
  },
  {
    slug: 'portraits',
    label: 'Portraits',
    blurb: 'Editorial, direct, and personal.',
    cover: portraitImages[0]?.src,
    images: portraitImages,
  },
  {
    slug: 'lifestyle',
    label: 'Lifestyle',
    blurb: 'Travel, atmosphere, and the in-between.',
    cover: lifestyleImages[0]?.src,
    images: lifestyleImages,
  },
]

export const heroImages = {
  home:    { src: '/images/wyatt-home-camera.png',    alt: 'Wyatt holding a camera by the water', objectPosition: '58% 50%' },
  about:   { src: '/images/lifestyle-forest-seated.jpg', alt: 'Portrait in green forest light',      objectPosition: 'center 35%' },
  contact: { src: '/images/event-prom-couple.jpg',    alt: 'Couple portrait in a park',           objectPosition: 'center 35%' },
}

export const allImages = [...sportsImages, ...portraitImages, ...lifestyleImages]

export default galleryCategories
