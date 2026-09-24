import Link from 'next/link';
import {
  Droplets,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import { siteConfig, phoneLink, emailLink } from '@/config/site';

/* Simple SVG social icons since lucide-react doesn't include branded icons */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-water-blue/20 rounded-lg flex items-center justify-center">
                <Droplets className="w-5 h-5 text-water-blue" />
              </div>
              <span className="text-lg font-bold tracking-tight">{siteConfig.companyName}</span>
            </Link>
            <p className="text-sm text-blue-200 leading-relaxed mb-6 max-w-xs">
              Premium drinking water for homes, offices, and businesses. Delivering clean,
              reliable hydration across {siteConfig.city}.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: <FacebookIcon />, href: siteConfig.socialLinks.facebook, label: 'Facebook' },
                { icon: <InstagramIcon />, href: siteConfig.socialLinks.instagram, label: 'Instagram' },
                { icon: <MessageCircle className="w-4 h-4" />, href: siteConfig.socialLinks.whatsapp, label: 'WhatsApp' },
                { icon: <LinkedinIcon />, href: siteConfig.socialLinks.linkedin, label: 'LinkedIn' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-water-blue/30 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-water-blue">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Products', href: '/products' },
                { label: 'Services', href: '/services' },
                { label: 'Quality', href: '/quality' },
                { label: 'Careers', href: '/hiring' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-water-blue">
              Products
            </h3>
            <ul className="space-y-3">
              {[
                { label: '19L Premium Water', href: '/products/19l' },
                { label: '12L Water', href: '/products/12l' },
                { label: '1.5L Bottles', href: '/products/1-5l' },
                { label: '500ml Bottles', href: '/products/500ml' },
                { label: 'Commercial Solutions', href: '/products/commercial' },
                { label: 'Private Label', href: '/products/private-label' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-water-blue">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-water-blue shrink-0" />
                <a href={phoneLink} className="text-sm text-blue-200 hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 mt-0.5 text-water-blue shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-water-blue shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-blue-200 hover:text-white transition-colors">
                    {siteConfig.email}
                  </a>
                  <a href={`mailto:${siteConfig.salesEmail}`} className="text-xs text-blue-300 hover:text-white transition-colors">
                    {siteConfig.salesEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-water-blue shrink-0" />
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  {siteConfig.address}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-blue-300">
            © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-blue-300">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
