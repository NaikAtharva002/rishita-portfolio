import React from 'react'
import { X, ExternalLink, CheckCircle2, Cpu, Layers, Sparkles } from 'lucide-react'
import { GithubIcon } from './Icons'
import { ProjectItem } from '../types/portfolio'
import { soundFX } from '../utils/sound'

interface ProjectModalProps {
  project: ProjectItem | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-pink-200 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundFX.playClick()
            onClose()
          }}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-pink-50 hover:bg-pink-100 flex items-center justify-center text-zinc-600 hover:text-pink-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100/90 text-pink-700 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.status}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-900">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-pink-600 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Project Metrics Callout */}
        {project.metrics && (
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-50 via-rose-50/50 to-pink-50 border border-pink-200/80 mb-6 flex items-center gap-2 text-xs font-mono text-pink-900 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
            <span>Key Outcome: {project.metrics}</span>
          </div>
        )}

        {/* Deep Dive Description */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Technical Overview & Problem Space
          </h3>
          <p className="text-sm text-zinc-700 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Key Engineering Features */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-pink-500" />
            Implementation Highlights
          </h3>
          <ul className="space-y-2">
            {project.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Dataflow */}
        <div className="p-4 rounded-2xl bg-zinc-900 text-pink-100 font-mono text-xs mb-8 overflow-x-auto">
          <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">
            Pipeline Architecture
          </span>
          <p className="text-pink-300 font-medium">{project.architecture}</p>
        </div>

        {/* Technologies Tag List */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
            Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-zinc-800 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-pink-100">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playClick()}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold shadow-sm transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source on GitHub</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <span>Live Deployment / Credential</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
