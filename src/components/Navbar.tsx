import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.ts';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp.ts';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#03152B]/95 backdrop-blur-md border-[#00D4FF]/15 shadow-lg shadow-black/20'
          : 'bg-[#03152B]/80 backdrop-blur-sm border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark & Icon */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] rounded-lg p-1"
          >
            {/* Geometric S brand mark in cyan & electric blue */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D4FF] via-[#1677FF] to-[#061F3D] p-[1.5px] shrink-0">
              <div className="w-full h-full bg-[#03152B] rounded-[7px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-[#00D4FF] to-white text-lg tracking-wider">
                  S
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-[#00D4FF] transition-colors whitespace-nowrap">
                SHANIVEX
              </span>
              <span className="text-[10px] tracking-widest text-[#00D4FF] font-medium uppercase -mt-0.5 whitespace-nowrap">
                AVIT SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links (Single-line, quiet hover) */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#B9C9DA]"
          >
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-white ${
                    active ? 'text-[#00D4FF] font-semibold' : 'text-[#B9C9DA]'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00D4FF] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden lg:flex items-center gap-3 text-xs text-[#B9C9DA] mr-1">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                title="Call Shanivex AVIT Solutions"
              >
                <Phone className="w-3.5 h-3.5 text-[#00D4FF]" />
                <span className="font-mono tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {onOpenQuoteModal ? (
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#03152B] bg-[#00D4FF] hover:bg-[#33ddff] active:bg-[#00c0e8] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-[#00D4FF]/20"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#03152B] bg-[#00D4FF] hover:bg-[#33ddff] active:bg-[#00c0e8] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-[#00D4FF]/20"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#B9C9DA] hover:text-white hover:bg-[#061F3D] border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00D4FF]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#00D4FF]/15 bg-[#03152B] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? 'bg-[#061F3D] text-[#00D4FF] border border-[#00D4FF]/20'
                      : 'text-[#B9C9DA] hover:bg-[#061F3D]/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2 px-3 py-2 text-sm text-[#B9C9DA] hover:text-white"
              >
                <Phone className="w-4 h-4 text-[#00D4FF]" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-[#00D4FF] border border-[#00D4FF]/40 bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 transition-colors"
              >
                Chat on WhatsApp
              </a>

              {onOpenQuoteModal ? (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#03152B] bg-[#00D4FF] hover:bg-[#33ddff] transition-colors"
                >
                  Request a Quote
                </button>
              ) : (
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#03152B] bg-[#00D4FF] hover:bg-[#33ddff] transition-colors"
                >
                  Request a Quote
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
