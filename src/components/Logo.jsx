import logoSrc from '/logo.png'
import './Logo.css'

export default function Logo({ size = 38, className = '' }) {
  return (
    <span
      className={`logo-mark ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <img src={logoSrc} alt="" className="logo-mark-img" />
    </span>
  )
}
