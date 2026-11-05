import React, { useState } from 'react'
import { Terminal, Cpu, Play, CheckCircle2, Layers, Cloud, Sparkles, RefreshCw, Server, ArrowRight } from 'lucide-react'
import { soundFX } from '../utils/sound'

type ConsoleTab = 'pipeline' | 'code' | 'infra'

export const CloudConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ConsoleTab>('pipeline')
  const [isRunning, setIsRunning] = useState(false)
  const [activeStep, setActiveStep] = useState(2)
  const [logs, setLogs] = useState<string[]>([
    '[INIT] Connecting to Cloudinary Media IQ SDK v2.4...',
    '[AUTH] Token verified: cldacad-bb4d5d6d1v (Rishita Vikas)',
    '[OPTIMIZE] Applying dynamic transformations: auto-format, f_auto, q_auto',
    '[DEPLOY] Distributing via AWS CloudFront CDN edge nodes...',
    '[SUCCESS] 65% bandwidth saved | Latency: 38ms | Status: 200 OK'
  ])

  const pipelineSteps = [
    { title: 'Code Ingest', sub: 'Git Push & Lint', status: 'Passed' },
    { title: 'Python MediaIQ', sub: 'Cloudinary API', status: 'Optimized' },
    { title: 'Docker Build', sub: 'Multi-stage Container', status: 'Ready' },
    { title: 'Edge CDN', sub: 'AWS S3 & CloudFront', status: 'Live 99.9%' }
  ]

  const handleRunScript = () => {
    soundFX.playClick()
    setIsRunning(true)
    setLogs((prev) => [...prev, `[TRIGGER] Manual pipeline execution initiated at ${new Date().toLocaleTimeString()}...`])

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '[WORKER] Asynchronous batch transform completed for 12 assets.',
        '[METRICS] Global latency: 32ms | Cache Hit Ratio: 98.4%'
      ])
      setIsRunning(false)
      soundFX.playChime()
    }, 1200)
  }

  return (
    <div className="w-full rounded-3xl glass-panel p-5 sm:p-6 shadow-[0_20px_50px_-15px_rgba(236,72,153,0.18)] border border-pink-200/80 bg-white/85 relative overflow-hidden">
      
      {/* Soft Ambient Corner Glow */}
      <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-gradient-to-br from-pink-300/30 to-rose-200/10 blur-2xl pointer-events-none" />

      {/* Window Titlebar */}
      <div className="flex items-center justify-between pb-4 border-b border-pink-100 mb-4">
        {/* macOS style control dots */}
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-400" />
          <div className="w-3 h-3 rounded-full bg-pink-300" />
          <div className="w-3 h-3 rounded-full bg-pink-200" />
          <span className="ml-2 font-mono text-[11px] text-zinc-500 font-medium hidden sm:inline">
            rishita@cloud-automation:~
          </span>
        </div>

        {/* Live Status indicator */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Operational</span>
        </div>
      </div>

      {/* Console Tab Selector */}
      <div className="flex items-center gap-1.5 mb-5 p-1 rounded-xl bg-pink-50/80 border border-pink-100 text-xs font-mono">
        <button
          onClick={() => {
            soundFX.playClick()
            setActiveTab('pipeline')
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg transition-all ${
            activeTab === 'pipeline'
              ? 'bg-white text-pink-700 font-semibold shadow-xs'
              : 'text-zinc-600 hover:text-pink-600'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Pipeline</span>
        </button>

        <button
          onClick={() => {
            soundFX.playClick()
            setActiveTab('code')
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg transition-all ${
            activeTab === 'code'
              ? 'bg-white text-pink-700 font-semibold shadow-xs'
              : 'text-zinc-600 hover:text-pink-600'
          }`}
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>Python SDK</span>
        </button>

        <button
          onClick={() => {
            soundFX.playClick()
            setActiveTab('infra')
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg transition-all ${
            activeTab === 'infra'
              ? 'bg-white text-pink-700 font-semibold shadow-xs'
              : 'text-zinc-600 hover:text-pink-600'
          }`}
        >
          <Server className="w-3.5 h-3.5" />
          <span>Infra Mesh</span>
        </button>
      </div>

      {/* Tab 1: Interactive CI/CD Pipeline Flow */}
      {activeTab === 'pipeline' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 gap-2.5">
            {pipelineSteps.map((step, idx) => (
              <div
                key={step.title}
                onClick={() => {
                  soundFX.playClick()
                  setActiveStep(idx)
                }}
                className={`p-3 rounded-2xl border text-left cursor-pointer transition-all ${
                  activeStep === idx
                    ? 'bg-pink-50/90 border-pink-300 shadow-xs ring-1 ring-pink-300/50'
                    : 'bg-white/70 border-pink-100 hover:border-pink-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] text-zinc-400 font-medium">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-[9px] px-1.5 py-0.2 rounded bg-pink-100 text-pink-700 font-semibold">
                    {step.status}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-xs text-zinc-900">
                  {step.title}
                </h4>
                <p className="font-mono text-[10px] text-zinc-500 mt-0.5">
                  {step.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Active Step Details Callout */}
          <div className="p-3.5 rounded-2xl bg-zinc-950 text-pink-200 font-mono text-xs">
            <div className="flex items-center justify-between text-[10px] text-zinc-400 pb-1.5 border-b border-zinc-800 mb-2">
              <span>ACTIVE STAGE: {pipelineSteps[activeStep].title}</span>
              <span className="text-emerald-400">● Latency: 34ms</span>
            </div>
            <p className="text-[11px] text-zinc-300 leading-relaxed font-sans">
              Automated triggers validate incoming artifacts against Cloudinary Media IQ transformations and package container layers for high-availability cloud delivery.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Python Code & Output Terminal */}
      {activeTab === 'code' && (
        <div className="space-y-3 animate-in fade-in duration-200">
          <div className="p-3.5 rounded-2xl bg-zinc-950 text-xs font-mono overflow-x-auto text-left leading-relaxed">
            <div className="text-zinc-500 mb-2 pb-1 border-b border-zinc-800 flex items-center justify-between">
              <span># pipeline_controller.py</span>
              <span className="text-pink-400">Python 3.12</span>
            </div>
            <p className="text-pink-400">import <span className="text-white">cloudinary</span></p>
            <p className="text-pink-400">from <span className="text-white">cloudinary.uploader</span> import <span className="text-amber-300">upload</span></p>
            <p className="text-zinc-500 mt-1"># Automated Media IQ transformation</p>
            <p className="text-emerald-300">response = upload("asset.mp4",</p>
            <p className="text-zinc-300 pl-4">transformation=[&#123;"width": 1080, "crop": "fill"&#125;],</p>
            <p className="text-zinc-300 pl-4">quality="auto:good", format="auto")</p>
            <p className="text-pink-400 mt-1">print(<span className="text-amber-300">f"[STATUS] 200 OK | Edge URL: &#123;response['secure_url']&#125;"</span>)</p>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] font-mono text-zinc-500">
              Trigger live pipeline demo
            </span>
            <button
              onClick={handleRunScript}
              disabled={isRunning}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-xs font-mono font-medium shadow-xs transition-colors disabled:opacity-60"
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>Executing...</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3" />
                  <span>Run Pipeline</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal log preview */}
          <div className="max-h-24 overflow-y-auto p-2.5 rounded-xl bg-pink-50/70 border border-pink-100 font-mono text-[10px] text-zinc-700 space-y-1">
            {logs.slice(-3).map((line, i) => (
              <div key={i} className="truncate">
                {line}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Infrastructure Mesh & Leadership */}
      {activeTab === 'infra' && (
        <div className="space-y-3 text-left animate-in fade-in duration-200">
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50/50 border border-pink-200/80">
            <span className="text-[10px] font-mono uppercase tracking-wider text-pink-700 font-semibold block mb-1">
              Cloud Architecture Stack
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-zinc-800">
              <div className="flex items-center gap-1.5">
                <Cloud className="w-3.5 h-3.5 text-pink-600" />
                <span>AWS & Azure Core</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-pink-600" />
                <span>Docker Containers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-pink-600" />
                <span>Cloudinary CDN</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-pink-600" />
                <span>GitHub Actions CI</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-pink-100">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold block mb-2">
              Campus Tech Societies (VIT Bhopal)
            </span>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <img src="/logos/ios-club.jpg" alt="iOS Club" className="w-5 h-5 rounded object-contain bg-black" />
                  <span className="font-semibold text-zinc-900">iOS Club</span>
                </div>
                <span className="font-mono text-[10px] text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
                  Core Member
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <img src="/logos/eureka.jpg" alt="The Eureka Club" className="w-5 h-5 rounded-full object-cover" />
                  <span className="font-semibold text-zinc-900">The Eureka Club</span>
                </div>
                <span className="font-mono text-[10px] text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
                  Core Member
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <img src="/logos/bitbybit.jpg" alt="Bit By Bit Club" className="w-5 h-5 rounded object-contain" />
                  <span className="font-semibold text-zinc-900">Bit By Bit Club</span>
                </div>
                <span className="font-mono text-[10px] text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
                  Core Member
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer info strip */}
      <div className="mt-4 pt-3 border-t border-pink-100 flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <span className="flex items-center gap-1 text-pink-600 font-medium">
          <Sparkles className="w-3 h-3 text-pink-500" />
          VIT Bhopal • 2025–2029
        </span>
        <span>Credential: cldacad-bb4d5d6d1v</span>
      </div>

    </div>
  )
}
