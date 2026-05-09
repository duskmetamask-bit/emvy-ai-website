'use client'

import { useState } from 'react'
import { EmvyWordmark } from '@/components/EmvyLogo'

const CAL_URL = 'https://cal.com/jake-emvy/15-min-ai-chat'

/* ── BLOG DATA ─────────────────────────────────────────── */
const posts = [
  {
    slug: 'ai-automation-roadmap-australian-smb',
    title: 'How to Build an AI Automation Roadmap for Your Australian SMB',
    excerpt: 'Most businesses jump straight into tools. We take a different approach — audit first, build second. Here is how to map your real workflows and find the 2–3 automations that move the needle.',
    category: 'Strategy',
    date: '2025-04-14',
    readTime: '7 min read',
    tag: 'Planning',
  },
  {
    slug: '为什么你的CRM没有起作用',
    title: '为什么你的 CRM 没有起作用：数据同步问题诊断',
    excerpt: 'CRM 数据不同步是澳大利亚中小企业的常见痛点。当客户信息在 HubSpot、邮件和电子表格之间断裂时，AI agent 就无法正确运作。',
    category: 'Operations',
    date: '2025-03-28',
    readTime: '5 min read',
    tag: 'Diagnosis',
  },
  {
    slug: 'autonomous-agents-vs-basic-chatbots',
    title: 'Autonomous AI Agents vs. Basic Chatbots: What Is the Difference?',
    excerpt: 'The buzzwords get used interchangeably, but the capability gap is enormous. If you have been burned by a chatbot that could not actually do anything, this breakdown will help you understand what real autonomy looks like.',
    category: 'AI Agents',
    date: '2025-03-10',
    readTime: '6 min read',
    tag: 'Explainer',
  },
  {
    slug: 'custom-gpts-vs-built-agents',
    title: 'Custom GPTs vs. Built AI Agents: Which Is Right for Your Business?',
    excerpt: 'OpenAI made it easy to spin up a GPT. But when does a Custom GPT stop being enough, and you actually need a proper built agent? We break down the trade-offs with real scenarios.',
    category: 'AI Agents',
    date: '2025-02-20',
    readTime: '8 min read',
    tag: 'Decision Guide',
  },
  {
    slug: 'measuring-ai-roi',
    title: 'Measuring AI ROI: The Metrics That Actually Matter',
    excerpt: 'Time saved is nice. Revenue impacted is better. Most businesses measure the wrong things — or measure nothing at all. Here is the framework we use with clients to track real AI impact.',
    category: 'Analytics',
    date: '2025-02-05',
    readTime: '9 min read',
    tag: 'Framework',
  },
]

/* ── HEADER ─────────────────────────────────────────────── */
function Header({ mobileOpen, onToggle }: { mobileOpen: boolean; onToggle: () => void }) {
  return (
    <>
      <header className="blog-header">
        <div className="container">
          <div className="blog-header-inner">
            <a href="/" className="blog-header-logo" aria-label="EMVY home">
              <EmvyWordmark size={36} />
            </a>
            <nav className="blog-header-nav" aria-label="Main navigation">
              <a href="/#services" className="blog-header-nav-link">Services</a>
              <a href="/#how-we-work" className="blog-header-nav-link">How We Work</a>
              <a href="/pricing" className="blog-header-nav-link">Pricing</a>
              <a href="/about" className="blog-header-nav-link">About</a>
              <a href="/blog" className="blog-header-nav-link" style={{ color: 'var(--color-text-secondary)' }}>Blog</a>
              <a href="/contact" className="blog-header-nav-link">Contact</a>
            </nav>
            <div className="blog-header-actions">
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary compact blog-header-cta">
                Book free call
              </a>
              <button
                className="blog-header-hamburger"
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
        <div className="blog-mobile-nav">
          <nav className="blog-mobile-nav-inner">
            <a href="/#services" className="blog-mobile-nav-link" onClick={onToggle}>Services</a>
            <a href="/#how-we-work" className="blog-mobile-nav-link" onClick={onToggle}>How We Work</a>
            <a href="/pricing" className="blog-mobile-nav-link" onClick={onToggle}>Pricing</a>
            <a href="/about" className="blog-mobile-nav-link" onClick={onToggle}>About</a>
            <a href="/blog" className="blog-mobile-nav-link" onClick={onToggle}>Blog</a>
            <a href="/contact" className="blog-mobile-nav-link" onClick={onToggle}>Contact</a>
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
    <footer className="blog-footer">
      <div className="container">
        <div className="blog-footer-top">
          <div className="blog-footer-brand">
            <a href="/" className="blog-footer-logo" aria-label="EMVY home">
              <EmvyWordmark size={32} />
            </a>
            <p className="blog-footer-brand-desc">
              AI consultancy for Australian SMBs.<br />Practical systems. Real results.
            </p>
            <div className="blog-footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="blog-footer-social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="blog-footer-social-link" aria-label="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="blog-footer-links">
            <div className="blog-footer-col">
              <div className="blog-footer-col-head">Services</div>
              <a href="/#services" className="blog-footer-link">AI Agents</a>
              <a href="/#services" className="blog-footer-link">Automations</a>
              <a href="/#services" className="blog-footer-link">Ops Systems</a>
              <a href="/#services" className="blog-footer-link">Integrations</a>
            </div>
            <div className="blog-footer-col">
              <div className="blog-footer-col-head">Company</div>
              <a href="/about" className="blog-footer-link">About</a>
              <a href="/pricing" className="blog-footer-link">Pricing</a>
              <a href="/blog" className="blog-footer-link">Blog</a>
              <a href="/contact" className="blog-footer-link">Contact</a>
            </div>
          </div>
        </div>
        <div className="blog-footer-bottom">
          <div className="mono">© 2025 EMVY. All rights reserved.</div>
          <div className="blog-footer-legal">
            <a href="/privacy" className="blog-footer-legal-link">Privacy</a>
            <a href="/terms" className="blog-footer-legal-link">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ── PAGE ───────────────────────────────────────────────── */
export default function BlogPage() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <style>{blogStyles}</style>

      <div>
        <Header mobileOpen={mobileOpen} onToggle={() => setMobileOpen(!mobileOpen)} />

        <main>
          {/* Hero */}
          <section className="blog-hero">
            <div className="blog-hero-mesh" aria-hidden="true" />
            <div className="blog-hero-grid" aria-hidden="true" />
            <div className="blog-hero-blob blog-hero-blob-1" aria-hidden="true" />
            <div className="blog-hero-blob blog-hero-blob-2" aria-hidden="true" />
            <div className="container">
              <div className="blog-hero-inner">
                <span className="blog-kicker">Insights</span>
                <h1 className="blog-hero-title">
                  The EMVY<br />
                  <span className="blog-hero-title-accent">Blog</span>
                </h1>
                <p className="blog-hero-sub">
                  Practical takes on AI for Australian SMBs — no fluff, no hype,<br className="blog-break-hide" />
                  just what actually works.
                </p>
              </div>
            </div>
          </section>

          {/* Post grid */}
          <section className="blog-list-section">
            <div className="container">
              <div className="blog-grid">
                {posts.map((post) => (
                  <a key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                    <div className="blog-card-meta">
                      <span className="blog-card-category">{post.category}</span>
                      <span className="blog-card-dot" aria-hidden="true" />
                      <span className="blog-card-read-time">{post.readTime}</span>
                    </div>
                    <h2 className="blog-card-title">{post.title}</h2>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <span className="blog-card-date">{new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                      <span className="blog-card-arrow" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="blog-cta-section">
            <div className="container">
              <div className="blog-cta-inner">
                <div className="blog-cta-glow" aria-hidden="true" />
                <span className="blog-kicker" style={{ justifyContent: 'center' }}>Start here</span>
                <h2 className="blog-cta-title">Want help building your AI system?</h2>
                <p className="blog-cta-sub">
                  Book the free 15-minute call. If AI can help, you will know where to start.
                </p>
                <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary blog-cta-btn">
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
const blogStyles = `
/* ── Header ── */
.blog-header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-h);
  border-bottom: 1px solid var(--color-border);
  background: rgba(6, 6, 10, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.blog-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.blog-header-logo { display: flex; align-items: center; }
.blog-header-nav { display: none; gap: 2rem; align-items: center; }
@media (min-width: 768px) { .blog-header-nav { display: flex; } }
.blog-header-nav-link {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  transition: color 0.2s ease;
  font-weight: 500;
}
.blog-header-nav-link:hover { color: var(--color-text-secondary); }
.blog-header-actions { display: flex; align-items: center; gap: 0.75rem; }
.blog-header-cta { display: none; }
@media (min-width: 768px) { .blog-header-cta { display: inline-flex; } }
.blog-header-hamburger {
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
.blog-header-hamburger:hover { border-color: var(--color-border-hover); color: var(--color-text-secondary); }
@media (min-width: 768px) { .blog-header-hamburger { display: none; } }

.blog-mobile-nav {
  position: fixed;
  top: var(--header-h);
  left: 0; right: 0;
  z-index: 99;
  background: rgba(6, 6, 10, 0.97);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
  padding: 1.5rem;
}
.blog-mobile-nav-inner {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: var(--max-width);
  margin: 0 auto;
}
.blog-mobile-nav-link {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.2s ease;
}
.blog-mobile-nav-link:hover { color: var(--color-text-secondary); }

/* ── Hero ── */
.blog-hero {
  position: relative;
  padding-top: 9rem;
  padding-bottom: 5rem;
  overflow: hidden;
  isolation: isolate;
}
@media (min-width: 768px) { .blog-hero { padding-top: 10rem; } }

.blog-hero-mesh {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 50% at 50% -5%, rgba(124, 111, 255, 0.2) 0%, transparent 60%);
  z-index: 0;
  pointer-events: none;
}
.blog-hero-grid {
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
.blog-hero-blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  filter: blur(60px);
  animation: blogFloat 10s ease-in-out infinite;
}
.blog-hero-blob-1 {
  width: 400px; height: 400px;
  top: -120px; right: -100px;
  background: radial-gradient(circle, rgba(124, 111, 255, 0.28) 0%, transparent 70%);
  animation-delay: 0s;
}
.blog-hero-blob-2 {
  width: 250px; height: 250px;
  bottom: -40px; left: -80px;
  background: radial-gradient(circle, rgba(96, 80, 220, 0.22) 0%, transparent 70%);
  animation-delay: -4s;
}
@keyframes blogFloat {
  0%, 100% { transform: translateY(0px) scale(1); }
  33% { transform: translateY(-22px) scale(1.05); }
  66% { transform: translateY(12px) scale(0.97); }
}

.blog-hero-inner {
  position: relative;
  z-index: 1;
  max-width: 720px;
}

.blog-kicker {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-text-kicker);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.blog-kicker::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 1px;
  background: var(--color-accent);
}

.blog-hero-title {
  font-size: clamp(3.5rem, 8vw, 7rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 0.92;
  color: var(--color-text-primary);
  margin-bottom: 1.75rem;
}
.blog-hero-title-accent {
  background: linear-gradient(135deg, #8b85ff 0%, #6c63ff 50%, #a08fff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.blog-hero-sub {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.7;
  max-width: 520px;
}
@media (min-width: 768px) { .blog-break-hide { display: inline; } }

/* ── Post Grid ── */
.blog-list-section {
  padding-block: var(--space-16) var(--space-24);
  background: var(--color-bg);
  position: relative;
}
.blog-list-section::before {
  content: '';
  position: absolute;
  top: -80px; left: 0; right: 0;
  height: 80px;
  background: linear-gradient(to bottom, var(--color-bg), transparent);
  pointer-events: none;
}

.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 640px) { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .blog-grid { grid-template-columns: repeat(3, 1fr); } }

.blog-card {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  padding: 2rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  transition: all 0.25s ease;
  text-decoration: none;
}
.blog-card:hover {
  border-color: var(--color-border-accent);
  box-shadow: 0 0 40px rgba(124, 111, 255, 0.1);
  transform: translateY(-3px);
}

.blog-card-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.blog-card-category {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  background: var(--color-accent-subtle);
  border: 1px solid rgba(124, 111, 255, 0.2);
  border-radius: 999px;
  padding: 0.2rem 0.6rem;
}
.blog-card-dot {
  width: 3px; height: 3px;
  border-radius: 50%;
  background: var(--color-text-muted);
}
.blog-card-read-time {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-text-muted);
}

.blog-card-title {
  font-size: var(--text-xl);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: var(--color-text-primary);
}
.blog-card-excerpt {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.75;
  flex: 1;
}

.blog-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
}
.blog-card-date {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-text-muted);
}
.blog-card-arrow {
  color: var(--color-text-muted);
  transition: transform 0.2s ease, color 0.2s ease;
}
.blog-card:hover .blog-card-arrow {
  transform: translateX(4px);
  color: var(--color-accent);
}

/* ── CTA ── */
.blog-cta-section {
  padding-block: var(--space-16);
  background: var(--color-bg-subtle);
  border-top: 1px solid var(--color-border);
}
.blog-cta-inner {
  position: relative;
  text-align: center;
  padding: 4rem 2rem;
  border-radius: var(--radius-2xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  overflow: hidden;
}
.blog-cta-glow {
  position: absolute;
  top: -80px; left: 50%;
  transform: translateX(-50%);
  width: 600px; height: 400px;
  background: radial-gradient(ellipse at center, rgba(124, 111, 255, 0.15) 0%, transparent 70%);
  pointer-events: none;
}
.blog-cta-title {
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--color-text-primary);
  margin: 1.25rem 0 1rem;
}
.blog-cta-sub {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.7;
  max-width: 440px;
  margin: 0 auto 2rem;
}
.blog-cta-btn { margin: 0 auto; }

/* ── Footer ── */
.blog-footer {
  border-top: 1px solid var(--color-border);
  padding: 4rem 0 2rem;
  background: var(--color-bg);
}
.blog-footer-top {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--color-border);
}
@media (min-width: 768px) {
  .blog-footer-top {
    grid-template-columns: 260px 1fr;
    gap: 4rem;
  }
}
.blog-footer-brand { display: flex; flex-direction: column; gap: 1rem; }
.blog-footer-brand-desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.7;
}
.blog-footer-social { display: flex; gap: 0.75rem; margin-top: 0.5rem; }
.blog-footer-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  transition: all 0.2s ease;
}
.blog-footer-social-link:hover { border-color: var(--color-border-hover); color: var(--color-text-secondary); }

.blog-footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
@media (min-width: 640px) { .blog-footer-links { grid-template-columns: repeat(3, 1fr); } }

.blog-footer-col { display: flex; flex-direction: column; gap: 0.625rem; }
.blog-footer-col-head {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  margin-bottom: 0.25rem;
}
.blog-footer-link {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  transition: color 0.2s ease;
}
.blog-footer-link:hover { color: var(--color-text-secondary); }

.blog-footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  align-items: center;
  text-align: center;
}
@media (min-width: 640px) {
  .blog-footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
}
.blog-footer-legal { display: flex; gap: 1.5rem; }
.blog-footer-legal-link {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  transition: color 0.2s ease;
}
.blog-footer-legal-link:hover { color: var(--color-text-secondary); }
`