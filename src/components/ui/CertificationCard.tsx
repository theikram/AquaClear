'use client';

import Image from 'next/image';
import { Award, Eye } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface CertificationCardProps {
  title: string;
  issuingBody: string;
  year: string;
  image?: string;
  isPlaceholder?: boolean;
  onView: () => void;
  delay?: number;
}

export default function CertificationCard({
  title,
  issuingBody,
  year,
  image,
  isPlaceholder,
  onView,
  delay = 0,
}: CertificationCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
        {/* Image area */}
        <div
          onClick={onView}
          className="relative bg-gradient-to-b from-light-blue to-pale-blue flex items-center justify-center h-56 overflow-hidden cursor-pointer"
        >
          {image ? (
            <div className="relative w-full h-full p-3 group-hover:scale-105 transition-transform duration-500">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-deep-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 text-deep-blue text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" /> Quick Preview
                </span>
              </div>
            </div>
          ) : (
            <div className="w-24 h-24 bg-white/80 rounded-2xl flex items-center justify-center shadow-sm">
              <Award className="w-12 h-12 text-secondary-blue" />
            </div>
          )}
          {isPlaceholder && (
            <span className="absolute top-3 right-3 bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
              VERIFIED
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-xs text-secondary-blue font-semibold mb-1">{year}</p>
          <h3 className="text-base font-bold text-deep-blue mb-1">{title}</h3>
          <p className="text-sm text-muted mb-4">{issuingBody}</p>
          <button
            onClick={onView}
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary-blue hover:text-deep-blue transition-colors"
          >
            <Eye className="w-4 h-4" />
            View Certificate
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
