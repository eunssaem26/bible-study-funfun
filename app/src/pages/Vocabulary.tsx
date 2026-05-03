import { Link } from 'react-router-dom'
import { useVocab } from '../lib/vocab'
import { speak } from '../lib/tts'
import Ona from '../components/Ona'

export default function Vocabulary() {
  const { words, remove } = useVocab()
  const sorted = [...words].sort((a, b) => b.savedAt - a.savedAt)

  return (
    <main className="min-h-dvh max-w-md mx-auto px-5 pt-6 pb-16">
      <header className="flex items-center gap-3 mb-6">
        <Link
          to="/"
          className="w-10 h-10 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-500 text-lg"
          aria-label="홈"
        >
          ←
        </Link>
        <h1 className="text-2xl font-bold">내 단어장</h1>
        <span className="ml-auto text-sm font-semibold text-zinc-400 tabular-nums">
          {words.length}개
        </span>
      </header>

      {words.length > 0 && (
        <Link
          to="/review"
          className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-4 mb-6 shadow-sm hover:shadow-md active:scale-[0.99] transition-all"
        >
          <span className="text-2xl" aria-hidden>🎯</span>
          <div className="flex-1">
            <div className="font-bold text-base">단어 공부하기</div>
            <div className="text-xs opacity-80">퀴즈 · 짝맞추기 · 플래시카드</div>
          </div>
          <span className="font-bold text-lg">→</span>
        </Link>
      )}

      {words.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="flex flex-col gap-2.5">
          {sorted.map(w => (
            <article
              key={w.word}
              className="bg-white border border-zinc-200 rounded-2xl p-4 group"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <h2 className="font-bold text-lg">{w.word}</h2>
                {w.pronunciation && (
                  <span className="text-xs text-zinc-400 font-mono">{w.pronunciation}</span>
                )}
                <button
                  onClick={() => speak(w.word, { rate: 0.85 })}
                  className="text-zinc-400 hover:text-blue-600 active:scale-95 transition-all w-7 h-7 rounded-full hover:bg-blue-50 flex items-center justify-center"
                  aria-label="발음 듣기"
                >
                  🔊
                </button>
                <button
                  onClick={() => {
                    if (confirm(`"${w.word}"을(를) 단어장에서 삭제할까요?`)) {
                      remove(w.word)
                    }
                  }}
                  className="ml-auto w-7 h-7 rounded-full text-zinc-300 hover:text-rose-500 hover:bg-rose-50 active:scale-95 transition-all flex items-center justify-center"
                  aria-label="삭제"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">{w.meaning}</p>
              {w.example && (
                <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
                  {w.example}
                </p>
              )}
              <div className="text-[11px] text-zinc-400 mt-2.5 font-medium">
                from {w.reference}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}

function EmptyState() {
  return (
    <div className="text-center py-12">
      <Ona mood="greeting" size={140} className="mx-auto mb-5" />
      <p className="text-zinc-600 text-sm leading-relaxed mb-6">
        아직 모은 단어가 없어요.<br />
        레슨에서 점선 단어를 누르면 오나가 모아줄게!
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm"
      >
        레슨 시작
      </Link>
    </div>
  )
}
