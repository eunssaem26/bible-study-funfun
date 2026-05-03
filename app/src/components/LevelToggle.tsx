import { LEVEL_LABELS, type Level } from '../content/lessons'

const LEVELS: Level[] = ['easy', 'standard']

type Props = {
  level: Level
  onChange: (l: Level) => void
  available: Level[]
  size?: 'sm' | 'md'
}

export default function LevelToggle({ level, onChange, available, size = 'md' }: Props) {
  const padX = size === 'sm' ? 'px-3' : 'px-4'
  const padY = size === 'sm' ? 'py-1' : 'py-1.5'
  const text = size === 'sm' ? 'text-xs' : 'text-sm'

  return (
    <div className="inline-flex rounded-full bg-zinc-100 p-0.5" role="tablist" aria-label="난이도">
      {LEVELS.map(lv => {
        const enabled = available.includes(lv)
        const active = level === lv
        return (
          <button
            key={lv}
            role="tab"
            aria-selected={active}
            disabled={!enabled}
            onClick={() => enabled && onChange(lv)}
            className={`${padX} ${padY} ${text} rounded-full font-semibold transition-all ${
              active
                ? 'bg-white text-zinc-900 shadow-sm'
                : enabled
                ? 'text-zinc-500 hover:text-zinc-700'
                : 'text-zinc-300 cursor-not-allowed'
            }`}
          >
            {LEVEL_LABELS[lv].kr}
          </button>
        )
      })}
    </div>
  )
}
