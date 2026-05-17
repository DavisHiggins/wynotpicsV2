import { motion } from 'framer-motion'
import { heroImages, sportsImages, portraitImages, lifestyleImages, automotiveImages } from '../data/galleryData.js'
import './About.css'

const credits = [
  ['Based',       'Charlotte & Raleigh, NC'],
  ['School',      'UNC Charlotte · Niner Times'],
  ['Specialties', 'Sports · Portraits · Lifestyle · Automotive'],
  ['Available',   'Local & travel'],
]

const stripFrames = [
  sportsImages[0],     // football walkout
  portraitImages[1],   // prom twirl
  lifestyleImages[2],  // Sacré-Cœur
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
            Wyatt Bullock,<br />
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
              The work started with a Canon Rebel T7 on a Father's Day camping trip, and it never stopped.
            </h2>
            <p>
              My photography journey started in high school when I decided to take my new camera, the
              Canon Rebel T7, camping over Father's Day weekend. During that trip I fell in love with
              photography and brought my camera everywhere I went, which led to my first soccer game.
            </p>
            <p>
              Since that time my love for photography, and small ventures into videography, has grown
              exponentially and branched out from simply capturing sports to travel, portraits, and
              events. I look forward to capturing your most important moments.
            </p>
            <p>
              Today I have experience capturing professional soccer, basketball, and collegiate football.
              I am used to traveling for away games and am proficient with live uploads, sending photos
              out directly after the game.
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
              A few from the year.
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
