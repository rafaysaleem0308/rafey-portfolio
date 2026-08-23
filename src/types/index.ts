export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  category: ProjectCategory[]
  githubUrl: string
  liveUrl?: string
  stars: number
  featured: boolean
  highlights?: string[]
  architectureHighlights?: string[]
  internshipLabel?: string
  internshipRole?: string
  demoVideoUrl?: string
  hideGithub?: boolean
}

export type ProjectCategory = 'Full-Stack' | 'MERN' | 'Mobile' | 'AI/ML' | 'Algorithms' | 'Systems' | 'Web'

export interface Skill {
  name: string
  icon?: string
  level?: number
}

export interface SkillCategory {
  name: string
  icon: string
  skills: Skill[]
}

export interface Experience {
  id: string
  role: string
  company: string
  location: string
  period: string
  type: string
  description: string[]
  tech: string[]
  relatedProjects?: { id: string; title: string }[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  period: string
  status: 'current' | 'completed'
}

export interface LeadershipRole {
  id: string
  role: string
  organization: string
  period: string
  description: string
}

export interface NavLink {
  label: string
  href: string
}
