// ============================================
// ProfileHero.jsx — Profile Page Hero Header
// ============================================
// Big header at the top of the profile page.
// Contains:
//   - Profile photo (or placeholder)
//   - Name, title, short tagline
//   - Quick stats (years, projects, clients)
//   - Download CV button
//   - Social links row
//
// ✏️ UPDATE YOUR DETAILS in the DATA section below
// ============================================

import { myData, SOCIALS } from '../../data/myData'
import '../../styles/profile/Profilehero.css'
import Animate from '../Animate'


// ── ✏️ YOUR DETAILS — edit these ─────────────
const PROFILE = {
  name: myData.name,
  title: myData.title,
  tagline: myData.tagline,
  photo: "/img1.png",   // replace with '/your-photo.jpg' — put file in /public
  cvUrl: myData.cvUrl,  // replace with real CV path or external URL
  stats: [
    { number: myData.expyrs, label: 'Years Exp.' },
    { number: myData.totalProjects, label: 'Projects' },
    { number: myData.clientsnum, label: 'Clients' },
    // { number: '5+', label: 'Awards' },
  ],
  socials: SOCIALS,
}

// ────────────────────────────────────────────
function ProfileHero() {
  return (
    <div className="profile-hero">

      {/* ── Amber glow blob ── */}
      <div className="profile-hero__glow" aria-hidden="true" />

      <div className="container">
        <div className="profile-hero__inner">

          {/* ── LEFT: Photo ── */}
          <Animate animation="zoom-out">
            <div className="profile-hero__photo-wrap">

              {/* Corner brackets */}
              <div className="profile-hero__corner profile-hero__corner--tl" aria-hidden="true" />
              <div className="profile-hero__corner profile-hero__corner--br" aria-hidden="true" />

              <div className="profile-hero__photo">
                {PROFILE.photo ? (
                  <img src={PROFILE.photo} alt={PROFILE.name} />
                ) : (
                  <div className="profile-hero__photo-placeholder">
                    <span className="profile-hero__photo-icon" aria-hidden="true">👤</span>
                    <p className="profile-hero__photo-hint">Add your photo</p>
                    <p className="profile-hero__photo-sub">
                      Set photo: '/your-photo.jpg'<br />in ProfileHero.jsx
                    </p>
                  </div>
                )}
              </div>

              {/* Available badge floats over the photo */}
              <div className="profile-hero__badge">
                <span className="profile-hero__badge-dot" aria-hidden="true" />
                Available for work
              </div>

            </div>
          </Animate>

          {/* ── RIGHT: Info ── */}
          <div className="profile-hero__info">

            {/* Label */}
            {/* <p className="section-label">Full Profile</p> */}

            {/* Name */}
            <h1 className="profile-hero__name">
              {PROFILE.name}<span className="accent">.</span>
            </h1>

            {/* Title */}
            <p className="profile-hero__title">{PROFILE.title}</p>

            {/* Tagline */}
            <p className="profile-hero__tagline">{PROFILE.tagline}</p>

            {/* Stats row */}
            <div className="profile-hero__stats">
              {PROFILE.stats.map((stat, i) => (
                <>
                  {/* Divider between stats (not before first) */}
                  {i > 0 && (
                    <div key={`div-${i}`} className="profile-hero__stat-div" aria-hidden="true" />
                  )}
                  <div key={stat.label} className="profile-hero__stat">
                    <span className="profile-hero__stat-number">
                      {stat.number}
                    </span>
                    <span className="profile-hero__stat-label">
                      {stat.label}
                    </span>
                  </div>
                </>
              ))}
            </div>

            {/* Buttons row */}
            <div className="profile-hero__actions">

              {/* Download CV */}
              <a
                href={PROFILE.cvUrl}
                download
                className="btn btn-primary profile-hero__cv-btn"
                aria-label="Download CV"
              >
                {/* Download icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>

              {/* Social icon buttons */}
              <Animate animation="zoom-in">
                <div className="profile-hero__socials">
                  {PROFILE.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="profile-hero__social-btn"
                      aria-label={s.label}
                      title={s.label}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </Animate>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHero