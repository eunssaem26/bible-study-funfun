import type { SavedWord } from './vocab'

export const MIN_WORDS = {
  quiz: 4,
  match: 4,
  flashcards: 1,
} as const

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const norm = (w: string) => w.toLowerCase().trim()

// ──────────────── Quiz ────────────────
export type QuizDirection = 'en2kr' | 'kr2en'

export type ReviewQuestion = {
  direction: QuizDirection
  prompt: string
  options: string[]
  correctIndex: number
  word: SavedWord
}

export function generateQuiz(words: SavedWord[], count = 8): ReviewQuestion[] {
  if (words.length < MIN_WORDS.quiz) return []
  const targets = shuffle(words).slice(0, Math.min(count, words.length))

  return targets.map(target => {
    const direction: QuizDirection = Math.random() < 0.5 ? 'en2kr' : 'kr2en'
    const others = words.filter(w => norm(w.word) !== norm(target.word))
    const distractors = shuffle(others).slice(0, 3)

    if (direction === 'en2kr') {
      const options = shuffle([target.meaning, ...distractors.map(d => d.meaning)])
      return {
        direction,
        prompt: target.word,
        options,
        correctIndex: options.indexOf(target.meaning),
        word: target,
      }
    } else {
      const options = shuffle([target.word, ...distractors.map(d => d.word)])
      return {
        direction,
        prompt: target.meaning,
        options,
        correctIndex: options.indexOf(target.word),
        word: target,
      }
    }
  })
}

// ──────────────── Match ────────────────
export type MatchCard = {
  id: string
  pairId: string
  side: 'en' | 'kr'
  text: string
  word: SavedWord
}

export function generateMatchCards(words: SavedWord[], pairCount = 6): MatchCard[] {
  if (words.length < MIN_WORDS.match) return []
  const pairs = shuffle(words).slice(0, Math.min(pairCount, words.length))
  const cards: MatchCard[] = []
  pairs.forEach(w => {
    const pairId = norm(w.word)
    cards.push({ id: `${pairId}-en`, pairId, side: 'en', text: w.word, word: w })
    cards.push({ id: `${pairId}-kr`, pairId, side: 'kr', text: w.meaning, word: w })
  })
  return shuffle(cards)
}

// ──────────────── Flashcards ────────────────
export function generateFlashcards(words: SavedWord[]): SavedWord[] {
  return shuffle(words)
}
