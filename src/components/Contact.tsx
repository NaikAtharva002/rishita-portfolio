import React, { useState } from 'react'
import { Sparkles, Send, Copy, Check, Mail, MapPin, Heart, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import confetti from 'canvas-confetti'
import { soundFX } from '../utils/sound'
import { PortfolioData } from '../types/portfolio'

interface ContactProps {
  data: PortfolioData
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const validate = () => {
    const errs: { [key: string]: string } = {}
    if (!formData.name.trim()) errs.name = 'Please provide your full name'
    if (!formData.email.trim()) {
      errs.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address'
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required'
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please share a message with at least 10 characters'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    soundFX.playClick()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    // Simulate realistic asynchronous network submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      soundFX.playSuccess()

      // Confetti celebration blast!
      confetti({
        particleCount: 85,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#059669', '#10b981', '#ec4899', '#f472b6', '#064e3b', '#be185d'],
      })

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  const handleCopyEmail = () => {
    soundFX.playClick()
    navigator.clipboard.writeText(data.personal.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2400)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-t from-emerald-100/30 via-pink-50/20 to-transparent">
      {/* Background dual atmosphere */}
      <div className="absolute bottom-0 right-1/4 -z-10 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-emerald-300/20 to-rose-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline per Master Prompt */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-medium text-emerald-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>06 // Connect & Collaborate</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-zinc-900 leading-tight">
            Let's create something <br />
            <span className="emerald-gradient-text">extraordinary.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-xl mx-auto">
            Whether you have an upcoming cloud automation challenge, an apprenticeship opportunity, or wish to connect — I'd love to hear from you.
          </p>
        </div>

        {/* Contact Layout: Left Info Cards + Right Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card with Copy Trigger */}
            <div className="glass-panel p-6 rounded-3xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-800 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-emerald-600" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                Direct Correspondence
              </span>
              <a
                href={`mailto:${data.personal.email}`}
                className="text-base font-bold text-zinc-900 hover:text-emerald-700 transition-colors break-all"
              >
                {data.personal.email}
              </a>
            </div>

            {/* Professional Profiles */}
            <div className="glass-panel p-6 rounded-3xl space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                Professional Presence
              </span>

              {/* LinkedIn */}
              <a
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/80 border border-emerald-100 hover:border-emerald-300 hover:shadow-xs transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-zinc-900 block group-hover:text-emerald-800 transition-colors">
                      LinkedIn Network
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      rishita-vikas
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* GitHub */}
              <a
                href={data.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/80 border border-emerald-100 hover:border-emerald-300 hover:shadow-xs transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-100 text-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-zinc-900 block group-hover:text-emerald-800 transition-colors">
                      GitHub Repositories
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      rishita1524-source
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Campus Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/70">
                <div className="w-9 h-9 rounded-xl bg-white text-emerald-700 flex items-center justify-center shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-900 block">
                    Base Location
                  </span>
                  <span className="text-xs text-zinc-600">
                    {data.personal.location}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Validated Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-7 sm:p-9 rounded-3xl relative">
              
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 shadow-sm animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md mb-6 leading-relaxed">
                    Thank you for reaching out. I have received your message and will reply to your email shortly.
                  </p>
                  <button
                    onClick={() => {
                      soundFX.playClick()
                      setIsSubmitted(false)
                    }}
                    className="px-6 py-2.5 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold shadow-sm transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-heading font-bold text-zinc-900 mb-1">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-zinc-500 mb-6 font-mono">
                    Fill out the form below — all fields are verified in real time.
                  </p>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-zinc-600 block mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white/90 border text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-emerald-200 focus:border-emerald-600 focus:ring-emerald-200'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-red-500 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-mono text-zinc-600 block mb-1.5 font-medium">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        placeholder="alex@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white/90 border text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-emerald-200 focus:border-emerald-600 focus:ring-emerald-200'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-xs font-mono text-zinc-600 block mb-1.5 font-medium">
                      Subject / Topic *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Cloud Automation Project / Apprenticeship Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/90 border text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.subject
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-emerald-200 focus:border-emerald-600 focus:ring-emerald-200'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] font-mono text-red-500 mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-mono text-zinc-600 block mb-1.5 font-medium">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your vision, project scope, or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/90 border text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.message
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-emerald-200 focus:border-emerald-600 focus:ring-emerald-200'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button in High-Contrast Deep Forest / Obsidian */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-full bg-gradient-to-r from-emerald-950 via-zinc-900 to-emerald-900 hover:from-emerald-900 hover:to-zinc-800 text-white font-semibold text-sm border border-emerald-700/40 shadow-[0_10px_25px_-5px_rgba(6,78,59,0.38)] hover:shadow-[0_14px_30px_-5px_rgba(6,78,59,0.48)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4 text-emerald-400" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
