'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-20 md:bottom-8 left-4 md:left-6 z-40 w-11 h-11 bg-deep-blue text-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondary-blue hover:scale-110 transition-all duration-300"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
