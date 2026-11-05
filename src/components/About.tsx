import React from 'react'
import { Sparkles, GraduationCap, MapPin, Heart, Layers, Cloud, Code2, Users2, Shield } from 'lucide-react'
import { soundFX } from '../utils/sound'
import { PortfolioData } from '../types/portfolio'

interface AboutProps {
  data: PortfolioData
  isEditMode: boolean
  onUpdatePersonal: (field: string, val: any) => void
}

export const About: React.FC<AboutProps> = ({ data, isEditMode, onUpdatePersonal }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-pink-50/30 to-transparent">
      {/* Background soft glow accents */}
      <div className="absolute top-1/2 left-0 -z-10 w-96 h-96 rounded-full bg-pink-200/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-xs font-mono font-medium text-pink-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>01 // About & Identity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-zinc-900">
            Architecting with <span className="pink-gradient-text">Precision & Empathy</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 max-w-2xl">
            Where cloud platform resilience meets human-centered design thinking.
          </p>
        </div>

        {/* Editorial Layout: Left Card + Right Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Premium Profile Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden group">
              {/* Decorative accent banner */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-rose-300/10 rounded-full blur-xl pointer-events-none" />

              {/* High-Craft Portrait Frame */}
              <div className="relative mb-6">
                <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200/60 border border-pink-200/80 flex flex-col items-center justify-center relative overflow-hidden p-6 text-center shadow-inner">
                  
                  {/* Subtle avatar badge illustration */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-500 via-rose-400 to-pink-300 p-1 shadow-lg mb-3 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-pink-600 font-display font-black text-3xl">
                      RV
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-zinc-900">
                    {data.personal.name}
                  </h3>
                  <p className="text-xs font-mono text-pink-600 font-medium">
                    {data.personal.title}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-pink-200 text-[11px] font-mono text-zinc-600">
                    <MapPin className="w-3 h-3 text-pink-500" />
                    <span>{data.personal.location}</span>
                  </div>
                </div>
              </div>

              {/* Education Block Grounded in VIT Bhopal Profile */}
              <div className="p-4 rounded-2xl bg-pink-50/70 border border-pink-100/90 mb-6">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white shadow-xs text-pink-600">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                      Undergraduate Education
                    </span>
                    <h4 className="text-sm font-bold text-zinc-900 mt-0.5">
                      {data.personal.university}
                    </h4>
                    <p className="text-xs text-zinc-600 mt-0.5">
                      {data.personal.degree} in {data.personal.branch}
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-mono text-pink-700 bg-pink-100/80 px-2 py-0.5 rounded-md">
                      Academic Term: {data.personal.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Campus Leadership & Clubs */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2.5">
                  Active Student Leadership
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-pink-200 text-zinc-800 shadow-2xs">
                    🍎 iOS Club — Core Member
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-pink-200 text-zinc-800 shadow-2xs">
                    💡 The Eureka Club — Core Member
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-pink-200 text-zinc-800 shadow-2xs">
                    ⚡ Bit By Bit Club — Core Member
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative, Interests & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            {/* Story & Background */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl">
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-500" />
                The Professional Journey
              </h3>

              <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                {isEditMode ? (
                  <textarea
                    rows={6}
                    value={data.personal.bioLong.join('\n\n')}
                    onChange={(e) => onUpdatePersonal('bioLong', e.target.value.split('\n\n'))}
                    className="w-full bg-white border-2 border-dashed border-pink-400 p-3 rounded-xl text-zinc-800 font-sans"
                  />
                ) : (
                  data.personal.bioLong.map((para, i) => (
                    <p key={i} className="text-zinc-700">
                      {para}
                    </p>
                  ))
                )}
              </div>

              {/* Quote / Philosophy Box */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-pink-100/70 via-rose-50/50 to-pink-50/70 border-l-4 border-pink-500">
                <span className="text-[11px] font-mono uppercase tracking-wider text-pink-700 font-semibold block mb-1">
                  Guiding Philosophy
                </span>
                {isEditMode ? (
                  <input
                    type="text"
                    value={data.personal.philosophy}
                    onChange={(e) => onUpdatePersonal('philosophy', e.target.value)}
                    className="w-full text-sm italic font-serif text-zinc-900 bg-white/90 border border-pink-300 p-2 rounded"
                  />
                ) : (
                  <p className="text-sm sm:text-base italic font-serif text-zinc-800">
                    "{data.personal.philosophy}"
                  </p>
                )}
              </div>
            </div>

            {/* 3 Core Competency Pillars (Asymmetric & Informative, NOT generic slop!) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white/80 border border-pink-200/70 shadow-xs hover:border-pink-300 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 mb-3">
                  <Cloud className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-zinc-900">Cloud & DevOps</h4>
                <p className="text-xs text-zinc-600 mt-1 leading-normal">
                  AWS & Azure foundations, containerized Docker deployments, and CI/CD workflow automation.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/80 border border-pink-200/70 shadow-xs hover:border-pink-300 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 mb-3">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-zinc-900">Python Automation</h4>
                <p className="text-xs text-zinc-600 mt-1 leading-normal">
                  Cloudinary Media IQ certified; dynamic transformation algorithms and edge distribution.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/80 border border-pink-200/70 shadow-xs hover:border-pink-300 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 mb-3">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-zinc-900">UI/UX Research</h4>
                <p className="text-xs text-zinc-600 mt-1 leading-normal">
                  Lloyds Banking simulation; competitive analysis, empathy journey mapping, and WCAG accessibility.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
