'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

// ===== TYPES =====
type TabId = 'services' | 'how-it-works' | 'pricing' | 'about'

interface Service {
  icon: string
  title: string
  desc: string
  price?: string
  features: string[]
}

interface FlowStep {
  step: string
  title: string
  desc: string
}

interface PricingTier {
  name: string
  price: string
  desc: string
  features: string[]
  cta: string
  recommended?: boolean
}

interface Testimonial {
  quote: string
  author: string
  role: string
}

// ===== DATA =====
const SERVICES: Service[] = [
  {
    icon: '📞',
    title: 'Lead Gen & Qualification',
    desc: 'Never miss another call. Our AI handles enquiries, qualifies leads, and books appointments while you focus on the work.',
    price: 'From $1,500/mo',
    features: ['24/7 call answering', 'Smart lead qualification', 'Calendar integration', 'SMS confirmations']
  },
  {
    icon: '🔍',
    title: 'AI Audit',
    desc: 'A comprehensive review of your current systems. We find what\'s working, what\'s not, and where the quick wins are.',
    price: '$1,500',
    features: ['Full system audit', 'Priority recommendations', 'Implementation roadmap', '30-day follow-up']
  },
  {
    icon: '⚡',
    title: 'AI Build',
    desc: 'We build the systems that actually solve your problems. No demo ware — just working automation tailored to your biz.',
    price: '$3,000–$5,000',
    features: ['Custom development', 'System integration', 'Staff training', '90-day support']
  },
  {
    icon: '🔄',
    title: 'Monthly Retainer',
    desc: 'Keep your AI running smooth. We monitor, optimize, and improve your systems every month.',
    price: '$1,500/month',
    features: ['Ongoing monitoring', 'Monthly optimization', 'Priority support', 'Quarterly reviews']
  }
]

const HOW_IT_WORKS_STEPS: FlowStep[] = [
  {
    step: '01',
    title: 'The Audit',
    desc: 'We look at your current setup — missed calls, admin bottlenecks, quote follow-ups. Figure out where AI can actually help.'
  },
  {
    step: '02',
    title: 'The Build',
    desc: 'We build and implement the AI systems that solve your biggest pain points. You review, we refine.'
  },
  {
    step: '03',
    title: 'The Retainer',
    desc: 'We monitor, optimize, and improve every month. Your AI gets smarter, your business runs smoother.'
  }
]

const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Discovery Call',
    price: 'Free',
    desc: '15 minutes to see if we\'re a fit.',
    features: [
      '15-min video call',
      'Identify your biggest AI opportunities',
      'No obligation',
      'Perth-based, face-to-face or Zoom'
    ],
    cta: 'Book Now',
    recommended: false
  },
  {
    name: 'AI Audit',
    price: '$1,500',
    desc: 'One-time deep dive into your business systems.',
    features: [
      'Full systems audit',
      'Priority pain point identification',
      'Implementation roadmap',
      '30-day email support'
    ],
    cta: 'Get Started',
    recommended: true
  },
  {
    name: 'AI Build',
    price: '$3-5K',
    desc: 'We build your custom AI system from scratch.',
    features: [
      'Custom development',
      'System integration',
      'Staff training included',
      '90-day support'
    ],
    cta: 'Get Started',
    recommended: false
  },
  {
    name: 'Monthly Retainer',
    price: '$1,500/mo',
    desc: 'Ongoing management and optimization.',
    features: [
      'Continuous monitoring',
      'Monthly optimization',
      'Priority support',
      'Quarterly business reviews'
    ],
    cta: 'Get Started',
    recommended: false
  }
]

const TESTIMONIAL: Testimonial = {
  quote: '"Jake built us an AI receptionist that answers our phones after hours. Gone are the days of missing job enquiries because we were on another call. Game changer for our plumbing business."',
  author: 'Local Tradie Business Owner',
  role: 'Plumbing & Gas — Perth'
}

// ===== COMPONENTS =====

// Count-up animation hook
function useCountUp(end: number, duration: number = 2000, suffix: string = '') {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return { count, ref, suffix }
}

// Scroll reveal hook
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// Navigation
function Navigation({ activeTab, onTabChange, scrolled }: { activeTab: TabId, onTabChange: (tab: TabId) => void, scrolled: boolean }) {
  const tabs: { id: TabId; label: string }[] = [
    { id: 'services', label: 'Services' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 nav-transition ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight cursor-pointer" onClick={() => onTabChange('services')}>
          <span className="text-accent">EM</span>VY
        </div>
        <div className="hidden md:flex gap-1 bg-white/5 rounded-xl p-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <a 
          href="https://cal.com/jake-emvy/15-min-ai-chat" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary text-sm py-2.5 px-5"
        >
          Book a Call
        </a>
      </div>
    </nav>
  )
}

// Chat Widget
function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 300)
  }

  return (
    <div className="chat-widget-container">
      {isOpen && (
        <div className={`chat-window ${isClosing ? 'closing' : ''}`}>
          <div className="chat-header flex justify-between items-center">
            <div>
              <div className="font-semibold text-white">Chat with EMVY</div>
              <div className="text-sm text-gray-400">AI-powered assistant</div>
            </div>
            <button onClick={handleClose} className="text-gray-400 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="chat-messages">
            <div className="chat-message bot">
              <div className="bg-white/5 rounded-2xl rounded-tl-sm p-4 inline-block">
                <p className="text-gray-300">Hey! 👋 I'm your EMVY assistant. Want to chat about how AI can help your business? Or if you're ready, I can book you in for a free 15-min call with Jake.</p>
              </div>
            </div>
            <div className="chat-message bot">
              <div className="bg-white/5 rounded-2xl rounded-tl-sm p-4 inline-block">
                <p className="text-gray-300">We work with Perth tradies, hospitality, property biz — basically any SMB that's tired of missing calls and drowning in admin.</p>
              </div>
            </div>
          </div>
          <div className="chat-input-area">
            <a 
              href="https://cal.com/jake-emvy/15-min-ai-chat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              Book Your Free Call →
            </a>
          </div>
        </div>
      )}
      <button className="chat-trigger" onClick={() => setIsOpen(!isOpen)}>
        <div className="chat-trigger-pulse" />
        {isOpen ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>
    </div>
  )
}

// Stats Section
function StatsSection() {
  const stat1 = useCountUp(150, 2000, '+')
  const stat2 = useCountUp(95, 2000, '%')
  const stat3 = useCountUp(48, 2000, 'hrs')

  return (
    <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
      <div className="text-center" ref={stat1.ref}>
        <div className="stat-value">{stat1.count}{stat1.suffix}</div>
        <div className="text-gray-500 mt-1">Free Calls Booked</div>
      </div>
      <div className="text-center" ref={stat2.ref}>
        <div className="stat-value">{stat2.count}{stat2.suffix}</div>
        <div className="text-gray-500 mt-1">Client Retention</div>
      </div>
      <div className="text-center" ref={stat3.ref}>
        <div className="stat-value">{stat3.count}{stat3.suffix}</div>
        <div className="text-gray-500 mt-1">Admin Hours Saved/Week</div>
      </div>
    </div>
  )
}

// Hero Section
function HeroSection({ onBookCall }: { onBookCall: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 animated-gradient-bg">
      {/* Floating UI Elements */}
      <div className="absolute top-32 left-[10%] floating-element opacity-60">
        <div className="glass-strong rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
            <span className="text-green-400">✓</span>
          </div>
          <div>
            <div className="text-sm font-medium">Lead Qualified</div>
            <div className="text-xs text-gray-400">Plumbing enquiry</div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-48 right-[15%] floating-element-delayed opacity-50">
        <div className="glass-strong rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
            <span className="text-accent">📅</span>
          </div>
          <div>
            <div className="text-sm font-medium">Booking Made</div>
            <div className="text-xs text-gray-400">Tomorrow 2pm</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-32 left-[15%] floating-element-slow opacity-40">
        <div className="glass-strong rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <span className="text-blue-400">💬</span>
          </div>
          <div>
            <div className="text-sm font-medium">Quote Sent</div>
            <div className="text-xs text-gray-400">Auto-followup</div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="animate-in stagger-1 opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm mb-8">
            Perth's AI Partner for Local Business
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-in stagger-2 opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
          <span className="text-white">Stop missing calls.</span>
          <br />
          <span className="text-white">Stop chasing quotes.</span>
          <br />
          <span className="text-gradient">Stop drowning in admin.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-in stagger-3 opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.3s' }}>
          AI that actually works for your business. We help Perth SMBs — tradies, hospitality, property — automate their phones, quotes, and follow-ups.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in stagger-4 opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.4s' }}>
          <a 
            href="https://cal.com/jake-emvy/15-min-ai-chat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            Book Free 15-Min Call →
          </a>
          <button onClick={onBookCall} className="btn-secondary text-lg px-8 py-4">
            See How It Works
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 animate-in stagger-5 opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.5s' }}>
          <StatsSection />
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  )
}

// Services Tab Content
function ServicesTab() {
  const { ref, isVisible } = useScrollReveal()
  
  return (
    <div ref={ref} className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm mb-6">
          What We Do
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          AI That Actually Works For <span className="text-gradient">Your Business</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          No jargon. No fluff. Just AI that handles the stuff eating up your day — calls, quotes, admin.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map((service, i) => (
          <div 
            key={i} 
            className="service-card group"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">{service.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  {service.price && (
                    <span className="text-accent font-semibold">{service.price}</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
            <ul className="space-y-2 mt-4 pt-4 border-t border-white/5">
              {service.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

// How It Works Tab Content
function HowItWorksTab() {
  const { ref, isVisible } = useScrollReveal()
  
  return (
    <div ref={ref} className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm mb-6">
          How It Works
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Three Steps to <span className="text-gradient">AI That Works</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We keep it simple. Audit. Build. Retain. No technical jargon, no complicated processes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {HOW_IT_WORKS_STEPS.map((step, i) => (
          <div key={i} className="flow-step group">
            <div className="text-6xl font-bold text-accent/10 mb-4">{step.step}</div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            {i < HOW_IT_WORKS_STEPS.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent/30">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 mb-6">Ready to get started? Book a free 15-min call.</p>
        <a 
          href="https://cal.com/jake-emvy/15-min-ai-chat" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Book Your Free Call →
        </a>
      </div>
    </div>
  )
}

// Pricing Tab Content
function PricingTab() {
  const { ref, isVisible } = useScrollReveal()
  
  return (
    <div ref={ref} className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm mb-6">
          Pricing
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Simple <span className="text-gradient">Pricing</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          No hidden fees. No lock-in contracts. Just honest pricing for Perth SMBs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRICING_TIERS.map((tier, i) => (
          <div 
            key={i} 
            className={`pricing-card ${tier.recommended ? 'recommended' : ''}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-white mb-1">{tier.price}</div>
              {tier.price !== 'Free' && <div className="text-gray-500 text-sm">per project/month</div>}
              <p className="text-gray-400 text-sm mt-3">{tier.desc}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <a 
              href={tier.price === 'Free' ? 'https://cal.com/jake-emvy/15-min-ai-chat' : 'https://cal.com/jake-emvy/15-min-ai-chat'}
              target="_blank" 
              rel="noopener noreferrer"
              className={tier.recommended ? 'btn-primary w-full' : 'btn-secondary w-full'}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

// About Tab Content
function AboutTab() {
  const { ref, isVisible } = useScrollReveal()
  
  return (
    <div ref={ref} className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Story */}
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm mb-6">
            About Jake
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Perth-Based. <span className="text-gradient">Real Results.</span>
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Hey, I'm Jake. I've been in the AI game for a while now, and I've seen the same story repeat itself: businesses get sold on AI, spend money on fancy demos, and end up with systems that don't work when it counts.
            </p>
            <p>
              EMVY is my answer to that problem. I work with owner-managed businesses in Perth — tradies, hospo venues, property managers, professional services — the businesses that are growing but keep hitting the same walls: missed calls, slow quotes, admin drowning the team.
            </p>
            <p>
              I don't sell you a magic box. I figure out where you're losing time and money, build systems that actually solve it, and stick around to make sure it keeps working.
            </p>
            <p className="text-white font-medium">
              If that sounds useful, let's grab a coffee — virtual or otherwise — and see if we're a fit.
            </p>
          </div>
          <div className="mt-8">
            <a 
              href="https://cal.com/jake-emvy/15-min-ai-chat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Free 15-Min Call →
            </a>
          </div>
        </div>
        
        {/* Right: Credibility block */}
        <div className="space-y-6">
          <div className="glass-strong rounded-2xl p-8">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Who We Help</h3>
            <p className="text-gray-400 text-sm">
              Perth SMBs with 5-50 employees. Owner-managed. Growing but held back by admin and missed opportunities. Tradie businesses, hospitality venues, property managers, consultants.
            </p>
          </div>
          <div className="glass-strong rounded-2xl p-8">
            <div className="text-6xl mb-4">💪</div>
            <h3 className="text-xl font-bold mb-2">What We Do</h3>
            <p className="text-gray-400 text-sm">
              We do the work, you stay focused on your business. No endless meetings, no tech jargon, no vague promises. Just AI that handles your phones, quotes, and follow-ups — actually working, not just demoing well.
            </p>
          </div>
          <div className="glass-strong rounded-2xl p-8">
            <div className="text-6xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-2">How We Work</h3>
            <p className="text-gray-400 text-sm">
              Mate-style. Direct. We tell you what you need to hear, not what you want to hear. If AI can't help you, we'll say so. If it can, we'll show you exactly how.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Testimonial Section
function TestimonialSection() {
  const { ref, isVisible } = useScrollReveal()
  
  return (
    <div ref={ref} className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <div className="testimonial-card max-w-3xl mx-auto text-center">
        <div className="text-5xl text-accent/20 mb-6">"</div>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
          {TESTIMONIAL.quote}
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
            JT
          </div>
          <div className="text-left">
            <div className="font-semibold">{TESTIMONIAL.author}</div>
            <div className="text-gray-400 text-sm">{TESTIMONIAL.role}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Page Component
export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('services')
  const [scrolled, setScrolled] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleTabChange = useCallback((tab: TabId) => {
    if (tab === activeTab) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveTab(tab)
      setIsAnimating(false)
    }, 200)
  }, [activeTab])

  const scrollToContent = () => {
    document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' })
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'services':
        return <ServicesTab />
      case 'how-it-works':
        return <HowItWorksTab />
      case 'pricing':
        return <PricingTab />
      case 'about':
        return <AboutTab />
      default:
        return <ServicesTab />
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Ambient Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} scrolled={scrolled} />

      {/* Hero Section */}
      <HeroSection onBookCall={scrollToContent} />

      {/* Main Content with Tabs */}
      <section id="main-content" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Tab Content with animation */}
          <div className={`tab-content-wrapper ${isAnimating ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
            {renderTabContent()}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm mb-6">
              What Our Clients Say
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Real Results From <span className="text-gradient">Real Businesses</span>
            </h2>
          </div>
          <TestimonialSection />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Stop Missing Calls?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
            Book a free 15-minute call. No commitment, no sales pitch — just a chat about where AI could help your business.
          </p>
          <a 
            href="https://cal.com/jake-emvy/15-min-ai-chat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-lg px-10 py-5"
          >
            Book Your Free Call →
          </a>
          <p className="text-gray-500 mt-6 text-sm">Based in Perth — face-to-face or Zoom available</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-accent">EM</span>VY
</div>
          <div className="text-gray-500 text-sm text-center md:text-left">
            AI that actually works for your business. Perth, Australia.
          </div>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="https://cal.com/jake-emvy/15-min-ai-chat" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book Call</a>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </main>
  )
}