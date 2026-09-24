import type { SiteConfig, NavItem } from '@/types';

/* ============================================================
   SITE CONFIGURATION
   ============================================================
   All company information is centralized here.
   Replace placeholder values with real company data.
   ============================================================ */

export const siteConfig: SiteConfig = {
  companyName: 'Aqua Clear',
  tagline: 'Pure Water. Pure Confidence.',
  phone: '+92 311 122 7767',
  whatsapp: '923111227767',
  email: 'info@blueh2o.pk',
  salesEmail: 'sales@blueh2o.pk',
  address:
    'Plaza No. 19c, Street 12, Block C, Sector 4, Airport housing society, Islamabad, 4, Rawalpindi, 44000',
  city: 'Islamabad & Rawalpindi, Pakistan',
  socialLinks: {
    facebook: 'https://facebook.com/blueh2o.pk',
    instagram: 'https://instagram.com/blueh2o.pk',
    whatsapp: 'https://wa.me/923111227767',
    linkedin: 'https://linkedin.com/company/blueh2opk',
  },
  businessHours: {
    weekdays: 'Mon – Thu: 9:00 AM – 6:00 PM',
    saturday: 'Sat: 9:00 AM – 4:00 PM',
    sunday: 'Sun: 10:00 AM – 2:00 PM',
    closed: 'Friday: Closed',
  },
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6647.658582095589!2d73.1112290935791!3d33.583781300000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed55e272e799%3A0x67cd6f29178521cc!2sBlue%20H2o!5e0!3m2!1sen!2sus!4v1790228761527!5m2!1sen!2sus',
  googleMapsUrl: 'https://maps.app.goo.gl/Pk3Yra1nAfsWtFw3A',
};

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Mineral Water', href: '/products' },
      { label: '19L Water', href: '/products/19l' },
      { label: '12L Water', href: '/products/12l' },
      { label: '1.5L Bottles', href: '/products/1-5l' },
      { label: '500ml Bottles', href: '/products/500ml' },
      { label: 'Commercial Water', href: '/products/commercial' },
      { label: 'Private Label', href: '/products/private-label' },
    ],
  },
  { label: 'Services', href: '/services' },
  { label: 'Quality & Certification', href: '/quality' },
  { label: 'Our Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const phoneLink = `tel:${siteConfig.phone}`;
export const emailLink = `mailto:${siteConfig.email}`;
