// Single source of truth for identity + links. Edit here — everything reads from this.
export const site = {
  name: "Nishchal Bisen",
  initials: "NB",
  role: "Graphic Designer & Art Director",
  location: "Bhopal, India",
  since: "2021", // TODO: confirm start year
  email: "nishchalbisen02@gmail.com",
  available: true,
  availableLabel: "Available for freelance & full-time",
  tagline:
    "I build brand identities, posters and editorial systems with a bias for bold type, strict grids, and ideas that read from across the room.",
  bio: [
    "Nishchal Bisen is a graphic designer and art director based in Bhopal, India. He works end to end — naming, logo and wordmark design, typography, layout, and art direction for photoshoots — and hands off production-ready files.",
    "Recent work spans dance-film audition campaigns, construction and real-estate brands, F&B identities, editorial layouts, and his own studio practice, FRIMFLIX.",
  ],
  socials: [
    { label: "Instagram", handle: "@nissdzgin", href: "https://instagram.com/nissdzgin" },
    { label: "Behance", handle: "nishchalbisen", href: "https://behance.net/nishchalbisen" }, // TODO: confirm
    { label: "LinkedIn", handle: "Nishchal Bisen", href: "https://linkedin.com/in/nishchalbisen" }, // TODO: confirm
    { label: "Email", handle: "nishchalbisen02@gmail.com", href: "mailto:nishchalbisen02@gmail.com" },
  ],
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  capabilities: [
    "Brand Identity",
    "Logo & Wordmarks",
    "Poster & Campaign",
    "Editorial & Layout",
    "Packaging",
    "Art Direction",
    "Typesetting",
    "Web / UI",
  ],
  tools: ["Illustrator", "Photoshop", "InDesign", "Figma", "Blender", "After Effects"],
  clients: [
    "FRIMFLIX",
    "The Great Natraj Dance Company",
    "Sukhmani Constructions",
    "Haathi Homes",
    "Urvaram",
    "Just One Bite",
    "The Smile Diary",
  ],
};

export type Site = typeof site;
