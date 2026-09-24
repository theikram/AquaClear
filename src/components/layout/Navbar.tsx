'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Droplets, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems, siteConfig } from '@/config/site';
import type { NavItem } from '@/types';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-white'
        }`}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-16 md:h-[72px]" aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-9 h-9 bg-deep-blue rounded-lg flex items-center justify-center">
                <Droplets className="w-5 h-5 text-water-blue" />
              </div>
              <div className="leading-none">
                <span className="text-lg font-bold text-deep-blue tracking-tight">
                  {siteConfig.companyName}
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {navigationItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <DropdownItem
                      item={item}
                      isActive={isActive(item.href)}
                      isOpen={dropdownOpen === item.label}
                      onToggle={() =>
                        setDropdownOpen(
                          dropdownOpen === item.label ? null : item.label
                        )
                      }
                    />
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-secondary-blue bg-light-blue'
                          : 'text-dark-text hover:text-secondary-blue hover:bg-light-blue/50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Language selector */}
              <div className="hidden md:flex items-center gap-1 text-xs text-muted">
                <Globe className="w-3.5 h-3.5" />
                <button className="font-semibold text-deep-blue">EN</button>
                <span>/</span>
                <button className="hover:text-deep-blue transition-colors">UR</button>
              </div>

              {/* CTA */}
              <Link
                href="/contact#order"
                className="hidden md:inline-flex items-center gap-2 bg-deep-blue text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-secondary-blue transition-colors"
              >
                Order Water
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-deep-blue"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 overflow-y-auto shadow-2xl lg:hidden"
            >
              <div className="p-6">
                {/* Close */}
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                    <div className="w-8 h-8 bg-deep-blue rounded-lg flex items-center justify-center">
                      <Droplets className="w-4 h-4 text-water-blue" />
                    </div>
                    <span className="font-bold text-deep-blue">Aqua Clear</span>
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-light-blue transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-deep-blue" />
                  </button>
                </div>

                {/* Nav items */}
                <div className="space-y-1">
                  {navigationItems.map((item) => (
                    <MobileNavItem
                      key={item.label}
                      item={item}
                      isActive={isActive(item.href)}
                      onNavigate={() => setMobileOpen(false)}
                    />
                  ))}
                </div>

                {/* Language */}
                <div className="flex items-center gap-2 mt-6 pt-6 border-t border-border text-sm text-muted">
                  <Globe className="w-4 h-4" />
                  <button className="font-semibold text-deep-blue">EN</button>
                  <span>/</span>
                  <button className="hover:text-deep-blue transition-colors">UR</button>
                </div>

                {/* CTA */}
                <Link
                  href="/contact#order"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full mt-6 bg-deep-blue text-white text-center font-semibold py-3 rounded-lg hover:bg-secondary-blue transition-colors"
                >
                  Order Water
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16 md:h-[72px]" />
    </>
  );
}

/* ----- Desktop Dropdown ----- */
function DropdownItem({
  item,
  isActive,
  isOpen,
  onToggle,
}: {
  item: NavItem;
  isActive: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive
            ? 'text-secondary-blue bg-light-blue'
            : 'text-dark-text hover:text-secondary-blue hover:bg-light-blue/50'
        }`}
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-border py-2 z-50"
          >
            {item.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2.5 text-sm text-dark-text hover:bg-light-blue hover:text-secondary-blue transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ----- Mobile Nav Item ----- */
function MobileNavItem({
  item,
  isActive,
  onNavigate,
}: {
  item: NavItem;
  isActive: boolean;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (item.children) {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
            isActive ? 'text-secondary-blue bg-light-blue' : 'text-dark-text hover:bg-light-blue/50'
          }`}
        >
          {item.label}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pl-4 space-y-0.5 py-1">
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onNavigate}
                    className="block px-4 py-2.5 rounded-lg text-sm text-muted hover:text-secondary-blue hover:bg-light-blue/50 transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
        isActive ? 'text-secondary-blue bg-light-blue' : 'text-dark-text hover:bg-light-blue/50'
      }`}
    >
      {item.label}
    </Link>
  );
}
