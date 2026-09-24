import Image from 'next/image';
import { Droplets, MessageCircle, Phone } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <Image
        src="/images/waterfall.jpg"
        alt="Natural waterfall"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/85 via-secondary-blue/70 to-deep-blue/85 z-[1]" />

      {/* Large watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-[1] opacity-[0.03]">
        <Droplets className="w-[400px] h-[400px] text-white" />
      </div>

      <div className="container-wide relative z-10 text-center text-white">
        <AnimatedSection>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-5 text-balance">
            Need Clean Water Delivered?
          </h2>
          <p className="text-base md:text-lg text-blue-100/90 max-w-xl mx-auto mb-8 leading-relaxed">
            Place your order today and experience convenient, reliable hydration
            delivered right to your doorstep.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact#order"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-deep-blue font-bold hover:bg-light-blue hover:shadow-xl transition-all shadow-lg text-base"
            >
              <Phone className="w-5 h-5" />
              Order Water
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20BD5A] transition-all shadow-lg text-base"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>

          {/* Phone number */}
          <div className="mt-8 flex items-center justify-center gap-4 text-xl md:text-2xl font-bold">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-water-blue transition-colors">
              <Phone className="w-5 h-5 text-water-blue" />
              {siteConfig.phone}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
