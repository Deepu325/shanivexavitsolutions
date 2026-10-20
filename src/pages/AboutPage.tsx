import React from 'react';
import { 
  ShieldCheck, 
  Headphones, 
  Sliders, 
  Clock, 
  Globe, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  Building2,
  Hotel
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { COMPANY_INFO, BRAND_STRENGTHS } from '../data/companyData.ts';
import { ASSET_IMAGES } from '../assets/images.ts';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp.ts';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
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

  return (
    <div className="space-y-20 sm:space-y-24 py-8 sm:py-12">
      
      {/* Page Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00D4FF] block">
              About SHANIVEX AVIT SOLUTIONS
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              Your Complete AVIT &amp; Digital Solutions Partner
            </h1>
            <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-widest">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-base text-[#B9C9DA] leading-relaxed">
              At SHANIVEX AVIT SOLUTIONS, we believe that modern audiovisual technology and intelligent digital software should work together harmoniously. We specialize in designing, supplying, and integrating state-of-the-art interactive flat panels, self-service information kiosks, high-definition LED video walls, and custom web applications that empower organizations to communicate effectively.
            </p>
            <p className="text-sm text-[#B9C9DA] leading-relaxed">
              Headquartered in Bharamasagar, Chitradurga District, Karnataka, we provide end-to-end consultation, hardware procurement, on-site installation, and reliable technical support across India.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#03152B] bg-[#00D4FF] hover:bg-[#33ddff] transition-colors cursor-pointer"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#061F3D] hover:bg-[#092747] border border-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#00D4FF]" />
                <span className="font-mono tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#00D4FF]/30 shadow-2xl bg-[#061F3D]">
              <img
                src={ASSET_IMAGES.heroBoardroom}
                alt="SHANIVEX corporate AV integration boardroom"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover"
              />
              <div className="p-5 bg-[#092747] border-t border-white/10 space-y-1">
                <span className="text-[11px] font-semibold text-[#00D4FF] uppercase tracking-wider block">
                  Commercial Technology Integration
                </span>
                <p className="text-xs text-[#B9C9DA]">
                  From classrooms to executive boardrooms and public venues.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Brand Strengths Grid */}
      <section className="bg-[#061F3D]/40 border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Our Pillars"
            title="What Sets SHANIVEX Apart"
            description="Our core commitments guide every AV installation and digital project we deliver."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BRAND_STRENGTHS.map((strength) => (
              <div
                key={strength.title}
                className="p-6 rounded-2xl bg-[#092747] border border-white/10 hover:border-[#00D4FF]/30 transition-all space-y-3"
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

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#061F3D] to-[#092747] border border-[#00D4FF]/30 space-y-3">
              <div className="p-3 w-fit rounded-lg bg-[#03152B] border border-[#00D4FF]/30 text-[#00D4FF]">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">
                Strategic Base &amp; Logistics
              </h3>
              <p className="text-xs text-[#B9C9DA] leading-relaxed">
                Operating directly from Bharamasagar, Chitradurga, Karnataka, with reliable logistics routes connecting urban centers and regional institutions across Karnataka and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries Focus */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          centered
          eyebrow="Specialized Verticals"
          title="Serving Education, Hospitality &amp; Corporate Sectors"
          description="Tailored AVIT workflows designed for educators, hoteliers, and business executives."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Education */}
          <div className="p-7 rounded-2xl bg-[#092747] border border-white/10 space-y-4">
            <div className="p-3 w-fit rounded-lg bg-[#061F3D] text-[#00D4FF]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Education</h3>
            <p className="text-xs text-[#B9C9DA] leading-relaxed">
              Equipping schools, universities, and vocational colleges with 65&quot;, 75&quot;, and 86&quot; touch digital boards, smart podiums, and classroom audio distribution for engaging pedagogy.
            </p>
            <ul className="space-y-1.5 text-xs text-[#B9C9DA] pt-2 border-t border-white/10">
              <li>· Interactive digital blackboards</li>
              <li>· Lecture capture &amp; audio enhancement</li>
              <li>· Campus information kiosks</li>
            </ul>
          </div>

          {/* Hospitality */}
          <div className="p-7 rounded-2xl bg-[#092747] border border-white/10 space-y-4">
            <div className="p-3 w-fit rounded-lg bg-[#061F3D] text-[#00D4FF]">
              <Hotel className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Hospitality</h3>
            <p className="text-xs text-[#B9C9DA] leading-relaxed">
              Enhancing guest experiences with lobby self-check-in kiosks, interactive wayfinding, grand ballroom LED video walls, and zoned background audio systems.
            </p>
            <ul className="space-y-1.5 text-xs text-[#B9C9DA] pt-2 border-t border-white/10">
              <li>· Self-service check-in kiosks</li>
              <li>· Ballroom fine-pitch LED walls</li>
              <li>· Digital signage &amp; event displays</li>
            </ul>
          </div>

          {/* Corporate */}
          <div className="p-7 rounded-2xl bg-[#092747] border border-white/10 space-y-4">
            <div className="p-3 w-fit rounded-lg bg-[#061F3D] text-[#00D4FF]">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Corporate</h3>
            <p className="text-xs text-[#B9C9DA] leading-relaxed">
              Enabling modern hybrid workspaces with AI auto-framing conference bars, ceiling beamforming audio, wireless presentation gateways, and executive command displays.
            </p>
            <ul className="space-y-1.5 text-xs text-[#B9C9DA] pt-2 border-t border-white/10">
              <li>· Enterprise video conferencing</li>
              <li>· Executive boardroom collaboration</li>
              <li>· Custom web applications &amp; hosting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#061F3D] via-[#092747] to-[#061F3D] border border-[#00D4FF]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-white">Ready to partner with SHANIVEX?</h3>
            <p className="text-xs sm:text-sm text-[#B9C9DA]">
              Connect with our solutions specialists to discuss your upcoming installation or digital requirements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#03152B] bg-[#00D4FF] hover:bg-[#33ddff] transition-colors cursor-pointer"
            >
              <span>Get Quotation</span>
            </button>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#03152B] hover:bg-[#061F3D] border border-white/15 transition-colors"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
