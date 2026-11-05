export interface SkillItem {
  id: string
  name: string
  category: 'Cloud & Automation' | 'Languages & Dev' | 'UI/UX & Design' | 'Tools & Platforms' | 'Core Strengths'
  level: number // 1 to 100
  levelLabel: 'Foundational' | 'Intermediate' | 'Proficient' | 'Advanced'
  highlight?: string
}

export interface ProjectItem {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  category: 'Cloud & Automation' | 'UI/UX & Design' | 'Full-Stack' | 'Python'
  tags: string[]
  status: string
  metrics?: string
  liveUrl?: string
  githubUrl: string
  accentColor: string
  features: string[]
  architecture: string
}

export interface ExperienceItem {
  id: string
  role: string
  organization: string
  organizationType: 'Apprenticeship' | 'University Club' | 'Hackathon'
  period: string
  location: string
  description: string
  achievements: string[]
  badge: string
}

export interface CertificationItem {
  id: string
  title: string
  issuer: string
  issueDate: string
  credentialId?: string
  credentialUrl?: string
  badgeText: string
  skillsCovered: string[]
  verificationNote: string
}

export interface PortfolioData {
  personal: {
    name: string
    title: string
    tagline: string
    roles: string[]
    university: string
    degree: string
    branch: string
    period: string
    location: string
    email: string
    linkedin: string
    github: string
    bioShort: string
    bioLong: string[]
    philosophy: string
  }
  skills: SkillItem[]
  projects: ProjectItem[]
  experiences: ExperienceItem[]
  certifications: CertificationItem[]
}
