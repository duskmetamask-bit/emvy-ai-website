'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

/* ── BLOG DATA ─────────────────────────────────────────── */
const posts: Record<string, {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  tag: string
  content: string[]
}> = {
  'ai-automation-roadmap-australian-smb': {
    title: 'How to Build an AI Automation Roadmap for Your Australian SMB',
    excerpt: 'Most businesses jump straight into tools. We take a different approach — audit first, build second. Here is how to map your real workflows and find the 2–3 automations that move the needle.',
    category: 'Strategy',
    date: '2025-04-14',
    readTime: '7 min read',
    tag: 'Planning',
    content: [
      "The most common mistake we see when SMBs approach AI is jumping straight to tools. They hear about a new AI agent, sign up, get excited, and then... nothing much changes. The tool sits there. The workflow remains manual. The promise of AI stays theoretical.",
      "The problem is not the tool. It is the absence of a roadmap.",
      "A proper AI automation roadmap starts with understanding how your business actually works — not the version you tell yourself, but the real day-to-day. Where does time go? Where do things break? What gets done repeatedly but never well?",
      "We call this the audit. It is the first and most important step, and it is completely free. You do not need to pay anyone to understand where you are before you can figure out where to go.",
      "The second principle is specificity over comprehensiveness. SMBs do not need twelve automations. They need the two or three that actually move the needle on revenue or time waste. The rest can wait.",
      "When we build a roadmap with a client, we are looking for high-frequency tasks that are rule-based, decisions that follow patterns, and any workflow where friction is costing something measurable.",
      "The third principle is that the roadmap belongs to you. When we finish the audit, you get the roadmap. No lock-in, no surprise invoices. If you want to build it yourself, the roadmap tells you where to start.",
      "If you want help building, that is what we do. But the starting point is always clarity first."
    ],
  },
  '为什么你的CRM没有起作用': {
    title: '为什么你的 CRM 没有起作用：数据同步问题诊断',
    excerpt: 'CRM 数据不同步是澳大利亚中小企业的常见痛点。当客户信息在 HubSpot、邮件和电子表格之间断裂时，AI agent 就无法正确运作。',
    category: 'Operations',
    date: '2025-03-28',
    readTime: '5 min read',
    tag: 'Diagnosis',
    content: [
      "CRM 数据不同步是我们在审计客户工作流程时看到的最常见问题之一。企业主购买了 HubSpot、Salesforce 或任何其他平台，按建议设置了字段，然后发现 AI agent 给出的建议与实际情况不符。",
      "根本原因几乎总是一样的：数据在多个系统之间断裂。客户信息在邮件中，在电子表格中，在前任留下的笔记中，在 CRM 的不同字段中。当 AI agent 需要做出判断时，它看到的是一个不完整的画面。",
      "诊断数据同步问题的第一步是追踪每条客户数据的来源和流动路径。询问：这条信息最初是在哪里输入的？谁负责更新它？它流向哪些系统？",
      "大多数 SMB 的问题不是缺少数据，而是数据过于分散。当我们绘制客户旅程的数据流时，几乎总是发现三到五个不同的信息来源在相互矛盾。",
      "解决方案不是购买新工具或聘请更多员工。解决方案是优先清理和同步最重要的数据——通常是客户联系信息、最新互动记录和当前状态。",
      "一旦这些核心数据源同步，AI agent 的准确性会显著提升，因为它们在实际数据上运行，而不是在不完整的记录上运行。",
    ],
  },
  'autonomous-agents-vs-basic-chatbots': {
    title: 'Autonomous AI Agents vs. Basic Chatbots: What Is the Difference?',
    excerpt: 'The buzzwords get used interchangeably, but the capability gap is enormous. If you have been burned by a chatbot that could not actually do anything, this breakdown will help you understand what real autonomy looks like.',
    category: 'AI Agents',
    date: '2025-03-10',
    readTime: '6 min read',
    tag: 'Explainer',
    content: [
      "The terms AI agent and chatbot are used interchangeably constantly, and it causes confusion. A chatbot that routes messages is not an AI agent. A system that runs autonomously, makes decisions, and completes tasks without constant human input is an AI agent. The difference matters.",
      "A basic chatbot responds to a prompt. It takes your question, runs it through a language model, and returns an answer. It does not remember what happened before the conversation started. It does not take actions in other systems. It does not continue working if you close the browser.",
      "An autonomous AI agent does not just answer questions. It is given an objective and it works toward that objective across multiple systems, handling exceptions, making decisions, and reporting back when it is done.",
      "The practical difference for an SMB owner is enormous. A chatbot can tell you what your customers are asking. An AI agent can respond to a customer enquiry, pull their history from your CRM, generate a quote, and send it — without you touching anything.",
      "The confusion is understandable. The underlying technology looks similar in demos. But the moment you need it to actually run while you sleep, or handle edge cases that were not planned for, the difference becomes obvious.",
      "If you have been burned by a chatbot that could not actually do anything, you were probably sold an agent but given a chatbot. They are not the same thing."
    ],
  },
  'custom-gpts-vs-built-agents': {
    title: 'Custom GPTs vs. Built AI Agents: Which Is Right for Your Business?',
    excerpt: 'OpenAI made it easy to spin up a GPT. But when does a Custom GPT stop being enough, and you actually need a proper built agent? We break down the trade-offs with real scenarios.',
    category: 'AI Agents',
    date: '2025-02-20',
    readTime: '8 min read',
    tag: 'Decision Guide',
    content: [
      "OpenAI's Custom GPTs changed the game for a lot of small businesses. For the first time, you could create a version of ChatGPT that knew your business context, your documents, your tone. No code required. No agent architecture. Just upload some PDFs, write some instructions, and go.",
      "For many SMBs, Custom GPTs are genuinely sufficient. If you need something that helps your team find information faster, draft better first-response emails, or onboard clients consistently, a well-configured Custom GPT can handle that.",
      "But there is a ceiling. Custom GPTs are fundamentally a retrieval and generation tool. They do not take actions. They do not integrate with your job management software, your CRM, or your quoting tool. They do not run on a schedule. They do not monitor an inbox and respond autonomously.",
      "The moment you need your AI to actually do something — send a quote, update a record, trigger a follow-up sequence, escalate something to a human — you need a built agent. Not a GPT.",
      "A built agent requires more engineering but it can operate independently. It can be connected to your existing tools via APIs, handle exceptions, and run at scale. The trade-off is upfront complexity for long-term capability.",
      "The honest answer for most SMBs is: start with a Custom GPT if the job is primarily information retrieval and generation. Graduate to a built agent when you have a workflow that needs to happen without you in the loop, across multiple systems.",
      "Most businesses we work with start with a Custom GPT, find its limits within a few weeks, and then build out proper agents for the workflows that actually matter."
    ],
  },
  'measuring-ai-roi': {
    title: 'Measuring AI ROI: The Metrics That Actually Matter',
    excerpt: 'Time saved is nice. Revenue impacted is better. Most businesses measure the wrong things — or measure nothing at all. Here is the framework we use with clients to track real AI impact.',
    category: 'Analytics',
    date: '2025-02-05',
    readTime: '9 min read',
    tag: 'Framework',
    content: [
      "Every client we work with asks some version of the same question: how do I know if this AI thing is actually working? The answer is rarely as simple as a dashboard with green lights. But it is also not as vague as gut feeling.",
      "The first mistake businesses make is measuring activity instead of outcomes. The AI agent processed 340 messages this month. The automation ran 1,200 times. These are vanity metrics. They tell you the system is running. They tell you nothing about whether it is making a difference.",
      "What you actually want to know is: did something get better because of this? Revenue, quote acceptance rate, time to response, admin hours, lead conversion rate — pick the one or two metrics that actually reflect your business health and track those before and after.",
      "The second mistake is not measuring at all. Most SMBs have no baseline. They deploy an AI system and then guess whether it helped. Without a before measurement, there is no way to know.",
      "We always recommend establishing a 30-day baseline before any AI deployment. Pick three metrics. Write them down. Then measure the same three metrics 30 days after deployment.",
      "The third mistake is measuring too soon. AI systems need time to learn your business context, especially early on. Give it at least four weeks before drawing conclusions.",
      "The framework we use with clients has four questions: What did we expect to happen? Did it happen? How much did it move the metric? Is the movement sustained? If the answer to the last question is no, we investigate why and adjust.",
      "The businesses that get the most out of AI are the ones that treat it like any other operational investment — measure it, review it, adjust it. Not magic. Just good business."
    ],
  },
}

/* ── HEADER ─────────────────────────────────────────────── */
function Header({ mobileOpen, onToggle }: { mobileOpen: boolean; onToggle: () => void }) {
  return (
    <>
      <header className="post-header">
        <div className="container">
          <div className="post-header-inner">
            <a href="/" className="post-header-logo" aria-label="EMVY home">
              <EmvyWordmark size={36} />
            </a>
            <nav className="post-header-nav" aria-label="Main navigation">
              <a href="/#services" className="post-header-nav-link">Services</a>
              <a href="/#how-we-work" className="post-header-nav-link">How We Work</a>
              <a href="/pricing" className="post-header-nav-link">Pricing</a>
              <a href="/about" className="post-header-nav-link">About</a>
              <a href="/blog" className="post-header-nav-link" style={{ color: 'var(--color-text-secondary)' }}>Blog</a>
            </nav>
            <div className="post-header-actions">
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact post-header-cta">
                Book free call
              </a>
              <button
                className="post-header-hamburger"
                onClick={onToggle}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
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

      {mobileOpen && (
        <div className="post-mobile-nav">
          <nav className="post-mobile-nav-inner">
            <a href="/#services" className="post-mobile-nav-link" onClick={onToggle}>Services</a>
            <a href="/#how-we-work" className="post-mobile-nav-link" onClick={onToggle}>How We Work</a>
            <a href="/pricing" className="post-mobile-nav-link" onClick={onToggle}>Pricing</a>
            <a href="/about" className="post-mobile-nav-link" onClick={onToggle}>About</a>
            <a href="/blog" className="post-mobile-nav-link" onClick={onToggle}>Blog</a>
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact w-fit" onClick={onToggle}>
              Book free call
            </a>
          </nav>
        </div>
      )}
    </>
  )
}

/* ── FOOTER ─────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="post-footer">
      <div className="container">
        <div className="post-footer-top">
          <div className="post-footer-brand">
            <a href="/" className="post-footer-logo" aria-label="EMVY home">
              <EmvyWordmark size={32} />
            </a>
            <p className="post-footer-brand-desc">
              AI consultancy for Australian SMBs.<br />Practical systems. Real results.
            </p>
            <div className="post-footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="post-footer-social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="post-footer-social-link" aria-label="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="post-footer-links">
            <div className="post-footer-col">
              <div className="post-footer-col-head">Services</div>
              <a href="/#services" className="post-footer-link">AI Agents</a>
              <a href="/#services" className="post-footer-link">Automations</a>
              <a href="/#services" className="post-footer-link">Ops Systems</a>
              <a href="/#services" className="post-footer-link">Integrations</a>
            </div>
            <div className="post-footer-col">
              <div className="post-footer-col-head">Company</div>
              <a href="/about" className="post-footer-link">About</a>
              <a href="/pricing" className="post-footer-link">Pricing</a>
              <a href="/blog" className="post-footer-link">Blog</a>
              <a href="/contact" className="post-footer-link">Contact</a>
            </div>
          </div>
        </div>
        <div className="post-footer-bottom">
          <div className="mono">© 2025 EMVY. All rights reserved.</div>
          <div className="post-footer-legal">
            <a href="/privacy" className="post-footer-legal-link">Privacy</a>
            <a href="/terms" className="post-footer-legal-link">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ── PAGE ───────────────────────────────────────────────── */
interface PageProps {
  params: { slug: string }
}

export default function BlogPostPage({ params }: PageProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const post = posts[params.slug]

  if (!post) {
    return (
      <>
        <style>{postStyles}</style>
        <div>
          <Header mobileOpen={mobileOpen} onToggle={() => setMobileOpen(!mobileOpen)} />
          <main>
            <section className="post-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
              <div className="container">
                <span className="post-kicker" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>404</span>
                <h1 className="post-hero-title">Post not found</h1>
                <p className="post-hero-sub" style={{ marginTop: '1rem' }}>
                  This post does not exist.{' '}
                  <a href="/blog" style={{ color: 'var(--color-accent)' }}>Browse all posts</a>.
                </p>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </>
    )
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <style>{postStyles}</style>

      <div>
        <Header mobileOpen={mobileOpen} onToggle={() => setMobileOpen(!mobileOpen)} />

        <main>
          {/* Hero */}
          <section className="post-hero">
            <div className="post-hero-mesh" aria-hidden="true" />
            <div className="post-hero-grid" aria-hidden="true" />
            <div className="post-hero-blob post-hero-blob-1" aria-hidden="true" />
            <div className="post-hero-blob post-hero-blob-2" aria-hidden="true" />
            <div className="container">
              <div className="post-hero-inner">
                <a href="/blog" className="post-back">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  All posts
                </a>

                <div className="post-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-meta-dot" aria-hidden="true" />
                  <span className="post-read-time">{post.readTime}</span>
                  <span className="post-meta-dot" aria-hidden="true" />
                  <span className="post-date">{formattedDate}</span>
                </div>

                <h1 className="post-hero-title">{post.title}</h1>
                <p className="post-hero-sub">{post.excerpt}</p>
              </div>
            </div>
          </section>

          {/* Article body */}
          <section className="post-body-section">
            <div className="container">
              <div className="post-body-inner">
                {post.content.map((paragraph, i) => (
                  <p key={i} className="post-paragraph">{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="post-cta-section">
            <div className="container">
              <div className="post-cta-inner">
                <div className="post-cta-glow" aria-hidden="true" />
                <span className="post-kicker" style={{ justifyContent: 'center' }}>Start here</span>
                <h2 className="post-cta-title">Want help building your AI system?</h2>
                <p className="post-cta-sub">
                  Book the free 15-minute call. If AI can help, you will know where to start.
                </p>
                <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary post-cta-btn">
                  Book free call
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

/* ── STYLES ─────────────────────────────────────────────── */
const postStyles = `
/* ── Header ── */
.post-header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-h);
  border-bottom: 1px solid var(--color-border);
  background: rgba(6, 6, 10, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.post-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.post-header-logo { display: flex; align-items: center; }
.post-header-nav { display: none; gap: 2rem; align-items: center; }
@media (min-width: 768px) { .post-header-nav { display: flex; } }
.post-header-nav-link {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  transition: color 0.2s ease;
  font-weight: 500;
}
.post-header-nav-link:hover { color: var(--color-text-secondary); }
.post-header-actions { display: flex; align-items: center; gap: 0.75rem; }
.post-header-cta { display: none; }
@media (min-width: 768px) { .post-header-cta { display: inline-flex; } }
.post-header-hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  border-radius: var(--radius-md);
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all 0.2s ease;
}
.post-header-hamburger:hover { border-color: var(--color-border-hover); color: var(--color-text-secondary); }
@media (min-width: 768px) { .post-header-hamburger { display: none; } }

.post-mobile-nav {
  position: fixed;
  top: var(--header-h);
  left: 0; right: 0;
  z-index: 99;
  background: rgba(6, 6, 10, 0.97);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
  padding: 1.5rem;
}
.post-mobile-nav-inner {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: var(--max-width);
  margin: 0 auto;
}
.post-mobile-nav-link {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.2s ease;
}
.post-mobile-nav-link:hover { color: var(--color-text-secondary); }

/* ── Hero ── */
.post-hero {
  position: relative;
  padding-top: 8rem;
  padding-bottom: 5rem;
  overflow: hidden;
  isolation: isolate;
}
@media (min-width: 768px) { .post-hero { padding-top: 9rem; } }

.post-hero-mesh {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 50% at 50% -5%, rgba(124, 111, 255, 0.18) 0%, transparent 60%);
  z-index: 0;
  pointer-events: none;
}
.post-hero-grid {
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
.post-hero-blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  filter: blur(60px);
  animation: postFloat 10s ease-in-out infinite;
}
.post-hero-blob-1 {
  width: 400px; height: 400px;
  top: -100px; right: -80px;
  background: radial-gradient(circle, rgba(124, 111, 255, 0.25) 0%, transparent 70%);
  animation-delay: 0s;
}
.post-hero-blob-2 {
  width: 250px; height: 250px;
  bottom: -30px; left: -60px;
  background: radial-gradient(circle, rgba(96, 80, 220, 0.2) 0%, transparent 70%);
  animation-delay: -4s;
}
@keyframes postFloat {
  0%, 100% { transform: translateY(0px) scale(1); }
  33% { transform: translateY(-22px) scale(1.05); }
  66% { transform: translateY(12px) scale(0.97); }
}

.post-hero-inner {
  position: relative;
  z-index: 1;
  max-width: 780px;
}

.post-back {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: 500;
  margin-bottom: 2.5rem;
  transition: color 0.2s ease;
}
.post-back:hover { color: var(--color-text-secondary); }

.post-kicker {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-text-kicker);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}
.post-kicker::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 1px;
  background: var(--color-accent);
}

.post-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
}
.post-category {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  background: var(--color-accent-subtle);
  border: 1px solid rgba(124, 111, 255, 0.2);
  border-radius: 999px;
  padding: 0.2rem 0.625rem;
}
.post-meta-dot {
  width: 3px; height: 3px;
  border-radius: 50%;
  background: var(--color-text-muted);
}
.post-read-time, .post-date {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-text-muted);
}

.post-hero-title {
  font-size: clamp(2rem, 5vw, 3.75rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
}
.post-hero-sub {
  font-size: var(--text-xl);
  color: var(--color-text-secondary);
  line-height: 1.65;
  max-width: 640px;
}

/* ── Article Body ── */
.post-body-section {
  padding-block: var(--space-16) var(--space-24);
  background: var(--color-bg);
}
.post-body-inner {
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.post-paragraph {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.8;
}

/* ── CTA ── */
.post-cta-section {
  padding-block: var(--space-16);
  background: var(--color-bg-subtle);
  border-top: 1px solid var(--color-border);
}
.post-cta-inner {
  position: relative;
  text-align: center;
  padding: 4rem 2rem;
  border-radius: var(--radius-2xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  overflow: hidden;
}
.post-cta-glow {
  position: absolute;
  top: -80px; left: 50%;
  transform: translateX(-50%);
  width: 600px; height: 400px;
  background: radial-gradient(ellipse at center, rgba(124, 111, 255, 0.15) 0%, transparent 70%);
  pointer-events: none;
}
.post-cta-title {
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--color-text-primary);
  margin: 1.25rem 0 1rem;
}
.post-cta-sub {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.7;
  max-width: 440px;
  margin: 0 auto 2rem;
}
.post-cta-btn { margin: 0 auto; }

/* ── Footer ── */
.post-footer {
  border-top: 1px solid var(--color-border);
  padding: 4rem 0 2rem;
  background: var(--color-bg);
}
.post-footer-top {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--color-border);
}
@media (min-width: 768px) {
  .post-footer-top {
    grid-template-columns: 260px 1fr;
    gap: 4rem;
  }
}
.post-footer-brand { display: flex; flex-direction: column; gap: 1rem; }
.post-footer-brand-desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.7;
}
.post-footer-social { display: flex; gap: 0.75rem; margin-top: 0.5rem; }
.post-footer-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  transition: all 0.2s ease;
}
.post-footer-social-link:hover { border-color: var(--color-border-hover); color: var(--color-text-secondary); }

.post-footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
@media (min-width: 640px) { .post-footer-links { grid-template-columns: repeat(3, 1fr); } }

.post-footer-col { display: flex; flex-direction: column; gap: 0.625rem; }
.post-footer-col-head {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  margin-bottom: 0.25rem;
}
.post-footer-link {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  transition: color 0.2s ease;
}
.post-footer-link:hover { color: var(--color-text-secondary); }

.post-footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  align-items: center;
  text-align: center;
}
@media (min-width: 640px) {
  .post-footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
}
.post-footer-legal { display: flex; gap: 1.5rem; }
.post-footer-legal-link {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  transition: color 0.2s ease;
}
.post-footer-legal-link:hover { color: var(--color-text-secondary); }
`