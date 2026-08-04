export type Industry = {
  slug: string;
  name: string;
  summary: string;
  outcomes: string[];
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary:
      "Discrete and process manufacturing lines that need dependable sequencing, clear operator interfaces, and fast recovery from faults.",
    outcomes: [
      "Line control and interlocking",
      "Changeover-friendly logic",
      "Production visibility",
    ],
  },
  {
    slug: "water-wastewater",
    name: "Water & Wastewater",
    summary:
      "Pump stations, treatment processes, and remote assets that demand reliable SCADA, alarming, and maintainable PLC programs.",
    outcomes: [
      "Pump and process control",
      "Remote monitoring",
      "Alarm and reporting structure",
    ],
  },
  {
    slug: "packaging",
    name: "Packaging",
    summary:
      "High-speed packaging equipment where coordinated PLC/HMI work keeps throughput high and changeovers predictable.",
    outcomes: [
      "Machine control updates",
      "Operator guidance screens",
      "Fault recovery improvements",
    ],
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    summary:
      "Controls that support cleanliness, batch consistency, and clear operator workflows without unnecessary complexity.",
    outcomes: [
      "Process and utility control",
      "Recipe and sequence support",
      "HMI clarity for operators",
    ],
  },
  {
    slug: "material-handling",
    name: "Material Handling",
    summary:
      "Conveyors, sorters, and transfer systems that need solid interlocking, tracking awareness, and practical diagnostics.",
    outcomes: [
      "Conveyor and transfer logic",
      "Zone control and safety coordination",
      "Diagnostic-friendly HMIs",
    ],
  },
  {
    slug: "general-industrial",
    name: "General Industrial",
    summary:
      "Custom machines, plant utilities, and mixed-platform sites that need a practical controls partner—not a one-size template.",
    outcomes: [
      "Custom machine automation",
      "Utility and plant systems",
      "Multi-vendor integration",
    ],
  },
];
