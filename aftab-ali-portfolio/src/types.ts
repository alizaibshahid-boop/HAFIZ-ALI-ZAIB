export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  category: 'medical' | 'healthcare' | 'operations' | 'petroleum' | 'fmcg' | 'logistics';
}

export interface SkillItem {
  name: string;
  category: 'data' | 'operations' | 'technical' | 'management';
  level: number; // 0-100
  details: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  period?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  percentage: number;
}
