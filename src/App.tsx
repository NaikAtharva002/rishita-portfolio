import React, { useState, useEffect } from 'react'
import { initialPortfolioData } from './data/portfolioData'
import { PortfolioData, SkillItem, ProjectItem, ExperienceItem, CertificationItem } from './types/portfolio'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { RotateCcw, Check, Sparkles } from 'lucide-react'
import { soundFX } from './utils/sound'

export default function App() {
  const [data, setData] = useState<PortfolioData>(initialPortfolioData)
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true)

  // Cursor ambient follower state
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Handlers for dynamic editing (Master prompt requirement)
  const handleUpdatePersonal = (field: string, val: any) => {
    setData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: val,
      },
    }))
  }

  const handleUpdateSkill = (updated: SkillItem) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.map((s) => (s.id === updated.id ? updated : s)),
    }))
  }

  const handleAddSkill = () => {
    const newSkill: SkillItem = {
      id: `skill-${Date.now()}`,
      name: 'New Technical Skill',
      category: 'Cloud & Automation',
      level: 75,
      levelLabel: 'Intermediate',
      highlight: 'Add application details here...',
    }
    setData((prev) => ({
      ...prev,
      skills: [newSkill, ...prev.skills],
    }))
  }

  const handleDeleteSkill = (id: string) => {
    soundFX.playClick()
    setData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s.id !== id),
    }))
  }

  const handleUpdateProject = (updated: ProjectItem) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === updated.id ? updated : p)),
    }))
  }

  const handleAddProject = () => {
    const newProj: ProjectItem = {
      id: `project-${Date.now()}`,
      title: 'New Cloud Project',
      subtitle: 'Architecture & System Overview',
      description: 'Brief description of the system, technologies used, and business outcome.',
      longDescription: 'Extended technical breakdown with architecture details.',
      category: 'Cloud & Automation',
      tags: ['Cloud', 'Python', 'Docker'],
      status: 'In Development',
      githubUrl: data.personal.github,
      accentColor: '#ec4899',
      features: ['Feature 1', 'Feature 2'],
      architecture: 'Client → Gateway → Microservices → Database',
    }
    setData((prev) => ({
      ...prev,
      projects: [newProj, ...prev.projects],
    }))
  }

  const handleUpdateExperience = (updated: ExperienceItem) => {
    setData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((e) => (e.id === updated.id ? updated : e)),
    }))
  }

  const handleAddExperience = () => {
    const newExp: ExperienceItem = {
      id: `exp-${Date.now()}`,
      role: 'Core Member / Technical Fellow',
      organization: 'Technical Society - VIT Bhopal',
      organizationType: 'University Club',
      period: '2026 – Present',
      location: 'Bhopal, MP, India',
      description: 'Active leadership role driving student technology initiatives.',
      achievements: ['Organized workshops', 'Mentored junior developers'],
      badge: 'Core Contributor',
    }
    setData((prev) => ({
      ...prev,
      experiences: [newExp, ...prev.experiences],
    }))
  }

  const handleDeleteExperience = (id: string) => {
    soundFX.playClick()
    setData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((e) => e.id !== id),
    }))
  }

  const handleUpdateCert = (updated: CertificationItem) => {
    setData((prev) => ({
      ...prev,
      certifications: prev.certifications.map((c) => (c.id === updated.id ? updated : c)),
    }))
  }

  const handleResetDefaults = () => {
    soundFX.playChime()
    setData(initialPortfolioData)
  }

  return (
    <div className="relative min-h-screen bg-[#FFF7F9] text-zinc-900 selection:bg-pink-500 selection:text-white">
      
      {/* Subtle Mouse Follower Radial Glow */}
      <div
        className="pointer-events-none fixed -top-40 -left-40 w-80 h-80 rounded-full bg-pink-400/15 blur-3xl transition-transform duration-75 z-40"
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
        }}
      />

      {/* Navigation Bar */}
      <Navbar
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          data={data}
          isEditMode={isEditMode}
          onUpdatePersonal={handleUpdatePersonal}
        />

        <About
          data={data}
          isEditMode={isEditMode}
          onUpdatePersonal={handleUpdatePersonal}
        />

        <Skills
          skills={data.skills}
          isEditMode={isEditMode}
          onUpdateSkill={handleUpdateSkill}
          onAddSkill={handleAddSkill}
          onDeleteSkill={handleDeleteSkill}
        />

        <Projects
          projects={data.projects}
          isEditMode={isEditMode}
          onUpdateProject={handleUpdateProject}
          onAddProject={handleAddProject}
        />

        <Experience
          experiences={data.experiences}
          isEditMode={isEditMode}
          onUpdateExperience={handleUpdateExperience}
          onAddExperience={handleAddExperience}
          onDeleteExperience={handleDeleteExperience}
        />

        <Certifications
          certifications={data.certifications}
          isEditMode={isEditMode}
          onUpdateCert={handleUpdateCert}
        />

        <Contact data={data} />
      </main>

      {/* Footer */}
      <Footer data={data} />

      {/* Floating Edit Mode Bar when active */}
      {isEditMode && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-2.5 rounded-full bg-zinc-900/95 text-white backdrop-blur-xl border border-pink-400 shadow-2xl">
          <span className="text-xs font-mono font-medium flex items-center gap-1.5 text-pink-300">
            <Sparkles className="w-4 h-4 text-pink-400 animate-spin" />
            Live Customizer Active
          </span>
          <div className="h-4 w-px bg-zinc-700" />
          <button
            onClick={handleResetDefaults}
            className="flex items-center gap-1 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
            title="Reset to default original profile data"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Data</span>
          </button>
          <button
            onClick={() => {
              soundFX.playClick()
              setIsEditMode(false)
            }}
            className="px-3 py-1 rounded-full bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold"
          >
            Done Editing
          </button>
        </div>
      )}

    </div>
  )
}
