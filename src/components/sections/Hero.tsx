'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, ShieldCheck, Award, Droplets } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Crystal clear water splash"
        fill
        priority
        className="object-cover"
        quality={90}
      />
      
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/90 via-deep-blue/75 to-secondary-blue/50 z-[1]" />
      
      {/* Animated water particles */}
      <div className="absolute inset-0 z-[1]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-water-blue/30 rounded-full"
            style={{
              top: `${15 + i * 14}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Wave bottom */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-[50px] md:h-[80px]">
          <path d="M0,50 C240,80 480,20 720,50 C960,80 1200,20 1440,50 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      <div className="container-wide relative z-10 py-16 md:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white"
          >
            {/* Certification badges */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {['TESTED BY NIH', 'TESTED BY PFA', 'TESTED BY PCRWR'].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full border border-white/20"
                >
                  <ShieldCheck className="w-3 h-3 text-water-blue" />
                  {badge}
                </span>
              ))}
            </motion.div>

            <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-5">
              Drop of{' '}
              <span className="text-water-blue">Freshness</span>
            </h1>
            
            <p className="text-base lg:text-lg text-blue-100/90 leading-relaxed max-w-lg mb-8">
              Premium mineral drinking water for homes, offices & businesses.
              Purity in every drop — delivered with reliability and care across Pakistan.
            </p>

            {/* Phone numbers */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-white hover:text-water-blue transition-colors">
                <Phone className="w-5 h-5 text-water-blue" />
                {siteConfig.phone}
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Link href="/contact#order" className="btn-water text-base px-8 py-4">
                <Droplets className="w-5 h-5" />
                Order Water
              </Link>
              <Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-bold hover:bg-white/10 transition-all">
                Our Products
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20BD5A] transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            {/* Social / info bar */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200/80">
              <Link href="/quality" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Award className="w-4 h-4 text-accent-gold" />
                Licensed by Punjab Food Authority (PFA)
              </Link>
              <span>•</span>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                {siteConfig.email}
              </a>
            </div>
          </motion.div>

          {/* Right: Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/images/products.jpg"
                alt="Aqua Clear Premium Water Bottles"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating offer badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
              className="absolute -top-4 -right-4 w-28 h-28 bg-gradient-to-br from-accent-gold to-yellow-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl"
            >
              <span className="text-[10px] font-bold">OFFER</span>
              <span className="text-2xl font-black">25%</span>
              <span className="text-[10px] font-bold">OFF</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
