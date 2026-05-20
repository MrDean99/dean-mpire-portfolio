// ============================================
// FloatingButtons.jsx — Fixed Floating CTA Buttons
// ============================================
// Pill-shaped buttons fixed to the bottom-right.
// Each has a circular icon on the left + text label.
//
// CYCLE (repeats forever):
//   1. Buttons slide IN  one after another (staggered)
//   2. All buttons stay visible for VISIBLE_HOLD ms
//   3. Buttons slide OUT one after another (staggered)
//   4. All buttons stay hidden for HIDDEN_HOLD ms
//   5. → back to step 1
//
// Timing constants you can tweak at the top:
//   SLIDE_STAGGER  — gap between each button animating
//   VISIBLE_HOLD   — how long all buttons stay visible
//   HIDDEN_HOLD    — how long all buttons stay hidden
//
// Concepts used:
//   - useState + useEffect: trigger animations on mount
//   - Array.map(): render buttons from data
//   - Inline style: dynamic transitionDelay per button
// ============================================

import { useState, useEffect, useRef } from 'react'
import '../styles/Floatingbuttons.css'

// ── TIMING CONSTANTS ─────────────────────────
// Change these numbers to control the rhythm.
// All values are in milliseconds (1000ms = 1 second).

const SLIDE_STAGGER = 2000   // gap between each button sliding in/out
const VISIBLE_HOLD = 15000   // how long ALL buttons stay fully visible
const HIDDEN_HOLD = 5000   // how long ALL buttons stay hidden before reappearing

// ── BUTTON DATA ──────────────────────────────
// href types:
//   WhatsApp → "https://wa.me/234XXXXXXXXXX?text=Hello"
//   Email    → "mailto:you@email.com?subject=Hello"
//   Phone    → "tel:+234XXXXXXXXXX"
//   Link     → "https://yoursite.com"

const BUTTONS = [
    {
        id: 'whatsapp',
        label: 'Chat on WhatsApp',
        href: 'https://wa.me/2347066356543?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20work%20with%20you!',
        // Colors
        bgColor: '#00af00',       // amber — our accent
        iconBgColor: 'rgba(0,0,0,0.18)',
        textColor: '#fffefe',
        // WhatsApp SVG icon
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
    },
    {
        id: 'email',
        label: 'Send an Email',
        // Replace with your real email — subject pre-filled
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=deanmpire.tech@gmail.com&su=Project%20Enquiry%20From%20Portfolio",
        // &body=Hello%20Dean,%0A%0AI%20want%20to%20work%20with%20you.",
        
        bgColor: '#d80808',
        iconBgColor: 'rgba(245,166,35,0.2)',
        textColor: '#f0ede8',
        // Email / envelope SVG
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
    },
    {
        id: 'phone',
        label: 'Call Me',
        href: 'tel:+2347066356543',
        bgColor: '#f0ede8',
        iconBgColor: 'rgba(21, 29, 24, 0.2)',
        textColor: '#0a0a0a',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.55.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.25 1.02l-2.2 2.22z" />
            </svg>
        ),
    },
]

// ────────────────────────────────────────────
function FloatingButtons() {
    // "visible" — array of booleans, one per button.
    // true  = button is slid IN  (visible on screen)
    // false = button is slid OUT (off-screen to the right)
    const [visible, setVisible] = useState(
        BUTTONS.map(() => false)   // all start hidden
    )

    // useRef stores all active timers so we can cancel
    // them all when the component is removed from the page.
    // (Prevents memory leaks / errors on unmount)
    const timersRef = useRef([])

    // ── Helper: clear all pending timers ───────
    function clearAllTimers() {
        timersRef.current.forEach(clearTimeout)
        timersRef.current = []
    }

    // ── Helper: schedule one timer and save it ──
    // Returns the timer id so we can cancel it later
    function schedule(fn, delay) {
        const id = setTimeout(fn, delay)
        timersRef.current.push(id)
        return id
    }

    // ── The main cycle function ─────────────────
    // This runs once, then schedules itself to run again
    // at the end — creating an infinite loop.
    //
    // PHASE 1 — SLIDE IN (staggered)
    //   Button 0 slides in at t=0
    //   Button 1 slides in at t=SLIDE_STAGGER
    //   Button 2 slides in at t=SLIDE_STAGGER*2   (if added)
    //   ...
    //
    // PHASE 2 — HOLD VISIBLE
    //   After the last button has slid in, wait VISIBLE_HOLD ms
    //
    // PHASE 3 — SLIDE OUT (staggered, reverse order)
    //   Last button slides out first (feels natural)
    //   Button 1 slides out at t=SLIDE_STAGGER
    //   Button 0 slides out at t=SLIDE_STAGGER*2
    //   ...
    //
    // PHASE 4 — HOLD HIDDEN
    //   After all buttons are hidden, wait HIDDEN_HOLD ms
    //   Then call runCycle() again → back to PHASE 1

    function runCycle() {

        // ── PHASE 1: slide IN one by one ───────────
        BUTTONS.forEach((_, i) => {
            schedule(() => {
                setVisible(prev => {
                    const next = [...prev]
                    next[i] = true       // show button i
                    return next
                })
            }, 6000 + i * SLIDE_STAGGER)   // 0ms, 5000ms, 10000ms, ...
        })

        // ── PHASE 2 → 3: after all slid in, wait then slide OUT
        //
        // "allInTime" = time when the LAST button finishes sliding in
        const allInTime = (BUTTONS.length - 1) * SLIDE_STAGGER

        schedule(() => {

            // ── PHASE 3: slide OUT in reverse order ──
            // We reverse so the top button (last in array)
            // disappears first, then the bottom button last.
            // This feels more natural than disappearing bottom-up.
            ;[...BUTTONS].reverse().forEach((_, reversedIndex) => {
                // Convert reversed index back to real array index
                const realIndex = BUTTONS.length - 1 - reversedIndex
                schedule(() => {
                    setVisible(prev => {
                        const next = [...prev]
                        next[realIndex] = false   // hide button
                        return next
                    })
                }, reversedIndex * SLIDE_STAGGER)
            })

            // ── PHASE 4: after all slid out, wait then restart ──
            const allOutTime = (BUTTONS.length - 1) * SLIDE_STAGGER
            schedule(() => {
                runCycle()   // 🔁 restart the whole cycle
            }, allOutTime + HIDDEN_HOLD)

        }, allInTime + VISIBLE_HOLD)
        // ↑ start phase 3 after all are visible + hold time
    }

    // ── Start the cycle on mount ────────────────
    useEffect(() => {
        runCycle()

        // Cleanup: cancel all timers when component unmounts
        return () => clearAllTimers()
    }, [])  // [] = run once when component first appears

    return (
        // The fixed container — bottom right of the screen
        <div className="floating-btns" aria-label="Quick contact buttons">
            {BUTTONS.map((btn, i) => (
                <a
                    key={btn.id}
                    // onClick={() => window.location.href = btn.href}
                    href={btn.href}
                    target={btn.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`floating-btn ${visible[i] ? 'floating-btn--visible' : ''}`}
                    style={{
                        backgroundColor: btn.bgColor,
                        color: btn.textColor,
                    }}
                    aria-label={btn.label}
                    title={btn.label}
                >
                    {/* ── Circular icon on the left ── */}
                    <span
                        className="floating-btn__icon"
                        style={{ backgroundColor: btn.iconBgColor }}
                    >
                        {btn.icon}
                    </span>

                    {/* ── Text label — hidden on mobile ── */}
                    <span className="floating-btn__label">
                        {btn.label}
                    </span>

                </a>
            ))}
        </div>
    )
}

export default FloatingButtons