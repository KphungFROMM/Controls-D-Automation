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
