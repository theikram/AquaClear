import Image from 'next/image';
import { ShieldCheck, FlaskConical, Droplets, ClipboardCheck, Award, Microscope } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';

const processSteps = [
  { icon: Droplets, title: 'Source Water', desc: 'Carefully selected natural sources' },
  { icon: FlaskConical, title: 'Reverse Osmosis', desc: 'Advanced multi-stage RO filtration' },
  { icon: ShieldCheck, title: 'UV Treatment', desc: 'Ultraviolet disinfection' },
  { icon: Microscope, title: 'Quality Testing', desc: 'Laboratory tested at every stage' },
  { icon: ClipboardCheck, title: 'Bottling', desc: 'Hygienic automated bottling' },
  { icon: Award, title: 'Safety Check', desc: 'Final quality certification' },
];

export default function QualityPreview() {
  return (
    <section className="py-20 md:py-28 section-water-texture">
      <div className="container-wide">
        <SectionHeading
          eyebrow="OUR PROCESS"
          title="Quality Is In Every Drop"
          subtitle="From source to seal — a rigorous process ensuring purity and safety."
        />

        {/* Process flow */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-0 mb-16">
          {processSteps.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.08}>
              <div className="flex items-center">
                <div className="flex flex-col items-center text-center w-32 md:w-36">
                  <div className="w-16 h-16 bg-white card-blue-border rounded-full flex items-center justify-center mb-2 shadow-md">
                    <Icon className="w-7 h-7 text-secondary-blue" />
                  </div>
                  <p className="text-xs font-bold text-deep-blue">{title}</p>
                  <p className="text-[10px] text-muted mt-0.5">{desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-water-blue to-secondary-blue mx-1" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Image + CTA */}
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/purification.jpg"
                alt="Water purification plant"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="heading-display text-2xl md:text-3xl text-deep-blue mb-4">
                Certified Quality Standards
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                Our commitment to quality extends from source to delivery. Every bottle of
                Aqua Clear water meets rigorous safety standards certified by food safety
                authorities. Regular laboratory testing ensures consistent purity.
              </p>
              <Link href="/quality" className="btn-primary">
                <Award className="w-4 h-4" />
                View Certifications
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
