import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { heroImages, sportsImages, automotiveImages, lifestyleImages } from '../data/galleryData.js'
import Logo from '../components/Logo'
import './Home.css'

// Six tiles for the editorial collage on the home page. Drawn from his
// actual portfolio across all three categories so the homepage previews
// each lane.
const tiles = [
  { id: 'tile-1', cls: 'tile-1', cat: 'Sports',     blurb: 'Action, timing, energy.',          to: '/gallery/sports',     img: sportsImages[0]?.src,     index: '01 / 06' },
  { id: 'tile-2', cls: 'tile-2', cat: 'Automotive', blurb: 'Cars in their element.',           to: '/gallery/automotive', img: automotiveImages[2]?.src, index: '02 / 06' },
  { id: 'tile-3', cls: 'tile-3', cat: 'Sports',     blurb: 'Motion, pressure, rhythm.',        to: '/gallery/sports',     img: sportsImages[15]?.src,    index: '03 / 06' },
  { id: 'tile-4', cls: 'tile-4', cat: 'Lifestyle',  blurb: 'Travel, culture, atmosphere.',     to: '/gallery/lifestyle',  img: lifestyleImages[2]?.src,  index: '04 / 06' },
  { id: 'tile-5', cls: 'tile-5', cat: 'Automotive', blurb: 'Builds, meets, and the road.',     to: '/gallery/automotive', img: automotiveImages[1]?.src, index: '05 / 06' },
  { id: 'tile-6', cls: 'tile-6', cat: 'Lifestyle',  blurb: 'Portraits and people.',            to: '/gallery/lifestyle',  img: lifestyleImages[11]?.src, index: '06 / 06' },
]

const approach = [
  { num: '01', title: 'The conversation', text: 'Vision, mood, and what the work needs to feel like. A short call before anything else.' },
  { num: '02', title: 'The plan',         text: 'Locations, light, references. Pre-production with room left for what isn\'t scripted.' },
  { num: '03', title: 'The shoot',        text: 'Calm, fast, focused. Direction when you need it, space when you don\'t.' },
  { num: '04', title: 'The edit',         text: 'Restrained, intentional, on time. Each frame in the final gallery earns its place.' },
]

export default function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ====================== Full-bleed hero ====================== */}
      <section className="hero" aria-label="Wyatt Bullock Photography">
        <img
          src={heroImages.home.src}
          alt={heroImages.home.alt}
          className="hero-img"
          fetchpriority="high"
          style={{ objectPosition: heroImages.home.objectPosition }}
        />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-fade-in" aria-hidden="true" />

        <motion.div
          className="hero-mark"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-mark-glow" aria-hidden="true" />
          <Logo size={108} className="hero-mark-logo" />
          <span className="hero-mark-shimmer" aria-hidden="true" />
        </motion.div>

        <div className="hero-content">
          <motion.div
            className="hero-top"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="hero-title hero-title-play">
              Wyatt Bullock Photography
            </h1>
            <a
              href="https://www.instagram.com/wy_not_pics"
              target="_blank"
              rel="noreferrer"
              className="hero-handle"
            >
              @wy_not_pics
            </a>
          </motion.div>
        </div>

        <motion.a
          href="#work"
          className="hero-scroll"
          aria-label="Scroll to work"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-scroll-label">Scroll</span>
          <span className="hero-scroll-line" />
        </motion.a>
      </section>

      {/* ====================== Tagline strip ====================== */}
      <section className="home-tagline" id="work">
        <motion.div
          className="container home-tagline-inner"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="home-tagline-quote">
            Work with me; where the smallest details are an ode to life, culture, and our planet.
          </h2>
          <p className="home-tagline-sub">
            Wyatt Bullock is a sports, automotive, and lifestyle photographer based in Charlotte
            and Raleigh, North Carolina. Currently studying at the University of North Carolina at
            Charlotte and working with the Niner Times student news outlet to keep refining his
            sports photography.
          </p>
        </motion.div>
      </section>

      {/* ====================== Marquee strip ====================== */}
      <section className="home-marquee" aria-label="Categories">
        <div className="home-marquee-track">
          {Array.from({ length: 4 }).map((_, i) => (
            <span className="home-marquee-group" key={i} aria-hidden={i > 0}>
              <span className="home-marquee-word">Sports</span>
              <span className="home-marquee-dot">•</span>
              <span className="home-marquee-word">Automotive</span>
              <span className="home-marquee-dot">•</span>
              <span className="home-marquee-word">Lifestyle</span>
              <span className="home-marquee-dot">•</span>
              <span className="home-marquee-word">Travel</span>
              <span className="home-marquee-dot">•</span>
              <span className="home-marquee-word">Portraits</span>
              <span className="home-marquee-dot">•</span>
              <span className="home-marquee-word">Events</span>
              <span className="home-marquee-dot">•</span>
            </span>
          ))}
        </div>
      </section>

      {/* ====================== Editorial collage ====================== */}
      <section className="home-collage-section">
        <motion.div
          className="home-collage-head"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="kicker">Selected · 01 / 03</span>
          <h2 className="display-2">
            The work, by chapter.
          </h2>
          <p className="lede">Sports, automotive, lifestyle. Three lanes, one body of work.</p>
        </motion.div>

        <div className="home-collage" aria-label="Selected work">
          {tiles.map((t, i) => (
            <motion.article
              key={t.id}
              className={`tile ${t.cls}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="tile-index">{t.index}</span>
              <Link to={t.to} aria-label={`${t.cat}, see more`} data-hover>
                <div className="tile-img-wrap">
                  <img
                    src={t.img}
                    alt={`${t.cat} preview`}
                    loading={i < 2 ? 'eager' : 'lazy'}
                  />
                </div>
              </Link>
              <div className="tile-meta">
                <div className="tile-meta-left">
                  <Link to={t.to} className="tile-cat link-line">{t.cat}</Link>
                  <span className="tile-blurb">{t.blurb}</span>
                </div>
                <Link to={t.to} className="tile-more">See more →</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ====================== Approach ====================== */}
      <section className="home-approach">
        <div className="approach-inner">
          <div className="approach-title">
            <span className="kicker">Approach</span>
            <h2 className="display-2" style={{ marginTop: 14 }}>
              Simple process.<br />
              Strong final work.
            </h2>
          </div>

          <div className="approach-items">
            {approach.map((a, i) => (
              <motion.div
                key={a.num}
                className="approach-item"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.65, delay: i * 0.06 }}
              >
                <span className="approach-num">{a.num}</span>
                <div>
                  <h4>{a.title}</h4>
                  <p>{a.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
