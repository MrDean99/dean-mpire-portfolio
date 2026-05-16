import { myData, SOCIALS } from "./myData";

// ── ✏️ YOUR DETAILS — update these ───────────
export const FOOTER_DATA = {
    name: myData.name,
    tagline: myData.tagline,
    whatsApp: myData.whatsApp,
    email: myData.email,
    phone: myData.phone,
    location: myData.location,

    // Nav columns
    navLinks: [
        { label: 'Home', to: '/' },
        { label: 'Profile', to: '/profile' },
        { label: 'Works', to: '/works' },
        { label: 'Web Projects', to: '/web-projects' },
        { label: 'Graphics', to: '/graphics' },
        { label: 'Contact', to: '/contact' },
    ],

    // Social links
    socials: SOCIALS
}