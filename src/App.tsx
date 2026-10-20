/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { ProductsPage } from './pages/ProductsPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

// Dynamic SEO title synchronization
function PageTitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'SHANIVEX AVIT SOLUTIONS — Complete AVIT & Digital Solutions Partner';
        break;
      case '/services':
        document.title = 'AVIT & Software Services — SHANIVEX AVIT SOLUTIONS';
        break;
      case '/products':
        document.title = 'AV Products & Display Systems Catalogue — SHANIVEX AVIT SOLUTIONS';
        break;
      case '/about':
        document.title = 'About SHANIVEX AVIT SOLUTIONS — Quality AV & Digital Partner';
        break;
      case '/contact':
        document.title = 'Contact & Quotation Requests — SHANIVEX AVIT SOLUTIONS';
        break;
      default:
        document.title = 'SHANIVEX AVIT SOLUTIONS';
    }
  }, [location.pathname]);

  return null;
}

export default function App() {
  const [quoteModalState, setQuoteModalState] = useState<{
    isOpen: boolean;
    initialService?: string;
    initialProduct?: string;
  }>({
    isOpen: false,
  });

  const handleOpenQuoteModal = (initialService?: string, initialProduct?: string) => {
    setQuoteModalState({
      isOpen: true,
      initialService,
      initialProduct,
    });
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTitleUpdater />
      <div className="min-h-screen flex flex-col bg-[#03152B] text-white selection:bg-[#00D4FF]/30 selection:text-[#00D4FF]">
        {/* Top Navigation */}
        <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/products"
              element={<ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            {/* Fallback to Home */}
            <Route
              path="*"
              element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Floating Verified WhatsApp button */}
        <FloatingWhatsApp />

        {/* Global Quote Request Modal */}
        <QuoteModal
          isOpen={quoteModalState.isOpen}
          onClose={handleCloseQuoteModal}
          initialService={quoteModalState.initialService}
          initialProduct={quoteModalState.initialProduct}
        />
      </div>
    </BrowserRouter>
  );
}
