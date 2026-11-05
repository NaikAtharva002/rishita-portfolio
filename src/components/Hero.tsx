import React, { useState, useEffect } from 'react'
import { CloudConsole } from './CloudConsole'
import { HeroPortrait } from './HeroPortrait'
import { Sparkles, Award, ChevronRight, Terminal, Layers } from 'lucide-react'
import { soundFX } from '../utils/sound'
import { PortfolioData } from '../types/portfolio'

interface HeroProps {
  data: PortfolioData
  isEditMode: boolean
  onUpdatePersonal: (field: string, val: any) => void
}

export const Hero: React.FC<HeroProps> = ({ data, isEditMode, onUpdatePersonal }) => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [viewMode, setViewMode] = useState<'portrait' | 'console'>('portrait')

  // Dynamic profession rotating effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % data.personal.roles.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [data.personal.roles.length])

  return (
    <section className="relative min-h-[92vh] pt-24 pb-12 lg:pt-28 lg:pb-14 flex flex-col justify-between overflow-hidden">
      {/* Editorial Dual Ambient Background Glows: Soft Rose + Forest Emerald Mist */}
      <div className="absolute top-0 right-1/4 -z-10 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-pink-200/35 via-rose-100/20 to-transparent blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-[-100px] -z-10 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-emerald-200/20 via-teal-100/25 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 -z-10 w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-rose-200/20 via-emerald-100/15 to-transparent blur-2xl pointer-events-none" />

      {/* Subtle Dot Grid Pattern */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#064e3b 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Dynamic Role, Narrative, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
            
            {/* Status Pill: Forest Emerald Telemetry Signal */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-emerald-200 shadow-xs mb-4 sm:mb-5 group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="text-xs font-mono font-semibold text-emerald-900 tracking-tight">
                VIT Bhopal University • Cloud & Automation
              </span>
            </div>

            {/* Name Typography */}
            {isEditMode ? (
              <input
                type="text"
                value={data.personal.name}
                onChange={(e) => onUpdatePersonal('name', e.target.value)}
                className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight bg-white/80 border-2 border-dashed border-pink-400 px-2 py-1 rounded-xl w-full text-zinc-900 mb-2"
              />
            ) : (
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-zinc-900 leading-[1.06] mb-2 sm:mb-3">
                Hello, I'm <br />
                <span className="pink-gradient-text inline-block">
                  {data.personal.name}
                </span>
              </h1>
            )}

            {/* Dynamic Profession / Title with Emerald High-Contrast Pill */}
            <div className="h-10 sm:h-11 flex items-center mb-4 sm:mb-5 overflow-hidden">
              <span className="text-base sm:text-xl font-heading font-semibold text-zinc-700 mr-2.5 shrink-0">
                Specializing in
              </span>
              <div className="relative inline-block px-3 py-1 rounded-lg bg-emerald-50/90 border border-emerald-200/90 text-emerald-800 font-mono text-xs sm:text-base font-semibold tracking-tight shadow-2xs transition-all duration-300">
                {data.personal.roles[roleIndex]}
              </div>
            </div>

            {/* Short Personal Introduction */}
            {isEditMode ? (
              <textarea
                value={data.personal.tagline}
                onChange={(e) => onUpdatePersonal('tagline', e.target.value)}
                rows={3}
                className="w-full text-sm sm:text-base text-zinc-700 bg-white/80 border-2 border-dashed border-pink-400 p-2 rounded-xl mb-6"
              />
            ) : (
              <p className="text-sm sm:text-base text-zinc-600 max-w-xl leading-relaxed mb-6">
                Engineering resilient <span className="text-emerald-800 font-semibold">cloud infrastructures</span>, intelligent automation pipelines, and high-craft <span className="text-pink-700 font-semibold">digital experiences</span>.
              </p>
            )}

            {/* Mobile-Only Portrait Showcase */}
            <div className="lg:hidden w-full mb-8">
              <HeroPortrait
                name={data.personal.name}
                title={data.personal.title}
                university={data.personal.university}
                location={data.personal.location}
              />
            </div>

            {/* CTA Buttons: Deep Forest & Rose Gold Contrast */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
              {/* Primary CTA in Grounded Obsidian / Deep Forest */}
              <a
                href="#projects"
                onClick={() => soundFX.playClick()}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-950 via-zinc-900 to-emerald-900 hover:from-emerald-900 hover:to-zinc-800 text-white font-medium text-sm border border-emerald-700/40 shadow-[0_10px_25px_-5px_rgba(6,78,59,0.38)] hover:shadow-[0_14px_30px_-5px_rgba(6,78,59,0.48)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ChevronRight className="w-4 h-4 text-emerald-400" />
              </a>

              {/* Secondary CTA in Soft Rose & White */}
              <a
                href="#contact"
                onClick={() => soundFX.playClick()}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/95 hover:bg-pink-50/80 text-zinc-800 hover:text-pink-600 font-medium text-sm border border-pink-200 shadow-xs hover:border-pink-300 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Contact Me</span>
              </a>

              {/* Verified Credentials Quick Pill in Emerald Mint */}
              <a
                href="#certifications"
                onClick={() => soundFX.playClick()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-xs font-mono font-medium text-emerald-800 bg-emerald-50/90 hover:bg-emerald-100/90 border border-emerald-200 transition-colors"
              >
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>Certifications</span>
              </a>
            </div>

            {/* Quick Live Stats Ticker with Alternating Contrast Rhythm */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full pt-5 border-t border-pink-200/60">
              <div className="p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-pink-200/70">
                <div className="text-lg font-bold font-heading text-pink-600">3x</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Core Member</div>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-50/70 backdrop-blur-sm border border-emerald-200/70">
                <div className="text-lg font-bold font-heading text-emerald-700">Media IQ</div>
                <div className="text-[10px] text-emerald-800 uppercase tracking-wider font-mono font-medium">Cloudinary Certified</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-pink-200/70">
                <div className="text-lg font-bold font-heading text-rose-600">Lloyds UX</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Job Simulation</div>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-50/70 backdrop-blur-sm border border-emerald-200/70">
                <div className="text-lg font-bold font-heading text-emerald-700">VIT Bhopal</div>
                <div className="text-[10px] text-emerald-800 uppercase tracking-wider font-mono font-medium">2025 – 2029</div>
              </div>
            </div>

          </div>

          {/* Right Column (Desktop Only): Hero Visual Showcase with View Mode Toggle */}
          <div className="hidden lg:flex lg:col-span-5 relative flex-col items-center justify-center">
            {/* View Mode Toggle Pill: Dual Soul Switcher */}
            <div className="mb-3 flex items-center gap-1 p-1 rounded-full bg-white/90 backdrop-blur-md border border-pink-200/80 shadow-xs z-30">
              <button
                onClick={() => {
                  soundFX.playClick()
                  setViewMode('portrait')
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                  viewMode === 'portrait'
                    ? 'bg-pink-600 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-pink-600'
                }`}
              >
                <span>🌸 Portrait</span>
              </button>

              <button
                onClick={() => {
                  soundFX.playClick()
                  setViewMode('console')
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                  viewMode === 'console'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-emerald-700'
                }`}
              >
                <span>⚡ Cloud Hub</span>
              </button>
            </div>

            {/* Visual View */}
            <div className="w-full relative">
              {viewMode === 'portrait' ? (
                <HeroPortrait
                  name={data.personal.name}
                  title={data.personal.title}
                  university={data.personal.university}
                  location={data.personal.location}
                />
              ) : (
                <CloudConsole />
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-4 flex flex-col items-center justify-center gap-1 text-zinc-400">
        <a
          href="#about"
          onClick={() => soundFX.playClick()}
          className="group flex flex-col items-center gap-1 text-[10px] font-mono tracking-widest uppercase hover:text-emerald-700 transition-colors"
        >
          <span>Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border border-emerald-300 flex items-start justify-center p-1 group-hover:border-emerald-500 transition-colors">
            <div className="w-1 h-2 rounded-full bg-emerald-600 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  )
}
