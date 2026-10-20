import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  MessageSquare, 
  ShieldCheck, 
  Headphones, 
  Sliders, 
  Clock, 
  Globe, 
  CheckCircle2, 
  Code2, 
  Laptop, 
  Cloud, 
  Layers, 
  ChevronRight,
  MapPin,
  Sparkles
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { ProductCard } from '../components/ProductCard.tsx';
import { ProductModal } from '../components/ProductModal.tsx';
import { COMPANY_INFO, BRAND_STRENGTHS, TARGET_INDUSTRIES } from '../data/companyData.ts';
import { SERVICES_DATA } from '../data/servicesData.ts';
import { PRODUCTS_DATA } from '../data/productsData.ts';
import { ASSET_IMAGES } from '../assets/images.ts';
import { ProductItem } from '../types.ts';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp.ts';

interface HomePageProps {
  onOpenQuoteModal: (initialService?: string, initialProduct?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // 6 representative featured products
  const featuredProducts = PRODUCTS_DATA.slice(0, 6);

  const getStrengthIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#00D4FF]" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-[#00D4FF]" />;
      case 'Sliders': return <Sliders className="w-6 h-6 text-[#00D4FF]" />;
      case 'ClockCheck': return <Clock className="w-6 h-6 text-[#00D4FF]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#00D4FF]" />;
      default: return <CheckCircle2 className="w-6 h-6 text-[#00D4FF]" />;
    }
  };

  const getIndustryImage = (imgKey: string) => {
    switch (imgKey) {
      case 'touchPanel': return ASSET_IMAGES.touchPanel;
      case 'kiosk': return ASSET_IMAGES.kiosk;
      case 'heroBoardroom': return ASSET_IMAGES.heroBoardroom;
      default: return ASSET_IMAGES.touchPanel;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* ============================================================
          B. HERO SECTION
          ============================================================ */}
      <section className="relative pt-6 sm:pt-12 lg:pt-16 pb-12 overflow-hidden">
        {/* Subtle radial glow background behind hero */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#1677FF]/10 via-[#00D4FF]/10 to-transparent blur-3xl pointer-events-none rounded-full"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Text Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#00D4FF] border border-[#00D4FF]/25 bg-[#061F3D]/80 px-3 py-1 rounded-md">
                <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
                <span>AVIT &amp; DIGITAL SOLUTIONS</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1] [text-wrap:balance]">
                Transforming Spaces with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#33ddff] to-[#1677FF]">
                  Smart Technology
                </span>
              </h1>

              {/* Hero Description */}
              <p className="text-base sm:text-lg text-[#B9C9DA] max-w-xl leading-relaxed">
                {COMPANY_INFO.heroDescription}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#03152B] bg-[#00D4FF] hover:bg-[#33ddff] active:bg-[#00c0e8] transition-colors shadow-lg shadow-[#00D4FF]/20"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => onOpenQuoteModal()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#061F3D] hover:bg-[#092747] border border-[#00D4FF]/30 hover:border-[#00D4FF] transition-colors cursor-pointer"
                >
                  <span>Request a Quote</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00D4FF]" />
                </button>
              </div>

              {/* Compact location & service-highlight label */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-[#B9C9DA]/80 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#00D4FF]" />
                  <span>{COMPANY_INFO.location}</span>
                </div>
                <span className="hidden sm:inline text-white/20" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5 font-medium text-white">
                  <span>Pan-India Commercial Deployments</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#00D4FF]/25 shadow-2xl shadow-black/60 bg-[#061F3D]">
                <img
                  src={ASSET_IMAGES.heroBoardroom}
                  alt="High-tech executive boardroom with 86-inch interactive display by Shanivex AVIT Solutions"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-16/10 object-cover"
                />

                {/* Subtle gradient overlay at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#03152B] via-transparent to-transparent opacity-80" />

                {/* Floating UI feature highlights */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#03152B]/85 backdrop-blur-md border border-[#00D4FF]/30 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#00D4FF] block">
                      Boardroom &amp; Classroom Integration
                    </span>
                    <span className="text-xs font-bold text-white block">
                      4K Interactive Touch &amp; Unified Audio-Visuals
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#00D4FF] px-2 py-1 rounded bg-[#061F3D] border border-[#00D4FF]/20">
                    4K UHD
                  </span>
                </div>
              </div>

              {/* Ambient accent back-glow */}
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#00D4FF]/15 blur-2xl rounded-full pointer-events-none -z-10"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          C. TRUST & CAPABILITY STRIP (5 Strengths)
          ============================================================ */}
      <section className="border-y border-white/10 bg-[#061F3D]/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {BRAND_STRENGTHS.map((strength) => (
              <div
                key={strength.title}
                className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 p-3 rounded-lg hover:bg-[#061F3D] transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-[#03152B] border border-[#00D4FF]/20">
                  {getStrengthIcon(strength.iconName)}
                </div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  {strength.title}
                </h3>
                <p className="text-xs text-[#B9C9DA] leading-relaxed line-clamp-2">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          D. SERVICES SECTION (4 Core Services)
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Our Solutions"
            title="Technology Solutions for Every Space"
            description="End-to-end audiovisual integration, smart interactive touch technology, self-service hardware, and tailored digital development."
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#00D4FF] hover:text-[#33ddff] transition-colors whitespace-nowrap self-start md:self-end"
          >
            <span>View All Capabilities</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col bg-[#092747] border border-white/10 hover:border-[#00D4FF]/40 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00D4FF]/5"
            >
              <div className="relative aspect-16/9 bg-[#061F3D] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092747] via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-mono font-medium text-[#00D4FF] bg-[#03152B]/85 px-2.5 py-1 rounded border border-[#00D4FF]/30">
                    0{index + 1}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6 sm:p-7">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-[#00D4FF] font-medium mb-3">
                  {service.subtitle}
                </p>
                <p className="text-xs text-[#B9C9DA] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Capabilities list */}
                <div className="mb-6 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B9C9DA]/70 block mb-2.5">
                    Included Capabilities
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#B9C9DA]">
                    {service.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore service link */}
                <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white group-hover:text-[#00D4FF] transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="text-xs text-[#B9C9DA] hover:text-white transition-colors cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          E. FEATURED PRODUCTS PREVIEW (6 Visual Cards)
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Hardware Catalogue"
            title="Featured AV & Interactive Products"
            description="Engineered for reliability in enterprise meeting spaces, higher education campuses, and high-traffic hospitality venues."
          />
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#00D4FF] hover:text-[#33ddff] transition-colors whitespace-nowrap self-start md:self-end"
          >
            <span>View Full Catalogue ({PRODUCTS_DATA.length} Products)</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(p) => setSelectedProduct(p)}
              onEnquire={(p) => onOpenQuoteModal(undefined, p.name)}
            />
          ))}
        </div>
      </section>

      {/* ============================================================
          F. TARGET INDUSTRIES SECTION (Education, Hospitality, Corporate)
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          centered
          eyebrow="Target Sectors"
          title="Tailored for Modern Commercial Sectors"
          description="Every environment demands customized audiovisual clarity, responsive user ergonomics, and resilient technical integration."
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TARGET_INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="flex flex-col bg-[#092747] border border-white/10 hover:border-[#00D4FF]/30 rounded-2xl overflow-hidden transition-all duration-200"
            >
              <div className="relative aspect-16/10 bg-[#061F3D]">
                <img
                  src={getIndustryImage(ind.image)}
                  alt={`${ind.title} solutions by Shanivex AVIT`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092747] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs font-semibold text-[#00D4FF] uppercase tracking-wider">
                    {ind.subtitle}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  {ind.title}
                </h3>
                <p className="text-xs text-[#B9C9DA] leading-relaxed mb-5">
                  {ind.description}
                </p>

                <div className="mt-auto space-y-2 pt-4 border-t border-white/10 text-xs text-[#B9C9DA]">
                  {ind.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          G. WHY CHOOSE SHANIVEX (5 Brand Strengths)
          ============================================================ */}
      <section className="bg-[#061F3D]/50 border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="The Shanivex Advantage"
            title="Engineered for Precision. Backed by Reliable Service."
            description="From initial architectural blueprints to hardware delivery, acoustic tuning, and ongoing support."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BRAND_STRENGTHS.map((strength) => (
              <div
                key={strength.title}
                className="p-6 rounded-xl bg-[#03152B] border border-white/10 hover:border-[#00D4FF]/30 transition-all duration-200 space-y-3"
              >
                <div className="p-3 w-fit rounded-lg bg-[#061F3D] border border-[#00D4FF]/20">
                  {getStrengthIcon(strength.iconName)}
                </div>
                <h3 className="text-base font-bold text-white">
                  {strength.title}
                </h3>
                <p className="text-xs text-[#B9C9DA] leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}

            {/* Sixth card reinforcing Pan-India execution */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#061F3D] to-[#092747] border border-[#00D4FF]/30 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#00D4FF] block mb-1">
                  Nationwide Execution
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  Headquartered in Karnataka, Serving All of India
                </h3>
                <p className="text-xs text-[#B9C9DA] leading-relaxed">
                  Based in Bharamasagar, Chitradurga District, Karnataka with integrated logistics and installation teams coordinating projects nationwide.
                </p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal()}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#00D4FF] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Discuss Your Project Location</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          H. FEATURED DIGITAL SOLUTIONS (Website & Software Development)
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#061F3D] via-[#092747] to-[#03152B] border border-[#00D4FF]/25 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#00D4FF] block">
                Software &amp; Digital Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
                Unifying Physical Hardware with Intelligent Digital Platforms
              </h2>
              <p className="text-sm text-[#B9C9DA] leading-relaxed">
                Beyond physical displays, SHANIVEX delivers modern web development, custom applications, and secure cloud management to ensure your digital presence matches your physical excellence.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/services#website-software-development"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#03152B] bg-[#00D4FF] hover:bg-[#33ddff] transition-colors"
                >
                  <span>Explore Digital Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => onOpenQuoteModal('Website & Software Development')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#03152B] hover:bg-[#061F3D] border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
                >
                  <span>Inquire Software Project</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#03152B]/80 border border-white/10 space-y-2">
                <Laptop className="w-5 h-5 text-[#00D4FF]" />
                <h4 className="text-sm font-bold text-white">Website Development</h4>
                <p className="text-xs text-[#B9C9DA]">Fast, SEO-optimized corporate and institutional web portals.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#03152B]/80 border border-white/10 space-y-2">
                <Code2 className="w-5 h-5 text-[#00D4FF]" />
                <h4 className="text-sm font-bold text-white">Web Applications</h4>
                <p className="text-xs text-[#B9C9DA]">Tailor-made dashboards, booking platforms, and portals.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#03152B]/80 border border-white/10 space-y-2">
                <Cloud className="w-5 h-5 text-[#00D4FF]" />
                <h4 className="text-sm font-bold text-white">Cloud &amp; Hosting</h4>
                <p className="text-xs text-[#B9C9DA]">High-security server setup, SSL security, and backups.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#03152B]/80 border border-white/10 space-y-2">
                <Layers className="w-5 h-5 text-[#00D4FF]" />
                <h4 className="text-sm font-bold text-white">Website Management</h4>
                <p className="text-xs text-[#B9C9DA]">Routine updates, uptime monitoring, and digital support.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          I. CALL-TO-ACTION SECTION
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#061F3D] via-[#092747] to-[#061F3D] border border-[#00D4FF]/30 p-8 sm:p-12 text-center overflow-hidden">
          
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00D4FF] block">
              Consultation &amp; Quotations
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              Let&apos;s Build Smarter Spaces Together
            </h2>

            <p className="text-sm sm:text-base text-[#B9C9DA] leading-relaxed max-w-xl mx-auto [text-wrap:balance]">
              Whether upgrading a classroom with touch displays, outfitting an executive boardroom with video conferencing, or developing a custom digital platform — our specialists are ready to collaborate.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onOpenQuoteModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#03152B] bg-[#00D4FF] hover:bg-[#33ddff] active:bg-[#00c0e8] transition-colors shadow-lg shadow-[#00D4FF]/25 cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="pt-4 text-xs text-[#B9C9DA]/70">
              <span>Direct helpline: </span>
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white font-mono hover:text-[#00D4FF]">
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuote={(p) => {
          setSelectedProduct(null);
          onOpenQuoteModal(undefined, p.name);
        }}
      />

    </div>
  );
};
