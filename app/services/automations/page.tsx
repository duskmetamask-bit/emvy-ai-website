'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

/* ── DATA ─────────────────────────────────────────────── */

const capabilities = [
  {
    title: 'Quote automation',
    desc: 'Automatically generate, send, and follow up on quotes based on your pricing rules and customer inputs — no manual copying.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    title: 'Follow-up sequences',
    desc: 'Multi-step sequences that nurture leads and customers automatically — by email, SMS, or task creation — with smart delays.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: 'Data entry & migration',
    desc: 'Eliminate double-handling. Forms, emails, and external data feed directly into your systems without anyone typing a thing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    title: 'Approval chains',
    desc: 'Route requests, quotes, and sign-offs to the right person automatically — with reminders and escalations built in.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    title: 'Smart notifications',
    desc: 'The right people get the right alerts at the right time — Slack, email, SMS, or all three — based on triggers you define.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 01-3.46 0"/>
      </svg>
    ),
  },
  {
    title: 'CRM & tool sync',
    desc: 'Keep your CRM, spreadsheets, and business tools in sync automatically — no more manual updates or stale data.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="16 3 21 3 21 8"/>
        <line x1="4" y1="20" x2="21" y2="3"/>
        <polyline points="21 16 21 21 16 21"/>
        <line x1="15" y1="15" x2="21" y2="21"/>
        <line x1="4" y1="4" x2="9" y2="9"/>
      </svg>
    ),
  },
]

const platforms = [
  { name: 'n8n', desc: 'Open-source, powerful workflow automation with full code control.' },
  { name: 'Make', desc: 'Visual scenario builder for complex multi-system workflows.' },
  { name: 'Zapier', desc: 'Quick and simple integrations for everyday tool connections.' },
  { name: 'Custom code', desc: 'Tailored scripts and APIs for unique or high-performance needs.' },
]

const process = [
  {
    step: '01',
    title: 'Map',
    desc: 'We audit your existing workflows and identify exactly where time is leaking and which automations will have the biggest impact.',
  },
  {
    step: '02',
    title: 'Build',
    desc: 'We construct robust, tested workflows — integrating your tools and creating the logic that handles your real business rules.',
  },
  {
    step: '03',
    title: 'Test',
    desc: 'We run your workflows in shadow mode, catch the edge cases, and fix everything before anything goes live.',
  },
  {
    step: '04',
    title: 'Hand over',
    desc: 'You get fully documented, working automations — and we train your team so you can own and evolve it without us.',
  },
]

const faqs = [
  {
    q: 'Do I need to change my existing tools?',
    a: 'No. We build automations that work with the tools you already use. We integrate, not replace.',
  },
  {
    q: 'What platforms do you work with?',
    a: 'We work across n8n, Make, Zapier, and custom code depending on complexity. We recommend the right tool for your situation — not the one that makes us the most margin.',
  },
  {
    q: 'How long does a typical automation build take?',
    a: 'Most workflows are built and live within 1–2 weeks. More complex, multi-step automations may take 3–4 weeks including testing.',
  },
  {
    q: 'What happens if something breaks?',
    a: 'We fix it. All our work comes with a 30-day warranty period. After that, we offer ongoing support retainers.',
  },
  {
    q: 'Can I own the automation after it is built?',
    a: 'Yes. We hand over all access, documentation, and credentials. You own what we build — we are just the builder.',
  },
]

/* ── SECTION COMPONENTS ─────────────────────────────── */

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <a href="/" className="header-logo" aria-label="EMVY home">
              <EmvyWordmark size={36} />
            </a>

            <nav className="header-nav" aria-label="Main navigation">
              <a href="/" className="header-nav-link">Home</a>
              <a href="/pricing" className="header-nav-link">Pricing</a>
              <a href="/about" className="header-nav-link">About</a>
              <a href="/blog" className="header-nav-link">Blog</a>
              <a href="/contact" className="header-nav-link">Contact</a>
            </nav>

            <div className="header-actions">
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact header-cta">
                Book free call
              </a>
              <button
                className="header-hamburger"
                onClick={() => setOpen(!open)}
                aria-label="Toggle mobile menu"
                aria-expanded={open}
              >
                {open ? (
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

      {open && (
        <div className="mobile-nav">
          <nav className="mobile-nav-inner">
            <a href="/" className="mobile-nav-link" onClick={() => setOpen(false)}>Home</a>
            <a href="/pricing" className="mobile-nav-link" onClick={() => setOpen(false)}>Pricing</a>
            <a href="/about" className="mobile-nav-link" onClick={() => setOpen(false)}>About</a>
            <a href="/blog" className="mobile-nav-link" onClick={() => setOpen(false)}>Blog</a>
            <a href="/contact" className="mobile-nav-link" onClick={() => setOpen(false)}>Contact</a>
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact w-fit" onClick={() => setOpen(false)}>
              Book free call
            </a>
          </nav>
        </div>
      )}
    </>
  )
}

function Footer() {
  return (
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
              <div className="footer-col-head">Company</div>
              <a href="/about" className="footer-link">About</a>
              <a href="/pricing" className="footer-link">Pricing</a>
              <a href="/blog" className="footer-link">Blog</a>
              <a href="/contact" className="footer-link">Contact</a>
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
  )
}

/* ── HERO ─────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-mesh-1" aria-hidden="true" />
      <div className="hero-mesh-2" aria-hidden="true" />
      <div className="hero-mesh-3" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-shape hero-shape-1" aria-hidden="true" />
      <div className="hero-shape hero-shape-2" aria-hidden="true" />
      <div className="hero-shape hero-shape-3" aria-hidden="true" />

      <div className="container">
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Automations · No-code + code · Built to last</span>
          </div>

          <h1 className="hero-headline">
            End-to-end workflows<br />
            that <span className="headline-accent">eliminate<br />busywork</span>.
          </h1>

          <p className="hero-sub">
            We build automation systems that handle the repetitive work — quotes, follow-ups, data movement, approvals — so your team can focus on what actually grows the business.
          </p>

          <div className="hero-actions">
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book free 15-min call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#capabilities" className="hero-view-pricing">See what we automate</a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── CAPABILITIES ─────────────────────────────────────── */
function Capabilities() {
  return (
    <section className="section capabilities-section" id="capabilities">
      <div className="container">
        <div className="section-header">
          <span className="kicker">What we automate</span>
          <h2 className="section-title">
            From quote to follow-up,<br />we close the loop.
          </h2>
          <p className="section-sub">
            Automations that actually work — integrated with your tools, tested against your real processes, and built to scale.
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((c) => (
            <div key={c.title} className="capability-card">
              <div className="capability-icon">{c.icon}</div>
              <div className="capability-title">{c.title}</div>
              <p className="capability-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── PLATFORMS ─────────────────────────────────────────── */
function Platforms() {
  return (
    <section className="section platforms-section">
      <div className="container">
        <div className="section-header">
          <span className="kicker">How we build</span>
          <h2 className="section-title">
            The right tool<br />for every job.
          </h2>
          <p className="section-sub">
            We are platform-agnostic. We use whatever best fits your situation — no forced vendor lock-in.
          </p>
        </div>

        <div className="platforms-grid">
          {platforms.map((p) => (
            <div key={p.name} className="platform-card">
              <div className="platform-name">{p.name}</div>
              <p className="platform-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── PROCESS ───────────────────────────────────────────── */
function Process() {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="section-header">
          <span className="kicker">How we work</span>
          <h2 className="section-title">
            Map · Build · Test<br />· Hand over.
          </h2>
          <p className="section-sub">
            A proven, transparent process — so you always know where things are and what you are getting.
          </p>
        </div>

        <div className="process-grid">
          {process.map((p) => (
            <div key={p.step} className="process-step">
              <div className="process-num">{p.step}</div>
              <div className="process-title">{p.title}</div>
              <p className="process-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book free 15-min call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── FAQ ───────────────────────────────────────────────── */
function FAQ({ item }: { item: typeof faqs[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{item.q}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease', flexShrink: 0 }}
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {open && (
        <div className="faq-answer">
          <p>{item.a}</p>
        </div>
      )}
    </div>
  )
}

function FAQSection() {
  return (
    <section className="section faq-section">
      <div className="container">
        <div className="section-header">
          <span className="kicker">FAQ</span>
          <h2 className="section-title">Common questions.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((f) => (
            <FAQ key={f.q} item={f} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA ───────────────────────────────────────────────── */
function CTASection() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-glow" aria-hidden="true" />
          <span className="kicker" style={{ justifyContent: 'center' }}>Ready?</span>
          <h2 className="cta-title">Find the busywork in your business.</h2>
          <p className="cta-sub">
            Book the free 15-minute call. We will map your workflows and identify the 2–3 automations that will save you the most time.
          </p>
          <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary cta-btn">
            Book free 15-min call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── CSS ──────────────────────────────────────────────── */

const heroStyles = `
.hero {
  position: relative;
  padding-top: 8rem;
  padding-bottom: 5rem;
  overflow: hidden;
}
@media (min-width: 768px) { .hero { padding-top: 10rem; padding-bottom: 7rem; } }

.hero-mesh-1 {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124, 111, 255, 0.18) 0%, transparent 60%);
  z-index: 0; pointer-events: none;
}
.hero-mesh-2 {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 50% 40% at 80% 60%, rgba(96, 80, 220, 0.12) 0%, transparent 60%);
  z-index: 0; pointer-events: none;
}
.hero-mesh-3 {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 40% 30% at 20% 80%, rgba(124, 111, 255, 0.08) 0%, transparent 60%);
  z-index: 0; pointer-events: none;
}
.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 60px 60px;
  z-index: 0; pointer-events: none;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 80%);
}
.hero-shape {
  position: absolute; border-radius: 50%; pointer-events: none; z-index: 0;
  filter: blur(40px); opacity: 0.4; animation: floatShape 8s ease-in-out infinite;
}
.hero-shape-1 {
  width: 300px; height: 300px; top: -80px; right: -60px;
  background: radial-gradient(circle, rgba(124, 111, 255, 0.25) 0%, transparent 70%);
  animation-delay: 0s;
}
.hero-shape-2 {
  width: 200px; height: 200px; bottom: 0px; left: -80px;
  background: radial-gradient(circle, rgba(96, 80, 220, 0.2) 0%, transparent 70%);
  animation-delay: -3s;
}
.hero-shape-3 {
  width: 150px; height: 150px; top: 40%; right: 15%;
  background: radial-gradient(circle, rgba(124, 111, 255, 0.15) 0%, transparent 70%);
  animation-delay: -5s;
}
@keyframes floatShape {
  0%, 100% { transform: translateY(0px) scale(1); }
  33% { transform: translateY(-20px) scale(1.05); }
  66% { transform: translateY(10px) scale(0.97); }
}

.hero-inner { position: relative; z-index: 1; max-width: 860px; }

.hero-badge {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.375rem 0.875rem; border-radius: 999px;
  background: var(--color-accent-subtle); border: 1px solid var(--color-border-accent);
  font-family: var(--font-mono); font-size: 0.7rem; font-weight: 500;
  letter-spacing: 0.12em; color: var(--color-text-kicker); text-transform: uppercase; margin-bottom: 2rem;
}
.hero-badge-dot {
  width: 6px; height: 6px; border-radius: 50%; background: var(--color-accent);
  box-shadow: 0 0 8px var(--color-accent); animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero-headline {
  font-size: clamp(2.75rem, 7vw, 5.5rem);
  font-weight: 900; line-height: 0.95; letter-spacing: -0.04em;
  color: var(--color-text-primary); margin-bottom: 1.75rem;
}
.headline-accent {
  background: linear-gradient(135deg, #8b85ff 0%, #6c63ff 50%, #a08fff 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}

.hero-sub {
  font-size: var(--text-lg); line-height: 1.75;
  color: var(--color-text-secondary); max-width: 600px; margin-bottom: 2.5rem;
}

.hero-actions { display: flex; flex-wrap: wrap; gap: 0.875rem; align-items: center; margin-bottom: 3rem; }

.hero-view-pricing {
  font-size: var(--text-sm); color: var(--color-text-muted); font-weight: 500; transition: color 0.2s ease;
}
.hero-view-pricing:hover { color: var(--color-text-secondary); }
`

const pageStyles = `
/* Section header */
.section-header { margin-bottom: 3.5rem; }
.section-title {
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--color-text-primary);
  margin-top: 1rem;
}
.section-sub {
  margin-top: 1.25rem;
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.75;
  max-width: 600px;
}

/* Capabilities grid */
.capabilities-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
@media (min-width: 640px) {
  .capabilities-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .capabilities-grid { grid-template-columns: repeat(3, 1fr); }
}

.capability-card {
  padding: 2rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  transition: all 0.25s ease;
}
.capability-card:hover {
  border-color: var(--color-border-hover);
  box-shadow: 0 0 30px rgba(124, 111, 255, 0.08);
  transform: translateY(-2px);
}

.capability-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  background: var(--color-accent-subtle);
  border: 1px solid var(--color-border-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  margin-bottom: 1.25rem;
}

.capability-title {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.capability-desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.7;
}

/* Platforms */
.platforms-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
@media (min-width: 768px) {
  .platforms-grid { grid-template-columns: repeat(4, 1fr); }
}

.platform-card {
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  transition: all 0.25s ease;
}
.platform-card:hover {
  border-color: var(--color-border-accent);
  box-shadow: 0 0 20px rgba(124, 111, 255, 0.1);
}

.platform-name {
  font-family: var(--font-mono);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
}

.platform-desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* Process grid */
.process-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 640px) {
  .process-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .process-grid { grid-template-columns: repeat(4, 1fr); }
}

.process-step {
  padding: 1.75rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  position: relative;
}

.process-num {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-accent);
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.process-title {
  font-size: var(--text-xl);
  font-weight: 800;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.process-desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.7;
}

/* FAQ */
.faq-list {
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.faq-item {
  border-bottom: 1px solid var(--color-border);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 0;
  background: none;
  border: none;
  color: var(--color-text-primary);
  font-size: var(--text-base);
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: color 0.2s ease;
}
.faq-question:hover { color: var(--color-accent); }

.faq-answer {
  padding-bottom: 1.5rem;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.8;
}

/* CTA section */
.cta-section { background: var(--color-bg); }
.cta-inner {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
  padding: 5rem 2rem;
  border-radius: var(--radius-2xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  position: relative;
  overflow: hidden;
}
.cta-glow {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(124, 111, 255, 0.15) 0%, transparent 70%);
  pointer-events: none;
}
.cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  color: var(--color-text-primary);
  margin-top: 1rem;
  line-height: 1.1;
}
.cta-sub {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.75;
  margin-top: 1.25rem;
}
.cta-btn { margin-top: 2rem; }

/* Header */
.header {
  position: sticky; top: 0; z-index: 100; height: var(--header-h);
  border-bottom: 1px solid var(--color-border); background: rgba(6, 6, 10, 0.85);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
}
.header-inner { display: flex; align-items: center; justify-content: space-between; height: 100%; }
.header-logo img { height: 44px; width: auto; object-fit: contain; }
.header-logo { display: flex; align-items: center; }
.header-nav { display: none; gap: 2rem; align-items: center; }
@media (min-width: 768px) { .header-nav { display: flex; } }
.header-nav-link { font-size: var(--text-sm); color: var(--color-text-muted); transition: color 0.2s ease; font-weight: 500; }
.header-nav-link:hover { color: var(--color-text-secondary); }
.header-actions { display: flex; align-items: center; gap: 0.75rem; }
.header-cta { display: none; }
@media (min-width: 768px) { .header-cta { display: inline-flex; } }
.header-hamburger {
  display: flex; align-items: center; justify-content: center; width: 36px; height: 36px;
  border-radius: var(--radius-md); background: transparent; border: 1px solid var(--color-border);
  color: var(--color-text-muted); cursor: pointer; transition: all 0.2s ease;
}
.header-hamburger:hover { border-color: var(--color-border-hover); color: var(--color-text-secondary); }
@media (min-width: 768px) { .header-hamburger { display: none; } }

/* Mobile nav */
.mobile-nav {
  position: fixed; top: var(--header-h); left: 0; right: 0; z-index: 99;
  background: rgba(6, 6, 10, 0.97); backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border); padding: 1.5rem;
}
.mobile-nav-inner {
  display: flex; flex-direction: column; gap: 0.75rem; max-width: var(--max-width);
  margin: 0 auto; padding: 0 0.5rem;
}
.mobile-nav-link { font-size: var(--text-base); color: var(--color-text-muted); font-weight: 500; padding: 0.5rem 0; transition: color 0.2s ease; }
.mobile-nav-link:hover { color: var(--color-text-secondary); }

/* Footer */
.footer { border-top: 1px solid var(--color-border); padding: 4rem 0 2rem; }
.footer-top { display: flex; flex-direction: column; gap: 3rem; margin-bottom: 4rem; }
@media (min-width: 768px) { .footer-top { flex-direction: row; justify-content: space-between; align-items: flex-start; } }
.footer-brand { max-width: 280px; }
.footer-logo { display: inline-flex; margin-bottom: 1rem; }
.footer-brand-desc { font-size: var(--text-sm); color: var(--color-text-muted); line-height: 1.7; }
.footer-social { display: flex; gap: 0.75rem; margin-top: 1.25rem; }
.footer-social-link { color: var(--color-text-muted); transition: color 0.2s ease; }
.footer-social-link:hover { color: var(--color-text-secondary); }
.footer-links { display: flex; gap: 3rem; }
.footer-col { display: flex; flex-direction: column; gap: 0.75rem; }
.footer-col-head { font-size: var(--text-xs); font-family: var(--font-mono); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 0.25rem; }
.footer-link { font-size: var(--text-sm); color: var(--color-text-muted); font-weight: 500; transition: color 0.2s ease; }
.footer-link:hover { color: var(--color-text-secondary); }
.footer-bottom { display: flex; flex-direction: column; gap: 1rem; padding-top: 2rem; border-top: 1px solid var(--color-border); }
@media (min-width: 768px) { .footer-bottom { flex-direction: row; justify-content: space-between; align-items: center; } }
.footer-legal { display: flex; gap: 1.5rem; }
.footer-legal-link { font-size: var(--text-xs); color: var(--color-text-muted); font-family: var(--font-mono); transition: color 0.2s ease; }
.footer-legal-link:hover { color: var(--color-text-secondary); }
`

/* ── PAGE ──────────────────────────────────────────────── */
export default function AutomationsPage() {
  return (
    <>
      <style>{heroStyles}</style>
      <style>{pageStyles}</style>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Platforms />
        <Process />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}