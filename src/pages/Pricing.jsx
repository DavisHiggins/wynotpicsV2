import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pricingPackages } from '../data/pricingData.js'
import './Pricing.css'

const faqs = [
  {
    q: 'What is included with every package?',
    a: 'Every package includes a pre-session consultation, post-session editing, and high-resolution digital files, so you get maximum value for your investment.',
  },
  {
    q: 'How are photos delivered?',
    a: 'Edited photos are delivered via a downloadable link to preserve quality. For sports coverage I can also send select images live or directly after the game.',
  },
  {
    q: 'Do you travel?',
    a: 'Yes. I work locally in the Charlotte and Raleigh areas at standard rates, and I am used to traveling for away games and out-of-area shoots. Travel work is priced case-by-case depending on distance and scope.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Two to four weeks ahead is ideal, especially for game-day coverage. Tighter timelines are often workable. Reach out and we will figure it out.',
  },
]

export default function Pricing() {
  return (
    <motion.div
      className="pricing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <section className="page-head">
        <div className="container">
          <span className="kicker">Investment · Index 04</span>
          <h1 className="display-1">
            Committing to quality.
          </h1>
          <p className="lede">
            My pricing includes pre-session consultation, post-session editing, and
            high-resolution digital files, giving you maximum value for your investment.
          </p>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {pricingPackages.map((pkg, i) => (
              <motion.article
                key={pkg.id}
                className={`pricing-card ${pkg.featured ? 'pricing-card-featured' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                {pkg.featured && <span className="pricing-badge">Most booked</span>}

                <div className="pricing-card-head">
                  <span className="kicker">0{i + 1} · Package</span>
                  <h3 className="pricing-name">{pkg.name}</h3>
                  <p className="pricing-tagline">{pkg.tagline}</p>
                </div>

                <div className="pricing-price">
                  <span className="pricing-from">Starting at</span>
                  <div className="pricing-amount">
                    <span className="pricing-currency">{pkg.currency}</span>
                    <span className="pricing-number">{pkg.startsAt.toLocaleString()}</span>
                  </div>
                </div>

                <p className="pricing-desc">{pkg.description}</p>

                <ul className="pricing-features">
                  {pkg.features.map((f) => (
                    <li key={f}>
                      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                        <path d="M2 5 L4.5 7.5 L8.5 2.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="btn btn-arrow pricing-cta">{pkg.cta}</Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-faq">
        <div className="container">
          <div className="faq-head">
            <span className="kicker">Common questions</span>
            <h2 className="display-2" style={{ marginTop: 14 }}>FAQs</h2>
          </div>

          <div className="faq-list">
            {faqs.map((f, i) => (
              <motion.div
                key={f.q}
                className="faq-item"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
              >
                <span className="faq-num">0{i + 1}</span>
                <div>
                  <h4 className="faq-q">{f.q}</h4>
                  <p>{f.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
