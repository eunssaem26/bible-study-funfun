import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useVocab, type SavedWord } from '../lib/vocab'
import { generateFlashcards, MIN_WORDS } from '../lib/review'
import { speak } from '../lib/tts'
import Ona from '../components/Ona'

type Mark = 'again' | 'good' | 'easy'

export default function ReviewFlashcards() {
  const { words } = useVocab()
  const navigate = useNavigate()
  const [cards, setCards] = useState<SavedWord[]>(() => generateFlashcards(words))
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [marks, setMarks] = useState<Mark[]>([])

  if (words.length < MIN_WORDS.flashcards) {
    return (
      <main className="min-h-dvh max-w-md mx-auto px-5 pt-12 pb-10 flex flex-col items-center justify-center text-center">
        <div className="text-5xl mb-4">🔒</div>
        <h1 className="text-xl font-bold mb-2">아직 단어가 없어요</h1>
        <p className="text-sm text-zinc-500 mb-6">레슨에서 단어를 저장한 후 사용해 보세요.</p>
        <Link to="/" className="px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm">
          레슨 시작
        </Link>
      </main>
    )
  }

  const total = cards.length
  const isComplete = idx >= total

  const reset = () => {
    setCards(generateFlashcards(words))
    setIdx(0)
    setFlipped(false)
    setMarks([])
  }

  if (isComplete) {
    return <FlashResults marks={marks} cards={cards} onRetry={reset} />
  }

  const card = cards[idx]
  const progress = (idx / total) * 100

  const handleMark = (mark: Mark) => {
    setMarks([...marks, mark])
    setFlipped(false)
    setIdx(idx + 1)
  }

  const speakWord = () => speak(card.word, { rate: 0.85 })

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
              className="h-full bg-emerald-600 rounded-full transition-all duration-300"
              style={{ width: `${Math.max(progress, 3)}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-zinc-500 tabular-nums w-10 text-right">
            {idx + 1}/{total}
          </span>
        </div>
      </header>

      <div className="flex-1 px-5 py-8 flex flex-col">
        <div
          className="flex-1 flex items-center justify-center"
          onClick={() => setFlipped(f => !f)}
        >
          <FlashCard card={card} flipped={flipped} onSpeak={speakWord} />
        </div>
      </div>

      <footer className="sticky bottom-0 bg-gradient-to-t from-white via-white to-white/0 px-5 pt-6 pb-6">
        {!flipped ? (
          <button
            onClick={() => setFlipped(true)}
            className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-bold text-base transition-all shadow-sm"
          >
            뜻 보기
          </button>
        ) : (
          <div>
            <p className="text-xs text-zinc-500 text-center mb-2.5">얼마나 잘 알고 있어요?</p>
            <div className="grid grid-cols-3 gap-2">
              <MarkButton onClick={() => handleMark('again')} bg="bg-rose-100" text="text-rose-700" label="다시" sub="모르겠음" />
              <MarkButton onClick={() => handleMark('good')} bg="bg-zinc-100" text="text-zinc-700" label="보통" sub="조금 알아요" />
              <MarkButton onClick={() => handleMark('easy')} bg="bg-emerald-100" text="text-emerald-700" label="쉬움" sub="잘 알아요" />
            </div>
          </div>
        )}
      </footer>
    </main>
  )
}

function FlashCard({ card, flipped, onSpeak }: { card: SavedWord; flipped: boolean; onSpeak: () => void }) {
  return (
    <div className="w-full aspect-[3/4] max-h-[60vh] relative" style={{ perspective: '1000px' }}>
      <div
        className="absolute inset-0 transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front: English */}
        <div
          className="absolute inset-0 rounded-3xl bg-white border-2 border-emerald-200 shadow-lg flex flex-col items-center justify-center px-6 text-center"
          style={{ backfaceVisibility: 'hidden' as const, WebkitBackfaceVisibility: 'hidden' as const }}
        >
          <div className="text-3xl font-bold mb-2">{card.word}</div>
          {card.pronunciation && (
            <div className="text-sm text-zinc-400 font-mono mb-4">{card.pronunciation}</div>
          )}
          <button
            onClick={(e) => { e.stopPropagation(); onSpeak() }}
            className="w-12 h-12 rounded-full bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center text-xl active:scale-95 transition-all"
            aria-label="발음 듣기"
          >
            🔊
          </button>
          <div className="absolute bottom-5 text-[11px] text-zinc-400">탭해서 뜻 보기</div>
        </div>
        {/* Back: Korean */}
        <div
          className="absolute inset-0 rounded-3xl bg-emerald-50 border-2 border-emerald-200 shadow-lg flex flex-col items-center justify-center px-6 text-center"
          style={{
            backfaceVisibility: 'hidden' as const,
            WebkitBackfaceVisibility: 'hidden' as const,
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="text-2xl font-bold text-emerald-900 mb-3">{card.meaning}</div>
          {card.example && (
            <div className="text-sm text-zinc-600 leading-relaxed italic">"{card.example}"</div>
          )}
          <div className="absolute bottom-5 text-[11px] text-emerald-700">{card.word} · {card.reference}</div>
        </div>
      </div>
    </div>
  )
}

function MarkButton({ onClick, bg, text, label, sub }: {
  onClick: () => void
  bg: string
  text: string
  label: string
  sub: string
}) {
  return (
    <button
      onClick={onClick}
      className={`${bg} ${text} rounded-2xl py-3 px-2 active:scale-95 transition-all`}
    >
      <div className="font-bold text-base">{label}</div>
      <div className="text-[10px] opacity-70 mt-0.5">{sub}</div>
    </button>
  )
}

function FlashResults({ marks, cards, onRetry }: {
  marks: Mark[]
  cards: SavedWord[]
  onRetry: () => void
}) {
  const easy = marks.filter(m => m === 'easy').length
  const good = marks.filter(m => m === 'good').length
  const again = marks.filter(m => m === 'again').length
  const againCards = cards.filter((_, i) => marks[i] === 'again')

  return (
    <main className="min-h-dvh max-w-md mx-auto px-5 pt-12 pb-10 flex flex-col">
      <div className="text-center mb-8">
        <div className="inline-block mb-3 animate-[pop_400ms_cubic-bezier(0.32,1.5,0.5,1)]">
          <Ona mood="cheering" size={140} priority />
        </div>
        <h1 className="text-2xl font-bold mb-1">한 바퀴 끝!</h1>
        <p className="text-sm text-zinc-500">{cards.length}장 모두 봤어요</p>
      </div>

      <div className="grid grid-cols-3 gap-2.5 mb-8">
        <Stat label="쉬움" value={String(easy)} accent="emerald" />
        <Stat label="보통" value={String(good)} accent="blue" />
        <Stat label="다시" value={String(again)} accent="rose" />
      </div>

      {againCards.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-3">
            다시 볼 단어 {againCards.length}개
          </h2>
          <div className="flex flex-col gap-2">
            {againCards.map(c => (
              <div key={c.word} className="bg-white border border-zinc-200 rounded-xl px-4 py-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold">{c.word}</span>
                  {c.pronunciation && (
                    <span className="text-xs text-zinc-400 font-mono">{c.pronunciation}</span>
                  )}
                </div>
                <p className="text-sm text-zinc-600 mt-0.5">{c.meaning}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="mt-auto flex flex-col gap-2.5">
        <button
          onClick={onRetry}
          className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-bold text-base transition-all"
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

function Stat({ label, value, accent }: { label: string; value: string; accent: 'emerald' | 'blue' | 'rose' }) {
  const cls = {
    emerald: 'bg-emerald-50 text-emerald-700',
    blue: 'bg-blue-50 text-blue-700',
    rose: 'bg-rose-50 text-rose-700',
  }[accent]
  return (
    <div className={`rounded-2xl ${cls} px-3 py-4 text-center`}>
      <div className="text-2xl font-bold tabular-nums">{value}</div>
      <div className="text-[10px] font-semibold tracking-wider uppercase mt-0.5 opacity-70">{label}</div>
    </div>
  )
}
