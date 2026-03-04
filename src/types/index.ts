import { ReactNode } from 'react';

// Language type
export type Language = 'es' | 'en';

// Language Context Types
export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

// Mobile Context Types
export interface MobileContextType {
  isMobile: boolean;
}

// Navigation Types
export interface NavItem {
  tituloes: string;
  tituloen: string;
  linkto: string;
}

// Contact Data Types
export interface ContactItem {
  contacto: string;
  color: string;
  link: string;
  title: {
    es: string;
    en: string;
  };
}

// Experience Data Types
export interface ExperienceItem {
  titulo: string;
  periodo: string;
  items: string[];
}

export interface ExperienceData {
  es: ExperienceItem[];
  en: ExperienceItem[];
}

// Formation Data Types
export interface FormationItem {
  imagen: string;
  titulo: string;
  institucion: string;
  sub: string;
  certificado: string;
}

export interface FormationData {
  es: FormationItem[];
  en: FormationItem[];
}

// Other Data Types
export interface OtherItem {
  titulo: string;
  descripcion: string;
  certificado: string;
}

export interface OtherData {
  es: OtherItem[];
  en: OtherItem[];
}

// Tools Data Types
export interface ToolItem {
  titulo: string;
  color: string;
}

// Summary Data Types
export interface SummaryData {
  es: string;
  en: string;
}

// Component Props Types
export interface ChildrenProps {
  children: ReactNode;
}
