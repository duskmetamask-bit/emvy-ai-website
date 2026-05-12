'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
      setError('Something went wrong. Try emailing us directly at info@emvyai.com')
    }
  }

  return (
    <>
      <style>{`
        .contact-hero {
          position: relative;
          padding-top: 7rem;
          padding-bottom: 4rem;
          overflow: hidden;
          text-align: center;
        }
        .contact-hero-mesh {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 50% at 50% -10%, rgba(124, 111, 255, 0.2) 0%, transparent 60%);
          z-index: 0;
          pointer-events: none;
        }
        .contact-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 80%);
        }
        .contact-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          filter: blur(60px);
          opacity: 0.3;
        }
        .contact-blob-1 {
          width: 400px; height: 300px;
          top: -100px; right: -100px;
          background: radial-gradient(circle, rgba(124, 111, 255, 0.3) 0%, transparent 70%);
          animation: floatShape 9s ease-in-out infinite;
        }
        .contact-blob-2 {
          width: 250px; height: 250px;
          bottom: -50px; left: -60px;
          background: radial-gradient(circle, rgba(96, 80, 220, 0.25) 0%, transparent 70%);
          animation: floatShape 11s ease-in-out infinite reverse;
        }
        @keyframes floatShape {
          0%, 100% { transform: translateY(0px) scale(1); }
          33% { transform: translateY(-20px) scale(1.05); }
          66% { transform: translateY(10px) scale(0.97); }
        }

        .section-kicker {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--color-text-kicker);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .section-kicker::before {
          content: '';
          display: inline-block;
          width: 20px;
          height: 1px;
          background: var(--color-accent);
        }

        .form-input {
          width: 100%;
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 0.875rem 1rem;
          font-size: var(--text-sm);
          color: var(--color-text-primary);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
          font-family: var(--font-body);
        }
        .form-input::placeholder { color: var(--color-text-muted); }
        .form-input:focus {
          border-color: rgba(79, 142, 255, 0.5);
          box-shadow: 0 0 0 3px rgba(79, 142, 255, 0.15), 0 0 20px rgba(79, 142, 255, 0.1);
        }

        .form-label {
          display: block;
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .info-card {
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          padding: 1.75rem;
          transition: all 0.25s ease;
        }
        .info-card:hover {
          border-color: var(--color-border-hover);
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <a href="/" className="header-logo" aria-label="EMVY home">
              <EmvyWordmark size={36} />
            </a>
            <nav className="header-nav" aria-label="Main navigation">
              <a href="/" className="header-nav-link">Home</a>
              <a href="/services/ai-agents" className="header-nav-link">Services</a>
              <a href="/pricing" className="header-nav-link">Pricing</a>
              <a href="/about" className="header-nav-link">About</a>
              <a href="/blog" className="header-nav-link">Blog</a>
              <a href="/contact" className="header-nav-link" style={{ color: 'var(--color-text-secondary)' }}>Contact</a>
            </nav>
            <div className="header-actions">
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact header-cta">
                Book free call
              </a>
              <button
                className="header-hamburger"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-nav">
          <nav className="mobile-nav-inner">
            <a href="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="/services/ai-agents" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="/pricing" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="/blog" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Blog</a>
            <a href="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact w-fit" onClick={() => setMobileMenuOpen(false)}>
              Book free call
            </a>
          </nav>
        </div>
      )}

      <main>
        {/* Hero */}
        <section className="contact-hero">
          <div className="contact-hero-mesh" />
          <div className="contact-hero-grid" />
          <div className="contact-blob contact-blob-1" />
          <div className="contact-blob contact-blob-2" />
          <div className="container">
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto' }}>
              <div className="section-kicker" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
                Get in touch
              </div>
              <h1 style={{
                fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 0.97,
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
              }}>
                Let's talk
                <span style={{
                  background: 'linear-gradient(135deg, #8b85ff 0%, #6c63ff 50%, #a08fff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>.</span>
              </h1>
              <p style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 1.75,
                color: 'var(--color-text-secondary)',
              }}>
                Questions, partnerships, or just want to see if we're a fit? Send us a message — we read every one.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '0 0 5rem' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              maxWidth: '960px',
              margin: '0 auto',
            }}>
              {/* Form */}
              <div>
                {status === 'success' ? (
                  <div style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-2xl)',
                    padding: '3rem 2rem',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'rgba(124, 111, 255, 0.15)',
                      border: '1px solid rgba(124, 111, 255, 0.4)',
                      margin: '0 auto 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                      Message sent.
                    </h2>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                      We'll get back to you within 1 business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-2xl)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                  }}>
                    <div>
                      <label className="form-label">Your Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Alex Johnson"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="alex@company.com"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">What's this about?</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="form-input"
                        style={{ appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%235c5c70' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', paddingRight: '2.5rem' }}
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
                      <label className="form-label">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us what you're working on and what you're trying to achieve..."
                        className="form-input"
                        style={{ resize: 'vertical', minHeight: '120px' }}
                      />
                    </div>

                    {status === 'error' && error && (
                      <div style={{ fontSize: 'var(--text-sm)', color: '#f87171' }}>{error}</div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary"
                      style={{ width: '100%', marginTop: '0.5rem', background: 'linear-gradient(135deg, #4F8EFF 0%, #A855F7 100%)', border: 'none' }}
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message →'}
                    </button>
                  </form>
                )}
              </div>

              {/* Info cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="info-card">
                  <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Email</div>
                  <a href="mailto:info@emvyai.com" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-accent)', fontWeight: 500 }}>info@emvyai.com</a>
                </div>

                <div className="info-card">
                  <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Response Time</div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                    We respond to all enquiries within 1 business day. For urgent matters, book a discovery call directly.
                  </p>
                </div>

                <div className="info-card">
                  <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Book a Call Directly</div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    Skip the back-and-forth. Book a free 15-minute discovery call and we'll tell you exactly where you stand.
                  </p>
                  <a
                    href={CAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary compact"
                  >
                    Book Free Discovery Call →
                  </a>
                </div>

                <div className="info-card">
                  <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Location</div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>Serving Australian SMBs</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="/" className="footer-logo" aria-label="EMVY home">
                <EmvyWordmark size={32} />
              </a>
              <p className="footer-brand-desc">
                AI consultancy for Australian SMBs.<br />Practical systems. Real results.
              </p>
              <div className="footer-social">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter / X">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-col">
                <div className="footer-col-head">Services</div>
                <a href="/#services" className="footer-link">AI Agents</a>
                <a href="/#services" className="footer-link">Automations</a>
                <a href="/#services" className="footer-link">Ops Systems</a>
                <a href="/#services" className="footer-link">Integrations</a>
              </div>
              <div className="footer-col">
                <div className="footer-col-head">Company</div>
                <a href="/about" className="footer-link">About</a>
                <a href="/pricing" className="footer-link">Pricing</a>
                <a href="/contact" className="footer-link" style={{ color: 'var(--color-text-secondary)' }}>Contact</a>
              </div>
              <div className="footer-col">
                <div className="footer-col-head">Ready?</div>
                <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
                  Book free call
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="mono">© 2025 EMVY. All rights reserved.</div>
            <div className="footer-legal">
              <a href="/privacy" className="footer-legal-link">Privacy</a>
              <a href="/terms" className="footer-legal-link">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}