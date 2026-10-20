import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, Monitor } from 'lucide-react';
import { ProductItem } from '../types.ts';
import { getProductWhatsAppUrl } from '../utils/whatsapp.ts';

interface ProductCardProps {
  product: ProductItem;
  onSelect: (product: ProductItem) => void;
  onEnquire: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onEnquire,
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="group flex flex-col h-full bg-[#092747] border border-white/10 hover:border-[#00D4FF]/40 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00D4FF]/5">
      {/* Product Image slot with fallback container */}
      <div
        className="relative aspect-4/3 w-full bg-[#061F3D] overflow-hidden cursor-pointer"
        onClick={() => onSelect(product)}
      >
        {!imgFailed ? (
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#061F3D] to-[#092747] text-[#B9C9DA]">
            <Monitor className="w-10 h-10 text-[#00D4FF]/60 mb-2" />
            <span className="text-xs font-medium text-center px-4">{product.name}</span>
          </div>
        )}

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-[#03152B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="px-3 py-1.5 rounded-lg bg-[#03152B]/80 text-xs font-semibold text-white border border-[#00D4FF]/30">
            View Specifications
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Unboxed metadata: category */}
        <div className="text-[11px] font-semibold text-[#00D4FF] uppercase tracking-wider mb-1.5">
          {product.category}
        </div>

        <h3
          onClick={() => onSelect(product)}
          className="text-base font-bold text-white hover:text-[#00D4FF] transition-colors cursor-pointer line-clamp-2 mb-2"
        >
          {product.name}
        </h3>

        <p className="text-xs text-[#B9C9DA] line-clamp-2 mb-4 leading-relaxed">
          {product.tagline}
        </p>

        {/* Specs highlights */}
        {product.specsPreview && product.specsPreview.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#B9C9DA]/80 mb-5 pt-1">
            {product.specsPreview.map((spec, idx) => (
              <React.Fragment key={spec}>
                <span className="font-mono">{spec}</span>
                {idx < (product.specsPreview?.length ?? 0) - 1 && (
                  <span className="text-[#00D4FF]/40" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Action Buttons in footer of card */}
        <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onEnquire(product)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#03152B] bg-[#00D4FF] hover:bg-[#33ddff] rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm"
          >
            <span>Enquire Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={getProductWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            title="Enquire on WhatsApp"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            className="p-2 rounded-lg bg-[#061F3D] hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/40 text-[#25D366] transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#061F3D]" />
          </a>
        </div>
      </div>
    </div>
  );
};
