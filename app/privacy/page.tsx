'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

const sections = [
  {
    title: 'Who we are',
    content: `EMVY AI Pty Ltd (ABN 12 345 678 901) is an Australian AI consultancy. We design, build, and maintain AI agent systems for Australian businesses.

Our website is https://emvyai.com and we can be reached at hello@emvyai.com.`,
  },
  {
    title: 'What data we collect',
    content: `We collect only what we need to deliver our services:

• Business information: company name, ABN, contact details, and operational context you provide during scoping
• Communication data: call recordings, transcriptions, and chat logs from your AI agent interactions (owned by you; we process on your behalf)
• Usage data: how your AI systems perform — call volumes, response rates, error logs
• Website data: basic analytics (pages visited, time on site) via cookies and similar tools`,
  },
  {
    title: 'How we use it',
    content: `We use your data to:
• Deliver the AI services we have been engaged to build and maintain
• Monitor and optimise your AI systems' performance
• Communicate with you about your account, support requests, and service updates
• Improve our own internal tools and processes

We do not sell, rent, or share your data with third parties for their own marketing purposes.`,
  },
  {
    title: 'Data sharing',
    content: `We share your data only in these limited circumstances:

• Service providers: We use third-party infrastructure (VAPI, Twilio, Supabase, Vercel) to deliver your AI systems. These providers are contractually bound to handle your data securely and only for the purpose of delivering their services.
• Legal compliance: We will disclose data if required by Australian law or a valid legal process.
• Your instructions: We act on your direction. If you instruct us to share data with a third party, we will do so.`,
  },
  {
    title: 'Cookies',
    content: `Our website uses essential cookies for basic functionality and analytics cookies to understand how visitors use our site. You can disable analytics cookies in your browser settings — this will not affect your ability to use our website.

We do not use advertising cookies or tracking pixels.`,
  },
  {
    title: 'Data retention',
    content: `We retain your data for as long as we are actively delivering services to you, and for a reasonable period afterwards to fulfil our legal and contractual obligations.

Call recordings and transcriptions are retained according to the retention schedule agreed with you during onboarding, typically 90 days unless otherwise specified.`,
  },
  {
    title: 'Your rights',
    content: `Under the Australian Privacy Act 1988, you have the right to:
• Access the personal information we hold about you
• Correct inaccurate or out-of-date information
• Request deletion of your personal information (subject to our legal obligations)

To exercise any of these rights, contact us at hello@emvyai.com. We will respond within 30 days.`,
  },
  {
    title: 'Security',
    content: `We take security seriously. Our systems use industry-standard encryption (TLS/HTTPS), access controls, and monitoring. We regularly review our security posture and update our practices as the threat landscape evolves.

If you become aware of any security vulnerability in our systems, please contact us immediately at security@emvyai.com.`,
  },
  {
    title: 'Changes to this policy',
    content: `We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website before the changes take effect.

This Privacy Policy was last updated on 1 January 2025.`,
  },
  {
    title: 'Contact',
    content: `If you have any questions about this Privacy Policy or how we handle your data, please contact us:

Email: hello@emvyai.com
Post: EMVY AI Pty Ltd, Australia`,
  },
]

function PolicySection({ section }: { section: typeof sections[0] }) {
  return (
    <div className="policy-section">
      <h2 className="policy-title">{section.title}</h2>
      <div className="policy-content">
        {section.content.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  )
}

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

export default function Privacy() {
  return (
    <>
      <style>{headerStyles}</style>
      <style>{footerStyles}</style>
      <style>{pageStyles}</style>

      <div style={{ paddingTop: '2rem' }}>
        <Header />
        <main className="main-content">
          <div className="container">
            <div className="page-header">
              <h1 className="page-title">Privacy Policy</h1>
              <p className="page-date">Last updated: 1 January 2025</p>
            </div>
            <div className="policy-grid">
              {sections.map((s) => (
                <PolicySection key={s.title} section={s} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

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
.btn-primary { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; border-radius: var(--radius-lg); background: linear-gradient(135deg, #4F8EFF 0%, #A855F7 100%); color: #fff; font-size: 0.875rem; font-weight: 600; text-decoration: none; border: none; cursor: pointer; transition: all 0.25s ease; box-shadow: 0 0 20px rgba(79, 142, 255, 0.2); }
.btn-primary:hover { transform: translateY(-1px); box-shadow: 0 0 30px rgba(79, 142, 255, 0.35); }
.btn-primary.compact { padding: 0.5rem 1rem; font-size: 0.8125rem; }
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

const pageStyles = `
.main-content { padding: 4rem 0 5rem; }
.container { max-width: var(--max-width); margin: 0 auto; padding: 0 1.5rem; }
.page-header { text-align: center; margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 1px solid var(--color-border); }
.page-title { font-size: clamp(2rem, 5vw, 3rem); font-weight: 800; background: linear-gradient(135deg, #4F8EFF 0%, #A855F7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 0.5rem; }
.page-date { font-size: 0.875rem; color: var(--color-text-muted); }
.policy-grid { display: flex; flex-direction: column; gap: 1.5rem; max-width: 720px; margin: 0 auto; }
.policy-section { padding: 1.75rem; border-radius: var(--radius-xl); border: 1px solid rgba(79, 142, 255, 0.15); background: var(--color-surface); }
.policy-title { font-size: 1.125rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.75rem; }
.policy-content p { font-size: 0.9375rem; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 0.5rem; }
.policy-content p:last-child { margin-bottom: 0; }
`