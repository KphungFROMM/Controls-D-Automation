export type Industry = {
  slug: string;
  name: string;
  summary: string;
  focus: string;
  outcomes: string[];
  image: string;
  imageAlt: string;
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary:
      "Discrete and process manufacturing lines that need dependable sequencing, clear operator interfaces, and fast recovery from faults.",
    focus:
      "Controls work is scoped around uptime windows, so sequencing and fault recovery stay predictable when the line cannot wait.",
    outcomes: [
      "Line control and interlocking",
      "Changeover-friendly logic",
      "Production visibility",
    ],
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Operator adjusting controls on industrial manufacturing machinery",
  },
  {
    slug: "water-wastewater",
    name: "Water & Wastewater",
    summary:
      "Pump stations, treatment processes, and remote assets that demand reliable SCADA, alarming, and maintainable PLC programs.",
    focus:
      "Remote sites and continuous processes need clear alarming and maintainable logic that operators can trust after hours.",
    outcomes: [
      "Pump and process control",
      "Remote monitoring",
      "Alarm and reporting structure",
    ],
    image:
      "https://images.unsplash.com/photo-1774789599304-cca1e1ffbb95?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Aerial view of a water treatment plant with process basins and facility buildings",
  },
  {
    slug: "packaging",
    name: "Packaging",
    summary:
      "High-speed packaging equipment where coordinated PLC/HMI work keeps throughput high and changeovers predictable.",
    focus:
      "Speed only helps when operators can clear faults quickly and run changeovers without guesswork on the HMI.",
    outcomes: [
      "Machine control updates",
      "Operator guidance screens",
      "Fault recovery improvements",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Packaged goods stored in bins and racks inside a distribution warehouse",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    summary:
      "Controls that support cleanliness, batch consistency, and clear operator workflows without unnecessary complexity.",
    focus:
      "Batch consistency and clean workflows matter as much as the PLC logic—operators need screens that match the process.",
    outcomes: [
      "Process and utility control",
      "Recipe and sequence support",
      "HMI clarity for operators",
    ],
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Stainless steel tanks and piping in a food and beverage processing facility",
  },
  {
    slug: "material-handling",
    name: "Material Handling",
    summary:
      "Conveyors, sorters, and transfer systems that need solid interlocking, tracking awareness, and practical diagnostics.",
    focus:
      "Zone control and diagnostics keep product moving when a jam or transfer fault would otherwise stop the system.",
    outcomes: [
      "Conveyor and transfer logic",
      "Zone control and safety coordination",
      "Diagnostic-friendly HMIs",
    ],
    image:
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Forklift in a warehouse aisle with pallet racks for material handling",
  },
  {
    slug: "general-industrial",
    name: "General Industrial",
    summary:
      "Custom machines, plant utilities, and mixed-platform sites that need a practical controls partner—not a one-size template.",
    focus:
      "Mixed platforms and one-off machines need a practical partner who can integrate cleanly without forcing a template.",
    outcomes: [
      "Custom machine automation",
      "Utility and plant systems",
      "Multi-vendor integration",
    ],
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Welder working with sparks in a general industrial fabrication shop",
  },
];
