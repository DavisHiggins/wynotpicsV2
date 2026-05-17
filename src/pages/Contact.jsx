import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Contact.css'

const shootTypes = ['Sports Coverage', 'Automotive Session', 'Portrait Session', 'Lifestyle / Travel', 'Custom Project', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', shootType: '', date: '', message: '' })
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Front-end only. Wire onSubmit to Formspree / Resend / Netlify Forms / your endpoint.
    setTimeout(() => {
      setSubmitting(false)
      setSent(true)
    }, 800)
  }

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <section className="page-head">
        <div className="container">
          <span className="kicker">Contact · Index 05</span>
          <h1 className="display-1">
            Explore my works<br />
            through years, and<br />
            let's connect today.
          </h1>
          <p className="lede">
            Through my lens, I aim to capture the essence of each destination, revealing its unique
            culture, landscapes, and experiences. Send the details and I'll be in touch.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <motion.aside
            className="contact-info"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="contact-info-row">
              <span className="contact-info-label">Direct line</span>
              <a href="mailto:wyattbullock2057@gmail.com" className="contact-info-value link-line">
                wyattbullock2057@gmail.com
              </a>
            </div>
            <div className="contact-info-row">
              <span className="contact-info-label">Phone</span>
              <a href="tel:+19196963327" className="contact-info-value link-line">
                +1 (919) 696-3327
              </a>
            </div>
            <div className="contact-info-row">
              <span className="contact-info-label">Instagram</span>
              <a href="https://instagram.com/wy_not_pics" target="_blank" rel="noreferrer" className="contact-info-value link-line">
                @wy_not_pics
              </a>
            </div>
            <div className="contact-info-row">
              <span className="contact-info-label">Based in</span>
              <span className="contact-info-value">Charlotte & Raleigh, NC</span>
            </div>
            <div className="contact-info-row">
              <span className="contact-info-label">Available for</span>
              <span className="contact-info-value">Local & travel photography</span>
            </div>
          </motion.aside>

          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  className="contact-form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="contact-form-head">
                    <span className="kicker">Project inquiry</span>
                    <h2 className="display-2">Send the details.</h2>
                  </div>

                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="name">Your name</label>
                      <input id="name" type="text" required value={form.name} onChange={update('name')} placeholder="Full name" />
                    </div>

                    <div className="field">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="you@email.com" />
                    </div>

                    <div className="field">
                      <label htmlFor="shootType">Shoot type</label>
                      <select id="shootType" required value={form.shootType} onChange={update('shootType')}>
                        <option value="" disabled>Select a category</option>
                        {shootTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div className="field">
                      <label htmlFor="date">Preferred date</label>
                      <input id="date" type="date" value={form.date} onChange={update('date')} />
                    </div>

                    <div className="field field-full">
                      <label htmlFor="message">Tell me about it</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={update('message')}
                        placeholder="Vision, location, mood, anything else worth knowing..."
                      />
                    </div>
                  </div>

                  <div className="contact-form-foot">
                    <button type="submit" className="btn btn-arrow" disabled={submitting}>
                      {submitting ? 'Sending...' : 'Send inquiry'}
                    </button>
                    <span>Used only to respond. No lists, no spam.</span>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="contact-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="kicker">Inquiry received</span>
                  <h2 className="display-2">
                    Thanks, {form.name.split(' ')[0] || 'friend'}.
                  </h2>
                  <p className="lede">Your message is in. I'll be in touch soon.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
