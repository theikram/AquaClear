import AnimatedSection from './AnimatedSection';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <AnimatedSection>
      <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}>
        {eyebrow && (
          <span className={`inline-block text-xs font-bold tracking-[0.25em] uppercase mb-3 ${
            light ? 'text-water-blue' : 'text-secondary-blue'
          }`}>
            {eyebrow}
          </span>
        )}
        <h2 className={`heading-display text-3xl md:text-4xl lg:text-[44px] mb-3 ${
          light ? 'text-white' : 'text-deep-blue'
        }`}>
          {title}
        </h2>
        {/* Decorative line */}
        <div className={`decorative-line mb-4 ${align === 'center' ? 'mx-auto' : ''}`} />
        {subtitle && (
          <p className={`text-base max-w-2xl leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-blue-200' : 'text-muted'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </AnimatedSection>
  );
}
