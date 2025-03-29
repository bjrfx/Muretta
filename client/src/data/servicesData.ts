import sipImg2 from '../assets/sip/sip-2.avif';
import sipImg1 from '../assets/sip/sip1.avif'
import claddingImg from '../assets/cladding/cladding.jpg'
import urbanfarmingImg from '../assets/solargreenhouse/urbanfarming.avif'
import model1 from '../assets/prefab/model1/model1.jpg'
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  subItems?: {
    title: string;
    href: string;
  }[];
  features?: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const serviceItems: ServiceItem[] = [
  {
    id: "structural",
    title: "Structural Solutions",
    description: "Advanced structural systems for modern construction needs. Efficient, durable, and customizable solutions.",
    image: sipImg2,
    href: "/structural",
    subItems: [
      {
        title: "SIP (Structural Insulated Panels)",
        href: "/structural/sip",
      },
      {
        title: "CSF (Cold-Formed Steel)",
        href: "/structural/csf",
      },
      {
        title: "Timber Construction",
        href: "/structural/timber",
      },
    ],
    features: [
      {
        title: "Energy Efficient",
        description: "High R-values for better temperature control",
        icon: "check-circle",
      },
      {
        title: "Faster Construction",
        description: "Prefabricated for quick assembly on site",
        icon: "timer",
      },
      {
        title: "Cost Effective",
        description: "Reduced labor and long-term energy savings",
        icon: "dollar-sign",
      },
      {
        title: "Environmentally Friendly",
        description: "Less waste and better sustainability",
        icon: "leaf",
      },
    ],
  },
  {
    id: "cladding",
    title: "Cladding Solutions",
    description: "Lightweight cladding in construction offers benefits such as reduced structural load, improved energy efficiency, faster installation, and easier maintenance.",
    image: claddingImg,
    href: "/cladding",
    subItems: [
      {
        title: "WPC (Wood-Plastic Composite)",
        href: "/cladding/wpc",
      },
      {
        title: "Aluminum Cladding",
        href: "/cladding/aluminum",
      },
      {
        title: "Terracotta",
        href: "/cladding/terracotta",
      },
    ],
    features: [
      {
        title: "Weather Resistant",
        description: "Protects buildings from harsh elements",
        icon: "cloud-rain",
      },
      {
        title: "Aesthetically Pleasing",
        description: "Modern design options for any architecture",
        icon: "image",
      },
      {
        title: "Low Maintenance",
        description: "Durable materials requiring minimal upkeep",
        icon: "tool",
      },
      {
        title: "Thermal Efficiency",
        description: "Helps maintain interior temperature",
        icon: "thermometer",
      },
    ],
  },
  {
    id: "greenhouse",
    title: "Solar Greenhouse",
    description: "We are a consulting firm, specializing in climate-smart agricultural practices, with a particular focus on urban and controlled environment farming.",
    image: urbanfarmingImg,
    href: "/solar-greenhouse",
    features: [
      {
        title: "Energy Efficient",
        description: "Solar optimized design reduces energy costs",
        icon: "sun",
      },
      {
        title: "Climate Control",
        description: "Advanced systems for ideal growing conditions",
        icon: "thermometer",
      },
      {
        title: "Customizable",
        description: "Designs tailored to specific crop needs",
        icon: "settings",
      },
      {
        title: "Year-round Production",
        description: "Enables growing regardless of season",
        icon: "calendar",
      },
    ],
  },
  {
    id: "prefabs",
    title: "Prefabricated Construction",
    description: "Factory-built components that offer time savings, quality control, and reduced waste. Perfect for modern construction projects.",
    image: model1,
    href: "/prefabs",
    features: [
      {
        title: "Time Efficient",
        description: "Reduced on-site construction time",
        icon: "clock",
      },
      {
        title: "Quality Control",
        description: "Factory precision for consistent results",
        icon: "check-square",
      },
      {
        title: "Cost Effective",
        description: "Streamlined process reduces labor costs",
        icon: "dollar-sign",
      },
      {
        title: "Waste Reduction",
        description: "Optimized materials usage in controlled environment",
        icon: "recycle",
      },
    ],
  },
];

export const featuredService = {
  id: "sip",
  title: "Structural Insulated Panels (SIP)",
  description: "SIPs provide superior insulation and structural integrity in a single, easy-to-install component. Perfect for energy-efficient construction with reduced build times.",
  image: sipImg1,
  features: [
    {
      title: "Energy Efficient",
      description: "High R-values for better temperature control",
    },
    {
      title: "Faster Construction",
      description: "Prefabricated for quick assembly on site",
    },
    {
      title: "Cost Effective",
      description: "Reduced labor and long-term energy savings",
    },
    {
      title: "Environmentally Friendly",
      description: "Less waste and better sustainability",
    },
  ],
  stats: {
    title: "70% Faster",
    description: "Construction time compared to traditional methods",
  },
};
