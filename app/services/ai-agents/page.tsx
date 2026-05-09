'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

/* ── DATA ─────────────────────────────────────────────── */

const agentTypes = [
  {
    id: 'phone',
    title: 'Phone & Voice Agents',
    desc: 'AI agents that answer calls, handle enquiries, book appointments, and qualify leads — 24/7, always on time.',
    tag: 'VAPI-powered',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    id: 'text',
    title: 'Text & Chat Agents',
    desc: 'Autonomous agents that handle email, web chat, and SMS — answering questions, processing requests, and routing conversations.',
    tag: 'NLP-powered',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    id: 'autonomous',
    title: 'Specialized Autonomous Agents',
    desc: 'Purpose-built agents that handle specific business functions — quoting, scheduling, follow-ups, data entry, and more.',
    tag: 'Custom-built',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
        <path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07"/>
      </svg>
    ),
  },
]

const platforms = [
  { name: 'VAPI', desc: 'Voice AI infrastructure for phone agents — natural, fast, and reliable.' },
  { name: 'Twilio', desc: 'Enterprise telephony platform enabling SMS, voice, and WhatsApp agents.' },
  { name: 'Custom LLM', desc: 'Tailored language models trained on your data and workflows.' },
  { name: 'Your existing tools', desc: 'Agents integrated directly with your CRM, scheduling, and operational software.' },
]

const processSteps = [
  { num: '01', title: 'Audit', desc: 'We map your current workflows and identify where AI agents can deliver the biggest impact.' },
  { num: '02', title: 'Configure', desc: 'We select the right agent type, platform, and behaviour patterns for your specific use case.' },
  { num: '03', title: 'Integrate', desc: 'Agents are connected to your existing systems — CRM, calendar,通讯 tools, and databases.' },
  { num: '04', title: 'Deploy', desc: 'Agents go live with real calls and conversations. We monitor, refine, and optimise over time.' },
]

const valueProps = [
  {
    num: '01',
    title: 'Always on',
    desc: 'AI agents work 24/7, including weekends and holidays. No leave, no sick days, no dropped calls.',
  },
  {
    num: '02',
    title: 'Consistent',
    desc: 'Every conversation follows your process. No more variable quality depending on who picks up the phone.',
  },
  {
    num: '03',
    title: 'Scalable',
    desc: 'Handle 1 conversation or 1,000 with the same agent. No hiring curve, no training lag.',
  },
  {
    num: '04',
    title: 'Measured',
    desc: 'Every call and conversation is logged, transcribed, and analysed. You get full visibility into what is working.',
  },
]

/* ── SECTION COMPONENTS ─────────────────────────────── */

function AgentCard({ agent }: { agent: typeof agentTypes[0] }) {
  return (
    <div className="agent-card">
      <div className="agent-icon">{agent.icon}</div>
      <div className="agent-tag">{agent.tag}</div>
      <h3 className="agent-title">{agent.title}</h3>
      <p className="agent-desc">{agent.desc}</p>
    </div>
  )
}

function PlatformCard({ platform }: { platform: typeof platforms[0] }) {
  return (
    <div className="platform-card">
      <div className="platform-name">{platform.name}</div>
      <p className="platform-desc">{platform.desc}</p>
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
            <span>AI Agents · 24/7 · Autonomous</span>
          </div>

          <h1 className="hero-headline">
            AI Agents that work<br />
            while <span className="headline-accent">you sleep</span>.
          </h1>

          <p className="hero-sub">
            Phone, text, and specialised autonomous agents — built to handle your business around the clock.
          </p>

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

/* ── AGENT TYPES ────────────────────────────────────────── */
function AgentTypes() {
  return (
    <section className="section agent-types-section" id="agent-types">
      <div className="container">
        <div className="section-header">
          <span className="kicker">What we build</span>
          <h2 className="section-title">
            Three types of agent.<br />Infinite applications.
          </h2>
          <p className="section-sub">
            Whether you need agents that answer calls, handle messages, or autonomously manage workflows — we build it to your spec.
          </p>
        </div>

        <div className="agent-grid">
          {agentTypes.map((a) => (
            <AgentCard key={a.id} agent={a} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── PLATFORMS ─────────────────────────────────────────── */
function Platforms() {
  return (
    <section className="section platforms-section" id="platforms">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Technology</span>
          <h2 className="section-title">
            Built on the right platform<br />for your use case.
          </h2>
          <p className="section-sub">
            We select the optimal voice and messaging infrastructure based on your requirements, scale, and existing stack.
          </p>
        </div>

        <div className="platforms-grid">
          {platforms.map((p) => (
            <PlatformCard key={p.name} platform={p} />
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
            Audit → Configure →<br />Integrate → Deploy.
          </h2>
          <p className="section-sub">
            We follow a proven process to ensure agents are built correctly, integrated properly, and delivering value from day one.
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
      </div>
    </section>
  )
}

/* ── VALUE PROPS ────────────────────────────────────────── */
function ValueProps() {
  return (
    <section className="section value-props-section" id="why-agents">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Why AI agents?</span>
          <h2 className="section-title">
            The difference between<br />automated and autonomous.
          </h2>
          <p className="section-sub">
            Most automation runs on scripts. Agents think, decide, and act. That distinction changes everything.
          </p>
        </div>

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
          <h2 className="cta-title">Ready to add agents to your team?</h2>
          <p className="cta-sub">
            Book the free 15-minute call. We will tell you honestly whether AI agents make sense for your business.
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
export default function AIAgents() {
  return (
    <>
      <style>{heroStyles}</style>
      <style>{agentStyles}</style>
      <style>{platformStyles}</style>
      <style>{processStyles}</style>
      <style>{valueStyles}</style>
      <style>{ctaStyles}</style>
      <style>{footerStyles}</style>
      <style>{headerStyles}</style>

      <div style={{ paddingTop: '2rem' }}>
        <Header />
        <main style={{ paddingTop: '0' }}>
          <Hero />
          <AgentTypes />
          <Platforms />
          <Process />
          <ValueProps />
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

.hero-view-pricing {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: 500;
  transition: color 0.2s ease;
}
.hero-view-pricing:hover { color: var(--color-text-secondary); }
`

const agentStyles = `
.agent-types-section {
  background: var(--color-bg);
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
.agent-types-section::before {
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

.agent-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 640px) { .agent-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; } }
@media (min-width: 1024px) { .agent-grid { grid-template-columns: repeat(3, 1fr); gap: 1.5rem; } }

.agent-card {
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
.agent-card:hover {
  border-color: var(--color-border-accent);
  box-shadow: 0 0 40px rgba(124, 111, 255, 0.08);
  transform: translateY(-2px);
}
.agent-icon { color: var(--color-accent); margin-bottom: 0.5rem; }
.agent-tag {
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
.agent-title {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
}
.agent-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-top: 0.25rem;
}
`

const platformStyles = `
.platforms-section {
  background: var(--color-bg-subtle);
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
.platforms-section::before {
  content: '';
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, var(--color-bg), var(--color-bg-subtle));
  pointer-events: none;
}

.platforms-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 640px) { .platforms-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .platforms-grid { grid-template-columns: repeat(4, 1fr); } }

.platform-card {
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: 2rem;
  transition: all 0.25s ease;
}
.platform-card:hover {
  border-color: var(--color-border-hover);
  background: var(--color-surface-hover);
}
.platform-name {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}
.platform-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.7;
}
`

const processStyles = `
.process-section {
  background: var(--color-bg);
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
  background: linear-gradient(to bottom, var(--color-bg-subtle), var(--color-bg));
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
.value-props-section {
  background: var(--color-bg-subtle);
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
.value-props-section::before {
  content: '';
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, var(--color-bg), var(--color-bg-subtle));
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