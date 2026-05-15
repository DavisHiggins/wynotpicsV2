import { motion } from 'framer-motion'
import { heroImages, sportsImages, portraitImages, lifestyleImages } from '../data/galleryData.js'
import './About.css'

const credits = [
  ['Based',       'Charlotte, NC'],
  ['Working',     '2022 to present'],
  ['Specialties', 'Sports · Portraits · Lifestyle'],
  ['Available',   'Local & travel'],
]

const stripFrames = [
  sportsImages[1],
  portraitImages[0],
  lifestyleImages[1],
]

export default function About() {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <section className="page-head">
        <div className="container">
          <span className="kicker">About · Index 03</span>
          <h1 className="display-1">
            Wyatt <span className="serif">Bullock,</span><br />
            behind the lens.
          </h1>
          <p className="lede">Charlotte-based photographer focused on sports, portraits, and lifestyle work.</p>
        </div>
      </section>

      <section className="about-bio">
        <div className="container about-bio-grid">
          <motion.div
            className="about-portrait"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={heroImages.about.src}
              alt={heroImages.about.alt}
              style={{ objectPosition: heroImages.about.objectPosition }}
            />
            <div className="about-portrait-cap">
              <span>wy_not_pics</span>
              <span>2026</span>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="kicker">Bio</span>
            <h2>
              I chase light, motion, and the second right before someone forgets the camera is there.
            </h2>
            <p>
              wy_not_pics is the working name for the photography of Wyatt Bullock. A body of work built on
              cinematic sports coverage, editorial portraits, and lifestyle storytelling for clients who care
              about how something looks and feels, not just whether the photo got taken.
            </p>
            <p>
              The work lives at the intersection of documentary and editorial. Honest enough to feel real,
              composed enough to feel intentional. Athletes mid-stride, founders in their element, families
              at golden hour. Each shoot is built around the story first; technical decisions follow.
            </p>
            <p>
              Based in Charlotte, North Carolina. Available for local and travel work, and always open to
              projects worth getting on a plane for.
            </p>

            <div className="about-credits">
              {credits.map(([label, value]) => (
                <div key={label} className="about-credit">
                  <span className="about-credit-label">{label}</span>
                  <span className="about-credit-value">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-strip">
        <div className="container">
          <div className="about-strip-head">
            <span className="kicker">Selected frames</span>
            <h2 className="display-2" style={{ marginTop: 14 }}>
              A few from <span className="serif">the year.</span>
            </h2>
          </div>

          <div className="about-strip-grid">
            {stripFrames.map((f, i) => (
              <motion.figure
                key={f.id}
                className="about-strip-img"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={f.src} alt={f.alt} loading="lazy" />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
