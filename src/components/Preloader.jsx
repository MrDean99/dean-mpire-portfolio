// ============================================
// Preloader.jsx — Site Preloader
// ============================================
// Shows a full-screen animated loader before
// the site content appears.
//
// HOW IT WORKS:
//   1. Preloader renders over the entire page
//   2. After DISPLAY_DURATION ms it starts fading out
//   3. After the fade it unmounts (removes from DOM)
//   4. The rest of the site becomes visible
//
// ✏️ TO CHANGE HOW LONG IT SHOWS:
//   Edit DISPLAY_DURATION below (in milliseconds)
//   1000 = 1 second, 3000 = 3 seconds, etc.
//
// ✏️ TO DISABLE for development:
//   Set DISPLAY_DURATION = 0
//
// HOW TO USE in App.jsx:
//   import Preloader from './components/Preloader'
//   Then render <Preloader /> at the top of App.
// ============================================

import { useState, useEffect } from 'react'
import '../styles/Preloader.css'

// ── ✏️ ADJUST THESE ──────────────────────────
const DISPLAY_DURATION = 2300  // ms the preloader stays fully visible
const FADE_DURATION    = 1000   // ms the fade-out animation takes

// ────────────────────────────────────────────
function Preloader() {

  // "phase" controls the animation state:
  //   'visible'  → fully shown, loader animating
  //   'fading'   → opacity transitioning to 0
  //   'done'     → component removed from DOM
  const [phase, setPhase] = useState('visible')

  useEffect(() => {
    // After DISPLAY_DURATION → start fading out
    const fadeTimer = setTimeout(() => {
      setPhase('fading')
    }, DISPLAY_DURATION)

    // After fade completes → unmount completely
    const doneTimer = setTimeout(() => {
      setPhase('done')
    }, DISPLAY_DURATION + FADE_DURATION)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  // Once done, render nothing — site shows through
  if (phase === 'done') return null

  return (
    <div
      className={`preloader ${phase === 'fading' ? 'preloader--fading' : ''}`}
      aria-label="Loading site"
      role="status"
      aria-live="polite"
      style={{ '--fade-duration': `${FADE_DURATION}ms` }}
    >

      {/* ── Outer ambient glow blob ── */}
      <div className="preloader__glow" aria-hidden="true" />

      {/* ── Arc ring SVG ── */}
      {/*
        The arc is an SVG circle with strokeDasharray.
        strokeDasharray controls how much of the circle
        is drawn. We draw ~80% of the circumference to
        get the open arc look from the reference image.

        The rotation animation spins the entire SVG.
        Two concentric arcs at slightly different radii
        create the double-line neon effect.
      */}
      <div className="preloader__ring-wrap" aria-hidden="true">
        <svg
          className="preloader__ring"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Amber glow filter — matches our --color-accent */}
            <filter id="glow-amber" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Inner bright glow */}
            <filter id="glow-bright" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/*
            Circumference = 2 × π × r
            r = 130 → C ≈ 816.8px
            We want ~80% drawn: 816.8 × 0.8 ≈ 654
            Gap (invisible part): 816.8 - 654 ≈ 163
          */}

          {/* Outer soft amber arc — wide glow */}
          <circle
            className="preloader__arc preloader__arc--outer-glow"
            cx="150" cy="150" r="130"
            strokeDasharray="654 163"
            strokeDashoffset="0"
            filter="url(#glow-amber)"
          />

          {/* Outer main arc */}
          <circle
            className="preloader__arc preloader__arc--outer"
            cx="150" cy="150" r="130"
            strokeDasharray="654 163"
            strokeDashoffset="0"
          />

          {/*
            Inner arc — slightly smaller radius
            r = 120 → C ≈ 753.9
            80% drawn: 603, gap: 151
            Offset so the bright leading edge aligns
          */}
          {/* Inner soft glow */}
          <circle
            className="preloader__arc preloader__arc--inner-glow"
            cx="150" cy="150" r="120"
            strokeDasharray="603 151"
            strokeDashoffset="-20"
            filter="url(#glow-bright)"
          />

          {/* Inner bright line */}
          <circle
            className="preloader__arc preloader__arc--inner"
            cx="150" cy="150" r="120"
            strokeDasharray="603 151"
            strokeDashoffset="-20"
          />

          {/* Leading bright tip dot */}
          <circle
            className="preloader__tip"
            cx="150" cy="20" r="3"
          />

        </svg>
      </div>

      {/* ── Center text ── */}
      <div className="preloader__center" aria-hidden="true">
        <p className="preloader__name">
          DEAN<span className="preloader__name-accent">MPIRE</span>
        </p>
        <p className="preloader__tagline">Loading…</p>
      </div>

    </div>
  )
}

export default Preloader