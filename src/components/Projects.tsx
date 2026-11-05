import React, { useState, useRef } from 'react'
import { Sparkles, ExternalLink, ArrowUpRight, CheckCircle2, Eye, Plus } from 'lucide-react'
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

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-pink-50/20 to-transparent">
      {/* Background ambient blush */}
      <div className="absolute top-1/4 left-10 -z-10 w-[500px] h-[500px] rounded-full bg-pink-300/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-xs font-mono font-medium text-pink-700 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>03 // Featured Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-zinc-900">
              Selected <span className="pink-gradient-text">Engineering & UX</span> Case Studies
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-600 max-w-2xl">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl glass-panel p-6 sm:p-7 flex flex-col justify-between hover:border-pink-300 hover:shadow-[0_20px_45px_-15px_rgba(236,72,153,0.22)] hover:-translate-y-1.5 transition-all duration-300"
            >
                <div>
                  {/* Visual Preview Banner (Mockup Canvas) */}
                  <div className="relative w-full aspect-[16/9] rounded-2xl bg-gradient-to-br from-pink-100/70 via-rose-50/50 to-pink-200/40 border border-pink-200/70 overflow-hidden mb-6 p-5 flex flex-col justify-between shadow-inner">
                    {/* Top pill inside card */}
                    <div className="flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-white/90 text-pink-700 shadow-2xs border border-pink-200">
                        {project.status}
                      </span>
                      <button
                        onClick={() => {
                          soundFX.playClick()
                          setActiveModalProject(project)
                        }}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-mono text-zinc-700 bg-white/80 hover:bg-white hover:text-pink-600 transition-colors shadow-2xs"
                      >
                        <Eye className="w-3 h-3 text-pink-500" />
                        <span>Inspect Specs</span>
                      </button>
                    </div>

                    {/* Stylized Architectural Diagram / UI Mockup Content */}
                    <div className="my-auto py-2 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-2xl bg-white/90 shadow-md flex items-center justify-center text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="w-6 h-6 text-pink-600" />
                      </div>
                      <span className="text-xs font-mono font-bold text-zinc-800 tracking-tight">
                        {project.title}
                      </span>
                      <span className="text-[11px] text-zinc-500 font-mono mt-0.5">
                        {project.category} System
                      </span>
                    </div>

                    {/* Bottom metrics callout */}
                    {project.metrics && (
                      <div className="z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 text-[10px] font-mono text-pink-800 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-pink-600" />
                        <span>{project.metrics}</span>
                      </div>
                    )}
                  </div>

                  {/* Category & Title */}
                  <div className="mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-pink-600 font-bold block mb-1">
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
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-zinc-900 group-hover:text-pink-600 transition-colors">
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
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  )}

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-pink-50/90 border border-pink-200/80 text-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-pink-100/90">
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
            )
          )}
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
