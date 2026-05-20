// ============================================
// useScrollAnimation.js — The Animation Engine
// ============================================
// This is a custom React Hook.
// A hook is a reusable function that adds
// behaviour to any component that uses it.
//
// WHAT IT DOES:
//   Watches a DOM element using IntersectionObserver.
//   When that element scrolls into view, it adds
//   a CSS class to trigger its animation.
//
// HOW TO USE IT (quick version):
//   import { useScrollAnimation } from '../hooks/useScrollAnimation'
//   const ref = useScrollAnimation('fade-up')
//   return <div ref={ref}>Your content</div>
//
// See the full guide in AnimationGuide.md
// ============================================

import { useEffect, useRef } from 'react'

// ── Default settings ─────────────────────────
// You can override any of these per element.
const DEFAULT_OPTIONS = {
  threshold: 0.3,   // 0–1: how much of the element must be visible
                     // 0.15 = 15% visible → trigger
  rootMargin: '0px', // Shrink/expand the "trigger zone"
                     // '-50px' = trigger 50px before entering viewport
  once: false,        // true  = animate only the first time
                     // false = re-animate every time it enters view
  delay: 0,          // Extra delay in ms before animation starts
}

// ── The hook ─────────────────────────────────
export function useScrollAnimation(animationName, options = {}) {

  // Merge user options with defaults
  const config = { ...DEFAULT_OPTIONS, ...options }

  // useRef creates a reference to the real DOM element.
  // We attach this to the element we want to watch.
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Apply a delay if one was passed in
    // e.g. delay: 200 → CSS transition-delay: 200ms
    if (config.delay > 0) {
      element.style.animationDelay = `${config.delay}ms`
      element.style.transitionDelay = `${config.delay}ms`
    }

    // IntersectionObserver watches when an element
    // enters or exits the visible viewport area.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible → add the animation class
            element.classList.add('anim--active')

            // If once: true, stop watching after first trigger
            if (config.once) observer.unobserve(element)

          } else if (!config.once) {
            // Element left view → remove class (will re-animate next time)
            element.classList.remove('anim--active')
          }
        })
      },
      {
        threshold:  config.threshold,
        rootMargin: config.rootMargin,
      }
    )

    observer.observe(element)

    // Cleanup: disconnect observer when component unmounts
    return () => observer.disconnect()

  }, [animationName, config.threshold, config.rootMargin, config.once, config.delay])

  // Add the base animation class to the element
  // This sets the initial "hidden" state in CSS
  useEffect(() => {
    if (ref.current && animationName) {
      ref.current.classList.add('anim', `anim--${animationName}`)
    }
  }, [animationName])

  return ref
}

// ── Convenience export: animate a list of children ─
// Wraps multiple elements and staggers them.
// Each child gets an increasing delay.
//
// USAGE:
//   const refs = useStaggerAnimation('fade-up', 3, { staggerDelay: 120 })
//   return (
//     <div>
//       <div ref={refs[0]}>Item 1</div>
//       <div ref={refs[1]}>Item 2</div>
//       <div ref={refs[2]}>Item 3</div>
//     </div>
//   )
export function useStaggerAnimation(animationName, count, options = {}) {
  const { staggerDelay = 100, ...rest } = options

  // Create one ref per element
  const refs = Array.from({ length: count }, (_, i) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useScrollAnimation(animationName, { ...rest, delay: i * staggerDelay })
  )

  return refs
}