'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
      setError('Something went wrong. Try emailing us directly at hello@emvy.ai')
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
            <a href="https://emvy-booking.vercel.app" className="hover:text-white transition-colors">Book a Call</a>
            <a href="/pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-[#6c63ff]/10 text-[#6c63ff] text-xs font-semibold mb-4">
              GET IN TOUCH
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Let's Talk<span className="text-[#6c63ff]">.</span>
            </h1>
            <p className="text-[#71717a] text-lg max-w-xl mx-auto">
              Questions, partnerships, or just want to see if we're a fit? Send us a message — we read every one.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact form */}
              <div>
                {status === 'success' ? (
                  <div className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-10 text-center">
                    <div className="text-4xl mb-4">✅</div>
                    <h2 className="text-xl font-bold text-white mb-2">Message sent.</h2>
                    <p className="text-[#71717a] text-sm">We'll get back to you within 1 business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-8 space-y-5">
                    <div>
                      <label className="block text-sm text-[#71717a] mb-2">Your Name *</label>
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
                      <label className="block text-sm text-[#71717a] mb-2">What's this about?</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg px-4 py-3 text-white placeholder-[#3f3f46] focus:outline-none focus:border-[#6c63ff] transition-colors text-sm"
                      >
                        <option value="">Select a topic</option>
                        <option value="discovery-call">Book a Discovery Call</option>
                        <option value="audit">AI Audit Inquiry</option>
                        <option value="build">Build / Setup Inquiry</option>
                        <option value="retainer">Monthly Retainer</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-[#71717a] mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us what you're working on and what you're trying to achieve..."
                        className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg px-4 py-3 text-white placeholder-[#3f3f46] focus:outline-none focus:border-[#6c63ff] transition-colors text-sm resize-none"
                      />
                    </div>

                    {status === 'error' && error && (
                      <div className="text-red-400 text-sm">{error}</div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-[#6c63ff] hover:bg-[#5a52d5] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors text-sm"
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message →'}
                    </button>
                  </form>
                )}
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-3">Email</h3>
                  <a href="mailto:hello@emvy.ai" className="text-[#6c63ff] hover:underline text-sm">hello@emvy.ai</a>
                </div>

                <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-3">Response Time</h3>
                  <p className="text-[#71717a] text-sm">We respond to all enquiries within 1 business day. For urgent matters, book a discovery call directly.</p>
                </div>

                <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-3">Book a Call Directly</h3>
                  <p className="text-[#71717a] text-sm mb-4">Skip the back-and-forth. Book a free 15-minute discovery call and we'll tell you exactly where you stand.</p>
                  <a
                    href="https://emvy-booking.vercel.app"
                    className="inline-block px-5 py-2.5 bg-[#6c63ff] hover:bg-[#5a52d5] text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Book Free Discovery Call →
                  </a>
                </div>

                <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-3">Location</h3>
                  <p className="text-[#71717a] text-sm">Perth, Australia — serving clients worldwide</p>
                </div>
              </div>
            </div>
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
            <a href="/pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="https://emvy-booking.vercel.app" className="hover:text-white transition-colors">Book a Call</a>
          </div>
          <div className="text-[#3f3f46] text-xs">Shut Up and Build</div>
        </div>
      </footer>
    </div>
  )
}
