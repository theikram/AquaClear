'use client';

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 md:bottom-8 right-4 md:right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl transition-all duration-300"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
