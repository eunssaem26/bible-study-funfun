import { useState, useMemo, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getLesson, type WordDef } from '../content/lessons'
import WordPopup from '../components/WordPopup'
import Ona from '../components/Ona'
import { speak, isSpeechUnlocked } from '../lib/tts'
import { useVocab } from '../lib/vocab'

type Phase = 'reading' | 'quiz'

export default function Lesson() {
  const { storyId, lessonNum } = useParams()
  const navigate = useNavigate()
  const lesson = getLesson(storyId!, lessonNum!)

  const { has, save } = useVocab()
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('reading')
  const [activeWord, setActiveWord] = useState<WordDef | null>(null)
  const [sessionSavedWords, setSessionSavedWords] = useState<WordDef[]>([])
  const [showKorean, setShowKorean] = useState(false)

  const [quizIdx, setQuizIdx] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<number[]>([])
  const [picked, setPicked] = useState<number | null>(null)

  if (!lesson) {
    return (
      <main className="min-h-dvh flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-zinc-500 mb-4">레슨을 찾을 수 없어요</p>
          <Link to="/" className="text-blue-600 font-semibold">홈으로</Link>
        </div>
      </main>
    )
  }

  const total = lesson.sentences.length
  const progress = phase === 'reading'
    ? (index / total) * 0.7
    : 0.7 + (quizIdx / lesson.quiz.length) * 0.3

  const sentence = lesson.sentences[index]
  const source = lesson.source

  const speakSentence = (text: string) => speak(text, { rate: 0.92 })

  const handleNext = () => {
    if (index < total - 1) {
      setIndex(index + 1)
    } else {
      setPhase('quiz')
    }
  }

  const handlePrev = () => {
    if (phase === 'quiz') {
      setPhase('reading')
      setPicked(null)
      return
    }
    if (index > 0) setIndex(index - 1)
  }

  const canGoBack = phase === 'quiz' || index > 0

  const handleQuizPick = (i: number) => {
    if (picked !== null) return
    setPicked(i)
  }

  const handleQuizNext = () => {
    const next = [...quizAnswers, picked!]
    setQuizAnswers(next)
    setPicked(null)
    if (quizIdx < lesson.quiz.length - 1) {
      setQuizIdx(quizIdx + 1)
    } else {
      const correct = next.filter((a, i) => a === lesson.quiz[i].correctIndex).length
      sessionStorage.setItem('lesson:result', JSON.stringify({
        savedWords: sessionSavedWords,
        correct,
        total: lesson.quiz.length,
      }))
      navigate(`/complete/${lesson.storyId}/${lesson.lessonNum}`)
    }
  }

  const handleSaveWord = (w: WordDef) => {
    const added = save(
      { word: w.word, meaning: w.meaning, pronunciation: w.pronunciation, example: w.example },
      { storyId: lesson.storyId, lessonNum: lesson.lessonNum, reference: sentence.reference }
    )
    if (added) {
      setSessionSavedWords(prev => [...prev, w])
    }
  }

  return (
    <main className="min-h-dvh flex flex-col max-w-md mx-auto">
      {/* Top bar */}
      <header className="sticky top-0 bg-white/80 backdrop-blur z-10 px-4 pt-4 pb-3 border-b border-zinc-100">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="w-9 h-9 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-500 text-lg"
            aria-label="닫기"
          >
            ✕
          </button>
          <div className="flex-1 h-2 rounded-full bg-zinc-100 overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${Math.max(progress * 100, 3)}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-zinc-500 tabular-nums w-10 text-right">
            {phase === 'reading' ? `${index + 1}/${total}` : `퀴즈`}
          </span>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 px-5 py-6">
        {phase === 'reading' && (
          <ReadingView
            english={sentence.english}
            words={sentence.words}
            korean={sentence.korean}
            reference={sentence.reference}
            showKorean={showKorean}
            onToggleKorean={() => setShowKorean(!showKorean)}
            onWordTap={setActiveWord}
            onSpeak={() => speakSentence(sentence.english)}
            sourceLabel={source.label}
            sourceUrl={source.url}
          />
        )}

        {phase === 'quiz' && (
          <QuizView
            question={lesson.quiz[quizIdx]}
            picked={picked}
            onPick={handleQuizPick}
          />
        )}
      </div>

      {/* Bottom action */}
      <footer className="sticky bottom-0 bg-gradient-to-t from-white via-white to-white/0 px-5 pt-6 pb-6">
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={!canGoBack}
            aria-label="이전"
            className="shrink-0 w-14 py-4 rounded-2xl bg-zinc-100 hover:bg-zinc-200 disabled:opacity-40 disabled:hover:bg-zinc-100 active:scale-[0.97] text-zinc-700 font-bold text-base transition-all flex items-center justify-center"
          >
            ←
          </button>

          {phase === 'reading' && (
            <button
              onClick={handleNext}
              className="flex-1 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-base transition-all shadow-sm"
            >
              {index < total - 1 ? '다음' : '퀴즈 시작'}
            </button>
          )}

          {phase === 'quiz' && (
            <button
              onClick={handleQuizNext}
              disabled={picked === null}
              className="flex-1 py-4 rounded-2xl bg-blue-600 disabled:bg-zinc-200 disabled:text-zinc-400 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-base transition-all shadow-sm"
            >
              {quizIdx < lesson.quiz.length - 1 ? '다음 문제' : '결과 보기'}
            </button>
          )}
        </div>
      </footer>

      <WordPopup
        word={activeWord}
        onClose={() => setActiveWord(null)}
        onSave={handleSaveWord}
        saved={activeWord ? has(activeWord.word) : false}
      />
    </main>
  )
}

function ReadingView({
  english,
  words,
  korean,
  reference,
  showKorean,
  onToggleKorean,
  onWordTap,
  onSpeak,
  sourceLabel,
  sourceUrl,
}: {
  english: string
  words: WordDef[]
  korean: string
  reference: string
  showKorean: boolean
  onToggleKorean: () => void
  onWordTap: (w: WordDef) => void
  onSpeak: () => void
  sourceLabel: string
  sourceUrl: string
}) {
  const wordMap = useMemo(() => {
    const map = new Map<string, WordDef>()
    words.forEach(w => map.set(w.word.toLowerCase(), w))
    return map
  }, [words])

  // Auto-play TTS when the displayed text changes. Skip if speech hasn't been
  // unlocked yet — Android Chrome blocks autoplay until the first user gesture,
  // and a silently-failing autoplay would suppress the manual 🔊 tap too.
  useEffect(() => {
    if (!isSpeechUnlocked()) return
    const t = setTimeout(() => onSpeak(), 100)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [english])

  const tokens = english.split(/(\s+)/)

  return (
    <div className="flex flex-col gap-7">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
          {reference}
        </span>
        <button
          onClick={onSpeak}
          className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 active:scale-95 flex items-center justify-center text-zinc-700 transition-all"
          aria-label="다시 듣기"
        >
          🔊
        </button>
      </div>

      <p className="text-2xl font-semibold leading-[1.55] tracking-tight">
        {tokens.map((tok, i) => {
          if (/^\s+$/.test(tok)) return <span key={i}>{tok}</span>
          const cleaned = tok.replace(/[.,;:!?"']/g, '').toLowerCase()
          const def = wordMap.get(cleaned)
          if (def) {
            return (
              <button
                key={i}
                onClick={() => onWordTap(def)}
                className="relative inline -mx-0.5 px-0.5 rounded-md hover:bg-blue-50 active:bg-blue-100 transition-colors"
              >
                <span className="relative">
                  {tok}
                  <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 border-b-2 border-dotted border-blue-400" />
                </span>
              </button>
            )
          }
          return <span key={i}>{tok}</span>
        })}
      </p>

      {showKorean && (
        <div className="rounded-2xl bg-sky-50 px-5 py-4 border border-sky-100 animate-[fadeSlide_180ms_ease-out]">
          <div className="text-[10px] font-semibold tracking-wider text-sky-600 uppercase mb-1.5">
            한국어 의역
          </div>
          <p className="text-base text-zinc-700 leading-relaxed">
            {korean}
          </p>
        </div>
      )}

      <button
        onClick={onToggleKorean}
        className="self-start inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-sky-100 hover:bg-sky-200 active:scale-[0.97] text-sky-700 font-semibold text-sm transition-all"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="none"
          className={`transition-transform duration-200 ${showKorean ? 'rotate-180' : ''}`}
          aria-hidden
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {showKorean ? '한국어 숨기기' : '한국어 보기'}
      </button>

      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] text-zinc-400 hover:text-zinc-600 self-start"
      >
        📖 출처: {sourceLabel} →
      </a>

      <div className="flex justify-end pt-2 -mb-2">
        <Ona mood="reading" size={56} className="opacity-95" />
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(-4px) }
          to { opacity: 1; transform: translateY(0) }
        }
      `}</style>
    </div>
  )
}

function QuizView({
  question,
  picked,
  onPick,
}: {
  question: { question: string; options: string[]; correctIndex: number; explanation?: string }
  picked: number | null
  onPick: (i: number) => void
}) {
  const isCorrect = picked === question.correctIndex
  const showFeedback = picked !== null

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start gap-3">
        <Ona mood="thinking" size={56} className="shrink-0 mt-0.5" />
        <div>
          <span className="text-[11px] font-semibold tracking-wider text-blue-600 uppercase">
            이해도 체크
          </span>
          <h2 className="text-xl font-bold leading-snug mt-1.5">
            {question.question}
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        {question.options.map((opt, i) => {
          const correct = i === question.correctIndex
          const chosen = picked === i
          let cls = 'border-zinc-200 bg-white hover:border-zinc-300'
          if (showFeedback && correct) cls = 'border-emerald-500 bg-emerald-50'
          else if (showFeedback && chosen && !correct) cls = 'border-rose-500 bg-rose-50'
          else if (showFeedback) cls = 'border-zinc-200 bg-white opacity-50'
          return (
            <button
              key={i}
              onClick={() => onPick(i)}
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

      {showFeedback && question.explanation && (
        <div
          className={`flex items-start gap-3 rounded-2xl px-5 py-4 text-sm leading-relaxed ${
            isCorrect
              ? 'bg-emerald-50 text-emerald-800'
              : 'bg-rose-50 text-rose-800'
          }`}
        >
          <Ona
            mood={isCorrect ? 'cheering' : 'encouraging'}
            size={56}
            className="shrink-0 -mt-1"
          />
          <div>
            <div className="font-semibold mb-1">
              {isCorrect ? '정답이에요!' : '아쉽네요 — 같이 다시 봐!'}
            </div>
            {question.explanation}
          </div>
        </div>
      )}
    </div>
  )
}
