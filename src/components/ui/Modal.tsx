'use client';

import { ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  maxWidth?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'max-w-2xl',
}: ModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`relative ${maxWidth} w-full bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto`}
          >
            {/* Header */}
            {title && (
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-bold text-deep-blue">{title}</h2>
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted hover:text-deep-blue hover:bg-light-blue transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Body */}
            <div className={title ? 'p-6' : 'p-6 pt-12'}>
              {!title && (
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 w-9 h-9 rounded-lg flex items-center justify-center text-muted hover:text-deep-blue hover:bg-light-blue transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
