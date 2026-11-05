import React from 'react'
import { Sparkles, GraduationCap, MapPin, Heart, Layers, Cloud, Code2, Users2, Shield, Activity, Terminal, Eye } from 'lucide-react'
import { soundFX } from '../utils/sound'
import { PortfolioData } from '../types/portfolio'

interface AboutProps {
  data: PortfolioData
  isEditMode: boolean
  onUpdatePersonal: (field: string, val: any) => void
}

export const About: React.FC<AboutProps> = ({ data, isEditMode, onUpdatePersonal }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-pink-50/20 to-transparent">
      {/* Background soft dual glow accents: Rose + Forest Emerald */}
      <div className="absolute top-1/2 left-0 -z-10 w-96 h-96 rounded-full bg-emerald-200/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 -z-10 w-96 h-96 rounded-full bg-pink-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-mono font-medium text-emerald-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>01 // About & Identity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-zinc-900">
            Architecting with <span className="pink-gradient-text">Precision</span> & <span className="emerald-gradient-text">Empathy</span>
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-zinc-600 max-w-2xl">
            Where cloud platform resilience meets human-centered design thinking.
          </p>
        </div>

        {/* Editorial Layout: Left Card + Right Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Premium Profile Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-7 rounded-3xl relative overflow-hidden group">
              {/* Decorative accent banner */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-emerald-400/15 to-rose-300/15 rounded-full blur-xl pointer-events-none" />

              {/* High-Craft Portrait Frame */}
              <div className="relative mb-6">
                <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-pink-50 via-white to-emerald-50/60 border border-pink-200/80 flex flex-col items-center justify-center relative overflow-hidden p-6 text-center shadow-inner">
                  
                  {/* Real Portrait Avatar */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-600 via-pink-500 to-rose-400 p-1 shadow-lg mb-3 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-start justify-center pt-1 shadow-inner">
                      <img
                        src="/rishita-portrait.png"
                        alt={data.personal.name}
                        className="w-full h-full object-cover object-top scale-125"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-zinc-900">
                    {data.personal.name}
                  </h3>
                  <p className="text-xs font-mono text-emerald-800 font-semibold">
                    {data.personal.title}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-emerald-200 text-[11px] font-mono text-emerald-900">
                    <MapPin className="w-3 h-3 text-emerald-600" />
                    <span>{data.personal.location}</span>
                  </div>
                </div>
              </div>

              {/* Education Block Grounded in VIT Bhopal Profile */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 mb-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white p-1 border border-emerald-200/80 shadow-xs shrink-0 overflow-hidden flex items-center justify-center">
                    <img
                      src={data.personal.universityLogo || "/logos/vit-bhopal.jpg"}
                      alt="VIT Bhopal University"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-emerald-800 font-semibold block">
                      Undergraduate Education
                    </span>
                    <h4 className="text-sm font-bold text-zinc-900 mt-0.5">
                      {data.personal.university}
                    </h4>
                    <p className="text-xs text-zinc-600 mt-0.5">
                      {data.personal.degree} in {data.personal.branch}
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-mono text-emerald-900 bg-emerald-100/90 font-medium px-2 py-0.5 rounded-md border border-emerald-200/70">
                      Academic Term: {data.personal.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Campus Leadership & Clubs with Real Logos */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2.5 font-medium">
                  Active Student Leadership
                </span>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-pink-200 text-zinc-800 shadow-2xs text-xs font-medium">
                    <img src="/logos/ios-club.jpg" alt="iOS Club" className="w-4 h-4 rounded object-contain bg-black" />
                    <span>iOS Club — Core Member</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-pink-200 text-zinc-800 shadow-2xs text-xs font-medium">
                    <img src="/logos/eureka.jpg" alt="The Eureka Club" className="w-4 h-4 rounded-full object-cover" />
                    <span>The Eureka Club — Core Member</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-emerald-200 text-zinc-800 shadow-2xs text-xs font-medium">
                    <img src="/logos/bitbybit.jpg" alt="Bit By Bit Club" className="w-4 h-4 rounded object-contain" />
                    <span>Bit By Bit Club — Core Member</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative, Interests & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-7">
            
            {/* Story & Background */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl">
              <h3 className="text-xl font-heading font-bold text-zinc-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
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

              {/* Quote / Philosophy Box with Dual Border Accent */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-white to-pink-50/80 border-l-4 border-emerald-600 shadow-2xs">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-800 font-bold block mb-1">
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

            {/* Asymmetric Editorial Bento Grid for the 3 Core Pillars (Anti-Slop Architecture) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
              
              {/* Bento Card 1: Cloud & DevOps (Hero Emerald Card, spans 7 cols) */}
              <div className="sm:col-span-7 p-5 rounded-2xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-zinc-900 text-white border border-emerald-700/50 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-medium">
                      ● Resilient Infrastructure
                    </span>
                  </div>
                  <h4 className="text-base font-bold tracking-tight text-white">Cloud & DevOps</h4>
                  <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">
                    AWS & Azure foundations, containerized Docker deployments, and CI/CD workflow automation for zero-downtime microservices.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-800/60 flex items-center gap-2 text-[10px] font-mono text-emerald-300">
                  <Activity className="w-3.5 h-3.5" />
                  <span>99.9% High Availability Target</span>
                </div>
              </div>

              {/* Bento Stack: Python + UI/UX (spans 5 cols) */}
              <div className="sm:col-span-5 flex flex-col gap-3.5">
                {/* Python Automation */}
                <div className="p-4 rounded-2xl bg-white border border-teal-200/80 shadow-xs hover:border-teal-300 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-zinc-900">Python Automation</h4>
                  </div>
                  <p className="text-[11px] text-zinc-600 leading-normal">
                    Cloudinary Media IQ certified; dynamic transformation algorithms and edge distribution.
                  </p>
                </div>

                {/* UI/UX Research */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50/70 border border-pink-200/80 shadow-xs hover:border-pink-300 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-600 shrink-0">
                      <Eye className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-zinc-900">UI/UX Research</h4>
                  </div>
                  <p className="text-[11px] text-zinc-600 leading-normal">
                    Lloyds Banking simulation; competitive analysis, customer journeys, and WCAG accessibility.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
