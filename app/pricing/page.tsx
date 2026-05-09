'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

const packages = [
  {
    name: 'Free 15-min call',
    price: 'Free',
    tagline: 'Fit check before anything paid.',
    description: 'A short call with Jake to understand the main bottleneck and decide if an audit is useful.',
    includes: ['Direct conversation', 'No obligation', 'Clear next step', 'Honest no if AI is not a fit'],
  },
  {
    name: 'AI Audit',
    price: '$1,500',
    tagline: 'The roadmap before the build.',
    description: 'A practical review of your calls, admin, quotes and follow-up. You keep the roadmap whether EMVY builds it or not.',
    includes: ['Workflow review', 'Pain point ranking', 'Opportunity map', '30/60/90 day roadmap'],
    highlight: true,
  },
  {
    name: 'Build',
    price: '$3,000',
    tagline: 'Highest-impact workflow built properly.',
    description: 'After the audit, EMVY builds the system that will make the biggest practical difference first. Most builds land here.',
    includes: ['Custom implementation', 'Tool integration', 'Testing and handover', 'Launch support'],
  },
  {
    name: 'Ongoing Support',
    price: '$1,500/mo',
    tagline: 'Keep improving without starting over.',
    description: 'Monthly monitoring, fixes, improvements and new workflow work as the business evolves.',
    includes: ['Monthly improvements', 'Priority support', 'System monitoring', 'Quarterly review'],
  },
]

const faqs = [
  { q: 'Why publish pricing?', a: 'Because most agencies hide it and SMBs waste time on calls they should never have booked. EMVY lets you self-qualify up front.' },
  { q: 'Do I need the audit first?', a: 'Yes for paid build work. The audit makes sure the build is useful, scoped and based on your actual workflow.' },
  { q: 'Can I keep the audit roadmap?', a: 'Yes. The roadmap is yours to keep even if you choose to implement it somewhere else.' },
  { q: 'What if AI is not right for us?', a: 'You will be told directly. Sometimes the answer is process cleanup, better data or a human hire before AI.' },
  { q: 'Who is this for?', a: 'Owner-led Australian SMBs with missed calls, admin overload, quote follow-up issues or lead leakage.' },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <style>{`
.pricing-hero {
  position: relative;
  padding-top: 10rem;
  padding-bottom: 4rem;
  overflow: hidden;
  text-align: center;
  isolation: isolate;
}
@media (min-width: 768px) { .pricing-hero { padding-top: 11rem; } }
.pricing-hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: var(--color-bg);
  z-index: -1;
}
        .pricing-hero-mesh {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 50% at 50% -10%, rgba(124, 111, 255, 0.22) 0%, transparent 60%);
          z-index: 0;
          pointer-events: none;
        }
        .pricing-hero-grid {
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
        .pricing-hero-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          filter: blur(60px);
          opacity: 0.3;
        }
        .pricing-blob-1 {
          width: 500px; height: 400px;
          top: -150px; left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(124, 111, 255, 0.25) 0%, transparent 70%);
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

        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1200px) {
          .pricing-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .pricing-card {
          border-radius: var(--radius-2xl);
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: relative;
          transition: all 0.25s ease;
        }
        .pricing-card:hover {
          border-color: var(--color-border-accent);
          transform: translateY(-2px);
        }
        .pricing-card.featured {
          border-color: var(--color-accent);
          background: var(--color-bg-elevated);
          box-shadow: 0 0 60px rgba(124, 111, 255, 0.12);
        }
        .pricing-card.featured::before {
          content: '';
          position: absolute;
          top: -1px; left: -1px; right: -1px;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, var(--color-accent) 30%, rgba(124, 111, 255, 0.4) 70%, transparent 100%);
          border-radius: var(--radius-2xl) var(--radius-2xl) 0 0;
        }

        .pricing-price {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 900;
          letter-spacing: -0.05em;
          line-height: 1;
          color: var(--color-text-primary);
          margin-top: 0.75rem;
          background: linear-gradient(135deg, #ffffff 0%, var(--color-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pricing-name {
          font-size: var(--text-xl);
          font-weight: 700;
          color: var(--color-text-primary);
          letter-spacing: -0.02em;
        }
        .pricing-tagline {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          font-weight: 500;
        }
        .pricing-desc {
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          line-height: 1.7;
          margin-top: 0.5rem;
          flex: 1;
        }
        .pricing-includes {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border);
        }
        .pricing-includes li {
          display: flex;
          align-items: flex-start;
          gap: 0.625rem;
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          line-height: 1.5;
        }
        .pricing-includes li::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-accent);
          margin-top: 0.4rem;
          flex-shrink: 0;
          box-shadow: 0 0 8px var(--color-accent-glow);
        }

        .proof-card {
          border-radius: var(--radius-2xl);
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          padding: 4rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .proof-card::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 400px;
          height: 200px;
          background: radial-gradient(ellipse at top, rgba(124, 111, 255, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .faq-item {
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          overflow: hidden;
          transition: border-color 0.2s ease;
        }
        .faq-item:hover {
          border-color: var(--color-border-hover);
        }
        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 1.75rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--color-text-primary);
          fontFamily: 'var(--font-body)';
          transition: color 0.2s ease;
        }
        .faq-question:hover { color: var(--color-text-secondary); }
        .faq-toggle {
          font-size: 1.5rem;
          color: var(--color-accent);
          font-weight: 300;
          flex-shrink: 0;
          margin-left: 1rem;
          transition: transform 0.2s ease;
        }
        .faq-answer {
          padding: 0 1.75rem 1.5rem;
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          line-height: 1.8;
          border-top: 1px solid var(--color-border);
          padding-top: 1.25rem;
        }
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
              <a href="/pricing" className="header-nav-link" style={{ color: 'var(--color-text-secondary)' }}>Pricing</a>
              <a href="/about" className="header-nav-link">About</a>
            </nav>
            <div className="header-actions">
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact header-cta">
                Book free call
              </a>
              <a href="/contact" className="header-nav-link" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', transition: 'color 0.2s ease', fontWeight: 500 }}>Contact</a>
              <button
                className="header-hamburger"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
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
            <a href="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact w-fit" onClick={() => setMobileMenuOpen(false)}>
              Book free call
            </a>
          </nav>
        </div>
      )}

      <main>
        {/* Hero */}
        <section className="pricing-hero">
          <div className="pricing-hero-mesh" />
          <div className="pricing-hero-grid" />
          <div className="pricing-hero-blob pricing-blob-1" />
          <div className="container">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="section-kicker" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
                Transparent pricing
              </div>
              <h1 style={{
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                fontWeight: 900,
                letterSpacing: '-0.05em',
                lineHeight: 0.95,
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
              }}>
                Know the number<br />
                <span style={{
                  background: 'linear-gradient(135deg, #8b85ff 0%, #6c63ff 50%, #a08fff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>before the call</span>
              </h1>
              <p style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 1.75,
                color: 'var(--color-text-secondary)',
                maxWidth: '500px',
                margin: '0 auto',
              }}>
                Free call, $1,500 audit, $3,000–$5,000 build, $1,500/month retainer. No hidden quote maze.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing cards */}
        <section style={{ padding: '3rem 0 5rem' }}>
          <div className="container">
            <div className="pricing-grid">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`pricing-card ${pkg.highlight ? 'featured' : ''}`}>
                  {pkg.highlight && (
                    <div style={{
                      display: 'inline-flex',
                      borderRadius: '999px',
                      background: 'rgba(124, 111, 255, 0.15)',
                      border: '1px solid rgba(124, 111, 255, 0.3)',
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#a08fff',
                      width: 'fit-content',
                      marginBottom: '0.5rem',
                    }}>
                      Start here
                    </div>
                  )}
                  <div className="pricing-name">{pkg.name}</div>
                  <div className="pricing-price">{pkg.price}</div>
                  <div className="pricing-tagline">{pkg.tagline}</div>
                  <p className="pricing-desc">{pkg.description}</p>
                  <ul className="pricing-includes">
                    {pkg.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href={CAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pkg.highlight ? 'btn-primary' : 'btn-secondary'}
                    style={{ marginTop: '1.5rem', textAlign: 'center' }}
                  >
                    Book free call
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        

        {/* FAQs */}
        <section style={{ padding: '0 0 6rem' }}>
          <div className="container">
            <div style={{ maxWidth: '680px', margin: '0 auto' }}>
              <div className="section-kicker" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
                Common questions
              </div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                color: 'var(--color-text-primary)',
                marginBottom: '2.5rem',
                textAlign: 'center',
              }}>
                Things people actually ask
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {faqs.map((faq, i) => (
                  <div key={faq.q} className="faq-item">
                    <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <span>{faq.q}</span>
                      <span className="faq-toggle">{openFaq === i ? '−' : '+'}</span>
                    </button>
                    {openFaq === i && (
                      <div className="faq-answer">{faq.a}</div>
                    )}
                  </div>
                ))}
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
                <a href="/about" className="footer-link">About</a>
                <a href="/pricing" className="footer-link" style={{ color: 'var(--color-text-secondary)' }}>Pricing</a>
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