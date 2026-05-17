// ============================================
// About.jsx — About Me Section
// ============================================
// Layout: Text on the left, Photo on the right
//
// Concepts used:
// - Link: navigates to the /profile page
// - Static JSX layout with CSS Grid
// ============================================

import { Link } from 'react-router-dom'
import '../styles/About.css'
import { myData } from '../data/myData'
import { scrollToTop } from './Footer'

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        {/* ── Two-column grid ── */}
        <div className="about__grid">

          {/* ── LEFT — Text content ── */}
          <div className="about__text">

            {/* Small label */}
            <p className="section-label">About Me</p>

            {/* Heading — replace "Your Name" when ready */}
            <h2 className="about__heading">
              Hi, I'm <span className="accent">{myData.name}</span> —<br />
              I build things for<br />
              the web <span className="about__heading-amp">&</span> screen.
            </h2>

            {/* Bio paragraphs — replace with your real bio later */}
            <p className="about__bio">
              I'm a web developer and graphics designer based in [{myData.location}].
              I specialise in building clean, fast websites and crafting bold
              visual identities that tell a story.
            </p>

            <p className="about__bio">
              With a sharp eye for detail and a passion for great user
              experiences, I bridge the gap between beautiful design and
              solid code. Whether it's a brand identity, a portfolio site,
              or a full web application — I bring it to life.
            </p>

            {/* ── Quick stats row ── */}
            {/*
              These are small numbers that highlight your experience.
              Update the numbers and labels to match your real stats.
            */}
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">{myData.expyrs}<span className="accent">+</span></span>
                <span className="about__stat-label">Years Experience</span>
              </div>
              <div className="about__stat-divider" aria-hidden="true" />
              <div className="about__stat">
                <span className="about__stat-number">{myData.totalProjects}<span className="accent">+</span></span>
                <span className="about__stat-label">Projects Done</span>
              </div>
              <div className="about__stat-divider" aria-hidden="true" />
              <div className="about__stat">
                <span className="about__stat-number">{myData.clientsnum}<span className="accent">+</span></span>
                <span className="about__stat-label">Happy Clients</span>
              </div>
            </div>

            {/* ── CTA Button → Profile Page ── */}
            {/*
              Link is like <a href> but it navigates without
              reloading the page (React Router magic).
            */}
            <Link to="/profile" className="btn btn-primary about__cta" onClick={scrollToTop}>
              View Full Profile
              {/* Arrow icon using a unicode character */}
              <span className="about__cta-arrow" aria-hidden="true">→</span>
            </Link>

          </div>

          {/* ── RIGHT — Photo block ── */}
          <div className="about__photo-wrap">

            {/* Decorative frame corners */}
            <div className="about__photo-corner about__photo-corner--tl" aria-hidden="true" />
            <div className="about__photo-corner about__photo-corner--br" aria-hidden="true" />

            {/* Photo box — replace the placeholder with a real <img> when ready */}
            <div className="about__photo">
              {/*
                TO ADD YOUR PHOTO:
                Replace the div below with:
                <img src="/your-photo.jpg" alt="Your Name" />
                Put your photo in the /public folder of your project.
              */}
              <img src="/img3.jpg" alt="" />
              {/* <div className="about__photo-placeholder">
                <span className="about__photo-icon" aria-hidden="true">👤</span>
                <p className="about__photo-hint">Your photo here</p>
                <p className="about__photo-hint-sub">
                  Replace with &lt;img src="/photo.jpg" /&gt;
                </p>
              </div> */}
            </div>

            {/* Floating badge — "Available for work" */}
            <Link to='/contact'>
              <div className="about__badge">
                <span className="about__badge-dot" aria-hidden="true" />
                Available for work
              </div>
            </Link>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About