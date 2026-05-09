'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

const values = [
  { title: 'No fluff', desc: "We'll tell you when AI isn't the right answer. We won't sell you something just because we can." },
  { title: 'Specific over general', desc: "A wellness studio needs different automations than a law firm. We don't do generic advice." },
  { title: 'Deploy, don\'t demo', desc: "If it's not in production and working, it doesn't count. We measure success by what actually runs." },
  { title: 'Honest timelines', desc: "We'll tell you if something takes 2 weeks or 8. No sugar-coating to close a deal." },
]

const principles = [
  { step: '01', title: 'Audit First', desc: 'We map your workflows, find the gaps, and build a prioritised roadmap. No building until we know what to build.' },
  { step: '02', title: 'Build What Matters', desc: 'We build the top 2–3 automations — not a portfolio of demos. Things that actually save time or make money.' },
  { step: '03', title: 'Deploy Properly', desc: "Hand over fully deployed, tested systems with documentation. You shouldn't need us to run it." },
  { step: '04', title: 'Stay and Improve', desc: 'Monthly retainer for ongoing optimisation and new builds. Or walk away — no lock-in.' },
]

const team = [
  { name: 'Jake', role: 'Founder', focus: 'AI systems, automation architecture, client delivery' },
]

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <style>{`
        .about-hero {
          position: relative;
          padding-top: 10rem;
          padding-bottom: 5rem;
          overflow: hidden;
          isolation: isolate;
        }
        @media (min-width: 768px) { .about-hero { padding-top: 11rem; } }
        .about-hero::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 120px;
          background: var(--color-bg);
          z-index: -1;
        }
        .about-hero-mesh {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 50% at 50% -5%, rgba(124, 111, 255, 0.2) 0%, transparent 60%);
          z-index: 0;
          pointer-events: none;
        }
        .about-hero-grid {
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
        .about-hero-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          filter: blur(60px);
          opacity: 0.35;
        }
        .about-blob-1 {
          width: 400px; height: 400px;
          top: -100px; right: -80px;
          background: radial-gradient(circle, rgba(124, 111, 255, 0.3) 0%, transparent 70%);
          animation: floatShape 10s ease-in-out infinite;
        }
        .about-blob-2 {
          width: 250px; height: 250px;
          bottom: -50px; left: -60px;
          background: radial-gradient(circle, rgba(96, 80, 220, 0.25) 0%, transparent 70%);
          animation: floatShape 12s ease-in-out infinite reverse;
        }
        @keyframes floatShape {
          0%, 100% { transform: translateY(0px) scale(1); }
          33% { transform: translateY(-25px) scale(1.05); }
          66% { transform: translateY(12px) scale(0.97); }
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

        .value-card {
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          padding: 2rem;
          transition: all 0.25s ease;
        }
        .value-card:hover {
          border-color: var(--color-border-accent);
          background: var(--color-surface-hover);
        }

        .team-card {
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
        }
        .team-card::before {
          content: '';
          position: absolute;
          top: -1px; left: -1px; right: -1px;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, var(--color-accent) 30%, rgba(124, 111, 255, 0.4) 70%, transparent 100%);
          border-radius: var(--radius-xl) var(--radius-xl) 0 0;
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
        }
        .footer-link:hover { color: var(--color-text-secondary); }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-top: 2rem;
          align-items: center;
          text-align: center;
        }
        @media (min-width: 640px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
          }
        }
        .footer-legal { display: flex; gap: 1.5rem; }
        .footer-legal-link {
          font-size: var(--text-xs);
          color: var(--color-text-muted);
          font-family: var(--font-mono);
          transition: color 0.2s ease;
        }
        .footer-legal-link:hover { color: var(--color-text-secondary); }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <a href="/" className="header-logo" aria-label="EMVY home">
              <EmvyWordmark size={36} />
            </a>
            <nav className="header-nav" aria-label="Main navigation">
              <a href="/#services" className="header-nav-link">Services</a>
              <a href="/#how-we-work" className="header-nav-link">How We Work</a>
              <a href="/pricing" className="header-nav-link">Pricing</a>
              <a href="/about" className="header-nav-link" style={{ color: 'var(--color-text-secondary)' }}>About</a>
              <a href="/blog" className="header-nav-link">Blog</a>
              <a href="/contact" className="header-nav-link">Contact</a>
            </nav>
            <div className="header-actions">
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact header-cta">
                Book free call
              </a>
              <button
                className="header-hamburger"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
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
            <a href="/#services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="/#how-we-work" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>How We Work</a>
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
        <section className="about-hero">
          <div className="about-hero-mesh" />
          <div className="about-hero-grid" />
          <div className="about-hero-blob about-blob-1" />
          <div className="about-hero-blob about-blob-2" />
          <div className="container">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="section-kicker" style={{ marginBottom: '1.5rem', justifyContent: 'center', display: 'flex' }}>Who we are</div>
              <h1 style={{
                fontSize: 'clamp(2.75rem, 6vw, 5rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 0.97,
                color: 'var(--color-text-primary)',
                marginBottom: '2rem',
                textAlign: 'center',
              }}>
                We fix the gap between<br />
                <span style={{
                  background: 'linear-gradient(135deg, #8b85ff 0%, #6c63ff 50%, #a08fff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>AI potential and AI reality</span>
              </h1>
              <p style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 1.75,
                color: 'var(--color-text-secondary)',
                maxWidth: '600px',
                margin: '0 auto',
                textAlign: 'center',
              }}>
                Most businesses buy AI tools, get excited, use them for a week — then drift back to old habits.
                The tools aren't broken. The missing piece is specific workflows designed for your business,
                deployed properly, and maintained.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
                <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact">
                  Book free call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ maxWidth: '720px' }}>
              <div className="section-kicker" style={{ marginBottom: '2rem' }}>The story</div>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)',
                marginBottom: '2rem',
              }}>
                Built from frustration, not hype
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  "EMVY started because we kept seeing the same pattern. Business owners spending money on AI subscriptions, watching tutorials, getting hyped — then not actually changing how they work.",
                  "The problem was never the AI. It was that nobody had taken the time to understand how that specific business actually runs — where the time goes, where the friction is, what a successful automation actually looks like for them.",
                  "So we built EMVY to be that step in between. The audit first. Understand the business deeply. Find the 2–3 things that actually move the needle. Build those. Deploy them properly. Hand over something that works.",
                  "We're not an agency that throws code over the fence. We're a partner that makes sure AI actually lands in your business — not just in your head.",
                ].map((para, i) => (
                  <p key={i} style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How we work */}
        <div className="section-divider" />
        <section className="section" style={{ background: 'var(--color-bg-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '600px', marginBottom: '4rem' }}>
              <div className="section-kicker" style={{ marginBottom: '1rem' }}>How we work</div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: 'var(--color-text-primary)',
                marginTop: '0.875rem',
              }}>
                Audit first.<br />Build second.<br />Support always.
              </h2>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}>
              {principles.map((p) => (
                <div key={p.step} style={{
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                  padding: '2rem',
                  transition: 'all 0.25s ease',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontWeight: 900,
                    color: 'var(--color-border-hover)',
                    lineHeight: 1,
                    marginBottom: '1rem',
                  }}>{p.step}</div>
                  <div style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.75rem',
                  }}>{p.title}</div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <div className="section-divider" />
        <section className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ maxWidth: '600px', marginBottom: '4rem' }}>
              <div className="section-kicker" style={{ marginBottom: '1rem' }}>What we stand for</div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: 'var(--color-text-primary)',
                marginTop: '0.875rem',
              }}>
                Principles, not platitudes
              </h2>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}>
              {values.map((v) => (
                <div key={v.title} className="value-card">
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--color-accent)',
                    marginBottom: '1rem',
                    boxShadow: '0 0 12px var(--color-accent-glow)',
                  }} />
                  <div style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.75rem',
                  }}>{v.title}</div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder / Team */}
        <div className="section-divider" />
        <section className="section" style={{ background: 'var(--color-bg-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '600px', marginBottom: '3rem' }}>
              <div className="section-kicker" style={{ marginBottom: '1rem' }}>The person behind EMVY</div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: 'var(--color-text-primary)',
                marginTop: '0.875rem',
              }}>
                Built by practitioners
              </h2>
            </div>
            <div style={{ maxWidth: '480px' }}>
              {team.map((member) => (
                <div key={member.name} className="team-card">
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, rgba(124, 111, 255, 0.4) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}>
                    <span style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#fff',
                      letterSpacing: '-0.05em',
                    }}>
                      {member.name[0]}
                    </span>
                  </div>
                  <div style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.25rem',
                  }}>{member.name}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-accent)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                  }}>{member.role}</div>
                  <p style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                  }}>
                    Focus: {member.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="section-divider" />
        <section className="section" style={{ background: 'var(--color-bg-subtle)' }}>
          <div className="container">
            <div style={{
              position: 'relative',
              textAlign: 'center',
              padding: '5rem 2rem',
              borderRadius: 'var(--radius-2xl)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: '-80px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '400px',
                background: 'radial-gradient(ellipse at center, rgba(124, 111, 255, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="section-kicker" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>Ready?</div>
                <h2 style={{
                  fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.05,
                  color: 'var(--color-text-primary)',
                  marginBottom: '1rem',
                }}>
                  Ready to see what's possible?
                </h2>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                  maxWidth: '480px',
                  margin: '0 auto 2.5rem',
                }}>
                  Book a free discovery call. 15 minutes. No pitch. We just look at your business and tell you what we see.
                </p>
                <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary cta-btn">
                  Book free 15-min call
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
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
                <a href="/about" className="footer-link" style={{ color: 'var(--color-text-secondary)' }}>About</a>
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
    </>
  )
}