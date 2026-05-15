import { useEffect, useRef, useState } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  // Mount the custom cursor only on devices with a true mouse pointer.
  useEffect(() => {
    if (typeof window === 'undefined') return
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
    let started = false
    let raf

    const move = (e) => {
      x = e.clientX
      y = e.clientY
      if (!started) {
        // Snap the ring to the first known position so it doesn't fly in from origin.
        rx = x
        ry = y
        started = true
      }
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const tick = () => {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = requestAnimationFrame(tick)
    }

    // Single delegated handler. Works for dynamically added elements,
    // no per-element listeners or MutationObserver perf cost.
    const isInteractive = (el) =>
      el && (
        el.tagName === 'A' || el.tagName === 'BUTTON' ||
        el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' ||
        el.hasAttribute('data-hover') ||
        el.closest('a, button, [data-hover], input, textarea, select')
      )

    // Track whether we're currently over a "dark" surface (the hero).
    // Re-evaluated cheaply on each mousemove.
    let darkBg = false
    const checkDarkBg = (target) => {
      if (!target) return false
      // Walk up DOM and check for the hero or any element marked dark.
      let el = target
      while (el && el !== document.body) {
        if (el.classList?.contains('hero') || el.dataset?.cursor === 'light') return true
        el = el.parentElement
      }
      return false
    }

    const onOver = (e) => {
      // Interactive hover → grow ring
      if (isInteractive(e.target)) {
        ring.classList.add('cursor-ring--hover')
      }
      // Dark background hover → flip cursor color
      const onDark = checkDarkBg(e.target)
      if (onDark !== darkBg) {
        darkBg = onDark
        dot.classList.toggle('cursor-dot--light', darkBg)
        ring.classList.toggle('cursor-ring--light', darkBg)
      }
    }

    const onOut = (e) => {
      if (!e.relatedTarget || !isInteractive(e.relatedTarget)) {
        ring.classList.remove('cursor-ring--hover')
      }
    }

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
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
