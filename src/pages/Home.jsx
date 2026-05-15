import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { heroImages, sportsImages, portraitImages, lifestyleImages } from '../data/galleryData.js'
import './Home.css'

const tiles = [
  { id: 'tile-1', cls: 'tile-1', cat: 'Lifestyle', blurb: 'Wyatt by the water, frame zero.',   to: '/gallery/lifestyle', img: heroImages.home.src, pos: heroImages.home.objectPosition, index: '01 / 06' },
  { id: 'tile-2', cls: 'tile-2', cat: 'Portraits', blurb: 'Quiet portraits, made on location.',to: '/gallery/portraits', img: portraitImages[0]?.src, index: '02 / 06' },
  { id: 'tile-3', cls: 'tile-3', cat: 'Sports',    blurb: 'The seconds around competition.',   to: '/gallery/sports',    img: sportsImages[0]?.src,   index: '03 / 06' },
  { id: 'tile-4', cls: 'tile-4', cat: 'Portraits', blurb: 'Editorial frames with atmosphere.', to: '/gallery/portraits', img: portraitImages[2]?.src, index: '04 / 06' },
  { id: 'tile-5', cls: 'tile-5', cat: 'Sports',    blurb: 'Motion, pressure, rhythm.',         to: '/gallery/sports',    img: sportsImages[1]?.src,   index: '05 / 06' },
  { id: 'tile-6', cls: 'tile-6', cat: 'Lifestyle', blurb: 'Light from the road.',              to: '/gallery/lifestyle', img: lifestyleImages[2]?.src, index: '06 / 06' },
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
      {/* ====================== Full-bleed B&W hero ====================== */}
      <section className="hero" aria-label="Wyatt Bullock Photography">
        {/* Real img element so object-fit/object-position handle the portrait photo correctly */}
        <img
          src={heroImages.home.src}
          alt={heroImages.home.alt}
          className="hero-img"
          fetchpriority="high"
        />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-fade-in" aria-hidden="true" />

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

        {/* Scroll cue, centered horizontally at the bottom of the hero */}
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

      {/* ====================== Editorial collage ====================== */}
      <section className="home-collage-section" id="work">
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
          <p className="lede">Three lanes. Clean, focused, intentional.</p>
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
                    style={t.pos ? { objectPosition: t.pos } : undefined}
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
