// ============================================
// FeaturedProjects.jsx — Home Section
// ============================================
// Shows a preview of both web and graphics work
// directly on the Home page.
//
// Features:
//   - Two tabs: "Web Projects" & "Graphics Work"
//   - Clicking a tab swaps the visible projects
//   - "See all" link goes to the full page
//   - Uses the shared ProjectCard component
//
// Concepts used:
//   - useState: tracks which tab is active
//   - Array.filter(): only shows featured projects
// ============================================

import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from './Projectcard'
import { webProjects, graphicsProjects } from '../data/projectsData'
import '../styles/Featuredprojects.css'

// ── Tab config ──────────────────────────────
// Adding a new tab = add one object here.
const TABS = [
  {
    id:       'web',
    label:    'Web Projects',
    data:     webProjects,
    route:    '/web-projects',
    category: 'web',
  },
  {
    id:       'graphics',
    label:    'Graphics Work',
    data:     graphicsProjects,
    route:    '/graphics',
    category: 'graphics',
  },
]

// ────────────────────────────────────────────
function FeaturedProjects() {
  // "activeTab" stores which tab ID is selected — starts on 'web'
  const [activeTab, setActiveTab] = useState('web')

  // Find the full tab object that matches the active ID
  const currentTab = TABS.find((t) => t.id === activeTab)

  // Only show projects marked featured: true
  const visibleProjects = currentTab.data.filter((p) => p.featured)

  return (
    <section className="featured section" id="projects">
      <div className="container">

        {/* ── Section header row ── */}
        <div className="featured__header">
          <div className="featured__header-text">
            {/* <p className="section-label">Selected Work</p> */}
            <h2 className="section-title">
              Featured <span className="accent">Projects</span>
            </h2>
          </div>

          {/* "See all" link — goes to the active tab's full page */}
          <Link to={currentTab.route} className="featured__see-all">
            See all {currentTab.label}
            <span className="featured__see-all-arrow">→</span>
          </Link>
        </div>

        {/* ── Tab switcher ── */}
        {/*
          Each button sets the activeTab state.
          The active tab gets the "featured__tab--active" class
          which gives it the amber underline.
        */}
        <div className="featured__tabs" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`featured__tab ${activeTab === tab.id ? 'featured__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {/* Project count badge */}
              <span className="featured__tab-count">
                {tab.data.filter((p) => p.featured).length}
              </span>
            </button>
          ))}
        </div>

        {/* ── Project cards grid ── */}
        {/*
          "key={activeTab}" tells React to fully re-render the grid
          when the tab changes — this triggers the CSS fade-in animation.
        */}
        <div className="featured__grid" key={activeTab}>
          {visibleProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              index={i + 1}           /* 1-based index for the badge */
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              category={currentTab.category}
            />
          ))}
        </div>

        {/* ── Bottom CTA row ── */}
        <div className="featured__bottom">
          <p className="featured__bottom-text">
            Want to see all Projects?
          </p>
          <div className="featured__bottom-links">
            <Link to="/web-projects" className="btn btn-secondary">
              All Web Projects
            </Link>
            <Link to="/graphics" className="btn btn-secondary">
              All Graphics Work
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default FeaturedProjects