import type { Metadata } from 'next';
import {
  Home,
  Building2,
  Factory,
  CalendarClock,
  PartyPopper,
  Tag,
  Search,
  ShoppingCart,
  Package,
  Truck,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import PrimaryButton from '@/components/ui/PrimaryButton';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Water delivery and business solutions from Aqua Clear. Home delivery, office delivery, commercial supply, recurring delivery, event supply, and private label bottles.',
};

const services = [
  {
    icon: Home,
    title: 'Home Delivery',
    description:
      'Regular water delivery to your doorstep. Choose from our range of products and set a delivery schedule that works for your family.',
    features: ['Flexible scheduling', 'Multiple product sizes', 'Doorstep delivery'],
  },
  {
    icon: Building2,
    title: 'Office Delivery',
    description:
      'Keep your team hydrated with reliable office water supply. We deliver to offices of all sizes with consistent, on-time service.',
    features: ['Dispenser-compatible bottles', 'Custom schedules', 'Priority support'],
  },
  {
    icon: Factory,
    title: 'Commercial Supply',
    description:
      'Bulk water supply for factories, restaurants, hotels, and large institutions. Volume-based pricing with dedicated account management.',
    features: ['Volume discounts', 'Dedicated account manager', 'Flexible contracts'],
  },
  {
    icon: CalendarClock,
    title: 'Recurring Delivery',
    description:
      'Set it and forget it. Schedule daily, weekly, or custom recurring deliveries so you never run out of clean water.',
    features: ['Automated scheduling', 'Adjustable frequency', 'No commitments'],
  },
  {
    icon: PartyPopper,
    title: 'Event Supply',
    description:
      'Water supply for corporate events, conferences, weddings, and gatherings. Branded or standard bottles available.',
    features: ['Bulk order capability', 'On-site delivery', 'Branded options'],
  },
  {
    icon: Tag,
    title: 'Private Label Bottles',
    description:
      'Create your own branded bottled water. We handle manufacturing and packaging under your brand identity.',
    features: ['Custom label design', 'Multiple sizes', 'Full branding support'],
  },
];

const steps = [
  { icon: Search, step: '1', title: 'Contact Us', desc: 'Reach out with your requirements.' },
  { icon: ShoppingCart, step: '2', title: 'Get a Plan', desc: 'We create a delivery plan for you.' },
  { icon: Package, step: '3', title: 'We Prepare', desc: 'Your order is processed and packed.' },
  { icon: Truck, step: '4', title: 'We Deliver', desc: 'Fresh water delivered on schedule.' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Water Delivery & Business Solutions"
        subtitle="From home delivery to commercial supply — we have a solution for every water need."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
        ]}
      />

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="What We Offer"
            subtitle="Comprehensive water delivery and supply solutions for every need."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, features }, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-border p-7 hover:border-water-blue/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="w-13 h-13 bg-light-blue rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-secondary-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-deep-blue mb-2">{title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
                    {description}
                  </p>
                  <ul className="space-y-1.5">
                    {features.map((f) => (
                      <li key={f} className="text-xs text-dark-text flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent-green rounded-full shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How Our Delivery Works */}
      <section className="py-20 md:py-28 bg-pale-blue">
        <div className="container-wide">
          <SectionHeading
            eyebrow="DELIVERY PROCESS"
            title="How Our Delivery Works"
            subtitle="Simple, reliable, and hassle-free water delivery."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map(({ icon: Icon, step, title, desc }, i) => (
              <AnimatedSection key={step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-deep-blue text-white rounded-2xl mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                    {step}
                  </div>
                  <h3 className="text-base font-bold text-deep-blue mb-1">{title}</h3>
                  <p className="text-sm text-muted">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center">
            <PrimaryButton href="/contact" size="lg" icon>
              Get Started
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
