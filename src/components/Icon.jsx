/* Inline icons (no icon font / no external links) */
const ICONS = {
  description: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3M13 15h4" />
    </>
  ),
  work: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" />
    </>
  ),
  at: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  memory: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 4.5-9 4.5-9-4.5z" />
      <path d="m3 12 9 4.5 9-4.5M3 16.5l9 4.5 9-4.5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  dns: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
    devices: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),

  server: (
    <>
      <rect x="3" y="3" width="18" height="7" rx="2" />
      <rect x="3" y="14" width="18" height="7" rx="2" />
      <path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6" />
    </>
  ),

  hub: (
    <>
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="12" cy="4" r="1.5" />
      <circle cx="5" cy="16" r="1.5" />
      <circle cx="19" cy="16" r="1.5" />
      <path d="M12 6v3.5M10 13.5l-3.7 1.7M14 13.5l3.7 1.7" />
    </>
  ),

  memory: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </>
  ),

  fundamentals: (
    <>
      <path d="M12 3 14.5 8.5 21 9.5 16.5 14 17.5 21 12 18 6.5 21 7.5 14 3 9.5 9.5 8.5z" />
    </>
  ),

  code: (
    <>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
    </>
  ),

  cloud: (
    <>
      <path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9a4.5 4.5 0 0 0 1 9Z" />
    </>
  ),

  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>
  ),

  tools: (
    <>
      <path d="M14.5 6.5a5 5 0 0 0-6.8 6.8L3 18l3 3 4.7-4.7a5 5 0 0 0 6.8-6.8L14 13l-3-3z" />
    </>
  ),
  tune: (
<>
<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" />
<path d="M1 14h6M9 8h6M17 16h6" />
</>
),

shield: (
<>
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
<path d="m9 12 2 2 4-4" />
</>
),

speed: (
<>
<path d="m12 14 4-4" />
<path d="M3.34 19a10 10 0 1 1 17.32 0" />
</>
),

devices: (
<>
<rect x="3" y="2" width="18" height="20" rx="2" />
<path d="M12 18h.01" />
</>
),

server: (
<>
<rect x="2" y="3" width="20" height="8" rx="2" />
<rect x="2" y="13" width="20" height="8" rx="2" />
<path d="M6 7h.01M6 17h.01" />
</>
),

hub: (
<>
<circle cx="12" cy="12" r="3" />
<path d="M12 2v7M12 15v7M3 7l6 3.5M21 7l-6 3.5M3 17l6-3.5M21 17l-6-3.5" />
</>
),

terminal: (
<>
<path d="m4 17 6-6-6-6M12 19h8" />
</>
),
};

export default function Icon({ name, size = 18, className = "" }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}
