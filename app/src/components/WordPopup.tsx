import { useEffect } from 'react'
import type { WordDef } from '../content/lessons'
import { speak } from '../lib/tts'

type Props = {
  word: WordDef | null
  onClose: () => void
  onSave?: (word: WordDef) => void
  saved?: boolean
}

export default function WordPopup({ word, onClose, onSave, saved }: Props) {
  useEffect(() => {
    if (!word) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [word, onClose])

  if (!word) return null

  const speakWord = () => speak(word.word, { rate: 0.85 })

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-[fadeIn_120ms_ease-out]" />
      <div
        className="relative w-full sm:max-w-sm bg-white rounded-t-3xl sm:rounded-3xl p-6 pb-8 shadow-2xl animate-[slideUp_200ms_cubic-bezier(0.32,0.72,0,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 h-1 bg-zinc-200 rounded-full mx-auto mb-5 sm:hidden" />

        <div className="flex items-baseline gap-3 mb-1">
          <h3 className="text-2xl font-bold">{word.word}</h3>
          {word.pronunciation && (
            <span className="text-sm text-zinc-400 font-mono">{word.pronunciation}</span>
          )}
        </div>

        <p className="text-base text-zinc-700 mb-4">{word.meaning}</p>

        {word.example && (
          <div className="bg-zinc-50 rounded-xl px-4 py-3 mb-5">
            <div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1">예문</div>
            <p className="text-sm text-zinc-700">{word.example}</p>
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={speakWord}
            className="flex-1 py-3 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <span aria-hidden>🔊</span>
            발음 듣기
          </button>
          {onSave && (
            <button
              onClick={() => onSave(word)}
              disabled={saved}
              className={`flex-1 py-3 rounded-2xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 ${
                saved
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <span aria-hidden>{saved ? '✓' : '＋'}</span>
              {saved ? '저장됨' : '단어장 추가'}
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }
      `}</style>
    </div>
  )
}
