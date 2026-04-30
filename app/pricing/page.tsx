'use client'

import { useState } from 'react'

const packages = [
  {
    name: 'AI Audit',
    price: '$1,500',
    tagline: 'The foundation. Know where you stand.',
    description: 'A structured deep-dive into your business operations. We identify exactly where AI can create leverage — and map a prioritised roadmap to get there.',
    duration: 'Delivered in 5–7 days',
    includes: [
      'Full workflow audit (up to 8 workflows)',
      'AI opportunity map with effort/reward scoring',
      'Prioritised action roadmap (30/60/90 day)',
      '2 × 30-min debrief calls',
      'Written report + video walkthrough',
      '30-day email support for questions',
    ],
    cta: 'Book Free Discovery Call',
    href: 'https://emvy-booking.vercel.app',
    highlight: false,
  },
  {
    name: 'AI Setup + Build',
    price: '$3,000–$5,000',
    tagline: 'We build it. You see results fast.',
    description: 'After your audit, we build the highest-priority AI agents and automations identified. Designed, deployed, and handed over ready to use.',
    duration: 'Delivered in 2–3 weeks',
    includes: [
      'Everything in AI Audit',
      'Build of top 2–3 AI automations',
      'Full deployment + configuration',
      'Standard operating procedures',
      '1-week post-launch support',
      '30-day guarantee — we fix anything that breaks',
    ],
    cta: 'Start With Audit',
    href: 'https://emvy-booking.vercel.app',
    highlight: true,
  },
  {
    name: 'Monthly Retainer',
    price: '$1,500/mo',
    tagline: 'Keep improving. Stay ahead.',
    description: 'Ongoing management, optimisation, and new builds as your business evolves. We treat your AI infrastructure like our own.',
    duration: 'Month-to-month',
    includes: [
      'Monthly strategy check-in call',
      'New automation builds as needed',
      'Existing system optimisation',
      'Priority support (response within 4 hrs)',
      'Access to new AI tools + techniques first',
      'Cancel anytime — no lock-in',
    ],
    cta: 'Start With Audit',
    href: 'https://emvy-booking.vercel.app',
    highlight: false,
  },
]

const faqs = [
  {
    q: "Do I need an audit before a build?",
    a: "Yes. The audit ensures we build the right thing — not just a cool demo. It tells us exactly where your time and money is being wasted, so the build has measurable impact from day one.",
  },
  {
    q: "What if I'm not happy with the audit?",
    a: "If you don't feel like you got actionable value from the debrief, tell us. We'll work with you until you're satisfied or refund the audit fee — no games.",
  },
  {
    q: "How long does a build take?",
    a: "Most setups take 2–3 weeks. Complex businesses with multiple integrations can take 4–6 weeks. We'll give you a clear timeline after the audit.",
  },
  {
    q: "What does 'delivered' mean exactly?",
    a: "We don't hand over code and disappear. Delivered means: built, deployed, tested, and documented. You get SOPs so your team can use and maintain it without needing us.",
  },
  {
    q: "Can I cancel the retainer anytime?",
    a: "Yes. Monthly retainer is month-to-month. Cancel before the next billing cycle and we stop charging. No cancellation fees or lock-in clauses.",
  },
  {
    q: "What size business is this for?",
    a: "We work best with 1–20 person businesses doing $200K–$5M/year. That said, if you're a founder or operator drowning in manual work, reach out — we'll tell you straight if we're a fit.",
  },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <header className="border-b border-[#1e1e2e] py-5 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <a href="https://ai-agent-playbook-landing.vercel.app" className="text-xl font-bold text-white tracking-tight">EMVY</a>
            <span className="text-xs text-[#71717a] ml-2">AI Audit Agency</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#71717a]">
            <a href="https://emvy-booking.vercel.app" className="hover:text-white transition-colors">Book a Call</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="px-6 py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-[#6c63ff]/10 text-[#6c63ff] text-xs font-semibold mb-4">
              TRANSPARENT PRICING
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Simple Pricing.<br />
              <span className="text-[#6c63ff]">Real Results.</span>
            </h1>
            <p className="text-[#71717a] text-lg max-w-xl mx-auto">
              No retainers to sign, no hidden costs, no scope creep. You know exactly what you're paying for and what you'll get.
            </p>
          </div>
        </section>

        {/* Packages */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-8 flex flex-col ${
                    pkg.highlight
                      ? 'bg-[#111118] border-2 border-[#6c63ff]'
                      : 'bg-[#111118] border border-[#1e1e2e]'
                  }`}
                >
                  {pkg.highlight && (
                    <div className="inline-block px-3 py-1 rounded-full bg-[#6c63ff]/20 text-[#6c63ff] text-xs font-semibold mb-4 self-start">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="mb-1">
                    <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                    <p className="text-xs text-[#3f3f46] mt-0.5">{pkg.tagline}</p>
                  </div>
                  <div className="mb-5">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    {pkg.price.includes('/') && (
                      <span className="text-[#71717a] text-sm ml-1">month</span>
                    )}
                  </div>
                  <p className="text-[#71717a] text-sm mb-6 leading-relaxed">{pkg.description}</p>
                  <div className="text-xs text-[#3f3f46] mb-6">{pkg.duration}</div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#a1a1aa]">
                        <span className="text-[#6c63ff] mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={pkg.href}
                    className={`block text-center py-3.5 rounded-lg font-semibold text-sm transition-colors ${
                      pkg.highlight
                        ? 'bg-[#6c63ff] hover:bg-[#5a52d5] text-white'
                        : 'bg-[#1e1e2e] hover:bg-[#2e2e3e] text-white'
                    }`}
                  >
                    {pkg.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof strip */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-10 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-[#6c63ff] mb-1">20+</p>
                <p className="text-sm text-[#71717a]">AI automations built and deployed for client businesses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#6c63ff] mb-1">5–15 hrs</p>
                <p className="text-sm text-[#71717a]">Saved per week on average per client after setup</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#6c63ff] mb-1">48 hrs</p>
                <p className="text-sm text-[#71717a]">Average time to first meaningful deliverable after audit</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              Common Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-[#1e1e2e] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#111118] transition-colors"
                  >
                    <span className="font-medium text-white text-sm">{faq.q}</span>
                    <span className={`text-[#71717a] text-lg ml-4 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-[#71717a] text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-b from-[#6c63ff]/10 to-transparent border border-[#1e1e2e] rounded-2xl p-12">
            <h2 className="text-2xl font-bold text-white mb-3">
              Not sure where to start?
            </h2>
            <p className="text-[#71717a] mb-8">
              Book a free 15-minute discovery call. We'll tell you exactly what you need — even if it's nothing from us.
            </p>
            <a
              href="https://emvy-booking.vercel.app"
              className="inline-block px-8 py-4 bg-[#6c63ff] hover:bg-[#5a52d5] text-white font-semibold rounded-lg transition-colors"
            >
              Book Free Discovery Call →
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1e1e2e] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#71717a] text-sm">
            <span className="font-bold text-white">EMVY</span> — AI Audit Agency
          </div>
          <div className="flex gap-6 text-sm text-[#71717a]">
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="https://emvy-booking.vercel.app" className="hover:text-white transition-colors">Book a Call</a>
          </div>
          <div className="text-[#3f3f46] text-xs">Shut Up and Build</div>
        </div>
      </footer>
    </div>
  )
}
