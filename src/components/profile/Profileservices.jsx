// ============================================
// ProfileServices.jsx — Services I Offer
// ============================================
// ✏️ Edit SERVICES_DATA to match your real services.
// Each card shows: icon, title, description,
// list of deliverables, and a starting price.
// ============================================

import '../../styles/profile/Profileservices.css'

// ── ✏️ YOUR SERVICES — edit/add/remove ───────
const SERVICES_DATA = [
  {
    id: 'svc-01',
    icon: '💻',
    title: 'Front End Design',
    description:
      'Clean, fast, responsive websites and web applications built from scratch — or on top of existing platforms.',
    deliverables: [
      'Responsive design (mobile + desktop)',
      'React / HTML / CSS / JavaScript',
      'REST API integration',
      'Performance optimisation',
      'Deployment & hosting setup',
    ],
    startingPrice: 'From $500',
    accent: 'var(--color-accent)',  // amber
  },
  {
    id: 'svc-02',
    icon: '</>',
    title: 'Back-End Development',
    description:
      'APIs, Databases, Auth, Payments, Cloud Deployments, Hosting - secure, fast, solid and architecture all built to handle real traffic without breaking',
    deliverables: [
      'Responsive design (mobile + desktop)',
      'Django / Nodejs / Python / PostgreSQL / Stripe / WebSockets',
      'REST API integration',
      'Performance optimisation',
      'Deployment & hosting setup',
    ],
    startingPrice: 'From $500',
    accent: 'var(--color-accent)',  // amber
  },
  {
    id: 'svc-03',
    icon: '🎨',
    title: 'Brand Identity Design',
    description:
      'Full brand identity systems — logo, colour palette, typography, and brand guidelines that make your business memorable.',
    deliverables: [
      'Logo design (primary + variations)',
      'Colour palette & typography',
      'Brand guidelines document',
      'Business card & letterhead',
      'Social media kit',
    ],
    startingPrice: 'From $300',
    accent: '#a78bfa',  // purple
  },
  // {
  //   id: 'svc-03',
  //   icon: '📐',
  //   title: 'UI/UX Design',
  //   description:
  //     'User-centred interface design for websites and apps — wireframes, prototypes, and polished high-fidelity screens.',
  //   deliverables: [
  //     'User research & wireframing',
  //     'High-fidelity Figma mockups',
  //     'Interactive prototype',
  //     'Design system / component library',
  //     'Handoff-ready assets',
  //   ],
  //   startingPrice: 'From $400',
  //   accent: '#4ade80',  // green
  // },
  {
    id: 'svc-04',
    icon: '🖼️',
    title: 'Graphics & Print Design',
    description:
      'Posters, flyers, banners, social media graphics, and any print material — designed to communicate and captivate.',
    deliverables: [
      'Event posters & flyers',
      'Social media graphics',
      'Banners (digital & print)',
      'Illustrations',
      'Print-ready files (PDF, AI)',
    ],
    startingPrice: 'From $100',
    accent: '#fb923c',  // orange
  },
]

// ────────────────────────────────────────────
function ProfileServices() {
  return (
    <section className="profile-services section" id="services">
      <div className="container">

        <div className="profile-services__header">
          <p className="section-label">What I Do</p>
          <h2 className="section-title">
            Services <span className="accent">Offered</span>
          </h2>
          <p className="profile-services__subtitle">
            End-to-end creative and technical services — from first concept to final delivery.
          </p>
        </div>

        <div className="profile-services__grid">
          {SERVICES_DATA.map((svc) => (
            <article
              key={svc.id}
              className="svc-card"
              style={{ '--svc-accent': svc.accent }}
            >
              {/* Icon */}
              <div className="svc-card__icon-wrap">
                <span className="svc-card__icon" aria-hidden="true">
                  {svc.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="svc-card__title">{svc.title}</h3>

              {/* Description */}
              <p className="svc-card__description">{svc.description}</p>

              {/* Deliverables list */}
              <ul className="svc-card__list">
                {svc.deliverables.map((item) => (
                  <li key={item} className="svc-card__list-item">
                    {/* Amber check dot */}
                    <span className="svc-card__list-dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Footer: starting price */}
              {/* <div className="svc-card__footer">
                <span className="svc-card__price">{svc.startingPrice}</span>
                <span className="svc-card__enquire">Get a quote →</span>
              </div> */}

              {/* Top accent border */}
              <div className="svc-card__top-border" aria-hidden="true" />

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProfileServices