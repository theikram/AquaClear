import Image from 'next/image';
import Link from 'next/link';
import { Truck, Clock, Home, Building2, Phone } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { siteConfig } from '@/config/site';

const features = [
  { icon: Truck, label: 'Fast Delivery' },
  { icon: Clock, label: 'Scheduled Delivery' },
  { icon: Home, label: 'Home Delivery' },
  { icon: Building2, label: 'Office Delivery' },
];

export default function DeliverySection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/delivery.jpg"
        alt="Water delivery service"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/90 via-deep-blue/80 to-secondary-blue/60 z-[1]" />

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full z-[2] rotate-180">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
          <path d="M0,40 C360,10 720,50 1080,25 C1260,12 1380,30 1440,20 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
      {/* Wave bottom */}
      <div className="wave-bottom z-[2]">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
          <path d="M0,40 C360,10 720,50 1080,25 C1260,12 1380,30 1440,20 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      <div className="container-wide relative z-10 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-water-blue mb-3">
              DELIVERY SERVICE
            </span>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-5">
              Fresh Water, Right To Your Door
            </h2>
            <p className="text-base text-blue-100/90 leading-relaxed mb-8 max-w-lg">
              Whether you need water delivered to your home, office, or commercial
              establishment, our reliable delivery network has you covered.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href="/contact#order"
                className="btn-water text-base px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                Call to Deliver
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-bold hover:bg-white/10 transition-all"
              >
                Our Services
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass-card-dark rounded-xl p-6 text-center card-hover"
                >
                  <Icon className="w-8 h-8 text-water-blue mx-auto mb-3" />
                  <p className="text-sm font-semibold text-white">{label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
