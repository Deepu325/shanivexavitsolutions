import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp.ts';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-30 flex items-center group">
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-lg bg-[#061F3D] text-xs font-medium text-white border border-[#00D4FF]/30 shadow-lg shadow-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat on WhatsApp
      </span>
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp inquiry with SHANIVEX AVIT SOLUTIONS"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/25 hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
};
