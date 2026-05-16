// ============================================
// ProfileCertificates.jsx — Certificates & Awards
// ============================================
// ✏️ Add your real certificates in CERTS_DATA below.
// Set verifyUrl to the certificate link (Coursera,
// Udemy, etc.) or null to hide the verify button.
// ============================================

import '../../styles/profile/ProfileCertificates.css'

// ── ✏️ YOUR CERTIFICATES — edit/add/remove ───
const CERTS_DATA = [
  {
    id: 'cert-01',
    title:      'React – The Complete Guide',   // ✏️
    issuer:     'Udemy',                        // ✏️
    date:       'Jan 2024',                     // ✏️
    type:       'Course',                       // ✏️ 'Course' | 'Award' | 'Certification'
    verifyUrl:  null,                           // ✏️ or 'https://udemy.com/certificate/...'
    icon:       '📜',
  },
  {
    id: 'cert-02',
    title:      'Google UX Design Professional Certificate',
    issuer:     'Google / Coursera',
    date:       'Mar 2023',
    type:       'Certification',
    verifyUrl:  null,
    icon:       '🏆',
  },
  {
    id: 'cert-03',
    title:      'Best Design Award – Hackathon 2023',
    issuer:     'Tech Conference Nigeria',
    date:       'Nov 2023',
    type:       'Award',
    verifyUrl:  null,
    icon:       '🥇',
  },
  {
    id: 'cert-04',
    title:      'JavaScript Algorithms & Data Structures',
    issuer:     'freeCodeCamp',
    date:       'Jun 2022',
    type:       'Certification',
    verifyUrl:  null,
    icon:       '📜',
  },
  {
    id: 'cert-05',
    title:      'Figma UI Design Masterclass',
    issuer:     'Udemy',
    date:       'Sep 2022',
    type:       'Course',
    verifyUrl:  null,
    icon:       '🎨',
  },
  {
    id: 'cert-06',
    title:      'Python for Everybody',
    issuer:     'University of Michigan / Coursera',
    date:       'Feb 2023',
    type:       'Course',
    verifyUrl:  null,
    icon:       '📜',
  },
]

// Badge color per type
const TYPE_STYLES = {
  Course:        { bg: 'rgba(245,166,35,0.1)',   color: '#f5a623',  border: 'rgba(245,166,35,0.25)'   },
  Certification: { bg: 'rgba(74,222,128,0.1)',   color: '#4ade80',  border: 'rgba(74,222,128,0.25)'   },
  Award:         { bg: 'rgba(167,139,250,0.1)',  color: '#a78bfa',  border: 'rgba(167,139,250,0.25)'  },
}

// ────────────────────────────────────────────
function ProfileCertificates() {
  return (
    <section className="profile-certs section" id="certificates">
      <div className="container">

        <div className="profile-certs__header">
          <p className="section-label">Recognition</p>
          <h2 className="section-title">
            Certificates & <span className="accent">Awards</span>
          </h2>
        </div>

        <div className="profile-certs__grid">
          {CERTS_DATA.map((cert) => {
            const style = TYPE_STYLES[cert.type] || TYPE_STYLES.Course
            return (
              <article key={cert.id} className="cert-card">

                {/* Top: icon + type badge */}
                <div className="cert-card__top">
                  <span className="cert-card__icon" aria-hidden="true">
                    {cert.icon}
                  </span>
                  <span
                    className="cert-card__type"
                    style={{
                      background:   style.bg,
                      color:        style.color,
                      border:       `1px solid ${style.border}`,
                    }}
                  >
                    {cert.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="cert-card__title">{cert.title}</h3>

                {/* Issuer + date row */}
                <div className="cert-card__meta">
                  <span className="cert-card__issuer">{cert.issuer}</span>
                  <span className="cert-card__dot" aria-hidden="true">·</span>
                  <span className="cert-card__date">{cert.date}</span>
                </div>

                {/* Verify button — only shown if verifyUrl is set */}
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-card__verify"
                  >
                    Verify Certificate ↗
                  </a>
                )}

              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ProfileCertificates