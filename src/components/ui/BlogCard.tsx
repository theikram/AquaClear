import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  delay?: number;
}

export default function BlogCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  slug,
  delay = 0,
}: BlogCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="group bg-white rounded-2xl border border-border hover:border-water-blue/30 hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Image placeholder */}
        <div className="relative bg-gradient-to-br from-light-blue via-pale-blue to-water-blue/20 h-48">
          <span className="absolute top-4 left-4 bg-deep-blue text-white text-xs font-bold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-4 text-xs text-muted mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {readTime}
            </span>
          </div>

          <h3 className="text-lg font-bold text-deep-blue mb-2 group-hover:text-secondary-blue transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
            {excerpt}
          </p>
          <Link
            href={`#${slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary-blue hover:text-deep-blue transition-colors"
          >
            Read More
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
