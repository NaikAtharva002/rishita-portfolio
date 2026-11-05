import React from 'react'
import { Sparkles, Calendar, MapPin, Building, ChevronRight, Award, Plus, Trash2 } from 'lucide-react'
import { ExperienceItem } from '../types/portfolio'
import { soundFX } from '../utils/sound'

interface ExperienceProps {
  experiences: ExperienceItem[]
  isEditMode: boolean
  onUpdateExperience: (updated: ExperienceItem) => void
  onAddExperience: () => void
  onDeleteExperience: (id: string) => void
}

export const Experience: React.FC<ExperienceProps> = ({
  experiences,
  isEditMode,
  onUpdateExperience,
  onAddExperience,
  onDeleteExperience,
}) => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 right-10 -z-10 w-96 h-96 rounded-full bg-pink-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-xs font-mono font-medium text-pink-700 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>04 // Leadership & Journey</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-zinc-900">
              Campus <span className="pink-gradient-text">Leadership & Apprenticeships</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-600 max-w-2xl">
              Driving peer workshops, competitive hackathons, and software exploration across premier technical societies at VIT Bhopal University.
            </p>
          </div>

          {isEditMode && (
            <button
              onClick={() => {
                soundFX.playChime()
                onAddExperience()
              }}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-xs font-mono font-semibold shadow-sm transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add Experience</span>
            </button>
          )}
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-pink-200/70 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-pink-500 shadow-xs group-hover:scale-125 group-hover:border-rose-600 transition-all duration-200" />

              {/* Experience Card */}
              <div className="glass-panel rounded-3xl p-6 sm:p-8 hover:border-pink-300 hover:shadow-[0_12px_36px_-10px_rgba(236,72,153,0.15)] transition-all duration-300">
                
                {/* Header Row: Role & Organization with Logo */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3.5">
                    {exp.logo && (
                      <div className="w-12 h-12 rounded-2xl bg-white p-1 border border-pink-200/90 shadow-xs shrink-0 overflow-hidden flex items-center justify-center mt-0.5">
                        <img
                          src={exp.logo}
                          alt={exp.organization}
                          className="w-full h-full object-contain rounded-xl"
                        />
                      </div>
                    )}
                    <div>
                      {isEditMode ? (
                        <input
                          type="text"
                          value={exp.role}
                          onChange={(e) => onUpdateExperience({ ...exp, role: e.target.value })}
                          className="font-heading font-bold text-xl text-zinc-900 bg-white border border-pink-300 rounded p-1 mb-1"
                        />
                      ) : (
                        <h3 className="font-heading font-bold text-xl sm:text-2xl text-zinc-900 group-hover:text-pink-600 transition-colors">
                          {exp.role}
                        </h3>
                      )}

                      <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-pink-700 mt-0.5">
                        <Building className="w-4 h-4 text-pink-500" />
                        <span>{exp.organization}</span>
                        <span className="text-[11px] font-mono text-pink-600 bg-pink-100/80 px-2 py-0.5 rounded-full font-medium">
                          {exp.organizationType}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Period & Location Metadata */}
                  <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-500 gap-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-pink-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-pink-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                {isEditMode ? (
                  <textarea
                    rows={2}
                    value={exp.description}
                    onChange={(e) => onUpdateExperience({ ...exp, description: e.target.value })}
                    className="w-full text-xs text-zinc-600 bg-white border border-pink-300 rounded p-2 mb-4 font-sans"
                  />
                ) : (
                  <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                    {exp.description}
                  </p>
                )}

                {/* Key Achievements Bullet Points */}
                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Key Contributions & Initiatives
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Edit Mode Delete Button */}
                {isEditMode && (
                  <div className="mt-4 pt-3 border-t border-pink-100 flex justify-end">
                    <button
                      onClick={() => onDeleteExperience(exp.id)}
                      className="text-xs font-mono text-red-500 hover:text-red-700 flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove entry</span>
                    </button>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
