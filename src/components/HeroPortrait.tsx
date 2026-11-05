import React, { useState } from 'react'
import { Sparkles, ShieldCheck, Award, MapPin } from 'lucide-react'
import { soundFX } from '../utils/sound'

interface HeroPortraitProps {
  name: string
  title: string
  university: string
  location: string
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({
  name,
  title,
  university,
  location,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full max-w-[460px] mx-auto flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Layer 1: Soft Atmospheric Pink Radial Glow */}
      <div className="absolute inset-4 -z-10 rounded-full bg-gradient-to-tr from-pink-400/30 via-rose-300/25 to-pink-100/15 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-8 -left-8 -z-10 w-48 h-48 rounded-full bg-pink-300/20 blur-2xl pointer-events-none" />

      {/* Layer 2: Editorial Arch Glass Pedestal */}
      <div className="relative w-full rounded-[2.5rem] bg-gradient-to-b from-white/80 via-pink-50/40 to-white/90 backdrop-blur-xl border border-pink-200/80 shadow-[0_20px_50px_-15px_rgba(236,72,153,0.18)] p-4 sm:p-6 pb-2 overflow-hidden flex flex-col items-center">
        
        {/* Subtle Decorative Arch Border Line inside */}
        <div className="absolute inset-2 rounded-[2.2rem] border border-dashed border-pink-200/60 pointer-events-none" />

        {/* Top Header Pill inside Pedestal */}
        <div className="z-20 w-full flex items-center justify-between px-2 pt-1 mb-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-pink-200/80 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-600"></span>
            </span>
            <span className="font-mono text-[10px] text-zinc-700 font-semibold tracking-tight">
              Cloud & Automation
            </span>
          </div>

          <div className="flex items-center gap-1 text-[10px] font-mono text-pink-600 font-medium px-2 py-0.5 rounded-full bg-pink-50/80 border border-pink-200/60">
            <Sparkles className="w-3 h-3 text-pink-500" />
            <span>VIT Bhopal</span>
          </div>
        </div>

        {/* Floating Floating Badge (Left): Verified Cloudinary Credential */}
        <div className="absolute top-20 -left-2 z-30 hidden sm:flex items-center gap-2 p-2 pr-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-pink-200 shadow-[0_10px_25px_-5px_rgba(236,72,153,0.2)] hover:scale-105 transition-transform duration-200">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center p-0.5 shrink-0 overflow-hidden">
            <img src="/logos/cloudinary.jpg" alt="Cloudinary" className="w-full h-full object-contain" />
          </div>
          <div className="text-left">
            <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
              Certified
            </span>
            <span className="text-xs font-bold text-zinc-800 leading-none">
              Media IQ Python
            </span>
          </div>
        </div>

        {/* Floating Floating Badge (Right): 3x Core Member Clubs */}
        <div className="absolute top-36 -right-2 z-30 hidden sm:flex items-center gap-2 p-2 pr-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-pink-200 shadow-[0_10px_25px_-5px_rgba(236,72,153,0.2)] hover:scale-105 transition-transform duration-200">
          <div className="flex -space-x-1.5 items-center">
            <img src="/logos/ios-club.jpg" alt="iOS Club" className="w-7 h-7 rounded-full border-2 border-white object-cover bg-black" />
            <img src="/logos/eureka.jpg" alt="Eureka Club" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
            <img src="/logos/bitbybit.jpg" alt="Bit By Bit" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
          </div>
          <div className="text-left pl-1">
            <span className="text-[9px] font-mono uppercase tracking-wider text-pink-600 block font-bold">
              3x Core Member
            </span>
            <span className="text-xs font-bold text-zinc-800 leading-none">
              Student Chapters
            </span>
          </div>
        </div>

        {/* Center: Beautiful Cutout Portrait of Rishita Vikas */}
        <div className="relative z-10 w-full flex items-end justify-center pt-2">
          {/* Soft background halo behind her shoulders */}
          <div className="absolute top-1/4 w-56 h-56 rounded-full bg-gradient-to-t from-pink-300/40 via-rose-200/30 to-transparent blur-2xl pointer-events-none" />

          {/* The Portrait Image */}
          <div className="relative group">
            <img
              src="/rishita-portrait.png"
              alt="Rishita Vikas — Cloud Computing & Automation Engineer"
              className={`h-[360px] sm:h-[420px] lg:h-[460px] w-auto object-contain transition-all duration-500 ease-out drop-shadow-[0_16px_25px_rgba(236,72,153,0.22)] ${
                isHovered ? 'scale-[1.02] drop-shadow-[0_20px_30px_rgba(236,72,153,0.32)]' : 'animate-float'
              }`}
              style={{
                // Enhanced refined edge blending and subtle lighting
                filter: 'contrast(1.03) saturate(1.05)',
              }}
            />
          </div>
        </div>

        {/* Bottom Editorial Caption Strip */}
        <div className="z-20 w-full mt-[-10px] pb-2">
          <div className="p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-pink-200/90 shadow-sm flex items-center justify-between">
            <div className="text-left">
              <h3 className="font-heading font-bold text-sm text-zinc-900 leading-tight">
                {name}
              </h3>
              <p className="font-mono text-[11px] text-pink-600 font-medium">
                {title}
              </p>
            </div>
            
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-pink-50 text-[10px] font-mono text-zinc-600 border border-pink-200/60">
              <MapPin className="w-3 h-3 text-pink-500" />
              <span>{location.split(',')[0]}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
