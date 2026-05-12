'use client'

import { useState } from 'react'

// ── Form data shape ──────────────────────────────────────
interface FormData {
  // 1. Business overview
  businessName: string
  industry: string
  yearsInBusiness: string
  teamSize: string
  location: string
  businessDesc: string

  // 2. Tech stack
  toolsPlatforms: string
  crm: string
  accounting: string
  projectManagement: string

  // 3. AI adoption
  aiTried: string
  aiSuccess: string
  aiFailed: string
  aiGoals: string

  // 4. Pain points
  painPoints: string[]
  painOther: string

  // 5. Audit goals
  auditGoals: string[]
  auditGoalsOther: string
  biggestWin: string

  // 6. Budget / timeline
  budget: string
  timeline: string

  // 7. Decision-maker
  contactName: string
  contactRole: string
  contactEmail: string
  decisionMakers: string
  blocker: string

  // 8. Anything else
  anythingElse: string
}

// ── Sections ─────────────────────────────────────────────
const SECTIONS = [
  { id: 1, label: 'Business', title: 'Business Overview', icon: '◆' },
  { id: 2, label: 'Tech',     title: 'Current Tech Stack', icon: '◈' },
  { id: 3, label: 'AI',       title: 'AI Adoption Status', icon: '◇' },
  { id: 4, label: 'Pain',     title: 'Biggest Pain Points', icon: '◉' },
  { id: 5, label: 'Goals',    title: 'Audit Goals', icon: '◆' },
  { id: 6, label: 'Budget',   title: 'Budget & Timeline', icon: '◈' },
  { id: 7, label: 'Contact',  title: 'Decision Makers', icon: '◇' },
  { id: 8, label: 'Extra',    title: 'Anything Else', icon: '◉' },
]

const PAIN_OPTIONS = [
  'Too many manual/repetitive tasks',
  'Data scattered across too many tools',
  'No real-time visibility into business performance',
  'Reporting takes too long',
  'Team adoption of tools is poor',
  'Communication breakdowns between departments',
  'Compliance & tax tracking issues',
  'Sales pipeline not well managed',
  'Customer follow-up & onboarding is messy',
  'Project/job delivery is hard to track',
  'Hiring/admin overhead is too high',
  'Other (tell us below)',
]

const GOAL_OPTIONS = [
  'Automate repetitive admin work',
  'Build dashboards & real-time reporting',
  'Streamline sales & CRM processes',
  'Fix broken internal workflows',
  'Reduce manual data entry',
  'Improve team communication & task management',
  'Set up AI agents to handle enquiries or tasks',
  'Improve compliance & bookkeeping workflows',
  'Other (tell us below)',
]

// ── Component ────────────────────────────────────────────
export default function AuditQuestionnairePage() {
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const [data, setData] = useState<FormData>({
    businessName: '', industry: '', yearsInBusiness: '', teamSize: '', location: '', businessDesc: '',
    toolsPlatforms: '', crm: '', accounting: '', projectManagement: '',
    aiTried: '', aiSuccess: '', aiFailed: '', aiGoals: '',
    painPoints: [], painOther: '',
    auditGoals: [], auditGoalsOther: '', biggestWin: '',
    budget: '', timeline: '',
    contactName: '', contactRole: '', contactEmail: '', decisionMakers: '', blocker: '',
    anythingElse: '',
  })

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setData(d => ({ ...d, [field]: e.target.value }))
  }

  const toggleArray = (field: 'painPoints' | 'auditGoals', value: string) => {
    setData(d => {
      const arr = d[field]
      return { ...d, [field]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value] }
    })
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/audit-questionnaire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(await res.text())
      setSubmitted(true)
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : 'Submission failed. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return <SuccessScreen />
  }

  const section = SECTIONS[step - 1]
  const progressPct = ((step - 1) / (SECTIONS.length - 1)) * 100

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .qf-page {
          background: var(--color-bg);
          color: var(--color-text-primary);
          font-family: var(--font-body);
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        /* ── Header ── */
        .qf-header {
          border-bottom: 1px solid var(--color-border);
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(6,6,10,0.9);
          backdrop-filter: blur(12px);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .qf-logo { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; }
        .qf-logo img { height: 28px; width: auto; object-fit: contain; }
        .qf-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-accent);
          border: 1px solid var(--color-border-accent);
          background: var(--color-accent-subtle);
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
        }

        /* ── Progress bar ── */
        .qf-progress {
          padding: 1.5rem 2rem 0;
          max-width: 680px;
          margin: 0 auto;
        }
        .qf-progress-track {
          height: 4px;
          background: rgba(255,255,255,0.06);
          border-radius: 99px;
          overflow: hidden;
          position: relative;
        }
        .qf-progress-track::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(124,111,255,0.2), rgba(168,100,255,0.2));
          border-radius: 99px;
        }
        .qf-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-accent) 0%, #8b6fff 50%, #a78bfa 100%);
          border-radius: 99px;
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          box-shadow: 0 0 16px rgba(124,111,255,0.5);
        }
        .qf-progress-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0.75rem;
        }
        .qf-progress-step {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-text-kicker);
        }
        .qf-progress-dots {
          display: flex;
          gap: 0.35rem;
          align-items: center;
        }
        .qf-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          transition: all 0.3s ease;
        }
        .qf-dot.done    { background: var(--color-accent); box-shadow: 0 0 8px rgba(124,111,255,0.5); }
        .qf-dot.current { background: linear-gradient(135deg, var(--color-accent), #a78bfa); box-shadow: 0 0 12px rgba(124,111,255,0.7), 0 0 4px rgba(124,111,255,0.4); transform: scale(1.3); }

        /* ── Form area ── */
        .qf-container {
          max-width: 640px;
          margin: 0 auto;
          padding: 3rem 2rem 4rem;
          position: relative;
        }
        .qf-container::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(124,111,255,0.4), rgba(168,100,255,0.1), rgba(124,111,255,0.05));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .qf-section-tag {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-accent);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .qf-section-tag::before {
          content: '';
          display: block;
          width: 18px;
          height: 1px;
          background: var(--color-accent);
        }
        .qf-title {
          font-size: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--color-text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }
        .qf-subtitle {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        /* ── Field groups ── */
        .qf-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }
        @media (max-width: 540px) { .qf-grid-2 { grid-template-columns: 1fr; } }
        .qf-field { margin-bottom: 1.25rem; }
        .qf-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          margin-bottom: 0.5rem;
          letter-spacing: 0.01em;
        }
        .qf-input, .qf-select, .qf-textarea {
          width: 100%;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          color: var(--color-text-primary);
          font-family: var(--font-body);
          font-size: 0.9rem;
          padding: 0.75rem 1rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
          -webkit-appearance: none;
          appearance: none;
        }
        .qf-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%238b85ff' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
          cursor: pointer;
        }
        .qf-textarea { resize: vertical; min-height: 100px; line-height: 1.6; }
        .qf-input:focus, .qf-select:focus, .qf-textarea:focus {
          border-color: var(--color-border-accent);
          box-shadow: 0 0 0 3px var(--color-accent-glow);
        }
        .qf-hint {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin-top: 0.375rem;
          font-style: italic;
        }

        /* ── Checkbox options ── */
        .qf-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .qf-option {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          background: var(--color-surface);
          cursor: pointer;
          transition: all 0.2s ease;
          user-select: none;
        }
        .qf-option:hover {
          border-color: var(--color-border-accent);
          background: var(--color-surface-hover);
        }
        .qf-option.checked {
          border-color: var(--color-accent);
          background: var(--color-accent-subtle);
        }
        .qf-option-box {
          width: 18px;
          height: 18px;
          border: 1.5px solid var(--color-border-hover);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
          background: var(--color-bg);
        }
        .qf-option.checked .qf-option-box {
          border-color: var(--color-accent);
          background: var(--color-accent);
        }
        .qf-option-text {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          line-height: 1.4;
        }
        .qf-option.checked .qf-option-text { color: var(--color-text-primary); }

        /* ── Divider ── */
        .qf-divider {
          border: none;
          border-top: 1px solid var(--color-border);
          margin: 2rem 0;
        }

        /* ── Navigation ── */
        .qf-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 2.5rem;
          gap: 1rem;
        }
        .qf-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-lg);
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          outline: none;
          text-decoration: none;
        }
        .qf-btn-ghost {
          background: transparent;
          border: 1px solid var(--color-border);
          color: var(--color-text-muted);
        }
        .qf-btn-ghost:hover {
          border-color: var(--color-border-hover);
          color: var(--color-text-secondary);
        }
        .qf-btn-primary {
          background: linear-gradient(135deg, var(--color-accent) 0%, #7c6fff 50%, #a78bfa 100%);
          color: #fff;
          box-shadow: 0 4px 20px rgba(124,111,255,0.35), 0 0 0 1px rgba(124,111,255,0.2);
        }
        .qf-btn-primary:hover {
          background: linear-gradient(135deg, #7c6fff 0%, #a78bfa 50%, #c4b5fd 100%);
          transform: translateY(-1px);
          box-shadow: 0 8px 32px rgba(124,111,255,0.45), 0 0 0 1px rgba(124,111,255,0.3);
        }
        .qf-btn-primary:active { transform: translateY(0); }
        .qf-btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }
        .qf-btn-submit {
          background: linear-gradient(135deg, var(--color-accent) 0%, #6a5eee 100%);
          color: #fff;
          padding: 0.875rem 2rem;
          font-size: 1rem;
          box-shadow: 0 4px 24px var(--color-accent-glow);
        }
        .qf-btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px var(--color-accent-glow);
        }

        /* ── Error banner ── */
        .qf-error {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.3);
          border-radius: var(--radius-lg);
          padding: 1rem;
          color: #fca5a5;
          font-size: 0.875rem;
          margin-top: 1.5rem;
        }

        /* ── Fade animations ── */
        .qf-fade-in {
          animation: qfFadeIn 0.3s ease-out;
        }
        @keyframes qfFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Gradient text ── */
        .qf-gradient-title {
          background: linear-gradient(135deg, #fff 0%, #c4b5fd 40%, #a78bfa 70%, #8b6fff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Success screen ── */
        .qf-success {
          max-width: 540px;
          margin: 0 auto;
          padding: 5rem 2rem;
          text-align: center;
        }
        .qf-success-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(52,211,153,0.15);
          border: 2px solid var(--color-success);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          font-size: 2rem;
          color: var(--color-success);
          animation: qfPop 0.5s cubic-bezier(0.175,0.885,0.32,1.275);
        }
        @keyframes qfPop {
          from { transform: scale(0.5); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
        .qf-success-title {
          font-size: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--color-text-primary);
          margin-bottom: 1rem;
        }
        .qf-success-body {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .qf-success-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-accent);
          border: 1px solid var(--color-border-accent);
          background: var(--color-accent-subtle);
          padding: 0.375rem 1rem;
          border-radius: 999px;
        }
      `}</style>

      <div className="qf-page">
        {/* Header */}
        <header className="qf-header">
          <a href="https://emvyai.com" className="qf-logo">
            <img src="/assets/emvy-logo-nobg-trimmed.png" alt="EMVY" style={{height: 28, objectFit: 'contain'}} />
          </a>
          <span className="qf-badge">Discovery Form</span>
        </header>

        {/* Progress */}
        <div className="qf-progress">
          <div className="qf-progress-track">
            <div className="qf-progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
          <div className="qf-progress-meta">
            <span className="qf-progress-step">Step {step} of {SECTIONS.length} — {section.label}</span>
            <div className="qf-progress-dots">
              {SECTIONS.map(s => (
                <div
                  key={s.id}
                  className={`qf-dot${s.id < step ? ' done' : s.id === step ? ' current' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="qf-container">
          <div className="qf-fade-in" key={step}>

            {step === 1 && <Section1 data={data} set={set} />}
            {step === 2 && <Section2 data={data} set={set} />}
            {step === 3 && <Section3 data={data} set={set} />}
            {step === 4 && <Section4 data={data} toggleArray={toggleArray} setData={setData} />}
            {step === 5 && <Section5 data={data} toggleArray={toggleArray} set={set} />}
            {step === 6 && <Section6 data={data} set={set} />}
            {step === 7 && <Section7 data={data} set={set} />}
            {step === 8 && <Section8 data={data} set={set} />}

            {/* Navigation */}
            <div className="qf-nav">
              <button
                className="qf-btn qf-btn-ghost"
                onClick={() => setStep(s => s - 1)}
                style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
              >
                ← Back
              </button>
              {step < SECTIONS.length ? (
                <button className="qf-btn qf-btn-primary" onClick={() => setStep(s => s + 1)}>
                  Continue →
                </button>
              ) : (
                <button
                  className="qf-btn qf-btn-submit"
                  onClick={handleSubmit}
                  disabled={submitting}
                >
                  {submitting ? 'Submitting…' : 'Submit form'}
                </button>
              )}
            </div>

            {submitError && <div className="qf-error">{submitError}</div>}
          </div>
        </div>
      </div>
    </>
  )
}

// ── Section components ──────────────────────────────────

function Section1({ data, set }: { data: FormData; set: (f: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void }) {
  return (
    <>
      <div className="qf-section-tag">01 — Business Overview</div>
      <h2 className="qf-title qf-gradient-title">Tell us about your business</h2>
      <p className="qf-subtitle">We'll use this to frame the entire audit around your specific context and goals.</p>

      <div className="qf-grid-2">
        <div className="qf-field">
          <label className="qf-label">Business name *</label>
          <input className="qf-input" placeholder="e.g. Acme Plumbing" value={data.businessName} onChange={set('businessName')} />
        </div>
        <div className="qf-field">
          <label className="qf-label">Industry *</label>
          <input className="qf-input" placeholder="e.g. Electrical, Healthcare, Retail" value={data.industry} onChange={set('industry')} />
        </div>
      </div>

      <div className="qf-grid-2">
        <div className="qf-field">
          <label className="qf-label">Years in business</label>
          <select className="qf-select" value={data.yearsInBusiness} onChange={set('yearsInBusiness')}>
            <option value="">Select…</option>
            <option value="0-1">Less than 1 year</option>
            <option value="1-3">1–3 years</option>
            <option value="3-7">3–7 years</option>
            <option value="7-15">7–15 years</option>
            <option value="15+">15+ years</option>
          </select>
        </div>
        <div className="qf-field">
          <label className="qf-label">Team size</label>
          <select className="qf-select" value={data.teamSize} onChange={set('teamSize')}>
            <option value="">Select…</option>
            <option value="1-2">1–2 people</option>
            <option value="3-5">3–5 people</option>
            <option value="6-15">6–15 people</option>
            <option value="16-50">16–50 people</option>
            <option value="50+">50+ people</option>
          </select>
        </div>
      </div>

      <div className="qf-field">
        <label className="qf-label">Location / service area</label>
        <input className="qf-input" placeholder="e.g. Sydney, NSW / Australia-wide / Remote-first" value={data.location} onChange={set('location')} />
      </div>

      <div className="qf-field">
        <label className="qf-label">What does your business do? (1-2 sentences)</label>
        <textarea
          className="qf-textarea"
          placeholder="e.g. We provide residential and commercial electrical services across Sydney, with a focus on solar installs and switchboard upgrades."
          value={data.businessDesc}
          onChange={set('businessDesc')}
          style={{ minHeight: 90 }}
        />
      </div>
    </>
  )
}

function Section2({ data, set }: { data: FormData; set: (f: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void }) {
  return (
    <>
      <div className="qf-section-tag">02 — Tech Stack</div>
      <h2 className="qf-title">Tools & platforms you use</h2>
      <p className="qf-subtitle">List what you currently use — even if it's just a spreadsheet held together with good intentions.</p>

      <div className="qf-field">
        <label className="qf-label">What tools, software or platforms are you currently using?</label>
        <textarea
          className="qf-textarea"
          placeholder="e.g. Xero for accounting, Calendly for bookings, Google Sheets for job tracking, Square for payments…"
          value={data.toolsPlatforms}
          onChange={set('toolsPlatforms')}
          style={{ minHeight: 90 }}
        />
        <p className="qf-hint">Be as specific or vague as you like — we'll fill in the gaps during the audit.</p>
      </div>

      <div className="qf-grid-2">
        <div className="qf-field">
          <label className="qf-label">CRM / contact management</label>
          <input className="qf-input" placeholder="e.g. HubSpot, Sheets, nothing" value={data.crm} onChange={set('crm')} />
        </div>
        <div className="qf-field">
          <label className="qf-label">Accounting / invoicing</label>
          <input className="qf-input" placeholder="e.g. Xero, MYOB, QuickBooks" value={data.accounting} onChange={set('accounting')} />
        </div>
      </div>

      <div className="qf-field">
        <label className="qf-label">Project / task management</label>
        <input className="qf-input" placeholder="e.g. Asana, Notion, Trello, whiteboard and prayers" value={data.projectManagement} onChange={set('projectManagement')} />
      </div>
    </>
  )
}

function Section3({ data, set }: { data: FormData; set: (f: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void }) {
  return (
    <>
      <div className="qf-section-tag">03 — AI Adoption</div>
      <h2 className="qf-title">Where are you with AI?</h2>
      <p className="qf-subtitle">We've seen everything from "we tried ChatGPT once" to "we have an AI ops team." No judgment — honest answers help us help you.</p>

      <div className="qf-field">
        <label className="qf-label">What AI tools or automations have you tried? (if any)</label>
        <textarea
          className="qf-textarea"
          placeholder="e.g. ChatGPT for writing, Zapier for email automation, a failed chatbot setup…"
          value={data.aiTried}
          onChange={set('aiTried')}
          style={{ minHeight: 90 }}
        />
      </div>

      <div className="qf-field">
        <label className="qf-label">What worked? (be honest)</label>
        <textarea
          className="qf-textarea"
          placeholder="e.g. ChatGPT for drafting emails saved about 2 hours/week…"
          value={data.aiSuccess}
          onChange={set('aiSuccess')}
          style={{ minHeight: 90 }}
        />
      </div>

      <div className="qf-field">
        <label className="qf-label">What didn't work or fell apart?</label>
        <textarea
          className="qf-textarea"
          placeholder="e.g. We tried to automate onboarding with bots — customers ignored them…"
          value={data.aiFailed}
          onChange={set('aiFailed')}
          style={{ minHeight: 90 }}
        />
      </div>

      <div className="qf-field">
        <label className="qf-label">What do you want AI to actually do for your business?</label>
        <textarea
          className="qf-textarea"
          placeholder="e.g. Handle incoming enquiries so I stop missing leads, generate weekly reports automatically…"
          value={data.aiGoals}
          onChange={set('aiGoals')}
          style={{ minHeight: 90 }}
        />
      </div>
    </>
  )
}

function Section4({ data, toggleArray, setData }: { data: FormData; toggleArray: (f: 'painPoints', v: string) => void; setData: React.Dispatch<React.SetStateAction<FormData>> }) {
  return (
    <>
      <div className="qf-section-tag">04 — Pain Points</div>
      <h2 className="qf-title">What's actually broken?</h2>
      <p className="qf-subtitle">Select everything that resonates — we'll dig into the details on the call.</p>

      <div className="qf-options">
        {PAIN_OPTIONS.map(opt => {
          const checked = data.painPoints.includes(opt)
          return (
            <div
              key={opt}
              className={`qf-option${checked ? ' checked' : ''}`}
              onClick={() => toggleArray('painPoints', opt)}
            >
              <div className="qf-option-box">
                {checked && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className="qf-option-text">{opt}</span>
            </div>
          )
        })}
      </div>

      <div className="qf-field" style={{ marginTop: '1rem' }}>
        <label className="qf-label">Anything else we should know?</label>
        <textarea
          className="qf-textarea"
          placeholder="Describe any other pain points…"
          value={data.painOther}
          onChange={e => setData(d => ({ ...d, painOther: e.target.value }))}
          style={{ minHeight: 80 }}
        />
      </div>
    </>
  )
}

function Section5({ data, toggleArray, set }: { data: FormData; toggleArray: (f: 'auditGoals', v: string) => void; set: (f: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void }) {
  return (
    <>
      <div className="qf-section-tag">05 — Audit Goals</div>
      <h2 className="qf-title">What do you want from this audit?</h2>
      <p className="qf-subtitle">Select the goals that matter most — we'll prioritize accordingly.</p>

      <div className="qf-options">
        {GOAL_OPTIONS.map(opt => {
          const checked = data.auditGoals.includes(opt)
          return (
            <div
              key={opt}
              className={`qf-option${checked ? ' checked' : ''}`}
              onClick={() => toggleArray('auditGoals', opt)}
            >
              <div className="qf-option-box">
                {checked && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className="qf-option-text">{opt}</span>
            </div>
          )
        })}
      </div>

      <div className="qf-field" style={{ marginTop: '1rem' }}>
        <label className="qf-label">Anything else you want from the audit?</label>
        <input
          className="qf-input"
          placeholder="e.g. Help convincing my co-founder this is worth doing…"
          value={data.auditGoalsOther}
          onChange={set('auditGoalsOther')}
        />
      </div>

      <hr className="qf-divider" />

      <div className="qf-field">
        <label className="qf-label">If we could only deliver one win — what would it be?</label>
        <textarea
          className="qf-textarea"
          placeholder="e.g. I want to stop spending 3 hours every Friday manually pulling reports…"
          value={data.biggestWin}
          onChange={set('biggestWin')}
          style={{ minHeight: 80 }}
        />
        <p className="qf-hint">This is the most important question on this form. Be specific.</p>
      </div>
    </>
  )
}

function Section6({ data, set }: { data: FormData; set: (f: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void }) {
  return (
    <>
      <div className="qf-section-tag">06 — Budget & Timeline</div>
      <h2 className="qf-title">When and how much?</h2>
      <p className="qf-subtitle">Helps us calibrate recommendations. Ranges are fine — we won't judge a small budget, but we'll be honest if the timeline doesn't match reality.</p>

      <div className="qf-field">
        <label className="qf-label">What's your approximate monthly budget for AI/automation work?</label>
        <select className="qf-select" value={data.budget} onChange={set('budget')}>
          <option value="">Select a range…</option>
          <option value="under-1k">Under $1,000/month</option>
          <option value="1k-3k">$1,000 – $3,000/month</option>
          <option value="3k-7k">$3,000 – $7,000/month</option>
          <option value="7k-15k">$7,000 – $15,000/month</option>
          <option value="15k+">$15,000+/month</option>
          <option value="not-sure">Not sure yet — need guidance</option>
        </select>
      </div>

      <div className="qf-field">
        <label className="qf-label">When do you want to see results?</label>
        <select className="qf-select" value={data.timeline} onChange={set('timeline')}>
          <option value="">Select…</option>
          <option value="asap">ASAP — we have urgent problems</option>
          <option value="1-2-months">Within 1–2 months</option>
          <option value="3-6-months">Within 3–6 months</option>
          <option value="6-12-months">Within 6–12 months</option>
          <option value="exploring">Just exploring for now</option>
        </select>
      </div>
    </>
  )
}

function Section7({ data, set }: { data: FormData; set: (f: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void }) {
  return (
    <>
      <div className="qf-section-tag">07 — Decision Makers</div>
      <h2 className="qf-title">Who else is involved?</h2>
      <p className="qf-subtitle">Helps us know who to loop in and whether there are blockers we need to navigate around.</p>

      <div className="qf-grid-2">
        <div className="qf-field">
          <label className="qf-label">Your name *</label>
          <input className="qf-input" placeholder="Jane Smith" value={data.contactName} onChange={set('contactName')} />
        </div>
        <div className="qf-field">
          <label className="qf-label">Your role</label>
          <input className="qf-input" placeholder="e.g. Founder, Operations Manager" value={data.contactRole} onChange={set('contactRole')} />
        </div>
      </div>

      <div className="qf-field">
        <label className="qf-label">Email address *</label>
        <input className="qf-input" type="email" placeholder="jane@business.com" value={data.contactEmail} onChange={set('contactEmail')} />
      </div>

      <div className="qf-field">
        <label className="qf-label">Who else is involved in this decision?</label>
        <textarea
          className="qf-textarea"
          placeholder="e.g. My business partner Sarah has to sign off on anything over $2k…"
          value={data.decisionMakers}
          onChange={set('decisionMakers')}
          style={{ minHeight: 80 }}
        />
      </div>

      <div className="qf-field">
        <label className="qf-label">Any internal blockers we should know about?</label>
        <textarea
          className="qf-textarea"
          placeholder="e.g. Team is resistant to change, IT has security concerns, budget approval process…"
          value={data.blocker}
          onChange={set('blocker')}
          style={{ minHeight: 80 }}
        />
      </div>
    </>
  )
}

function Section8({ data, set }: { data: FormData; set: (f: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void }) {
  return (
    <>
      <div className="qf-section-tag">08 — Final thoughts</div>
      <h2 className="qf-title">Anything else?</h2>
      <p className="qf-subtitle">This is your chance to share anything that doesn't fit neatly above — a specific situation, a recent failure, something you're embarrassed about, whatever.</p>

      <div className="qf-field">
        <label className="qf-label">Anything else you want us to know before the audit call?</label>
        <textarea
          className="qf-textarea"
          placeholder="Tell us anything…"
          value={data.anythingElse}
          onChange={set('anythingElse')}
          style={{ minHeight: 140 }}
        />
      </div>
    </>
  )
}

function SuccessScreen() {
  return (
    <div className="qf-page">
      <header className="qf-header">
        <a href="https://emvyai.com" className="qf-logo">
          <img src="/assets/emvy-logo-nobg-trimmed.png" alt="EMVY" style={{height: 28, objectFit: 'contain'}} />
        </a>
        <span className="qf-badge">Discovery Form</span>
      </header>
      <div className="qf-success">
        <div className="qf-success-icon">✓</div>
        <h2 className="qf-success-title">You're all set</h2>
        <p className="qf-success-body">
          We've received your answers. Dusk will review everything before your audit call so he can give you the most relevant, high-value recommendations possible.
          <br /><br />
          Expect to hear from us within 24 hours to confirm your audit time.
        </p>
        <span className="qf-success-badge">Form received</span>
      </div>
    </div>
  )
}