/**
 * Verified WhatsApp integration for SHANIVEX AVIT SOLUTIONS
 * Official Business Number: +91 91642 62446
 */

const WHATSAPP_PHONE_NUMBER = '919164262446';

export function getGeneralWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = 'Hello SHANIVEX AVIT SOLUTIONS team, I am interested in your AV and digital solutions and would like to request more information.';
  const message = customMessage || defaultMsg;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppUrl(productName: string): string {
  const message = `Hello SHANIVEX AVIT SOLUTIONS, I am inquiring about the "${productName}". Could you please share product specifications and quotation details?`;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getServiceWhatsAppUrl(serviceTitle: string): string {
  const message = `Hello SHANIVEX AVIT SOLUTIONS, I am interested in your "${serviceTitle}" services for our upcoming project. Please get in touch with quotation options.`;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getQuoteWhatsAppUrl(details: {
  fullName?: string;
  companyName?: string;
  phone?: string;
  email?: string;
  serviceCategory?: string;
  productInterest?: string;
  projectDescription?: string;
}): string {
  let message = `Hello SHANIVEX AVIT SOLUTIONS,\n\nI would like to request a quotation:`;
  if (details.fullName) message += `\n- Name: ${details.fullName}`;
  if (details.companyName) message += `\n- Company/Institution: ${details.companyName}`;
  if (details.phone) message += `\n- Phone: ${details.phone}`;
  if (details.email) message += `\n- Email: ${details.email}`;
  if (details.serviceCategory) message += `\n- Service Required: ${details.serviceCategory}`;
  if (details.productInterest) message += `\n- Product/Solution: ${details.productInterest}`;
  if (details.projectDescription) message += `\n- Details: ${details.projectDescription}`;
  
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
