import type { Metadata } from 'next';
import { Droplets, Target, Eye, Heart, Lightbulb, Users, Award } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Aqua Clear — our mission, vision, values, and commitment to delivering pure, quality drinking water across Pakistan.',
};

const values = [
  { icon: Heart, title: 'Integrity', desc: 'Honest and transparent in everything we do.' },
  { icon: Award, title: 'Quality', desc: 'No compromise on the quality of our water.' },
  { icon: Users, title: 'Service', desc: 'Customer satisfaction is our top priority.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Continuously improving our processes.' },
];

const timeline = [
  { year: '20XX', title: 'Company Founded', desc: 'Aqua Clear begins its journey in Islamabad.' },
  { year: '20XX', title: 'Purification Plant', desc: 'State-of-the-art water treatment facility established.' },
  { year: '20XX', title: 'Expanded Delivery', desc: 'Extended delivery coverage across the twin cities.' },
  { year: '20XX', title: 'Commercial Launch', desc: 'Launched commercial and private-label water services.' },
  { year: 'Present', title: 'Growing Strong', desc: 'Serving thousands of homes and businesses daily.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Aqua Clear"
        subtitle="Delivering pure, reliable water with purpose and care."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ]}
      />

      {/* Who We Are */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-secondary-blue mb-3">
                WHO WE ARE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-deep-blue leading-tight mb-5">
                Committed To Clean Water For Every Home & Business
              </h2>
              <p className="text-base text-muted leading-relaxed mb-4">
                Aqua Clear is a premium drinking water company based in Pakistan,
                dedicated to providing clean, safe, and refreshing water to homes,
                offices, and commercial establishments. We believe that access to
                quality drinking water is essential for health, productivity, and
                quality of life.
              </p>
              <p className="text-base text-muted leading-relaxed">
                Our advanced purification processes, strict quality controls, and
                reliable delivery network ensure that every bottle of Aqua Clear
                water meets the highest standards of purity and safety.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-water-blue/20 bg-deep-blue">
                <video
                  src="/media/about-us.mp4"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-[4/3] object-cover rounded-2xl"
                  poster="/images/about-bg.jpg"
                >
                  <source src="/media/about-us.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-deep-blue text-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-10">
            <AnimatedSection>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full">
                <div className="w-14 h-14 bg-water-blue/20 rounded-xl flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-water-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-blue-200 leading-relaxed">
                  To provide premium quality drinking water to homes and businesses
                  through reliable delivery, rigorous quality standards, and a
                  customer-first approach — making clean hydration accessible and
                  convenient for everyone.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full">
                <div className="w-14 h-14 bg-water-blue/20 rounded-xl flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-water-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-blue-200 leading-relaxed">
                  To be the most trusted and reliable bottled drinking water provider
                  in Pakistan — known for quality, innovation, and exceptional
                  customer service that sets new industry benchmarks.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="OUR VALUES"
            title="What Drives Us"
            subtitle="The principles that guide everything we do at Aqua Clear."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl border border-border hover:border-water-blue/30 hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-light-blue rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-secondary-blue" />
                  </div>
                  <h3 className="text-base font-bold text-deep-blue mb-2">{title}</h3>
                  <p className="text-sm text-muted">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 md:py-28 bg-pale-blue">
        <div className="container-wide">
          <SectionHeading
            eyebrow="OUR JOURNEY"
            title="How We Got Here"
            subtitle="Key milestones in the Aqua Clear story."
          />
          <div className="max-w-3xl mx-auto">
            {timeline.map(({ year, title, desc }, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-deep-blue text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                      {year}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 bg-water-blue/30 flex-1 mt-2" />
                    )}
                  </div>
                  <div className="pt-2 pb-8">
                    <h3 className="text-lg font-bold text-deep-blue mb-1">{title}</h3>
                    <p className="text-sm text-muted">{desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            <p className="text-xs text-muted text-center italic mt-4">
              * Timeline uses placeholder dates for demonstration.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
