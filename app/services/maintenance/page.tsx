'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

/* ── DATA ─────────────────────────────────────────────── */

const plans = [
  {
    name: 'Starter',
    price: '$500',
    period: '/mo',
    desc: 'For businesses with 1-2 AI systems that need basic monitoring.',
    features: [
      'Weekly health check',
      'Monthly performance review',
      'Email support (48hr response)',
      '1 hour optimisation per month',
    ],
  },
  {
    name: 'Growth',
    price: '$1,500',
    period: '/mo',
    desc: 'For businesses running 3-5 AI systems across multiple channels.',
    features: [
      'Weekly health check',
      'Weekly performance review',
      'Priority support (24hr response)',
      '3 hours optimisation per month',
      'Quarterly strategy review',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$3,000',
    period: '/mo',
    desc: 'For businesses with complex AI stacks and mission-critical systems.',
    features: [
      'Real-time monitoring',
      'Dedicated Slack support',
      'Unlimited optimisation',
      'Monthly strategy sessions',
      'Quarterly comprehensive audit',
      'SLA guarantee',
    ],
  },
]

const whyMatters = [
  {
    title: 'AI Drift',
    desc: 'AI models and integrations change over time. Without maintenance, performance degrades and errors increase.',
    icon: '📉',
  },
  {
    title: 'Tool Updates',
    desc: 'Your CRM, phone system, and other tools update constantly. Agents need to be kept in sync.',
    icon: '🔄',
  },
  {
    title: 'Process Changes',
    desc: 'As your business evolves, your AI systems need to evolve with it. Maintenance keeps them aligned.',
    icon: '🔧',
  },
  {
    title: 'New Opportunities',
    desc: 'Regular reviews surface new ways to extend your AI — increasing value over time.',
    icon: '🚀',
  },
]

const processSteps = [
  { num: '01', title: 'Onboard', desc: 'We review your current AI systems, document their configurations, and set up monitoring.' },
  { num: '02', title: 'Monitor', desc: 'Weekly health checks catch issues before they become problems. We track performance, error rates, and call quality.' },
  { num: '03', title: 'Optimise', desc: 'Monthly optimisation sessions improve performance, fix issues, and extend capabilities.' },
  { num: '04', title: 'Report', desc: 'Monthly written reports on system health, performance trends, and recommendations.' },
]

/* ── SECTION COMPONENTS ─────────────────────────────── */

function PlanCard({ plan }: { plan: typeof plans[0] }) {
  return (
    <div className={`plan-card ${plan.featured ? 'featured' : ''}`}>
      {plan.featured && <div className="plan-badge">Most Popular</div>}
      <div className="plan-name">{plan.name}</div>
      <div className="plan-price">
        <span className="price-amount">{plan.price}</span>
        <span className="price-period">{plan.period}</span>
      </div>
      <p className="plan-desc">{plan.desc}</p>
      <ul className="plan-features">
        {plan.features.map((f) => (
          <li key={f} className="plan-feature">✓ {f}</li>
        ))}
      </ul>
      <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className={`btn-primary ${plan.featured ? '' : 'outline'}`}>
        Get started
      </a>
    </div>
  )
}

function WhyCard({ item }: { item: typeof whyMatters[0] }) {
  return (
    <div className="why-card">
      <div className="why-icon">{item.icon}</div>
      <h3 className="why-title">{item.title}</h3>
      <p className="why-desc">{item.desc}</p>
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
            <span>Maintenance · Support · Optimisation</span>
          </div>
          <h1 className="hero-headline">
            Your AI systems,<br />
            <span className="headline-accent" data-text="maintained and optimised">maintained and optimised</span>.
          </h1>
          <p className="hero-sub">
            AI isn&apos;t a set-and-forget tool. Without ongoing maintenance, it drifts, breaks, and underperforms. We keep your systems running at their best — year after year.
          </p>
          <div className="hero-glow-orb" aria-hidden="true" />
          <div className="hero-actions">
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book maintenance call
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

/* ── WHY MAINTENANCE MATTERS ──────────────────────────── */
function WhyMaintenance() {
  return (
    <section className="section why-section" id="why">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Why maintenance matters</span>
          <h2 className="section-title">
            AI drifts.<br />Systems break.<br />Performance drops.
          </h2>
          <p className="section-sub">
            Without active maintenance, the AI systems you&apos;ve invested in slowly stop working as well as they did on day one.
          </p>
        </div>
        <div className="why-grid">
          {whyMatters.map((w) => (
            <WhyCard key={w.title} item={w} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── PLANS ─────────────────────────────────────────────── */
function Plans() {
  return (
    <section className="section plans-section" id="plans">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Pricing</span>
          <h2 className="section-title">
            Plans that scale<br />with your AI stack.
          </h2>
          <p className="section-sub">
            Whether you have one phone agent or ten automation workflows, we have a plan that fits.
          </p>
        </div>
        <div className="plans-grid">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
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
            Simple, structured,<br />always on.
          </h2>
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
          <span className="kicker" style={{ justifyContent: 'center' }}>Get started</span>
          <h2 className="cta-title">Already running AI systems?</h2>
          <p className="cta-sub">
            Let us take over the maintenance. You focus on your business — we keep your AI running at its best.
          </p>
          <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary cta-btn">
            Book free call
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
              <a href="/services/maintenance" className="header-nav-link">Maintenance</a>
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
            <a href="/services/maintenance" className="mobile-nav-link" onClick={() => setOpen(false)}>Maintenance</a>
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
export default function Maintenance() {
  return (
    <>
      <style>{heroStyles}</style>
      <style>{btnPrimaryStyles}</style>
      <style>{whyStyles}</style>
      <style>{planStyles}</style>
      <style>{processStyles}</style>
      <style>{ctaStyles}</style>
      <style>{footerStyles}</style>
      <style>{headerStyles}</style>

      <div style={{ paddingTop: '2rem' }}>
        <Header />
        <main style={{ paddingTop: '0' }}>
          <Hero />
          <WhyMaintenance />
          <Plans />
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
.header { position: sticky; top: 0; z-index: 100; height: var(--header-h); border-bottom: 1px solid var(--color-border); background: rgba(6, 6, 10, 0.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
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
.hero { position: relative; padding: 5rem 0 4rem; overflow: hidden; background: var(--color-bg); }
.hero-mesh-1 { position: absolute; top: -20%; left: -10%; width: 60%; height: 80%; background: radial-gradient(ellipse at center, rgba(79, 142, 255, 0.08) 0%, transparent 70%); pointer-events: none; }
.hero-mesh-2 { position: absolute; top: 10%; right: -20%; width: 50%; height: 70%; background: radial-gradient(ellipse at center, rgba(168, 85, 247, 0.06) 0%, transparent 70%); pointer-events: none; }
.hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 60px 60px; mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%); }
.hero-shape-1 { position: absolute; bottom: -80px; left: 20%; width: 300px; height: 200px; background: radial-gradient(ellipse at center, rgba(79, 142, 255, 0.15) 0%, transparent 70%); filter: blur(40px); }
.hero-shape-2 { position: absolute; top: 0; right: 15%; width: 200px; height: 300px; background: radial-gradient(ellipse at center, rgba(168, 85, 247, 0.1) 0%, transparent 70%); filter: blur(60px); }
.hero-inner { position: relative; z-index: 1; max-width: 800px; }
.hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.375rem 1rem; border-radius: 9999px; border: 1px solid rgba(79, 142, 255, 0.25); background: rgba(79, 142, 255, 0.06); font-size: 0.75rem; font-weight: 600; color: #7eb8ff; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 2rem; }
.hero-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #4F8EFF; box-shadow: 0 0 8px #4F8EFF; }
.hero-headline { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800; line-height: 1.1; color: var(--color-text-primary); margin-bottom: 1.5rem; letter-spacing: -0.02em; }
.headline-accent { background: linear-gradient(135deg, #4F8EFF 0%, #A855F7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero-sub { font-size: 1.125rem; color: var(--color-text-secondary); max-width: 560px; line-height: 1.7; margin-bottom: 2.5rem; }
.hero-glow-orb { position: absolute; top: -60px; right: -60px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(79, 142, 255, 0.12) 0%, transparent 60%); pointer-events: none; }
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; }
.hero-view-pricing { font-size: 0.875rem; color: var(--color-text-muted); font-weight: 500; transition: color 0.2s; }
.hero-view-pricing:hover { color: var(--color-text-secondary); }
`

const btnPrimaryStyles = `
.btn-primary { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; border-radius: var(--radius-lg); background: linear-gradient(135deg, #4F8EFF 0%, #A855F7 100%); color: #fff; font-size: 0.875rem; font-weight: 600; text-decoration: none; border: none; cursor: pointer; transition: all 0.25s ease; box-shadow: 0 0 20px rgba(79, 142, 255, 0.2); }
.btn-primary:hover { transform: translateY(-1px); box-shadow: 0 0 30px rgba(79, 142, 255, 0.35); }
.btn-primary.compact { padding: 0.5rem 1rem; font-size: 0.8125rem; }
.btn-primary.outline { background: transparent; border: 1px solid rgba(79, 142, 255, 0.3); color: #7eb8ff; }
.btn-primary.outline:hover { background: rgba(79, 142, 255, 0.1); transform: translateY(-1px); }
`

const whyStyles = `
.section { padding: 5rem 0; }
.section-header { text-align: center; max-width: 640px; margin: 0 auto 3rem; }
.kicker { display: inline-block; font-size: 0.75rem; font-weight: 700; color: #7eb8ff; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.75rem; }
.section-title { font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 800; color: var(--color-text-primary); line-height: 1.2; margin-bottom: 1rem; }
.section-sub { font-size: 1rem; color: var(--color-text-secondary); line-height: 1.7; }
.why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
.why-card { padding: 1.75rem; border-radius: var(--radius-xl); border: 1px solid rgba(79, 142, 255, 0.15); background: var(--color-surface); transition: all 0.25s ease; }
.why-card:hover { border-color: rgba(79, 142, 255, 0.3); box-shadow: 0 0 20px rgba(79, 142, 255, 0.08); }
.why-icon { font-size: 1.5rem; margin-bottom: 1rem; }
.why-title { font-size: 1.125rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.5rem; }
.why-desc { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.6; }
`

const planStyles = `
.plans-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
.plan-card { position: relative; padding: 2rem; border-radius: var(--radius-xl); border: 1px solid rgba(79, 142, 255, 0.15); background: var(--color-surface); display: flex; flex-direction: column; }
.plan-card.featured { border-color: rgba(79, 142, 255, 0.4); box-shadow: 0 0 40px rgba(79, 142, 255, 0.1); }
.plan-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); padding: 0.25rem 1rem; border-radius: 9999px; background: linear-gradient(135deg, #4F8EFF, #A855F7); font-size: 0.75rem; font-weight: 700; color: white; white-space: nowrap; }
.plan-name { font-size: 1rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.75rem; }
.plan-price { display: flex; align-items: baseline; gap: 0.25rem; margin-bottom: 0.75rem; }
.price-amount { font-size: 2.5rem; font-weight: 800; color: var(--color-text-primary); }
.price-period { font-size: 0.875rem; color: var(--color-text-muted); }
.plan-desc { font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 1.5rem; }
.plan-features { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 2rem; flex: 1; }
.plan-feature { font-size: 0.875rem; color: var(--color-text-secondary); }
`

const processStyles = `
.process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; }
.process-step { padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid rgba(79, 142, 255, 0.15); background: rgba(79, 142, 255, 0.03); }
.process-num { font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #4F8EFF 0%, #A855F7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 0.75rem; }
.process-title { font-size: 1rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.5rem; }
.process-desc { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.6; }
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