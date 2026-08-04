export type Project = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  industry: string;
  platforms: string[];
  featured?: boolean;
  challenge: string;
  solution: string;
  results: string[];
  process?: string[];
  metrics?: { label: string; value: string }[];
  services?: string[];
};

export const projects: Project[] = [
  {
    slug: "packaging-line-hmi-modernization",
    title: "Packaging Line HMI Modernization",
    summary:
      "Replaced a cluttered legacy operator interface with a clearer HMI that cut troubleshooting time and reduced nuisance stops.",
    date: "2025-11-12",
    industry: "packaging",
    platforms: ["Rockwell Automation"],
    featured: true,
    challenge:
      "Operators were navigating outdated screens with inconsistent alarm messaging. Fault recovery depended on a few experienced technicians, and changeovers took longer than necessary.",
    solution:
      "We rebuilt the HMI navigation around operator tasks, standardized alarm priorities, and updated the CompactLogix application with clearer diagnostics tags. Documentation and a short training handoff were included for the plant team.",
    results: [
      "Faster fault identification during startup",
      "More consistent changeover steps on-screen",
      "Maintainable tag structure for future updates",
    ],
    process: [
      "Operator interviews and existing-screen audit",
      "Navigation hierarchy and alarm philosophy redesign",
      "FactoryTalk View rebuild with CompactLogix tag cleanup",
      "Operator review cycle and shift-handover training",
      "Go-live support across startup and first changeovers",
    ],
    metrics: [
      { label: "Fault recovery time", value: "↓35%" },
      { label: "Nuisance alarm rate", value: "↓40%" },
      { label: "Changeover guidance screens", value: "12" },
    ],
    services: ["hmi", "plc"],
  },
  {
    slug: "water-plant-scada-visibility",
    title: "Water Plant SCADA Visibility Upgrade",
    summary:
      "Expanded SCADA monitoring for pump stations and process areas so operations could respond before small issues became call-outs.",
    date: "2025-08-03",
    industry: "water-wastewater",
    platforms: ["GE", "Rockwell Automation"],
    featured: true,
    challenge:
      "Critical process data lived in siloed screens. Night-shift operators lacked a unified view of pump status, tank levels, and recurring alarms.",
    solution:
      "We developed a supervisory SCADA layer with plant overview graphics, trending, and prioritized alarming. Existing PLC logic was left intact where proven, with targeted updates for new telemetry points.",
    results: [
      "Single overview for plant and remote assets",
      "Trending that supports process decisions",
      "Clearer alarm priority for on-call response",
    ],
    process: [
      "Plant and remote-asset telemetry assessment",
      "SCADA architecture and alarm priority design",
      "Historian and overview graphic build",
      "Phased cutover with existing PLC logic preserved",
      "On-call staff training and post-go-live tuning",
    ],
    metrics: [
      { label: "Assets on overview", value: "18" },
      { label: "After-hours call-outs", value: "↓28%" },
      { label: "Historian retention", value: "2 yrs" },
    ],
    services: ["scada", "plc"],
  },
  {
    slug: "legacy-plc5-migration",
    title: "Legacy PLC-5 to ControlLogix Migration",
    summary:
      "Migrated an aging PLC-5 cell to ControlLogix with a controlled cutover plan that protected production windows.",
    date: "2025-04-21",
    industry: "manufacturing",
    platforms: ["Rockwell Automation", "Keyence"],
    featured: true,
    challenge:
      "Unsupported controllers and limited spare parts put the cell at risk. The original logic worked, but documentation was thin and a hard cutover was not acceptable.",
    solution:
      "We mapped I/O and sequences, converted and validated logic in stages, and coordinated HMI updates plus Keyence inspection signals. Cutover was planned around a short production window with rollback checkpoints.",
    results: [
      "Modern platform with available parts and support",
      "Preserved proven process behavior",
      "Improved diagnostics for maintenance",
    ],
    process: [
      "Legacy logic audit and I/O verification",
      "ControlLogix architecture and network design",
      "Offline logic conversion and simulation",
      "Staged hardware replacement with rollback checkpoints",
      "Cutover validation and maintenance handover",
    ],
    metrics: [
      { label: "Cutover window", value: "36 hrs" },
      { label: "I/O points migrated", value: "240" },
      { label: "Unplanned downtime", value: "0 hrs" },
    ],
    services: ["migrations", "commissioning"],
  },
  {
    slug: "beverage-line-scada-consolidation",
    title: "Plant-Wide SCADA Consolidation for a Multi-Line Beverage Facility",
    summary:
      "Realistic sample engagement: consolidated four independently monitored blending and filling lines into a single plant-wide SCADA system with unified historian and alarm management.",
    date: "2025-02-14",
    industry: "food-beverage",
    platforms: ["Rockwell Automation"],
    featured: true,
    challenge:
      "Each of the facility's four lines ran its own standalone HMI with no shared historian, making cross-line trend analysis and centralized alarm response impossible for the control room.",
    solution:
      "Designed and deployed a redundant FactoryTalk SE SCADA architecture polling all four lines, with a unified alarm philosophy and a consolidated historian for plant-wide reporting.",
    results: [
      "Centralized visibility across all four lines from a single control room",
      "Alarm count reduced through rationalization",
      "Consolidated historian now supports plant-wide OEE reporting",
    ],
    process: [
      "Network and architecture assessment across all four lines",
      "SCADA server and redundancy design",
      "Alarm rationalization workshop with operations",
      "Phased line-by-line cutover with zero unplanned downtime",
      "Operator training and go-live support",
    ],
    metrics: [
      { label: "Lines consolidated", value: "4" },
      { label: "Unplanned downtime during cutover", value: "0 hrs" },
      { label: "Alarm count", value: "−38%" },
    ],
    services: ["scada", "hmi"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByIndustry(industrySlug: string) {
  return projects.filter((project) => project.industry === industrySlug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
