// ============================================
// Works.jsx — Works Landing Page
// ============================================
// This page appears when you click "View My Work".
// It shows two big clickable cards:
//   → Web Projects  (/web-projects)
//   → Graphics Work (/graphics)
//
// Concepts used:
// - Link: navigates to sub-pages without reload
// - useState: tracks which card the mouse is over
// - Array.map(): renders a list of cards from data
// ============================================

import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Works.css'
import { scrollToTop } from '../components/Footer'
import { graphicsProjects, webProjects } from '../data/projectsData'

// ── Works data ──────────────────────────────
// Each object describes one category card.
// To add a new category later, just add an
// object to this array — no other code needed.
const WORKS_CATEGORIES = [
  {
    id: 'web',
    route: '/web-projects',           // where the card links to
    label: 'Category 01',
    title: 'Web Projects',
    description:
      'Websites, web apps, and digital experiences built with clean code and sharp UI. From landing pages to full-stack applications.',
    tags: ['React', 'JavaScript', 'CSS', 'UI/UX', 'Responsive', 'Tailwind', 'Python'],
    stat: { number: `${webProjects.length}+`, label: 'Projects' },
    // SVG icon — a simple browser window shape
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="4" y="8" width="40" height="32" rx="3" stroke="currentColor" strokeWidth="2"/>
        <line x1="4" y1="16" x2="44" y2="16" stroke="currentColor" strokeWidth="2"/>
        <circle cx="10" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="16" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="22" cy="12" r="1.5" fill="currentColor"/>
        <rect x="10" y="22" width="12" height="2" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="10" y="28" width="20" height="2" rx="1" fill="currentColor" opacity="0.3"/>
        <rect x="10" y="34" width="16" height="2" rx="1" fill="currentColor" opacity="0.2"/>
      </svg>
    ),
  },
  {
    id: 'graphics',
    route: '/graphics',
    label: 'Category 02',
    title: 'Graphics Works',
    description:
      'Brand identities, posters, illustrations, and visual design. Every pixel intentional — from concept to finished artwork.',
    tags: ['Branding', 'PhotoShop', 'Logo', 'Posters', 'Social Media Ads', 'Flyers'],
    stat: { number: `${graphicsProjects.length}+`, label: 'Designs' },
    // SVG icon — a pen / design tool shape
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 36L16 28L32 12L36 16L20 32L12 40L8 36Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M28 16L32 12L36 16L32 20L28 16Z" fill="currentColor" opacity="0.3"/>
        <circle cx="10" cy="38" r="2" fill="currentColor" opacity="0.5"/>
        <line x1="38" y1="36" x2="44" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="38" y1="40" x2="42" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

// ────────────────────────────────────────────
function Works() {
  // Track which card is being hovered
  // null = no card hovered, 'web' or 'graphics' = that card is hovered
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <main className="works-page">
      <div className="container">

        {/* ── Page header ── */}
        <div className="works-page__header">
          <p className="section-label">Portfolio</p>
          <h1 className="works-page__title">
            My <span className="accent">Works</span>
          </h1>
          <p className="works-page__subtitle">
            Choose a category to explore — web development or graphic design.
          </p>
        </div>

        {/* ── Category grid ── */}
        {/*
          We use .map() to loop over the WORKS_CATEGORIES array
          and render a card for each one.
          "category" is each object in the array, one at a time.
        */}
        <div className="works-page__grid">
          {WORKS_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={category.route}
              className={`works-card ${hoveredId === category.id ? 'works-card--hovered' : ''} ${hoveredId && hoveredId !== category.id ? 'works-card--dimmed' : ''}`}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={`View ${category.title}`}
              onClick={scrollToTop}
            >
              {/* ── Top row: label + arrow ── */}
              <div className="works-card__top">
                <span className="works-card__label">{category.label}</span>
                {/* Arrow rotates on hover via CSS */}
                <span className="works-card__arrow" aria-hidden="true">↗</span>
              </div>

              {/* ── Icon ── */}
              <div className="works-card__icon">
                {category.icon}
              </div>

              {/* ── Title ── */}
              <h2 className="works-card__title">{category.title}</h2>

              {/* ── Description ── */}
              <p className="works-card__description">{category.description}</p>

              {/* ── Tags ── */}
              <div className="works-card__tags">
                {category.tags.map((tag) => (
                  <span key={tag} className="works-card__tag">{tag}</span>
                ))}
              </div>

              {/* ── Bottom: stat + CTA ── */}
              <div className="works-card__bottom">
                <div className="works-card__stat">
                  <span className="works-card__stat-number">{category.stat.number}</span>
                  <span className="works-card__stat-label">{category.stat.label}</span>
                </div>
                <span className="works-card__cta">
                  View All <span className="works-card__cta-arrow">→</span>
                </span>
              </div>

              {/* Decorative amber accent line at the bottom of the card */}
              <div className="works-card__accent-line" aria-hidden="true" />

            </Link>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <p className="works-page__note">
          More work available on request —{' '}
          <Link to="/contact" className="works-page__note-link" onClick={scrollToTop}>
            get in touch
          </Link>
          .
        </p>

      </div>
    </main>
  )
}

export default Works