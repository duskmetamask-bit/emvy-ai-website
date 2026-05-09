'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

const covers = [
  { label: 'Dashboards', desc: 'Real-time business visibility at a glance' },
  { label: 'CRM Setups', desc: 'Contact pipelines that actually get used' },
  { label: 'Inventory Management', desc: 'Stock levels tracked and automated reorder' },
  { label: 'Scheduling', desc: 'Bookings and availability synced across tools' },
  { label: 'Reporting', desc: 'Scheduled reports delivered to your inbox' },
]

const platforms = [
  { name: 'Supabase', desc: 'Flexible backend database for custom data models and real-time sync' },
  { name: 'Custom Dashboards', desc: 'Tailored BI dashboards built on your existing data sources' },
]

const process = [
  { step: '01', title: 'Audit', desc: 'Map your current workflows, identify gaps and bottlenecks across people, tools and data.' },
  { step: '02', title: 'Design', desc: 'Design the system architecture with clear data flows, dashboards and automation triggers.' },
  { step: '03', title: 'Build', desc: 'Develop with Supabase and custom integrations. Deploy tested, working systems.' },
  { step: '04', title: 'Train', desc: 'Document everything and train your team so the system stays maintained.' },
]

export default function OpsSystemsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <style>{`
        .ops-hero {
          position: relative;
          padding-top: 10rem;
          padding-bottom: 5rem;
          overflow: hidden;
          isolation: isolate;
          text-align: center;
        }
        @media (min-width: 768px) { .ops-hero { padding-top: 11rem; } }
        .ops-hero::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 120px;
          background: var(--color-bg);
          z-index: -1;
        }
        .ops-hero-mesh {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 50% at 50% -5%, rgba(124, 111, 255, 0.2) 0%, transparent 60%);
          z-index: 0;
          pointer-events: none;
        }
        .ops-hero-grid {
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
        .ops-hero-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          filter: blur(60px);
          opacity: 0.35;
        }
        .ops-blob-1 {
          width: 400px; height: 400px;
          top: -100px; right: -80px;
          background: radial-gradient(circle, rgba(124, 111, 255, 0.3) 0%, transparent 70%);
          animation: floatShape 10s ease-in-out infinite;
        }
        .ops-blob-2 {
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

        .cover-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        .cover-card {
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          padding: 2rem;
          transition: all 0.25s ease;
          text-align: left;
        }
        .cover-card:hover {
          border-color: var(--color-border-accent);
          background: var(--color-surface-hover);
          transform: translateY(-2px);
        }
        .cover-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: var(--color-accent-subtle);
          border: 1px solid var(--color-border-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          color: var(--color-accent);
        }
        .cover-label {
          font-size: var(--text-base);
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 0.375rem;
          letter-spacing: -0.01em;
        }
        .cover-desc {
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .platform-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .platform-card {
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.25s ease;
        }
        .platform-card:hover {
          border-color: var(--color-border-hover);
          transform: translateY(-2px);
        }
        .platform-card::before {
          content: '';
          position: absolute;
          top: -1px; left: -1px; right: -1px;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, var(--color-accent) 30%, rgba(124, 111, 255, 0.4) 70%, transparent 100%);
          border-radius: var(--radius-xl) var(--radius-xl) 0 0;
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .platform-card:hover::before { opacity: 1; }
        .platform-name {
          font-size: var(--text-lg);
          font-weight: 800;
          color: var(--color-text-primary);
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        .platform-desc {
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          line-height: 1.7;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        .process-card {
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          padding: 2rem;
          transition: all 0.25s ease;
        }
        .process-card:hover {
          border-color: var(--color-border-hover);
          background: var(--color-surface-hover);
        }
        .process-step {
          font-family: var(--font-mono);
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 900;
          letter-spacing: -0.05em;
          color: var(--color-border);
          margin-bottom: 1.25rem;
          line-height: 1;
        }
        .process-title {
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        .process-desc {
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          line-height: 1.7;
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
              <a href="/" className="header-nav-link">Home</a>
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
            <a href="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
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
        <section className="ops-hero">
          <div className="ops-hero-mesh" />
          <div className="ops-hero-grid" />
          <div className="ops-hero-blob ops-blob-1" />
          <div className="ops-hero-blob ops-blob-2" />
          <div className="container">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="section-kicker" style={{ marginBottom: '1.5rem', justifyContent: 'center', display: 'flex' }}>Ops Systems</div>
              <h1 style={{
                fontSize: 'clamp(2.75rem, 6vw, 5rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 0.97,
                color: 'var(--color-text-primary)',
                marginBottom: '2rem',
                textAlign: 'center',
              }}>
                Connected systems that<br />
                <span style={{
                  background: 'linear-gradient(135deg, #8b85ff 0%, #6c63ff 50%, #a08fff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>bring clarity and control</span>
              </h1>
              <p style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 1.75,
                color: 'var(--color-text-secondary)',
                maxWidth: '600px',
                margin: '0 auto',
                textAlign: 'center',
              }}>
                Dashboards, CRM setups, inventory management, scheduling and reporting —
                all connected to give you a single source of truth for how your business actually runs.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
                <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact">
                  Book free call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What we cover */}
        <section className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ maxWidth: '560px', marginBottom: '4rem' }}>
              <div className="section-kicker" style={{ marginBottom: '1rem' }}>What we cover</div>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)',
                marginTop: '0.875rem',
              }}>
                From scattered tools to<br />coherent operations
              </h2>
            </div>
            <div className="cover-grid">
              {covers.map((c) => (
                <div key={c.label} className="cover-card">
                  <div className="cover-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                    </svg>
                  </div>
                  <div className="cover-label">{c.label}</div>
                  <div className="cover-desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Platforms */}
        <section className="section" style={{ background: 'var(--color-bg-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '560px', marginBottom: '4rem' }}>
              <div className="section-kicker" style={{ marginBottom: '1rem' }}>Platforms</div>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)',
                marginTop: '0.875rem',
              }}>
                Built on tools<br />that scale with you
              </h2>
            </div>
            <div className="platform-grid">
              {platforms.map((p) => (
                <div key={p.name} className="platform-card">
                  <div className="platform-name">{p.name}</div>
                  <div className="platform-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Process */}
        <section className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ maxWidth: '560px', marginBottom: '4rem' }}>
              <div className="section-kicker" style={{ marginBottom: '1rem' }}>How we work</div>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)',
                marginTop: '0.875rem',
              }}>
                Audit. Design.<br />Build. Train.
              </h2>
            </div>
            <div className="process-grid">
              {process.map((p) => (
                <div key={p.step} className="process-card">
                  <div className="process-step">{p.step}</div>
                  <div className="process-title">{p.title}</div>
                  <div className="process-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <div className="cta-inner">
              <div className="cta-glow" />
              <div className="section-kicker" style={{ marginBottom: '1.5rem', justifyContent: 'center', display: 'flex' }}>Get started</div>
              <h2 className="cta-title">Ready to bring<br />your ops together?</h2>
              <p className="cta-sub">
                Book a free 15-minute call with Jake. We'll figure out if there's a fit before anything goes further.
              </p>
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact cta-btn">
                Book free call
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="/" aria-label="EMVY home">
                <EmvyWordmark size={32} />
              </a>
              <p className="footer-brand-desc">
                AI consultancy for Australian SMBs. We build specific workflows and AI systems that actually run.
              </p>
              <div className="footer-social">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <div className="footer-col-head">Services</div>
                <a href="/services/ops-systems" className="footer-link">Ops Systems</a>
              </div>
              <div className="footer-col">
                <div className="footer-col-head">Company</div>
                <a href="/about" className="footer-link">About</a>
                <a href="/blog" className="footer-link">Blog</a>
                <a href="/contact" className="footer-link">Contact</a>
              </div>
              <div className="footer-col">
                <div className="footer-col-head">Legal</div>
                <a href="/privacy" className="footer-link">Privacy</a>
                <a href="/terms" className="footer-link">Terms</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="mono" style={{ fontSize: 'var(--text-xs)' }}>© {new Date().getFullYear()} EMVY. All rights reserved.</div>
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