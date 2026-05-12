'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

/* ── DATA ─────────────────────────────────────────────── */

const connectionTypes = [
  {
    title: 'API Connections',
    desc: 'Secure, reliable connections between your tools — authenticated, rate-limited, and built for production.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
      </svg>
    ),
    tag: 'REST · GraphQL · SDK',
  },
  {
    title: 'Data Sync',
    desc: 'Keep data consistent across platforms in real time — no manual exports, no stale records, no duplicated effort.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <polyline points="16 3 21 3 21 8"/>
        <line x1="4" y1="20" x2="21" y2="3"/>
        <polyline points="21 16 21 21 16 21"/>
        <line x1="15" y1="15" x2="21" y2="21"/>
        <line x1="4" y1="4" x2="9" y2="9"/>
      </svg>
    ),
    tag: 'Real-time · Bi-directional',
  },
  {
    title: 'Webhook Setups',
    desc: 'Reliable event-driven workflows — triggered, routed, and fault-tolerant with retry logic and delivery guarantees.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    tag: 'Event-driven · Reliable',
  },
  {
    title: 'Tool Chaining',
    desc: 'Connect multiple tools into coherent pipelines — data flows through a sequence of actions, with logic and branching at each step.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
        <path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07"/>
      </svg>
    ),
    tag: 'Multi-step · Logic branching',
  },
]

const platforms = [
  { name: 'Zapier', desc: 'Quick-connect integrations for common tool pairs — fast to set up, easy to manage.' },
  { name: 'Make', desc: 'Visual scenario builder for complex multi-tool workflows with branching logic and error handling.' },
  { name: 'Custom API', desc: 'Tailored API integrations for unique or proprietary systems — built to your spec.' },
  { name: 'Supabase', desc: 'Serverless Postgres backend with real-time subscriptions, auth, and edge functions.' },
  { name: 'Webhook handlers', desc: 'Custom inbound/outbound webhook endpoints — validated, transformed, and delivered reliably.' },
]

const processSteps = [
  {
    num: '01',
    title: 'Map data flows',
    desc: 'We audit where your data lives, where it needs to go, and what transformation is needed along the way.',
  },
  {
    num: '02',
    title: 'Build connections',
    desc: 'We build the integrations using the right tools — authenticated, documented, and built for scale from day one.',
  },
  {
    num: '03',
    title: 'Test thoroughly',
    desc: 'We test every edge case — auth expiry, payload changes, network failures — before anything goes live.',
  },
  {
    num: '04',
    title: 'Document & hand over',
    desc: 'You get full documentation, credentials, and a clear runbook so you can own and evolve it without us.',
  },
]

const faqs = [
  {
    q: 'Do you replace my existing tools with new ones?',
    a: 'No. We integrate with the tools you already use. We connect, not replace — so your team keeps working in the systems they know.',
  },
  {
    q: 'What happens if an integration breaks?',
    a: 'We fix it. All our integration work comes with a 30-day warranty. After that, we offer ongoing support retainers.',
  },
  {
    q: 'Can you connect tools that don\'t have official APIs?',
    a: 'Often yes. We can use unofficial endpoints, screen scraping, database direct connections, or webhook-based approaches. We assess feasibility in the discovery call.',
  },
  {
    q: 'How long does a typical integration build take?',
    a: 'Most integrations are live within 1–2 weeks. Complex multi-system pipelines or high-reliability requirements may take 3–4 weeks including testing.',
  },
  {
    q: 'Who owns the integration after it\'s built?',
    a: 'You do. We hand over all credentials, documentation, and architecture diagrams. You own what we build — we are just the builder.',
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
              <a href="/services/ai-agents" className="header-nav-link">AI Agents</a>
              <a href="/services/automations" className="header-nav-link">Automations</a>
              <a href="/pricing" className="header-nav-link">Pricing</a>
              <a href="/about" className="header-nav-link">About</a>
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
            <a href="/services/ai-agents" className="mobile-nav-link" onClick={() => setOpen(false)}>AI Agents</a>
            <a href="/services/automations" className="mobile-nav-link" onClick={() => setOpen(false)}>Automations</a>
            <a href="/pricing" className="mobile-nav-link" onClick={() => setOpen(false)}>Pricing</a>
            <a href="/about" className="mobile-nav-link" onClick={() => setOpen(false)}>About</a>
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
            <span>Integrations · APIs · Webhooks · Data sync</span>
          </div>

          <h1 className="hero-headline">
            Seamless connections.<br />
            No <span className="headline-accent">rip-and-replace</span>.
          </h1>

          <p className="hero-sub">
            We connect your tools so data flows automatically — APIs, webhooks, data sync, and tool chaining that work reliably in the background.
          </p>

          <div className="hero-actions">
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book free 15-min call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#connection-types" className="hero-view-pricing">See what we connect</a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── CONNECTION TYPES ───────────────────────────────────── */
function ConnectionTypes() {
  return (
    <section className="section connection-types-section" id="connection-types">
      <div className="container">
        <div className="section-header">
          <span className="kicker">What we build</span>
          <h2 className="section-title">
            Four types of connection.<br />Almost any tool.
          </h2>
          <p className="section-sub">
            Whether you need two systems to talk, data to stay in sync, or a multi-step pipeline that runs automatically — we build it to your spec.
          </p>
        </div>

        <div className="connection-grid">
          {connectionTypes.map((c) => (
            <div key={c.title} className="connection-card">
              <div className="connection-icon">{c.icon}</div>
              <div className="connection-tag">{c.tag}</div>
              <h3 className="connection-title">{c.title}</h3>
              <p className="connection-desc">{c.desc}</p>
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
          <span className="kicker">Platforms & tools</span>
          <h2 className="section-title">
            The right integration<br />for your stack.
          </h2>
          <p className="section-sub">
            We work with the tools you already have — no forced migrations, no vendor lock-in.
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

/* ── PROCESS ────────────────────────────────────────────── */
function Process() {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="section-header">
          <span className="kicker">How we work</span>
          <h2 className="section-title">
            Map flows → Build connections<br />
            → Test → Document.
          </h2>
          <p className="section-sub">
            A clear, transparent process — so you always know where things are and what you are getting.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((p) => (
            <div key={p.num} className="process-step">
              <div className="process-num">{p.num}</div>
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
          <h2 className="cta-title">Stop copying data between tools manually.</h2>
          <p className="cta-sub">
            Book the free 15-minute call. We will map your data flows and identify the 2–3 integrations that will save you the most time.
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
  padding-top: 10rem;
  padding-bottom: 5rem;
  overflow: hidden;
}
@media (min-width: 768px) { .hero { padding-top: 11rem; padding-bottom: 7rem; } }

.hero-mesh-1 {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79, 142, 255, 0.18) 0%, transparent 60%);
  z-index: 0; pointer-events: none;
}
.hero-mesh-2 {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 50% 40% at 80% 60%, rgba(168, 85, 247, 0.12) 0%, transparent 60%);
  z-index: 0; pointer-events: none;
}
.hero-mesh-3 {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 40% 30% at 20% 80%, rgba(79, 142, 255, 0.08) 0%, transparent 60%);
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
  background: radial-gradient(circle, rgba(79, 142, 255, 0.25) 0%, transparent 70%);
  animation-delay: 0s;
}
.hero-shape-2 {
  width: 200px; height: 200px; bottom: 0px; left: -80px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%);
  animation-delay: -3s;
}
.hero-shape-3 {
  width: 150px; height: 150px; top: 40%; right: 15%;
  background: radial-gradient(circle, rgba(79, 142, 255, 0.15) 0%, transparent 70%);
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
  background: linear-gradient(135deg, #4F8EFF 0%, #A855F7 100%);
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

/* Connection types */
.connection-types-section {
  background: var(--color-bg);
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
.connection-types-section::before {
  content: '';
  position: absolute;
  top: -80px; left: 0; right: 0; height: 80px;
  background: linear-gradient(to bottom, transparent, var(--color-bg));
  pointer-events: none;
}

.connection-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 640px) { .connection-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .connection-grid { grid-template-columns: repeat(4, 1fr); } }

.connection-card {
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: 2rem;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 100%;
  overflow: hidden;
}
.connection-card:hover {
  border-color: rgba(79, 142, 255, 0.4);
  box-shadow: 0 0 30px rgba(79, 142, 255, 0.12), 0 0 60px rgba(79, 142, 255, 0.06);
  transform: translateY(-2px);
}
.connection-icon { color: var(--color-accent); margin-bottom: 0.5rem; }
.connection-tag {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #4F8EFF;
  background: rgba(79, 142, 255, 0.08);
  border: 1px solid rgba(79, 142, 255, 0.25);
  border-radius: 999px;
  padding: 0.2rem 0.625rem;
  width: fit-content;
}
.connection-title {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
}
.connection-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-top: 0.25rem;
}

/* Platforms */
.platforms-section {
  background: var(--color-bg-subtle);
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
.platforms-section::before {
  content: '';
  position: absolute;
  top: -80px; left: 0; right: 0; height: 80px;
  background: linear-gradient(to bottom, var(--color-bg), var(--color-bg-subtle));
  pointer-events: none;
}

.platforms-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
@media (min-width: 640px) { .platforms-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .platforms-grid { grid-template-columns: repeat(3, 1fr); } }

.platform-card {
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: 1.75rem;
  transition: all 0.25s ease;
}
.platform-card:hover {
  border-color: var(--color-border-hover);
  background: var(--color-surface-hover);
}
.platform-name {
  font-family: var(--font-mono);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 0.75rem;
}
.platform-desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.7;
}

/* Process */
.process-section {
  background: var(--color-bg);
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
.process-section::before {
  content: '';
  position: absolute;
  top: -80px; left: 0; right: 0; height: 80px;
  background: linear-gradient(to bottom, var(--color-bg-subtle), var(--color-bg));
  pointer-events: none;
}

.process-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 640px) { .process-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .process-grid { grid-template-columns: repeat(4, 1fr); } }

.process-step {
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: 1.75rem;
  transition: all 0.25s ease;
}
.process-step:hover {
  border-color: rgba(79, 142, 255, 0.4);
  box-shadow: 0 0 30px rgba(79, 142, 255, 0.1), 0 4px 24px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}
.process-num {
  font-family: var(--font-mono);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 900;
  color: var(--color-border-hover);
  line-height: 1;
  margin-bottom: 0.75rem;
}
.process-title {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}
.process-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.7; }

/* FAQ */
.faq-section {
  background: var(--color-bg-subtle);
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
.faq-section::before {
  content: '';
  position: absolute;
  top: -80px; left: 0; right: 0; height: 80px;
  background: linear-gradient(to bottom, var(--color-bg), var(--color-bg-subtle));
  pointer-events: none;
}

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

/* CTA */
.cta-section {
  background: var(--color-bg);
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
.cta-section::before {
  content: '';
  position: absolute;
  top: -80px; left: 0; right: 0; height: 80px;
  background: linear-gradient(to bottom, var(--color-bg-subtle), var(--color-bg));
  pointer-events: none;
}
.cta-inner {
  position: relative;
  text-align: center;
  padding: 5rem 2rem;
  border-radius: var(--radius-2xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  overflow: hidden;
}
.cta-glow {
  position: absolute;
  top: -80px; left: 50%; transform: translateX(-50%);
  width: 600px; height: 400px;
  background: radial-gradient(ellipse at center, rgba(79, 142, 255, 0.15) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 70%);
  pointer-events: none;
}
.cta-title {
  font-size: clamp(2.25rem, 5vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--color-text-primary);
  margin: 1.25rem 0 1rem;
}
.cta-sub {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.7;
  max-width: 480px;
  margin: 0 auto 2.5rem;
}
.cta-btn { margin: 0 auto; }

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
export default function IntegrationsPage() {
  return (
    <>
      <style>{heroStyles}</style>
      <style>{pageStyles}</style>
      <Header />
      <main>
        <Hero />
        <ConnectionTypes />
        <Platforms />
        <Process />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}