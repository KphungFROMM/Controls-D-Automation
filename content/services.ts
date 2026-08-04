export type Service = {
  slug: string;
  title: string;
  summary: string;
  outcomes: string[];
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
  },
];
