import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <AnimatedSection>
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-secondary-blue mb-3">
              OUR COMMITMENT
            </span>
            <div className="decorative-line mb-5" />
            <h2 className="heading-display text-3xl md:text-4xl lg:text-[42px] text-deep-blue mb-5">
              Purity in Every Drop
            </h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              Savor the pristine, invigorating flavor of our mineral water, enriched with vital
              minerals to elevate your hydration experience. Each sip is a refreshing journey,
              infusing you with freshness and vigor.
            </p>
            <p className="text-base text-muted leading-relaxed mb-6">
              Bottled directly at the source, our mineral water captures
              the essence of nature with every indulgent sip, and sealed in the refreshing vitality
              that accompanies you throughout your day.
            </p>
            <ul className="space-y-3">
              {[
                'Advanced multi-stage RO + UV purification',
                'Enriched with essential minerals',
                'Certified by food safety authorities',
                'Reliable delivery across twin cities',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-dark-text">
                  <CheckCircle className="w-5 h-5 text-accent-green shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection delay={0.15}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-bg.jpg"
                  alt="Premium Aqua Clear water being poured"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-4 md:-left-8 glass-card rounded-xl shadow-xl p-5 border border-white/60">
                <p className="text-xs text-muted mb-0.5">Since Establishment</p>
                <p className="text-2xl font-bold text-deep-blue heading-display">Trusted Quality</p>
                <div className="decorative-line mt-2" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
