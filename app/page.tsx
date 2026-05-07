'use client'

import { useState } from 'react'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

const services = [
  {
    title: 'AI Agents',
    desc: 'Custom AI agents that handle calls, messages and admin — around the clock, without holidays.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    title: 'Automations',
    desc: 'End-to-end automations that eliminate busywork — quotes, follow-ups, data movement, approvals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
        <path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07"/>
      </svg>
    ),
  },
  {
    title: 'Ops Systems',
    desc: 'Connected systems and workflows that bring clarity and control to how your business runs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    title: 'Integrations',
    desc: 'Seamless integrations across the tools you already use — no rip-and-replace required.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8"/>
        <line x1="4" y1="20" x2="21" y2="3"/>
        <polyline points="21 16 21 21 16 21"/>
        <line x1="15" y1="15" x2="21" y2="21"/>
        <line x1="4" y1="4" x2="9" y2="9"/>
      </svg>
    ),
  },
]

const process = [
  {
    step: '01',
    title: 'Discover',
    desc: 'Short call to understand where time, revenue and focus are leaking in your business.',
  },
  {
    step: '02',
    title: 'Audit',
    desc: 'We map your real workflow — not the ideal version. Then we find the 2-3 things that move the needle most.',
  },
  {
    step: '03',
    title: 'Build',
    desc: 'We construct the system properly — integrate, test, and deploy — then hand it over with your team trained.',
  },
  {
    step: '04',
    title: 'Support',
    desc: 'We monitor, fix, and improve it month by month. No lock-in. Walk away any time.',
  },
]

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#08090a] text-white">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090a]/80 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="flex items-center gap-3" aria-label="EMVY home">
            <img
              src="/assets/emvyai-logo-lockup-transparent.webp"
              alt="EMVY"
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#how-we-work" className="hover:text-white transition-colors">How We Work</a>
            <a href="/pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact">
              Book free call
            </a>
            <button
              className="flex items-center justify-center p-2 text-zinc-400 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 md:hidden">
            <a href="#services" className="text-sm text-zinc-400 hover:text-white" onClick={() => setMobileOpen(false)}>Services</a>
            <a href="#how-we-work" className="text-sm text-zinc-400 hover:text-white" onClick={() => setMobileOpen(false)}>How We Work</a>
            <a href="/pricing" className="text-sm text-zinc-400 hover:text-white" onClick={() => setMobileOpen(false)}>Pricing</a>
            <a href="/about" className="text-sm text-zinc-400 hover:text-white" onClick={() => setMobileOpen(false)}>About</a>
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact w-fit mt-2">Book free call</a>
          </nav>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">

            <p className="section-kicker">Perth-based · SMB specialists · Transparent pricing</p>

            <h1 className="text-5xl font-black leading-[.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              We find where your<br className="hidden md:block" />
              business{' '}
              <span className="text-[#6c63ff]">bleeds time</span><br className="hidden md:block" />
              and money.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              EMVY is an AI consultancy that audits your workflows, identifies the highest-impact opportunities, and builds the systems that actually run — then stays to maintain them.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book free 15-min call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/pricing" className="btn-secondary">
                View pricing
              </a>
            </div>
          </div>

          {/* Honest positioning */}
          <div className="mt-14 flex flex-wrap gap-6 border-t border-white/10 pt-8">
            {[
              { head: 'Free call first', sub: 'Know if it makes sense before you pay anything' },
              { head: 'Audit before build', sub: 'We find what is worth building, not just what is possible' },
              { head: 'You keep the roadmap', sub: 'Whether we build it or not, the audit roadmap is yours' },
            ].map((p) => (
              <div key={p.head} className="max-w-xs">
                <div className="text-base font-bold text-white">{p.head}</div>
                <div className="mt-1 text-sm text-zinc-500">{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section id="services" className="border-t border-white/5 bg-white/[0.02] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">What we build</p>
          <h2 className="max-w-2xl text-4xl font-black tracking-[-0.04em] md:text-5xl lg:text-6xl">
            Practical AI systems<br className="hidden md:block" /> for how your business works.
          </h2>
          <p className="mt-5 max-w-xl text-zinc-400 leading-7">
            We don't just automate tasks. We build systems that think, act and scale with you.
          </p>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:border-[#6c63ff]/40 hover:bg-white/[0.06]">
                <div className="mb-5 text-[#6c63ff]" style={{ width: 40, height: 40 }}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section id="how-we-work" className="border-t border-white/5 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">How we work</p>
          <h2 className="max-w-2xl text-4xl font-black tracking-[-0.04em] md:text-5xl">
            Audit first.<br className="hidden md:block" /> Build second.<br className="hidden md:block" /> Support always.
          </h2>
          <p className="mt-5 max-w-xl text-zinc-400 leading-7">
            You should know what is happening, why it matters, and what you get at every step.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step}>
                <div className="text-5xl font-black text-white/10">{p.step}</div>
                <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/5 px-6 py-24 text-center md:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Ready to find the leak?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-400">
            Book the free 15-minute call. If AI can help, you will know where to start. If it cannot, you will know that too.
          </p>
          <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
            Book free 15-min call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
          <div>
            <a href="/" className="flex items-center gap-3" aria-label="EMVY home">
              <img
                src="/assets/emvyai-logo-lockup-transparent.webp"
                alt="EMVY"
                className="h-7 w-auto object-contain"
              />
            </a>
            <p className="mt-3 max-w-xs text-sm text-zinc-500">
              AI consultancy for Australian SMBs. Practical systems. Real results.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3">
            <div>
              <div className="mb-3 font-bold uppercase tracking-wider text-zinc-500">Services</div>
              <div className="flex flex-col gap-2">
                <a href="#services" className="text-zinc-400 hover:text-white">AI Agents</a>
                <a href="#services" className="text-zinc-400 hover:text-white">Automations</a>
                <a href="#services" className="text-zinc-400 hover:text-white">Ops Systems</a>
                <a href="#services" className="text-zinc-400 hover:text-white">Integrations</a>
              </div>
            </div>
            <div>
              <div className="mb-3 font-bold uppercase tracking-wider text-zinc-500">Company</div>
              <div className="flex flex-col gap-2">
                <a href="/about" className="text-zinc-400 hover:text-white">About</a>
                <a href="/pricing" className="text-zinc-400 hover:text-white">Pricing</a>
                <a href="/contact" className="text-zinc-400 hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <div className="mb-3 font-bold uppercase tracking-wider text-zinc-500">Ready?</div>
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact w-fit">
                Book free call
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-600 md:flex-row">
          <div>© 2025 EMVY. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-zinc-400">Privacy</a>
            <a href="/terms" className="hover:text-zinc-400">Terms</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
