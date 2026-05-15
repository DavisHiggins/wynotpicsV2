import wyatt from '/images/wyatt-home-camera.png'
import './Logo.css'

export default function Logo({ size = 38, className = '' }) {
  return (
    <span
      className={`logo-mark ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <img src={wyatt} alt="" className="logo-mark-img" />
      <span className="logo-mark-ring" />
    </span>
  )
}
