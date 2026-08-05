const RELEASE_BASE =
  "https://github.com/KphungFROMM/KonnectAutomationSuite-Releases/releases/download/v1.0.0";

export type LicenseTerm = "annual" | "perpetual";

export type PricingSku = {
  id: string;
  productSlug: string;
  label: string;
  term: LicenseTerm;
  priceUsd: number;
  /** Products fulfilled by this SKU (bundle expands to multiple keys offline). */
  fulfills: string[];
};

export type SoftwareWorkflowStep = {
  step: string;
  body: string;
};

export type SoftwareProduct = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  features: string[];
  plantJobs: string[];
  workflow: SoftwareWorkflowStep[];
  trialNotes: string;
  /** Fully free product with no paid SKUs (e.g. BootP). */
  isFree: boolean;
  /** Permanent free tier with optional paid Full upgrade (e.g. NetworkScan). */
  freeForever: boolean;
  /** Public teaser — not downloadable or purchasable yet. */
  comingSoon: boolean;
  platform: string;
  version: string;
  downloadUrl: string;
  downloadLabel: string;
  screenshots: { src: string; alt: string }[];
  pricingSkuIds: string[];
};

export const softwareSuite = {
  name: "Konnect Software Suite",
  tagline: "OT commissioning tools and on-prem plant software—built for plants, not the cloud.",
  description:
    "Windows-first industrial software from Controls D Automation. Download free installers and trials today; purchase offline Full licenses when you are ready. KonnectEdge and KonnectReports are coming soon.",
  valueProps: [
    {
      title: "Offline & on-prem",
      body: "No phone-home telemetry. Licenses activate with a Machine ID—ideal for locked-down OT networks.",
    },
    {
      title: "Windows-ready installers",
      body: "Self-contained Setup packages for Windows 10/11 x64. No separate .NET runtime for end users.",
    },
    {
      title: "Try before you buy",
      body: "BootP and NetworkScan Free are permanent. ModbusTools, PIDTuner, and OEE ship with trials before Full.",
    },
  ],
} as const;

export const pricingSkus: PricingSku[] = [
  {
    id: "mbt-annual",
    productSlug: "modbus-tools",
    label: "ModbusTools — Annual",
    term: "annual",
    priceUsd: 99,
    fulfills: ["modbus-tools"],
  },
  {
    id: "mbt-perpetual",
    productSlug: "modbus-tools",
    label: "ModbusTools — Perpetual",
    term: "perpetual",
    priceUsd: 199,
    fulfills: ["modbus-tools"],
  },
  {
    id: "nsc-annual",
    productSlug: "network-scan",
    label: "NetworkScan Full — Annual",
    term: "annual",
    priceUsd: 129,
    fulfills: ["network-scan"],
  },
  {
    id: "nsc-perpetual",
    productSlug: "network-scan",
    label: "NetworkScan Full — Perpetual",
    term: "perpetual",
    priceUsd: 249,
    fulfills: ["network-scan"],
  },
  {
    id: "pid-annual",
    productSlug: "pid-tuner",
    label: "PIDTuner — Annual",
    term: "annual",
    priceUsd: 299,
    fulfills: ["pid-tuner"],
  },
  {
    id: "pid-perpetual",
    productSlug: "pid-tuner",
    label: "PIDTuner — Perpetual",
    term: "perpetual",
    priceUsd: 599,
    fulfills: ["pid-tuner"],
  },
  {
    id: "oee-annual",
    productSlug: "oee",
    label: "OEE — Annual",
    term: "annual",
    priceUsd: 1999,
    fulfills: ["oee"],
  },
  {
    id: "oee-perpetual",
    productSlug: "oee",
    label: "OEE — Perpetual",
    term: "perpetual",
    priceUsd: 3999,
    fulfills: ["oee"],
  },
  {
    id: "desktop-bundle-annual",
    productSlug: "desktop-bundle",
    label: "Desktop Bundle — Annual",
    term: "annual",
    priceUsd: 399,
    fulfills: ["modbus-tools", "network-scan", "pid-tuner"],
  },
  {
    id: "desktop-bundle-perpetual",
    productSlug: "desktop-bundle",
    label: "Desktop Bundle — Perpetual",
    term: "perpetual",
    priceUsd: 799,
    fulfills: ["modbus-tools", "network-scan", "pid-tuner"],
  },
];

export const softwareProducts: SoftwareProduct[] = [
  {
    slug: "konnect-bootp",
    name: "KonnectBootP",
    shortName: "BootP",
    tagline: "Modern EtherNet/IP BOOTP/DHCP commissioning",
    summary:
      "A free replacement for Rockwell’s retired BootP-DHCP utility. Discover factory-default CIP devices, assign addressing, verify, then set static—without FactoryTalk or RSLinx.",
    features: [
      "BOOTP/DHCP server on UDP 67 with rich List Identity discovery",
      "Assign IP, subnet, gateway, DNS, and hostname",
      "Verify workflow before Set Static via CIP",
      "Profiles (.btpprofile), event log, and CSV export",
      "Dark/light UI with guided commissioning steps",
      "Free for commercial use—no license key required",
    ],
    plantJobs: [
      "Bring new CIP devices online at first power-up",
      "Recover factory-default modules after swap-out",
      "Document addressing before turnover with CSV export",
      "Commission without FactoryTalk or RSLinx on the laptop",
    ],
    workflow: [
      {
        step: "Pick the NIC",
        body: "Select the OT adapter, start the BOOTP/DHCP server, and watch List Identity responses land.",
      },
      {
        step: "Assign addressing",
        body: "Set IP, subnet, gateway, DNS, and hostname for each discovered device.",
      },
      {
        step: "Verify, then lock",
        body: "Confirm reachability before Set Static via CIP so you do not brick a module mid-startup.",
      },
      {
        step: "Save the profile",
        body: "Keep a .btpprofile and event log for the next panel or FAT.",
      },
    ],
    trialNotes: "Full commercial access at no cost. Run as Administrator for UDP port 67.",
    isFree: true,
    freeForever: true,
    comingSoon: false,
    platform: "Windows 10/11 x64",
    version: "1.0.0",
    downloadUrl: `${RELEASE_BASE}/KonnectBootP-Setup-1.0.0.exe`,
    downloadLabel: "Download KonnectBootP",
    screenshots: [
      {
        src: "/software/screenshots/bootp/network.png",
        alt: "KonnectBootP network setup and BOOTP server controls",
      },
    ],
    pricingSkuIds: [],
  },
  {
    slug: "modbus-tools",
    name: "KonnectModbusTools",
    shortName: "ModbusTools",
    tagline: "Modbus TCP/RTU commissioning and troubleshooting",
    summary:
      "A full Modbus bench in one Windows app—master polling, slave simulation, live trends, and frame-level transaction logging with offline licensing.",
    features: [
      "Modbus Master for TCP and RTU with live read/write",
      "Independent Slave Simulator for lab and FAT work",
      "ScottPlot register trends and transaction log with CSV export",
      "Saved connection profiles (.mbtprofile)",
      "Optional CLI (mbt) for scripted checks",
      "14-day trial → Full license (node-locked, offline)",
    ],
    plantJobs: [
      "Prove Modbus maps before PLC code is ready",
      "Simulate a slave when the field device is offline",
      "Capture frame-level logs for vendor support tickets",
      "Trend registers during FAT and first-article runs",
    ],
    workflow: [
      {
        step: "Connect",
        body: "Open a TCP or RTU master session—or spin up the built-in slave simulator.",
      },
      {
        step: "Map registers",
        body: "Read and write coils and holding registers with live values on the bench.",
      },
      {
        step: "Trend and log",
        body: "Watch ScottPlot trends and export the transaction log when something looks wrong.",
      },
      {
        step: "Save the profile",
        body: "Reuse .mbtprofile files across jobs, or script checks with the optional CLI.",
      },
    ],
    trialNotes: "14-day trial included. Activate Full under Settings with a Machine ID license key.",
    isFree: false,
    freeForever: false,
    comingSoon: false,
    platform: "Windows 10/11 x64",
    version: "1.0.0",
    downloadUrl: `${RELEASE_BASE}/KonnectModbusTools-Setup-1.0.0.exe`,
    downloadLabel: "Download trial",
    screenshots: [
      {
        src: "/software/screenshots/modbus-tools/master.png",
        alt: "KonnectModbusTools Modbus Master connection and register workspace",
      },
    ],
    pricingSkuIds: ["mbt-annual", "mbt-perpetual"],
  },
  {
    slug: "network-scan",
    name: "KonnectNetworkScan",
    shortName: "NetworkScan",
    tagline: "OT subnet discovery and site survey reporting",
    summary:
      "On-prem Windows subnet discovery for OT networks. Free forever for unlimited /24 scanning and results. Activate Full for Map, Sites, and branded PDF/CSV/HTML site survey deliverables.",
    features: [
      "Permanent Free edition: full /24 scan and results—no host cap, no time limit",
      "OT-safe ARP/ICMP discovery with industrial port probes (44818, 2222, 502, 161, and more)",
      "CIP List Identity and 35+ automation brand resolution",
      "PLC / Drive / Switch / HMI result badges",
      "Full unlocks Map, multi-site workspace, Report preview, and PDF/CSV/HTML export",
      "Offline Machine ID activation with KONNECT-NSC- keys",
    ],
    plantJobs: [
      "Walk a new OT subnet before you touch PLC code",
      "Identify PLCs, drives, switches, and HMIs by brand",
      "Build multi-site survey workspaces for service contracts",
      "Deliver branded PDF/CSV/HTML reports to the customer",
    ],
    workflow: [
      {
        step: "Choose the NIC",
        body: "Point Free at the OT adapter and scan a /24 with ARP/ICMP plus industrial probes.",
      },
      {
        step: "Review results",
        body: "Sort hosts by PLC, drive, switch, or HMI badges with CIP List Identity detail.",
      },
      {
        step: "Map the site",
        body: "With Full, organize Sites, open the Map, and preview the survey report.",
      },
      {
        step: "Export deliverables",
        body: "Ship PDF, CSV, or HTML without watermarks once Full is activated offline.",
      },
    ],
    trialNotes:
      "Free forever includes unlimited subnet scan and results. Map, Sites, Report, and exports require a Full license—activate under Settings with your Machine ID key. No trial clock and no PDF watermarks.",
    isFree: false,
    freeForever: true,
    comingSoon: false,
    platform: "Windows 10/11 x64",
    version: "1.0.0",
    downloadUrl: `${RELEASE_BASE}/KonnectNetworkScan-Setup-1.0.0.exe`,
    downloadLabel: "Download Free",
    screenshots: [
      {
        src: "/software/screenshots/network-scan/network.png",
        alt: "KonnectNetworkScan NIC selection and site survey setup",
      },
    ],
    pricingSkuIds: ["nsc-annual", "nsc-perpetual"],
  },
  {
    slug: "pid-tuner",
    name: "KonnectPIDTuner",
    shortName: "PIDTuner",
    tagline: "Logix PID autotuning over EtherNet/IP",
    summary:
      "Tune Allen-Bradley PID, PIDE, and PPID loops directly over EtherNet/IP—no RSLinx required. Smart Tune, Pulse Autotune, expert workflows, and PDF session reports.",
    features: [
      "Smart Tune and Pulse Autotune for open- and closed-loop work",
      "Manual Tools six-step expert wizard",
      "IMC, SIMC, Cohen–Coon, and Ziegler–Nichols rules",
      "Loop health dashboard, valve diagnostics, and recipe library",
      "Simulation mode for safe practice without a PLC",
      "14-day trial → Full license (Advanced/MPC features gated on Full)",
    ],
    plantJobs: [
      "Tune Logix PID/PIDE/PPID loops without RSLinx",
      "Practice safely in simulation before touching a live loop",
      "Document valve health and loop KPIs for the process team",
      "Export PDF session reports after a tuning campaign",
    ],
    workflow: [
      {
        step: "Connect the PLC",
        body: "Reach the Logix controller over EtherNet/IP and pick the loop tags.",
      },
      {
        step: "Choose a method",
        body: "Run Smart Tune, Pulse Autotune, or the Manual Tools expert wizard.",
      },
      {
        step: "Apply and verify",
        body: "Review IMC/SIMC/ZN suggestions, valve diagnostics, and loop health.",
      },
      {
        step: "Report the session",
        body: "Save recipes and export a PDF so the next shift knows what changed.",
      },
    ],
    trialNotes: "14-day trial included. Full license unlocks advanced control and MPC advisory features.",
    isFree: false,
    freeForever: false,
    comingSoon: false,
    platform: "Windows 10/11 x64",
    version: "1.0.0",
    downloadUrl: `${RELEASE_BASE}/KonnectPIDTuner-Setup-1.0.0.exe`,
    downloadLabel: "Download trial",
    screenshots: [
      {
        src: "/software/screenshots/pid-tuner/connect.png",
        alt: "KonnectPIDTuner Connect PLC and loop selection workspace",
      },
    ],
    pricingSkuIds: ["pid-annual", "pid-perpetual"],
  },
  {
    slug: "oee",
    name: "KonnectOEE",
    shortName: "OEE",
    tagline: "See every line. Know every stop. Act in the shift.",
    summary:
      "On-prem browser OEE for plants that need live Availability, Performance, and Quality—plus downtime reasons, multi-plant hierarchy, dashboards, and historian—without sending data to the cloud.",
    features: [
      "Live OEE / APQ with downtime capture and reason codes",
      "Multi-plant hierarchy and role-based access",
      "Rockwell EtherNet/IP connectivity (plus Modbus / OPC UA paths)",
      "WYSIWYG dashboards, andon boards, and kiosk displays",
      "Postgres / Timescale historian with shift reporting",
      "Windows Service install; browser UI on your plant network",
    ],
    plantJobs: [
      "Give supervisors live APQ without a cloud subscription",
      "Capture downtime reasons operators will actually use",
      "Drive andon and kiosk boards on the plant floor",
      "Keep historian data on your network for shift reports",
    ],
    workflow: [
      {
        step: "Install on-prem",
        body: "Run the Windows Service installer with your own Postgres/Timescale database password.",
      },
      {
        step: "Model the plant",
        body: "Build plant → line hierarchy, roles, and PLC or Modbus/OPC UA connections.",
      },
      {
        step: "Run the shift",
        body: "Operators log stops; supervisors watch live OEE, dashboards, and andon boards.",
      },
      {
        step: "Review history",
        body: "Use analytics and historian views to close the loop after the shift.",
      },
    ],
    trialNotes:
      "14-day trial with limited plant/line capacity. Installer requires a unique DB password (min 8 characters).",
    isFree: false,
    freeForever: false,
    comingSoon: false,
    platform: "Windows PC / Server",
    version: "1.0.1",
    downloadUrl: `${RELEASE_BASE}/KonnectOEE-Setup-1.0.1.exe`,
    downloadLabel: "Download trial",
    screenshots: [
      {
        src: "/software/screenshots/oee/dashboard-supervisor.png",
        alt: "KonnectOEE Line 1 supervisor dashboard with live OEE KPIs",
      },
      {
        src: "/software/screenshots/oee/operator-station.png",
        alt: "KonnectOEE operator station plant overview",
      },
      {
        src: "/software/screenshots/oee/kiosk-andon.png",
        alt: "KonnectOEE andon kiosk display",
      },
      {
        src: "/software/screenshots/oee/analytics.png",
        alt: "KonnectOEE analytics and historian views",
      },
      {
        src: "/software/screenshots/oee/dashboards-hub.png",
        alt: "KonnectOEE dashboards hub with plant boards",
      },
    ],
    pricingSkuIds: ["oee-annual", "oee-perpetual"],
  },
  {
    slug: "edge",
    name: "KonnectEdge",
    shortName: "Edge",
    tagline: "Native edge designer for gateways, tags, and plant HMIs",
    summary:
      "A free Windows WPF designer for authoring edge solutions—drivers, tags, optional HMI screens, and runtime packages you deploy to plant PCs. Runtime licensing is coming with the public release.",
    features: [
      "Native Windows Designer (no browser design server, no login)",
      "Drivers, tags, scripts, alarms, and optional HMI canvas",
      "Headless edge projects are first-class—screens optional",
      "Export `.cedge-runtime` packages for plant PCs",
      "Offline design without DriverHost; live preview when connected",
      "Licensed native/web runtime on the plant PC (public release pending)",
    ],
    plantJobs: [
      "Author protocol gateways and tag models on an engineer laptop",
      "Design optional HMI screens when the line needs a local UI",
      "Ship headless edge packages with no screens at all",
      "Export runtime zips for plant PCs without a design server",
    ],
    workflow: [
      {
        step: "Create a project",
        body: "When available, open the free Designer and start a native, web, or headless target.",
      },
      {
        step: "Wire drivers and tags",
        body: "Add connectivity, system tags, and logic—screens stay optional.",
      },
      {
        step: "Design if needed",
        body: "Lay out HMI controls on the canvas, or keep the project headless.",
      },
      {
        step: "Export runtime",
        body: "Package a `.cedge-runtime` for the plant PC and activate the licensed runtime.",
      },
    ],
    trialNotes:
      "Coming soon for public download. Designer will ship free; plant runtime licenses will activate offline with KONNECT-EDG- keys.",
    isFree: false,
    freeForever: false,
    comingSoon: true,
    platform: "Windows 10/11 x64 (Designer) · Plant PC runtime",
    version: "Preview",
    downloadUrl: "",
    downloadLabel: "Coming soon",
    screenshots: [
      {
        src: "/software/screenshots/edge/designer-canvas.png",
        alt: "KonnectEdge Designer canvas with Demo Project HMI layout",
      },
      {
        src: "/software/screenshots/edge/designer.png",
        alt: "KonnectEdge Designer project hub with recent projects",
      },
    ],
    pricingSkuIds: [],
  },
  {
    slug: "reports",
    name: "KonnectReports",
    shortName: "Reports",
    tagline: "On-prem industrial reporting from PLC to scheduled PDF",
    summary:
      "Connect Rockwell, OPC UA, or Modbus sources, log tags to a historian, design report templates, and generate on-demand or scheduled PDFs—all on your plant network.",
    features: [
      "PLC / OPC UA / Modbus data sources with tag browse",
      "Data logger groups into an on-prem historian",
      "Trends, schedules, and portal report generation",
      "WYSIWYG report designer with industrial template starters",
      "Compliance-oriented audit and batch report patterns",
      "Browser UI with role-based access on your network",
    ],
    plantJobs: [
      "Log PLC tags into an on-prem historian for shift PDFs",
      "Generate batch, HACCP, DMR, and alarm KPI style reports",
      "Schedule email/PDF delivery without a cloud SaaS",
      "Keep compliance templates on your plant network",
    ],
    workflow: [
      {
        step: "Connect sources",
        body: "When available, add Rockwell, OPC UA, or Modbus endpoints and browse tags.",
      },
      {
        step: "Log to historian",
        body: "Create logger groups, set intervals, and verify samples in Trends.",
      },
      {
        step: "Design the report",
        body: "Bind templates to historian queries—not live PLC reads at generate time.",
      },
      {
        step: "Schedule delivery",
        body: "Run on-demand from the portal or cron PDFs to email/FTP on your network.",
      },
    ],
    trialNotes:
      "Coming soon for public download and licensing. Contact us if you want early access for a pilot plant.",
    isFree: false,
    freeForever: false,
    comingSoon: true,
    platform: "Windows PC / Server · Browser UI",
    version: "Preview",
    downloadUrl: "",
    downloadLabel: "Coming soon",
    screenshots: [
      {
        src: "/software/screenshots/reports/portal.png",
        alt: "KonnectReports portal with industrial report templates",
      },
      {
        src: "/software/screenshots/reports/data-logger.png",
        alt: "KonnectReports Data Logger workspace",
      },
      {
        src: "/software/screenshots/reports/trends.png",
        alt: "KonnectReports Trends view",
      },
      {
        src: "/software/screenshots/reports/login.png",
        alt: "KonnectReports sign-in screen",
      },
    ],
    pricingSkuIds: [],
  },
];

export const desktopBundle = {
  slug: "desktop-bundle",
  name: "Desktop Commissioning Bundle",
  summary:
    "ModbusTools Full, NetworkScan Full, and PIDTuner Full together—three Full licenses for the price of a focused toolkit. NetworkScan Free remains available separately for scan and results.",
  includes: ["modbus-tools", "network-scan", "pid-tuner"] as const,
  pricingSkuIds: ["desktop-bundle-annual", "desktop-bundle-perpetual"] as const,
  separateAnnualTotal: 99 + 129 + 299,
  separatePerpetualTotal: 199 + 249 + 599,
};

export function getSoftwareProduct(slug: string): SoftwareProduct | undefined {
  return softwareProducts.find((product) => product.slug === slug);
}

export function getPricingSku(id: string): PricingSku | undefined {
  return pricingSkus.find((sku) => sku.id === id);
}

export function getSkusForProduct(slug: string): PricingSku[] {
  return pricingSkus.filter((sku) => sku.productSlug === slug);
}

export function getAccessBadge(product: SoftwareProduct): string {
  if (product.comingSoon) return "Coming soon";
  if (product.isFree) return "Free";
  if (product.freeForever) return "Free + Full";
  return "Trial available";
}

export function getLicenseModelLabel(product: SoftwareProduct): string {
  if (product.comingSoon) return "Public release pending · Contact us for early access";
  if (product.isFree) return "Free commercial use";
  if (product.freeForever) {
    return "Free forever (scan + results) · Full unlocks Map, Sites, Report, and exports";
  }
  return "Trial download · Annual or perpetual Full license";
}

export function getAvailableSoftwareProducts(): SoftwareProduct[] {
  return softwareProducts.filter((product) => !product.comingSoon);
}

export function getComingSoonSoftwareProducts(): SoftwareProduct[] {
  return softwareProducts.filter((product) => product.comingSoon);
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
