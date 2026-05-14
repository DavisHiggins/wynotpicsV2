import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Gallery.css'

const tabs = [
  { to: 'sports',    label: 'Sports',    num: '01' },
  { to: 'portraits', label: 'Portraits', num: '02' },
  { to: 'lifestyle', label: 'Lifestyle', num: '03' },
]

export default function Gallery() {
  const location = useLocation()
  return (
    <motion.div
      className="gallery-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <section className="gallery-head">
        <div className="container gallery-head-inner">
          <motion.span
            className="kicker"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            The Archive · Index 02
          </motion.span>
          <motion.h1
            className="display-1"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Portfolio
          </motion.h1>
          <motion.p
            className="lede"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            Three lanes. Sports, portraits, lifestyle — organized simply, curated to feel finished.
          </motion.p>
        </div>
      </section>

      <nav className="gallery-tabs" aria-label="Gallery categories">
        <div className="gallery-tabs-inner">
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              className={({ isActive }) => `gallery-tab ${isActive ? 'gallery-tab-active' : ''}`}
            >
              <span className="gallery-tab-num">{t.num}</span>
              <span>{t.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.div>
    </motion.div>
  )
}
