import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <motion.section
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--paper)',
        paddingTop: 'var(--nav-h)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="container"
        style={{ display: 'flex', flexDirection: 'column', gap: 22, alignItems: 'flex-start', padding: '0 var(--gutter)' }}
      >
        <span className="kicker">Error · 404</span>
        <h1 className="display-1">
          Out of <span className="serif">frame.</span>
        </h1>
        <p className="lede">The page you're looking for didn't make the final cut. Back to the index.</p>
        <Link to="/" className="btn btn-arrow">Return home</Link>
      </div>
    </motion.section>
  )
}
