/**
 * Central profile / identity content.
 * Edit here — every component reads from this file.
 * Lines marked TODO are unconfirmed and safe to change.
 */

export type SocialLink = { label: string; value: string; href: string };
export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  current: boolean;
  summary: string;
  location?: string;
  url?: string;
};
export type SkillGroup = { group: string; items: string[] };

export const profile = {
  name: "Nishchal Bisen",
  initials: "NB",

  roleShort: "Creative Technologist",
  roleLong: "Web & Creative Designer · Frontend · UI/UX · Motion",

  positioning: "Technology × AI × Design × Visual Storytelling",
  statement:
    "I build digital experiences where technology, AI, design and visual storytelling meet.",

  location: "Bhopal, India",
  email: "nishchalbisen02@gmail.com",

  // Availability — keep factual. Empty string renders no status dot.
  statusNote: "Open to freelance & full-time", // TODO: confirm

  about: {
    whoIAm:
      "Nishchal Bisen is a multidisciplinary creative technologist based in Bhopal, India, working across technology, AI, design and visual storytelling. He builds digital products and interfaces, uses AI as a creative and technical medium, designs brand and visual systems, and directs cinematic visual content.",
    whatIDo:
      "Web design and development, UI/UX, frontend engineering, brand identity, motion and graphic design, AI-assisted product and visual workflows, and film / photography direction — often on the same project, end to end.",
    howIWork:
      "Concept first, then system. I move between code, design tools and AI to prototype fast, hold a tight visual language, and hand off production-ready work. Comfortable working solo or embedded in a team.",
    currentFocus:
      "AI-assisted product design, cinematic brand content, and design systems for the web.", // TODO: adjust
  },

  experience: [
    {
      company: "Innovative Business Technologies (IBT)",
      role: "Technology, AI, Design & Digital Production",
      period: "2026 — Present", // TODO: confirm start date
      current: true,
      location: "Bhopal, India",
      summary:
        "Working across technology, AI, design, branding and digital production — building websites and interfaces, brand and marketing creative, AI solutions and commercial video, and IBT's own digital presence.",
    },
    {
      company: "Freelance",
      role: "UI/UX & Frontend Developer",
      period: "Jan 2024 — Present",
      current: true,
      summary:
        "Responsive websites in HTML, CSS, JavaScript, React, Next.js and Tailwind CSS. Reusable UI components, design systems and prototypes in Figma / Adobe XD. Branding, graphic design, marketing creative and social assets. 32+ projects with repeat engagements.",
    },
    {
      company: "AIshura",
      role: "Frontend & UI/UX Developer",
      period: "2025",
      current: false,
      url: "https://aishura.com", // TODO: confirm
      summary:
        "Led frontend development and UI/UX design for a career-assistant web platform — responsive, user-focused interfaces, with stakeholder collaboration on UX improvements.",
    },
  ] satisfies ExperienceItem[],

  education: {
    degree: "B.Tech — Computer Science & Information Technology",
    school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal",
    period: "2022 — 2026",
    note: "CGPA 6.82",
  },

  achievements: [
    "Finalist — Re-Imagine 2024 Hackathon",
    "32+ freelance projects delivered",
  ],

  skills: [
    {
      group: "Web Design & Development",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Responsive Design",
        "E-commerce",
        "Admin Panels",
      ],
    },
    {
      group: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "MongoDB (basic)"],
    },
    {
      group: "AI",
      items: [
        "AI Visual Creation",
        "AI-assisted Design",
        "AI Agents",
        "AI Automation",
        "AI Product Concepts",
        "AI Image & Video Generation",
        "AI Creative Workflows",
        "Prompt Engineering",
        "Vibe Coding",
      ],
    },
    {
      group: "Design & Branding",
      items: [
        "Brand Identity",
        "UI/UX",
        "Design Systems",
        "Typography",
        "Colour Systems",
        "Art Direction",
        "Marketing Creative",
        "Wireframing",
        "Prototyping",
        "User Research",
      ],
    },
    {
      group: "Content & Production",
      items: [
        "Film",
        "Commercials",
        "Video Production",
        "Photography",
        "Cinematic Visuals",
        "Visual Storytelling",
        "Creative Direction",
        "Motion Graphics",
      ],
    },
  ] satisfies SkillGroup[],

  tools: [
    "Figma",
    "Adobe XD",
    "Adobe Creative Suite",
    "VS Code",
    "Git & GitHub",
    "GSAP",
    "Framer Motion",
    "ChatGPT",
    "Claude",
    "Blender",
    "After Effects",
  ],

  socials: [
    { label: "Email", value: "nishchalbisen02@gmail.com", href: "mailto:nishchalbisen02@gmail.com" },
    { label: "GitHub", value: "nishchalbisen02", href: "https://github.com/nishchalbisen02" },
    { label: "Instagram", value: "@nissdzgin", href: "https://instagram.com/nissdzgin" },
    { label: "LinkedIn", value: "Nishchal Bisen", href: "https://linkedin.com/in/nishchalbisen" }, // TODO: confirm
    { label: "Behance", value: "nishchalbisen", href: "https://behance.net/nishchalbisen" }, // TODO: confirm
  ] satisfies SocialLink[],
} as const;

export type Profile = typeof profile;
