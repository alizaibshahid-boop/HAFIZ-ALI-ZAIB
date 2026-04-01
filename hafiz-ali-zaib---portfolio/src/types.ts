export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface ResumeData {
  name: string;
  contact: {
    address: string;
    email: string;
    phone: string;
    social?: {
      facebook?: string;
      instagram?: string;
      whatsapp?: string;
    };
  };
  about: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  languages: { name: string; level: number }[];
}
