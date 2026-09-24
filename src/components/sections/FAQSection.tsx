import { Droplets } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import FAQAccordion from '@/components/ui/FAQAccordion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import type { FAQ } from '@/types';

const faqs: FAQ[] = [
  {
    question: 'Why are minerals important in drinking water?',
    answer: 'Minerals like calcium, magnesium, and potassium are essential for maintaining electrolyte balance, bone health, and overall bodily functions. Our water is enriched with these vital minerals during the purification process.',
  },
  {
    question: 'Why is it essential for families to stay hydrated?',
    answer: 'Proper hydration supports energy levels, cognitive function, digestion, and immune health for every family member. Children and elderly family members are especially vulnerable to dehydration.',
  },
  {
    question: 'What are your delivery options for Aqua Clear products?',
    answer: 'We offer flexible delivery options including one-time orders, scheduled recurring deliveries (daily, weekly, custom), home delivery, office delivery, and commercial bulk supply across Islamabad and Rawalpindi.',
  },
  {
    question: 'How does hydration impact exercise performance and recovery?',
    answer: 'Staying hydrated during exercise maintains body temperature, lubricates joints, and helps transport nutrients to muscles. Proper hydration before, during, and after exercise improves performance and speeds recovery.',
  },
  {
    question: 'Do you offer private-label bottled water services?',
    answer: 'Yes! We offer complete private-label services where we manufacture and package premium drinking water under your brand name. Contact us for custom branding, packaging design, and volume pricing.',
  },
  {
    question: 'How can I place an order?',
    answer: 'You can order through our website, via WhatsApp, or by calling our order hotline. We also accept orders through our contact form and offer scheduled recurring delivery.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 md:py-28 section-water-texture">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Heading + Illustration */}
          <AnimatedSection>
            <div className="lg:sticky lg:top-32">
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-secondary-blue mb-3">
                FAQ
              </span>
              <div className="decorative-line mb-5" />
              <h2 className="heading-display text-3xl md:text-4xl text-deep-blue mb-5">
                Frequently Asked{' '}
                <span className="text-water-blue">Questions</span>
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Find answers to common questions about our products, delivery, and services.
              </p>
              
              {/* Water illustration */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-light-blue to-water-blue/20 rounded-full" />
                  <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <Droplets className="w-16 h-16 text-water-blue/40" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Accordion */}
          <AnimatedSection delay={0.1}>
            <FAQAccordion items={faqs} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
