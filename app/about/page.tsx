'use client'

import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <header className="border-b border-[#1e1e2e] py-5 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3" aria-label="EMVY home">
            <EmvyWordmark size={36} />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#71717a]">
            <a href={CAL_URL} className="hover:text-white transition-colors">Book a Call</a>
            <a href="/pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-[#6c63ff]/10 text-[#6c63ff] text-xs font-semibold mb-4">
              WHO WE ARE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              We Fix the Gap Between<br />
              <span className="text-[#6c63ff]">AI Potential and AI Reality</span>
            </h1>
            <p className="text-[#71717a] text-lg leading-relaxed max-w-2xl mx-auto">
              Most businesses buy AI tools, get excited, use them for a week, then drift back to old habits. The tools aren't broken. The missing piece is specific workflows — designed for your business, deployed properly, and maintained.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">The Story</h2>
            <div className="space-y-5 text-[#a1a1aa] leading-relaxed">
              <p>EMVY started because we kept seeing the same pattern. Business owners spending money on AI subscriptions, watching tutorials, getting hyped — then not actually changing how they work.</p>
              <p>The problem was never the AI. It was that nobody had taken the time to understand how that specific business actually runs — where the time goes, where the friction is, what a successful automation actually looks like for them.</p>
              <p>So we built EMVY to be that step in between. The audit first. Understand the business deeply. Find the 2–3 things that actually move the needle. Build those. Deploy them properly. Hand over something that works.</p>
              <p>We're not an agency that throws code over the fence. We're a partner that makes sure AI actually lands in your business — not just in your head.</p>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">How We Work</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Audit First', desc: 'We map your workflows, find the gaps, and build a prioritised roadmap. No building until we know what to build.' },
                { step: '02', title: 'Build What Matters', desc: 'We build the top 2–3 automations — not a portfolio of demos. Things that actually save time or make money.' },
                { step: '03', title: 'Deploy Properly', desc: "Hand over fully deployed, tested systems with documentation. You shouldn't need us to run it." },
                { step: '04', title: 'Stay And Improve', desc: 'Monthly retainer for ongoing optimisation and new builds. Or walk away — no lock-in.' },
              ].map((item, i) => (
                <div key={i} className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#6c63ff]/30 mb-3">{item.step}</div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-[#71717a] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">What We Stand For</h2>
            <div className="space-y-6">
              {[
                { title: 'No fluff', desc: "We'll tell you when AI isn't the right answer. We won't sell you something just because we can." },
                { title: 'Specific over general', desc: "A wellness studio needs different automations than a law firm. We don't do generic advice." },
                { title: 'Deploy, don\'t demo', desc: "If it's not in production and working, it doesn't count. We measure success by what actually runs." },
                { title: 'Honest timelines', desc: "We'll tell you if something takes 2 weeks or 8. No sugar-coating to close a deal." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6c63ff] mt-2.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-[#71717a] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-b from-[#6c63ff]/10 to-transparent border border-[#1e1e2e] rounded-2xl p-12">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to see what's possible?</h2>
            <p className="text-[#71717a] mb-8">Book a free discovery call. 15 minutes. No pitch. We just look at your business and tell you what we see.</p>
            <a href={CAL_URL} className="inline-block px-8 py-4 bg-[#6c63ff] hover:bg-[#5a52d5] text-white font-semibold rounded-lg transition-colors">
              Book Free Discovery Call →
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1e1e2e] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#71717a] text-sm"><span className="font-bold text-white">EMVY</span> — AI Audit Agency</div>
          <div className="flex gap-6 text-sm text-[#71717a]">
            <a href="/pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href={CAL_URL} className="hover:text-white transition-colors">Book a Call</a>
          </div>
          <div className="text-[#3f3f46] text-xs">Shut Up and Build</div>
        </div>
      </footer>
    </div>
  )
}
