export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const navigationData: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Structural Solutions",
    href: "/structural",
    children: [
      {
        title: "SIP (Structural Insulated Panels)",
        href: "/structural/sip",
        description: "Energy-efficient building systems with superior insulation properties",
      },
      {
        title: "CSF (Cold-Formed Steel)",
        href: "/structural/csf",
        description: "Durable, non-combustible framing for commercial and residential construction",
      },
      {
        title: "Timber Construction",
        href: "/structural/timber",
        description: "Sustainable and versatile structural solutions using engineered wood",
      },
    ],
  },
  {
    title: "Cladding",
    href: "/cladding",
    children: [
      {
        title: "WPC (Wood-Plastic Composite)",
        href: "/cladding/wpc",
        description: "Low-maintenance facade solutions with natural wood appearance",
      },
      {
        title: "Aluminum Cladding",
        href: "/cladding/aluminum",
        description: "Lightweight, durable, and weather-resistant exterior systems",
      },
      {
        title: "Terracotta",
        href: "/cladding/terracotta",
        description: "Traditional yet modern cladding with excellent thermal properties",
      },
    ],
  },
  {
    title: "Solar Greenhouse",
    href: "/solar-greenhouse",
  },
  {
    title: "Prefabs",
    href: "/prefabs",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Services",
    href: "/services",
  },
];
