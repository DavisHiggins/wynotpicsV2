import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pricingPackages } from '../data/pricingData.js'
import './Pricing.css'

const faqs = [
  { q: 'How far in advance should I book?',  a: 'Two to four weeks ahead is ideal, especially for game-day coverage. Tighter timelines are often workable. Reach out.' },
  { q: 'Do you travel?',                     a: 'Yes. Local work in the Charlotte region is at standard rates; travel work is priced case-by-case depending on distance and scope.' },
  { q: 'How long until I get the photos?',   a: 'Portrait and lifestyle galleries arrive within 7 days. Sports coverage is delivered within the week, often within 48 hours when timing matters.' },
  { q: 'Can I get the RAW files?',           a: 'Final delivery is fully edited, color-graded JPEGs. RAW files aren\'t included by default but can be added for select projects.' },
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
            Built around the <span className="serif">work,</span><br />
            not the template.
          </h1>
          <p className="lede">Clear starting points. Custom shoots available. Let's talk.</p>
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
