export type Platform = {
  slug: string;
  name: string;
  summary: string;
  focus: string[];
};

export const platforms: Platform[] = [
  {
    slug: "rockwell",
    name: "Rockwell Automation",
    summary:
      "Allen-Bradley ControlLogix, CompactLogix, Studio 5000, and FactoryTalk visualization—from new installs to legacy modernization.",
    focus: [
      "ControlLogix / CompactLogix",
      "Studio 5000 / Logix Designer",
      "FactoryTalk View SE / ME",
      "PanelView HMI",
    ],
  },
  {
    slug: "ge",
    name: "GE",
    summary:
      "GE control and visualization platforms for process and industrial applications, including upgrades that protect your existing investment.",
    focus: [
      "PLC and PAC platforms",
      "HMI/SCADA application updates",
      "Migration and coexistence strategies",
      "Commissioning and support",
    ],
  },
  {
    slug: "keyence",
    name: "Keyence",
    summary:
      "Keyence controls and sensing solutions integrated into reliable machine and line automation—fast setup with production-ready results.",
    focus: [
      "Keyence PLC and vision integration",
      "Sensor and inspection interfaces",
      "Machine-level HMI coordination",
      "Line and cell automation support",
    ],
  },
];
