'use client'

import { useState } from 'react'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

/* ── DATA ─────────────────────────────────────────────── */
const metrics = [
  { value: '94%', label: 'Client retention rate' },
  { value: '<48h', label: 'Average first response' },
  { value: '$0', label: 'Upfront commitment' },
  { value: '6+', label: 'Years in AI ops' },
]

const services = [
  {
    id: 'agents',
    title: 'AI Agents',
    desc: 'Autonomous digital workers that handle calls, messages, and admin — 24/7, without节假日.',
    tag: 'Production-ready',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    id: 'automations',
    title: 'Automations',
    desc: 'End-to-end workflows that eliminate busywork — quotes, follow-ups, data movement, approvals.',
    tag: 'No-code + code',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
        <path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07"/>
      </svg>
    ),
  },
  {
    id: 'ops',
    title: 'Ops Systems',
    desc: 'Connected systems and dashboards that bring clarity and control to how your business runs.',
    tag: 'Long-term clarity',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="3" width="7" height="7" rx="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5"/>
      </svg>
    ),
  },
  {
    id: 'integrations',
    title: 'Integrations',
    desc: 'Seamless connections across the tools you already use — no rip-and-replace, no vendor lock-in.',
    tag: 'Works with your stack',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="16 3 21 3 21 8"/>
        <line x1="4" y1="20" x2="21" y2="3"/>
        <polyline points="21 16 21 21 16 21"/>
        <line x1="15" y1="15" x2="21" y2="21"/>
        <line x1="4" y1="4" x2="9" y2="9"/>
      </svg>
    ),
  },
]

const caseStudy = {
  client: 'Mid-sized tradie contractor',
  industry: 'Perth · Construction',
  challenge: 'Quoting took 3 days, customer follow-ups were inconsistent, and leads were falling through the cracks. The team was spending 20+ hours/week on admin that could be automated.',
  solution: 'We built an AI agent to parse inbound enquiries, auto-generate quotes using live supplier pricing, and trigger follow-up sequences — all integrated with their existing job management software.',
  result: 'Quote time: 3 days → 4 hours. Follow-up rate: 40% → 94%. Admin burden dropped by 60% within 8 weeks.',
  metrics: [
    { v: '3 days → 4 hrs', l: 'Quote turnaround' },
    { v: '94%', l: 'Follow-up rate' },
    { v: '60%', l: 'Admin reduction' },
  ],
}

const valueProps = [
  {
    num: '01',
    title: 'Free call first',
    desc: 'We find out if AI actually makes sense for your business before you commit to anything. No slides, no pressure — just an honest conversation.',
  },
  {
    num: '02',
    title: 'Audit before build',
    desc: 'We map your real workflows — not the idealised version. Then we find the 2-3 interventions that move the needle most.',
  },
  {
    num: '03',
    title: 'You own the roadmap',
    desc: 'Whether we build it or not, the audit output and roadmap are yours. No lock-in, no surprises.',
  },
  {
    num: '04',
    title: 'Ongoing support',
    desc: 'We monitor, fix, and improve the system month by month. Walk away any time — but most clients stay because it keeps working.',
  },
]

const process = [
  { step: '01', title: 'Discover', desc: 'Short call to understand where time, revenue and focus are leaking in your business.' },
  { step: '02', title: 'Audit', desc: 'We map your real workflow and find the 2-3 things that move the needle most.' },
  { step: '03', title: 'Build', desc: 'We construct the system properly, integrate, test and deploy — then hand it over trained.' },
  { step: '04', title: 'Support', desc: 'We monitor, fix, and improve it month by month. No lock-in. Cancel any time.' },
]

/* ── SECTION COMPONENTS ─────────────────────────────── */

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="metric-card">
      <div className="metric-value">{value}</div>
      <div className="metric-label">{label}</div>
    </div>
  )
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <div className="service-card">
      <div className="service-icon">{service.icon}</div>
      <div className="service-tag">{service.tag}</div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.desc}</p>
    </div>
  )
}

/* ── HERO ─────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      {/* Ambient glow */}
      <div className="hero-glow" aria-hidden="true" />

      <div className="container">
        <div className="hero-inner">

          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Perth-based · SMB specialists · Transparent pricing</span>
          </div>

          <h1 className="hero-headline">
            We find where your<br />
            business <span className="headline-accent">bleeds time</span><br />
            and money.
          </h1>

          <p className="hero-sub">
            EMVY is an AI consultancy that audits your workflows, identifies the
            highest-impact opportunities, and builds the systems that actually run —
            then stays to maintain them.
          </p>

          <div className="hero-actions">
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book free 15-min call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/pricing" className="btn-secondary">View pricing</a>
          </div>

          {/* Trust strip */}
          <div className="hero-trust">
            <div className="trust-item">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.77 3.91 10.51l.59-3.44L2 4.635l3.455-.505z" fill="#7c6fff"/>
              </svg>
              <span>No upfront commitment</span>
            </div>
            <div className="trust-item">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="6" stroke="#7c6fff" strokeWidth="1.5"/>
                <path d="M4.5 7l2 2 3-3" stroke="#7c6fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Audit before any build</span>
            </div>
            <div className="trust-item">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="2" y="6" width="10" height="7" rx="1.5" stroke="#7c6fff" strokeWidth="1.5"/>
                <path d="M5 6V4a2 2 0 014 0v2" stroke="#7c6fff" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>You own the roadmap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── METRICS ───────────────────────────────────────────── */
function Metrics() {
  return (
    <section className="metrics-section">
      <div className="container">
        <div className="metrics-grid">
          {metrics.map((m) => (
            <MetricCard key={m.label} value={m.value} label={m.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── SERVICES ──────────────────────────────────────────── */
function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="kicker">What we build</span>
          <h2 className="section-title">
            Practical AI systems<br />for how your business works.
          </h2>
          <p className="section-sub">
            We don't just automate tasks. We build systems that think, act and scale with you.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CASE STUDY ────────────────────────────────────────── */
function CaseStudy() {
  return (
    <section className="section case-study-section" id="case-study">
      <div className="container">
        <div className="case-study-card">
          {/* Left — context */}
          <div className="case-study-left">
            <span className="kicker">Case study</span>
            <div className="case-study-client">{caseStudy.client}</div>
            <div className="case-study-industry">{caseStudy.industry}</div>

            <div className="case-study-block">
              <div className="case-study-label">The challenge</div>
              <p className="case-study-text">{caseStudy.challenge}</p>
            </div>

            <div className="case-study-block">
              <div className="case-study-label">The solution</div>
              <p className="case-study-text">{caseStudy.solution}</p>
            </div>
          </div>

          {/* Right — results */}
          <div className="case-study-right">
            <div className="case-study-label">The result</div>
            <p className="case-study-result-text">{caseStudy.result}</p>

            <div className="case-study-metrics">
              {caseStudy.metrics.map((m) => (
                <div key={m.l} className="case-study-metric">
                  <div className="case-study-metric-value">{m.v}</div>
                  <div className="case-study-metric-label">{m.l}</div>
                </div>
              ))}
            </div>

            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 'auto' }}>
              Get your free audit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── VALUE PROPS ───────────────────────────────────────── */
function ValueProps() {
  return (
    <section className="section value-props-section" id="how-we-work">
      <div className="container">
        <div className="section-header">
          <span className="kicker">How we work</span>
          <h2 className="section-title">
            Audit first.<br />Build second.<br />Support always.
          </h2>
          <p className="section-sub">
            You should always know what is happening, why it matters, and what you get at every step.
          </p>
        </div>

        {/* Process steps */}
        <div className="process-grid">
          {process.map((p) => (
            <div key={p.step} className="process-step">
              <div className="process-num">{p.step}</div>
              <div className="process-title">{p.title}</div>
              <p className="process-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="divider" style={{ margin: '4rem 0' }} />

        {/* Value props */}
        <div className="value-grid">
          {valueProps.map((v) => (
            <div key={v.num} className="value-prop">
              <div className="value-num">{v.num}</div>
              <div className="value-title">{v.title}</div>
              <p className="value-desc">{v.desc}</p>
            </div>
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
          <h2 className="cta-title">Ready to find the leak?</h2>
          <p className="cta-sub">
            Book the free 15-minute call. If AI can help, you will know where to start.
            If it cannot, you will know that too.
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

/* ── FOOTER ────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="footer-logo" aria-label="EMVY home">
              <img src="/assets/emvyai-logo-lockup-transparent.webp" alt="EMVY" className="h-8 w-auto" />
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
              <a href="#services" className="footer-link">AI Agents</a>
              <a href="#services" className="footer-link">Automations</a>
              <a href="#services" className="footer-link">Ops Systems</a>
              <a href="#services" className="footer-link">Integrations</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-head">Company</div>
              <a href="/about" className="footer-link">About</a>
              <a href="/pricing" className="footer-link">Pricing</a>
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

/* ── HEADER ─────────────────────────────────────────────── */
function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <a href="/" className="header-logo" aria-label="EMVY home">
              <img src="/assets/emvyai-logo-lockup-transparent.webp" alt="EMVY" className="h-11 w-auto" />
            </a>

            <nav className="header-nav" aria-label="Main navigation">
              <a href="#services" className="header-nav-link">Services</a>
              <a href="#how-we-work" className="header-nav-link">How We Work</a>
              <a href="/pricing" className="header-nav-link">Pricing</a>
              <a href="/about" className="header-nav-link">About</a>
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
            <a href="#services" className="mobile-nav-link" onClick={() => setOpen(false)}>Services</a>
            <a href="#how-we-work" className="mobile-nav-link" onClick={() => setOpen(false)}>How We Work</a>
            <a href="/pricing" className="mobile-nav-link" onClick={() => setOpen(false)}>Pricing</a>
            <a href="/about" className="mobile-nav-link" onClick={() => setOpen(false)}>About</a>
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact w-fit" onClick={() => setOpen(false)}>
              Book free call
            </a>
          </nav>
        </div>
      )}
    </>
  )
}

/* ── PAGE ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <style>{heroStyles}</style>
      <style>{metricStyles}</style>
      <style>{serviceStyles}</style>
      <style>{caseStudyStyles}</style>
      <style>{valueStyles}</style>
      <style>{ctaStyles}</style>
      <style>{footerStyles}</style>
      <style>{headerStyles}</style>

      <Header />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <CaseStudy />
        <ValueProps />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

/* ── CSS STRING BLOCKS (injected via <style>) ──────────── */

const headerStyles = `
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-h);
  border-bottom: 1px solid var(--color-border);
  background: rgba(6, 6, 10, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.header-logo img { height: 44px; width: auto; object-fit: contain; }
.header-nav { display: none; gap: 2rem; align-items: center; }
@media (min-width: 768px) { .header-nav { display: flex; } }
.header-nav-link {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  transition: color 0.2s ease;
  font-weight: 500;
}
.header-nav-link:hover { color: var(--color-text-secondary); }
.header-actions { display: flex; align-items: center; gap: 0.75rem; }
.header-cta { display: none; }
@media (min-width: 640px) { .header-cta { display: inline-flex; } }
.header-hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all 0.2s ease;
}
.header-hamburger:hover { border-color: var(--color-border-hover); color: var(--color-text-secondary); }
@media (min-width: 768px) { .header-hamburger { display: none; } }

.mobile-nav {
  position: fixed;
  top: var(--header-h);
  left: 0;
  right: 0;
  z-index: 99;
  background: rgba(6, 6, 10, 0.97);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
  padding: 1.5rem;
}
.mobile-nav-inner {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: var(--max-width);
  margin: 0 auto;
}
.mobile-nav-link {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.2s ease;
}
.mobile-nav-link:hover { color: var(--color-text-secondary); }
`

const heroStyles = `
.hero {
  position: relative;
  padding-top: 7rem;
  padding-bottom: 5rem;
  overflow: hidden;
}
@media (min-width: 768px) { .hero { padding-top: 9rem; padding-bottom: 7rem; } }

.hero-glow {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 600px;
  background: radial-gradient(ellipse at center, rgba(124, 111, 255, 0.12) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 860px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.875rem;
  border-radius: 999px;
  background: var(--color-accent-subtle);
  border: 1px solid var(--color-border-accent);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: var(--color-text-kicker);
  text-transform: uppercase;
  margin-bottom: 2rem;
}
.hero-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 8px var(--color-accent);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero-headline {
  font-size: clamp(2.75rem, 7vw, 5.5rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: var(--color-text-primary);
  margin-bottom: 1.75rem;
}
.headline-accent {
  background: linear-gradient(135deg, #8b85ff 0%, #6c63ff 50%, #a08fff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: var(--text-lg);
  line-height: 1.75;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
  align-items: center;
  margin-bottom: 3rem;
}

.hero-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}
.trust-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: 500;
}
`

const metricStyles = `
.metrics-section {
  padding: 3rem 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-subtle);
}
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
}
@media (min-width: 768px) { .metrics-grid { grid-template-columns: repeat(4, 1fr); } }

.metric-card {
  padding: 2rem 1.5rem;
  text-align: center;
  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}
.metric-card:nth-child(2n) { border-right: none; }
@media (min-width: 768px) {
  .metric-card { border-right: 1px solid var(--color-border); border-bottom: none; }
  .metric-card:last-child { border-right: none; }
}

.metric-value {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  background: linear-gradient(135deg, #ffffff 0%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 0.5rem;
}
.metric-label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: 500;
  font-family: var(--font-mono);
}
`

const serviceStyles = `
.services-section { background: var(--color-bg); }

.section-header {
  margin-bottom: 4rem;
}
.section-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--color-text-primary);
  margin-top: 0.875rem;
  margin-bottom: 1rem;
}
.section-sub {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.7;
  max-width: 560px;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
@media (min-width: 640px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .services-grid { grid-template-columns: repeat(4, 1fr); } }

.service-card {
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: 1.75rem;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.service-card:hover {
  border-color: var(--color-border-accent);
  box-shadow: 0 0 40px rgba(124, 111, 255, 0.08);
  transform: translateY(-2px);
}

.service-icon { color: var(--color-accent); margin-bottom: 0.5rem; }

.service-tag {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent);
  background: var(--color-accent-subtle);
  border: 1px solid rgba(124, 111, 255, 0.2);
  border-radius: 999px;
  padding: 0.2rem 0.625rem;
  width: fit-content;
}

.service-title {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
}
.service-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-top: 0.25rem;
}
`

const caseStudyStyles = `
.case-study-section { background: var(--color-bg-subtle); }

.case-study-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  border-radius: var(--radius-2xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: 2.5rem;
}
@media (min-width: 1024px) {
  .case-study-card {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    padding: 3.5rem;
  }
}

.case-study-left { display: flex; flex-direction: column; gap: 1rem; }

.case-study-client {
  font-size: var(--text-2xl);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--color-text-primary);
}
.case-study-industry {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.case-study-block { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1.5rem; }
.case-study-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent);
}
.case-study-text { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.75; }

.case-study-right {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.case-study-result-text { font-size: var(--text-base); color: var(--color-text-secondary); line-height: 1.75; }

.case-study-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
}
.case-study-metric {
  border-radius: var(--radius-lg);
  background: var(--color-bg-subtle);
  border: 1px solid var(--color-border);
  padding: 1.25rem;
  text-align: center;
}
.case-study-metric-value {
  font-size: var(--text-xl);
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--color-text-primary);
  line-height: 1;
  margin-bottom: 0.375rem;
}
.case-study-metric-label {
  font-size: 0.65rem;
  font-family: var(--font-mono);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
`

const valueStyles = `
.value-props-section { background: var(--color-bg); }

.process-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}
@media (min-width: 1024px) { .process-grid { grid-template-columns: repeat(4, 1fr); } }

.process-step {}
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

.value-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 768px) { .value-grid { grid-template-columns: repeat(2, 1fr); } }

.value-prop {
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: 2rem;
  transition: all 0.25s ease;
}
.value-prop:hover {
  border-color: var(--color-border-hover);
  background: var(--color-surface-hover);
}
.value-num {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.2em;
  color: var(--color-accent);
  margin-bottom: 0.75rem;
}
.value-title {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}
.value-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.75; }
`

const ctaStyles = `
.cta-section { background: var(--color-bg-subtle); }
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
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 400px;
  background: radial-gradient(ellipse at center, rgba(124, 111, 255, 0.15) 0%, transparent 70%);
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
`

const footerStyles = `
.footer {
  border-top: 1px solid var(--color-border);
  padding: 4rem 0 2rem;
  background: var(--color-bg);
}
.footer-top {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--color-border);
}
@media (min-width: 768px) {
  .footer-top {
    grid-template-columns: 260px 1fr;
    gap: 4rem;
  }
}
.footer-brand { display: flex; flex-direction: column; gap: 1rem; }
.footer-brand-desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.7;
}
.footer-social { display: flex; gap: 0.75rem; margin-top: 0.5rem; }
.footer-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  transition: all 0.2s ease;
}
.footer-social-link:hover { border-color: var(--color-border-hover); color: var(--color-text-secondary); }

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
@media (min-width: 640px) { .footer-links { grid-template-columns: repeat(3, 1fr); } }

.footer-col { display: flex; flex-direction: column; gap: 0.625rem; }
.footer-col-head {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  margin-bottom: 0.25rem;
}
.footer-link {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  transition: color 0.2s ease;
  font-weight: 500;
}
.footer-link:hover { color: var(--color-text-secondary); }

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 2rem;
}
.footer-legal { display: flex; gap: 1.5rem; }
.footer-legal-link {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  transition: color 0.2s ease;
}
.footer-legal-link:hover { color: var(--color-text-secondary); }
`