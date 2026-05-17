// ============================================
// ProfileBio.jsx — Detailed Bio Section
// ============================================
// ✏️ Replace the placeholder text with your real bio.
// Add or remove <p> tags as needed.
// ============================================

import { myData } from '../../data/myData'
import '../../styles/profile/profilebio.css'

// ── ✏️ Highlight chips — things about you ────
const HIGHLIGHTS = [
  `Based in ${myData.location}`,
  'Open to Remote',
  'Freelance Available',
  'Fast Turnaround',
  'Clean Code',
  'Pixel Perfect Design',
]

function ProfileBio() {
  return (
    <section className="profile-bio section" id="bio">
      <div className="container">
        <div className="profile-bio__inner">

          {/* ── Left: label + heading ── */}
          <div className="profile-bio__left">
            <p className="section-label">About Me</p>
            <h2 className="profile-bio__heading">
              The person<br />behind the<br />
              <span className="accent">work.</span>
            </h2>

            {/* Highlight chips */}
            <div className="profile-bio__chips">
              {HIGHLIGHTS.map((chip) => (
                <span key={chip} className="profile-bio__chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: bio paragraphs ── */}
          {/*
            ✏️ REPLACE EVERYTHING INSIDE .profile-bio__text
            with your actual bio. Add as many <p> tags as you want.
          */}
          <div className="profile-bio__text">
            <p>
              Hi, I'm <strong>{myData.name}</strong> — a {myData.title} with over {myData.expyrs} years of experience building digital products
              that are both functional and beautiful. I believe great design
              is not just how something looks — it's how it works.
            </p>
            <p>
              My journey started with a deep curiosity for how websites are built.
              That curiosity quickly grew into a passion for the entire creative
              process — from wireframing a layout to writing the last line of code
              and finally seeing a product come alive in the browser.
            </p>
            <p>
              On the design side, I work across brand identity, print design,
              social media graphics, and UI/UX. I love the challenge of
              translating a client's vision into a visual language that resonates
              with their audience.
            </p>
            <p>
              Outside of work, I'm constantly learning — exploring new frameworks,
              experimenting with new design trends, and looking for the next
              interesting problem to solve. If you have a project in mind, I'd
              love to hear about it.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProfileBio