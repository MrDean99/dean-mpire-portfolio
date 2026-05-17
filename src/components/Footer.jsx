// ============================================
// Footer.jsx — Site Footer
// ============================================
// Structure (top to bottom):
//
//  ┌─────────────────────────────────────────┐
//  │  CTA BANNER                             │
//  │  "Let's work together" + Hire Me button │
//  ├─────────────────────────────────────────┤
//  │  FOOTER BODY (4 columns)                │
//  │  [Logo + tagline] [Nav] [Contact] [Soc] │
//  ├─────────────────────────────────────────┤
//  │  FOOTER BOTTOM BAR                      │
//  │  Copyright left — "Back to top" right   │
//  └─────────────────────────────────────────┘
//
// ✏️ Update YOUR DETAILS section below.
// ============================================

import { Link, NavLink } from 'react-router-dom'
import '../styles/Footer.css'
import { FOOTER_DATA } from '../data/footerData'

// ── Scroll to top helper ──────────────────────
export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

// ── Get current year automatically ───────────
const YEAR = new Date().getFullYear()

// ────────────────────────────────────────────
function Footer() {
    return (
        <footer className="footer">

            {/* ════════════════════════════════════
          CTA BANNER — "Let's work together"
      ════════════════════════════════════ */}
            <div className="footer-cta">
                {/* Glow blobs */}
                <div className="footer-cta__glow footer-cta__glow--left" aria-hidden="true" />
                <div className="footer-cta__glow footer-cta__glow--right" aria-hidden="true" />

                <div className="container">
                    <div className="footer-cta__inner">

                        {/* Left: text */}
                        <div className="footer-cta__text">
                            <p className="section-label">Open for opportunities</p>
                            <h2 className="footer-cta__heading">
                                Let's work<br />
                                <span className="accent">together.</span>
                            </h2>
                            <p className="footer-cta__subtext">
                                Have a project, a role, or just an idea?
                                I'm always open to the right conversation.
                            </p>
                        </div>

                        {/* Right: Hire Me button */}
                        <div className="footer-cta__action">
                            {/*
                The big "Hire Me" CTA.
                Link goes to /contact page.
              */}
                            <Link to="/contact" className="footer-cta__btn" onClick={scrollToTop}>
                                Hire Me
                                <span className="footer-cta__btn-arrow" aria-hidden="true">→</span>
                            </Link>
                            <p className="footer-cta__response">
                                <span className="footer-cta__dot" aria-hidden="true" />
                                Usually responds within 24h
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* ════════════════════════════════════
          FOOTER BODY
      ════════════════════════════════════ */}
            <div className="footer-body">
                <div className="container">
                    <div className="footer-body__grid">

                        {/* ── Column 1: Logo + tagline + socials ── */}
                        <div className="footer-col footer-col--brand">

                            {/* Logo */}
                            <Link to="/" className="footer-logo" onClick={scrollToTop}>
                                <span className="footer-logo__dot" aria-hidden="true" />
                                DeanMpire
                                <span className="accent">.</span>
                            </Link>

                            {/* Tagline */}
                            <p className="footer-tagline">{FOOTER_DATA.tagline}</p>

                            {/* Social icons */}
                            <div className="footer-socials">
                                {FOOTER_DATA.socials.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-social-btn"
                                        aria-label={s.label}
                                        title={s.label}
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>

                        </div>

                        {/* ── Column 2: Navigation ── */}
                        <div className="footer-col">
                            <h4 className="footer-col__heading">Navigation</h4>
                            <ul className="footer-nav">
                                {FOOTER_DATA.navLinks.map((link) => (
                                    <li key={link.to}>
                                        <NavLink
                                            onClick={scrollToTop}
                                            to={link.to}
                                            end={link.to === '/'}
                                            className={({ isActive }) =>
                                                `footer-nav__link ${isActive ? 'footer-nav__link--active' : ''}`
                                            }
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ── Column 3: Contact info ── */}
                        <div className="footer-col">
                            <h4 className="footer-col__heading">Contact</h4>
                            <ul className="footer-contact">

                                <li className="footer-contact__item">
                                    {/* Email icon */}
                                    <span className="footer-contact__icon" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </span>
                                    <a
                                        href={`https://mailto:${FOOTER_DATA.email}`}
                                        className="footer-contact__link"
                                        target="_blank"
                                    >
                                        {FOOTER_DATA.email}
                                    </a>
                                </li>

                                <li className="footer-contact__item">
                                    {/* Phone icon */}
                                    <span className="footer-contact__icon" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.55.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.25 1.02l-2.2 2.22z" />
                                        </svg>
                                    </span>
                                    <a
                                        href={`tel:${FOOTER_DATA.whatsApp.replace(/\s/g, '')}`}
                                        className="footer-contact__link"
                                    >
                                        {FOOTER_DATA.whatsApp}
                                    </a>
                                </li>

                                <li className="footer-contact__item">
                                    {/* WhatsApp icon */}
                                    <span className="footer-contact__icon" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L.054 23.487l5.818-1.525A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.016-1.378l-.36-.214-3.713.976.992-3.622-.235-.372A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
                                        </svg>
                                    </span>
                                    <a
                                        href={`https://wa.me/${FOOTER_DATA.phone.replace(/\s/g, '')}`}
                                        className="footer-contact__link"
                                    >
                                        {FOOTER_DATA.phone}
                                    </a>
                                </li>

                                <li className="footer-contact__item">
                                    {/* Location icon */}
                                    <span className="footer-contact__icon" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </span>
                                    <span className="footer-contact__text">
                                        {FOOTER_DATA.location}
                                    </span>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* ════════════════════════════════════
          BOTTOM BAR — copyright + back to top
      ════════════════════════════════════ */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom__inner">

                        {/* Copyright */}
                        <p className="footer-bottom__copy">
                            © {YEAR} <span className="accent">{FOOTER_DATA.name}</span>.
                            All rights reserved. Built with React.
                        </p>

                        {/* Back to top button */}
                        <button
                            className="footer-back-top"
                            onClick={scrollToTop}
                            aria-label="Back to top"
                        >
                            Back to top
                            <span className="footer-back-top__arrow" aria-hidden="true">↑</span>
                        </button>

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer