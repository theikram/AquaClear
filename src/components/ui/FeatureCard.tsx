import { ReactNode } from 'react';
import AnimatedSection from './AnimatedSection';

interface FeatureCardProps {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({
  number,
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="group relative bg-white rounded-2xl p-8 border border-border hover:border-water-blue/30 hover:shadow-lg hover:shadow-water-blue/8 transition-all duration-300">
        {/* Number badge */}
        <span className="absolute top-6 right-6 text-5xl font-extrabold text-light-blue group-hover:text-water-blue/20 transition-colors select-none">
          {number}
        </span>

        {/* Icon */}
        <div className="w-14 h-14 bg-light-blue rounded-xl flex items-center justify-center mb-5 group-hover:bg-water-blue/15 transition-colors">
          <div className="text-secondary-blue">{icon}</div>
        </div>

        <h3 className="text-lg font-bold text-deep-blue mb-3">{title}</h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </AnimatedSection>
  );
}
