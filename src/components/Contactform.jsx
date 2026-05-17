// ============================================
// ContactForm.jsx — Reusable Contact Form
// ============================================
// A self-contained form component.
// Used on:
//   ✅ Home page (inside ContactSection)
//   ✅ Contact page (inside ContactSection)
//   🔜 Any other page you want to add it to
//
// Concepts used:
//   - useState: tracks every input field's value
//   - controlled inputs: React owns the form data
//   - form validation: checks fields before submit
//   - conditional rendering: shows success message
// ============================================

import { useState } from 'react'
import '../styles/Contactform.css'

// ── Initial empty form state ─────────────────
// Defined outside component so it's never recreated
const EMPTY_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
  privacy: false,
}

function ContactForm() {
  // "fields" holds all form values in one object
  const [fields, setFields] = useState(EMPTY_FORM)

  // "errors" holds validation messages per field
  const [errors, setErrors] = useState({})

  // "status": null | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState(null)

  // ── Handle any input change ─────────────────
  // One handler for all fields — reads the input's "name" attribute
  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setFields((prev) => ({
      ...prev,                              // keep all other fields
      [name]: type === 'checkbox' ? checked : value,
    }))
    // Clear the error for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  // ── Validation ──────────────────────────────
  function validate() {
    const newErrors = {}
    if (!fields.name.trim()) newErrors.name = 'Name is required'
    if (!fields.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(fields.email))
      newErrors.email = 'Enter a valid email'
    if (!fields.subject.trim()) newErrors.subject = 'Subject is required'
    if (!fields.message.trim()) newErrors.message = 'Message is required'
    if (!fields.privacy) newErrors.privacy = 'Please agree to continue'
    return newErrors
  }

  // ── Submit handler ──────────────────────────
  async function handleSubmit(e) {
    e.preventDefault()   // stop browser from reloading the page

    // Run validation
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return   // stop here if there are errors
    }

    // Simulate sending (replace with your real email service later)
    // e.g. EmailJS, Formspree, or your own API
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1500)) // fake 1.5s delay
    setStatus('sent')
    setFields(EMPTY_FORM)  // clear the form
  }

  // ── Success state ───────────────────────────
  if (status === 'sent') {
    return (
      <div className="contact-form contact-form--success">
        <div className="contact-form__success-icon" aria-hidden="true">✓</div>
        <h3 className="contact-form__success-title">Message Sent!</h3>
        <p className="contact-form__success-text">
          Thanks for reaching out. I'll get back to you within 24 hours.
        </p>
        <button
          className="btn btn-primary contact-form__btn"
          onClick={() => setStatus(null)}
        >
          Send Another
        </button>
      </div>
    )
  }

  // ── Form ────────────────────────────────────
  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>

      <h3 className="contact-form__heading">Leave your message</h3>

      {/* ── Row: Name + Email side by side ── */}
      <div className="contact-form__row">

        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="cf-name">
            Name
          </label>
          <input
            id="cf-name"
            className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
            type="text"
            name="name"
            placeholder="Your Name"
            value={fields.name}
            onChange={handleChange}
            autoComplete="name"
          />
          {errors.name && (
            <span className="contact-form__error">{errors.name}</span>
          )}
        </div>

        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="cf-email">
            Email
          </label>
          <input
            id="cf-email"
            className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
            type="email"
            name="email"
            placeholder="your@email.com"
            value={fields.email}
            onChange={handleChange}
            autoComplete="email"
          />
          {errors.email && (
            <span className="contact-form__error">{errors.email}</span>
          )}
        </div>

      </div>

      {/* ── Subject ── */}
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="cf-subject">
          Subject
        </label>
        <input
          id="cf-subject"
          className={`contact-form__input ${errors.subject ? 'contact-form__input--error' : ''}`}
          type="text"
          name="subject"
          placeholder="What's this about?"
          value={fields.subject}
          onChange={handleChange}
        />
        {errors.subject && (
          <span className="contact-form__error">{errors.subject}</span>
        )}
      </div>

      {/* ── Message ── */}
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="cf-message">
          Message
        </label>
        <textarea
          id="cf-message"
          className={`contact-form__textarea ${errors.message ? 'contact-form__input--error' : ''}`}
          name="message"
          placeholder="Tell me about your project..."
          rows={5}
          value={fields.message}
          onChange={handleChange}
        />
        {errors.message && (
          <span className="contact-form__error">{errors.message}</span>
        )}
      </div>

      {/* ── Privacy checkbox + Submit button ── */}
      <div className="contact-form__footer">

        <label className="contact-form__checkbox-label">
          <input
            className="contact-form__checkbox"
            type="checkbox"
            name="privacy"
            checked={fields.privacy}
            onChange={handleChange}
          />
          <span className="contact-form__checkbox-custom" aria-hidden="true" />
          <span className="contact-form__checkbox-text">
            I agree to the privacy policy
          </span>
        </label>
        {errors.privacy && (
          <span className="contact-form__error contact-form__error--privacy">
            {errors.privacy}
          </span>
        )}

        <button
          type="submit"
          className="btn btn-primary contact-form__btn"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? (
            <>
              <span className="contact-form__spinner" aria-hidden="true" />
              Sending…
            </>
          ) : (
            'Send Message'
          )}
        </button>

      </div>

    </form>
  )
}

export default ContactForm