// ============================================
// projectsData.js — Single Source of Truth
// ============================================
// All your projects live here.
// Import this file wherever you need to show
// projects — Home preview, WebProjects page,
// GraphicsWork page.
//
// TO ADD A PROJECT:
//   1. Copy one of the objects below
//   2. Paste it at the end of the right array
//   3. Fill in your real details
//   4. Put your screenshot in /public/projects/
//
// FIELDS:
//   id          — unique key (never change once set)
//   title       — project name
//   description — one or two sentences
//   image       — path from /public e.g. "/projects/my-site.jpg"
//                 leave as null to show a placeholder
//   tags        — tools, languages, or software used
//   liveUrl     — full URL to live site / Behance / Dribbble
//                 leave as null to show "Coming soon"
//   featured    — true = show on Home page preview
// ============================================

// ── WEB PROJECTS ────────────────────────────
export const webProjects = [
  {
    id: 'web-01',
    title: 'Project Alpha',
    description:
      'A full-stack web application with user authentication, dashboard, and real-time data updates.',
    image: "/img5.jpg",  // replace with "/projects/alpha.jpg"
    tags: ['React', 'Node.js', 'CSS', 'REST API'],
    liveUrl: null,  // replace with "https://your-project.com"
    featured: true,
  },
  {
    id: 'web-02',
    title: 'Landing Page — Studio',
    description:
      'Clean marketing landing page for a creative studio. Scroll animations, responsive layout.',
    image: null,
    tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    liveUrl: null,
    featured: true,
  },
  {
    id: 'web-03',
    title: 'E-Commerce Store',
    description:
      'Fully functional online store with cart, checkout flow, and product filtering.',
    image: null,
    tags: ['React', 'Tailwind', 'Stripe', 'Firebase'],
    liveUrl: null,
    featured: true,
  },
  {
    id: 'web-04',
    title: 'Portfolio Template',
    description:
      'A minimal portfolio template built for designers and developers. Dark mode only.',
    image: null,
    tags: ['React', 'CSS', 'Vite'],
    liveUrl: null,
    featured: false,  // not on home — only on /web-projects
  },
]

// ── GRAPHICS / DESIGN PROJECTS ──────────────
export const graphicsProjects = [
  {
    id: 'gfx-01',
    title: 'New Month Fyler - DeanMpire',
    description:
      'Brand New Month flyer for the month of March for DeanMpire',
    image: "/public/img6.jpg",
    tags: ['PhotoShop', 'Canvas', 'Branding', 'Social Media Ads'],
    liveUrl: null,  // link to Behance or Dribbble
    featured: true,
  },
  {
    id: 'gfx-02',
    title: 'Brand Flyer - Xlinks',
    description:
      'Brand Business Flyer for X-links',
    image: "/public/img7.jpg",
    tags: ['Photoshop', 'Illustrator', 'Print', 'Branding'],
    liveUrl: null,
    featured: true,
  },
  {
    id: 'gfx-03',
    title: 'Birthday Wish Design',
    description:
      'Birthday Wish.',
    image: '/img8.jpg',
    tags: ['FigmPhotoShop', 'Social Media',],
    liveUrl: null,
    featured: true,
  },
  {
    id: 'gfx-04',
    title: 'Program Flyer',
    description:
      'Social media Ads for a Church Program.',
    image: '/img9.jpg',
    tags: ['Canva Pro', 'PhotoShop', 'Social Media Ads'],
    liveUrl: null,
    featured: true,
  },
{
    id: 'gfx-05',
    title: 'Business Card',
    description:
      'Complimentry Card for Business.',
    image: '/img11.jpg',
    tags: ['Canva Pro', 'PhotoShop', 'Print'],
    liveUrl: null,
    featured: true,
  },
  {
    id: 'gfx-06',
    title: 'Social Media Flyer',
    description:
      'Social media Ads for a Brand.',
    image: '/img10.jpg',
    tags: ['Canva Pro', 'PhotoShop', 'Social Media Ads'],
    liveUrl: null,
    featured: true,
  },
  {
    id: 'gfx-07',
    title: 'Business Brand Ads',
    description:
      'Social media Ads for a Brand.',
    image: '/img12.jpg',
    tags: ['Canva Pro', 'PhotoShop', 'Social Media Ads'],
    liveUrl: null,
    featured: true,
  },
]