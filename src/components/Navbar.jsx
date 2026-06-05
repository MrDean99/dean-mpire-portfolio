// ============================================
// Navbar.jsx — Navigation Bar Component
// ============================================
// This component shows the site logo and
// navigation links at the top of every page.
//
// Concepts used here:
// - useState: tracks if the mobile menu is open
// - useEffect: adds a scroll listener to shrink the navbar
// - NavLink: like <a> but knows if it's the active page
// ============================================

import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import { scrollToTop } from './Footer'
import { myData } from '../data/myData'

function Navbar() {
  // ── State ──────────────────────────────────
  // "scrolled" becomes true when user scrolls down 50px
  // We use this to add a background to the navbar
  const [scrolled, setScrolled] = useState(false)

  // "menuOpen" tracks whether the mobile hamburger menu is open
  const [menuOpen, setMenuOpen] = useState(false)

  // ── Side Effect ────────────────────────────
  // useEffect runs code AFTER the component appears on screen.
  // Here we listen for scroll events.
  useEffect(() => {
    // This function runs every time the user scrolls
    function handleScroll() {
      setScrolled(window.scrollY > 50) // true if scrolled more than 50px
    }

    // Attach the listener to the window
    window.addEventListener('scroll', handleScroll)

    // Cleanup: remove the listener when Navbar is removed from screen
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // the [] means: run this effect only once (on mount)

  // ── Close menu when a link is clicked ──────
  function handleLinkClick() {
    setMenuOpen(false)
    scrollToTop()
  }

  // ── Render ─────────────────────────────────
  return (
    // We add the "scrolled" class conditionally using a template string
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        {/* ── Logo ── */}
        <NavLink to="/" className="navbar__logo" onClick={handleLinkClick}>
          {/* The dot is a decorative amber square */}
          <span className="navbar__logo-dot" />
          <img className='navbar__logoimg' src="/logo.png" alt="logo" />
          {/* Mr.Dean<span className="accent">_99</span> */}
        </NavLink>

        {/* ── Desktop Navigation Links ── */}
        {/*
          NavLink automatically adds an "active" class
          when its URL matches the current page.
          We use that to highlight the current page link.
        */}
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li>
            <NavLink to="/" end onClick={handleLinkClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" onClick={handleLinkClick}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/web-projects" onClick={handleLinkClick}>
              Web Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/graphics" onClick={handleLinkClick}>
              Graphics
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleLinkClick}>
              Contact
            </NavLink>
          </li>

          {/* ── CTA Button — "Hire Me" ── */}
          <li>
            <a href={myData.cvUrl} target='blank' className="navbar__cta btn btn-primary" onClick={handleLinkClick}>
              Download cv
            </a>
          </li>
        </ul>

        {/* ── Hamburger Button (mobile only) ── */}
        {/*
          This button is hidden on desktop.
          On mobile it toggles the menu open/closed.
        */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)} // toggle: flip true/false
          aria-label="Toggle menu" // for screen readers
        >
          {/* Three lines that animate into an X */}
          <span />
          <span />
          <span />
        </button>

      </div>
    </nav>
  )
}

export default Navbar