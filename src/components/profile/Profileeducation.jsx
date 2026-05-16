// ============================================
// ProfileEducation.jsx — Education Card Grid
// ============================================
// ✏️ Add your real education in EDUCATION_DATA below.
// Each object = one card.
// ============================================

import '../../styles/profile/ProfileEducation.css'

// ── ✏️ YOUR EDUCATION — edit/add/remove ──────
const EDUCATION_DATA = [
  {
    id: 'edu-01',
    degree:      'B.Sc. Computer Science',           // ✏️
    institution: 'Your University Name',              // ✏️
    period:      '2019 – 2023',                       // ✏️
    grade:       'Second Class Upper',                // ✏️ or null to hide
    description: 'Studied software engineering, algorithms, web technologies, and database design. Final year project: a full-stack e-commerce platform.', // ✏️
    icon:        '🎓',
  },
  {
    id: 'edu-02',
    degree:      'Diploma — Graphic Design',
    institution: 'Design Institute / Online Course',
    period:      '2021 – 2022',
    grade:       'Distinction',
    description: 'Covered brand identity, typography, layout design, and print production using Adobe Creative Suite.',
    icon:        '🎨',
  },
  {
    id: 'edu-03',
    degree:      'WAEC / SSCE',
    institution: 'Your Secondary School',
    period:      '2013 – 2019',
    grade:       '7 A\'s',
    description: 'Completed secondary education with distinction in mathematics, physics, and technical drawing.',
    icon:        '📚',
  },
]

// ────────────────────────────────────────────
function ProfileEducation() {
  return (
    <section className="profile-edu section" id="education">
      <div className="container">

        {/* Section header */}
        <div className="profile-edu__header">
          <p className="section-label">Background</p>
          <h2 className="section-title">
            Education<span className="accent">.</span>
          </h2>
        </div>

        {/* Card grid */}
        <div className="profile-edu__grid">
          {EDUCATION_DATA.map((edu) => (
            <article key={edu.id} className="edu-card">

              {/* Top row: icon + period */}
              <div className="edu-card__top">
                <span className="edu-card__icon" aria-hidden="true">
                  {edu.icon}
                </span>
                <span className="edu-card__period">{edu.period}</span>
              </div>

              {/* Degree */}
              <h3 className="edu-card__degree">{edu.degree}</h3>

              {/* Institution */}
              <p className="edu-card__institution">{edu.institution}</p>

              {/* Grade — only shown if provided */}
              {edu.grade && (
                <span className="edu-card__grade">{edu.grade}</span>
              )}

              {/* Description */}
              <p className="edu-card__description">{edu.description}</p>

              {/* Amber accent line at bottom */}
              <div className="edu-card__line" aria-hidden="true" />

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProfileEducation