import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileBottomBar from '@/components/layout/MobileBottomBar';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.companyName} | Pure Drinking Water & Reliable Delivery`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description:
    'Premium drinking water for homes, offices, and businesses in Pakistan. Clean water, reliable delivery, professional service.',
  keywords: [
    'drinking water',
    'mineral water',
    'water delivery',
    'bottled water Pakistan',
    'Aqua Clear',
    'water supply Islamabad',
    'premium water',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    siteName: siteConfig.companyName,
    title: `${siteConfig.companyName} | Pure Drinking Water & Reliable Delivery`,
    description:
      'Premium drinking water for homes, offices, and businesses in Pakistan.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.companyName} | Pure Drinking Water & Reliable Delivery`,
    description:
      'Premium drinking water for homes, offices, and businesses in Pakistan.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans text-dark-text bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomBar />
        <WhatsAppButton />
        <ScrollToTop />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: siteConfig.companyName,
              description:
                'Premium drinking water for homes, offices, and businesses in Pakistan.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.address,
                addressLocality: 'Islamabad',
                addressCountry: 'PK',
              },
              telephone: siteConfig.phone,
              email: siteConfig.email,
              url: 'https://aquaclear.pk',
            }),
          }}
        />
      </body>
    </html>
  );
}
