'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

/* ── DATA ─────────────────────────────────────────────── */

const auditTypes = [
  {
    title: 'Operations Audit',
    desc: 'We map your internal workflows — from lead handling to job completion — and identify exactly where AI can cut costs and speed things up.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    title: 'Customer Service Audit',
    desc: 'How many enquiries never get answered? Where do conversations drop off? We find the gaps and show you exactly how AI fills them.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    title: 'Sales & Lead Audit',
    desc: 'Every lost lead is revenue you didn\'t have to chase. We audit your sales pipeline and show where AI can recover the leads you\'re currently missing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <line x1="12" y1="20" x2="12" y2="10"/><path d="M18 20V16"/><path d="M6 20V16"/>
      </svg>
    ),
  },
  {
    title: 'AI Readiness Assessment',
    desc: 'Not sure where to start? This is the fast version — a 360° view of where your business sits and what the highest-value first step is.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
  },
]

const processSteps = [
  { num: '01', title: 'Initial call', desc: 'We learn about your business, your pain points, and what success looks like for you.' },
  { num: '02', title: 'Deep dive', desc: 'A 2-hour workshop where we map your current processes, tools, and data flows.' },
  { num: '03', title: 'Analysis', desc: 'We analyse everything and score each opportunity by impact, effort, and cost.' },
  { num: '04', title: 'Delivery', desc: 'A full written report with prioritised recommendations and a clear first-step roadmap.' },
]

const deliverables = [
  { title: 'Written Audit Report', desc: 'A full breakdown of your current state, the opportunities, and what matters most.' },
  { title: 'Prioritised Roadmap', desc: 'Ranked by impact and ease — so you know exactly what to tackle first.' },
  { title: 'AI Quick Wins', desc: 'We always surface 2-3 things you can implement immediately that create immediate value.' },
  { title: 'Investment Estimate', desc: 'For each recommendation, we give you a rough investment range — so you can plan.' },
]

/* ── SECTION COMPONENTS ─────────────────────────────── */

function AuditCard({ audit }: { audit: typeof auditTypes[0] }) {
  return (
    <div className="audit-card">
      <div className="audit-icon">{audit.icon}</div>
      <h3 className="audit-title">{audit.title}</h3>
      <p className="audit-desc">{audit.desc}</p>
    </div>
  )
}

function ProcessStep({ step }: { step: typeof processSteps[0] }) {
  return (
    <div className="process-step">
      <div className="process-num">{step.num}</div>
      <div className="process-title">{step.title}</div>
      <p className="process-desc">{step.desc}</p>
    </div>
  )
}

function Deliverable({ item }: { item: typeof deliverables[0] }) {
  return (
    <div className="deliverable">
      <div className="deliverable-check">✓</div>
      <div>
        <div className="deliverable-title">{item.title}</div>
        <p className="deliverable-desc">{item.desc}</p>
      </div>
    </div>
  )
}

/* ── HERO ─────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-mesh-1" aria-hidden="true" />
      <div className="hero-mesh-2" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-shape hero-shape-1" aria-hidden="true" />
      <div className="hero-shape hero-shape-2" aria-hidden="true" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>AI Audit · Assessment · Roadmap</span>
          </div>
          <h1 className="hero-headline">
            Discover what&apos;s possible<br />
            with <span className="headline-accent" data-text="AI in your business">AI in your business</span>.
          </h1>
          <p className="hero-sub">
            We audit your operations, identify the highest-value AI opportunities, and deliver a prioritised roadmap — so you know exactly where to start.
          </p>
          <div className="hero-glow-orb" aria-hidden="true" />
          <div className="hero-actions">
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book free audit call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/pricing" className="hero-view-pricing">View pricing</a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── WHAT WE AUDIT ────────────────────────────────────── */
function WhatWeAudit() {
  return (
    <section className="section audit-section" id="what-we-audit">
      <div className="container">
        <div className="section-header">
          <span className="kicker">What we audit</span>
          <h2 className="section-title">
            Four dimensions.<br />Complete picture.
          </h2>
          <p className="section-sub">
            We don&apos;t just look at your tools — we look at how your team works, where the gaps are, and what the biggest opportunities are to add AI.
          </p>
        </div>
        <div className="audit-grid">
          {auditTypes.map((a) => (
            <AuditCard key={a.title} audit={a} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── WHAT YOU GET ─────────────────────────────────────── */
function WhatYouGet() {
  return (
    <section className="section deliverables-section" id="what-you-get">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Deliverables</span>
          <h2 className="section-title">
            More than a report.<br />A working roadmap.
          </h2>
          <p className="section-sub">
            We don&apos;t just tell you what&apos;s wrong — we give you a clear, prioritised plan you can act on immediately.
          </p>
        </div>
        <div className="deliverables-grid">
          {deliverables.map((d) => (
            <Deliverable key={d.title} item={d} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── PROCESS ────────────────────────────────────────────── */
function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-header">
          <span className="kicker">How it works</span>
          <h2 className="section-title">
            Four steps from<br />start to roadmap.
          </h2>
          <p className="section-sub">
            We keep it fast and focused. Most audits are complete within two weeks.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((p) => (
            <ProcessStep key={p.num} step={p} />
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
          <span className="kicker" style={{ justifyContent: 'center' }}>Start here</span>
          <h2 className="cta-title">Not sure where AI fits in your business?</h2>
          <p className="cta-sub">
            Book the free 15-minute call. We&apos;ll tell you honestly whether an audit makes sense — and if it does, we&apos;ll scope it properly before you spend anything.
          </p>
          <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary cta-btn">
            Book free audit call
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

/* ── HEADER ─────────────────────────────────────────────── */
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
              <a href="/services/ai-audits" className="header-nav-link">AI Audits</a>
              <a href="/pricing" className="header-nav-link">Pricing</a>
              <a href="/about" className="header-nav-link">About</a>
              <a href="/blog" className="header-nav-link">Blog</a>
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
            <a href="/services/ai-audits" className="mobile-nav-link" onClick={() => setOpen(false)}>AI Audits</a>
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

/* ── PAGE ──────────────────────────────────────────────── */
export default function AIAudits() {
  return (
    <>
      <style>{heroStyles}</style>
      <style>{btnPrimaryStyles}</style>
      <style>{auditStyles}</style>
      <style>{processStyles}</style>
      <style>{deliverableStyles}</style>
      <style>{ctaStyles}</style>
      <style>{footerStyles}</style>
      <style>{headerStyles}</style>

      <div style={{ paddingTop: '2rem' }}>
        <Header />
        <main style={{ paddingTop: '0' }}>
          <Hero />
          <WhatWeAudit />
          <WhatYouGet />
          <Process />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}

/* ── CSS STRING BLOCKS ──────────────────────────────────── */

const headerStyles = `
.header {
  position: sticky; top: 0; z-index: 100;
  height: var(--header-h);
  border-bottom: 1px solid var(--color-border);
  background: rgba(6, 6, 10, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
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
.header-hamburger { display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: var(--radius-md); background: transparent; border: 1px solid var(--color-border); color: var(--color-text-muted); cursor: pointer; transition: all 0.2s ease; }
.header-hamburger:hover { border-color: var(--color-border-hover); color: var(--color-text-secondary); }
@media (min-width: 768px) { .header-hamburger { display: none; } }
.mobile-nav { position: fixed; top: var(--header-h); left: 0; right: 0; z-index: 99; background: rgba(6, 6, 10, 0.97); backdrop-filter: blur(20px); border-bottom: 1px solid var(--color-border); padding: 1.5rem; }
.mobile-nav-inner { display: flex; flex-direction: column; gap: 0.75rem; max-width: var(--max-width); margin: 0 auto; padding: 0 0.5rem; }
.mobile-nav-link { font-size: var(--text-base); color: var(--color-text-secondary); font-weight: 500; padding: 0.5rem 0; }
.mobile-nav-link:hover { color: var(--color-text-primary); }
`

const heroStyles = `
.hero {
  position: relative; padding: 5rem 0 4rem; overflow: hidden;
  background: var(--color-bg);
}
.hero-mesh-1 {
  position: absolute; top: -20%; left: -10%; width: 60%; height: 80%;
  background: radial-gradient(ellipse at center, rgba(79, 142, 255, 0.08) 0%, transparent 70%);
  pointer-events: none;
}
.hero-mesh-2 {
  position: absolute; top: 10%; right: -20%; width: 50%; height: 70%;
  background: radial-gradient(ellipse at center, rgba(168, 85, 247, 0.06) 0%, transparent 70%);
  pointer-events: none;
}
.hero-grid {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
}
.hero-shape-1 {
  position: absolute; bottom: -80px; left: 20%; width: 300px; height: 200px;
  background: radial-gradient(ellipse at center, rgba(79, 142, 255, 0.15) 0%, transparent 70%);
  filter: blur(40px);
}
.hero-shape-2 {
  position: absolute; top: 0; right: 15%; width: 200px; height: 300px;
  background: radial-gradient(ellipse at center, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
  filter: blur(60px);
}
.hero-inner { position: relative; z-index: 1; max-width: 800px; }
.hero-badge {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.375rem 1rem; border-radius: 9999px;
  border: 1px solid rgba(79, 142, 255, 0.25);
  background: rgba(79, 142, 255, 0.06);
  font-size: 0.75rem; font-weight: 600; color: #7eb8ff;
  letter-spacing: 0.05em; text-transform: uppercase;
  margin-bottom: 2rem;
}
.hero-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #4F8EFF; box-shadow: 0 0 8px #4F8EFF; }
.hero-headline {
  font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800; line-height: 1.1;
  color: var(--color-text-primary); margin-bottom: 1.5rem; letter-spacing: -0.02em;
}
.headline-accent {
  background: linear-gradient(135deg, #4F8EFF 0%, #A855F7 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.hero-sub { font-size: 1.125rem; color: var(--color-text-secondary); max-width: 560px; line-height: 1.7; margin-bottom: 2.5rem; }
.hero-glow-orb {
  position: absolute; top: -60px; right: -60px; width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(79, 142, 255, 0.12) 0%, transparent 60%);
  pointer-events: none;
}
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; }
.hero-view-pricing { font-size: 0.875rem; color: var(--color-text-muted); font-weight: 500; transition: color 0.2s; }
.hero-view-pricing:hover { color: var(--color-text-secondary); }
`

const btnPrimaryStyles = `
.btn-primary {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.75rem 1.5rem; border-radius: var(--radius-lg);
  background: linear-gradient(135deg, #4F8EFF 0%, #A855F7 100%);
  color: #fff; font-size: 0.875rem; font-weight: 600;
  text-decoration: none; border: none; cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 0 20px rgba(79, 142, 255, 0.2);
}
.btn-primary:hover { transform: translateY(-1px); box-shadow: 0 0 30px rgba(79, 142, 255, 0.35); }
.btn-primary.compact { padding: 0.5rem 1rem; font-size: 0.8125rem; }
`

const auditStyles = `
.section { padding: 5rem 0; }
.section-header { text-align: center; max-width: 640px; margin: 0 auto 3rem; }
.kicker { display: inline-block; font-size: 0.75rem; font-weight: 700; color: #7eb8ff; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.75rem; }
.section-title { font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 800; color: var(--color-text-primary); line-height: 1.2; margin-bottom: 1rem; }
.section-sub { font-size: 1rem; color: var(--color-text-secondary); line-height: 1.7; }
.audit-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; }
.audit-card {
  padding: 2rem; border-radius: var(--radius-xl);
  border: 1px solid rgba(79, 142, 255, 0.2);
  background: var(--color-surface);
  transition: all 0.25s ease;
}
.audit-card:hover { border-color: rgba(79, 142, 255, 0.4); box-shadow: 0 0 30px rgba(79, 142, 255, 0.1); }
.audit-icon { color: #4F8EFF; margin-bottom: 1rem; }
.audit-title { font-size: 1.125rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.75rem; }
.audit-desc { font-size: 0.9375rem; color: var(--color-text-secondary); line-height: 1.6; }
`

const processStyles = `
.process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; }
.process-step { padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid rgba(79, 142, 255, 0.15); background: rgba(79, 142, 255, 0.03); }
.process-num { font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #4F8EFF 0%, #A855F7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 0.75rem; }
.process-title { font-size: 1rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.5rem; }
.process-desc { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.6; }
`

const deliverableStyles = `
.deliverables-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
.deliverable { display: flex; gap: 1rem; align-items: flex-start; padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid rgba(79, 142, 255, 0.15); background: var(--color-surface); }
.deliverable-check { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #4F8EFF, #A855F7); display: flex; align-items: center; justify-content: center; font-size: 0.875rem; font-weight: 700; color: white; flex-shrink: 0; margin-top: 2px; }
.deliverable-title { font-size: 1rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.25rem; }
.deliverable-desc { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.6; }
`

const ctaStyles = `
.cta-section { padding: 5rem 0; }
.cta-inner { position: relative; text-align: center; max-width: 640px; margin: 0 auto; padding: 3rem 2rem; border-radius: var(--radius-2xl); border: 1px solid rgba(79, 142, 255, 0.25); background: var(--color-surface); overflow: hidden; }
.cta-glow { position: absolute; top: -50%; left: 50%; transform: translateX(-50%); width: 300px; height: 300px; background: radial-gradient(circle, rgba(79, 142, 255, 0.1) 0%, transparent 60%); pointer-events: none; }
.cta-title { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 800; color: var(--color-text-primary); margin-bottom: 1rem; }
.cta-sub { font-size: 1rem; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 2rem; }
.cta-btn { margin-top: 0.5rem; }
`

const footerStyles = `
.footer { border-top: 1px solid var(--color-border); padding: 3rem 0 2rem; }
.footer-top { display: flex; flex-wrap: wrap; gap: 3rem; justify-content: space-between; margin-bottom: 3rem; }
.footer-brand { max-width: 280px; }
.footer-logo { display: inline-block; margin-bottom: 1rem; }
.footer-brand-desc { font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.5rem; }
.footer-social { display: flex; gap: 1rem; }
.footer-social-link { color: var(--color-text-muted); transition: color 0.2s; }
.footer-social-link:hover { color: var(--color-text-secondary); }
.footer-links { display: flex; gap: 3rem; flex-wrap: wrap; }
.footer-col { display: flex; flex-direction: column; gap: 0.75rem; }
.footer-col-head { font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.25rem; }
.footer-link { font-size: 0.875rem; color: var(--color-text-secondary); transition: color 0.2s; }
.footer-link:hover { color: var(--color-text-primary); }
.footer-bottom { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding-top: 2rem; border-top: 1px solid var(--color-border); }
.footer-legal { display: flex; gap: 1.5rem; }
.footer-legal-link { font-size: 0.8125rem; color: var(--color-text-muted); transition: color 0.2s; }
.footer-legal-link:hover { color: var(--color-text-secondary); }
.mono { font-family: var(--font-mono); font-size: 0.8125rem; color: var(--color-text-muted); }
`