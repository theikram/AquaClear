import { Star, User } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  rating,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-base text-dark-text leading-relaxed mb-6 flex-1">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <div className="w-10 h-10 bg-light-blue rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-secondary-blue" />
          </div>
          <div>
            <p className="text-sm font-semibold text-deep-blue">{name}</p>
            <p className="text-xs text-muted">{role}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
