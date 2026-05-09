import { useId } from 'react'

type Tone = 'brand' | 'light'

type MarkProps = {
  size?: number
  tone?: Tone
  reversed?: boolean
}

export function EmvyMark({ size = 44, tone = 'brand', reversed = false }: MarkProps) {
  const uid = useId().replace(/:/g, '')
  const gradientId = `emvy-mark-gradient-${uid}`
  const edgeId = `emvy-mark-edge-${uid}`
  const fill = reversed || tone === 'light' ? '#ffffff' : `url(#${gradientId})`
  const edge = reversed || tone === 'light' ? 'rgba(255,255,255,0.72)' : `url(#${edgeId})`

  return (
    <svg width={size} height={size} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="90" y1="78" x2="306" y2="322" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a08fff" />
          <stop offset="45%" stopColor="#7c6fff" />
          <stop offset="100%" stopColor="#5a52d5" />
        </linearGradient>
        <linearGradient id={edgeId} x1="110" y1="92" x2="292" y2="306" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c4b8ff" />
          <stop offset="100%" stopColor="#6c5eee" />
        </linearGradient>
      </defs>

      {/* Transparent three-band EMVY E mark. No badge, no dots, no enclosing tile. */}
      <path d="M92 92H314L266 140H92V92Z" fill={fill} />
      <path d="M266 140L314 92H342L294 140H266Z" fill={edge} opacity="0.92" />
      <path d="M92 92H150L116 140H92V92Z" fill="rgba(255,255,255,0.18)" />

      <path d="M92 176H262L214 224H92V176Z" fill={fill} />
      <path d="M214 224L262 176H290L242 224H214Z" fill={edge} opacity="0.92" />
      <path d="M92 176H146L112 224H92V176Z" fill="rgba(255,255,255,0.14)" />

      <path d="M92 260H314L266 308H92V260Z" fill={fill} />
      <path d="M266 308L314 260H342L294 308H266Z" fill={edge} opacity="0.92" />
      <path d="M92 260H150L116 308H92V260Z" fill="rgba(255,255,255,0.18)" />
    </svg>
  )
}

export function EmvyWordmark({ size = 44, tone = 'brand' }: { size?: number; tone?: Tone }) {
  const reversed = tone === 'light'
  return (
    <div className="inline-flex items-center gap-3">
      <EmvyMark size={size} tone={tone} reversed={reversed} />
      <div className="text-[1.18rem] font-black leading-none tracking-[-0.065em] text-white">EMVY</div>
    </div>
  )
}

export function EmvyMonogram({ size = 44, tone = 'brand' }: { size?: number; tone?: Tone }) {
  const reversed = tone === 'light'
  return (
    <div
      className="inline-flex items-center justify-center text-white"
      style={{ width: size * 1.45, height: size * 1.45 }}
      aria-hidden="true"
    >
      <span className="font-black tracking-[-0.1em]" style={{ fontSize: size * 0.55, lineHeight: 1, color: reversed ? '#ffffff' : '#f4f4f5' }}>
        EM
      </span>
    </div>
  )
}

export const EmvyLogo = EmvyMark
