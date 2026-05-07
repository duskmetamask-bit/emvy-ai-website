'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

const packages = [
  {
    name: 'Free 15-min call',
    price: 'Free',
    tagline: 'Fit check before anything paid.',
    description: 'A short call with Jake to understand the main bottleneck and decide if an audit is useful.',
    includes: ['Direct conversation', 'No obligation', 'Clear next step', 'Honest no if AI is not a fit'],
  },
  {
    name: 'AI Audit',
    price: '$1,500',
    tagline: 'The roadmap before the build.',
    description: 'A practical review of your calls, admin, quotes and follow-up. You keep the roadmap whether EMVY builds it or not.',
    includes: ['Workflow review', 'Pain point ranking', 'Opportunity map', '30/60/90 day roadmap'],
    highlight: true,
  },
  {
    name: 'Build',
    price: '$3,000-$5,000',
    tagline: 'Highest-impact workflow built properly.',
    description: 'After the audit, EMVY builds the system that will make the biggest practical difference first.',
    includes: ['Custom implementation', 'Tool integration', 'Testing and handover', 'Launch support'],
  },
  {
    name: 'Ongoing Support',
    price: '$1,500/mo',
    tagline: 'Keep improving without starting over.',
    description: 'Monthly monitoring, fixes, improvements and new workflow work as the business evolves.',
    includes: ['Monthly improvements', 'Priority support', 'System monitoring', 'Quarterly review'],
  },
]

const faqs = [
  ['Why publish pricing?', 'Because most agencies hide it and SMBs waste time on calls they should never have booked. EMVY lets you self-qualify up front.'],
  ['Do I need the audit first?', 'Yes for paid build work. The audit makes sure the build is useful, scoped and based on your actual workflow.'],
  ['Can I keep the audit roadmap?', 'Yes. The roadmap is yours to keep even if you choose to implement it somewhere else.'],
  ['What if AI is not right for us?', 'You will be told directly. Sometimes the answer is process cleanup, better data or a human hire before AI.'],
  ['Who is this for?', 'Owner-led SMBs globally, starting Perth and Australia, with missed calls, admin overload, quote follow-up issues or lead leakage.'],
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="min-h-screen bg-[#08090a] text-white">
      <header className="border-b border-white/10 bg-[#08090a]/80 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="flex items-center gap-3" aria-label="EMVY home">
            <EmvyWordmark size={36} />
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/about" className="hover:text-white">About</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </nav>
          <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact">Book free call</a>
        </div>
      </header>

      <section className="px-6 py-24 text-center">
        <p className="section-kicker">Transparent pricing</p>
        <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[.95] tracking-[-0.06em] md:text-7xl">Know the number before the call.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">Free call, $1,500 audit, $3,000-$5,000 build, $1,500/month retainer. No hidden quote maze.</p>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`pricing-panel ${pkg.highlight ? 'featured' : ''}`}>
              {pkg.highlight && <div className="mb-4 inline-flex rounded-full bg-[#6c63ff]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-violet-200">Start here</div>}
              <h2 className="text-xl font-bold">{pkg.name}</h2>
              <div className="mt-3 text-3xl font-black">{pkg.price}</div>
              <p className="mt-2 text-sm text-zinc-500">{pkg.tagline}</p>
              <p className="mt-5 min-h-[100px] text-sm leading-7 text-zinc-400">{pkg.description}</p>
              <ul className="mt-6 space-y-3">
                {pkg.includes.map((item) => <li key={item} className="flex gap-3 text-sm text-zinc-300"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#6c63ff]" />{item}</li>)}
              </ul>
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className={`mt-8 w-full ${pkg.highlight ? 'btn-primary' : 'btn-secondary'}`}>Book free call</a>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 text-center md:p-12">
          <p className="section-kicker">Honest proof</p>
          <h2 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">No invented stats.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-zinc-400 leading-8">EMVY will publish case studies when client results are approved. Until then, the trust signals are transparent pricing, a roadmap you can keep, and a direct builder-led process.</p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-black tracking-[-0.04em]">Common questions</h2>
          <div className="space-y-3">
            {faqs.map(([q, a], i) => (
              <div key={q} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold">
                  {q}<span className="text-2xl text-zinc-500">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <p className="px-6 pb-6 text-sm leading-7 text-zinc-400">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <div><span className="font-bold text-white">EMVY</span> — AI Audit Agency</div>
          <div className="flex gap-5"><a href="/" className="hover:text-white">Home</a><a href="/contact" className="hover:text-white">Contact</a><a href={CAL_URL} className="hover:text-white">Book a call</a></div>
        </div>
      </footer>
    </main>
  )
}
