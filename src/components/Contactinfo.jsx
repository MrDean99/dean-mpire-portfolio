// ============================================
// ContactInfo.jsx — Reusable Contact Details
// ============================================
// The right-side panel from the reference image:
//   - Big heading
//   - 2×2 grid of info cards (Office, Phone, etc.)
//   - Social media icons row
//
// Fully independent — drop it anywhere.
// Update your real details in the DATA section below.
// ============================================

import { CONTACT_INFO_CARDS, SOCIALS } from '../data/myData'
import '../styles/ContactInfo.css'

// ── UPDATE YOUR DETAILS HERE ─────────────────
const INFO_CARDS = CONTACT_INFO_CARDS


// ────────────────────────────────────────────
function ContactInfo() {
    return (

        <div className="contact-info">

            {/* ── Heading ── */}
            <div className="contact-info__heading-wrap">
                <p className="section-label">Get In Touch</p>
                <h2 className="contact-info__heading">
                    Don't hesitate to <span className="accent">contact us</span>
                </h2>
                <p className="contact-info__subtext">
                    Have a project in mind, a question, or just want to say hi?
                    Fill out the form or reach me through any of the channels below.
                </p>
            </div>

            {/* ── 2×2 Info cards grid ── */}
            {/*
        We loop over INFO_CARDS and render each one.
        iconBg and iconColor are set inline from the data above.
      */}
            <div className="contact-info__cards">
                {INFO_CARDS.map((card) => (
                    <div key={card.id} className="contact-info__card">
                        {/* Icon circle */}
                        <div
                            className="contact-info__card-icon"
                            style={{
                                backgroundColor: card.iconBg,
                                color: card.iconColor,
                            }}
                        >
                            {card.icon}
                        </div>
                        {/* Text */}
                        <div className="contact-info__card-text">
                            <span className="contact-info__card-label">{card.label}</span>
                            <span className="contact-info__card-value">{card.value}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Social media row ── */}
            <div className="contact-info__social">
                <span className="contact-info__social-label">Social Media</span>
                <div className="contact-info__social-icons">
                    {SOCIALS.map((s) => (
                        <a
                            key={s.id}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-info__social-btn"
                            aria-label={s.label}
                            title={s.label}
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ContactInfo