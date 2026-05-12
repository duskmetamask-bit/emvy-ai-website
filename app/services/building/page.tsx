'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

/* ── DATA ─────────────────────────────────────────────── */

const whatWeBuild = [
  {
    id: 'mvp',
    title: 'MVP Development',
    desc: 'Ship a functional minimum viable product in weeks, not months. We build to your spec, with the AI capabilities that matter most.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    tag: 'Fast to market',
  },
  {
    id: 'prototype',
    title: 'AI-Powered Prototypes',
    desc: 'Turn your concept into a working demo you can show investors, users, or your team. Prove feasibility before committing resources.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    tag: 'Proof of concept',
  },
  {
    id: 'internal',
    title: 'Internal Tools',
    desc: 'AI-powered internal software that streamlines your operations — dashboards, automations, and workflows that your team actually uses.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    tag: 'Operations',
  },
  {
    id: 'ai-app',
    title: 'Innovative AI Apps',
    desc: 'Novel AI products that push boundaries — from new interfaces to entirely new categories. If you can imagine it, we can build it.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2z"/>
        <path d="M12 8v4l3 3"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    tag: 'Next-gen',
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Validate',
    desc: 'We stress-test your idea together — market fit, technical feasibility, and the AI components that actually create value.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 12l2 2 4-4"/>
        <circle cx="12" cy="12" r="10"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Prototype',
    desc: 'We build a working prototype that demonstrates your core concept. You can test it, show it, and refine it before full investment.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Build MVP',
    desc: 'Full development sprint to ship your MVP — production-ready code, AI integrations, and the polish needed to launch to real users.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Launch Support',
    desc: 'We stay involved post-launch — monitoring, iterating, and ensuring your product scales. Your success is our metric.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
]

const valueProps = [
  {
    num: '01',
    title: 'Technical partner, not just a vendor',
    desc: 'We treat your product like our own. Deep involvement in your vision, not just code-for-hire.',
  },
  {
    num: '02',
    title: 'Speed to market',
    desc: 'We move fast without cutting corners. MVPs in weeks, not quarters — validated by real users early.',
  },
  {
    num: '03',
    title: 'AI-native from day one',
    desc: 'AI capabilities are designed in from the start — not bolted on after the fact.',
  },
  {
    num: '04',
    title: 'Honest guidance',
    desc: 'We tell you what will work, what will not, and what is worth building. No fluff, no overpromising.',
  },
]

/* ── SECTION COMPONENTS ─────────────────────────────── */

function BuildCard({ item }: { item: typeof whatWeBuild[0] }) {
  return (
    <div className="build-card">
      <div className="build-icon">{item.icon}</div>
      <div className="build-tag">{item.tag}</div>
      <h3 className="build-title">{item.title}</h3>
      <p className="build-desc">{item.desc}</p>
    </div>
  )
}

function ProcessStep({ step }: { step: typeof processSteps[0] }) {
  return (
    <div className="process-step">
      <div className="process-step-icon">{step.icon}</div>
      <div className="process-num">{step.num}</div>
      <div className="process-title">{step.title}</div>
      <p className="process-desc">{step.desc}</p>
    </div>
  )
}

function ValueProp({ prop }: { prop: typeof valueProps[0] }) {
  return (
    <div className="value-prop">
      <div className="value-num">{prop.num}</div>
      <div className="value-title">{prop.title}</div>
      <p className="value-desc">{prop.desc}</p>
    </div>
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
            <span>AI Product Development · MVP · Prototypes</span>
          </div>

          <h1 className="hero-headline">
            Got an AI product idea?<br />
            <span className="headline-accent" data-text="Let's build it.">Let's build it.</span>
          </h1>

          <p className="hero-sub">
            For entrepreneurs with a vision who need a technical partner. We turn your concept into a production-ready product — fast.
          </p>

          <div className="hero-glow-orb" aria-hidden="true" />
          <div className="hero-actions">
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book free 15-min call
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

/* ── WHAT WE BUILD ─────────────────────────────────────── */
function WhatWeBuild() {
  return (
    <section className="section what-section" id="what">
      <div className="container">
        <div className="section-header">
          <span className="kicker">What we build</span>
          <h2 className="section-title">
            From idea to launch.<br />Across every type of AI product.
          </h2>
          <p className="section-sub">
            Whether you are starting from scratch or evolving an existing product, we build what you need — with AI at its core.
          </p>
        </div>

        <div className="build-grid">
          {whatWeBuild.map((item) => (
            <BuildCard key={item.id} item={item} />
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
            Validate → Prototype →<br />Build MVP → Launch.
          </h2>
          <p className="section-sub">
            We follow a proven four-phase approach to take your product from concept to market — with continuous feedback at every step.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <ProcessStep key={step.num} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── WHY US ─────────────────────────────────────────────── */
function WhyUs() {
  return (
    <section className="section why-section" id="why">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Why EMVY</span>
          <h2 className="section-title">
            Built by founders,<br />for founders.
          </h2>
          <p className="section-sub">
            We have been on your side of the table. We know what it takes to ship a product that matters — and what to avoid.
          </p>
        </div>

        <div className="value-grid">
          {valueProps.map((prop) => (
            <ValueProp key={prop.num} prop={prop} />
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
          <h2 className="cta-title">Have an idea? Let us build it.</h2>
          <p className="cta-sub">
            Book the free 15-minute call. Tell us what you are building — we will tell you honestly how to get there.
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
              <a href="/services/building" className="header-nav-link">Building</a>
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
            <a href="/services/ai-agents" className="mobile-nav-link" onClick={() => setOpen(false)}>AI Agents</a>
            <a href="/services/building" className="mobile-nav-link" onClick={() => setOpen(false)}>Building</a>
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
export default function Building() {
  return (
    <>
      <style>{heroStyles}</style>
      <style>{btnPrimaryStyles}</style>
      <style>{whatStyles}</style>
      <style>{processStyles}</style>
      <style>{valueStyles}</style>
      <style>{ctaStyles}</style>
      <style>{footerStyles}</style>
      <style>{headerStyles}</style>

      <div style={{ paddingTop: '2rem' }}>
        <Header />
        <main style={{ paddingTop: '0' }}>
          <Hero />
          <WhatWeBuild />
          <Process />
          <WhyUs />
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
.header-logo { display: flex; align-items: center; }
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
@media (min-width: 768px) { .header-cta { display: inline-flex; } }
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
  padding: 0 0.5rem;
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
  padding-top: 10rem;
  padding-bottom: 5rem;
  overflow: hidden;
}
@media (min-width: 768px) { .hero { padding-top: 11rem; padding-bottom: 7rem; } }

.hero-mesh-1 {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124, 111, 255, 0.18) 0%, transparent 60%);
  z-index: 0;
  pointer-events: none;
}
.hero-mesh-2 {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 50% 40% at 80% 60%, rgba(96, 80, 220, 0.12) 0%, transparent 60%);
  z-index: 0;
  pointer-events: none;
}
.hero-mesh-3 {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 40% 30% at 20% 80%, rgba(124, 111, 255, 0.08) 0%, transparent 60%);
  z-index: 0;
  pointer-events: none;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 60px 60px;
  z-index: 0;
  pointer-events: none;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 80%);
}

.hero-shape {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  filter: blur(40px);
  opacity: 0.4;
  animation: floatShape 8s ease-in-out infinite;
}
.hero-shape-1 {
  width: 300px;
  height: 300px;
  top: -80px;
  right: -60px;
  background: radial-gradient(circle, rgba(124, 111, 255, 0.25) 0%, transparent 70%);
  animation-delay: 0s;
}
.hero-shape-2 {
  width: 200px;
  height: 200px;
  bottom: 0px;
  left: -80px;
  background: radial-gradient(circle, rgba(96, 80, 220, 0.2) 0%, transparent 70%);
  animation-delay: -3s;
}
.hero-shape-3 {
  width: 150px;
  height: 150px;
  top: 40%;
  right: 15%;
  background: radial-gradient(circle, rgba(124, 111, 255, 0.15) 0%, transparent 70%);
  animation-delay: -5s;
}
@keyframes floatShape {
  0%, 100% { transform: translateY(0px) scale(1); }
  33% { transform: translateY(-20px) scale(1.05); }
  66% { transform: translateY(10px) scale(0.97); }
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
  background: linear-gradient(135deg, #4F8EFF 0%, #A855F7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}
.headline-accent::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(135deg, #4F8EFF 0%, #A855F7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: blur(24px);
  opacity: 0.5;
  z-index: -1;
}

.hero-glow-orb {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(79, 142, 255, 0.12) 0%, rgba(168, 85, 247, 0.06) 50%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  pointer-events: none;
  z-index: 0;
  animation: orbPulse 6s ease-in-out infinite;
  filter: blur(40px);
}
@keyframes orbPulse {
  0%, 100% { opacity: 0.6; transform: translate(-50%, -60%) scale(1); }
  50% { opacity: 1; transform: translate(-50%, -60%) scale(1.1); }
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

.hero-view-pricing {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: 500;
  transition: color 0.2s ease;
}
.hero-view-pricing:hover { color: var(--color-text-secondary); }
`

const btnPrimaryStyles = `
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, #4F8EFF 0%, #7c6fff 50%, #A855F7 100%);
  color: #fff;
  font-size: var(--text-sm);
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 24px rgba(79, 142, 255, 0.3), 0 4px 12px rgba(79, 142, 255, 0.2);
}
.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.25s ease;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 40px rgba(79, 142, 255, 0.45), 0 8px 20px rgba(79, 142, 255, 0.3);
}
.btn-primary:hover::before { opacity: 1; }
.btn-primary:active { transform: translateY(0px); }
.btn-primary.compact {
  padding: 0.5rem 1rem;
  font-size: var(--text-xs);
}
.btn-primary.w-fit { width: fit-content; }
`

const whatStyles = `
.what-section {
  background: var(--color-bg);
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
.what-section::before {
  content: '';
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, transparent, var(--color-bg));
  pointer-events: none;
}

.section-header {
  margin-bottom: 4rem;
}
.section-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;
  background: linear-gradient(135deg, #4F8EFF 0%, #A855F7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: 0.875rem;
  margin-bottom: 1rem;
}
.section-sub {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.7;
  max-width: 560px;
}

.build-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 640px) { .build-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; } }
@media (min-width: 1024px) { .build-grid { grid-template-columns: repeat(4, 1fr); gap: 1.5rem; } }

.build-card {
  border-radius: var(--radius-xl);
  border: 1px solid rgba(79, 142, 255, 0.15);
  background: var(--color-surface);
  padding: 2rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 100%;
  overflow: hidden;
  position: relative;
}
.build-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: var(--radius-xl);
  background: linear-gradient(135deg, rgba(79, 142, 255, 0.3) 0%, rgba(168, 85, 247, 0.15) 50%, rgba(79, 142, 255, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}
.build-card:hover {
  border-color: rgba(79, 142, 255, 0.4);
  box-shadow: 0 0 50px rgba(79, 142, 255, 0.15), 0 0 100px rgba(79, 142, 255, 0.08), 0 20px 40px rgba(0,0,0,0.4);
  transform: translateY(-4px);
}
.build-card:hover::before { opacity: 0.5; }
.build-icon { color: var(--color-accent); margin-bottom: 0.5rem; }
.build-tag {
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
.build-title {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
}
.build-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-top: 0.25rem;
}
`

const processStyles = `
.process-section {
  background: var(--color-bg-subtle);
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
.process-section::before {
  content: '';
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, var(--color-bg), var(--color-bg-subtle));
  pointer-events: none;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
@media (min-width: 1024px) { .process-grid { grid-template-columns: repeat(4, 1fr); gap: 1.5rem; } }

.process-step {
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: 1.75rem;
  transition: all 0.25s ease;
  height: 100%;
}
.process-step:hover {
  border-color: var(--color-border-hover);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}
.process-step-icon {
  color: var(--color-accent);
  margin-bottom: 1rem;
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
`

const valueStyles = `
.why-section {
  background: var(--color-bg);
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
.why-section::before {
  content: '';
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, var(--color-bg-subtle), var(--color-bg));
  pointer-events: none;
}

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
.cta-section {
  background: var(--color-bg);
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
.cta-section::before {
  content: '';
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
  height: 80px;
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
  background: linear-gradient(135deg, #4F8EFF 0%, #A855F7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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