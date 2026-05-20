// ============================================
// Animate.jsx — Drop-In Animation Wrapper
// ============================================
// The easiest way to animate anything.
// Wrap any element with <Animate> and it will
// animate when it scrolls into view.
//
// ── BASIC USAGE ──────────────────────────────
//
//   import Animate from '../components/Animate'
//
//   <Animate animation="fade-up">
//     <h2>This heading slides up when visible</h2>
//   </Animate>
//
// ── ALL ANIMATIONS ───────────────────────────
//
//   "fade-up"       fades in + moves up
//   "fade-down"     fades in + moves down
//   "fade-left"     fades in + slides from right → left
//   "fade-right"    fades in + slides from left  → right
//   "slide-left"    bold slide from the right side
//   "slide-right"   bold slide from the left side
//   "bounce"        bounces in from below (springy)
//   "zoom-in"       scales up from small
//   "zoom-out"      scales down from large
//   "flip-up"       3D flip from horizontal
//
// ── ALL PROPS ────────────────────────────────
//
//   animation  — (string)  animation name (see above)
//   delay      — (number)  ms before animation starts
//   duration   — (number)  ms the animation takes
//   threshold  — (number)  0–1, how visible before trigger
//   once       — (boolean) animate once (true) or every time (false)
//   as         — (string)  what HTML element to render, default "div"
//   className  — (string)  extra CSS classes
//   style      — (object)  extra inline styles
//
// ── EXAMPLES ─────────────────────────────────
//
//   <Animate animation="slide-right" delay={200}>
//     <p>Slides in from left, 200ms after visible</p>
//   </Animate>
//
//   <Animate animation="bounce" duration={800} once={false}>
//     <button>Re-bounces every time it enters view</button>
//   </Animate>
//
//   <Animate animation="zoom-in" threshold={0.3} as="section">
//     Renders as a <section> instead of <div>
//   </Animate>
//
// ============================================

import { useScrollAnimation } from '../hooks/Usescrollanimation'

function Animate({
  children,
  animation  = 'fade-up',   // default animation
  delay      = 150,
  duration   = null,         // null = use CSS default
  threshold  = 0.50,
  once       = false,
  as         = 'div',        // HTML element to render
  className  = '',
  style      = {},
}) {

  // Get a ref from the hook — attach to our wrapper element
  const ref = useScrollAnimation(animation, { delay, threshold, once })

  // Merge any custom duration into inline styles
  const mergedStyle = {
    ...style,
    ...(duration ? { '--anim-duration': `${duration}ms` } : {}),
  }

  // Render as whatever HTML tag was requested
  const Tag = as

  return (
    <Tag
      ref={ref}
      className={`${className}`.trim() || undefined}
      style={Object.keys(mergedStyle).length ? mergedStyle : undefined}
    >
      {children}
    </Tag>
  )
}

export default Animate