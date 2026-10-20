import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.ts';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp.ts';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const servicesList = [
    { label: 'Touch Interactive Panels', path: '/services#touch-interactive-panels' },
    { label: 'Digital Kiosks & Terminals', path: '/services#kiosks' },
    { label: 'LED Video Walls & AV Systems', path: '/services#av-products' },
    { label: 'Video Conferencing Suites', path: '/services#av-products' },
    { label: 'Website & Software Development', path: '/services#website-software-development' },
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Services', path: '/services' },
    { label: 'Product Catalogue', path: '/products' },
    { label: 'About SHANIVEX', path: '/about' },
    { label: 'Contact & Quotations', path: '/contact' },
  ];

  return (
    <footer className="bg-[#020e1d] border-t border-white/10 text-[#B9C9DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D4FF] via-[#1677FF] to-[#061F3D] p-[1.5px] shrink-0">
                <div className="w-full h-full bg-[#03152B] rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-[#00D4FF] text-lg">S</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-[#00D4FF] transition-colors">
                  SHANIVEX
                </span>
                <span className="text-[10px] tracking-widest text-[#00D4FF] font-medium uppercase -mt-0.5">
                  AVIT SOLUTIONS
                </span>
              </div>
            </Link>

            <p className="text-xs font-semibold text-[#00D4FF] tracking-wider uppercase">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-sm text-[#B9C9DA] leading-relaxed">
              Your Complete AVIT & Digital Solutions Partner. Delivering commercial interactive displays, digital kiosks, audiovisual integration, and software engineering.
            </p>

            <div className="pt-2">
              <span className="text-xs text-[#B9C9DA]/70 block">Serving clients with</span>
              <span className="text-xs font-medium text-white">{COMPANY_INFO.panIndia}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="hover:text-[#00D4FF] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services & Solutions */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Core Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesList.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="hover:text-[#00D4FF] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Get in Touch
            </h3>

            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-[#00D4FF] shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.location}</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-5 h-5 text-[#00D4FF] shrink-0" />
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="hover:text-white transition-colors font-mono tabular-nums"
              >
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#061F3D] hover:bg-[#092747] border border-[#00D4FF]/30 hover:border-[#00D4FF] rounded-lg transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#00D4FF]" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B9C9DA]/70">
          <p>© {currentYear} SHANIVEX AVIT SOLUTIONS. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Connect</span>
            <span aria-hidden="true">·</span>
            <span>Engage</span>
            <span aria-hidden="true">·</span>
            <span>Innovate</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
