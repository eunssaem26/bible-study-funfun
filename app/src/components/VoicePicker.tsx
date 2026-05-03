import { useEffect, useRef, useState } from 'react'
import { listEnglishVoices, setEnglishVoice, getEnglishVoice, speak } from '../lib/tts'

export default function VoicePicker() {
  const [open, setOpen] = useState(false)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [current, setCurrent] = useState<string>('')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const refresh = () => {
      setVoices(listEnglishVoices())
      const v = getEnglishVoice()
      if (v) setCurrent(v.name)
    }
    refresh()
    if ('speechSynthesis' in window) {
      window.speechSynthesis.addEventListener?.('voiceschanged', refresh)
      return () => window.speechSynthesis.removeEventListener?.('voiceschanged', refresh)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  const pick = (name: string) => {
    setEnglishVoice(name)
    setCurrent(name)
    speak('Hello, this is your voice.', { rate: 0.95 })
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-500 text-base"
        aria-label="음성 설정"
        title="음성 설정"
      >
        🎙
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-30 w-72 max-h-[70vh] overflow-auto bg-white rounded-2xl shadow-2xl border border-zinc-200 py-2">
          <div className="px-4 py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider sticky top-0 bg-white">
            영어 음성 선택
          </div>
          {voices.length === 0 && (
            <div className="px-4 py-3 text-sm text-zinc-500">사용 가능한 음성이 없어요.</div>
          )}
          {voices.map((v) => {
            const isCurrent = v.name === current
            const tag = inferTag(v)
            return (
              <button
                key={v.name}
                onClick={() => pick(v.name)}
                className={`w-full text-left px-4 py-2.5 hover:bg-zinc-50 flex items-center gap-2 ${
                  isCurrent ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{v.name}</div>
                  <div className="text-[11px] text-zinc-500">{v.lang}{tag ? ` · ${tag}` : ''}</div>
                </div>
                {isCurrent && <span className="text-blue-600 text-sm">✓</span>}
              </button>
            )
          })}
          <div className="px-4 py-2 text-[11px] text-zinc-400 border-t border-zinc-100 mt-1">
            음성을 누르면 미리 들어볼 수 있어요. 브라우저마다 음성 목록이 달라요.
          </div>
        </div>
      )}
    </div>
  )
}

function inferTag(v: SpeechSynthesisVoice): string {
  const n = v.name.toLowerCase()
  if (n.includes('google')) return '추천'
  if (n.includes('natural') || n.includes('neural')) return '추천'
  if (n.includes('premium')) return '프리미엄'
  if (n.includes('enhanced')) return '향상됨'
  return ''
}
