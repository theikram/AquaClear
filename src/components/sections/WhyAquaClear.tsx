import { ShieldCheck, Truck, FlaskConical, Layers } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

const features = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: 'Quality You Can Trust',
    description:
      'Every bottle passes through multi-stage purification and rigorous quality checks ensuring the highest standards of safety and purity.',
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: 'Reliable Delivery',
    description:
      'Our dependable delivery network ensures your water arrives on schedule — whether home delivery or regular business supply.',
  },
  {
    icon: <FlaskConical className="w-7 h-7" />,
    title: 'Hygienic Processing',
    description:
      'State-of-the-art bottling facility follows strict hygiene protocols from source to seal, ensuring every drop is clean.',
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: 'Solutions For All',
    description:
      'From 500ml bottles to 19L dispensers and commercial bulk supply — the right water solution for every requirement.',
  },
];

export default function WhyAquaClear() {
  return (
    <section className="py-20 md:py-28 section-water-texture">
      <div className="container-wide">
        <SectionHeading
          eyebrow="THE FACTS"
          title="Why Choose Aqua Clear?"
          subtitle="We deliver more than water — we deliver trust, quality, and convenience."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <div className="card-blue-border rounded-2xl p-7 card-hover bg-white text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-light-blue to-water-blue/20 rounded-2xl mx-auto mb-5 flex items-center justify-center text-secondary-blue">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-deep-blue mb-2">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
