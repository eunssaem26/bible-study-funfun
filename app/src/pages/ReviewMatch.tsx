import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useVocab } from '../lib/vocab'
import { generateMatchCards, MIN_WORDS, type MatchCard } from '../lib/review'
import Ona from '../components/Ona'

export default function ReviewMatch() {
  const { words } = useVocab()
  const navigate = useNavigate()

  const pairCount = Math.min(6, words.length)
  const [cards, setCards] = useState<MatchCard[]>(() => generateMatchCards(words, pairCount))
  const [revealed, setRevealed] = useState<string[]>([])
  const [matched, setMatched] = useState<Set<string>>(new Set())
  const [moves, setMoves] = useState(0)
  const [startTime, setStartTime] = useState<number>(() => Date.now())
  const [endTime, setEndTime] = useState<number | null>(null)
  const [busy, setBusy] = useState(false)

  const totalPairs = pairCount
  const allMatched = matched.size === totalPairs && totalPairs > 0

  useEffect(() => {
    if (allMatched && endTime === null) {
      setEndTime(Date.now())
    }
  }, [allMatched, endTime])

  if (words.length < MIN_WORDS.match) {
    return (
      <main className="min-h-dvh max-w-md mx-auto px-5 pt-12 pb-10 flex flex-col items-center justify-center text-center">
        <div className="text-5xl mb-4">🔒</div>
        <h1 className="text-xl font-bold mb-2">아직 잠겨 있어요</h1>
        <p className="text-sm text-zinc-500 mb-6">
          단어 {MIN_WORDS.match - words.length}개 더 모으면 짝맞추기가 열려요.
        </p>
        <Link to="/" className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold text-sm">
          레슨 시작
        </Link>
      </main>
    )
  }

  const handleClick = (card: MatchCard) => {
    if (busy) return
    if (matched.has(card.pairId)) return
    if (revealed.includes(card.id)) return
    if (revealed.length >= 2) return

    const next = [...revealed, card.id]
    setRevealed(next)

    if (next.length === 2) {
      setMoves(m => m + 1)
      const a = cards.find(c => c.id === next[0])!
      const b = cards.find(c => c.id === next[1])!
      if (a.pairId === b.pairId) {
        setBusy(true)
        setTimeout(() => {
          setMatched(prev => new Set([...prev, a.pairId]))
          setRevealed([])
          setBusy(false)
        }, 500)
      } else {
        setBusy(true)
        setTimeout(() => {
          setRevealed([])
          setBusy(false)
        }, 1000)
      }
    }
  }

  const reset = () => {
    setCards(generateMatchCards(words, pairCount))
    setRevealed([])
    setMatched(new Set())
    setMoves(0)
    setStartTime(Date.now())
    setEndTime(null)
  }

  const elapsed = Math.floor(((endTime ?? Date.now()) - startTime) / 1000)

  if (allMatched) {
    return <MatchResults pairs={totalPairs} moves={moves} seconds={elapsed} onRetry={reset} />
  }

  // Choose grid columns based on pair count
  const cols = totalPairs <= 4 ? 'grid-cols-2' : totalPairs <= 6 ? 'grid-cols-3' : 'grid-cols-4'

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
          <h1 className="flex-1 font-bold text-base">짝맞추기</h1>
          <div className="text-xs font-semibold text-zinc-500 tabular-nums">
            {matched.size}/{totalPairs} · {moves}회
          </div>
        </div>
      </header>

      <div className="flex-1 px-4 py-6">
        <div className={`grid ${cols} gap-2.5`}>
          {cards.map(card => (
            <Card
              key={card.id}
              card={card}
              isOpen={revealed.includes(card.id)}
              isMatched={matched.has(card.pairId)}
              onClick={() => handleClick(card)}
            />
          ))}
        </div>
      </div>

      <footer className="px-5 pb-6 text-center text-xs text-zinc-400">
        영단어와 한국어 뜻을 짝지어 주세요
      </footer>
    </main>
  )
}

function Card({
  card,
  isOpen,
  isMatched,
  onClick,
}: {
  card: MatchCard
  isOpen: boolean
  isMatched: boolean
  onClick: () => void
}) {
  const showFront = isOpen || isMatched

  return (
    <button
      onClick={onClick}
      disabled={isMatched}
      className="aspect-[3/4] relative cursor-pointer disabled:cursor-default"
      style={{ perspective: '800px' }}
    >
      <div
        className="absolute inset-0 transition-transform duration-400"
        style={{
          transformStyle: 'preserve-3d',
          transform: showFront ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Back (closed) */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-md"
          style={{ backfaceVisibility: 'hidden' as const, WebkitBackfaceVisibility: 'hidden' as const }}
        >
          ?
        </div>
        {/* Front (open) */}
        <div
          className={`absolute inset-0 rounded-2xl flex items-center justify-center text-center px-2 shadow-md ${
            isMatched
              ? 'bg-emerald-50 border-2 border-emerald-300'
              : card.side === 'en'
              ? 'bg-white border-2 border-purple-300'
              : 'bg-purple-50 border-2 border-purple-300'
          }`}
          style={{
            backfaceVisibility: 'hidden' as const,
            WebkitBackfaceVisibility: 'hidden' as const,
            transform: 'rotateY(180deg)',
          }}
        >
          <span className={`font-bold leading-tight ${
            card.side === 'en'
              ? 'text-base text-zinc-900'
              : 'text-[11px] text-purple-900'
          }`}>
            {card.text}
          </span>
        </div>
      </div>
    </button>
  )
}

function MatchResults({ pairs, moves, seconds, onRetry }: {
  pairs: number
  moves: number
  seconds: number
  onRetry: () => void
}) {
  const perfect = moves === pairs
  return (
    <main className="min-h-dvh max-w-md mx-auto px-5 pt-12 pb-10 flex flex-col">
      <div className="text-center mb-8">
        <div className="inline-block mb-3 animate-[pop_400ms_cubic-bezier(0.32,1.5,0.5,1)]">
          <Ona mood="cheering" size={140} priority />
        </div>
        <h1 className="text-2xl font-bold mb-1">완료!</h1>
        <p className="text-sm text-zinc-500">
          {pairs}쌍을 {moves}번에 · {seconds}초
          {perfect && ' · 한 번에 다 맞췄어요!'}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2.5 mb-8">
        <Stat label="쌍" value={String(pairs)} accent="purple" />
        <Stat label="시도" value={String(moves)} accent="blue" />
        <Stat label="시간" value={`${seconds}초`} accent="emerald" />
      </div>

      <div className="mt-auto flex flex-col gap-2.5">
        <button
          onClick={onRetry}
          className="w-full py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 active:scale-[0.99] text-white font-bold text-base transition-all"
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

function Stat({ label, value, accent }: { label: string; value: string; accent: 'purple' | 'blue' | 'emerald' }) {
  const cls = {
    purple: 'bg-purple-50 text-purple-700',
    blue: 'bg-blue-50 text-blue-700',
    emerald: 'bg-emerald-50 text-emerald-700',
  }[accent]
  return (
    <div className={`rounded-2xl ${cls} px-3 py-4 text-center`}>
      <div className="text-2xl font-bold tabular-nums">{value}</div>
      <div className="text-[10px] font-semibold tracking-wider uppercase mt-0.5 opacity-70">{label}</div>
    </div>
  )
}
