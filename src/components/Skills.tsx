import React, { useState } from 'react'
import { Sparkles, Search, SlidersHorizontal, Plus, Trash2, Edit2, Check } from 'lucide-react'
import { soundFX } from '../utils/sound'
import { SkillItem } from '../types/portfolio'

interface SkillsProps {
  skills: SkillItem[]
  isEditMode: boolean
  onUpdateSkill: (updated: SkillItem) => void
  onAddSkill: () => void
  onDeleteSkill: (id: string) => void
}

export const Skills: React.FC<SkillsProps> = ({
  skills,
  isEditMode,
  onUpdateSkill,
  onAddSkill,
  onDeleteSkill,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [editingSkillId, setEditingSkillId] = useState<string | null>(null)

  const categories = [
    'All',
    'Cloud & Automation',
    'Languages & Dev',
    'UI/UX & Design',
    'Tools & Platforms',
    'Core Strengths',
  ]

  const filteredSkills = skills.filter((skill) => {
    const matchesCat = activeCategory === 'All' || skill.category === activeCategory
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.highlight && skill.highlight.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCat && matchesSearch
  })

  const handleCategoryChange = (cat: string) => {
    soundFX.playClick()
    setActiveCategory(cat)
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Pink ambient background accent */}
      <div className="absolute top-1/3 right-0 -z-10 w-[450px] h-[450px] rounded-full bg-pink-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-xs font-mono font-medium text-pink-700 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>02 // Competencies & Stack</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-zinc-900">
              Technical & Creative <span className="pink-gradient-text">Mastery</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-600 max-w-xl">
              Authentic, battle-tested capabilities spanning distributed cloud pipelines, Python automation, and research-led interface craft.
            </p>
          </div>

          {/* Quick Edit Mode Action */}
          {isEditMode && (
            <button
              onClick={() => {
                soundFX.playChime()
                onAddSkill()
              }}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-xs font-mono font-semibold shadow-sm transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Skill</span>
            </button>
          )}
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10 pb-6 border-b border-pink-200/60">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-pink-600 text-white shadow-xs scale-105'
                    : 'bg-white/80 text-zinc-600 hover:text-pink-600 hover:bg-pink-50 border border-pink-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-full bg-white/80 border border-pink-200/80 focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400 text-zinc-800 placeholder-zinc-400"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const isEditing = editingSkillId === skill.id || isEditMode

            return (
              <div
                key={skill.id}
                className="group relative p-6 rounded-2xl glass-panel hover:border-pink-300 hover:shadow-[0_12px_30px_-10px_rgba(236,72,153,0.18)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Category badge & level tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-pink-700 bg-pink-100/80 px-2.5 py-0.5 rounded-md font-semibold">
                      {skill.category}
                    </span>
                    <span className="text-xs font-mono font-medium text-zinc-500">
                      {skill.levelLabel} ({skill.level}%)
                    </span>
                  </div>

                  {/* Skill Name */}
                  {isEditMode ? (
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) => onUpdateSkill({ ...skill, name: e.target.value })}
                      className="w-full font-heading font-bold text-base text-zinc-900 bg-white border border-pink-300 rounded px-2 py-1 mb-2"
                    />
                  ) : (
                    <h3 className="font-heading font-bold text-base text-zinc-900 group-hover:text-pink-600 transition-colors mb-2">
                      {skill.name}
                    </h3>
                  )}

                  {/* Contextual Real-World Application / Highlight */}
                  {isEditMode ? (
                    <textarea
                      rows={2}
                      value={skill.highlight || ''}
                      onChange={(e) => onUpdateSkill({ ...skill, highlight: e.target.value })}
                      placeholder="Add real-world application..."
                      className="w-full text-xs text-zinc-600 bg-white border border-pink-300 rounded p-1 mb-3 font-sans"
                    />
                  ) : (
                    <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                      {skill.highlight}
                    </p>
                  )}
                </div>

                {/* Animated Proficiency Bar & Editable Range */}
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-1.5">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>

                  {isEditMode ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={skill.level}
                        onChange={(e) => {
                          const val = Number(e.target.value)
                          let label: SkillItem['levelLabel'] = 'Foundational'
                          if (val >= 85) label = 'Advanced'
                          else if (val >= 75) label = 'Proficient'
                          else if (val >= 60) label = 'Intermediate'
                          onUpdateSkill({ ...skill, level: val, levelLabel: label })
                        }}
                        className="w-full accent-pink-600 cursor-pointer"
                      />
                      <button
                        onClick={() => onDeleteSkill(skill.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                        title="Delete skill"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div className="w-full h-2 rounded-full bg-pink-100/80 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-pink-500 to-rose-600 transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16 bg-white/50 rounded-2xl border border-pink-200">
            <p className="text-zinc-600 font-medium">No skills match "{searchQuery}" in {activeCategory}.</p>
            <button
              onClick={() => {
                setActiveCategory('All')
                setSearchQuery('')
              }}
              className="mt-3 text-xs font-mono text-pink-600 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
