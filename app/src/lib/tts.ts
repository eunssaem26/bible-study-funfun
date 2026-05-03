// Pick the best available English voice and cache it.
// Different browsers expose different voices. We prefer cloud / "Premium" /
// "Natural" / "Neural" voices over older robotic system voices like Alex/Fred.

let cachedVoice: SpeechSynthesisVoice | null = null
let warmedUp = false

const PREFERRED_NAMES = [
  // Chrome on Mac/Windows — generally the best free option
  'Google US English',
  'Google UK English Female',
  'Google UK English Male',
  // Microsoft Edge — Neural voices, very high quality
  'Microsoft Aria Online (Natural) - English (United States)',
  'Microsoft Jenny Online (Natural) - English (United States)',
  'Microsoft Guy Online (Natural) - English (United States)',
  'Microsoft Aria',
  'Microsoft Jenny',
  // Safari / macOS — modern enhanced voices
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
  // iOS Safari fallback
  'Nicky',
  'Aaron',
]

// Voices known to sound robotic / unpleasant — avoid if possible
const BAD_NAMES = new Set([
  'Albert', 'Bad News', 'Bahh', 'Bells', 'Boing', 'Bubbles',
  'Cellos', 'Deranged', 'Fred', 'Good News', 'Hysterical',
  'Junior', 'Kathy', 'Pipe Organ', 'Ralph', 'Trinoids',
  'Whisper', 'Zarvox', 'Wobble', 'Organ',
])

function scoreVoice(v: SpeechSynthesisVoice): number {
  if (!v.lang.toLowerCase().startsWith('en')) return -1
  if (BAD_NAMES.has(v.name)) return -100

  let score = 0
  const idx = PREFERRED_NAMES.indexOf(v.name)
  if (idx !== -1) score += 1000 - idx

  const lower = v.name.toLowerCase()
  if (lower.includes('google')) score += 500
  if (lower.includes('natural') || lower.includes('neural')) score += 400
  if (lower.includes('premium')) score += 300
  if (lower.includes('enhanced')) score += 250
  if (lower.includes('online')) score += 200
  if (v.lang === 'en-US') score += 50
  if (v.lang === 'en-GB') score += 30
  // Prefer non-default localService voices on Mac (default ones are often older)
  if (v.localService && (lower === 'alex' || lower === 'fred' || lower === 'victoria')) {
    score -= 50
  }

  return score
}

function pick(): SpeechSynthesisVoice | null {
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
  return bestScore > 0 ? best : null
}

export function getEnglishVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice) return cachedVoice
  cachedVoice = pick()
  return cachedVoice
}

// Voices may load async on some browsers. Listen once.
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoice = pick()
  }
}

export function speak(text: string, opts: { rate?: number; pitch?: number } = {}) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
  const synth = window.speechSynthesis
  synth.cancel()

  // On Chrome/Edge, the first utterance after a long pause sometimes drops the
  // selected voice. A tiny silent warm-up call solves it for the session.
  if (!warmedUp) {
    const warm = new SpeechSynthesisUtterance(' ')
    warm.volume = 0
    synth.speak(warm)
    warmedUp = true
  }

  const utter = new SpeechSynthesisUtterance(text)
  const voice = getEnglishVoice()
  if (voice) utter.voice = voice
  utter.lang = voice?.lang || 'en-US'
  utter.rate = opts.rate ?? 0.92
  utter.pitch = opts.pitch ?? 1.0
  synth.speak(utter)
}

export function listEnglishVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return []
  return window.speechSynthesis.getVoices()
    .filter(v => v.lang.toLowerCase().startsWith('en') && !BAD_NAMES.has(v.name))
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

// Restore saved preference on load
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
