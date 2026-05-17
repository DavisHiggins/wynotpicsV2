import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import './Navbar.css'

// All tabs grouped together on the right. Portfolio is a single link,
// users pick a sub-category once they land on the gallery page.
const NAV = [
  { to: '/',        label: 'Home' },
  { to: '/gallery', label: 'Portfolio' },
  { to: '/about',   label: 'About' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          {/* Brand: logo + wy_not_pics, left side */}
          <Link to="/" className="nav-brand" aria-label="wy_not_pics home">
            <Logo size={38} className="nav-brand-logo" />
            <span className="nav-brand-name">wy_not_pics</span>
          </Link>

          {/* Nav cluster, right side */}
          <ul className="nav-list" aria-label="Primary">
            {NAV.map((item) => (
              <li key={item.to} className="nav-item">
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className={`nav-toggle ${open ? 'nav-toggle-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="nav-overlay-inner" aria-label="Mobile">
              {NAV.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `nav-overlay-link ${isActive ? 'nav-overlay-link-active' : ''}`
                    }
                  >
                    <span className="nav-overlay-num">0{i + 1}</span>
                    <span>{link.label}</span>
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="nav-overlay-foot"
              >
                <span className="kicker">wyattbullock2057@gmail.com</span>
                <span className="kicker">@wy_not_pics</span>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
