export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Product {
  slug: string;
  name: string;
  size: string;
  shortDescription: string;
  description: string;
  features: string[];
  idealFor: string[];
  image: string;
  category: 'residential' | 'commercial' | 'all';
  order: number;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
}

export interface Department {
  name: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  image: string;
  level: 'leadership' | 'management' | 'team';
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  isSample: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Certificate {
  title: string;
  issuingBody: string;
  year: string;
  image: string;
  isPlaceholder: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  message: string;
}

export interface OrderFormData {
  name: string;
  phone: string;
  deliveryArea: string;
  product: string;
  quantity: number;
  preferredTime: string;
  notes: string;
}

export interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverMessage: string;
  cvFile?: File;
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  salesEmail: string;
  address: string;
  city: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    whatsapp: string;
    linkedin: string;
  };
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    closed: string;
  };
  googleMapsEmbedUrl: string;
  googleMapsUrl: string;
}
