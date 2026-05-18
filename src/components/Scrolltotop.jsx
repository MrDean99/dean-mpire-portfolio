// ============================================
// ScrollToTop.jsx — Scroll To Top Button
// ============================================
// A fixed button that:
//   - Stays hidden until the user scrolls past SHOW_AFTER px
//   - Slides in from the bottom when it appears
//   - Slides back out when scrolled back to the top
//   - Glassmorphism pill on desktop (icon + text)
//   - Collapses to a circle on mobile (icon only)
//   - Smoothly scrolls back to the top on click
//
// Already added to App.jsx — works on every page.
// To use on a specific page only:
//   import ScrollToTop from '../components/ScrollToTop'
//   then place <ScrollToTop /> anywhere in your JSX.
//
// Concepts used:
//   - useState:  tracks whether button is visible
//   - useEffect: attaches scroll listener on mount,
//                cleans it up on unmount
// ============================================

import { useState, useEffect } from 'react'
import '../styles/Scrolltotop.css'

// ── ✏️ How far down (px) before button appears ──
const SHOW_AFTER = 500

// ────────────────────────────────────────────
function ScrollToTop() {

  // true  = button slides into view
  // false = button slides out of view (hidden)
  const [visible, setVisible] = useState(false)

  // ── Scroll listener ──────────────────────
  useEffect(() => {
    function onScroll() {
      // Show when scrolled more than SHOW_AFTER pixels
      setVisible(window.scrollY > SHOW_AFTER)
    }

    // { passive: true } = browser performance hint
    // (we promise we won't call preventDefault)
    window.addEventListener('scroll', onScroll, { passive: true })

    // Run once immediately — handles page loaded mid-scroll
    onScroll()

    // Cleanup: remove listener when component is removed
    return () => window.removeEventListener('scroll', onScroll)
  }, []) // [] = run once on mount only

  // ── Click: smooth scroll to very top ────
  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // ── Render ───────────────────────────────
  return (
    <button
      className={`scroll-top ${visible ? 'scroll-top--visible' : ''}`}
      onClick={handleClick}
      aria-label="Scroll to top"
      title="Back to top"
      aria-hidden={!visible}   // hide from screen readers when invisible
      tabIndex={visible ? 0 : -1}  // remove from tab order when hidden
    >

      {/* Arrow icon */}
      <span className="scroll-top__icon" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </span>

      {/* Text — hidden on mobile via CSS */}
      <span className="scroll-top__label">Back to top</span>

    </button>
  )
}

export default ScrollToTop