import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const { pathname } = useLocation()
  // The footer CTA is redundant on the Contact page itself.
  const showCta = pathname !== '/contact'

  return (
    <footer className="footer">
      <div className="container">
        {showCta && (
          <>
            <div className="footer-cta">
              <span className="kicker">Begin a project</span>
              <h2 className="display-2">
                Book a session.
              </h2>
              <Link to="/contact" className="btn btn-arrow">Start the conversation</Link>
            </div>

            <hr className="rule" />
          </>
        )}

        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-mark">
              <Logo size={36} />
              <span>wy_not_pics</span>
            </span>
            <p className="footer-blurb">
              Photography by Wyatt Bullock. Sports, portraits, lifestyle. Based in Charlotte, NC.
            </p>
          </div>

          <div className="footer-col">
            <span className="kicker">Navigate</span>
            <ul className="footer-list">
              <li><Link to="/" className="link-line">Home</Link></li>
              <li><Link to="/gallery" className="link-line">Portfolio</Link></li>
              <li><Link to="/about" className="link-line">About</Link></li>
              <li><Link to="/pricing" className="link-line">Pricing</Link></li>
              <li><Link to="/contact" className="link-line">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <span className="kicker">Portfolio</span>
            <ul className="footer-list">
              <li><Link to="/gallery/sports" className="link-line">Sports</Link></li>
              <li><Link to="/gallery/portraits" className="link-line">Portraits</Link></li>
              <li><Link to="/gallery/lifestyle" className="link-line">Lifestyle</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <span className="kicker">Contact</span>
            <ul className="footer-list">
              <li><a href="mailto:hello@wyattbullockphoto.com" className="link-line">hello@wyattbullockphoto.com</a></li>
              <li><a href="https://instagram.com/wy_not_pics" target="_blank" rel="noreferrer" className="link-line">@wy_not_pics</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="kicker">© {year} Wyatt Bullock · All rights reserved</span>
          <span className="kicker">wy_not_pics</span>
        </div>
      </div>
    </footer>
  )
}
