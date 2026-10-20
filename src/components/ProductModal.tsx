import React, { useEffect, useState } from 'react';
import { X, Check, ArrowUpRight, MessageCircle, Monitor } from 'lucide-react';
import { ProductItem } from '../types.ts';
import { getProductWhatsAppUrl } from '../utils/whatsapp.ts';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenQuote: (product: ProductItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onOpenQuote,
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#092747] border border-[#00D4FF]/30 rounded-2xl shadow-2xl shadow-black/80 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#B9C9DA] hover:text-white hover:bg-[#061F3D] border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00D4FF]"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 2-Column Split: Image Left, Details Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-2">
          
          {/* Media Column */}
          <div className="space-y-4">
            <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#061F3D] border border-white/10">
              {!imgFailed ? (
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#061F3D] text-[#B9C9DA]">
                  <Monitor className="w-12 h-12 text-[#00D4FF] mb-2" />
                  <span className="text-xs">{product.name}</span>
                </div>
              )}
            </div>

            {/* Quick Specs Badges */}
            {product.specsPreview && (
              <div className="p-3.5 rounded-lg bg-[#061F3D] border border-white/10">
                <span className="text-[10px] uppercase font-semibold text-[#00D4FF] tracking-wider block mb-2">
                  Technical Specifications Overview
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-white">
                  {product.specsPreview.map((spec) => (
                    <span key={spec} className="px-2 py-1 rounded bg-[#03152B] border border-white/5">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="flex flex-col">
            <div className="text-xs font-semibold text-[#00D4FF] uppercase tracking-wider mb-1">
              {product.category}
            </div>

            <h2 id="product-modal-title" className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
              {product.name}
            </h2>

            <p className="text-sm font-medium text-[#00D4FF]/90 mb-4">
              {product.tagline}
            </p>

            <p className="text-xs text-[#B9C9DA] leading-relaxed mb-5">
              {product.description}
            </p>

            {/* Key Features */}
            <div className="mb-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2.5">
                Key Capabilities
              </h4>
              <ul className="space-y-2 text-xs text-[#B9C9DA]">
                {product.keyFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2">
                Ideal Environments
              </h4>
              <div className="flex flex-wrap gap-1.5 text-xs text-[#B9C9DA]">
                {product.applications.map((app, idx) => (
                  <span key={app}>
                    {app}
                    {idx < product.applications.length - 1 && <span className="text-[#00D4FF]/40 ml-1.5">·</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-auto pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenQuote(product);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#03152B] bg-[#00D4FF] hover:bg-[#33ddff] transition-colors cursor-pointer"
              >
                <span>Request Quotation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={getProductWhatsAppUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
