export type OnaMood =
  | 'reading'
  | 'greeting'
  | 'cheering'
  | 'thinking'
  | 'encouraging'
  | 'sleeping'

const SRC: Record<OnaMood, string> = {
  reading: '/characters/ona-v1.png',
  greeting: '/characters/ona-greeting.png',
  cheering: '/characters/ona-cheering.png',
  thinking: '/characters/ona-thinking.png',
  encouraging: '/characters/ona-encouraging.png',
  sleeping: '/characters/ona-sleeping.png',
}

const ALT: Record<OnaMood, string> = {
  reading: '책 읽는 오나',
  greeting: '인사하는 오나',
  cheering: '축하하는 오나',
  thinking: '생각하는 오나',
  encouraging: '응원하는 오나',
  sleeping: '잠자는 오나',
}

type Props = {
  mood?: OnaMood
  size?: number
  className?: string
  priority?: boolean
}

export default function Ona({ mood = 'reading', size = 80, className = '', priority = false }: Props) {
  return (
    <img
      src={SRC[mood]}
      alt={ALT[mood]}
      width={size}
      height={size}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      className={`select-none pointer-events-none object-contain ${className}`}
      style={{ width: size, height: size }}
      draggable={false}
    />
  )
}
