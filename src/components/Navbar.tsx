import React, { useState, useEffect } from 'react'
import { Volume2, VolumeX, Edit3, Check, Menu, X, Sparkles, ArrowUpRight } from 'lucide-react'
import { soundFX } from '../utils/sound'

interface NavbarProps {
  isEditMode: boolean
  setIsEditMode: (val: boolean) => void
  soundEnabled: boolean
  setSoundEnabled: (val: boolean) => void
}

export const Navbar: React.FC<NavbarProps> = ({
  isEditMode,
  setIsEditMode,
  soundEnabled,
  setSoundEnabled,
}) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  const toggleSound = () => {
    const next = !soundEnabled
    setSoundEnabled(next)
    soundFX.setEnabled(next)
    if (next) {
      soundFX.playClick()
    }
  }

  const toggleEditMode = () => {
    soundFX.playChime()
    setIsEditMode(!isEditMode)
  }

  const handleLinkClick = () => {
    soundFX.playClick()
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2.5' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-white/80 backdrop-blur-xl border border-pink-200/70 shadow-[0_12px_36px_-12px_rgba(236,72,153,0.14)]'
                : 'bg-white/60 backdrop-blur-md border border-pink-100/60'
            }`}
          >
            {/* Logo / Monogram */}
            <a
              href="#"
              onClick={() => soundFX.playClick()}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-600 via-rose-500 to-pink-400 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform duration-200">
                RV
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm tracking-tight text-zinc-900 group-hover:text-pink-600 transition-colors">
                  Rishita Vikas
                </span>
                <span className="text-[10px] font-mono text-zinc-500 -mt-0.5">
                  Cloud & Automation
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-700 hover:text-pink-600 hover:bg-pink-50/80 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Controls: Sound, Edit Mode, and CTA */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Sound Toggle */}
              <button
                onClick={toggleSound}
                title={soundEnabled ? 'Mute sound effects' : 'Enable tactile sound effects'}
                className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-600 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                aria-label="Toggle Sound"
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 text-pink-600" />
                ) : (
                  <VolumeX className="w-4 h-4 text-zinc-400" />
                )}
              </button>

              {/* Edit Content Mode Toggle */}
              <button
                onClick={toggleEditMode}
                title="Toggle live editable content mode"
                className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 border ${
                  isEditMode
                    ? 'bg-rose-500 text-white border-rose-500 shadow-sm animate-pulse'
                    : 'bg-white/80 text-zinc-600 border-pink-200 hover:border-pink-300 hover:bg-pink-50'
                }`}
              >
                {isEditMode ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span className="font-semibold">Edit Mode: ON</span>
                  </>
                ) : (
                  <>
                    <Edit3 className="w-3.5 h-3.5 text-pink-500" />
                    <span>Edit Mode</span>
                  </>
                )}
              </button>

              {/* Get in Touch CTA */}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white text-xs font-semibold shadow-sm hover:shadow-[0_8px_20px_-4px_rgba(236,72,153,0.35)] transition-all duration-200"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => {
                  soundFX.playClick()
                  setMobileMenuOpen(!mobileMenuOpen)
                }}
                className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-zinc-700 hover:bg-pink-50"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-pink-600" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-pink-200 shadow-xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-xl text-sm font-medium text-zinc-800 hover:text-pink-600 hover:bg-pink-50 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 border-t border-pink-100 flex items-center justify-between">
              <button
                onClick={toggleEditMode}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border ${
                  isEditMode ? 'bg-pink-600 text-white border-pink-600' : 'bg-pink-50 text-zinc-700 border-pink-200'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditMode ? 'Editing Active' : 'Enable Edit Mode'}</span>
              </button>

              <a
                href="#contact"
                onClick={handleLinkClick}
                className="px-4 py-1.5 rounded-full bg-pink-600 text-white text-xs font-semibold"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Edit Mode Notification Toast */}
      {isEditMode && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-rose-900/90 text-white backdrop-blur-xl border border-rose-400 shadow-2xl text-xs font-mono animate-bounce">
          <Sparkles className="w-4 h-4 text-pink-300" />
          <span>Interactive Edit Mode Active — Click any text/badge to modify!</span>
        </div>
      )}
    </>
  )
}
