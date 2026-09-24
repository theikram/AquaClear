import { User } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface TeamCardProps {
  name: string;
  role: string;
  department: string;
  level: 'leadership' | 'management' | 'team';
  delay?: number;
}

export default function TeamCard({
  name,
  role,
  department,
  level,
  delay = 0,
}: TeamCardProps) {
  const sizeClasses = {
    leadership: 'w-20 h-20',
    management: 'w-16 h-16',
    team: 'w-14 h-14',
  };

  const iconSizes = {
    leadership: 'w-10 h-10',
    management: 'w-8 h-8',
    team: 'w-7 h-7',
  };

  return (
    <AnimatedSection delay={delay}>
      <div className="group bg-white rounded-2xl border border-border p-6 text-center hover:border-water-blue/30 hover:shadow-lg transition-all duration-300">
        {/* Avatar placeholder */}
        <div
          className={`${sizeClasses[level]} bg-gradient-to-b from-light-blue to-water-blue/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform`}
        >
          <User className={`${iconSizes[level]} text-secondary-blue`} />
        </div>

        <h3 className="text-base font-bold text-deep-blue mb-0.5">{name}</h3>
        <p className="text-sm text-secondary-blue font-medium mb-1">{role}</p>
        <p className="text-xs text-muted">{department}</p>
      </div>
    </AnimatedSection>
  );
}
