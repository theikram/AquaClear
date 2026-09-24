import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

const clients = [
  'Islamabad Chamber',
  'Master Tiles',
  'Eco Builders',
  'Technical Market',
  'Blue Star Corp',
  'Metro Homes',
];

export default function ClientLogos() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="OUR CLIENTS"
          title="Clients We Serve"
          subtitle="Trusted by leading organizations and thousands of families."
        />
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {clients.map((name, i) => (
            <AnimatedSection key={name} delay={i * 0.05}>
              <div className="w-36 h-20 md:w-44 md:h-24 bg-white rounded-xl border-2 border-border/60 flex items-center justify-center px-4 card-hover hover:border-water-blue/40">
                <span className="text-base md:text-lg font-bold text-deep-blue/30 text-center leading-tight">
                  {name}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
