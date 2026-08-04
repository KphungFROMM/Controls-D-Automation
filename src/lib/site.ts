export const site = {
  name: "Controls D Automation",
  owner: "Derick Montes",
  tagline: "PLC, HMI, and SCADA systems engineered for uptime.",
  description:
    "Controls D Automation delivers PLC, HMI, and SCADA development, updates, and migrations—with deep expertise in Rockwell Automation, GE, and Keyence.",
  contact: {
    phone: "(555) 010-2400",
    email: "derick.montes@controlsdautomation.com",
    hours: "Mon–Fri, 8:00 AM – 5:00 PM",
    location: "Serving industrial facilities nationwide",
    addressLine1: "123 Industrial Way, Suite 200",
    addressLine2: "Your City, ST 00000",
  },
  socialNote: "Prefer the contact form for the fastest response on project inquiries.",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/platforms", label: "Platforms" },
  { href: "/industries", label: "Industries" },
  { href: "/partners", label: "Partners" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
