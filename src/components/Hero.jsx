// ============================================
// Hero.jsx — Hero / Landing Section
// ============================================
// Concepts used here:
// - useState: stores the typed text & cursor blink
// - useEffect: runs the typing animation loop
// - Date object: gets today's date for display
// ============================================

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Hero.css'
import { myData } from '../data/myData'
import { scrollToTop } from './Footer'

// ── Typing Animation Config ─────────────────
// Add or change the roles shown in the animation
const ROLES = [
    'Python Expert.',
    'Web Developer.',
    'Brand Designer.',
    'Graphics Designer.',
    'Web Developer.',
]

const TYPE_SPEED = 100   // ms per character when typing
const DELETE_SPEED = 100   // ms per character when deleting
const PAUSE_AFTER = 2000 // ms to wait after fully typing a word

// ── Live Date Helper ────────────────────────
// Returns today's date formatted as: "Monday, May 11 2025"
function getLiveDate() {
    return new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

// ────────────────────────────────────────────
function Hero() {

    // ── State ──────────────────────────────────
    // "displayText" is the text currently shown on screen
    const [displayText, setDisplayText] = useState('')

    // "roleIndex" tracks WHICH role we're currently typing
    const [roleIndex, setRoleIndex] = useState(0)

    // "isDeleting" — are we typing forward or deleting?
    const [isDeleting, setIsDeleting] = useState(false)

    // "date" stores today's date string (updates every minute)
    const [date, setDate] = useState(getLiveDate())

    // ── Typing Animation Effect ─────────────────
    useEffect(() => {
        const currentRole = ROLES[roleIndex]

        // Decide how fast to tick based on what we're doing
        let delay = isDeleting ? DELETE_SPEED : TYPE_SPEED

        // If we just finished typing the whole word, pause before deleting
        if (!isDeleting && displayText === currentRole) {
            delay = PAUSE_AFTER
        }

        const timer = setTimeout(() => {
            if (!isDeleting) {
                // TYPE: add one more character from the current role
                setDisplayText(currentRole.slice(0, displayText.length + 1))

                // If we finished typing the whole word → start deleting
                if (displayText.length + 1 === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), PAUSE_AFTER)
                }
            } else {
                // DELETE: remove one character
                setDisplayText(currentRole.slice(0, displayText.length - 1))

                // If fully deleted → move to next role
                if (displayText.length === 0) {
                    setIsDeleting(false)
                    setRoleIndex((prev) => (prev + 1) % ROLES.length) // loop back to start
                }
            }
        }, delay)

        // Cleanup: cancel the timer if the component re-renders
        return () => clearTimeout(timer)
    }, [displayText, isDeleting, roleIndex])

    // ── Live Date Update Effect ─────────────────
    // Refresh the date every 60 seconds (in case user leaves tab open overnight)
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(getLiveDate())
        }, 60000)

        return () => clearInterval(interval)
    }, [])

    // ── Render ─────────────────────────────────
    return (
        <section className="hero">

            {/* Ambient background glow — pure CSS, no image needed */}
            <div className="hero__glow" aria-hidden="true" />

            {/* ── Date Badge — top right ──
            <div className="hero__date-badge">
                <span className="hero__date-dot" aria-hidden="true" />
                <span className="hero__date-text">{date}</span>
            </div> */}

            {/* ── Center Content ── */}
            <div className="hero__content">

                {/* Small label above name */}
                <p className="hero__eyebrow">
                    <span className="hero__eyebrow-line" aria-hidden="true" />
                    Available for work
                </p>

                {/* Main heading — your name */}
                <h1 className="hero__name">
                    Hi<br />
                    <span className="accent">Welcome</span>
                </h1>

                {/* Typing animation row */}
                <div className="hero__role-row">
                    <span className="hero__role-prefix">I am a </span>
                    {/*
            "displayText" changes every tick of the animation.
            The cursor "|" blinks via CSS animation.
          */}
                    <span className="hero__role-typed">
                        {displayText}
                        <span className="hero__cursor" aria-hidden="true">|</span>
                    </span>
                </div>

                {/* Short bio */}
                <p className="hero__bio">
                    {myData.tagline}
                </p>

                {/* Skill tags */}
                <div className="hero__tags">
                    {['React', 'CSS', 'JavaScript', 'Tailwind', 'Photoshop', 'Branding', 'Canvas'].map((tag) => (
                        <span key={tag} className="hero__tag">{tag}</span>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="hero__buttons">
                    <Link to="/works" className="btn btn-primary" onClick={scrollToTop}>
                        View My Work
                    </Link>
                    <Link to="/contact" className="btn btn-secondary" onClick={scrollToTop}>
                        Hire Me
                    </Link>
                </div>

            </div>

            {/* ── Scroll indicator — bottom center ── */}
            <div className="hero__scroll-hint" aria-label="Scroll down">
                <span className="hero__scroll-text">Scroll</span>
                <div className="hero__scroll-line" aria-hidden="true" />
            </div>

        </section>
    )
}

export default Hero