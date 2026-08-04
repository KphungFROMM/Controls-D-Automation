export type Partner = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  status: "active" | "placeholder";
};

export const partners: Partner[] = [
  {
    slug: "panel-solutions-partner",
    name: "Panel Fabrication Ally",
    category: "Panel Shop",
    summary:
      "Collaborating with UL-capable panel shops for design-to-build delivery alongside controls engineering.",
    status: "placeholder",
  },
  {
    slug: "oem-machine-builder",
    name: "OEM Machine Builder",
    category: "OEM",
    summary:
      "Partnering with OEMs on machine controls, HMI standards, and coordinated field support.",
    status: "placeholder",
  },
  {
    slug: "software-visualization",
    name: "Visualization Software Partner",
    category: "Software",
    summary:
      "Working with SCADA/HMI software partners for joint proposals and scalable visualization deployments.",
    status: "placeholder",
  },
  {
    slug: "field-services-ally",
    name: "Field Services Ally",
    category: "Field Services",
    summary:
      "Extending commissioning and emergency coverage through trusted regional field partners.",
    status: "placeholder",
  },
];

export const partnerValueProps = [
  {
    title: "Complementary delivery",
    body: "Pair controls engineering with fabrication, OEM equipment, or field coverage without forcing one team to do everything poorly.",
  },
  {
    title: "Multi-vendor coverage",
    body: "Rockwell, GE, Keyence, and mixed environments—so joint proposals fit the customer’s installed base.",
  },
  {
    title: "Clear accountability",
    body: "Defined scopes, shared documentation standards, and clean handoffs keep projects moving.",
  },
];
