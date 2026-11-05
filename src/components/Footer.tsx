import React from 'react'
import { ArrowUp, Heart, Sparkles, Mail } from 'lucide-react'
import { soundFX } from '../utils/sound'
import { PortfolioData } from '../types/portfolio'

interface FooterProps {
  data: PortfolioData
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const scrollToTop = () => {
    soundFX.playClick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-pink-200/80 bg-white/70 backdrop-blur-md pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Brand & Tagline */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-600 to-rose-500 flex items-center justify-center text-white font-bold text-xs">
                RV
              </div>
              <span className="font-heading font-bold text-lg text-zinc-900">
                {data.personal.name}
              </span>
            </div>
            <p className="text-xs text-zinc-500 max-w-md font-mono">
              B.Tech in Cloud Computing & Automation • VIT Bhopal University
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-600">
            <a href="#about" onClick={() => soundFX.playClick()} className="hover:text-pink-600 transition-colors">
              About
            </a>
            <a href="#skills" onClick={() => soundFX.playClick()} className="hover:text-pink-600 transition-colors">
              Skills
            </a>
            <a href="#projects" onClick={() => soundFX.playClick()} className="hover:text-pink-600 transition-colors">
              Projects
            </a>
            <a href="#experience" onClick={() => soundFX.playClick()} className="hover:text-pink-600 transition-colors">
              Experience
            </a>
            <a href="#certifications" onClick={() => soundFX.playClick()} className="hover:text-pink-600 transition-colors">
              Certifications
            </a>
            <a href="#contact" onClick={() => soundFX.playClick()} className="hover:text-pink-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-mono border border-pink-200 transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="pt-8 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Rishita Vikas. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            <span>& Cloud Architecture</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={data.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-pink-600 transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={data.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-pink-600 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={`mailto:${data.personal.email}`}
              className="text-zinc-500 hover:text-pink-600 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
