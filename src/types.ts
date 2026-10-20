export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  capabilities: string[];
  features: string[];
  useCases: string[];
}

export type ProductCategory = 
  | 'All'
  | 'Interactive Displays'
  | 'LED & Display Systems'
  | 'Projectors & Screens'
  | 'Audio Systems'
  | 'Video Conferencing'
  | 'Kiosks & Accessories';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  image: string;
  keyFeatures: string[];
  applications: string[];
  specsPreview?: string[];
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  serviceCategory: string;
  productInterest: string;
  projectDescription: string;
}
