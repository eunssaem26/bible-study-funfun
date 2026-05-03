// Audio playback for lesson sentences. Primary path is pre-generated MP3
// (OpenAI TTS, see scripts/generate-audio.ts) served from /audio/<hash>.mp3 —
// this works reliably on Android, where the Web Speech API often produces no
// sound because the OS has no English TTS engine installed. Web Speech is kept
// as a graceful fallback when the MP3 is missing or fails to load.

import audioManifest from '../content/audio-manifest.json'

const manifest = audioManifest as Record<string, string>

let currentAudio: HTMLAudioElement | null = null
let audioUnlocked = false

export function isSpeechUnlocked(): boolean {
  return audioUnlocked
}

function manifestLookup(text: string): string | null {
  const trimmed = text.trim()
  return manifest[trimmed] ?? null
}

function playMp3(hash: string, opts: { rate?: number }): boolean {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio.src = ''
    currentAudio = null
  }
  const audio = new Audio(`/audio/${hash}.mp3`)
  audio.preload = 'auto'
  audio.playbackRate = opts.rate ?? 1
  audio.onplaying = () => { audioUnlocked = true }
  audio.onerror = () => {
    console.warn('[TTS] mp3 load failed for', hash, '— falling back to speechSynthesis')
    speakViaSynthesis(reverseLookup(hash) || '', opts)
  }
  // Catch promise rejection (autoplay blocked, decode error, etc.) and fall
  // back to speech synthesis so the user still hears something.
  const playPromise = audio.play()
  if (playPromise && typeof playPromise.catch === 'function') {
    playPromise.catch(err => {
      console.warn('[TTS] audio.play() rejected:', err?.name || err)
      speakViaSynthesis(reverseLookup(hash) || '', opts)
    })
  }
  currentAudio = audio
  return true
}

// Reverse lookup is only used in the rare error path — manifest is small (<300
// entries) so a linear scan is fine.
function reverseLookup(hash: string): string | null {
  for (const [text, h] of Object.entries(manifest)) {
    if (h === hash) return text
  }
  return null
}

// ---------------- speechSynthesis fallback ----------------

let cachedVoice: SpeechSynthesisVoice | null = null

function normalizeLang(lang: string): string {
  return lang.replace('_', '-').toLowerCase()
}

const PREFERRED_NAMES = [
  'Google US English',
  'Google UK English Female',
  'Google UK English Male',
  'Microsoft Aria Online (Natural) - English (United States)',
  'Microsoft Jenny Online (Natural) - English (United States)',
  'Microsoft Guy Online (Natural) - English (United States)',
  'Microsoft Aria',
  'Microsoft Jenny',
  'Ava (Premium)',
  'Ava (Enhanced)',
  'Allison (Premium)',
  'Allison (Enhanced)',
  'Samantha (Enhanced)',
  'Samantha',
  'Karen (Enhanced)',
  'Karen',
  'Moira',
  'Tessa',
  'Nicky',
  'Aaron',
]

const BAD_NAMES = new Set([
  'Albert', 'Bad News', 'Bahh', 'Bells', 'Boing', 'Bubbles',
  'Cellos', 'Deranged', 'Fred', 'Good News', 'Hysterical',
  'Junior', 'Kathy', 'Pipe Organ', 'Ralph', 'Trinoids',
  'Whisper', 'Zarvox', 'Wobble', 'Organ',
])

function scoreVoice(v: SpeechSynthesisVoice): number {
  const lang = normalizeLang(v.lang)
  if (!lang.startsWith('en')) return -1
  if (BAD_NAMES.has(v.name)) return -100

  let score = 1
  const idx = PREFERRED_NAMES.indexOf(v.name)
  if (idx !== -1) score += 1000 - idx

  const lower = v.name.toLowerCase()
  if (lower.includes('google')) score += 500
  if (lower.includes('natural') || lower.includes('neural')) score += 400
  if (lower.includes('premium')) score += 300
  if (lower.includes('enhanced')) score += 250
  if (lower.includes('online')) score += 200
  if (lang === 'en-us') score += 50
  if (lang === 'en-gb') score += 30
  if (v.localService && (lower === 'alex' || lower === 'fred' || lower === 'victoria')) {
    score -= 50
  }
  return score
}

function pickVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null
  const voices = window.speechSynthesis.getVoices()
  if (!voices.length) return null
  let best: SpeechSynthesisVoice | null = null
  let bestScore = -Infinity
  for (const v of voices) {
    const s = scoreVoice(v)
    if (s > bestScore) {
      bestScore = s
      best = v
    }
  }
  return best
}

export function getEnglishVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice) return cachedVoice
  cachedVoice = pickVoice()
  return cachedVoice
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.getVoices()
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoice = pickVoice()
  }
}

function speakViaSynthesis(text: string, opts: { rate?: number; pitch?: number }) {
  if (!text || typeof window === 'undefined' || !('speechSynthesis' in window)) return
  const synth = window.speechSynthesis
  const utter = new SpeechSynthesisUtterance(text)
  const voice = getEnglishVoice()
  if (voice) utter.voice = voice
  utter.lang = voice?.lang || 'en-US'
  utter.rate = opts.rate ?? 0.92
  utter.pitch = opts.pitch ?? 1.0
  utter.onstart = () => { audioUnlocked = true }
  utter.onerror = (e) => {
    console.warn('[TTS] speechSynthesis error:', e.error, 'voice:', utter.voice?.name)
  }
  if (synth.speaking || synth.pending) {
    synth.cancel()
    setTimeout(() => synth.speak(utter), 60)
  } else {
    synth.speak(utter)
  }
}

// ---------------- public API ----------------

export function speak(text: string, opts: { rate?: number; pitch?: number } = {}) {
  if (typeof window === 'undefined') return
  const hash = manifestLookup(text)
  if (hash) {
    playMp3(hash, opts)
  } else {
    // Sentence not in manifest — likely added since the last `npm run generate:audio`.
    speakViaSynthesis(text, opts)
  }
}

export function listEnglishVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return []
  return window.speechSynthesis.getVoices()
    .filter(v => normalizeLang(v.lang).startsWith('en') && !BAD_NAMES.has(v.name))
    .sort((a, b) => scoreVoice(b) - scoreVoice(a))
}

export function setEnglishVoice(name: string) {
  const voices = listEnglishVoices()
  const found = voices.find(v => v.name === name)
  if (found) {
    cachedVoice = found
    try { localStorage.setItem('tts:voice', name) } catch {}
  }
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  try {
    const saved = localStorage.getItem('tts:voice')
    if (saved) {
      const tryRestore = () => {
        const v = window.speechSynthesis.getVoices().find(x => x.name === saved)
        if (v) cachedVoice = v
      }
      tryRestore()
      window.speechSynthesis.addEventListener?.('voiceschanged', tryRestore)
    }
  } catch {}
}
