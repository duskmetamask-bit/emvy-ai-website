'use client'

import { useState } from 'react'

export default function PayPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email) return

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Failed to create checkout')

      // TODO: Wire up Stripe publishable key — this will redirect to Stripe Checkout
      // For now, show a placeholder since Stripe isn't configured yet
      alert('Stripe checkout coming soon. Email hello@emvy.ai to pay directly.')
    } catch {
      setError('Something went wrong. Email hello@emvy.ai to pay directly.')
    } finally {
      setLoading(false)
    }
  }

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
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16">
        {/* Product */}
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-[#6c63ff]/10 text-[#6c63ff] text-xs font-semibold mb-4">
            AI AUDIT
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Start With Your AI Audit
          </h1>
          <p className="text-[#71717a]">
            Full workflow audit, prioritised roadmap, 2 debrief calls. Everything you need to know where AI can create leverage in your business.
          </p>
        </div>

        {/* Order summary */}
        <div className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-8 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-white font-semibold text-lg">AI Audit</h2>
              <p className="text-[#71717a] text-sm mt-1">Delivered in 5–7 days</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">$1,500</p>
              <p className="text-[#71717a] text-xs">AUD inc. GST</p>
            </div>
          </div>

          <ul className="space-y-2.5 mb-6">
            {[
              'Full workflow audit (up to 8 workflows)',
              'AI opportunity map with effort/reward scoring',
              'Prioritised action roadmap (30/60/90 day)',
              '2 × 30-min debrief calls',
              'Written report + video walkthrough',
              '30-day email support for questions',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[#a1a1aa]">
                <span className="text-[#6c63ff]">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="border-t border-[#1e1e2e] pt-4 flex justify-between text-sm">
            <span className="text-white font-semibold">Total</span>
            <span className="text-white font-bold text-lg">$1,500 AUD</span>
          </div>
        </div>

        {/* Checkout form */}
        <div className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-8">
          <h3 className="text-white font-semibold mb-5">Your Details</h3>
          <form onSubmit={handleCheckout} className="space-y-4">
            <div>
              <label className="block text-sm text-[#71717a] mb-2">Full Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Alex Johnson"
                className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg px-4 py-3 text-white placeholder-[#3f3f46] focus:outline-none focus:border-[#6c63ff] transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-[#71717a] mb-2">Email Address *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="alex@company.com"
                className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg px-4 py-3 text-white placeholder-[#3f3f46] focus:outline-none focus:border-[#6c63ff] transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-[#71717a] mb-2">Company Name</label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Acme PTY LTD"
                className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg px-4 py-3 text-white placeholder-[#3f3f46] focus:outline-none focus:border-[#6c63ff] transition-colors text-sm"
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#6c63ff] hover:bg-[#5a52d5] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors mt-2"
            >
              {loading ? 'Redirecting to checkout...' : 'Pay $1,500 AUD →'}
            </button>
          </form>

          <div className="flex items-center justify-center gap-4 mt-6 text-xs text-[#3f3f46]">
            <span>🔒 Secure payment via Stripe</span>
            <span>·</span>
            <a href="mailto:hello@emvy.ai" className="hover:text-[#71717a] transition-colors">Need an invoice?</a>
          </div>
        </div>

        {/* Alternative */}
        <div className="text-center mt-8">
          <p className="text-[#71717a] text-sm">
            Prefer to pay directly?{' '}
            <a href="mailto:hello@emvy.ai?subject=AI Audit Payment Inquiry" className="text-[#6c63ff] hover:underline">
              Email us
            </a>{' '}
            and we'll send a payment link.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1e1e2e] py-8 px-6 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#71717a] text-sm"><span className="font-bold text-white">EMVY</span> — AI Audit Agency</div>
          <div className="text-[#3f3f46] text-xs">Shut Up and Build</div>
        </div>
      </footer>
    </div>
  )
}
