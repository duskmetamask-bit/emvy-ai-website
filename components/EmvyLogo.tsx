

type Tone = 'brand' | 'light'

type MarkProps = {
  size?: number
  tone?: Tone
  reversed?: boolean
}

export function EmvyMark({ size = 44, tone = 'brand', reversed = false }: MarkProps) {
  return (
    <img
      src="/assets/emvy-logo-nobg-trimmed.png"
      alt="EMVY"
      width={size * 2.6}
      height={size}
      style={{ objectFit: 'contain' }}
      aria-hidden="true"
    />
  )
}

export function EmvyWordmark({ size = 44, tone = 'brand' }: { size?: number; tone?: Tone }) {
  return (
    <div className="inline-flex items-center gap-3">
      <img
        src="/assets/emvy-logo-nobg-trimmed.png"
        alt="EMVY"
        width={size * 2.6}
        height={size}
        style={{ objectFit: 'contain' }}
        aria-hidden="true"
      />
      <div className="text-[1.18rem] font-black leading-none tracking-[-0.065em] text-white">EMVY</div>
    </div>
  )
}

export function EmvyMonogram({ size = 44, tone = 'brand' }: { size?: number; tone?: Tone }) {
  return (
    <div
      className="inline-flex items-center justify-center text-white"
      style={{ width: size * 1.45, height: size * 1.45 }}
      aria-hidden="true"
    >
      <span className="font-black tracking-[-0.1em]" style={{ fontSize: size * 0.55, lineHeight: 1, color: '#f4f4f5' }}>
        EM
      </span>
    </div>
  )
}

export const EmvyLogo = EmvyMark
