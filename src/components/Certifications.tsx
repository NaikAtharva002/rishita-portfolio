import React, { useState } from 'react'
import { Sparkles, Award, ExternalLink, CheckCircle2, ShieldCheck, X, FileText } from 'lucide-react'
import { CertificationItem } from '../types/portfolio'
import { soundFX } from '../utils/sound'

interface CertificationsProps {
  certifications: CertificationItem[]
  isEditMode: boolean
  onUpdateCert: (updated: CertificationItem) => void
}

export const Certifications: React.FC<CertificationsProps> = ({
  certifications,
  isEditMode,
  onUpdateCert,
}) => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null)

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-pink-50/25 to-transparent">
      {/* Soft pink blur */}
      <div className="absolute top-1/3 left-1/3 -z-10 w-96 h-96 rounded-full bg-pink-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-xs font-mono font-medium text-pink-700 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-pink-500" />
            <span>05 // Verified Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-zinc-900">
            Licenses & <span className="pink-gradient-text">Certifications</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 max-w-2xl">
            Authentic industry qualifications, practical enterprise simulations, and hackathon recognitions.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-6 sm:p-7 rounded-3xl flex flex-col justify-between hover:border-pink-300 hover:shadow-[0_16px_40px_-12px_rgba(236,72,153,0.18)] transition-all duration-300 group"
            >
              <div>
                {/* Top Badge & Issuer with Authentic Logo */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-white p-1.5 border border-pink-200/90 shadow-xs flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                    {cert.logo ? (
                      <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
                    ) : (
                      <Award className="w-5 h-5 text-pink-600" />
                    )}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-pink-700 bg-pink-100/90 px-2.5 py-0.5 rounded-full">
                    {cert.badgeText}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-zinc-900 group-hover:text-pink-600 transition-colors mb-1.5">
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <div className="text-xs font-medium text-zinc-600 mb-4">
                  <span>Issued by </span>
                  <span className="font-semibold text-zinc-900">{cert.issuer}</span>
                  <span className="text-zinc-400"> • {cert.issueDate}</span>
                </div>

                {/* Credential ID tag if present */}
                {cert.credentialId && (
                  <div className="p-2.5 rounded-xl bg-zinc-900 text-pink-200 font-mono text-[11px] mb-4 flex items-center justify-between">
                    <span className="text-zinc-400">ID:</span>
                    <span className="font-semibold tracking-wider">{cert.credentialId}</span>
                  </div>
                )}

                {/* Skills Covered Pills */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                    Competencies Evaluated
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-pink-50 border border-pink-200/70 text-zinc-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View / Verify Action */}
              <div className="pt-4 border-t border-pink-100">
                <button
                  onClick={() => {
                    soundFX.playClick()
                    setSelectedCert(cert)
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-semibold border border-pink-200/80 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect Credential Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Credential Details Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-sm animate-in fade-in">
            <div
              className="relative w-full max-w-lg rounded-3xl bg-white border border-pink-200 shadow-2xl p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  soundFX.playClick()
                  setSelectedCert(null)
                }}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-pink-50 hover:bg-pink-100 flex items-center justify-center text-zinc-500 hover:text-pink-600"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white p-1.5 border border-pink-200/90 shadow-xs flex items-center justify-center overflow-hidden">
                  {selectedCert.logo ? (
                    <img src={selectedCert.logo} alt={selectedCert.issuer} className="w-full h-full object-contain" />
                  ) : (
                    <Award className="w-6 h-6 text-pink-600" />
                  )}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-pink-600 font-bold block">
                    Verified Credential Record
                  </span>
                  <h3 className="font-heading font-bold text-lg text-zinc-900">
                    {selectedCert.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-600 my-4 p-4 rounded-2xl bg-pink-50/60 border border-pink-100">
                <p>
                  <strong className="text-zinc-800">Issuing Body:</strong> {selectedCert.issuer}
                </p>
                <p>
                  <strong className="text-zinc-800">Date of Award:</strong> {selectedCert.issueDate}
                </p>
                {selectedCert.credentialId && (
                  <p className="font-mono">
                    <strong className="text-zinc-800">Credential ID:</strong> {selectedCert.credentialId}
                  </p>
                )}
                <p className="text-zinc-700 italic border-t border-pink-200/60 pt-2 mt-2">
                  "{selectedCert.verificationNote}"
                </p>
              </div>

              <div className="mt-6 flex items-center justify-end gap-2">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-zinc-600 hover:bg-zinc-100"
                >
                  Close
                </button>
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold shadow-sm"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
