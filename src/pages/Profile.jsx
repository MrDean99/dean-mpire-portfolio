// ============================================
// Profile.jsx — Full Profile Page
// ============================================
// Composed of independent components:
//   ✅ ProfileHero        — photo, name, title, stats, CV download
//   ✅ ProfileBio         — detailed about me
//   ✅ ProfileEducation   — education card grid
//   ✅ Skills             — reused from Home page
//   ✅ ProfileCertificates— certificates & awards
//   ✅ ProfileServices    — services offered
//
// To add/remove a section — just comment it out here.
// ============================================

import ProfileHero from '../components/profile/ProfileHero'
import ProfileBio from '../components/profile/ProfileBio'
// import ProfileEducation from '../components/profile/ProfileEducation'
// import ProfileCertificates from '../components/profile/ProfileCertificates'
import ProfileServices from '../components/profile/ProfileServices'
import Skills from '../components/Skills'

import '../styles/Profile.css'

function Profile() {
  return (
    <main className='profile-page'>

      <div className="container">

        {/* ── Page Header ── */}
        <div className="profile-page__header">
          <p className="section-label">Who I Am</p>
          <h1 className="profile-page__title">
            My <span className="accent">Profile</span>
          </h1>
          <p className="profile-page__subtitle">
            Full background & experience
          </p>
        </div>
      </div>

      {/* ── Big hero header with photo, name, CV button ── */}
      <ProfileHero />

      {/* ── Detailed bio paragraphs ── */}
      <ProfileBio />

      {/* ── Services I offer ── */}
      <ProfileServices />

      {/* ── Education card grid ── */}
      {/* <ProfileEducation /> */}

      {/* ── Skills — reused from Home page ── */}
      <Skills />

      {/* ── Certificates & Awards ── */}
      {/* <ProfileCertificates /> */}


    </main>
  )
}

export default Profile