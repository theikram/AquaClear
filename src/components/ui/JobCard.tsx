'use client';

import { MapPin, Briefcase, Clock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface JobCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  onViewDetails: () => void;
  onApply: () => void;
  delay?: number;
}

export default function JobCard({
  title,
  department,
  location,
  type,
  description,
  onViewDetails,
  onApply,
  delay = 0,
}: JobCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white rounded-2xl border border-border p-6 hover:border-water-blue/30 hover:shadow-lg transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold text-deep-blue">{title}</h3>
            <span className="text-sm text-secondary-blue font-medium">{department}</span>
          </div>
          <span className="bg-light-blue text-secondary-blue text-xs font-bold px-3 py-1 rounded-full">
            {type}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted mb-4">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" /> {location}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4" /> {department}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> {type}
          </span>
        </div>

        <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-2">
          {description}
        </p>

        <div className="flex gap-3">
          <button
            onClick={onViewDetails}
            className="px-5 py-2.5 text-sm font-semibold rounded-lg border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white transition-colors"
          >
            View Details
          </button>
          <button
            onClick={onApply}
            className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-deep-blue text-white hover:bg-secondary-blue transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
