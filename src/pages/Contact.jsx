// ============================================
// Contact.jsx — Contact Page
// ============================================
import ContactSection from '../components/Contactsection'
import '../styles/Contact.css'

function Contact() {
  return (
    <main className="contact-page">

      {/* Hero strip at top of page */}
      <div className="contact-page__hero">
        <div className="container">
          <p className="section-label">Have a Project?</p>
          <h1 className="contact-page__title">
            Get In <span className="accent">Touch</span>
          </h1>
          <p className="contact-page__subtitle">
            Open to freelance projects, full-time roles, and creative collaborations.
          </p>
        </div>
      </div>

      {/* The reusable contact section */}
      <ContactSection />

    </main>
  )
}

export default Contact