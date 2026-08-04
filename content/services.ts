export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  /** Concise bullets for listing cards */
  outcomes: string[];
  capabilities: string[];
  challenges: string[];
  process: string[];
  benefits: string[];
  technologies: string[];
  faqs: ServiceFaq[];
  /** Industry slugs from content/industries.ts */
  relatedIndustries: string[];
};

export const services: Service[] = [
  {
    slug: "plc",
    title: "PLC Development & Updates",
    summary:
      "Clean, documented control logic for new machines and existing lines—built for maintainability and safe handoff to your team.",
    outcomes: [
      "New PLC application development",
      "Logic updates and optimization",
      "Legacy code cleanup and standardization",
      "Startup and commissioning support",
    ],
    capabilities: [
      "New PLC program development from P&IDs and process narratives",
      "Ladder logic, structured text, and function block programming",
      "Program migration between controller platforms and firmware versions",
      "Interlock and safety logic design",
      "Recipe and batch sequencing logic",
      "PLC-to-PLC and PLC-to-SCADA communication configuration",
    ],
    challenges: [
      "Undocumented legacy logic with no source of truth",
      "Frequent nuisance faults tracing back to poor interlocking",
      "Controllers running end-of-life firmware with no upgrade path planned",
    ],
    process: [
      "Process and P&ID review",
      "Logic architecture and tag database design",
      "Programming and offline simulation",
      "Panel-side testing and I/O checkout",
      "Commissioning and operator handover",
    ],
    benefits: [
      "Fewer unplanned stops from cleaner interlock logic",
      "Documented, tag-named code another engineer can pick up cold",
      "Faster fault diagnosis on the floor",
      "Controller platform flexibility—not locked to one integrator",
    ],
    technologies: [
      "Allen-Bradley ControlLogix / CompactLogix",
      "GE PACSystems",
      "Keyence KV series",
    ],
    faqs: [
      {
        question: "Can you work with our existing PLC program instead of starting over?",
        answer:
          "Yes—most engagements start with a code audit of the existing program. We document what’s there, flag anything unsafe or fragile, and build changes on top of the existing architecture where it’s sound.",
      },
      {
        question: "Do you provide the source code and documentation after the project?",
        answer:
          "You receive the full commented program, an I/O list, a tag database export, and a logic narrative. Nothing is withheld to create dependency on future service.",
      },
    ],
    relatedIndustries: ["manufacturing", "packaging", "food-beverage", "water-wastewater"],
  },
  {
    slug: "hmi",
    title: "HMI Design & Programming",
    summary:
      "Operator interfaces that reduce errors and speed decision-making—clear screens, sensible navigation, and alarm visibility that matters.",
    outcomes: [
      "PanelView and PC-based HMI development",
      "Operator-focused screen redesigns",
      "Alarm and event organization",
      "Training-friendly documentation",
    ],
    capabilities: [
      "HMI screen design and navigation architecture",
      "Alarm management and ISA-18.2 aligned alarm rationalization",
      "Trend and historian screen configuration",
      "Recipe management interfaces",
      "Multi-language and role-based access setup",
      "Legacy HMI platform migration",
    ],
    challenges: [
      "Alarm floods that mask the fault that actually matters",
      "Screens designed around the PLC’s tag list instead of the operator’s task",
      "HMI platforms nearing end of vendor support",
    ],
    process: [
      "Operator interviews and workflow mapping",
      "Screen hierarchy and alarm philosophy document",
      "Screen build and tag binding",
      "Operator review and revision cycle",
      "Go-live support and shift-handover training",
    ],
    benefits: [
      "Reduced operator response time during upsets",
      "Alarm counts operators can actually act on, not tune out",
      "Consistent navigation across multiple lines or areas",
      "Faster onboarding for new operators",
    ],
    technologies: [
      "Allen-Bradley FactoryTalk View",
      "GE iFIX / Cimplicity",
      "Keyence VT/VT5 series HMI",
    ],
    faqs: [
      {
        question: "Will operators need retraining on a new HMI?",
        answer:
          "We design new screens around the operator’s existing mental model of the process where possible, and provide a short handover session at go-live rather than a full retraining program.",
      },
    ],
    relatedIndustries: ["manufacturing", "packaging", "food-beverage", "material-handling"],
  },
  {
    slug: "scada",
    title: "SCADA Systems",
    summary:
      "Plant-wide visibility with trending, reporting, and supervisory control—so operations can see issues before they become downtime.",
    outcomes: [
      "SCADA architecture and application build",
      "Historian and trending setup",
      "Remote monitoring connectivity",
      "System expansion and upgrades",
    ],
    capabilities: [
      "SCADA architecture design (client-server, redundant, or remote-connected)",
      "Historian configuration and long-term data retention planning",
      "Reporting and KPI dashboard development",
      "Remote site and multi-site consolidation",
      "Cybersecurity hardening aligned to practical plant standards",
      "Redundancy and failover configuration",
    ],
    challenges: [
      "No consolidated view across sites running different control platforms",
      "Historian data that exists but isn’t structured for reporting",
      "SCADA servers with no redundancy and no documented recovery plan",
    ],
    process: [
      "Architecture and network review",
      "Server and redundancy design",
      "Tag and historian configuration",
      "Reporting and dashboard build",
      "Failover testing and cutover",
    ],
    benefits: [
      "Single point of visibility across multiple lines or sites",
      "Historical data organized for compliance and trend analysis, not just alarms",
      "Reduced travel for remote monitoring and diagnostics",
      "A documented, supportable architecture instead of an accumulation of workarounds",
    ],
    technologies: [
      "Allen-Bradley FactoryTalk SE",
      "GE iFIX / Historian",
      "OPC UA integration across mixed-vendor sites",
    ],
    faqs: [
      {
        question: "Can SCADA be added without touching our existing PLC logic?",
        answer:
          "In most cases, yes. SCADA reads from the existing controllers over the network; we scope any required PLC-side tag additions separately and keep them minimal.",
      },
    ],
    relatedIndustries: ["water-wastewater", "manufacturing", "food-beverage", "general-industrial"],
  },
  {
    slug: "system-integration",
    title: "Industrial Automation Integration",
    summary:
      "Tying together PLCs, HMIs, SCADA, drives, robotics, and third-party equipment into one system that behaves predictably as a whole.",
    outcomes: [
      "Cross-vendor equipment integration",
      "Industrial network architecture",
      "OEM and skid integration into plant controls",
      "MES / ERP data connectivity",
    ],
    capabilities: [
      "Cross-vendor equipment integration (drives, robots, vision, weigh systems)",
      "Network architecture and industrial Ethernet design",
      "MES / ERP data integration",
      "Control panel design and build coordination",
      "Skid and OEM equipment integration into plant controls",
    ],
    challenges: [
      "New equipment that won’t talk to the existing control platform",
      "Network architecture that grew ad hoc and is now a diagnostic liability",
      "MES or ERP systems missing real-time line data",
    ],
    process: [
      "System architecture and network design",
      "Vendor and OEM coordination",
      "Panel build oversight",
      "Integration programming and testing",
      "Site commissioning",
    ],
    benefits: [
      "One coherent control system instead of isolated equipment islands",
      "Reduced integration risk on multi-vendor projects",
      "Data that reaches the systems that need it—MES, ERP, historian",
    ],
    technologies: [
      "Allen-Bradley",
      "GE",
      "Keyence",
      "OPC UA / EtherNet/IP / Modbus TCP",
    ],
    faqs: [
      {
        question: "Can you integrate equipment from vendors we already use?",
        answer:
          "Yes. Most integration work starts from your installed base and OEM manuals. We coordinate with equipment vendors where needed and keep plant standards consistent across new and existing cells.",
      },
      {
        question: "Do you handle both network design and control programming?",
        answer:
          "We cover industrial network layout, protocol bridging, and the PLC/HMI/SCADA work that makes the connected system operate as one. Panel fabrication can be coordinated with your preferred builder.",
      },
    ],
    relatedIndustries: [
      "manufacturing",
      "packaging",
      "material-handling",
      "general-industrial",
    ],
  },
  {
    slug: "migrations",
    title: "Updates & Migrations",
    summary:
      "Move off unsupported hardware and software without guessing. We preserve proven process knowledge while modernizing the control platform.",
    outcomes: [
      "PLC-5 / SLC and legacy platform migrations",
      "HMI/SCADA platform upgrades",
      "Cutover planning and risk reduction",
      "Post-migration validation and support",
    ],
    capabilities: [
      "Obsolescence risk assessment",
      "Migration planning and phased cutover scheduling",
      "Controller, HMI, and drive replacement",
      "Panel rework and rewiring coordination",
      "Backup and rollback planning",
    ],
    challenges: [
      "Controllers with no replacement parts available",
      "Production schedules that leave no planned downtime window",
      "Undocumented I/O and wiring from decades of modifications",
    ],
    process: [
      "Obsolescence and risk audit",
      "Migration plan and downtime scheduling",
      "Staged hardware replacement",
      "Logic conversion and validation",
      "Cutover and post-startup monitoring",
    ],
    benefits: [
      "Reduced risk from unsupported, hard-to-source hardware",
      "Planned downtime instead of forced downtime after a failure",
      "Improved diagnostics and remote access on modern platforms",
    ],
    technologies: [
      "Allen-Bradley PLC-5 / SLC-500 to ControlLogix migrations",
      "GE 90-30 / 90-70 modernization",
      "Legacy HMI to current platform migration",
    ],
    faqs: [
      {
        question: "Can we migrate without a long production outage?",
        answer:
          "We plan cutovers around your available windows—phased area cutovers, parallel run where feasible, and a documented rollback path so risk stays controlled.",
      },
    ],
    relatedIndustries: ["manufacturing", "water-wastewater", "general-industrial", "food-beverage"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
