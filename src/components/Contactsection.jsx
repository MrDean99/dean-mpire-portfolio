// ============================================
// ContactSection.jsx — Layout Wrapper
// ============================================
// Combines ContactForm (left) + ContactInfo (right)
// into the two-column layout from the reference.
//
// This is the component you drop into pages:
//   ✅ Home page
//   ✅ Contact page
//
// Because ContactForm and ContactInfo are each
// independent, you can also use them separately:
//   import ContactForm from './ContactForm'
//   import ContactInfo from './ContactInfo'
// ============================================

import ContactForm from './Contactform'
import ContactInfo from './Contactinfo'
import '../styles/Contactsection.css'

function ContactSection() {
  return (
    <section className="contact-section section" id="contact">
      <div className="container">

        {/* Section label */}
        <p className="section-label">Contact</p>

        {/* Two-column layout: form left, info right */}
        <div className="contact-section__grid">

          {/* LEFT — the form card */}
          <ContactForm />

          {/* RIGHT — heading, info cards, socials */}
          <ContactInfo />

        </div>

      </div>
    </section>
  )
}

export default ContactSection