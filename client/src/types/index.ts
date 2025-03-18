// Page and Navigation Types
export interface NavLink {
  title: string;
  href: string;
  isDropdown?: boolean;
  dropdownItems?: NavLink[];
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: 'structural' | 'cladding' | 'other';
}

// Project Types
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  content: string;
  name: string;
  company: string;
  initials: string;
  rating: number;
}

// Features and Benefits Types
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

// Contact Form Types
export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Animation Types
export interface AnimationVariant {
  hidden: any;
  show: any;
}

// Theme Types
export type Theme = 'light' | 'dark';

// Site Metadata
export interface SiteMetadata {
  title: string;
  description: string;
  ogImage: string;
  siteUrl: string;
  keywords: string[];
}

// PWA Installation Status
export interface PWAInstallationStatus {
  isInstallable: boolean;
  isInstalled: boolean;
  deferredPrompt: any;
}
