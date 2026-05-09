'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

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
    desc: 'Autonomous digital workers that handle calls, messages, and admin — 24/7, no holidays needed.',
    tag: 'Production-ready',
    href: '/services/ai-agents',
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
    href: '/services/automations',
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
    href: '/services/ops-systems',
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
    href: '/services/integrations',
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
  {
    id: 'building',
    title: 'Building',
    desc: 'Got an AI product idea? We help you take it from concept to reality — prototype to launch.',
    tag: 'Innovation',
    href: '/services/building',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
]

const caseStudy = {
  client: 'Mid-sized tradie contractor',
  industry: 'Construction',
  challenge: 'Quoting took 3 days, customer follow-ups were inconsistent, and leads were falling through the cracks. The team was spending 20+ hours/week on admin that could be automated.',
  solution: 'We built an AI agent to parse inbound enquiries, auto-generate quotes using their existing pricing data, and trigger follow-up sequences — all integrated with their existing job management software.',
  result: 'Quote time dropped from 3 days to 4 hours. Quote acceptance went from 40% to 94%. Admin work fell from 20 hours a week to under 8.',
  metrics: [
    { v: '3 days → 4 hrs', l: 'Quote turnaround' },
    { v: '40% → 94%', l: 'Quote acceptance rate' },
    { v: '20 hrs → 8 hrs', l: 'Admin per week' },
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
    <a href={service.href} className="service-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div className="service-icon">{service.icon}</div>
      <div className="service-tag">{service.tag}</div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.desc}</p>
    </a>
  )
}

/* ── HERO ─────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      {/* Mesh gradient background layers */}
      <div className="hero-mesh-1" aria-hidden="true" />
      <div className="hero-mesh-2" aria-hidden="true" />
      <div className="hero-mesh-3" aria-hidden="true" />
      {/* Grid overlay */}
      <div className="hero-grid" aria-hidden="true" />
      {/* Floating geometric accents */}
      <div className="hero-shape hero-shape-1" aria-hidden="true" />
      <div className="hero-shape hero-shape-2" aria-hidden="true" />
      <div className="hero-shape hero-shape-3" aria-hidden="true" />

      <div className="container">
        <div className="hero-inner">

          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>SMB specialists · Transparent pricing · No lock-in</span>
          </div>

          <h1 className="hero-headline">
            We find the hours<br />
            and revenue<br />
            your business<br />
            is <span className="headline-accent">wasting</span>.
          </h1>

          <p className="hero-sub">
            We help businesses harness AI to move faster, waste less, and achieve more.
          </p>

          <p className="hero-actions-label">No obligation. No pressure. Just a conversation.</p>

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

            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '2rem' }}>
              Get your free 15-min call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <p style={{ marginTop: '1.5rem', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
              See more AI resources for SMBs{' '}
              <a href="/blog" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>→</a>
            </p>
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

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact">
            Book free 15-min call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="value-grid" style={{ marginTop: '4rem' }}>
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
  const [servicesOpen, setServicesOpen] = useState(false)

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

              <div className="header-nav-dropdown" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="header-nav-link header-nav-dropdown-trigger" aria-expanded={servicesOpen}>
                  Services
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ marginLeft: '4px', transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="header-nav-dropdown-menu">
                    <a href="/services/ai-agents" className="header-nav-dropdown-item">
                      <span className="dropdown-item-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                      </span>
                      <div>
                        <div className="dropdown-item-title">AI Agents</div>
                        <div className="dropdown-item-desc">Phone, voice & autonomous agents</div>
                      </div>
                    </a>
                    <a href="/services/automations" className="header-nav-dropdown-item">
                      <span className="dropdown-item-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>
                      </span>
                      <div>
                        <div className="dropdown-item-title">Automations</div>
                        <div className="dropdown-item-desc">Workflows, quotes, follow-ups</div>
                      </div>
                    </a>
                    <a href="/services/ops-systems" className="header-nav-dropdown-item">
                      <span className="dropdown-item-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
                      </span>
                      <div>
                        <div className="dropdown-item-title">Ops Systems</div>
                        <div className="dropdown-item-desc">Dashboards, CRM & reporting</div>
                      </div>
                    </a>
                    <a href="/services/integrations" className="header-nav-dropdown-item">
                      <span className="dropdown-item-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/></svg>
                      </span>
                      <div>
                        <div className="dropdown-item-title">Integrations</div>
                        <div className="dropdown-item-desc">API connections & data sync</div>
                      </div>
                    </a>
                    <a href="/services/building" className="header-nav-dropdown-item">
                      <span className="dropdown-item-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                      </span>
                      <div>
                        <div className="dropdown-item-title">Building</div>
                        <div className="dropdown-item-desc">AI product development & MVP</div>
                      </div>
                    </a>
                  </div>
                )}
              </div>

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
            <div className="mobile-nav-section-label">Services</div>
            <a href="/services/ai-agents" className="mobile-nav-link mobile-nav-indent" onClick={() => setOpen(false)}>AI Agents</a>
            <a href="/services/automations" className="mobile-nav-link mobile-nav-indent" onClick={() => setOpen(false)}>Automations</a>
            <a href="/services/ops-systems" className="mobile-nav-link mobile-nav-indent" onClick={() => setOpen(false)}>Ops Systems</a>
            <a href="/services/integrations" className="mobile-nav-link mobile-nav-indent" onClick={() => setOpen(false)}>Integrations</a>
            <a href="/services/building" className="mobile-nav-link mobile-nav-indent" onClick={() => setOpen(false)}>Building</a>
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

/* ── WHO WE ARE ─────────────────────────────────────────── */
function WhoWeAre() {
  return (
    <section className="section" style={{ paddingTop: '0', paddingBottom: '0' }}>
      <div className="container">
        <div style={{ maxWidth: '680px' }}>
          <span className="kicker">Who we are</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            AI consultancy for Australian SMBs.
          </h2>
          <p className="section-sub" style={{ marginTop: '1.25rem', lineHeight: '1.8' }}>
            EMVY bridges the gap between legacy systems and processes — and the new wave of AI technology that offers efficiency gains which simply weren't possible before. We help you actually use AI, not just talk about it.
          </p>
          <p className="section-sub" style={{ marginTop: '1rem', lineHeight: '1.8' }}>
            What a time to be alive. But most businesses need a trusted guide to separate real opportunity from hype. That's what we do.
          </p>
          <a href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-accent)' }}>
            Learn more about us
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── WHAT WE BUILD (teaser) ─────────────────────────────── */
function WhatWeBuild() {
  return (
    <section className="section" style={{ paddingTop: '0' }}>
      <div className="container">
        <span className="kicker">What we build</span>
        <h2 className="section-title" style={{ marginTop: '1rem', fontSize: 'var(--text-3xl)', fontWeight: 700 }}>
          AI Agents · Automations · Ops Systems · Integrations
        </h2>
        <p className="section-sub" style={{ marginTop: '1rem' }}>
          We build practical AI systems that think, act and scale with your business.
        </p>
        <a href="#services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-accent)' }}>
          See full breakdown
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
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

      <div style={{ paddingTop: '2rem' }}>
        <Header />
        <main style={{ paddingTop: '0' }}>
          <Hero />
          <WhoWeAre />
          <WhatWeBuild />
          <Services />
          <CaseStudy />
          <CTASection />
        </main>
        <Footer />
      </div>
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

/* Desktop dropdown */
.header-nav-dropdown {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.header-nav-dropdown-trigger {
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;
  display: inline-flex;
  align-items: center;
  color: var(--color-text-muted);
  transition: color 0.2s ease;
  padding: 0;
}
.header-nav-dropdown-trigger:hover { color: var(--color-text-secondary); }
.header-nav-dropdown-menu {
  position: absolute;
  top: calc(100% + 1rem);
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: 0.75rem;
  min-width: 260px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.5), var(--shadow-glow);
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.header-nav-dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.75rem;
  border-radius: var(--radius-lg);
  transition: background 0.15s ease;
  text-decoration: none;
  color: inherit;
}
.header-nav-dropdown-item:hover { background: var(--color-surface-hover); }
.dropdown-item-icon {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  background: var(--color-accent-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  flex-shrink: 0;
}
.dropdown-item-icon svg { width: 18px; height: 18px; }
.dropdown-item-title { font-size: var(--text-sm); font-weight: 600; color: var(--color-text-primary); }
.dropdown-item-desc { font-size: var(--text-xs); color: var(--color-text-muted); margin-top: 2px; }

/* Mobile nav additions */
.mobile-nav-section-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: 0.5rem 0 0.25rem;
}
.mobile-nav-indent { padding-left: 0.5rem; }
`

const heroStyles = `
.hero {
  position: relative;
  padding-top: 10rem;
  padding-bottom: 5rem;
  overflow: hidden;
}
@media (min-width: 768px) { .hero { padding-top: 11rem; padding-bottom: 7rem; } }

/* Mesh gradient layers */
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

/* Subtle grid overlay */
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

/* Floating geometric shapes */
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

.hero-actions-label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-bottom: 1rem;
  font-style: italic;
}

.hero-view-pricing {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: 500;
  transition: color 0.2s ease;
}
.hero-view-pricing:hover { color: var(--color-text-secondary); }


`

const metricStyles = `
/* Metrics — breathing room above and below */
.metrics-section {
  padding: 5rem 0;
  border-top: 2px solid var(--color-border);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  background: var(--color-bg-subtle);
  overflow: hidden;
  position: relative;
}
/* Soft gradient fade at top */
.metrics-section::before {
  content: '';
  position: absolute;
  top: -60px;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(to bottom, var(--color-bg), transparent);
  pointer-events: none;
}
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
}

/* Section base — ensure clean separation */
.section {
  padding-block: var(--space-20);
  position: relative;
  z-index: 1;
}
@media (min-width: 768px) { .section { padding-block: var(--space-24); } }
@media (min-width: 1024px) { .section { padding-block: var(--space-32); } }

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
.services-section {
  background: var(--color-bg);
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
/* Gradient fade at top — separates from metrics */
.services-section::before {
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
  gap: 1.5rem;
}
@media (min-width: 640px) { .services-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; } }
@media (min-width: 1024px) { .services-grid { grid-template-columns: repeat(4, 1fr); gap: 1.5rem; } }

.service-card {
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
.how-we-help-section {
  border-top: 1px solid var(--color-border);
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
.case-study-section {
  background: var(--color-bg-subtle);
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
/* Fade separator at top */
.case-study-section::before {
  content: '';
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, var(--color-bg), var(--color-bg-subtle));
  pointer-events: none;
}

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
.value-props-section {
  background: var(--color-bg);
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
/* Fade separator at top */
.value-props-section::before {
  content: '';
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, var(--color-bg-subtle), var(--color-bg));
  pointer-events: none;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
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
.cta-section {
  background: var(--color-bg-subtle);
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
/* Fade separator at top */
.cta-section::before {
  content: '';
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, var(--color-bg), var(--color-bg-subtle));
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