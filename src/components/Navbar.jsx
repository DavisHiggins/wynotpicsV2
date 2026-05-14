import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '/logo.png'
import './Navbar.css'

const LEFT = [
  { to: '/',        label: 'Home' },
  {
    to: '/gallery', label: 'Portfolio',
    children: [
      { to: '/gallery/sports',     label: 'Sports' },
      { to: '/gallery/portraits',  label: 'Portraits' },
      { to: '/gallery/lifestyle',  label: 'Lifestyle' },
    ],
  },
  { to: '/about',   label: 'About' },
]

const RIGHT = [
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

const ALL = [...LEFT, ...RIGHT]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActiveTo = (to, exact = false) => {
    if (exact) return location.pathname === to
    return location.pathname === to || location.pathname.startsWith(to + '/')
  }

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          {/* Left nav */}
          <ul className="nav-list nav-list-left" aria-label="Primary">
            {LEFT.map((item) => (
              <li key={item.to} className="nav-item">
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  <span>{item.label}</span>
                  {item.children && <span className="nav-link-caret">▼</span>}
                </NavLink>
                {item.children && (
                  <ul className="nav-sub">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <NavLink
                          to={c.to}
                          className={({ isActive }) =>
                            `nav-sub-link ${isActive ? 'nav-sub-link-active' : ''}`
                          }
                        >
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Brand center */}
          <Link to="/" className="nav-brand" aria-label="wy_not_pics home">
            <img src={logo} alt="" className="nav-brand-logo" />
            <span className="nav-brand-name">Wyatt Bullock</span>
            <span className="nav-brand-sub">Photography</span>
          </Link>

          {/* Right nav */}
          <ul className="nav-list nav-list-right" aria-label="Secondary">
            {RIGHT.map((item) => (
              <li key={item.to} className="nav-item">
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  {item.label}
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
              {ALL.map((link, i) => (
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
                <span className="kicker">hello@wyattbullockphoto.com</span>
                <span className="kicker">@wy_not_pics</span>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
