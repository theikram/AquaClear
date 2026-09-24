'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FAQ } from '@/types';

interface FAQAccordionProps {
  items: FAQ[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={`rounded-xl border transition-colors duration-200 ${
            openIndex === index
              ? 'border-water-blue/40 bg-light-blue/30'
              : 'border-border bg-white hover:border-water-blue/20'
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left"
            aria-expanded={openIndex === index}
          >
            <span className="text-base font-semibold text-deep-blue pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-secondary-blue shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm text-muted leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
