export type ProjectCategory = 'All' | 'AI' | 'Data Analysis' | 'Frontend';

export interface HeroStat {
  id: string;
  value: string;
  label: string;
  context: string;
}

export interface AboutHighlight {
  id: string;
  index: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  index: string;
  category: string;
  description: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  year: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface EducationEntry {
  id: string;
  period: string;
  institution: string;
  degree: string;
  specialization: string;
  academicYear: string;
  summary: string;
  coursework: string[];
}

export interface CredentialItem {
  id: string;
  type: 'Certification' | 'Workshop' | 'Hackathon' | 'Academic Achievement';
  year: string;
  title: string;
  issuer: string;
  summary: string;
  credentialCode?: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface PortfolioConfig {
  identity: {
    initials: string;
    fullName: string;
    roleLabel: string;
    headlinePrefix: string;
    tagline: string;
    location: string;
    heroImage: string;
    heroImageAlt: string;
  };
  navigation: Array<{
    id: string;
    label: string;
    href: string;
  }>;
  stats: HeroStat[];
  about: {
    heading: string;
    lead: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    highlights: AboutHighlight[];
  };
  skills: {
    heading: string;
    subheading: string;
    categories: SkillCategory[];
  };
  projects: {
    heading: string;
    subheading: string;
    categories: ProjectCategory[];
    items: ProjectItem[];
  };
  education: {
    heading: string;
    subheading: string;
    entries: EducationEntry[];
  };
  credentials: {
    heading: string;
    subheading: string;
    items: CredentialItem[];
  };
  contact: {
    heading: string;
    subheading: string;
    email: string;
    phone: string;
    linkedinLabel: string;
    linkedinUrl: string;
    githubLabel: string;
    githubUrl: string;
  };
  footer: {
    copyright: string;
    note: string;
  };
}
