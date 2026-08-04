export type Industry = {
  slug: string;
  name: string;
  summary: string;
  overview: string;
  focus: string;
  outcomes: string[];
  challenges: string[];
  systems: string[];
  services: string[];
  image: string;
  imageAlt: string;
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary:
      "Discrete and process manufacturing lines that need dependable sequencing, clear operator interfaces, and fast recovery from faults.",
    overview:
      "Manufacturing floors run on uptime and changeover speed. We build and support PLC and HMI systems that hold tight cycle times across product changeovers and give maintenance teams a clear picture when a line stops.",
    focus:
      "Controls work is scoped around uptime windows, so sequencing and fault recovery stay predictable when the line cannot wait.",
    outcomes: [
      "Line control and interlocking",
      "Changeover-friendly logic",
      "Production visibility",
    ],
    challenges: [
      "Frequent product changeovers requiring flexible recipe logic",
      "Legacy controllers mixed with newer cell-level automation",
      "Downtime cost pressure on every line stop",
    ],
    systems: [
      "Cell-level PLC control",
      "Line HMI and andon systems",
      "MES data integration",
      "Machine cell integration",
    ],
    services: ["plc", "hmi", "system-integration", "maintenance"],
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Operator adjusting controls on industrial manufacturing machinery",
  },
  {
    slug: "water-wastewater",
    name: "Water & Wastewater",
    summary:
      "Pump stations, treatment processes, and remote assets that demand reliable SCADA, alarming, and maintainable PLC programs.",
    overview:
      "Treatment facilities answer to regulators as much as to operators. Our SCADA and reporting work is built around the data retention and reporting formats plants are actually required to produce.",
    focus:
      "Remote sites and continuous processes need clear alarming and maintainable logic that operators can trust after hours.",
    outcomes: [
      "Pump and process control",
      "Remote monitoring",
      "Alarm and reporting structure",
    ],
    challenges: [
      "Regulatory reporting and data retention requirements",
      "Aging RTU and telemetry infrastructure at remote lift stations",
      "24/7 operation with limited on-call staff",
    ],
    systems: [
      "Plant-wide SCADA",
      "Lift station RTU telemetry",
      "Regulatory reporting dashboards",
    ],
    services: ["scada", "plc", "maintenance"],
    image:
      "https://images.unsplash.com/photo-1774789599304-cca1e1ffbb95?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Aerial view of a water treatment plant with process basins and facility buildings",
  },
  {
    slug: "packaging",
    name: "Packaging",
    summary:
      "High-speed packaging equipment where coordinated PLC/HMI work keeps throughput high and changeovers predictable.",
    overview:
      "Packaging lines are judged on throughput and changeover time. We tune PLC logic and HMI recipe handling to hold rated speed across SKU changes rather than treating every changeover as a re-tune.",
    focus:
      "Speed only helps when operators can clear faults quickly and run changeovers without guesswork on the HMI.",
    outcomes: [
      "Machine control updates",
      "Operator guidance screens",
      "Fault recovery improvements",
    ],
    challenges: [
      "Fast SKU changeover requirements",
      "Multiple machine vendors on a single line",
      "Throughput targets that leave little tolerance for faults",
    ],
    systems: [
      "Line-wide recipe management",
      "Machine-to-machine coordination logic",
      "OEE and downtime tracking",
    ],
    services: ["plc", "system-integration", "diagnostics"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Packaged goods stored in bins and racks inside a distribution warehouse",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    summary:
      "Controls that support cleanliness, batch consistency, and clear operator workflows without unnecessary complexity.",
    overview:
      "Food and beverage lines carry requirements manufacturing lines don't—washdown-rated equipment, batch traceability, and CIP sequencing. We scope control logic and HMI design around those constraints from the start, not as a retrofit.",
    focus:
      "Batch consistency and clean workflows matter as much as the PLC logic—operators need screens that match the process.",
    outcomes: [
      "Process and support-system control",
      "Recipe and sequence support",
      "HMI clarity for operators",
    ],
    challenges: [
      "CIP/COP sequencing that must be auditable",
      "Batch and lot traceability requirements",
      "Washdown environment equipment constraints",
    ],
    systems: [
      "Batch and blending control",
      "CIP sequencing logic",
      "Recipe management HMI",
      "Traceability data logging",
    ],
    services: ["plc", "hmi", "scada"],
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Stainless steel tanks and piping in a food and beverage processing facility",
  },
  {
    slug: "material-handling",
    name: "Material Handling",
    summary:
      "Conveyors, sorters, and transfer systems that need solid interlocking, tracking awareness, and practical diagnostics.",
    overview:
      "Material handling systems live and die on uptime during peak volume. We build conveyor and sortation control logic with the diagnostics operators need to isolate a jam or fault fast, and integrate cleanly with WMS where required.",
    focus:
      "Zone control and diagnostics keep product moving when a jam or transfer fault would otherwise stop the system.",
    outcomes: [
      "Conveyor and transfer logic",
      "Zone control and safety coordination",
      "Diagnostic-friendly HMIs",
    ],
    challenges: [
      "Peak-season volume with no tolerance for extended downtime",
      "WMS integration requirements",
      "Distributed conveyor and sortation control architecture",
    ],
    systems: [
      "Conveyor and sortation PLC control",
      "WMS integration",
      "Zone-level diagnostics HMI",
    ],
    services: ["system-integration", "plc", "maintenance"],
    image:
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Forklift in a warehouse aisle with pallet racks for material handling",
  },
  {
    slug: "general-industrial",
    name: "General Industrial",
    summary:
      "Custom machines, plant support systems, and mixed-platform sites that need a practical controls partner—not a one-size template.",
    overview:
      "Continuous and hybrid process operations need control logic that holds setpoints reliably across upsets and startups. We design and tune process control systems around the actual process dynamics, not generic templates—and integrate cleanly across mixed vendor platforms.",
    focus:
      "Mixed platforms and one-off machines need a practical partner who can integrate cleanly without forcing a template.",
    outcomes: [
      "Custom machine automation",
      "Plant support systems",
      "Multi-vendor integration",
    ],
    challenges: [
      "Complex loop interactions across the process",
      "Startup and shutdown sequencing complexity",
      "Legacy DCS and PLC systems running side by side",
    ],
    systems: [
      "Continuous process control logic",
      "Loop tuning and optimization",
      "Batch and continuous hybrid control",
    ],
    services: ["plc", "scada", "diagnostics"],
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Welder working with sparks in a general industrial fabrication shop",
  },
  {
    slug: "pharmaceutical",
    name: "Pharmaceutical",
    summary:
      "Validated batch control systems built for GMP documentation and audit trail requirements.",
    overview:
      "Pharmaceutical control systems live under a validation lifecycle. We structure programming and change documentation to support IQ/OQ/PQ activities rather than treating validation as an afterthought.",
    focus:
      "Validated change control and audit trails matter as much as the sequence logic—documentation has to keep pace with the process.",
    outcomes: [
      "Validated batch control",
      "Audit-ready documentation",
      "Commissioning support for IQ/OQ/PQ",
    ],
    challenges: [
      "21 CFR Part 11 audit trail requirements",
      "Validated system change control",
      "Batch record and electronic signature integration",
    ],
    systems: [
      "Validated batch control",
      "Electronic batch records",
      "Audit trail and access control",
    ],
    services: ["plc", "scada", "commissioning"],
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Pharmaceutical cleanroom equipment and stainless process vessels",
  },
  {
    slug: "automotive",
    name: "Automotive",
    summary:
      "High-speed cell and line controls with vision system integration and reliable takt protection.",
    overview:
      "Automotive lines run tight cycle times with dense cell-level automation and vision inspection. We work inside existing cell architectures to add or upgrade control without disrupting takt time.",
    focus:
      "Cycle time and quality escapes leave little room for guesswork—integration has to fit the cell, not the other way around.",
    outcomes: [
      "Cell and line control upgrades",
      "Vision-guided process control",
      "Upgrade cutovers that protect takt",
    ],
    challenges: [
      "High-speed cycle time requirements",
      "Deep vision and multi-vendor cell integration",
      "Minimal tolerance for line stoppage during upgrades",
    ],
    systems: [
      "Cell-level PLC and safety coordination",
      "Vision-guided process control",
      "Line-wide andon and OEE systems",
    ],
    services: ["system-integration", "migrations", "commissioning"],
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08aa?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Automotive assembly line with workers and production tooling",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getIndustriesByService(serviceSlug: string): Industry[] {
  return industries.filter((industry) => industry.services.includes(serviceSlug));
}
