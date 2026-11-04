/* ------------------------------------------------------------------
   All static content for the site lives here.
   Icon names must exist in components/Icon.jsx
   ------------------------------------------------------------------ */

export const PROFILE = {
  name: "Austin J Nilavoor",
  initials: "AJ",
  title: "SOFTWARE ENGINEER",
  greeting: "Hello, I'm ",
  availability: "OPEN TO OPPORTUNITIES",
  email: "austinjnilavoor1@gmail.com",
  imageAlt: "Austin J Nilavoor, Software Engineer in modern technical workspace",
  lead:
    "I build reliable digital solutions and turn complex problems into simple experiences. Bridging mobile applications, backend systems, and embedded hardware through thoughtful engineering.",
};

/* `to` = router link, `href` = in-page anchor */
export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", href: "#experience" },
];

export const ROLES = [
  "I'm a Software Engineer.",
  "I'm a Full-Stack Developer.",
  "I'm an Embedded Systems Enthusiast.",
  "I'm a Mobile Application Developer.",
];

export const SOCIALS = [
  { label: "GitHub Profile", icon: "terminal", href: "https://github.com/AustinJNilavoor", external: true },
  { label: "LinkedIn Profile", icon: "work", href: "https://in.linkedin.com/in/austinjnilavoor", external: true },
  { label: "Email Austin", icon: "at", href: "mailto:austinjnilavoor1@gmail.com" },
  { label: "Download Resume", icon: "description", href: "#" },
];

export const FLOATING = [
  { cls: "f1", icon: "phone", label: "CROSS-PLATFORM", value: "Flutter 3.x" },
  { cls: "f2", icon: "memory", label: "SYSTEMS", value: "C++ / Embedded" },
  { cls: "f3", icon: "layers", label: "ARCHITECTURE", value: "Clean Architecture" },
  { cls: "f4", icon: "database", label: "BACKEND", value: "Spring Boot / SQL" },
];

export const PILLARS = [
  { label: "EXPERIENCE", icon: "phone", title: "1+", sub: "Years" },
  { label: "FREELANCE", icon: "dns", title: "4+", sub: "Projects Delivered" },
  { label: "CORE STACK", icon: "memory", title: "JAVA", sub: "Flutter C++" },
  { label: "CURRENT FOCUS", icon: "layers", title: "DSA", sub: "Problem Solving" },
];

export const FOOTER = {
  status: "STATUS // SYS_ONLINE · OPEN FOR CONTRACTS",
  copy: "© 2026 Austin J Nilavoor. All rights reserved.",
  links: [
    { label: "GitHub", icon: "terminal", href: "https://github.com", external: true },
    { label: "LinkedIn", icon: "work", href: "https://linkedin.com", external: true },
    { label: "Email", icon: "at", href: "mailto:austin@example.com" },
  ],
};


// About page content

// data.js — all content for the About and Skills sections lives here.
// Edit text, add/remove items, or swap icons without touching the components.

// Inline SVG icon paths (24x24 viewBox, stroke-based). No external icon fonts needed.
// export const icons = {
//   tune: [
//     "M4 21v-7", "M4 10V3", "M12 21v-9", "M12 8V3", "M20 21v-5", "M20 12V3",
//     "M1 14h6", "M9 8h6", "M17 16h6",
//   ],
//   shield: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", "M9 12l2 2 4-4"],
//   speed: ["M12 14l4-4", "M3.34 19a10 10 0 1 1 17.32 0"],
//   devices: [
//     "M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",
//     "M12 18h.01",
//   ],
//   server: [
//     "M4 3h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
//     "M4 13h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z",
//     "M6 7h.01", "M6 17h.01",
//   ],
//   hub: [
//     "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
//     "M12 2v7", "M12 15v7", "M3 7l6 3.5", "M21 7l-6 3.5", "M3 17l6-3.5", "M21 17l-6-3.5",
//   ],
//   terminal: ["M4 17l6-6-6-6", "M12 19h8"],
// };

export const aboutData = {
  label: "01 / ABOUT",
  heading: "Engineering practical solutions, from interface to infrastructure.",
  paragraphs: [
    "Good engineering isn't just about making things work—it's about understanding why they work and ensuring they continue to work under pressure. My background bridges user-facing interfaces with low-level systems, giving me a rare perspective on how decisions in front-end architecture affect memory constraints, network overhead, and server performance.",
    "Whether architecting distributed enterprise messaging pipelines or implementing fluid 120Hz client interactions on mobile devices, I value clarity, precision, and code that teammates genuinely enjoy working with. Every component is built with rigorous error states, self-documenting structures, and predictable lifetimes.",
  ],
  principles: [
    { icon: "tune", title: "Zero Fluff", text: "Purposeful mechanics" },
    { icon: "shield", title: "Defensive Code", text: "Graceful failure states" },
    { icon: "speed", title: "High Cadence", text: "Lean build cycles" },
  ],
  focusAreas: [
    {
      number: "01",
      title: "Mobile Development",
      description:
        "Native performance with Flutter & Dart. State management with Riverpod, offline-first local cache schemas, and custom rendering pipelines.",
    },
    {
      number: "02",
      title: "Backend Engineering",
      description:
        "High-throughput microservices using Spring Boot, Java, and PostgreSQL. Asynchronous task orchestrations and resilient message queues.",
    },
    {
      number: "03",
      title: "Embedded Systems",
      description:
        "Low-level firmware in modern C++, register manipulation, hardware communication buses (I2C, SPI, UART), and RTOS task profiling.",
    },
    {
      number: "04",
      title: "Integration Engineering",
      description:
        "Enterprise middleware design, SAP Integration Suite, API proxies, secure transformations, and event-driven data highways.",
    },
  ],
};
export const skillsData = {
  label: "03 / TOOLKIT",
  heading: "Tools I use to build things.",
  subtitle:
    "Technologies across application development, backend engineering, enterprise integration, embedded systems, and infrastructure.",

  categories: [
    {
      icon: "devices",
      title: "Application Development",
      description:
        "Cross-platform mobile applications and modern, responsive web interfaces.",
      tier: "Client Applications",
      skills: [
        "Flutter",
        "Dart",
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Provider / BLoC",
      ],
    },
    {
      icon: "server",
      title: "Backend & APIs",
      description:
        "Backend services, distributed architectures, and reliable API communication.",
      tier: "Core Services",
      skills: [
        "Java",
        "Spring Boot",
        "Microservices",
        "REST APIs",
        "GraphQL",
        "Node.js",
        "RabbitMQ",
      ],
    },
    {
      icon: "hub",
      title: "Integration Engineering",
      description:
        "Enterprise integration pipelines, message transformation, and system connectivity.",
      tier: "Enterprise Integration",
      skills: [
        "SAP Integration Suite",
        "MuleSoft",
        "API Proxies",
        "SOAP / WSDL",
        "JSON Schema",
      ],
    },
    {
      icon: "database",
      title: "Databases & Cloud",
      description:
        "Relational and NoSQL databases, cloud platforms, and application persistence.",
      tier: "Data & Infrastructure",
      skills: [
        "SQL",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Google Cloud",
        "Redis",
      ],
    },
    {
      icon: "memory",
      title: "Embedded Systems & Hardware",
      description:
        "Low-level programming, microcontrollers, hardware interfaces, and digital design.",
      tier: "Hardware & Firmware",
      skills: [
        "C",
        "C++",
        "Embedded C",
        "Arduino",
        "ESP32",
        "FreeRTOS",
        "SPI / I2C / UART",
        "Circuit & Schematic Design",
        "SystemVerilog",
        "Xilinx Vivado",
      ],
    },
    {
      icon: "terminal",
      title: "Systems & Development Tools",
      description:
        "Version control, Linux environments, development utilities, and design workflows.",
      tier: "Engineering Toolchain",
      skills: [
        "Git",
        "GitHub",
        "Linux CLI",
        "Bash",
        "Docker",
        "VS Code",
        "Postman",
        "Figma",
      ],
    },
    {
      icon: "hub",
      title: "Computer Science Fundamentals",
      description:
        "Problem-solving foundations, efficient algorithms, and object-oriented design.",
      tier: "Core Concepts",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
      ],
    },
  ],
};

// dataexp.js — content for the Experience section.
// Add a new object to `experiences` (newest first) to add another job to the timeline.

export const experienceData = {
  label: "02 / EXPERIENCE",
  heading: "Where I've worked.",
  subtitle:
    "Engineering roles focused on robust delivery, scalable microservice architectures, and cross-team integration.",
  experiences: [
    {
      company: "Tarento Technologies Pvt. Ltd.",
      role: "Associate Software Engineer",
      period: "OCT 2025 — PRESENT",
      location: "Bangalore, India",
      summary:
        "Spearheading integration-oriented software engineering for international client engagements. Architecting custom data ingestion pipelines utilizing SAP Integration Suite and MuleSoft, standardizing JSON schemas across legacy systems, and crafting resilient error-recovery workflows that reduced transaction failure rates by 34%.",
      tech: [
        "SAP Integration Suite",
        "Java / Spring",
        "MuleSoft",
        "REST API Design",
        "Git CI/CD",
      ],
    },
  ],
};