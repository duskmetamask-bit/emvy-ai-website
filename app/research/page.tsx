'use client'

import { useState } from 'react'

const RESEARCH_FIELDS = [
  { key: 'website', label: 'Company Website', placeholder: 'https://company.com.au', hint: 'Start here — gives you everything you need' },
  { key: 'linkedin', label: 'LinkedIn URL', placeholder: 'linkedin.com/company/...', hint: '' },
  { key: 'about', label: 'About / Description', placeholder: 'Paste whatever you found about them...', hint: '' },
  { key: 'industry', label: 'Industry', placeholder: 'e.g. Wellness studio, Law firm, E-commerce', hint: '' },
  { key: 'location', label: 'Location', placeholder: 'e.g. Perth WA, Melbourne', hint: '' },
  { key: 'size', label: 'Team Size', placeholder: 'e.g. 5 employees, 2 owners', hint: '' },
  { key: 'pain_points', label: 'Known Pain Points', placeholder: 'What they mentioned in their enquiry...', hint: '' },
]

const CALL_PREP = [
  { q: 'What does their day-to-day actually look like?', hint: 'Where does time go? What\'s the bottleneck?' },
  { q: 'Where have they tried AI before?', hint: 'What did they try? What went wrong?' },
  { q: 'What would they do with 10 extra hours per week?', hint: 'Gets at real motivation — not stated goals' },
  { q: 'What\'s the cost of the problem they\'re trying to solve?', hint: 'Lost revenue, time wasted, staff frustration?' },
  { q: 'What\'s their current tech stack?', hint: 'Are they on Xero, Calendly, Square, etc?' },
  { q: 'Who else is involved in this decision?', hint: 'Are they the decision maker?' },
  { q: 'What\'s the budget conversation look like?', hint: 'Have they thought about what this costs?' },
  { q: 'What happens if they do nothing?', hint: 'Understand the urgency — or lack of it' },
]

export default function ResearchPage() {
  const [fields, setFields] = useState<Record<string, string>>(
    Object.fromEntries(RESEARCH_FIELDS.map(f => [f.key, '']))
  )
  const [showPrep, setShowPrep] = useState(false)

  const update = (key: string, val: string) => setFields(prev => ({ ...prev, [key]: val }))

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <header className="border-b border-[#1e1e2e] py-5 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <a href="https://ai-agent-playbook-landing.vercel.app" className="text-xl font-bold text-white tracking-tight">EMVY</a>
            <span className="text-xs text-[#71717a] ml-2">Pre-Call Research</span>
          </div>
          <nav className="flex items-center gap-4 text-sm text-[#71717a]">
            <a href="/ops" className="hover:text-white transition-colors">Ops Hub</a>
            <a href="https://emvy-booking.vercel.app" className="hover:text-white transition-colors">Booking</a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Pre-Call Research</h1>
          <p className="text-[#71717a]">Fill in what you know before every discovery call. More context = better call.</p>
        </div>

        {/* Research fields */}
        <div className="space-y-5 mb-8">
          {RESEARCH_FIELDS.map(field => (
            <div key={field.key}>
              <label className="block text-sm font-medium text-white mb-1.5">
                {field.label}
                {field.hint && <span className="text-[#3f3f46] font-normal text-xs ml-2">({field.hint})</span>}
              </label>
              {field.key === 'about' ? (
                <textarea
                  value={fields[field.key]}
                  onChange={e => update(field.key, e.target.value)}
                  rows={3}
                  placeholder={field.placeholder}
                  className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg px-4 py-3 text-white placeholder-[#3f3f46] focus:outline-none focus:border-[#6c63ff] transition-colors text-sm resize-none"
                />
              ) : (
                <input
                  type="text"
                  value={fields[field.key]}
                  onChange={e => update(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg px-4 py-3 text-white placeholder-[#3f3f46] focus:outline-none focus:border-[#6c63ff] transition-colors text-sm"
                />
              )}
            </div>
          ))}
        </div>

        {/* Key insight */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-white mb-1.5">1-Sentence Summary of This Lead</label>
          <textarea
            value={fields['pain_points']}
            onChange={e => update('pain_points', e.target.value)}
            rows={2}
            placeholder="e.g. A 3-person wellness studio spending 6hrs/week on manual booking admin they'd rather eliminate..."
            className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg px-4 py-3 text-white placeholder-[#3f3f46] focus:outline-none focus:border-[#6c63ff] transition-colors text-sm resize-none"
          />
        </div>

        {/* Call prep */}
        <div className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-6">
          <button
            onClick={() => setShowPrep(p => !p)}
            className="w-full flex items-center justify-between mb-4"
          >
            <h2 className="text-white font-semibold">Discovery Call Questions</h2>
            <span className="text-[#6c63ff] text-sm">{showPrep ? 'Hide' : 'Show'}</span>
          </button>

          {showPrep && (
            <div className="space-y-4">
              {CALL_PREP.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#6c63ff] text-xs font-bold mt-0.5 w-4">{i + 1}.</span>
                  <div>
                    <p className="text-white text-sm font-medium">{item.q}</p>
                    <p className="text-[#3f3f46] text-xs mt-0.5">{item.hint}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Qualifying checklist */}
        <div className="mt-6 bg-[#111118] border border-[#1e1e2e] rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-4">Qualifying Checklist</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Has a real business (not just an idea)',
              'Decision maker or direct access to one',
              'Problem worth solving (time/money/revenue)',
              'Has budget awareness (not price shopping)',
              'Fit for our ICP (1-20 staff, service business)',
              'Available for follow-up / responsive',
            ].map((item, i) => (
              <label key={i} className="flex items-start gap-2.5 cursor-pointer group">
                <input type="checkbox" className="mt-0.5 accent-[#6c63ff]" />
                <span className="text-[#71717a] text-sm group-hover:text-white transition-colors">{item}</span>
              </label>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-[#1e1e2e] flex gap-3">
            <button className="px-4 py-2 bg-[#22c55e]/20 text-green-400 text-sm font-medium rounded-lg">Qualify — Book Audit</button>
            <button className="px-4 py-2 bg-[#ef4444]/20 text-red-400 text-sm font-medium rounded-lg">Disqualify</button>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex gap-4">
          <a href="/ops" className="px-5 py-2.5 bg-[#1e1e2e] hover:bg-[#2e2e3e] text-white text-sm font-medium rounded-lg transition-colors">
            ← Back to Ops
          </a>
        </div>
      </main>
    </div>
  )
}
