import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useVocab } from '../lib/vocab'
import { generateQuiz, MIN_WORDS, type ReviewQuestion } from '../lib/review'
import { speak } from '../lib/tts'
import Ona from '../components/Ona'

export default function ReviewQuiz() {
  const { words } = useVocab()
  const navigate = useNavigate()

  const [questions, setQuestions] = useState<ReviewQuestion[]>(() => generateQuiz(words, 8))
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [results, setResults] = useState<{ correct: boolean; q: ReviewQuestion; pickedIdx: number }[]>([])

  const total = questions.length
  const isComplete = idx >= total && total > 0

  // Auto-speak the English prompt when it's the question
  useEffect(() => {
    if (idx >= total) return
    const q = questions[idx]
    if (q.direction === 'en2kr') {
      const t = setTimeout(() => speak(q.prompt, { rate: 0.9 }), 150)
      return () => clearTimeout(t)
    }
  }, [idx, questions, total])

  if (words.length < MIN_WORDS.quiz) {
    return <NotEnoughWords need={MIN_WORDS.quiz - words.length} />
  }

  if (total === 0) {
    return (
      <main className="min-h-dvh flex items-center justify-center">
        <p className="text-zinc-500">준비 중...</p>
      </main>
    )
  }

  if (isComplete) {
    const correct = results.filter(r => r.correct).length
    return <QuizResults correct={correct} total={total} results={results} onRetry={() => {
      setQuestions(generateQuiz(words, 8))
      setIdx(0)
      setPicked(null)
      setResults([])
    }} />
  }

  const q = questions[idx]
  const showFeedback = picked !== null
  const isCorrect = picked === q.correctIndex
  const progress = (idx / total) * 100

  const handlePick = (i: number) => {
    if (showFeedback) return
    setPicked(i)
  }

  const handleNext = () => {
    setResults([...results, { correct: isCorrect, q, pickedIdx: picked! }])
    setPicked(null)
    setIdx(idx + 1)
  }

  return (
    <main className="min-h-dvh flex flex-col max-w-md mx-auto">
      <header className="sticky top-0 bg-white/80 backdrop-blur z-10 px-4 pt-4 pb-3 border-b border-zinc-100">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/review')}
            className="w-9 h-9 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-500 text-lg"
            aria-label="닫기"
          >
            ✕
          </button>
          <div className="flex-1 h-2 rounded-full bg-zinc-100 overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${Math.max(progress, 3)}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-zinc-500 tabular-nums w-10 text-right">
            {idx + 1}/{total}
          </span>
        </div>
      </header>

      <div className="flex-1 px-5 py-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-semibold tracking-wider text-blue-600 uppercase">
            {q.direction === 'en2kr' ? '영어 → 한국어' : '한국어 → 영어'}
          </span>
          {q.direction === 'en2kr' && (
            <button
              onClick={() => speak(q.prompt, { rate: 0.9 })}
              className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-700 active:scale-95 transition-all"
              aria-label="다시 듣기"
            >
              🔊
            </button>
          )}
        </div>

        <h2 className={`font-bold leading-tight mb-8 ${
          q.direction === 'en2kr' ? 'text-4xl' : 'text-2xl'
        }`}>
          {q.prompt}
        </h2>

        <div className="flex flex-col gap-2.5">
          {q.options.map((opt, i) => {
            const correct = i === q.correctIndex
            const chosen = picked === i
            let cls = 'border-zinc-200 bg-white hover:border-zinc-300'
            if (showFeedback && correct) cls = 'border-emerald-500 bg-emerald-50'
            else if (showFeedback && chosen && !correct) cls = 'border-rose-500 bg-rose-50'
            else if (showFeedback) cls = 'border-zinc-200 bg-white opacity-50'
            return (
              <button
                key={i}
                onClick={() => handlePick(i)}
                disabled={showFeedback}
                className={`text-left px-5 py-4 rounded-2xl border-2 font-medium transition-all ${cls}`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span>{opt}</span>
                  {showFeedback && correct && <span className="text-emerald-600 text-lg">✓</span>}
                  {showFeedback && chosen && !correct && <span className="text-rose-600 text-lg">✕</span>}
                </span>
              </button>
            )
          })}
        </div>

        {showFeedback && (
          <div className={`flex items-start gap-3 mt-6 rounded-2xl px-5 py-4 text-sm leading-relaxed ${
            isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'
          }`}>
            <Ona
              mood={isCorrect ? 'cheering' : 'encouraging'}
              size={56}
              className="shrink-0 -mt-1"
            />
            <div className="flex-1">
              <div className="font-semibold mb-1">
                {isCorrect ? '정답이에요!' : `정답: ${q.options[q.correctIndex]}`}
              </div>
              <div className="text-xs opacity-80 mt-1">
                {q.word.word} · {q.word.meaning} {q.word.pronunciation && `(${q.word.pronunciation})`}
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="sticky bottom-0 bg-gradient-to-t from-white via-white to-white/0 px-5 pt-6 pb-6">
        <button
          onClick={handleNext}
          disabled={picked === null}
          className="w-full py-4 rounded-2xl bg-blue-600 disabled:bg-zinc-200 disabled:text-zinc-400 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-base transition-all shadow-sm"
        >
          {idx < total - 1 ? '다음' : '결과 보기'}
        </button>
      </footer>
    </main>
  )
}

function QuizResults({ correct, total, results, onRetry }: {
  correct: number
  total: number
  results: { correct: boolean; q: ReviewQuestion; pickedIdx: number }[]
  onRetry: () => void
}) {
  const accuracy = Math.round((correct / total) * 100)
  const wrong = results.filter(r => !r.correct)

  return (
    <main className="min-h-dvh max-w-md mx-auto px-5 pt-12 pb-10 flex flex-col">
      <div className="text-center mb-8">
        <div className="inline-block mb-3 animate-[pop_400ms_cubic-bezier(0.32,1.5,0.5,1)]">
          <Ona
            mood={accuracy >= 60 ? 'cheering' : 'encouraging'}
            size={140}
            priority
          />
        </div>
        <h1 className="text-2xl font-bold mb-1">완료!</h1>
        <p className="text-sm text-zinc-500">{correct}/{total} 정답 · {accuracy}%</p>
      </div>

      {wrong.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-3">
            다시 볼 단어 {wrong.length}개
          </h2>
          <div className="flex flex-col gap-2">
            {wrong.map((r, i) => (
              <div key={i} className="bg-white border border-zinc-200 rounded-xl px-4 py-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold">{r.q.word.word}</span>
                  {r.q.word.pronunciation && (
                    <span className="text-xs text-zinc-400 font-mono">{r.q.word.pronunciation}</span>
                  )}
                </div>
                <p className="text-sm text-zinc-600 mt-0.5">{r.q.word.meaning}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="mt-auto flex flex-col gap-2.5">
        <button
          onClick={onRetry}
          className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-base transition-all"
        >
          다시 도전
        </button>
        <Link
          to="/review"
          className="w-full py-4 rounded-2xl bg-zinc-100 hover:bg-zinc-200 active:scale-[0.99] text-zinc-700 font-semibold text-sm text-center transition-all"
        >
          다른 게임
        </Link>
      </div>

      <style>{`
        @keyframes pop {
          0% { transform: scale(0.5); opacity: 0 }
          60% { transform: scale(1.15); opacity: 1 }
          100% { transform: scale(1); opacity: 1 }
        }
      `}</style>
    </main>
  )
}

function NotEnoughWords({ need }: { need: number }) {
  return (
    <main className="min-h-dvh max-w-md mx-auto px-5 pt-12 pb-10 flex flex-col items-center justify-center text-center">
      <div className="text-5xl mb-4">🔒</div>
      <h1 className="text-xl font-bold mb-2">아직 잠겨 있어요</h1>
      <p className="text-sm text-zinc-500 mb-6">
        단어 {need}개 더 모으면 단어 퀴즈가 열려요.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-sm"
      >
        레슨 시작
      </Link>
    </main>
  )
}
