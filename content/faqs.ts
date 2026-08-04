export type Faq = {
  category: string;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    category: "PLC Programming",
    question: "What PLC platforms do you program?",
    answer:
      "We work primarily in Rockwell/Allen-Bradley (ControlLogix, CompactLogix, and PLC-5/SLC-500 legacy), GE PACSystems, and Keyence KV-series controllers. If your facility runs a different platform, ask—we can usually scope it.",
  },
  {
    category: "PLC Programming",
    question: "Can you take over a PLC program someone else wrote?",
    answer:
      "Yes. Most Controls D Automation engagements begin with a code audit of the existing program before any changes are made, so we understand the logic before we touch it.",
  },
  {
    category: "HMI Development",
    question: "Do you redesign HMI screens or just add tags?",
    answer:
      "Both, depending on scope. For new work we design the full navigation and alarm structure; for smaller engagements we can extend an existing HMI—FactoryTalk View, GE iFIX/Cimplicity, or Keyence VT—without a full redesign.",
  },
  {
    category: "SCADA Deployment",
    question: "Can SCADA be deployed without disrupting our existing PLCs?",
    answer:
      "In most cases yes—SCADA typically reads from existing controllers over the network. Any required PLC-side tag additions are scoped and minimized separately so production logic stays intact.",
  },
  {
    category: "System Integration",
    question:
      "Do you work with equipment from vendors other than Allen-Bradley, GE, and Keyence?",
    answer:
      "Yes. Those are our primary platforms, but system integration work regularly involves third-party drives, vision systems, and OEM equipment from other vendors—wired into one coherent plant control system.",
  },
  {
    category: "Supported Platforms",
    question: "What communication protocols do you support?",
    answer:
      "EtherNet/IP, Modbus TCP/RTU, OPC UA, and Profinet, along with legacy serial protocols where required for older equipment on Rockwell, GE, Keyence, and mixed-vendor networks.",
  },
  {
    category: "Project Timelines",
    question: "How long does a typical PLC/HMI project take?",
    answer:
      "A focused single-line project typically runs 6–12 weeks from kickoff to commissioning; larger multi-line or plant-wide SCADA projects run longer. We provide a specific schedule after the initial scope review.",
  },
  {
    category: "Remote Support",
    question: "Can issues be diagnosed remotely?",
    answer:
      "Where secure remote access is available, yes—many faults can be diagnosed and often resolved without an on-site visit. We set this up as part of onboarding when the engagement allows it.",
  },
  {
    category: "On-Site Commissioning",
    question: "Do you provide on-site commissioning support?",
    answer:
      "Yes. On-site commissioning and startup support is standard for new system deployments and major upgrades—from I/O checkout through FAT/SAT and punch-list closeout.",
  },
  {
    category: "Maintenance & Upgrades",
    question: "Do you offer ongoing maintenance contracts?",
    answer:
      "Yes. Our maintenance and technical support plans cover scheduled preventive visits, priority response under a defined SLA, and periodic backup and documentation updates for Allen-Bradley, GE, and Keyence systems.",
  },
  {
    category: "Maintenance & Upgrades",
    question: "What happens if our PLC hardware becomes obsolete?",
    answer:
      "We track obsolescence risk as part of ongoing support and provide a migration plan before hardware becomes unsupportable—rather than after a failure forces the issue.",
  },
];

export function getFaqCategories(): string[] {
  return [...new Set(faqs.map((faq) => faq.category))];
}
