import { Link } from 'react-router-dom'
import { useVocab } from '../lib/vocab'
import { MIN_WORDS } from '../lib/review'
import Ona from '../components/Ona'

export default function Review() {
  const { words } = useVocab()
  const count = words.length

  return (
    <main className="min-h-dvh max-w-md mx-auto px-5 pt-6 pb-16">
      <header className="flex items-center gap-3 mb-7">
        <Link
          to="/vocabulary"
          className="w-10 h-10 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-500 text-lg"
          aria-label="뒤로"
        >
          ←
        </Link>
        <h1 className="text-2xl font-bold">단어 공부</h1>
        <span className="ml-auto text-sm font-semibold text-zinc-400 tabular-nums">{count}개</span>
      </header>

      <div className="flex items-center gap-3 mb-6 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-3 border border-blue-100">
        <Ona mood="encouraging" size={56} className="shrink-0" />
        <p className="text-sm text-zinc-700 leading-relaxed">
          저장한 단어를 세 가지 방식으로 복습할 수 있어!
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <GameCard
          to="/review/quiz"
          icon="🎯"
          accent="bg-blue-50 border-blue-200"
          accentText="text-blue-700"
          title="단어 퀴즈"
          subtitle="4지선다 객관식 8문제"
          minWords={MIN_WORDS.quiz}
          have={count}
        />
        <GameCard
          to="/review/match"
          icon="🃏"
          accent="bg-purple-50 border-purple-200"
          accentText="text-purple-700"
          title="짝맞추기"
          subtitle="카드 뒤집어 영단어-뜻 짝 찾기"
          minWords={MIN_WORDS.match}
          have={count}
        />
        <GameCard
          to="/review/flashcards"
          icon="📇"
          accent="bg-emerald-50 border-emerald-200"
          accentText="text-emerald-700"
          title="플래시카드"
          subtitle="카드 한 장씩 넘기며 외우기"
          minWords={MIN_WORDS.flashcards}
          have={count}
        />
      </div>
    </main>
  )
}

function GameCard({
  to,
  icon,
  accent,
  accentText,
  title,
  subtitle,
  minWords,
  have,
}: {
  to: string
  icon: string
  accent: string
  accentText: string
  title: string
  subtitle: string
  minWords: number
  have: number
}) {
  const locked = have < minWords
  const need = minWords - have

  if (locked) {
    return (
      <div
        className="flex items-center gap-4 rounded-2xl border-2 border-dashed border-zinc-200 bg-zinc-50 p-4 cursor-not-allowed"
        aria-disabled
      >
        <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center text-2xl opacity-40 grayscale shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-base font-bold text-zinc-400">{title}</div>
          <div className="text-xs text-zinc-400 mt-0.5">단어 {need}개 더 모으면 열려요</div>
        </div>
        <span className="text-zinc-300">🔒</span>
      </div>
    )
  }

  return (
    <Link
      to={to}
      className={`flex items-center gap-4 rounded-2xl border-2 ${accent} p-4 hover:scale-[1.01] active:scale-[0.99] transition-all`}
    >
      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-sm shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className={`text-base font-bold ${accentText}`}>{title}</div>
        <div className="text-xs text-zinc-600 mt-0.5">{subtitle}</div>
      </div>
      <span className={`${accentText} font-bold text-lg`}>→</span>
    </Link>
  )
}
