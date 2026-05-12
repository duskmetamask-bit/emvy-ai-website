'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

const sections = [
  {
    title: 'Who we are',
    content: `EMVY AI Pty Ltd (ABN 12 345 678 901) ("EMVY", "we", "our") is an Australian AI consultancy. We design, build, and maintain AI agent systems for Australian businesses.

Our website is https://emvyai.com and our email is hello@emvyai.com.`,
  },
  {
    title: 'Services',
    content: `EMVY provides AI consultancy services including (but not limited to):

• AI system design and architecture
• AI agent build and deployment (phone, text, and autonomous)
• AI system integration with existing business tools
• AI system maintenance and optimisation
• AI audits and strategy

Specific scope, deliverables, timelines, and pricing are agreed in writing before commencement of any engagement.`,
  },
  {
    title: 'Engagement process',
    content: `Our standard engagement process is as follows:

1. Discovery call: We learn about your business and assess whether AI is a good fit.
2. Scoping: We define the specific scope, deliverables, timeline, and investment.
3. Agreement: A Statement of Work (SOW) or services agreement is signed.
4. Build: We design, build, and deploy the agreed AI system.
5. Handover: We walk you through the system and provide documentation.
6. Ongoing (optional): Maintenance and optimisation services as separately agreed.`,
  },
  {
    title: 'Payment terms',
    content: `Payment terms are as specified in your agreed SOW or services agreement. Standard terms are:

• New builds: 50% upfront, 50% on completion
• Maintenance plans: Monthly in advance
• Additional builds: 50% upfront, 50% on completion

All prices are in Australian dollars (AUD) and exclusive of GST unless stated otherwise. Invoices are due 14 days from date of issue. We reserve the right to pause work if payment is overdue by more than 7 days.`,
  },
  {
    title: 'Intellectual property',
    content: `The ownership of intellectual property (IP) in the work we produce is as follows:

• Your data: You retain full ownership of all your business data, customer data, and content.
• Custom configurations: The specific configuration, prompts, and workflows built for your business are yours to use.
• Our tools and frameworks: We retain ownership of our general tools, frameworks, and methodologies. These are licensed to you for use within the scope of our engagement.
• Pre-existing IP: Any pre-existing IP brought into the engagement remains with the original owner.`,
  },
  {
    title: 'Client responsibilities',
    content: `You are responsible for:

• Providing timely access to the information, systems, and contacts we need to deliver the services
• Reviewing and approving deliverables within a reasonable timeframe
• Ensuring you have the right to use any third-party tools, platforms, or data you ask us to integrate with
• Making timely payment in accordance with the agreed payment terms`,
  },
  {
    title: 'Limitations of liability',
    content: `To the maximum extent permitted by Australian law:

• EMVY's liability for any claim arising from our services is limited to the total fees paid by you in the 12 months preceding the claim.
• EMVY is not liable for indirect, consequential, special, or punitive damages.
• EMVY is not liable for any failure or delay caused by circumstances outside our reasonable control.
• EMVY is not liable for the actions, decisions, or outputs of AI systems deployed on behalf of clients — including but not limited to the content of calls, messages, or automated decisions made by AI agents.`,
  },
  {
    title: 'Warranties',
    content: `EMVY warrants that:

• We will deliver services with reasonable care and skill in accordance with industry standards
• We have the right to enter into this agreement
• Our services do not infringe the intellectual property rights of any third party

To the maximum extent permitted by law, all other warranties — express or implied — are excluded.`,
  },
  {
    title: 'Termination',
    content: `Either party may terminate an engagement by providing written notice. In the event of termination:

• You will pay for all work completed up to the date of termination
• If terminated without cause, you will also pay a reasonable termination fee of up to 25% of the remaining engagement value to cover scoping and setup costs
• We will deliver all completed work product up to the date of termination
• Neither party will be liable for any further obligations beyond what has already been delivered`,
  },
  {
    title: 'Confidentiality',
    content: `Both parties agree to keep confidential any confidential information disclosed by the other party during the course of the engagement. Confidential information does not include information that is publicly available, already known to the recipient, or independently developed without use of the other party's confidential information.

This obligation survives termination of the engagement.`,
  },
  {
    title: 'Disputes',
    content: `If a dispute arises, both parties agree to attempt to resolve it in good faith through direct negotiation. If negotiation fails within 30 days, either party may seek relief through the courts of New South Wales, Australia, which will have exclusive jurisdiction.`,
  },
  {
    title: 'Changes to these terms',
    content: `We may update these Terms of Service from time to time. Material changes will be notified to you in writing before they take effect.

These Terms of Service were last updated on 1 January 2025.`,
  },
  {
    title: 'Contact',
    content: `If you have any questions about these Terms of Service, please contact us:

Email: hello@emvyai.com
Post: EMVY AI Pty Ltd, Australia`,
  },
]

function TermsSection({ section }: { section: typeof sections[0] }) {
  return (
    <div className="terms-section">
      <h2 className="terms-title">{section.title}</h2>
      <div className="terms-content">
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

export default function Terms() {
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
              <h1 className="page-title">Terms of Service</h1>
              <p className="page-date">Last updated: 1 January 2025</p>
            </div>
            <div className="terms-grid">
              {sections.map((s) => (
                <TermsSection key={s.title} section={s} />
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
.terms-grid { display: flex; flex-direction: column; gap: 1.5rem; max-width: 720px; margin: 0 auto; }
.terms-section { padding: 1.75rem; border-radius: var(--radius-xl); border: 1px solid rgba(79, 142, 255, 0.15); background: var(--color-surface); }
.terms-title { font-size: 1.125rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.75rem; }
.terms-content p { font-size: 0.9375rem; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 0.5rem; }
.terms-content p:last-child { margin-bottom: 0; }
`