import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { WordDef } from '../content/lessons'
import { getLesson } from '../content/lessons'
import { markLessonComplete } from '../lib/progress'
import Ona from '../components/Ona'

type Result = {
  savedWords: WordDef[]
  correct: number
  total: number
}

export default function Complete() {
  const { storyId, lessonNum } = useParams()
  const lesson = getLesson(storyId!, lessonNum!)
  const [result, setResult] = useState<Result | null>(null)

  useEffect(() => {
    const raw = sessionStorage.getItem('lesson:result')
    if (raw) setResult(JSON.parse(raw))
    if (storyId && lessonNum) {
      markLessonComplete(storyId, Number(lessonNum))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!lesson || !result) {
    return (
      <main className="min-h-dvh flex items-center justify-center p-6">
        <Link to="/" className="text-blue-600 font-semibold">홈으로</Link>
      </main>
    )
  }

  const xp = result.correct * 5 + result.savedWords.length * 2 + 10
  const accuracy = Math.round((result.correct / result.total) * 100)

  return (
    <main className="min-h-dvh max-w-md mx-auto px-5 pt-12 pb-10 flex flex-col">
      <div className="text-center mb-10">
        <div className="inline-block mb-3 animate-[pop_400ms_cubic-bezier(0.32,1.5,0.5,1)]">
          <Ona mood="cheering" size={160} priority />
        </div>
        <h1 className="text-2xl font-bold mb-1">레슨 완료!</h1>
        <p className="text-sm text-zinc-500">{lesson.titleKr}</p>
      </div>

      <div className="grid grid-cols-3 gap-2.5 mb-8">
        <Stat label="XP" value={`+${xp}`} accent="blue" />
        <Stat label="정답률" value={`${accuracy}%`} accent="emerald" />
        <Stat label="단어" value={String(result.savedWords.length)} accent="amber" />
      </div>

      {result.savedWords.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
              이번에 저장한 단어 {result.savedWords.length}개
            </h2>
            <Link to="/vocabulary" className="text-xs font-semibold text-blue-600 hover:text-blue-700">
              단어장 보기 →
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            {result.savedWords.map((w) => (
              <div
                key={w.word}
                className="flex items-baseline gap-3 bg-white border border-zinc-200 rounded-xl px-4 py-3"
              >
                <span className="font-bold">{w.word}</span>
                <span className="text-zinc-400 text-xs font-mono">{w.pronunciation}</span>
                <span className="text-sm text-zinc-600 ml-auto">{w.meaning}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="mt-auto flex flex-col gap-3">
        <Link
          to="/"
          className="w-full py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 active:scale-[0.99] text-white font-bold text-base text-center transition-all"
        >
          홈으로
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

function Stat({ label, value, accent }: { label: string; value: string; accent: 'blue' | 'emerald' | 'amber' }) {
  const cls = {
    blue: 'bg-blue-50 text-blue-700',
    emerald: 'bg-emerald-50 text-emerald-700',
    amber: 'bg-amber-50 text-amber-700',
  }[accent]
  return (
    <div className={`rounded-2xl ${cls} px-3 py-4 text-center`}>
      <div className="text-2xl font-bold tabular-nums">{value}</div>
      <div className="text-[10px] font-semibold tracking-wider uppercase mt-0.5 opacity-70">{label}</div>
    </div>
  )
}
