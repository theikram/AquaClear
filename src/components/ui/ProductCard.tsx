import Link from 'next/link';
import Image from 'next/image';
import { Droplets } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface ProductCardProps {
  name: string;
  size: string;
  shortDescription: string;
  image: string;
  slug: string;
  delay?: number;
}

export default function ProductCard({
  name,
  size,
  shortDescription,
  image,
  slug,
  delay = 0,
}: ProductCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="group bg-white rounded-2xl border border-border hover:border-water-blue/40 hover:shadow-xl hover:shadow-water-blue/10 transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative bg-gradient-to-b from-light-blue to-pale-blue p-6 flex items-center justify-center h-64 overflow-hidden">
          {image ? (
            <div className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain p-2 drop-shadow-md"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ) : (
            <div className="w-36 h-36 bg-water-blue/10 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <Droplets className="w-16 h-16 text-water-blue" />
            </div>
          )}
          <span className="absolute top-4 right-4 bg-deep-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10">
            {size}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-deep-blue mb-2 group-hover:text-secondary-blue transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
            {shortDescription}
          </p>
          <div className="flex gap-3">
            <Link
              href={`/products/${slug}`}
              className="flex-1 text-center text-sm font-semibold py-2.5 rounded-lg bg-deep-blue text-white hover:bg-secondary-blue transition-colors"
            >
              View Product
            </Link>
            <Link
              href={`/products/${slug}#order`}
              className="flex-1 text-center text-sm font-semibold py-2.5 rounded-lg border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white transition-colors"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
