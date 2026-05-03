import { useEffect, useState } from 'react'

const KEY = 'progress:v1'
const EVENT = 'progress:change'

type Progress = {
  completionDates: string[] // YYYY-MM-DD (local), unique, sorted
  completedLessons: string[] // 'storyId/lessonNum', unique
}

function fmtDate(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function todayStr(): string {
  return fmtDate(new Date())
}

function read(): Progress {
  if (typeof window === 'undefined') return { completionDates: [], completedLessons: [] }
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { completionDates: [], completedLessons: [] }
    const data = JSON.parse(raw)
    return {
      completionDates: Array.isArray(data?.completionDates) ? data.completionDates : [],
      completedLessons: Array.isArray(data?.completedLessons) ? data.completedLessons : [],
    }
  } catch {
    return { completionDates: [], completedLessons: [] }
  }
}

function write(p: Progress) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(KEY, JSON.stringify(p))
    window.dispatchEvent(new CustomEvent(EVENT))
  } catch {}
}

export function markLessonComplete(storyId: string, lessonNum: number) {
  const p = read()
  const today = todayStr()
  const lessonId = `${storyId}/${lessonNum}`
  let changed = false
  if (!p.completionDates.includes(today)) {
    p.completionDates.push(today)
    p.completionDates.sort()
    changed = true
  }
  if (!p.completedLessons.includes(lessonId)) {
    p.completedLessons.push(lessonId)
    changed = true
  }
  if (changed) write(p)
}

export function isLessonCompleted(storyId: string, lessonNum: number): boolean {
  return read().completedLessons.includes(`${storyId}/${lessonNum}`)
}

export function getCompletedLessons(): Set<string> {
  return new Set(read().completedLessons)
}

/**
 * Consecutive days ending at today (if completed today) or yesterday
 * (grace until day rolls over). 0 if no completion in last 2 days.
 */
export function getStreak(): number {
  const p = read()
  if (p.completionDates.length === 0) return 0
  const set = new Set(p.completionDates)

  const cursor = new Date()
  cursor.setHours(0, 0, 0, 0)

  if (!set.has(fmtDate(cursor))) {
    cursor.setDate(cursor.getDate() - 1)
    if (!set.has(fmtDate(cursor))) return 0
  }

  let count = 0
  while (set.has(fmtDate(cursor))) {
    count++
    cursor.setDate(cursor.getDate() - 1)
  }
  return count
}

export function getCompletionDates(): Set<string> {
  return new Set(read().completionDates)
}

export function getThisWeek(): {
  date: Date
  iso: string
  label: string
  isToday: boolean
  isPast: boolean
  isFuture: boolean
}[] {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const dow = today.getDay()
  const offsetToMonday = dow === 0 ? -6 : 1 - dow
  const monday = new Date(today)
  monday.setDate(today.getDate() + offsetToMonday)

  const labels = ['월', '화', '수', '목', '금', '토', '일']
  const todayIso = fmtDate(today)
  const out = []
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    const iso = fmtDate(d)
    out.push({
      date: d,
      iso,
      label: labels[i],
      isToday: iso === todayIso,
      isPast: iso < todayIso,
      isFuture: iso > todayIso,
    })
  }
  return out
}

export function useProgress() {
  const [, setVer] = useState(0)
  useEffect(() => {
    const refresh = () => setVer(v => v + 1)
    window.addEventListener(EVENT, refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener(EVENT, refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])

  const dates = getCompletionDates()
  const completedLessons = getCompletedLessons()
  return {
    streak: getStreak(),
    dates,
    completedToday: dates.has(todayStr()),
    completedLessons,
    isLessonDone: (storyId: string, lessonNum: number) => completedLessons.has(`${storyId}/${lessonNum}`),
    week: getThisWeek(),
  }
}
