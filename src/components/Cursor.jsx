import { useEffect, useRef, useState } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  // Only show the custom cursor on devices with a fine pointer (mouse).
  useEffect(() => {
    const mql = window.matchMedia('(pointer: fine)')
    setEnabled(mql.matches)
    const onChange = (e) => setEnabled(e.matches)
    mql.addEventListener?.('change', onChange)
    return () => mql.removeEventListener?.('change', onChange)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y
    let raf

    const move = (e) => {
      x = e.clientX
      y = e.clientY
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const tick = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = requestAnimationFrame(tick)
    }
    tick()

    const onEnterHover = () => ring.classList.add('cursor-ring--hover')
    const onLeaveHover = () => ring.classList.remove('cursor-ring--hover')

    // Wire hover detection for interactive elements; refresh on route changes.
    const wire = () => {
      const els = document.querySelectorAll('a, button, [data-hover], input, textarea, select')
      els.forEach((el) => {
        el.addEventListener('mouseenter', onEnterHover)
        el.addEventListener('mouseleave', onLeaveHover)
      })
      return els
    }

    let hoverables = wire()
    // Re-wire on DOM changes (route transitions, lightbox open/close, etc.)
    const observer = new MutationObserver(() => {
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterHover)
        el.removeEventListener('mouseleave', onLeaveHover)
      })
      hoverables = wire()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    window.addEventListener('mousemove', move)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      observer.disconnect()
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterHover)
        el.removeEventListener('mouseleave', onLeaveHover)
      })
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
