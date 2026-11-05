// Modern subtle sound feedback using Web Audio API (zero external assets)

class SoundFX {
  private ctx: AudioContext | null = null
  private enabled: boolean = true

  constructor() {
    // AudioContext will be initialized on first user interaction
  }

  public setEnabled(enabled: boolean) {
    this.enabled = enabled
  }

  public isEnabled(): boolean {
    return this.enabled
  }

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  // Soft subtle glass click for navigation and buttons
  public playClick() {
    if (!this.enabled) return
    try {
      this.initContext()
      if (!this.ctx) return

      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'sine'
      const now = this.ctx.currentTime
      osc.frequency.setValueAtTime(640, now)
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.04)

      gain.gain.setValueAtTime(0.04, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start(now)
      osc.stop(now + 0.05)
    } catch {
      // Audio not supported or blocked, ignore gracefully
    }
  }

  // Harmonic chime for positive confirmation / filter switch / tab change
  public playChime() {
    if (!this.enabled) return
    try {
      this.initContext()
      if (!this.ctx) return

      const now = this.ctx.currentTime
      const notes = [587.33, 880] // D5, A5

      notes.forEach((freq, idx) => {
        if (!this.ctx) return
        const osc = this.ctx.createOscillator()
        const gain = this.ctx.createGain()

        osc.type = 'sine'
        const startTime = now + idx * 0.05
        osc.frequency.setValueAtTime(freq, startTime)

        gain.gain.setValueAtTime(0.035, startTime)
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.18)

        osc.connect(gain)
        gain.connect(this.ctx.destination)

        osc.start(startTime)
        osc.stop(startTime + 0.18)
      })
    } catch {
      // ignore
    }
  }

  // Celebration chord for contact form success
  public playSuccess() {
    if (!this.enabled) return
    try {
      this.initContext()
      if (!this.ctx) return

      const now = this.ctx.currentTime
      // C5, E5, G5, C6 in soft flute harmonic
      const chord = [523.25, 659.25, 783.99, 1046.50]

      chord.forEach((freq, idx) => {
        if (!this.ctx) return
        const osc = this.ctx.createOscillator()
        const gain = this.ctx.createGain()

        osc.type = 'triangle'
        const startTime = now + idx * 0.07
        osc.frequency.setValueAtTime(freq, startTime)

        gain.gain.setValueAtTime(0.045, startTime)
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.35)

        osc.connect(gain)
        gain.connect(this.ctx.destination)

        osc.start(startTime)
        osc.stop(startTime + 0.35)
      })
    } catch {
      // ignore
    }
  }
}

export const soundFX = new SoundFX()
