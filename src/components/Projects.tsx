import React, { useState } from 'react'
import { Sparkles, ExternalLink, ArrowUpRight, CheckCircle2, Eye, Plus, Cpu, Cloud, ShieldCheck, Zap, Activity } from 'lucide-react'
import { GithubIcon } from './Icons'
import { ProjectItem } from '../types/portfolio'
import { ProjectModal } from './ProjectModal'
import { soundFX } from '../utils/sound'

interface ProjectsProps {
  projects: ProjectItem[]
  isEditMode: boolean
  onUpdateProject: (updated: ProjectItem) => void
  onAddProject: () => void
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  isEditMode,
  onUpdateProject,
  onAddProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null)

  const categories = ['All', 'Cloud & Automation', 'UI/UX & Design', 'Python', 'Full-Stack']

  const filteredProjects = projects.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  )

  // Bespoke architectural mockup renderer for each project
  const renderProjectMockup = (project: ProjectItem) => {
    switch (project.id) {
      case 'project-1': // Cloudinary MediaIQ
        return (
          <div className="w-full h-full flex flex-col justify-between py-1">
            <div className="flex items-center justify-between text-[10px] font-mono border-b border-pink-200/60 pb-2">
              <span className="text-zinc-500">Cloudinary SDK v2.4</span>
              <span className="text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full font-semibold">● Live Edge CDN</span>
            </div>

            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="p-2.5 rounded-xl bg-white/90 border border-pink-200 shadow-2xs text-left">
                <span className="text-[9px] font-mono text-zinc-400 uppercase block">Raw Source</span>
                <span className="text-xs font-mono font-bold text-zinc-800">2.8 MB</span>
                <span className="text-[10px] text-zinc-500 font-mono block">uncompressed PNG</span>
              </div>
              <div className="p-2.5 rounded-xl bg-pink-100/80 border border-pink-300 shadow-2xs text-left">
                <span className="text-[9px] font-mono text-pink-600 uppercase block font-bold">Optimized Output</span>
                <span className="text-xs font-mono font-bold text-pink-700">380 KB (-86%)</span>
                <span className="text-[10px] text-pink-800 font-mono block">AVIF/WebP Auto</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1">
              <span className="flex items-center gap-1 text-pink-600">
                <Zap className="w-3 h-3 text-pink-500" />
                <span>Transforms: f_auto, q_auto</span>
              </span>
              <span>Latency: 32ms</span>
            </div>
          </div>
        )

      case 'project-2': // Lloyds UX
        return (
          <div className="w-full h-full flex flex-col justify-between py-1">
            <div className="flex items-center justify-between text-[10px] font-mono border-b border-pink-200/60 pb-2">
              <span className="text-zinc-500">Lloyds NextGen Flow</span>
              <span className="text-pink-700 bg-pink-100/90 px-2 py-0.5 rounded-full font-semibold">WCAG AAA Rated</span>
            </div>

            <div className="my-auto p-3 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white shadow-sm flex items-center justify-between">
              <div className="text-left">
                <span className="text-[9px] font-mono opacity-80 uppercase block">Smart Account</span>
                <span className="text-sm font-bold tracking-tight">£ 4,280.50</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-[10px] font-mono">
                <ShieldCheck className="w-3 h-3" />
                <span>FaceID Active</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1">
              <span className="text-pink-600">Contrast: 21:1 Ratio</span>
              <span>User Journey: 3 Steps</span>
            </div>
          </div>
        )

      case 'project-3': // Resilient Cloud CI/CD
        return (
          <div className="w-full h-full flex flex-col justify-between py-1">
            <div className="flex items-center justify-between text-[10px] font-mono border-b border-pink-200/60 pb-2">
              <span className="text-zinc-500">Infrastructure Mesh</span>
              <span className="text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full font-semibold">99.9% Uptime</span>
            </div>

            <div className="my-auto flex items-center justify-between gap-1 text-[10px] font-mono">
              <div className="p-2 rounded-lg bg-white/95 border border-pink-200 text-center flex-1 shadow-2xs">
                <span className="block text-zinc-400 text-[8px]">SOURCE</span>
                <span className="font-bold text-zinc-800">GitHub</span>
              </div>
              <span className="text-pink-400 font-bold">→</span>
              <div className="p-2 rounded-lg bg-white/95 border border-pink-200 text-center flex-1 shadow-2xs">
                <span className="block text-zinc-400 text-[8px]">BUILD</span>
                <span className="font-bold text-pink-600">Docker</span>
              </div>
              <span className="text-pink-400 font-bold">→</span>
              <div className="p-2 rounded-lg bg-white/95 border border-pink-200 text-center flex-1 shadow-2xs">
                <span className="block text-zinc-400 text-[8px]">HOST</span>
                <span className="font-bold text-emerald-600">AWS Cloud</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1">
              <span className="flex items-center gap-1 text-emerald-600 font-medium">
                <Activity className="w-3 h-3" />
                <span>Zero Downtime Rollout</span>
              </span>
              <span>Health: 200 OK</span>
            </div>
          </div>
        )

      case 'project-4': // Dawn of Code Hackathon
        return (
          <div className="w-full h-full flex flex-col justify-between py-1">
            <div className="flex items-center justify-between text-[10px] font-mono border-b border-pink-200/60 pb-2">
              <span className="text-zinc-500">Hackathon DevSpace</span>
              <span className="text-pink-700 bg-pink-100/90 px-2 py-0.5 rounded-full font-semibold">24h Sprint</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 my-auto text-[9px] font-mono">
              <div className="p-2 rounded-lg bg-white/90 border border-pink-200 text-left">
                <span className="text-zinc-400 block text-[8px]">BACKLOG</span>
                <span className="font-semibold text-zinc-700 block truncate">Auth Flow</span>
              </div>
              <div className="p-2 rounded-lg bg-pink-100/90 border border-pink-300 text-left">
                <span className="text-pink-600 block text-[8px] font-bold">SPRINT</span>
                <span className="font-bold text-pink-700 block truncate">Socket Sync</span>
              </div>
              <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-left">
                <span className="text-emerald-600 block text-[8px]">SHIPPED</span>
                <span className="font-semibold text-emerald-700 block truncate">Dashboard</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1">
              <span className="text-pink-600">MERN Stack Sprint</span>
              <span>VIT Bhopal x Sheryians</span>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent via-pink-50/20 to-transparent">
      {/* Background ambient blush */}
      <div className="absolute top-1/4 left-10 -z-10 w-[500px] h-[500px] rounded-full bg-pink-300/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-xs font-mono font-medium text-pink-700 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>03 // Featured Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-zinc-900">
              Selected <span className="pink-gradient-text">Engineering & UX</span> Case Studies
            </h2>
            <p className="mt-2 text-base text-zinc-600 max-w-2xl">
              Production-grade Python media pipelines, cloud CI/CD infrastructures, and accessibility-first fintech prototypes.
            </p>
          </div>

          {/* Edit Mode Add Action */}
          {isEditMode && (
            <button
              onClick={() => {
                soundFX.playChime()
                onAddProject()
              }}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-xs font-mono font-semibold shadow-sm transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add Project</span>
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-pink-200/60">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFX.playClick()
                setSelectedCategory(cat)
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-pink-600 text-white shadow-xs scale-105'
                  : 'bg-white/80 text-zinc-600 hover:text-pink-600 hover:bg-pink-50 border border-pink-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl glass-panel p-5 sm:p-6 flex flex-col justify-between hover:border-pink-300 hover:shadow-[0_20px_45px_-15px_rgba(236,72,153,0.22)] hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Visual Preview Banner (Mockup Canvas) */}
                <div className="relative w-full aspect-[16/9] rounded-2xl bg-gradient-to-br from-pink-50/80 via-white/80 to-rose-50/70 border border-pink-200/80 overflow-hidden mb-5 p-4 flex flex-col justify-between shadow-inner">
                  
                  {/* Top status & inspect pill inside preview */}
                  <div className="flex items-center justify-between z-10 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white/95 text-pink-700 shadow-2xs border border-pink-200">
                      {project.status}
                    </span>
                    <button
                      onClick={() => {
                        soundFX.playClick()
                        setActiveModalProject(project)
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-mono text-zinc-700 bg-white/90 hover:bg-white hover:text-pink-600 transition-colors shadow-2xs border border-pink-100"
                    >
                      <Eye className="w-3 h-3 text-pink-500" />
                      <span>Inspect Specs</span>
                    </button>
                  </div>

                  {/* Dynamic Mockup Body */}
                  <div className="w-full flex-1 flex items-center justify-center">
                    {renderProjectMockup(project)}
                  </div>
                </div>

                {/* Category & Title */}
                <div className="mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-pink-600 font-bold block mb-1">
                    {project.category}
                  </span>
                  {isEditMode ? (
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => onUpdateProject({ ...project, title: e.target.value })}
                      className="w-full font-heading font-bold text-xl text-zinc-900 bg-white border border-pink-300 rounded p-1 mb-1"
                    />
                  ) : (
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-zinc-900 group-hover:text-pink-600 transition-colors">
                      {project.title}
                    </h3>
                  )}
                  <p className="text-xs font-medium text-pink-600/90 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Short Description */}
                {isEditMode ? (
                  <textarea
                    rows={3}
                    value={project.description}
                    onChange={(e) => onUpdateProject({ ...project, description: e.target.value })}
                    className="w-full text-xs text-zinc-600 bg-white border border-pink-300 rounded p-2 mb-4 font-sans"
                  />
                ) : (
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                )}

                {/* Technologies Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-[10.5px] font-mono bg-pink-50/90 border border-pink-200/80 text-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Action Links */}
              <div className="flex items-center justify-between pt-3.5 border-t border-pink-100/90">
                <button
                  onClick={() => {
                    soundFX.playClick()
                    setActiveModalProject(project)
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-600 hover:text-pink-700 hover:underline"
                >
                  <span>Read Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFX.playClick()}
                    className="w-8 h-8 rounded-full bg-white hover:bg-pink-50 border border-pink-200 flex items-center justify-center text-zinc-700 hover:text-pink-600 transition-colors"
                    title="Source code on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFX.playClick()}
                      className="w-8 h-8 rounded-full bg-white hover:bg-pink-50 border border-pink-200 flex items-center justify-center text-zinc-700 hover:text-pink-600 transition-colors"
                      title="Live demo / verification"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  )
}
