import { useParams, Navigate } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryCategories } from '../data/galleryData.js'

const COPY = {
  sports: {
    title:  'Sports.',
    serif:  'Action, timing, energy.',
    intro:  'Motion, pressure, rhythm, and the quiet seconds around competition.',
    accent: 'Action · Energy · Timing',
  },
  portraits: {
    title:  'Portraits.',
    serif:  'Clean, direct, personal.',
    intro:  'Editorial frames with atmosphere, presence, and intention.',
    accent: 'Editorial · Headshots · People',
  },
  lifestyle: {
    title:  'Lifestyle.',
    serif:  'Everyday, elevated.',
    intro:  'Travel, atmosphere, events, and the in-between moments.',
    accent: 'Travel · Atmosphere · Details',
  },
}

export default function GalleryCategory() {
  const { category } = useParams()
  const cat = galleryCategories.find((c) => c.slug === category)
  const copy = COPY[category]

  if (!cat || !copy) return <Navigate to="/gallery/sports" replace />

  return <CategoryView cat={cat} copy={copy} />
}

function CategoryView({ cat, copy }) {
  const images = cat.images
  const [activeIdx, setActiveIdx] = useState(null)

  const close = useCallback(() => setActiveIdx(null), [])
  const next  = useCallback(() => setActiveIdx((i) => (i === null ? null : (i + 1) % images.length)), [images.length])
  const prev  = useCallback(() => setActiveIdx((i) => (i === null ? null : (i - 1 + images.length) % images.length)), [images.length])

  useEffect(() => {
    if (activeIdx === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft')  prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [activeIdx, close, next, prev])

  const active = activeIdx !== null ? images[activeIdx] : null

  return (
    <section className="cat-section">
      <div className="container">
        <div className="cat-intro">
          <div>
            <span className="kicker">{copy.accent}</span>
            <h2 className="display-2" style={{ marginTop: 14 }}>
              {copy.title}<br />
              {copy.serif}
            </h2>
          </div>
          <p>{copy.intro}</p>
        </div>

        <div className="cat-meta-bar">
          <span>{String(images.length).padStart(2, '0')} frames</span>
        </div>

        <div className="cat-grid">
          {images.map((img, i) => (
            <motion.figure
              key={img.id}
              className="cat-item"
              onClick={() => setActiveIdx(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="cat-item-img">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
              <figcaption className="cat-item-cap">
                <span className="cat-item-cap-title">{img.title}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            <motion.img
              key={active.id}
              src={active.src}
              alt={active.alt}
              className="lightbox-img"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />

            <button className="lightbox-close" onClick={(e) => { e.stopPropagation(); close() }} aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2 L12 12 M12 2 L2 12" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </button>
            <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M9 2 L3 7 L9 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>
            <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M5 2 L11 7 L5 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>

            <div className="lightbox-meta" onClick={(e) => e.stopPropagation()}>
              <span className="lb-title">{active.title}</span>
              <span>{activeIdx + 1} / {images.length}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
