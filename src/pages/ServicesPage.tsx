import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Check, 
  ArrowUpRight, 
  MessageSquare, 
  Monitor, 
  Tablet, 
  Tv, 
  Code2 
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { SERVICES_DATA } from '../data/servicesData.ts';
import { getServiceWhatsAppUrl, getGeneralWhatsAppUrl } from '../utils/whatsapp.ts';

interface ServicesPageProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal }) => {
  const location = useLocation();

  // Scroll to hash if present
  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'touch-interactive-panels':
        return <Monitor className="w-6 h-6 text-[#00D4FF]" />;
      case 'kiosks':
        return <Tablet className="w-6 h-6 text-[#00D4FF]" />;
      case 'av-products':
        return <Tv className="w-6 h-6 text-[#00D4FF]" />;
      case 'website-software-development':
        return <Code2 className="w-6 h-6 text-[#00D4FF]" />;
      default:
        return <Monitor className="w-6 h-6 text-[#00D4FF]" />;
    }
  };

  return (
    <div className="space-y-20 sm:space-y-24 py-8 sm:py-12">
      
      {/* Page Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00D4FF] block">
            Capabilities &amp; Engineering
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Comprehensive AVIT &amp; Digital Solutions
          </h1>
          <p className="text-base sm:text-lg text-[#B9C9DA] leading-relaxed [text-wrap:balance]">
            From high-definition interactive flat panels and self-service kiosks to complex commercial LED displays, acoustic audio integration, and custom software systems — SHANIVEX delivers turnkey installations engineered for longevity.
          </p>
        </div>
      </section>

      {/* 4 In-Depth Service Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {SERVICES_DATA.map((service, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-28 rounded-3xl bg-[#092747]/60 border border-white/10 hover:border-[#00D4FF]/30 p-6 sm:p-10 lg:p-12 transition-colors"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
                
                {/* Media Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:col-start-7' : ''}`}>
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-[#061F3D] border border-[#00D4FF]/20 shadow-xl shadow-black/40">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#03152B]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-xs font-mono text-[#00D4FF] bg-[#03152B]/90 px-3 py-1 rounded-md border border-[#00D4FF]/30">
                        Category 0{index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:col-start-1' : ''}`}>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#061F3D] border border-[#00D4FF]/30">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#00D4FF]">
                      {service.subtitle}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm text-[#B9C9DA] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Capabilities tags */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2.5">
                      Core Offerings
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="text-xs px-3 py-1.5 rounded-lg bg-[#061F3D] text-[#00D4FF] border border-[#00D4FF]/20 font-medium"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2.5">
                      System Capabilities &amp; Specifications
                    </h4>
                    <ul className="space-y-2 text-xs text-[#B9C9DA]">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="pt-2 border-t border-white/10">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#B9C9DA]/80 mb-2">
                      Typical Implementations
                    </h4>
                    <div className="flex flex-wrap gap-1.5 text-xs text-[#B9C9DA]">
                      {service.useCases.map((uc, i) => (
                        <span key={uc}>
                          {uc}
                          {i < service.useCases.length - 1 && <span className="text-[#00D4FF]/40 ml-1.5">·</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#03152B] bg-[#00D4FF] hover:bg-[#33ddff] transition-colors cursor-pointer"
                    >
                      <span>Request Quotation</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <a
                      href={getServiceWhatsAppUrl(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#061F3D] hover:bg-[#03152B] border border-white/15 hover:border-[#25D366]/40 hover:text-[#25D366] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Closing Quotation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#061F3D] border border-[#00D4FF]/30 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Have a Specific Space or Solution in Mind?
          </h2>
          <p className="text-sm text-[#B9C9DA] max-w-xl mx-auto">
            Our AVIT engineers offer custom room assessments, equipment recommendations, and tailored proposals for institutions across India.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenQuoteModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#03152B] bg-[#00D4FF] hover:bg-[#33ddff] transition-colors cursor-pointer"
            >
              <span>Get Custom Quotation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#092747] hover:bg-[#03152B] border border-white/10 transition-colors"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
