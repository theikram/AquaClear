import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  icon?: boolean;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function SecondaryButton({
  children,
  href,
  icon = false,
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    bg-transparent text-deep-blue font-semibold
    border-2 border-deep-blue
    rounded-lg
    transition-all duration-300
    hover:bg-deep-blue hover:text-white hover:shadow-lg
    active:scale-[0.98]
    focus-visible:ring-2 focus-visible:ring-water-blue focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
        {icon && <ArrowRight className="w-4 h-4" />}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}
