'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/config/products';

const filters = [
  { label: 'All Products', value: 'all' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter(
          (p) => p.category === activeFilter || p.category === 'all'
        );

  return (
    <>
      <PageHero
        title="Our Water Products"
        subtitle="Hydration solutions designed for homes, offices and businesses."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="PRODUCT RANGE"
            title="Find Your Perfect Water Solution"
          />

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {filters.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === value
                    ? 'bg-deep-blue text-white shadow-md'
                    : 'bg-light-blue text-deep-blue hover:bg-water-blue/20'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.slug} {...product} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
