import { ReactNode } from 'react';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  lines: string[];
  href?: string;
}

export default function ContactCard({ icon, title, lines, href }: ContactCardProps) {
  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href
    ? { href, target: href.startsWith('http') ? '_blank' as const : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`flex items-start gap-4 p-6 rounded-xl bg-white border border-border transition-all duration-200 ${
        href ? 'hover:border-water-blue/40 hover:shadow-md cursor-pointer' : ''
      }`}
    >
      <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center shrink-0">
        <div className="text-secondary-blue">{icon}</div>
      </div>
      <div>
        <h3 className="font-semibold text-deep-blue mb-1">{title}</h3>
        {lines.map((line, i) => (
          <p key={i} className="text-sm text-muted">
            {line}
          </p>
        ))}
      </div>
    </Wrapper>
  );
}
