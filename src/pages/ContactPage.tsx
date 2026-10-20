import React from 'react';
import { 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Globe, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { QuoteForm } from '../components/QuoteForm.tsx';
import { COMPANY_INFO } from '../data/companyData.ts';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp.ts';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12">
      
      {/* Page Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00D4FF] block">
            Direct Consultation &amp; Quotations
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Let&apos;s Discuss Your AV &amp; Digital Project
          </h1>
          <p className="text-base sm:text-lg text-[#B9C9DA] leading-relaxed [text-wrap:balance]">
            Reach out directly for customized product quotations, room dimension evaluations, technical demonstrations, or software consultations.
          </p>
        </div>
      </section>

      {/* Main 2-Column Section: Contact Cards Left, Quotation Form Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-[#092747] border border-white/10 space-y-6">
              <h2 className="text-lg font-bold text-white tracking-tight">
                Corporate Headquarters
              </h2>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#061F3D] text-[#00D4FF] shrink-0 mt-0.5 border border-[#00D4FF]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#00D4FF] block">
                    Registered Location
                  </span>
                  <p className="text-sm font-medium text-white leading-relaxed">
                    {COMPANY_INFO.location}
                  </p>
                  <p className="text-xs text-[#B9C9DA]">
                    Chitradurga District, Karnataka, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="p-3 rounded-lg bg-[#061F3D] text-[#00D4FF] shrink-0 mt-0.5 border border-[#00D4FF]/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#00D4FF] block">
                    Direct Phone Helpline
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-base font-bold text-white hover:text-[#00D4FF] transition-colors font-mono tabular-nums block"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#B9C9DA]">
                    Monday – Saturday: 9:00 AM – 7:00 PM IST
                  </p>
                </div>
              </div>

              {/* WhatsApp Action */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="p-3 rounded-lg bg-[#25D366]/10 text-[#25D366] shrink-0 mt-0.5 border border-[#25D366]/30">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#25D366] block">
                    Verified WhatsApp Chat
                  </span>
                  <p className="text-xs text-[#B9C9DA]">
                    Instant response for product catalogs, quick quotations, and specifications.
                  </p>
                  <a
                    href={getGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#25D366] hover:text-[#20ba59] transition-colors"
                  >
                    <span>Launch WhatsApp Message</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Pan-India Delivery Note */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-[#B9C9DA]">
                <Globe className="w-4 h-4 text-[#00D4FF] shrink-0" />
                <span>Pan-India shipping, on-site setup, and training support</span>
              </div>
            </div>

            {/* Visual Location Map Card */}
            <div className="rounded-2xl bg-[#092747] border border-white/10 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#00D4FF]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Regional &amp; National Fulfillment
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#00D4FF] bg-[#061F3D] px-2 py-0.5 rounded border border-[#00D4FF]/20">
                  Karnataka Hub
                </span>
              </div>

              {/* Graphical stylized map frame representing Central Karnataka route node */}
              <div className="relative aspect-16/9 rounded-xl bg-[#061F3D] border border-white/10 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center mb-2 border border-[#00D4FF]/30">
                  <MapPin className="w-5 h-5 text-[#00D4FF]" />
                </div>
                <h4 className="text-sm font-bold text-white">Bharamasagar, Chitradurga</h4>
                <p className="text-xs text-[#B9C9DA] mt-1 max-w-xs">
                  Strategically situated on NH-48 connecting Bengaluru, Davanagere, Hubballi, and interstate transport corridors.
                </p>
                <div className="mt-3 flex items-center gap-3 text-[11px] text-[#00D4FF] font-medium">
                  <span>Bengaluru Corridor</span>
                  <span aria-hidden="true">·</span>
                  <span>Central Karnataka</span>
                  <span aria-hidden="true">·</span>
                  <span>Pan-India</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Detailed Quotation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#092747] border border-[#00D4FF]/30 shadow-xl shadow-black/40 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#00D4FF] block mb-1">
                  Quotation &amp; Proposal Form
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Request a Formal Commercial Quotation
                </h2>
                <p className="text-xs sm:text-sm text-[#B9C9DA] mt-1">
                  Complete the project details below. Our technical sales team will prepare a structured quotation tailored to your timeline and specifications.
                </p>
              </div>

              {/* Form */}
              <QuoteForm />
            </div>
          </div>

        </div>
      </section>

      {/* Support Commitments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#092747]/60 border border-white/10 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-[#00D4FF] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Warranty &amp; Quality</h4>
              <p className="text-xs text-[#B9C9DA] mt-1">
                Commercial warranties on displays, processing hardware, and electronic components.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#092747]/60 border border-white/10 flex items-start gap-4">
            <Clock className="w-6 h-6 text-[#00D4FF] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Prompt Turnaround</h4>
              <p className="text-xs text-[#B9C9DA] mt-1">
                Detailed commercial quotes provided swiftly with technical data sheets.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#092747]/60 border border-white/10 flex items-start gap-4">
            <Globe className="w-6 h-6 text-[#00D4FF] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Site Deployment</h4>
              <p className="text-xs text-[#B9C9DA] mt-1">
                Professional cabling, mounting, acoustic alignment, and user operation training.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
