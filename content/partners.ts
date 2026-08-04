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
    name: "Panel Solutions Partner",
    category: "Panel Shop",
    summary:
      "Placeholder for a UL panel fabrication partner supporting design-to-build delivery.",
    status: "placeholder",
  },
  {
    slug: "oem-machine-builder",
    name: "OEM Machine Builder",
    category: "OEM",
    summary:
      "Placeholder for an OEM collaboration on machine controls, HMI standards, and field support.",
    status: "placeholder",
  },
  {
    slug: "software-visualization",
    name: "Visualization Software Partner",
    category: "Software",
    summary:
      "Placeholder for a SCADA/HMI software partner enabling joint proposals and licensed deployments.",
    status: "placeholder",
  },
  {
    slug: "field-services-ally",
    name: "Field Services Ally",
    category: "Field Services",
    summary:
      "Placeholder for a regional field partner that extends commissioning and emergency coverage.",
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
