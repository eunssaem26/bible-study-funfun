import { useEffect, useState } from 'react'
import type { Level } from '../content/lessons'

const KEY = 'level:v1'
const EVENT = 'level:change'

const VALID: Level[] = ['easy', 'standard']

function read(): Level {
  if (typeof window === 'undefined') return 'easy'
  try {
    const v = localStorage.getItem(KEY)
    return VALID.includes(v as Level) ? (v as Level) : 'easy'
  } catch {
    return 'easy'
  }
}

function write(l: Level) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(KEY, l)
    window.dispatchEvent(new CustomEvent(EVENT))
  } catch {}
}

export function getLevel(): Level {
  return read()
}

export function setLevel(l: Level) {
  write(l)
}

export function useLevel(): [Level, (l: Level) => void] {
  const [level, setLevelState] = useState<Level>(() => read())

  useEffect(() => {
    const refresh = () => setLevelState(read())
    window.addEventListener(EVENT, refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener(EVENT, refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])

  const update = (l: Level) => {
    write(l)
    setLevelState(l)
  }

  return [level, update]
}
