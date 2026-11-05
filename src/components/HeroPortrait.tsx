import React, { useState, useRef } from 'react'
import { Sparkles, Award, MapPin, CheckCircle2 } from 'lucide-react'
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
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6
    const shineX = (x / rect.width) * 100
    const shineY = (y / rect.height) * 100

    setRotate({ x: rotateX, y: rotateY })
    setShine({ x: shineX, y: shineY, opacity: 0.35 })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotate({ x: 0, y: 0 })
    setShine({ x: 50, y: 50, opacity: 0 })
  }

  return (
    <div className="relative w-full max-w-[450px] mx-auto perspective-container select-none">
      {/* Layer 0: Ambient Backlight Atmosphere (Rose + Emerald depth) */}
      <div className="absolute -inset-2 -z-20 rounded-[3rem] bg-gradient-to-tr from-pink-400/20 via-emerald-300/15 to-pink-100/10 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-6 -right-6 -z-20 w-44 h-44 rounded-full bg-emerald-400/15 blur-2xl pointer-events-none" />

      {/* Layer 1: 3D Interactive Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${isHovered ? 1.015 : 1}, ${isHovered ? 1.015 : 1}, 1)`,
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative w-full rounded-[2.5rem] bg-gradient-to-b from-white/92 via-pink-50/40 to-white/95 backdrop-blur-xl border border-pink-200/90 shadow-[0_20px_50px_-15px_rgba(236,72,153,0.18)] p-4 sm:p-5 pb-3 overflow-hidden flex flex-col items-center preserve-3d"
      >
        {/* Dynamic Specular Light Glare */}
        <div
          className="absolute inset-0 rounded-[2.5rem] pointer-events-none transition-opacity duration-300 z-40"
          style={{
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255, 255, 255, 0.45) 0%, transparent 60%)`,
            opacity: shine.opacity,
          }}
        />

        {/* Subtle Decorative Arch Border Line inside */}
        <div className="absolute inset-2.5 rounded-[2.2rem] border border-dashed border-pink-200/60 pointer-events-none" />

        {/* Top Header Pill: Crisp Forest Emerald Telemetry Badge */}
        <div className="z-20 w-full flex items-center justify-between px-2 pt-1 mb-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50/90 border border-emerald-300/80 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="font-mono text-[10.5px] text-emerald-900 font-semibold tracking-tight">
              Cloud & Automation
            </span>
          </div>

          <div className="flex items-center gap-1 text-[10.5px] font-mono text-pink-700 font-medium px-2.5 py-1 rounded-full bg-pink-100/70 border border-pink-200">
            <Sparkles className="w-3 h-3 text-pink-500" />
            <span>VIT Bhopal</span>
          </div>
        </div>

        {/* Floating Badge (Left): Verified Cloudinary Credential */}
        <div
          style={{ transform: 'translateZ(30px)' }}
          className="absolute top-16 -left-3 z-30 hidden sm:flex items-center gap-2 p-2 pr-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200 shadow-[0_10px_25px_-5px_rgba(6,78,59,0.18)] hover:scale-105 transition-transform duration-200"
        >
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center p-0.5 shrink-0 overflow-hidden">
            <img src="/logos/cloudinary.jpg" alt="Cloudinary" className="w-full h-full object-contain" />
          </div>
          <div className="text-left">
            <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-700 block font-bold">
              Certified
            </span>
            <span className="text-xs font-bold text-zinc-800 leading-none">
              Media IQ Python
            </span>
          </div>
        </div>

        {/* Floating Badge (Right): 3x Core Member Clubs */}
        <div
          style={{ transform: 'translateZ(30px)' }}
          className="absolute top-32 -right-3 z-30 hidden sm:flex items-center gap-2 p-2 pr-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-pink-200 shadow-[0_10px_25px_-5px_rgba(236,72,153,0.22)] hover:scale-105 transition-transform duration-200"
        >
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

        {/* Center: Authentic Portrait Cutout of Rishita Vikas */}
        <div className="relative z-10 w-full flex items-end justify-center pt-1 overflow-hidden">
          {/* Ambient rose halo glow behind shoulders */}
          <div className="absolute top-1/4 w-52 h-52 rounded-full bg-gradient-to-t from-pink-300/35 via-rose-200/25 to-transparent blur-2xl pointer-events-none" />

          {/* The Portrait Image with smooth bottom gradient fade mask */}
          <div className="relative group portrait-mask">
            <img
              src="/rishita-portrait.png"
              alt="Rishita Vikas — Cloud Computing & Automation Engineer"
              className={`h-[350px] sm:h-[400px] lg:h-[430px] w-auto object-contain transition-all duration-500 ease-out drop-shadow-[0_16px_25px_rgba(236,72,153,0.2)] ${
                isHovered ? 'scale-[1.01]' : 'animate-float'
              }`}
              style={{
                filter: 'contrast(1.03) saturate(1.04)',
              }}
            />
          </div>
        </div>

        {/* Mobile-Only Twin Credential Ribbon */}
        <div className="sm:hidden z-20 w-full grid grid-cols-2 gap-2 mt-2 mb-2">
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-emerald-50/90 border border-emerald-200">
            <img src="/logos/cloudinary.jpg" alt="Cloudinary" className="w-5 h-5 rounded object-contain shrink-0" />
            <div className="text-left truncate">
              <span className="text-[8px] font-mono text-emerald-700 uppercase block font-semibold">Certified</span>
              <span className="text-[10px] font-bold text-zinc-800 leading-tight block truncate">Media IQ Python</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-pink-50/90 border border-pink-200">
            <div className="flex -space-x-1 items-center shrink-0">
              <img src="/logos/ios-club.jpg" alt="iOS" className="w-4 h-4 rounded-full bg-black object-contain" />
              <img src="/logos/eureka.jpg" alt="Eureka" className="w-4 h-4 rounded-full object-cover" />
              <img src="/logos/bitbybit.jpg" alt="BitByBit" className="w-4 h-4 rounded-full object-cover" />
            </div>
            <div className="text-left truncate">
              <span className="text-[8px] font-mono text-pink-600 uppercase block font-bold">3x Core</span>
              <span className="text-[10px] font-bold text-zinc-800 leading-tight block truncate">Clubs @ VITB</span>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Caption Strip */}
        <div className="z-20 w-full mt-1">
          <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-pink-200/90 shadow-2xs flex items-center justify-between">
            <div className="text-left">
              <h3 className="font-heading font-bold text-sm text-zinc-900 leading-tight">
                {name}
              </h3>
              <p className="font-mono text-[10.5px] text-emerald-800 font-semibold">
                {title}
              </p>
            </div>
            
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-50 text-[10px] font-mono text-emerald-900 border border-emerald-200/70 font-medium">
              <MapPin className="w-3 h-3 text-emerald-600" />
              <span>{location.split(',')[0]}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
