// ============================================
// ProjectCard.jsx — Reusable Project Card
// ============================================
// This single component is used in THREE places:
//   1. Home page — preview grid
//   2. /web-projects — full projects list
//   3. /graphics     — full designs list
//
// Props (inputs) this component accepts:
//   image       — screenshot/mockup URL (string)
//   title       — project name (string)
//   description — short summary (string)
//   tags        — tools/languages used (array of strings)
//   liveUrl     — link to live site or behance (string)
//   category    — 'web' | 'graphics'
//   index       — card number for the small counter badge
// ============================================

import '../styles/ProjectCard.css'

function ProjectCard({ image, title, description, tags, liveUrl, category, index }) {
  return (
    <article className="project-card">

      {/* ── Image / Mockup area ── */}
      <div className="project-card__image-wrap">

        {/*
          If an "image" prop is passed in, show it.
          If not, show a styled placeholder.

          TO ADD A REAL IMAGE:
          Pass image="/screenshots/project-name.jpg"
          Put the file in your /public folder.
        */}
        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            className="project-card__image"
          />
        ) : (
          <div className="project-card__placeholder">
            {/* Icon changes depending on category */}
            <span className="project-card__placeholder-icon" aria-hidden="true">
              {category === 'graphics' ? '🎨' : '💻'}
            </span>
            <span className="project-card__placeholder-text">
              {category === 'graphics' ? 'Design Preview' : 'Project Screenshot'}
            </span>
          </div>
        )}

        {/* Small index badge — "01", "02", etc. */}
        <span className="project-card__index" aria-hidden="true">
          {String(index).padStart(2, '0')} {/* turns 1 → "01", 12 → "12" */}
        </span>

        {/* Category badge */}
        <span className={`project-card__category-badge project-card__category-badge--${category}`}>
          {category === 'graphics' ? 'Design' : 'Web'}
        </span>

      </div>

      {/* ── Card body ── */}
      <div className="project-card__body">

        {/* Project title */}
        <h3 className="project-card__title">{title}</h3>

        {/* Short description */}
        <p className="project-card__description">{description}</p>

        {/* Tags — tools, languages, or software used */}
        <div className="project-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>

        {/* ── Bottom row: Live button ── */}
        <div className="project-card__footer">
          {/*
            Only show the button if a liveUrl was passed in.
            "&&" means: only render the right side if left side is true.
          */}
          {/* liveUrl */}

          {category === "web" ?
            (liveUrl ?
              (<a
                href={liveUrl}
                target="_blank"          /* opens in new tab */
                rel="noopener noreferrer" /* security best practice */
                className="project-card__live-btn"
                aria-label={`View ${title} live`}
              >
                <span className="project-card__live-dot" aria-hidden="true" />
                View Live
                <span className="project-card__live-arrow" aria-hidden="true">↗</span>
              </a>
              ) :
              (<span className="project-card__coming-soon">Coming soon</span>)
            ) :
            null
          }
        </div>

      </div>

    </article>
  )
}

export default ProjectCard