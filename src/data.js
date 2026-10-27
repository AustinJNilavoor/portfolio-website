/* ------------------------------------------------------------------
   All static content for the site lives here.
   Icon names must exist in components/Icon.jsx
   ------------------------------------------------------------------ */

export const PROFILE = {
  name: "Austin J Nilavoor",
  initials: "AJ",
  title: "SOFTWARE ENGINEER",
  greeting: "Hello, I'm Austin",
  availability: "OPEN TO OPPORTUNITIES",
  email: "austin@example.com",
  imageAlt: "Austin J Nilavoor, Software Engineer in modern technical workspace",
  lead:
    "I build reliable digital solutions and turn complex problems into simple experiences. Bridging mobile applications, backend systems, and embedded hardware through thoughtful engineering.",
};

/* `to` = router link, `href` = in-page anchor */
export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const ROLES = [
  "I'm a Software Engineer.",
  "I'm a Full-Stack Developer.",
  "I'm an Embedded Systems Enthusiast.",
  "I'm a Mobile Application Developer.",
];

export const SOCIALS = [
  { label: "GitHub Profile", icon: "terminal", href: "https://github.com", external: true },
  { label: "LinkedIn Profile", icon: "work", href: "https://linkedin.com", external: true },
  { label: "Email Austin", icon: "at", href: "mailto:austin@example.com" },
  { label: "Download Resume", icon: "description", href: "#" },
];

export const FLOATING = [
  { cls: "f1", icon: "phone", label: "CROSS-PLATFORM", value: "Flutter 3.x" },
  { cls: "f2", icon: "memory", label: "SYSTEMS", value: "C++ / Embedded" },
  { cls: "f3", icon: "layers", label: "ARCHITECTURE", value: "Clean Architecture" },
  { cls: "f4", icon: "database", label: "BACKEND", value: "Spring Boot / SQL" },
];

export const PILLARS = [
  { label: "APPLICATIONS", icon: "phone", title: "Mobile & Web", sub: "Cross-Platform Development" },
  { label: "BACKEND", icon: "dns", title: "APIs & Services", sub: "Application Architecture" },
  { label: "SYSTEMS", icon: "memory", title: "Software + Hardware", sub: "Embedded Engineering" },
  { label: "ENGINEERING", icon: "layers", title: "End to End", sub: "From Design to Delivery" },
];

export const FOOTER = {
  status: "STATUS // SYS_ONLINE · OPEN FOR CONTRACTS",
  copy: "© 2024 Austin J Quick. Quiet software engineering & systems architecture.",
  links: [
    { label: "GitHub", icon: "terminal", href: "https://github.com", external: true },
    { label: "LinkedIn", icon: "work", href: "https://linkedin.com", external: true },
    { label: "Email", icon: "at", href: "mailto:austin@example.com" },
  ],
};
