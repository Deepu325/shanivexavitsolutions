import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { QuoteForm } from './QuoteForm.tsx';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialProduct,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#092747] border border-[#00D4FF]/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 mb-4 border-b border-white/10">
          <div>
            <h2 id="modal-headline" className="text-xl font-bold text-white tracking-tight">
              Request a Project Quotation
            </h2>
            <p className="text-xs text-[#B9C9DA] mt-1">
              SHANIVEX AVIT SOLUTIONS · Connect · Engage · Innovate
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#B9C9DA] hover:text-white hover:bg-[#061F3D] border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00D4FF]"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quotation Form */}
        <QuoteForm
          initialService={initialService}
          initialProduct={initialProduct}
        />
      </div>
    </div>
  );
};
