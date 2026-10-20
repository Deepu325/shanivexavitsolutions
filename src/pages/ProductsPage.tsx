import React, { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal, RefreshCw } from 'lucide-react';
import { ProductCard } from '../components/ProductCard.tsx';
import { ProductModal } from '../components/ProductModal.tsx';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES } from '../data/productsData.ts';
import { ProductItem, ProductCategory } from '../types.ts';

interface ProductsPageProps {
  onOpenQuoteModal: (initialService?: string, initialProduct?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  // Filter and search logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tagline.toLowerCase().includes(query) ||
        product.keyFeatures.some((f) => f.toLowerCase().includes(query)) ||
        product.applications.some((a) => a.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12">
      
      {/* Page Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00D4FF] block">
            Commercial Hardware Catalogue
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Explore Our AV Products
          </h1>
          <p className="text-base sm:text-lg text-[#B9C9DA] leading-relaxed [text-wrap:balance]">
            Commercial-grade audiovisual systems, 4K multi-touch flat panels, modular LED video walls, smart kiosks, and acoustic conferencing hardware. Available with Pan-India delivery and certified installation.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-[#092747] border border-white/10 space-y-5">
          
          {/* Top row: Search input + result count */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#B9C9DA] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by model, feature, or room type..."
                className="w-full pl-10 pr-9 py-2.5 rounded-lg bg-[#061F3D] border border-white/10 text-white text-xs placeholder:text-[#B9C9DA]/50 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-[#00D4FF]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B9C9DA] hover:text-white"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-[#B9C9DA] self-end sm:self-auto font-mono tabular-nums">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span>
                Showing <strong className="text-white">{filteredProducts.length}</strong> of {PRODUCTS_DATA.length} products
              </span>
            </div>
          </div>

          {/* Bottom row: Category Filter Chips (Interactive Segmented buttons) */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B9C9DA]/70 mr-1 hidden md:inline">
              Category:
            </span>
            {PRODUCT_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat as ProductCategory)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[#00D4FF] text-[#03152B] font-semibold shadow-sm shadow-[#00D4FF]/20'
                      : 'bg-[#061F3D] text-[#B9C9DA] hover:text-white hover:bg-[#061F3D]/80 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => setActiveModalProduct(p)}
                onEnquire={(p) => onOpenQuoteModal(undefined, p.name)}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="p-12 text-center rounded-2xl bg-[#092747] border border-white/10 space-y-4 max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#061F3D] flex items-center justify-center mx-auto text-[#00D4FF]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">No Matching Products Found</h3>
            <p className="text-xs text-[#B9C9DA] leading-relaxed">
              We couldn&apos;t find any hardware matching &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;. Try adjusting your keywords or clearing filters.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#03152B] bg-[#00D4FF] hover:bg-[#33ddff] transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Product Detail Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onOpenQuote={(p) => {
          setActiveModalProduct(null);
          onOpenQuoteModal(undefined, p.name);
        }}
      />

    </div>
  );
};
