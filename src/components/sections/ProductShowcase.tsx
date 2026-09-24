'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Droplets } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { products } from '@/config/products';
import Link from 'next/link';

export default function ProductShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const prev = () => setActiveIdx((i) => (i === 0 ? products.length - 1 : i - 1));
  const next = () => setActiveIdx((i) => (i === products.length - 1 ? 0 : i + 1));

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Water texture top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-pale-blue to-transparent" />

      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="OUR PRODUCTS"
          title="Get Refreshed"
          subtitle="Choose from our premium range of purified drinking water products."
        />

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-deep-blue hover:bg-deep-blue hover:text-white transition-all"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-deep-blue hover:bg-deep-blue hover:text-white transition-all"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Product display */}
          <div className="flex items-end justify-center gap-6 md:gap-10 py-8 px-12 md:px-20 min-h-[360px]" ref={scrollRef}>
            {products.slice(0, 4).map((product, i) => {
              const isActive = i === activeIdx % 4;
              return (
                <motion.div
                  key={product.slug}
                  initial={false}
                  animate={{
                    scale: isActive ? 1.12 : 0.88,
                    opacity: isActive ? 1 : 0.65,
                    y: isActive ? -12 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => setActiveIdx(i)}
                >
                  <div
                    className={`relative rounded-2xl p-6 mb-3 transition-shadow duration-300 ${
                      isActive
                        ? 'bg-gradient-to-b from-water-blue/20 via-white to-light-blue shadow-2xl border-2 border-water-blue/30'
                        : 'bg-light-blue/40 border border-border/40'
                    }`}
                  >
                    {/* Bottle visual */}
                    <div
                      className={`relative flex items-center justify-center transition-all ${
                        isActive ? 'w-32 h-48 md:w-44 md:h-64' : 'w-24 h-36 md:w-28 md:h-44'
                      }`}
                    >
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain drop-shadow-xl p-1"
                          sizes="(max-width: 768px) 150px, 200px"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center">
                          <Droplets className="w-10 h-10 text-water-blue" />
                          <span className="text-xs font-bold text-deep-blue mt-1">{product.size}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className={`text-center font-bold transition-colors ${
                    isActive ? 'text-deep-blue text-base' : 'text-muted text-xs'
                  }`}>
                    {product.name}
                  </p>
                  <span className="text-xs text-secondary-blue font-semibold">{product.size}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {products.slice(0, 4).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === activeIdx % 4
                    ? 'bg-deep-blue w-8'
                    : 'bg-water-blue/40 hover:bg-water-blue/60'
                }`}
                aria-label={`Go to product ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
