import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import { QuoteFormData } from '../types.ts';
import { getQuoteWhatsAppUrl } from '../utils/whatsapp.ts';

interface QuoteFormProps {
  initialService?: string;
  initialProduct?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialService = '',
  initialProduct = '',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceCategory: initialService || 'Touch Interactive Panels',
    productInterest: initialProduct || '',
    projectDescription: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});

  const validate = (): boolean => {
    const errs: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.companyName.trim()) {
      errs.companyName = 'Please specify your company, school, or organization.';
    }

    // Phone validation (at least 10 digits)
    const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for quote communication.';
    } else if (cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid phone number (at least 10 digits).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.serviceCategory) {
      errs.serviceCategory = 'Please choose a primary service category.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const whatsappUrl = getQuoteWhatsAppUrl({
      fullName: formData.fullName,
      companyName: formData.companyName,
      phone: formData.phone,
      email: formData.email,
      serviceCategory: formData.serviceCategory,
      productInterest: formData.productInterest,
      projectDescription: formData.projectDescription,
    });
    const whatsappWindow = window.open(whatsappUrl, '_blank');
    if (whatsappWindow) {
      whatsappWindow.opener = null;
    } else {
      window.location.assign(whatsappUrl);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* 2-Column Inputs for Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quote-fullName" className="block text-xs font-medium text-[#B9C9DA] mb-1.5">
            Full Name <span className="text-[#00D4FF]">*</span>
          </label>
          <input
            id="quote-fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Ramesh Kumar"
            className={`w-full px-3.5 py-2.5 rounded-lg bg-[#061F3D] border text-white text-sm placeholder:text-[#B9C9DA]/40 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] ${
              errors.fullName ? 'border-red-400' : 'border-white/10 focus:border-[#00D4FF]'
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-companyName" className="block text-xs font-medium text-[#B9C9DA] mb-1.5">
            Company / Educational Institution <span className="text-[#00D4FF]">*</span>
          </label>
          <input
            id="quote-companyName"
            type="text"
            required
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="e.g. Vidya Mandir High School or Apex Technologies"
            className={`w-full px-3.5 py-2.5 rounded-lg bg-[#061F3D] border text-white text-sm placeholder:text-[#B9C9DA]/40 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] ${
              errors.companyName ? 'border-red-400' : 'border-white/10 focus:border-[#00D4FF]'
            }`}
          />
          {errors.companyName && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.companyName}</span>
            </p>
          )}
        </div>
      </div>

      {/* 2-Column Inputs for Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quote-phone" className="block text-xs font-medium text-[#B9C9DA] mb-1.5">
            Phone Number <span className="text-[#00D4FF]">*</span>
          </label>
          <input
            id="quote-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className={`w-full px-3.5 py-2.5 rounded-lg bg-[#061F3D] border text-white text-sm font-mono placeholder:font-sans placeholder:text-[#B9C9DA]/40 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] ${
              errors.phone ? 'border-red-400' : 'border-white/10 focus:border-[#00D4FF]'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-email" className="block text-xs font-medium text-[#B9C9DA] mb-1.5">
            Work / Personal Email <span className="text-[#B9C9DA]/60">(optional)</span>
          </label>
          <input
            id="quote-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@organization.com"
            className={`w-full px-3.5 py-2.5 rounded-lg bg-[#061F3D] border text-white text-sm placeholder:text-[#B9C9DA]/40 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] ${
              errors.email ? 'border-red-400' : 'border-white/10 focus:border-[#00D4FF]'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      {/* Service Category & Product Interest */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quote-serviceCategory" className="block text-xs font-medium text-[#B9C9DA] mb-1.5">
            Service Required <span className="text-[#00D4FF]">*</span>
          </label>
          <select
            id="quote-serviceCategory"
            value={formData.serviceCategory}
            onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#061F3D] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-[#00D4FF]"
          >
            <option value="Touch Interactive Panels">Touch Interactive Panels (Smart Classrooms / Meeting Rooms)</option>
            <option value="Interactive Kiosks">Interactive Kiosks (Self-Service / Queue Management)</option>
            <option value="Commercial AV Products">AV Products (LED Walls / Projectors / Video Conferencing)</option>
            <option value="Website & Software Development">Website & Software Development</option>
          </select>
        </div>

        <div>
          <label htmlFor="quote-productInterest" className="block text-xs font-medium text-[#B9C9DA] mb-1.5">
            Product or Solution of Interest
          </label>
          <input
            id="quote-productInterest"
            type="text"
            value={formData.productInterest}
            onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
            placeholder="e.g. 75-inch IFP, LED Video Wall, Self-service kiosk"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#061F3D] border border-white/10 text-white text-sm placeholder:text-[#B9C9DA]/40 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-[#00D4FF]"
          />
        </div>
      </div>

      {/* Project Description */}
      <div>
        <label htmlFor="quote-projectDescription" className="block text-xs font-medium text-[#B9C9DA] mb-1.5">
          Project Description & Space Requirements
        </label>
        <textarea
          id="quote-projectDescription"
          rows={3}
          value={formData.projectDescription}
          onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
          placeholder="Briefly describe your room dimensions, quantity required, target timeline, or special technical requirements..."
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#061F3D] border border-white/10 text-white text-sm placeholder:text-[#B9C9DA]/40 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-[#00D4FF] resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#03152B] bg-[#00D4FF] hover:bg-[#33ddff] active:bg-[#00c0e8] disabled:opacity-60 transition-colors shadow-md shadow-[#00D4FF]/20 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Continue to WhatsApp</span>
        </button>
        <p className="mt-2 text-center text-xs text-[#B9C9DA]">
          Your enquiry will open in WhatsApp as a pre-filled message for you to send.
        </p>
      </div>
    </form>
  );
};
