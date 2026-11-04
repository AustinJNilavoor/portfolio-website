/* =====================================================================
   PROJECT DATA

   TEMPLATE (copy for every new project)
   ---------------------------------------------------------------------
   {
     id: "unique-id",                 // list key + demo URL: /projectdemo/unique-id
     path: "/images/unique-id.png",   // list thumbnail (optional)
     kind: "Mobile application",      // small label above the title
     title: "Project title",
     summary: "One line shown in the list.",
     description: "Longer text shown in the detail panel.",
     highlights: ["Point one", "Point two"],
     stack: ["Tech 1", "Tech 2"],

     // first link = primary button. "/..." = in-app route, "http..." = new tab
     links: [
       { label: "View Details", href: "/projectdemo/unique-id" },
       { label: "Source Code", href: "#" },
     ],

     // ONE of: phone | kanban | ledger | pipeline | board | telemetry
     preview: { type: "ledger", title: "...", status: "...", stats: [{ label: "...", value: "..." }] },

     // OPTIONAL - only when the project has a demo page
     hasdemo: true,
     demo: {
       status: "live",                // live | development | offline
       links: { frontend: "", backend: "", live: "" },   // each optional
       slowLoadWarning: { show: true, message: "..." },  // optional
       credentials: [{ role: "", description: "", email: "", password: "" }], // optional
       // name, description and technologies are filled in automatically
       // from title, description and stack. Add them here only to override.
     },
   }

   PREVIEW SHAPES
     phone     : title, balance, rows[{ name, amount, positive }]
     kanban    : columns[{ title, cards[] }]
     ledger    : title, status, stats[{ label, value }]
     pipeline  : title, status, stages[{ label, value }], progress (0-100)
     board     : title, chip, pins[], leds[{ label, on }]
     telemetry : title, status, channels[{ label, value, level (0-100) }]
   ===================================================================== */

/* ---------------------------------------------------------------------
   SOFTWARE
   --------------------------------------------------------------------- */
import project1Image from "/images/project_images/projects.png";
import project2Image from "/images/project_images/wallet.jpg";
import project3Image from "/images/project_images/inspection.png";
import project4Image from "/images/project_images/score.png";
import project5Image from "/images/project_images/bill.png";
import project6Image from "/images/project_images/qa.png";
import project7Image from "/images/project_images/zed.jpg";
import project8Image from "/images/project_images/drone_1.jpg";
import project9Image from "/images/project_images/linefolo_1.jpg";
import project10Image from "/images/project_images/pidrone_1.jpg";
import project11Image from "/images/project_images/placeholder.png";
import project12Image from "/images/project_images/li-ion.png";
import project13Image from "/images/project_images/placeholder.png";
import project14Image from "/images/project_images/dimmer.jpg";
import project15Image from "/images/project_images/current.jpg";
import project16Image from "/images/project_images/eth.jpg";
import project17Image from "/images/project_images/placeholder.png";
import project18Image from "/images/project_images/placeholder.png";
import digitalLockImage from "/images/project_images/placeholder.png";

export const projectsData = {
  label: "04 / SELECTED WORK",

  heading: "Featured engineering projects.",
  subtitle:
    "Real-world applications showcasing clean code architecture, defensive persistence, and production-tested user interfaces.",
  groupTitle: "Software",

  projects: [
    {
      id: "nucleus",
      path: project1Image,
      kind: "Full-stack application",
      title: "Project Tracker",
      summary:
        "Role-based project management suite with Kanban boards and milestone tracking.",
      description:
        "A project management application for managing teams, projects, milestones and tasks with role-based access control (RBAC). Built with a React frontend, a Spring Boot REST backend and a PostgreSQL database.",
      highlights: [
        "Role-based access control for Admin, Manager and Employee",
        "Interactive Kanban task management",
        "Project and milestone tracking",
        "Team and task assignment",
      ],
      stack: ["React", "Spring Boot", "PostgreSQL", "Tailwind"],
      links: [
        { label: "View Details", href: "/projectdemo/nucleus" },
        {
          label: "Frontend Code",
          href: "https://github.com/Austin/Project_Tracker_Frontend",
        },
        {
          label: "Backend Code",
          href: "https://github.com/Austin/Project_Tracker_Backend",
        },
      ],
      preview: {
        type: "kanban",
        columns: [
          { title: "To do", cards: ["Auth flow", "Role editor"] },
          { title: "In progress", cards: ["Sprint chart", "Task API"] },
          { title: "Done", cards: ["DB schema"] },
        ],
      },
      hasdemo: true,
      demo: {
        status: "live",
        links: {
          frontend: "https://github.com/AustinJNilavoor/Project_Tracker_Frontend",
          backend: "https://github.com/AustinJNilavoor/Project_Tracker_Backend",
          live: "https://austinjnilavoor.github.io/Project_Tracker_Frontend",
        },
        slowLoadWarning: {
          show: true,
          message:
            "This app is hosted on a free service, so the first load may take 30 - 60 seconds while the server wakes up. Please be patient.",
        },
        credentials: [
          {
            role: "Admin",
            description: "Full access to manage the application",
            email: "admin@projecttracker.com",
            password: "admin123",
          },
          {
            role: "Manager",
            description: "Can manage projects and team members",
            email: "manager@projecttracker.com",
            password: "manager123",
          },
          {
            role: "Employee",
            description: "Can view assigned projects and update tasks",
            email: "employee@projecttracker.com",
            password: "employee123",
          },
        ],
      },
    },

    {
      id: "wallet",
      path: project2Image,
      kind: "Mobile application",
      title: "Wallet App",
      summary:
        "Offline-first finance tracker that builds transactions from bank SMS messages.",
      description:
        "A personal finance tracker with multi-wallet management and dynamic categories. It reads incoming bank SMS messages, parses the amount, merchant and type, and records the transaction automatically. All data is stored locally with Hive, so it works fully offline.",
      highlights: [
        "SMS parsing to create transactions automatically",
        "Multi-wallet ledger management",
        "Spending breakdown by category",
        "Local persistence with Hive",
      ],
      stack: ["Flutter", "Dart", "Hive DB", "SMS parsing"],
      links: [{ label: "Source Code", href: "https://github.com/AustinJNilavoor/wallet-v3" }],
      preview: {
        type: "phone",
        title: "Total balance",
        balance: "₹48,250.00",
        rows: [
          { name: "Salary", amount: "+₹52,000", positive: true },
          { name: "Groceries", amount: "−₹3,240", positive: false },
          { name: "Transfer to Savings", amount: "−₹5,000", positive: false },
        ],
      },
    },

    {
      id: "inspection",
      path: project3Image,
      kind: "Mobile application",
      title: "Factory Inspection App",
      summary:
        "Digital inspection app for recording factory quality checks and tracking defects.",
      description:
        "A role-based inspection application that helps administrators and supervisors manage master data, record inspections, classify defects and monitor quality activity across production shifts.",
      highlights: [
        "Digital inspection record management",
        "Master data for bays, customers and components",
        "Defect classification",
        "Shift-based inspection tracking",
        "Role-based access for administrators and supervisors",
      ],
      stack: ["Flutter", "Firebase", "Cloud Firestore", "Firebase Auth"],
      links: [{ label: "Source Code", href: "#" }],
      preview: {
        type: "ledger",
        title: "Inspection overview",
        status: "Monitoring",
        stats: [
          { label: "Inspections", value: "128" },
          { label: "Pending", value: "12" },
        ],
      },
    },

    {
      id: "scoretracker",
      path: project4Image,
      kind: "Mobile application",
      title: "Score Tracker",
      summary:
        "Add players and keep their scores during games and friendly matches.",
      description:
        "A lightweight score-tracking app where you add players, enter scores round by round and see the standings update instantly. Built for quick use during games with a simple mobile-first interface.",
      highlights: [
        "Add and remove players",
        "Quick score entry per player",
        "Live standings",
        "Simple mobile-first interface",
      ],
      stack: ["Flutter", "Dart"],
      links: [{ label: "Source Code", href: "https://github.com/AustinJNilavoor/Bill-Splitter" }],
      preview: {
        type: "ledger",
        title: "Match scoreboard",
        status: "Live",
        stats: [
          { label: "Player A", value: "24" },
          { label: "Player B", value: "18" },
        ],
      },
    },

    {
      id: "billsplitter",
      path: project5Image,
      kind: "Web application",
      title: "Bill Splitter",
      summary:
        "Add bill items, assign them to people and see who owes what.",
      description:
        "A React web app for splitting shared bills. Add each item on the bill, assign it to one or more people, and the app calculates every person's share automatically.",
      highlights: [
        "Add bill items with prices",
        "Assign each item to one or more people",
        "Automatic per-person totals",
        "Clean, responsive interface",
      ],
      stack: ["React", "JavaScript", "CSS"],
      links: [{ label: "Source Code", href: "https://github.com/AustinJNilavoor/Bill-Splitter" },
      { label: "Live", href: "https://austin-j-nilavoor.github.io/bill-splitter/" }],
      preview: {
        type: "ledger",
        title: "Dinner bill",
        status: "Split",
        stats: [
          { label: "Total", value: "₹2,480" },
          { label: "Per person", value: "₹620" },
        ],
      },
    },

    {
      id: "qadocgenerator",
      path: project6Image,
      kind: "Web application",
      title: "QA Doc Generator",
      summary:
        "Create QA documents quickly by loading ready-made templates.",
      description:
        "A React tool that makes writing QA documents easy. Load a template, fill in the test details and generate a consistent, ready-to-share document without starting from a blank page.",
      highlights: [
        "Template loading",
        "Guided form to fill in test details",
        "Consistent document structure",
        "Faster QA documentation",
      ],
      stack: ["React", "JavaScript", "CSS"],
      links: [{ label: "Source Code", href: "https://github.com/AustinJNilavoor/QA_Doc_Generator" }],
      preview: {
        type: "pipeline",
        title: "Doc builder",
        status: "Draft",
        stages: [
          { label: "Template", value: "Load" },
          { label: "Details", value: "Fill" },
          { label: "Document", value: "Export" },
        ],
        progress: 66,
      },
    },
  ],
};

/* ---------------------------------------------------------------------
   HARDWARE
   Descriptions are shortened from your project pages. Items marked TODO
   have no text yet, and the board previews (chip, pins, LEDs) are
   illustrative, so edit them to match the real hardware.
   --------------------------------------------------------------------- */
export const hardwareProjectsData = {
  groupTitle: "Electronics",

  projects: [
    {
      id: "cgra-overlay",
      path: project7Image,
      kind: "FPGA design",
      title: "CGRA Overlay Design for FPGA",
      summary: "A CGRA overlay architecture implemented on an FPGA board.",
      description: "TODO: add a description of the CGRA overlay project.",
      highlights: ["TODO: add highlights"],
      stack: ["FPGA", "Verilog"],
      links: [{ label: "Source", href: "#" }],
      preview: {
        type: "board",
        title: "CGRA overlay",
        chip: "FPGA",
        pins: ["CLK", "RST", "IN0", "IN1", "OUT0", "OUT1", "CFG", "GND"],
        leds: [
          { label: "PWR", on: true },
          { label: "RUN", on: true },
          { label: "ERR", on: false },
        ],
      },
    },

    {
      id: "quadcopter",
      path: project8Image,
      kind: "Drone",
      title: "Quadcopter",
      summary: "Quadcopter built around a KK2.1.5 flight controller.",
      description:
        "A quadcopter combining the KK2.1.5 flight control board, A2212 1000kv brushless motors and ESCs. The KK2.1.5 gives stable flight from its onboard sensors and lets settings be changed on its LCD without a computer. Components were selected for balanced flight and low power consumption.",
      highlights: [
        "KK2.1.5 flight controller with onboard LCD",
        "A2212 1000kv brushless motors with ESCs",
        "Configuration without a computer",
        "Balanced flight and optimised power use",
      ],
      stack: ["KK2.1.5", "BLDC motors", "ESC"],
      links: [{ label: "Source", href: "#" }],
      preview: {
        type: "telemetry",
        title: "Flight status",
        status: "Armed",
        channels: [
          { label: "Throttle", value: "55%", level: 55 },
          { label: "Motors", value: "4 / 4", level: 100 },
          { label: "Battery", value: "11.4 V", level: 80 },
        ],
      },
    },

    {
      id: "line-follower",
      path: project9Image,
      kind: "Robotics",
      title: "Line Follower",
      summary: "Robot that follows a line using sensors.",
      description: "TODO: add a description of the line follower robot.",
      highlights: ["TODO: add highlights"],
      stack: ["Arduino", "IR sensors"],
      links: [{ label: "Source", href: "#" }],
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
      id: "pidrone",
      path: project10Image,
      kind: "Drone",
      title: "PiDrone",
      summary: "Quadcopter built from scratch on a Raspberry Pi Pico.",
      description:
        "A DIY quadcopter built around the Raspberry Pi Pico. An MPU6050 sensor supplies flight data, coreless motors provide thrust, and a custom mobile app controls the drone. The project covered hardware design, firmware and app development.",
      highlights: [
        "Raspberry Pi Pico flight controller",
        "MPU6050 motion sensing",
        "Coreless motors",
        "Custom mobile app for control",
      ],
      stack: ["Raspberry Pi Pico", "MPU6050", "Mobile app"],
      links: [{ label: "Source", href: "#" }],
      preview: {
        type: "board",
        title: "PiDrone",
        chip: "RP2040",
        pins: ["3V3", "GND", "SDA", "SCL", "M1", "M2", "M3", "M4"],
        leds: [
          { label: "PWR", on: true },
          { label: "BT", on: true },
          { label: "ERR", on: false },
        ],
      },
    },

    {
      id: "ticker",
      path: project11Image,
      kind: "IoT device",
      title: "Crypto Ticker",
      summary: "ESP8266 device showing live cryptocurrency prices on an OLED.",
      description:
        "A real-time cryptocurrency ticker powered by the ESP8266. It connects over WiFi, fetches live prices from online APIs and shows the chosen coins on an OLED display using custom firmware.",
      highlights: [
        "Live prices over WiFi",
        "OLED display output",
        "Custom firmware",
        "Choose which coins to show",
      ],
      stack: ["ESP8266", "OLED", "WiFi", "C++"],
      links: [{ label: "Firmware", href: "#" }],
      preview: {
        type: "board",
        title: "Ticker",
        chip: "ESP8266",
        pins: ["3V3", "GND", "SDA", "SCL", "TX", "RX", "D1", "D2"],
        leds: [
          { label: "PWR", on: true },
          { label: "WiFi", on: true },
          { label: "ERR", on: false },
        ],
      },
    },

    {
      id: "liion-tester",
      path: project12Image,
      kind: "Power electronics",
      title: "Li-ion Battery Capacity Tester",
      summary: "Measures Li-ion capacity with a controlled discharge current.",
      description:
        "A Li-ion battery capacity tester that uses an LM358 op-amp to hold a precise discharge current, mimicking real usage. It measures the capacity of different cells and shows their health and performance.",
      highlights: [
        "LM358 controlled constant discharge current",
        "Accurate capacity measurement",
        "Analog circuit design and programming",
        "Works with various Li-ion cells",
      ],
      stack: ["LM358", "Analog design", "Microcontroller"],
      links: [{ label: "Schematic", href: "#" }],
      preview: {
        type: "telemetry",
        title: "Capacity test",
        status: "Discharging",
        channels: [
          { label: "Voltage", value: "3.7 V", level: 74 },
          { label: "Current", value: "0.5 A", level: 50 },
          { label: "Capacity", value: "1800 mAh", level: 60 },
        ],
      },
    },

    {
      id: "temperature-monitor",
      path: project13Image,
      kind: "Embedded",
      title: "Temperature Monitor",
      summary: "Atmega328 and LM35 temperature display on a 16x2 LCD.",
      description:
        "A temperature monitor built from scratch with an Atmega328, an LM35 sensor and a 16x2 LCD. The microcontroller converts the sensor reading into a temperature value and shows it in real time.",
      highlights: [
        "Atmega328 microcontroller",
        "LM35 analog temperature sensor",
        "Real-time 16x2 LCD output",
        "Custom circuit and firmware",
      ],
      stack: ["Atmega328", "LM35", "LCD 16x2", "C"],
      links: [{ label: "Source", href: "#" }],
      preview: {
        type: "telemetry",
        title: "Temperature",
        status: "Live",
        channels: [
          { label: "Temp", value: "28 °C", level: 28 },
          { label: "Sensor", value: "280 mV", level: 28 },
        ],
      },
    },

    {
      id: "digital-lock",
      path: digitalLockImage,
      kind: "Embedded",
      title: "Digital Lock",
      summary: "Electronic lock opened with a digital code.",
      description: "TODO: add a description of the digital lock project.",
      highlights: ["TODO: add highlights"],
      stack: ["Microcontroller", "Keypad"],
      links: [{ label: "Source", href: "#" }],
      preview: {
        type: "board",
        title: "Digital lock",
        chip: "MCU",
        pins: ["VCC", "GND", "R1", "R2", "C1", "C2", "LOCK", "BUZ"],
        leds: [
          { label: "PWR", on: true },
          { label: "OPEN", on: false },
          { label: "ERR", on: false },
        ],
      },
    },

    {
      id: "led-dimmer",
      path: project14Image,
      kind: "Analog electronics",
      title: "LED Dimmer",
      summary: "555 timer based 6 kHz PWM LED dimmer.",
      description:
        "A high-frequency (6 kHz) LED dimmer built on the 555 timer IC. The fast PWM switching minimises flicker and gives smooth brightness control, and the design can be used for LED strips or custom lighting effects.",
      highlights: [
        "6 kHz PWM from a 555 timer",
        "Flicker-free smooth dimming",
        "Suitable for LED strips",
        "Foundation for custom lighting effects",
      ],
      stack: ["555 timer", "PWM", "Analog design"],
      links: [{ label: "Schematic", href: "#" }],
      preview: {
        type: "telemetry",
        title: "Dimmer",
        status: "Active",
        channels: [
          { label: "Frequency", value: "6 kHz", level: 60 },
          { label: "Duty cycle", value: "65%", level: 65 },
        ],
      },
    },

    {
      id: "current-flowmeter",
      path: project15Image,
      kind: "Measurement",
      title: "Current FlowMeter",
      summary: "INA219 and Pico system that logs current flow to Excel.",
      description:
        "A system that measures and records current through a circuit. An INA219 sensor connected to a Raspberry Pi Pico sends readings over I2C and serial to a computer, where a Python script logs them to an Excel file and analyses peak and low consumption.",
      highlights: [
        "INA219 current sensing over I2C",
        "Serial link to a computer",
        "Python script logging to .xlsx",
        "Peak and low consumption analysis",
      ],
      stack: ["Raspberry Pi Pico", "INA219", "I2C", "Python"],
      links: [{ label: "Source", href: "#" }],
      preview: {
        type: "telemetry",
        title: "Current log",
        status: "Logging",
        channels: [
          { label: "Current", value: "120 mA", level: 40 },
          { label: "Peak", value: "310 mA", level: 78 },
          { label: "Low", value: "35 mA", level: 12 },
        ],
      },
    },

    {
      id: "eth-cable-tester",
      path: project16Image,
      kind: "Analog / digital electronics",
      title: "Ethernet Cable Tester",
      summary: "555 and CD4017 tester that finds Ethernet wiring faults.",
      description:
        "An Ethernet cable tester using a 555 timer in astable mode as the clock, a CD4017 decade counter to activate each wire in turn, and 1N4148 diodes for fast switching. The LED sequence at the far end shows short circuits, miswired connections and open connections.",
      highlights: [
        "555 astable clock into a CD4017 counter",
        "Detects shorts, miswiring and open wires",
        "LED sequence display",
        "Quick check during installation or maintenance",
      ],
      stack: ["555 timer", "CD4017", "1N4148", "LEDs"],
      links: [{ label: "Schematic", href: "#" }],
      preview: {
        type: "board",
        title: "Cable tester",
        chip: "CD4017",
        pins: ["1", "2", "3", "4", "5", "6", "7", "8"],
        leds: [
          { label: "PWR", on: true },
          { label: "OK", on: true },
          { label: "FAULT", on: false },
        ],
      },
    },

    {
      id: "esp-drone",
      path: project17Image,
      kind: "Drone",
      title: "ESP Drone",
      summary: "Quadcopter built around an ESP microcontroller.",
      description: "TODO: add a description of the ESP Drone project.",
      highlights: ["TODO: add highlights"],
      stack: ["ESP32", "C++"],
      links: [{ label: "Source", href: "#" }],
      preview: {
        type: "board",
        title: "ESP Drone",
        chip: "ESP32",
        pins: ["3V3", "GND", "SDA", "SCL", "M1", "M2", "M3", "M4"],
        leds: [
          { label: "PWR", on: true },
          { label: "WiFi", on: true },
          { label: "ERR", on: false },
        ],
      },
    },

    {
      id: "bike-nav",
      path: project18Image,
      kind: "Embedded",
      title: "Bike NAV System",
      summary: "Navigation display for a bike.",
      description: "TODO: add a description of the Bike NAV System.",
      highlights: ["TODO: add highlights"],
      stack: ["Microcontroller", "GPS", "Display"],
      links: [{ label: "Source", href: "#" }],
      preview: {
        type: "board",
        title: "Bike NAV",
        chip: "MCU",
        pins: ["3V3", "GND", "TX", "RX", "SDA", "SCL", "BLE", "BTN"],
        leds: [
          { label: "PWR", on: true },
          { label: "GPS", on: false },
          { label: "BT", on: true },
        ],
      },
    },
  ],
};

/* ---------------------------------------------------------------------
   HELPERS
   --------------------------------------------------------------------- */

/** Every project from both groups, in display order (software first). */
export function getAllProjects() {
  return [...projectsData.projects, ...hardwareProjectsData.projects];
}

/** Find a project by its id (case-insensitive). Returns null if missing. */
export function getProject(id) {
  if (!id) return null;
  const key = id.toLowerCase();
  return getAllProjects().find((p) => p.id.toLowerCase() === key) ?? null;
}

/**
 * Build the demo config for a project. name, description and technologies
 * come from the project itself unless the demo block overrides them, and
 * links always exists so the demo page cannot crash on links.frontend.
 */
function buildDemo(project) {
  const demo = project.demo ?? {};
  return {
    name: project.title,
    description: project.description,
    technologies: project.stack,
    ...demo,
    links: demo.links ?? {},
  };
}

/**
 * Find a project that has a demo page, by id. Returns the full project with
 * a completed `demo` object, or null. Used by ProjectDemo.jsx.
 */
export function getProjectDemo(slug) {
  const project = getProject(slug);
  if (!project || project.hasdemo !== true) return null;
  return { ...project, demo: buildDemo(project) };
}

/** Only the demo configuration, or null. */
export function getProjectDemoConfig(slug) {
  return getProjectDemo(slug)?.demo ?? null;
}