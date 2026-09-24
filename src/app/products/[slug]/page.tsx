'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Droplets,
  CheckCircle,
  MessageCircle,
  HelpCircle,
  Truck,
} from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/config/products';
import { siteConfig } from '@/config/site';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ProductCard from '@/components/ui/ProductCard';
import OrderForm from '@/components/forms/OrderForm';
import { notFound } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const [orderOpen, setOrderOpen] = useState(false);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(slug);

  const whatsappMessage = `Hi Aqua Clear, I'm interested in ordering ${product.name} (${product.size}). Please share pricing and delivery details.`;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-pale-blue">
        <div className="container-wide py-4">
          <nav className="flex items-center gap-1.5 text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-secondary-blue transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-secondary-blue transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-deep-blue font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 md:py-20" id="order">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <AnimatedSection>
              <div className="bg-gradient-to-b from-light-blue to-pale-blue rounded-3xl p-8 md:p-12 flex items-center justify-center aspect-square max-h-[500px] border border-water-blue/20 relative overflow-hidden shadow-xl">
                {product.image ? (
                  <div className="relative w-full h-full max-h-[380px] flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 drop-shadow-2xl"
                      priority
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                ) : (
                  <div className="w-48 h-60 bg-water-blue/15 rounded-2xl flex flex-col items-center justify-center border border-white/60 shadow-lg">
                    <Droplets className="w-16 h-16 text-deep-blue mb-3" />
                    <span className="text-lg font-bold text-deep-blue">{product.size}</span>
                    <span className="text-xs text-secondary-blue font-medium mt-0.5">AQUA CLEAR</span>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.1}>
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-secondary-blue mb-2">
                  {product.size}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
                  {product.name}
                </h1>
                <p className="text-base text-muted leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-deep-blue mb-3">Product Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-dark-text">
                        <CheckCircle className="w-4 h-4 text-accent-green shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal for */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-deep-blue mb-3">Ideal For</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.idealFor.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 bg-light-blue text-secondary-blue text-xs font-semibold rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Delivery info */}
                <div className="bg-pale-blue rounded-xl p-5 mb-8">
                  <div className="flex items-center gap-2 text-sm font-semibold text-deep-blue mb-2">
                    <Truck className="w-4 h-4 text-secondary-blue" />
                    Delivery Information
                  </div>
                  <p className="text-sm text-muted">
                    Available for home and office delivery across Islamabad and
                    Rawalpindi. Regular delivery schedules available.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#20BD5A] transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Order via WhatsApp
                  </a>
                  <button
                    onClick={() => setOrderOpen(true)}
                    className="inline-flex items-center gap-2 bg-deep-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-secondary-blue transition-colors text-sm"
                  >
                    Order Now
                  </button>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border-2 border-border text-deep-blue font-semibold px-6 py-3 rounded-lg hover:border-deep-blue transition-colors text-sm"
                  >
                    <HelpCircle className="w-4 h-4" />
                    Ask a Question
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-pale-blue">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-deep-blue mb-8 text-center">
              Related Products
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.slug} {...p} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </section>
      )}

      <OrderForm
        isOpen={orderOpen}
        onClose={() => setOrderOpen(false)}
        preselectedProduct={product.name}
      />
    </>
  );
}
