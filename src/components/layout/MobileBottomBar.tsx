'use client';

import { Phone, MessageCircle, ShoppingCart } from 'lucide-react';
import { siteConfig, phoneLink } from '@/config/site';
import Link from 'next/link';

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-lg md:hidden">
      <div className="grid grid-cols-3 h-14">
        <a
          href={phoneLink}
          className="flex flex-col items-center justify-center gap-0.5 text-deep-blue hover:bg-light-blue transition-colors"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Call</span>
        </a>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 text-[#25D366] hover:bg-green-50 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>
        <Link
          href="/contact#order"
          className="flex flex-col items-center justify-center gap-0.5 bg-deep-blue text-white"
          aria-label="Order water"
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Order</span>
        </Link>
      </div>
    </div>
  );
}
