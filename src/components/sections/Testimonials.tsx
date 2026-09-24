import { Star, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'Homeowner, Islamabad',
    text: 'The quality of Aqua Clear water is exceptional. My family has been using it for over two years and the taste and purity are consistently excellent.',
    rating: 5,
  },
  {
    name: 'Sarah Khan',
    role: 'Office Manager',
    text: 'We switched our office water supply to Aqua Clear and everyone noticed the difference. Their delivery is always on time and the service is professional.',
    rating: 5,
  },
  {
    name: 'Usman Ali',
    role: 'Restaurant Owner',
    text: 'As a restaurant owner, water quality matters immensely. Aqua Clear provides consistent quality and reliable commercial delivery that I can depend on.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="What Our Customers Say"
          subtitle="Trusted by thousands of homes and businesses across Pakistan."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="card-blue-border rounded-2xl p-7 card-hover h-full flex flex-col">
                {/* Quote icon */}
                <div className="w-10 h-10 bg-gradient-to-br from-water-blue/20 to-secondary-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-secondary-blue" />
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-accent-gold fill-accent-gold" />
                  ))}
                </div>

                <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 bg-gradient-to-br from-deep-blue to-secondary-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-deep-blue">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
