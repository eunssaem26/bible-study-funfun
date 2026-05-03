import { useEffect, useState } from 'react'

const KEY = 'vocab:v1'
const EVENT = 'vocab:change'

export type SavedWord = {
  word: string
  meaning: string
  pronunciation?: string
  example?: string
  storyId: string
  lessonNum: number
  reference: string
  savedAt: number
}

export type WordSource = {
  storyId: string
  lessonNum: number
  reference: string
}

export type WordInput = {
  word: string
  meaning: string
  pronunciation?: string
  example?: string
}

function read(): SavedWord[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const data = JSON.parse(raw)
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

function write(words: SavedWord[]) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(KEY, JSON.stringify(words))
    window.dispatchEvent(new CustomEvent(EVENT))
  } catch {}
}

const norm = (w: string) => w.toLowerCase().trim()

export function getSavedWords(): SavedWord[] {
  return read()
}

export function isWordSaved(word: string): boolean {
  const key = norm(word)
  return read().some(w => norm(w.word) === key)
}

/** Returns true if newly added, false if it was already saved. */
export function saveWord(input: WordInput, source: WordSource): boolean {
  const words = read()
  const key = norm(input.word)
  if (words.some(w => norm(w.word) === key)) return false
  words.push({
    word: input.word,
    meaning: input.meaning,
    pronunciation: input.pronunciation,
    example: input.example,
    storyId: source.storyId,
    lessonNum: source.lessonNum,
    reference: source.reference,
    savedAt: Date.now(),
  })
  write(words)
  return true
}

export function removeWord(word: string): void {
  const key = norm(word)
  write(read().filter(w => norm(w.word) !== key))
}

export function useVocab() {
  const [words, setWords] = useState<SavedWord[]>(() => read())

  useEffect(() => {
    const refresh = () => setWords(read())
    window.addEventListener(EVENT, refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener(EVENT, refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])

  return {
    words,
    save: (input: WordInput, source: WordSource) => saveWord(input, source),
    remove: (word: string) => removeWord(word),
    has: (word: string) => {
      const key = norm(word)
      return words.some(w => norm(w.word) === key)
    },
  }
}
