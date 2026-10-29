
export const projectsData = {
  label: "04 / SELECTED WORK",

  heading: "Featured engineering projects.",

  subtitle:
    "Real-world applications showcasing clean code architecture, defensive persistence, and production-tested user interfaces.",

  filters: ["All", "Mobile", "Full-Stack", "Backend"],

  projects: [
    // ==================================================
    // 1. PERSONAL FINANCE & WALLET APP
    // ==================================================

    {
      id: "wallet",
      hasdemo: false,

      title: "Personal Finance & Wallet App",
      category: "Mobile",
      kind: "Mobile application",

      summary:
        "Offline-first personal finance tracker built with a local Hive storage engine.",

      description:
        "Offline-first personal finance tracker featuring multi-wallet management, transaction tracking, dynamic categorization, transfer verification, and a clean mobile interface.",

      highlights: [
        "Local transaction persistence with Hive",
        "Multi-wallet ledger management",
        "Dynamic spending category breakdowns",
        "Transaction categorization and tracking",
      ],

      stack: [
        "Flutter",
        "Dart",
        "Hive DB",
        "Android / iOS",
      ],

      links: [
        { label: "Live Demo", href: "#" },
        { label: "Source Code", href: "#" },
      ],

      preview: {
        type: "phone",
        title: "Total balance",
        balance: "₹48,250.00",

        rows: [
          {
            name: "Salary",
            amount: "+₹52,000",
            positive: true,
          },
          {
            name: "Groceries",
            amount: "−₹3,240",
            positive: false,
          },
          {
            name: "Transfer to Savings",
            amount: "−₹5,000",
            positive: false,
          },
        ],
      },

      demo: {
        slug: "wallet",

        name: "Personal Finance & Wallet App",

        description:
          "A personal finance application for managing wallets, tracking expenses, categorizing transactions, and monitoring spending.",

        status: "development",

        technologies: [
          "Flutter",
          "Dart",
          "Hive DB",
        ],

        links: {
          live: "#",
          source: "#",
        },

        preview: {
          type: "phone",
          title: "Total balance",
          balance: "₹48,250.00",

          rows: [
            {
              name: "Salary",
              amount: "+₹52,000",
              positive: true,
            },
            {
              name: "Groceries",
              amount: "−₹3,240",
              positive: false,
            },
            {
              name: "Transfer to Savings",
              amount: "−₹5,000",
              positive: false,
            },
          ],
        },
      },
    },

    // ==================================================
    // 2. NUCLEUS PM & SPRINT TRACKER
    // Demo slug: projecttracker
    // ==================================================

    {
      id: "nucleus",
      hasdemo: true,

      title: "Nucleus PM & Sprint Tracker",
      category: "Full-Stack",
      kind: "Full-stack application",

      summary:
        "Enterprise initiative management suite with Kanban pipelines and sprint tracking.",

      description:
        "A project management application for managing teams, projects, milestones, and tasks with role-based access control. Built with a React frontend, Spring Boot backend, and PostgreSQL database.",

      highlights: [
        "Interactive Kanban task management",
        "Project and milestone tracking",
        "Role-based access control",
        "Team and task management",
      ],

      stack: [
        "React 18",
        "Spring Boot",
        "PostgreSQL",
        "Tailwind",
      ],

      links: [
        {
          label: "Live Demo",
          href: "http://localhost:5173/projectdemo/nucleus",
        },
        {
          label: "Frontend Source Code",
          href: "https://github.com/Austin/Project_Tracker_Frontend",
        },
        {
          label: "Backend Source Code",
          href: "https://github.com/Austin/Project_Tracker_Backend",
        },
      ],

      preview: {
        type: "kanban",

        columns: [
          {
            title: "To do",
            cards: ["Auth flow", "Role editor"],
          },
          {
            title: "In progress",
            cards: ["Sprint chart", "Task API"],
          },
          {
            title: "Done",
            cards: ["DB schema"],
          },
        ],
      },

      // All Project Tracker demo settings stay here.
      demo: {
        slug: "projecttracker",

        name: "Project Tracker",

        description:
          "A project management application for managing teams, projects, milestones, and tasks with role-based access control.",

        status: "live",

        technologies: [
          "React",
          "Spring Boot",
          "PostgreSQL",
        ],

        links: {
          frontend:
            "https://github.com/Austin/Project_Tracker_Frontend",

          backend:
            "https://github.com/Austin/Project_Tracker_Backend",

          live:
            "https://austin.github.io/Project_Tracker_Frontend",
        },

        slowLoadWarning: {
          show: true,

          message:
            "This app is hosted on a free service, so the first load may take 30 - 60 seconds while the server wakes up. Please be patient.",
        },

        credentials: [
          {
            role: "Admin",
            description:
              "Full access to manage the application",
            email: "admin@projecttracker.com",
            password: "admin123",
          },
          {
            role: "Manager",
            description:
              "Can manage projects and team members",
            email: "manager@projecttracker.com",
            password: "manager123",
          },
          {
            role: "Employee",
            description:
              "Can view assigned projects and update tasks",
            email: "employee@projecttracker.com",
            password: "employee123",
          },
        ],

        preview: {
          type: "kanban",

          columns: [
            {
              title: "To do",
              cards: ["Create project", "Assign tasks"],
            },
            {
              title: "In progress",
              cards: ["Track milestones"],
            },
            {
              title: "Done",
              cards: ["User authentication"],
            },
          ],
        },
      },
    },

    // ==================================================
    // 3. TUITION MANAGEMENT SYSTEM
    // ==================================================

    {
      id: "tuition",
      hasdemo: false,

      title: "Tuition Management System",
      category: "Mobile",
      kind: "Mobile application",

      summary:
        "Mobile platform for tutoring academies with batch scheduling and automated reminders.",

      description:
        "A mobile platform designed for tutoring academies and educational programs. Supports batch scheduling, fee management, receipt generation, and automated SMS and push reminders with synchronization across multiple tutor accounts.",

      highlights: [
        "Batch and student management",
        "Fee tracking and receipt generation",
        "SMS and push notifications",
        "Firebase-backed synchronization",
      ],

      stack: [
        "Flutter",
        "Firebase",
        "Firestore",
        "Cloud Messaging",
      ],

      links: [
        { label: "View Details", href: "http://localhost:5173/projectdemo/tuition" },
        { label: "Source Code", href: "#" },
      ],

      preview: {
        type: "ledger",
        title: "Academic ledger",
        status: "Synced",

        stats: [
          { label: "Enrolled", value: "1,420" },
          { label: "Collected", value: "98.4%" },
        ],
      },

      demo: {
        slug: "tuition",

        name: "Tuition Management System",

        description:
          "A tuition management application for handling students, teachers, batches, fee collection, and notifications.",

        status: "development",

        technologies: [
          "Flutter",
          "Firebase",
          "Firestore",
          "Firebase Cloud Messaging",
        ],

        links: {
          live: "#",
          source: "#",
        },

        preview: {
          type: "ledger",
          title: "Academic ledger",
          status: "Synced",

          stats: [
            { label: "Enrolled", value: "1,420" },
            { label: "Collected", value: "98.4%" },
          ],
        },
      },
    },

    // ==================================================
    // 4. VENDOR ONBOARDING PLATFORM
    // ==================================================

    {
      id: "vendor",
      hasdemo: false,

      title: "Vendor Onboarding Platform",
      category: "Backend",
      kind: "Backend system",

      summary:
        "Asynchronous supplier registration engine for enterprise compliance validation.",

      description:
        "An asynchronous vendor onboarding system that uses message queues to process supplier registration and third-party verification requests. Designed to decouple processing stages and maintain persistent records and audit trails.",

      highlights: [
        "Asynchronous processing with RabbitMQ",
        "Third-party verification integration",
        "Persistent vendor records",
        "Audit logging for verification workflows",
      ],

      stack: [
        "Spring Boot",
        "RabbitMQ",
        "PostgreSQL",
        "Docker",
      ],

      links: [
        { label: "View Architecture", href: "http://localhost:5173/projectdemo/vendor" },
        { label: "Source Code", href: "#" },
      ],

      preview: {
        type: "pipeline",
        title: "Pipeline route",
        status: "Queue: 0 msg",

        stages: [
          { label: "Ingest", value: "REST API" },
          { label: "Router", value: "RabbitMQ" },
          { label: "Persist", value: "PostgreSQL" },
        ],

        progress: 80,
      },

      demo: {
        slug: "vendor",

        name: "Vendor Onboarding Platform",

        description:
          "An asynchronous vendor registration and verification system with message-driven processing, persistent storage, and audit tracking.",

        status: "development",

        technologies: [
          "Spring Boot",
          "RabbitMQ",
          "PostgreSQL",
          "Docker",
        ],

        links: {
          live: "#",
          source: "#",
        },

        preview: {
          type: "pipeline",
          title: "Pipeline route",
          status: "Queue: 0 msg",

          stages: [
            { label: "Ingest", value: "REST API" },
            { label: "Router", value: "RabbitMQ" },
            { label: "Persist", value: "PostgreSQL" },
          ],

          progress: 80,
        },
      },
    },

    // ==================================================
    // 5. FACTORY INSPECTION MANAGEMENT SYSTEM
    // ==================================================

    {
      id: "inspection",
      hasdemo: false,

      title: "Factory Inspection Management System",
      category: "Mobile",
      kind: "Mobile application",

      summary:
        "Digital inspection platform for recording factory quality checks and tracking defects.",

      description:
        "A factory inspection application designed to help inspection teams record quality checks, manage inspection reference data, track defects, and monitor inspection activity across production shifts.",

      highlights: [
        "Digital inspection record management",
        "Master data for bays, customers, and components",
        "Inspection and defect classification",
        "Shift-based inspection tracking",
        "Role-based access for administrators and supervisors",
      ],

      stack: [
        "Flutter",
        "Firebase",
        "Cloud Firestore",
        "Firebase Authentication",
      ],

      links: [
        { label: "View Details", href: "http://localhost:5173/projectdemo/inspection" },
        { label: "Source Code", href: "#" },
      ],

      preview: {
        type: "inspection",

        title: "Inspection overview",

        status: "Monitoring",

        stats: [
          { label: "Inspections", value: "128" },
          { label: "Pending", value: "12" },
        ],
      },

      demo: {
        slug: "inspection",

        name: "Factory Inspection Management System",

        description:
          "A role-based inspection application for factory administrators and supervisors to manage master data, record inspections, and monitor quality activity.",

        status: "development",

        technologies: [
          "Flutter",
          "Firebase",
          "Cloud Firestore",
          "Firebase Authentication",
        ],

        links: {
          live: "#",
          source: "#",
        },

        preview: {
          type: "inspection",

          title: "Inspection overview",

          status: "Monitoring",

          stats: [
            { label: "Inspections", value: "128" },
            { label: "Pending", value: "12" },
          ],
        },
      },
    },

    // ==================================================
    // 6. SCORE KEEPER
    // ==================================================

    {
      id: "scorekeeper",
      hasdemo: false,

      title: "Score Keeper",
      category: "Mobile",
      kind: "Mobile application",

      summary:
        "A lightweight mobile application for tracking scores during games and friendly competitions.",

      description:
        "A simple score-tracking application designed to help users maintain scores during games and friendly competitions through a clear interface and quick score updates.",

      highlights: [
        "Quick score updates",
        "Clear score visualization",
        "Simple mobile-first interface",
        "Convenient score tracking during games",
      ],

      stack: [
        "Flutter",
        "Dart",
      ],

      links: [
        { label: "View Details", href: "#" },
        { label: "Source Code", href: "#" },
      ],

      preview: {
        type: "scoreboard",

        title: "Match scoreboard",

        players: [
          { name: "Player A", score: 24 },
          { name: "Player B", score: 18 },
        ],
      },

      demo: {
        slug: "scorekeeper",

        name: "Score Keeper",

        description:
          "A lightweight score-tracking application for recording and displaying scores during games and competitions.",

        status: "development",

        technologies: [
          "Flutter",
          "Dart",
        ],

        links: {
          live: "#",
          source: "#",
        },

        preview: {
          type: "scoreboard",

          title: "Match scoreboard",

          players: [
            { name: "Player A", score: 24 },
            { name: "Player B", score: 18 },
          ],
        },
      },
    },
  ],
};
export const hardwareProjectsData = {
  groupTitle: "Hardware",
  projects: [
    {
      id: "energy-meter",
      kind: "IoT device · 2025",
      title: "Smart Energy Meter",
      summary: "ESP32 based meter that reports power usage in real time.",
      description:
        "A compact energy monitor that measures voltage, current and power factor, then streams readings to a dashboard over Wi-Fi.",
      highlights: [
        "Real-time power and units tracking",
        "MQTT publishing to a cloud dashboard",
        "Over-the-air firmware updates",
        "Overload cut-off relay",
      ],
      stack: ["ESP32", "C++", "MQTT", "KiCad"],
      links: [
        { label: "Schematic", href: "#" },
        { label: "Firmware", href: "#" },
      ],
      preview: {
        type: "board",
        title: "EM-01 rev B",
        chip: "ESP32",
        pins: ["3V3", "GND", "SDA", "SCL", "TX", "RX", "IO4", "IO5"],
        leds: [
          { label: "PWR", on: true },
          { label: "WiFi", on: true },
          { label: "ERR", on: false },
        ],
      },
    },
    {
      id: "line-robot",
      kind: "Robotics · 2024",
      title: "Line Follower Robot",
      summary: "PID controlled robot that tracks a line at speed.",
      description:
        "A two-wheel robot using an IR sensor array and a tuned PID loop to follow tracks, handle sharp turns and recover from lost lines.",
      highlights: [
        "8-channel IR sensor array",
        "Tuned PID control loop",
        "Bluetooth tuning from phone",
        "Custom 2-layer PCB",
      ],
      stack: ["Arduino", "C", "PID", "Eagle"],
      links: [
        { label: "Build log", href: "#" },
        { label: "Source", href: "#" },
      ],
      preview: {
        type: "telemetry",
        title: "Robot telemetry",
        status: "Live",
        channels: [
          { label: "Speed", value: "0.8 m/s", level: 72 },
          { label: "Line error", value: "0.4 cm", level: 18 },
          { label: "Battery", value: "7.6 V", level: 85 },
        ],
      },
    },
    {
      id: "weather-node",
      kind: "Embedded · 2024",
      title: "LoRa Weather Node",
      summary: "Solar powered weather station with long range radio.",
      description:
        "A low power outdoor node reading temperature, humidity and pressure, sending data kilometres away over LoRa.",
      highlights: [
        "Months of battery life with deep sleep",
        "LoRa link up to 3 km",
        "Solar charging circuit",
        "3D printed weatherproof case",
      ],
      stack: ["STM32", "LoRa", "BME280", "Fusion 360"],
      links: [
        { label: "Schematic", href: "#" },
        { label: "Case files", href: "#" },
      ],
      preview: {
        type: "board",
        title: "WX-02 rev A",
        chip: "STM32L0",
        pins: ["VCC", "GND", "MOSI", "MISO", "SCK", "NSS", "DIO0", "RST"],
        leds: [
          { label: "PWR", on: true },
          { label: "TX", on: false },
          { label: "CHG", on: true },
        ],
      },
    },
    {
      id: "motor-driver",
      kind: "Power electronics · 2023",
      title: "Dual Motor Driver",
      summary: "10A H-bridge board with current sensing.",
      description:
        "A dual channel motor driver with onboard current sensing and thermal protection for hobby robotics and small automation.",
      highlights: [
        "10A per channel continuous",
        "Current and temperature feedback",
        "3.3V and 5V logic compatible",
        "Reverse polarity protection",
      ],
      stack: ["MOSFETs", "Analog design", "Altium"],
      links: [
        { label: "Gerbers", href: "#" },
        { label: "Datasheet", href: "#" },
      ],
      preview: {
        type: "telemetry",
        title: "Driver status",
        status: "Idle",
        channels: [
          { label: "Motor A", value: "3.2 A", level: 32 },
          { label: "Motor B", value: "5.1 A", level: 51 },
          { label: "Temp", value: "46 °C", level: 46 },
        ],
      },
    },
  ],
};

// ==================================================
// Project Lookup Helpers
// ==================================================

/**
 * Retrieve a project using its portfolio ID.
 *
 * Examples:
 * getProject("nucleus")
 * getProject("wallet")
 * getProject("inspection")
 */
export function getProject(id) {
  if (!id) {
    return null;
  }

  const normalizedId = id.toLowerCase();

  return (
    projectsData.projects.find(
      (item) => item.id.toLowerCase() === normalizedId
    ) ?? null
  );
}

/**
 * Retrieve a complete project using its demo slug.
 *
 * Returns the full project object, including portfolio
 * information and its nested demo configuration.
 *
 * Examples:
 * getProjectDemo("projecttracker")
 * getProjectDemo("wallet")
 * getProjectDemo("inspection")
 */
export function getProjectDemo(slug) {
  if (!slug) {
    return null;
  }

  const normalizedSlug = slug.toLowerCase();

  return (
    projectsData.projects.find(
      (item) =>
        item.hasdemo === true &&
        item.id?.toLowerCase() === normalizedSlug
    ) ?? null
  );
}

/**
 * Retrieve only the nested demo configuration.
 *
 * Example:
 * getProjectDemoConfig("projecttracker")
 */
export function getProjectDemoConfig(slug) {
  return getProjectDemo(slug)?.demo ?? null;
}