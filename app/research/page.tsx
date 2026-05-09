'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const RESEARCH_FIELDS = [
  { key: 'website', label: 'Company Website', placeholder: 'https://company.com.au', hint: 'Start here — gives you everything you need' },
  { key: 'linkedin', label: 'LinkedIn URL', placeholder: 'linkedin.com/company/...', hint: '' },
  { key: 'about', label: 'About / Description', placeholder: 'Paste whatever you found about them...', hint: '' },
  { key: 'industry', label: 'Industry', placeholder: 'e.g. Wellness studio, Law firm, E-commerce', hint: '' },
  { key: 'location', label: 'Location', placeholder: 'e.g. Perth WA, Melbourne', hint: '' },
  { key: 'size', label: 'Team Size', placeholder: 'e.g. 5 employees, 2 owners', hint: '' },
  { key: 'pain_points', label: 'Known Pain Points', placeholder: "What they mentioned in their enquiry...", hint: '' },
  { key: 'summary', label: '1-Sentence Summary', placeholder: 'e.g. A 3-person wellness studio spending 6hrs/week on manual booking admin they want to eliminate...', hint: '' },
]

const CALL_PREP = [
  { q: 'What does their day-to-day actually look like?', hint: 'Where does time go? What\'s the bottleneck?' },
  { q: 'Where have they tried AI before?', hint: 'What did they try? What went wrong?' },
  { q: 'What would they do with 10 extra hours per week?', hint: 'Gets at real motivation — not stated goals' },
  { q: 'What\'s the cost of the problem they\'re trying to solve?', hint: 'Lost revenue, time wasted, staff frustration?' },
  { q: 'What\'s their current tech stack?', hint: 'Are they on Xero, Calendly, Square, etc?' },
  { q: 'Who else is involved in this decision?', hint: 'Are they the decision maker?' },
  { q: 'What\'s the budget conversation look like?', hint: 'Have they thought about what this costs?' },
  { q: 'What happens if they do nothing?', hint: 'Understand the urgency — or lack of it' },
]

export default function ResearchPage() {
  const [fields, setFields] = useState<Record<string, string>>(
    Object.fromEntries(RESEARCH_FIELDS.map(f => [f.key, '']))
  )
  const [showPrep, setShowPrep] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const update = (key: string, val: string) => setFields(prev => ({ ...prev, [key]: val }))

  return (
    <>
      <style>{`
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

        .form-input {
          width: 100%;
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 0.875rem 1rem;
          font-size: var(--text-sm);
          color: var(--color-text-primary);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
          font-family: var(--font-body);
        }
        .form-input::placeholder { color: var(--color-text-muted); }
        .form-input:focus {
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(124, 111, 255, 0.15);
        }

        .prep-card {
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          padding: 1.75rem;
        }

        .check-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          padding: 0.5rem 0;
          transition: color 0.2s ease;
        }
        .check-item:hover .check-label { color: var(--color-text-secondary); }
        .check-box {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          border: 1px solid var(--color-border);
          background: var(--color-bg);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .check-label {
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          transition: color 0.2s ease;
          font-weight: 500;
        }
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
              <a href="https://cal.com/jake-emvy/15-min-ai-chat" target="_blank" rel="noopener noreferrer" className="btn-primary compact header-cta">
                Book free call
              </a>
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
            <a href="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="/pricing" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="/blog" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Blog</a>
            <a href="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="https://cal.com/jake-emvy/15-min-ai-chat" target="_blank" rel="noopener noreferrer" className="btn-primary compact w-fit" onClick={() => setMobileMenuOpen(false)}>
              Book free call
            </a>
          </nav>
        </div>
      )}

      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '3rem var(--space-6) 6rem' }}>
        {/* Page header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-kicker" style={{ marginBottom: '1rem' }}>Prospect research</div>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            color: 'var(--color-text-primary)',
            marginBottom: '0.75rem',
          }}>
            Pre-Call Research
          </h1>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
            Fill in what you know before every discovery call. More context = better call.
          </p>
        </div>

        {/* Research fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {RESEARCH_FIELDS.map(field => (
            <div key={field.key}>
              <label style={{
                display: 'block',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--color-text-secondary)',
                marginBottom: '0.5rem',
              }}>
                {field.label}
                {field.hint && (
                  <span style={{ fontWeight: 400, color: 'var(--color-text-muted)', fontSize: 'var(--text-xs)', marginLeft: '0.5rem' }}>
                    ({field.hint})
                  </span>
                )}
              </label>
              {field.key === 'about' ? (
                <textarea
                  value={fields[field.key]}
                  onChange={e => update(field.key, e.target.value)}
                  rows={3}
                  placeholder={field.placeholder}
                  className="form-input"
                  style={{ resize: 'vertical' }}
                />
              ) : (
                <input
                  type="text"
                  value={fields[field.key]}
                  onChange={e => update(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  className="form-input"
                />
              )}
            </div>
          ))}
        </div>

        {/* Key insight */}
        <div style={{ marginBottom: '2.5rem' }}>
          <label style={{
            display: 'block',
            fontSize: 'var(--text-sm)',
            fontWeight: 600,
            color: 'var(--color-text-secondary)',
            marginBottom: '0.5rem',
          }}>
            1-Sentence Summary of This Lead
          </label>
          <textarea
            value={fields['summary']}
            onChange={e => update('summary', e.target.value)}
            rows={2}
            placeholder="e.g. A 3-person wellness studio spending 6hrs/week on manual booking admin they want to eliminate..."
            className="form-input"
            style={{ resize: 'vertical' }}
          />
        </div>

        {/* Call prep */}
        <div className="prep-card" style={{ marginBottom: '1.5rem' }}>
          <button
            onClick={() => setShowPrep(p => !p)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0 0 1.25rem',
              borderBottom: '1px solid var(--color-border)',
              marginBottom: showPrep ? '1.5rem' : 0,
            }}
          >
            <span style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-text-primary)' }}>
              Discovery Call Questions
            </span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-accent)', fontWeight: 500 }}>
              {showPrep ? 'Hide' : 'Show'}
            </span>
          </button>

          {showPrep && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {CALL_PREP.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                  <span style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    color: 'var(--color-accent)',
                    fontFamily: 'var(--font-mono)',
                    marginTop: '0.2rem',
                    minWidth: '1.5rem',
                  }}>
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  <div>
                    <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
                      {item.q}
                    </p>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                      {item.hint}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Qualifying checklist */}
        <div style={{
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--color-border)',
          background: 'var(--color-surface)',
          padding: '1.75rem',
        }}>
          <h2 style={{
            fontSize: 'var(--text-base)',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: '1.25rem',
          }}>
            Qualifying Checklist
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '0.5rem',
            marginBottom: '1.5rem',
          }}>
            {[
              'Has a real business (not just an idea)',
              'Decision maker or direct access to one',
              'Problem worth solving (time/money/revenue)',
              'Has budget awareness (not price shopping)',
              'Good fit: 1–20 staff, service business',
              'Available for follow-up / responsive',
            ].map((item, i) => (
              <label key={i} className="check-item">
                <div className="check-box">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <polyline points="2 5 4.5 7.5 8 3" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="check-label">{item}</span>
              </label>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)' }}>
            <button style={{
              padding: '0.625rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(34, 197, 94, 0.12)',
              border: '1px solid rgba(34, 197, 94, 0.25)',
              color: '#4ade80',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              transition: 'all 0.2s ease',
            }}>
              Qualify — Book Audit
            </button>
            <button style={{
              padding: '0.625rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              color: '#f87171',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              transition: 'all 0.2s ease',
            }}>
              Disqualify
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ marginTop: '2.5rem' }}>
          <a
            href="/ops"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.625rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-muted)',
              fontSize: 'var(--text-sm)',
              fontWeight: 500,
              transition: 'all 0.2s ease',
            }}
          >
            ← Back to Ops
          </a>
        </div>
      </main>
    </>
  )
}