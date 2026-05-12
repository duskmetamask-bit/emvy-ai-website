'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

/* ── DATA ─────────────────────────────────────────────── */

const packages = [
  {
    name: 'Single Feature',
    price: '$1,500',
    desc: 'One new capability for your existing AI system.',
    features: [
      'Single new agent type or workflow',
      'New integration with one tool',
      '2-week delivery',
      '1 month of support',
    ],
    tag: 'Start here',
  },
  {
    name: 'Build Package',
    price: '$3,000 – $5,000',
    desc: 'Multiple new capabilities across your AI stack.',
    features: [
      '2-4 new agent types or workflows',
      'Multi-tool integration',
      '4-6 week delivery',
      '3 months of support',
      'Full documentation',
    ],
    tag: 'Most common',
    featured: true,
  },
  {
    name: 'Full Expansion',
    price: '$8,000 – $15,000',
    desc: 'Major AI expansion across new channels and departments.',
    features: [
      '5+ new agent types or workflows',
      'Full system integration',
      '8-12 week delivery',
      '6 months of support',
      'Team training',
      'Strategy sessions',
    ],
    tag: 'Enterprise',
  },
]

const whenToExpand = [
  {
    title: 'New use cases emerge',
    desc: 'You discover a new problem AI could solve — we build it and add it to your existing system.',
  },
  {
    title: 'New departments need AI',
    desc: 'Sales, HR, operations — when new teams need AI capabilities, we extend your existing stack.',
  },
  {
    title: 'New channels open',
    desc: 'New platforms, new customer touchpoints — we add them to your AI system as they appear.',
  },
  {
    title: 'Volume increases',
    desc: 'When your AI needs to handle more conversations, we scale it up without rebuilding from scratch.',
  },
]

const howItWorks = [
  { num: '01', title: 'Assessment', desc: 'We review your current AI stack and identify what to add and why.' },
  { num: '02', title: 'Scope', desc: 'We define exactly what will be built, how long it will take, and what it will cost.' },
  { num: '03', title: 'Build', desc: 'We build the new capability using your existing infrastructure where possible.' },
  { num: '04', title: 'Integrate', desc: 'We connect it to your existing systems — CRM, calendar, communications, and more.' },
  { num: '05', title: 'Deploy & Support', desc: 'We go live, monitor performance, and provide ongoing support.' },
]

/* ── SECTION COMPONENTS ─────────────────────────────── */

function PackageCard({ pkg }: { pkg: typeof packages[0] }) {
  return (
    <div className={`pkg-card ${pkg.featured ? 'featured' : ''}`}>
      {pkg.tag && <div className="pkg-tag">{pkg.tag}</div>}
      <div className="pkg-name">{pkg.name}</div>
      <div className="pkg-price">{pkg.price}</div>
      <p className="pkg-desc">{pkg.desc}</p>
      <ul className="pkg-features">
        {pkg.features.map((f) => (
          <li key={f} className="pkg-feature">✓ {f}</li>
        ))}
      </ul>
      <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
        Get started
      </a>
    </div>
  )
}

function WhenCard({ item }: { item: typeof whenToExpand[0] }) {
  return (
    <div className="when-card">
      <div className="when-dot" />
      <div>
        <h3 className="when-title">{item.title}</h3>
        <p className="when-desc">{item.desc}</p>
      </div>
    </div>
  )
}

function StepCard({ step }: { step: typeof howItWorks[0] }) {
  return (
    <div className="step-card">
      <div className="step-num">{step.num}</div>
      <div className="step-title">{step.title}</div>
      <p className="step-desc">{step.desc}</p>
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
            <span>Additional Builds · Expansion · Scale</span>
          </div>
          <h1 className="hero-headline">
            Extend your AI systems<br />
            as your <span className="headline-accent" data-text="business grows">business grows</span>.
          </h1>
          <p className="hero-sub">
            Your AI needs will evolve. New use cases, new channels, new departments — we build on top of what you already have, not against it.
          </p>
          <div className="hero-glow-orb" aria-hidden="true" />
          <div className="hero-actions">
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book expansion call
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

/* ── WHEN TO EXPAND ────────────────────────────────────── */
function WhenToExpand() {
  return (
    <section className="section when-section" id="when">
      <div className="container">
        <div className="section-header">
          <span className="kicker">When to expand</span>
          <h2 className="section-title">
            Four signals it&apos;s time<br />to add more AI.
          </h2>
          <p className="section-sub">
            Additional builds aren&apos;t for when things are broken — they&apos;re for when you&apos;re growing and need AI to grow with you.
          </p>
        </div>
        <div className="when-grid">
          {whenToExpand.map((w) => (
            <WhenCard key={w.title} item={w} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── PACKAGES ───────────────────────────────────────────── */
function Packages() {
  return (
    <section className="section packages-section" id="packages">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Pricing</span>
          <h2 className="section-title">
            Build packages that<br />match your ambition.
          </h2>
          <p className="section-sub">
            Whether you need one new agent or a complete AI expansion, we have a package that fits.
          </p>
        </div>
        <div className="packages-grid">
          {packages.map((p) => (
            <PackageCard key={p.name} pkg={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── HOW IT WORKS ────────────────────────────────────────── */
function HowItWorks() {
  return (
    <section className="section how-section" id="how">
      <div className="container">
        <div className="section-header">
          <span className="kicker">How it works</span>
          <h2 className="section-title">
            Same process,<br />new capabilities.
          </h2>
          <p className="section-sub">
            We use the same structured approach for additional builds as we do for new AI systems.
          </p>
        </div>
        <div className="how-grid">
          {howItWorks.map((s) => (
            <StepCard key={s.num} step={s} />
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
          <span className="kicker" style={{ justifyContent: 'center' }}>Ready to grow</span>
          <h2 className="cta-title">Ready to expand your AI?</h2>
          <p className="cta-sub">
            Book the free 15-minute call. We&apos;ll assess what you have, identify what to add, and give you a clear scope and price.
          </p>
          <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary cta-btn">
            Book expansion call
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
              <a href="/services/additional-builds" className="header-nav-link">Build More</a>
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
            <a href="/services/additional-builds" className="mobile-nav-link" onClick={() => setOpen(false)}>Build More</a>
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
export default function AdditionalBuilds() {
  return (
    <>
      <style>{heroStyles}</style>
      <style>{btnPrimaryStyles}</style>
      <style>{whenStyles}</style>
      <style>{pkgStyles}</style>
      <style>{howStyles}</style>
      <style>{ctaStyles}</style>
      <style>{footerStyles}</style>
      <style>{headerStyles}</style>

      <div style={{ paddingTop: '2rem' }}>
        <Header />
        <main style={{ paddingTop: '0' }}>
          <Hero />
          <WhenToExpand />
          <Packages />
          <HowItWorks />
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
`

const whenStyles = `
.section { padding: 5rem 0; }
.section-header { text-align: center; max-width: 640px; margin: 0 auto 3rem; }
.kicker { display: inline-block; font-size: 0.75rem; font-weight: 700; color: #7eb8ff; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.75rem; }
.section-title { font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 800; color: var(--color-text-primary); line-height: 1.2; margin-bottom: 1rem; }
.section-sub { font-size: 1rem; color: var(--color-text-secondary); line-height: 1.7; }
.when-grid { display: flex; flex-direction: column; gap: 1.5rem; max-width: 640px; margin: 0 auto; }
.when-card { display: flex; gap: 1.25rem; align-items: flex-start; padding: 1.5rem; border-radius: var(--radius-xl); border: 1px solid rgba(79, 142, 255, 0.15); background: var(--color-surface); transition: all 0.25s ease; }
.when-card:hover { border-color: rgba(79, 142, 255, 0.3); box-shadow: 0 0 20px rgba(79, 142, 255, 0.08); }
.when-dot { width: 12px; height: 12px; border-radius: 50%; background: linear-gradient(135deg, #4F8EFF, #A855F7); flex-shrink: 0; margin-top: 6px; }
.when-title { font-size: 1rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.5rem; }
.when-desc { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.6; }
`

const pkgStyles = `
.packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
.pkg-card { position: relative; padding: 2rem; border-radius: var(--radius-xl); border: 1px solid rgba(79, 142, 255, 0.15); background: var(--color-surface); display: flex; flex-direction: column; }
.pkg-card.featured { border-color: rgba(79, 142, 255, 0.4); box-shadow: 0 0 40px rgba(79, 142, 255, 0.1); }
.pkg-tag { display: inline-block; padding: 0.25rem 0.75rem; border-radius: 9999px; background: rgba(79, 142, 255, 0.1); border: 1px solid rgba(79, 142, 255, 0.2); font-size: 0.75rem; font-weight: 600; color: #7eb8ff; margin-bottom: 1rem; width: fit-content; }
.pkg-name { font-size: 1rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.75rem; }
.pkg-price { font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #4F8EFF 0%, #A855F7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 0.75rem; }
.pkg-desc { font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 1.5rem; }
.pkg-features { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 2rem; flex: 1; }
.pkg-feature { font-size: 0.875rem; color: var(--color-text-secondary); }
`

const howStyles = `
.how-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; }
.step-card { padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid rgba(79, 142, 255, 0.15); background: rgba(79, 142, 255, 0.03); }
.step-num { font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #4F8EFF 0%, #A855F7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 0.75rem; }
.step-title { font-size: 1rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.5rem; }
.step-desc { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.6; }
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