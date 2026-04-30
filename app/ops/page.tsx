'use client'

import { useState } from 'react'

// ============================================
// TYPES
// ============================================
type Tab = 'leads' | 'warm' | 'business' | 'domains' | 'grants' | 'processes' | 'systems' | 'apis'

interface WarmLead {
  id: string
  name: string
  business_name: string
  relationship: string
  industry: string
  contact_email: string
  contact_phone: string
  linkedin_url: string
  status: string
  last_contacted: string
  next_action: string
  potential_revenue: number
  notes: string
  tags: string[]
}

interface BusinessEntity {
  id: string
  entity_name: string
  entity_type: string
  abn: string
  state_registered: string
  gst_registered: boolean
  business_structure: string
  owners: string[]
  website: string
  address: string
  status: string
  notes: string
}

interface Domain {
  id: string
  domain_name: string
  registrar: string
  expiry_date: string
  auto_renew: boolean
  renewal_cost: number
  linked_business: string
  purpose: string
  status: string
  dns_config: string
  notes: string
}

interface Grant {
  id: string
  grant_name: string
  agency: string
  amount: number
  status: string
  application_url: string
  due_date: string
  linked_business: string
  notes: string
}

interface Process {
  id: string
  process_name: string
  category: string
  description: string
  steps: string[]
  owner: string
  tools: string[]
  integrations: string[]
  status: string
}

interface System {
  id: string
  system_name: string
  category: string
  description: string
  content_flow: string
  cta_text: string
  cta_url: string
  free_resource_name: string
  free_resource_url: string
  audit_trigger: string
  integrations: string[]
  status: string
}

interface ApiIntegration {
  id: string
  api_name: string
  provider: string
  purpose: string
  key_ref: string
  status: string
  rate_limit: string
  monthly_cost: number
  docs_url: string
  notes: string
}

// ============================================
// CONSTANTS
// ============================================
const TABS: { id: Tab; label: string }[] = [
  { id: 'leads', label: 'Leads' },
  { id: 'warm', label: 'Warm Leads' },
  { id: 'business', label: 'Business' },
  { id: 'domains', label: 'Domains' },
  { id: 'grants', label: 'Grants' },
  { id: 'processes', label: 'Processes' },
  { id: 'systems', label: 'Systems' },
  { id: 'apis', label: 'APIs' },
]

const ENTITY_TYPES = ['Sole Trader', 'Partnership', 'Company', 'Trust', 'Holding Company', 'Trading Entity']
const DOMAIN_STATUSES = ['active', 'expiring', 'expired', 'parked']
const GRANT_STATUSES = ['researching', 'eligible', 'preparing', 'submitted', 'approved', 'rejected']
const PROCESS_STATUSES = ['draft', 'active', 'reviewing', 'archived']
const API_STATUSES = ['active', 'limited', 'deprecated', 'testing']
const WARM_STATUSES = ['hot', 'warm', 'cold', 'contacted', 'converted', 'lost']

// ============================================
// COMPONENTS
// ============================================
function StatCard({ label, value, color = 'white' }: { label: string; value: string | number; color?: string }) {
  return (
    <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-5">
      <p className={`text-2xl font-bold`} style={{ color }}>{value}</p>
      <p className="text-sm text-[#71717a] mt-1">{label}</p>
    </div>
  )
}

function Input({ label, value, onChange, type = 'text', placeholder = '', className = '' }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string; className?: string
}) {
  return (
    <div className={className}>
      <label className="block text-xs text-[#71717a] mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[#0a0a0f] text-white text-sm border border-[#1e1e2e] rounded-lg px-3 py-2 focus:outline-none focus:border-[#6c63ff] placeholder-[#3f3f46]"
      />
    </div>
  )
}

function Select({ label, value, onChange, options }: {
  label: string; value: string; onChange: (v: string) => void; options: string[]
}) {
  return (
    <div>
      <label className="block text-xs text-[#71717a] mb-1">{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-[#0a0a0f] text-white text-sm border border-[#1e1e2e] rounded-lg px-3 py-2 focus:outline-none focus:border-[#6c63ff]"
      >
        <option value="">— Select —</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}

function Textarea({ label, value, onChange, placeholder = '', rows = 3 }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number
}) {
  return (
    <div>
      <label className="block text-xs text-[#71717a] mb-1">{label}</label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-[#0a0a0f] text-white text-sm border border-[#1e1e2e] rounded-lg px-3 py-2 focus:outline-none focus:border-[#6c63ff] placeholder-[#3f3f46] resize-none"
      />
    </div>
  )
}

// ============================================
// TAB CONTENT COMPONENTS
// ============================================

// --- WARM LEADS ---
function WarmLeadsTab() {
  const [leads, setLeads] = useState<WarmLead[]>([
    {
      id: '1',
      name: '',
      business_name: '',
      relationship: '',
      industry: '',
      contact_email: '',
      contact_phone: '',
      linkedin_url: '',
      status: 'warm',
      last_contacted: '',
      next_action: '',
      potential_revenue: 0,
      notes: '',
      tags: [],
    },
  ])
  const [showForm, setShowForm] = useState(false)
  const [filter, setFilter] = useState('all')

  const addLead = () => {
    setLeads(prev => [...prev, {
      id: Date.now().toString(),
      name: '', business_name: '', relationship: '', industry: '',
      contact_email: '', contact_phone: '', linkedin_url: '',
      status: 'warm', last_contacted: '', next_action: '',
      potential_revenue: 0, notes: '', tags: [],
    }])
  }

  const updateLead = (id: string, field: keyof WarmLead, val: string | number | string[]) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, [field]: val } : l))
  }

  const removeLead = (id: string) => {
    setLeads(prev => prev.filter(l => l.id !== id))
  }

  const filtered = filter === 'all' ? leads : leads.filter(l => l.status === filter)
  const hotCount = leads.filter(l => l.status === 'hot').length
  const warmCount = leads.filter(l => l.status === 'warm').length
  const totalRevenue = leads.reduce((sum, l) => sum + (l.potential_revenue || 0), 0)

  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Warm Leads" value={leads.length} />
        <StatCard label="Hot Leads" value={hotCount} color="#ef4444" />
        <StatCard label="Warm Leads" value={warmCount} color="#f59e0b" />
        <StatCard label="Potential Revenue" value={`$${totalRevenue.toLocaleString()}`} color="#22c55e" />
      </div>

      {/* Filter + Add */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {['all', ...WARM_STATUSES].map(s => (
          <button key={s} onClick={() => setFilter(s)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
              filter === s ? 'bg-[#6c63ff] text-white' : 'bg-[#1e1e2e] text-[#71717a] hover:text-white'
            }`}>
            {s}
          </button>
        ))}
        <button onClick={() => setShowForm(!showForm)}
          className="ml-auto px-4 py-1.5 bg-[#6c63ff] hover:bg-[#5a52d5] text-white rounded-lg text-xs font-medium transition-colors">
          {showForm ? '✕ Close' : '+ Add Warm Lead'}
        </button>
      </div>

      {/* Quick Add Form */}
      {showForm && (
        <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6 mb-6">
          <h3 className="text-white font-semibold mb-4">New Warm Lead</h3>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Name" value="" onChange={() => {}} placeholder="Full name" />
            <Input label="Business Name" value="" onChange={() => {}} placeholder="Company name" />
            <Input label="Relationship" value="" onChange={() => {}} placeholder="How you know them" />
            <Input label="Industry" value="" onChange={() => {}} placeholder="e.g. Construction" />
            <Input label="Email" value="" onChange={() => {}} placeholder="email@example.com" type="email" />
            <Input label="Phone" value="" onChange={() => {}} placeholder="+61 4xx xxx xxx" />
            <Input label="LinkedIn URL" value="" onChange={() => {}} placeholder="linkedin.com/in/..." />
            <Select label="Status" value="warm" onChange={() => {}} options={WARM_STATUSES} />
            <Input label="Potential Revenue ($)" value="" onChange={() => {}} placeholder="5000" type="number" />
            <Input label="Next Action" value="" onChange={() => {}} placeholder="Book intro call" />
          </div>
          <div className="mt-4">
            <Textarea label="Notes" value="" onChange={() => {}} placeholder="Background, context, pain points..." rows={2} />
          </div>
          <button onClick={() => setShowForm(false)}
            className="mt-4 px-4 py-2 bg-[#6c63ff] hover:bg-[#5a52d5] text-white rounded-lg text-sm font-medium transition-colors">
            Save Warm Lead
          </button>
        </div>
      )}

      {/* Table */}
      <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#1e1e2e]">
                {['Name', 'Business', 'Relationship', 'Industry', 'Status', 'Revenue', 'Next Action', 'Notes', ''].map(h => (
                  <th key={h} className="text-left text-[#71717a] font-medium px-4 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(lead => (
                <tr key={lead.id} className="border-b border-[#1e1e2e]/50 last:border-0 hover:bg-[#1e1e2e]/30 transition-colors">
                  <td className="px-4 py-3">
                    <input value={lead.name} onChange={e => updateLead(lead.id, 'name', e.target.value)}
                      className="bg-transparent text-white text-sm w-full border border-[#1e1e2e] rounded px-2 py-1 focus:outline-none focus:border-[#6c63ff]" />
                  </td>
                  <td className="px-4 py-3">
                    <input value={lead.business_name} onChange={e => updateLead(lead.id, 'business_name', e.target.value)}
                      className="bg-transparent text-white text-sm w-full border border-[#1e1e2e] rounded px-2 py-1 focus:outline-none focus:border-[#6c63ff]" />
                  </td>
                  <td className="px-4 py-3">
                    <input value={lead.relationship} onChange={e => updateLead(lead.id, 'relationship', e.target.value)}
                      className="bg-transparent text-[#a1a1aa] text-sm w-full max-w-[120px] border border-[#1e1e2e] rounded px-2 py-1 focus:outline-none focus:border-[#6c63ff]" />
                  </td>
                  <td className="px-4 py-3">
                    <input value={lead.industry} onChange={e => updateLead(lead.id, 'industry', e.target.value)}
                      className="bg-transparent text-[#a1a1aa] text-sm w-full max-w-[100px] border border-[#1e1e2e] rounded px-2 py-1 focus:outline-none focus:border-[#6c63ff]" />
                  </td>
                  <td className="px-4 py-3">
                    <select value={lead.status} onChange={e => updateLead(lead.id, 'status', e.target.value)}
                      className="bg-[#0a0a0f] text-sm border border-[#1e1e2e] rounded px-2 py-1 focus:outline-none focus:border-[#6c63ff]"
                      style={{ color: lead.status === 'hot' ? '#ef4444' : lead.status === 'warm' ? '#f59e0b' : '#71717a' }}>
                      {WARM_STATUSES.map(s => <option key={s} value={s} className="bg-[#0a0a0f]">{s}</option>)}
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <input value={lead.potential_revenue || ''} onChange={e => updateLead(lead.id, 'potential_revenue', parseInt(e.target.value) || 0)}
                      type="number" className="bg-transparent text-[#a1a1aa] text-sm w-24 border border-[#1e1e2e] rounded px-2 py-1 focus:outline-none focus:border-[#6c63ff]" />
                  </td>
                  <td className="px-4 py-3">
                    <input value={lead.next_action} onChange={e => updateLead(lead.id, 'next_action', e.target.value)}
                      className="bg-transparent text-[#a1a1aa] text-sm w-full max-w-[140px] border border-[#1e1e2e] rounded px-2 py-1 focus:outline-none focus:border-[#6c63ff]" />
                  </td>
                  <td className="px-4 py-3">
                    <textarea value={lead.notes} onChange={e => updateLead(lead.id, 'notes', e.target.value)}
                      className="bg-transparent text-[#a1a1aa] text-sm w-full max-w-[180px] resize-none border border-[#1e1e2e] rounded px-2 py-1 focus:outline-none focus:border-[#6c63ff]" rows={1} />
                  </td>
                  <td className="px-4 py-3">
                    <button onClick={() => removeLead(lead.id)} className="text-[#3f3f46] hover:text-red-400 text-xs transition-colors">✕</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-[#1e1e2e]">
          <button onClick={addLead} className="text-[#6c63ff] hover:text-[#5a52d5] text-sm font-medium transition-colors">
            + Add Warm Lead
          </button>
        </div>
      </div>

      {/* Casino Note */}
      <div className="mt-6 bg-[#111118] border border-[#f59e0b]/30 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎰</span>
          <div>
            <h4 className="text-white font-semibold">Casino Investment — $75M Project</h4>
            <p className="text-[#71717a] text-sm mt-1">
              New business, likely needs experience and clients. Map out: who do you know that has a business, 
              who could benefit from an AI audit, who might invest or partner?
            </p>
            <div className="mt-3 flex gap-3 flex-wrap">
              <span className="text-xs bg-[#f59e0b]/10 text-[#f59e0b] px-2 py-1 rounded">Add them as warm lead above</span>
              <span className="text-xs bg-[#6c63ff]/10 text-[#6c63ff] px-2 py-1 rounded">Tag: #casino-related</span>
              <span className="text-xs bg-[#22c55e]/10 text-[#22c55e] px-2 py-1 rounded">High-value opportunity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- BUSINESS ---
function BusinessTab() {
  const [entities, setEntities] = useState<BusinessEntity[]>([
    {
      id: '1',
      entity_name: '',
      entity_type: 'Sole Trader',
      abn: '',
      state_registered: '',
      gst_registered: false,
      business_structure: '',
      owners: [],
      website: '',
      address: '',
      status: 'active',
      notes: '',
    },
  ])

  const addEntity = () => {
    setEntities(prev => [...prev, {
      id: Date.now().toString(),
      entity_name: '', entity_type: 'Sole Trader', abn: '', state_registered: '',
      gst_registered: false, business_structure: '', owners: [], website: '',
      address: '', status: 'active', notes: '',
    }])
  }

  const updateEntity = (id: string, field: keyof BusinessEntity, val: string | boolean | string[]) => {
    setEntities(prev => prev.map(e => e.id === id ? { ...e, [field]: val } : e))
  }

  const removeEntity = (id: string) => {
    setEntities(prev => prev.filter(e => e.id !== id))
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Business Entities" value={entities.length} />
        <StatCard label="GST Registered" value={entities.filter(e => e.gst_registered).length} color="#22c55e" />
        <StatCard label="Active" value={entities.filter(e => e.status === 'active').length} color="#22c55e" />
      </div>

      <div className="flex gap-3 mb-6">
        <button onClick={addEntity}
          className="px-4 py-2 bg-[#6c63ff] hover:bg-[#5a52d5] text-white rounded-lg text-sm font-medium transition-colors">
          + Add Business Entity
        </button>
      </div>

      <div className="space-y-4">
        {entities.map(entity => (
          <div key={entity.id} className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-white font-semibold text-lg">
                  {entity.entity_name || 'New Business Entity'}
                </h3>
                <span className="text-xs text-[#71717a] capitalize">{entity.entity_type}</span>
              </div>
              <div className="flex gap-2">
                <select value={entity.status} onChange={e => updateEntity(entity.id, 'status', e.target.value)}
                  className="bg-[#0a0a0f] text-xs border border-[#1e1e2e] rounded px-2 py-1 text-[#71717a]">
                  {['active', 'dormant', 'sold', 'closed'].map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <button onClick={() => removeEntity(entity.id)} className="text-[#3f3f46] hover:text-red-400 text-xs transition-colors">✕</button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Input label="Entity Name" value={entity.entity_name} onChange={v => updateEntity(entity.id, 'entity_name', v)} placeholder="EMVY Pty Ltd" />
              <Select label="Entity Type" value={entity.entity_type} onChange={v => updateEntity(entity.id, 'entity_type', v)} options={ENTITY_TYPES} />
              <Input label="ABN" value={entity.abn} onChange={v => updateEntity(entity.id, 'abn', v)} placeholder="12 345 678 901" />
              <Input label="State Registered" value={entity.state_registered} onChange={v => updateEntity(entity.id, 'state_registered', v)} placeholder="WA, NSW, VIC..." />
              <Input label="Business Structure" value={entity.business_structure} onChange={v => updateEntity(entity.id, 'business_structure', v)} placeholder="e.g. Holding / Trading" />
              <Input label="Website" value={entity.website} onChange={v => updateEntity(entity.id, 'website', v)} placeholder="https://..." />
              <Input label="Owners (comma sep)" value={entity.owners?.join(', ') || ''} onChange={v => updateEntity(entity.id, 'owners', v.split(',').map(s => s.trim()))} placeholder="John, Jane" />
              <div className="flex items-center gap-2 pt-5">
                <input type="checkbox" checked={entity.gst_registered} onChange={e => updateEntity(entity.id, 'gst_registered', e.target.checked)}
                  className="w-4 h-4 rounded border-[#1e1e2e]" />
                <span className="text-[#a1a1aa] text-sm">GST Registered</span>
              </div>
            </div>
            <div className="mt-4">
              <Input label="Address" value={entity.address} onChange={v => updateEntity(entity.id, 'address', v)} placeholder="Business address" />
            </div>
            <div className="mt-4">
              <Textarea label="Notes" value={entity.notes} onChange={v => updateEntity(entity.id, 'notes', v)} placeholder="Ownership splits, ASIC details, trust deed reference..." rows={2} />
            </div>
          </div>
        ))}
      </div>

      {/* Best Practice Reminders */}
      <div className="mt-6 bg-[#111118] border border-[#6c63ff]/30 rounded-xl p-5">
        <h4 className="text-white font-semibold mb-3">🏢 Business Structure Best Practice</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-[#f59e0b] font-medium mb-1">Consider Separating:</p>
            <ul className="text-[#71717a] space-y-1 text-xs">
              <li>• Holding entity (protects assets)</li>
              <li>• Trading entity (operational risk)</li>
              <li>• IP holding company</li>
            </ul>
          </div>
          <div>
            <p className="text-[#22c55e] font-medium mb-1">Ongoing Requirements:</p>
            <ul className="text-[#71717a] space-y-1 text-xs">
              <li>• Annual ASIC review</li>
              <li>• BAS quarterly lodgement</li>
              <li>• Shareholder minutes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- DOMAINS ---
function DomainsTab() {
  const [domains, setDomains] = useState<Domain[]>([
    {
      id: '1',
      domain_name: '',
      registrar: '',
      expiry_date: '',
      auto_renew: true,
      renewal_cost: 0,
      linked_business: '',
      purpose: '',
      status: 'active',
      dns_config: '',
      notes: '',
    },
  ])

  const addDomain = () => {
    setDomains(prev => [...prev, {
      id: Date.now().toString(),
      domain_name: '', registrar: '', expiry_date: '', auto_renew: true,
      renewal_cost: 0, linked_business: '', purpose: '', status: 'active',
      dns_config: '', notes: '',
    }])
  }

  const updateDomain = (id: string, field: keyof Domain, val: string | boolean | number) => {
    setDomains(prev => prev.map(d => d.id === id ? { ...d, [field]: val } : d))
  }

  const removeDomain = (id: string) => {
    setDomains(prev => prev.filter(d => d.id !== id))
  }

  const upcomingExpiry = domains.filter(d => {
    if (!d.expiry_date) return false
    const days = Math.ceil((new Date(d.expiry_date).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    return days <= 60 && days > 0
  }).length

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Domains" value={domains.length} />
        <StatCard label="Expiring Soon" value={upcomingExpiry} color={upcomingExpiry > 0 ? '#ef4444' : '#22c55e'} />
        <StatCard label="Active" value={domains.filter(d => d.status === 'active').length} color="#22c55e" />
        <StatCard label="Total Renewal Cost" value={`$${domains.reduce((s, d) => s + (d.renewal_cost || 0), 0).toLocaleString()}/yr`} />
      </div>

      <div className="flex gap-3 mb-6">
        <button onClick={addDomain}
          className="px-4 py-2 bg-[#6c63ff] hover:bg-[#5a52d5] text-white rounded-lg text-sm font-medium transition-colors">
          + Add Domain
        </button>
      </div>

      <div className="space-y-4">
        {domains.map(domain => (
          <div key={domain.id} className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-white font-semibold text-lg">
                  {domain.domain_name || 'newdomain.com'}
                </h3>
                <span className="text-xs text-[#71717a] capitalize">{domain.purpose || '— purpose'}</span>
              </div>
              <div className="flex gap-2 items-center">
                <select value={domain.status} onChange={e => updateDomain(domain.id, 'status', e.target.value)}
                  className="bg-[#0a0a0f] text-xs border border-[#1e1e2e] rounded px-2 py-1">
                  {DOMAIN_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <button onClick={() => removeDomain(domain.id)} className="text-[#3f3f46] hover:text-red-400 text-xs">✕</button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Input label="Domain Name" value={domain.domain_name} onChange={v => updateDomain(domain.id, 'domain_name', v)} placeholder="emvy.ai" />
              <Input label="Registrar" value={domain.registrar} onChange={v => updateDomain(domain.id, 'registrar', v)} placeholder="Porkbun, Namecheap..." />
              <Input label="Expiry Date" value={domain.expiry_date} onChange={v => updateDomain(domain.id, 'expiry_date', v)} type="date" />
              <Input label="Renewal Cost ($/yr)" value={domain.renewal_cost?.toString() || ''} onChange={v => updateDomain(domain.id, 'renewal_cost', parseFloat(v) || 0)} type="number" />
              <Input label="Linked Business" value={domain.linked_business} onChange={v => updateDomain(domain.id, 'linked_business', v)} placeholder="EMVY Pty Ltd" />
              <Input label="Purpose" value={domain.purpose} onChange={v => updateDomain(domain.id, 'purpose', v)} placeholder="Main site, landing page..." />
              <div className="flex items-center gap-2 pt-5">
                <input type="checkbox" checked={domain.auto_renew} onChange={e => updateDomain(domain.id, 'auto_renew', e.target.checked)}
                  className="w-4 h-4 rounded border-[#1e1e2e]" />
                <span className="text-[#a1a1aa] text-sm">Auto-renew</span>
              </div>
            </div>
            <div className="mt-4">
              <Textarea label="DNS Config" value={domain.dns_config} onChange={v => updateDomain(domain.id, 'dns_config', v)} placeholder="A records, CNAMEs, MX..." rows={2} />
            </div>
            <div className="mt-4">
              <Textarea label="Notes" value={domain.notes} onChange={v => updateDomain(domain.id, 'notes', v)} placeholder="Transfer history, renewal promo codes..." rows={1} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- GRANTS ---
function GrantsTab() {
  const [grants, setGrants] = useState<Grant[]>([
    {
      id: '1',
      grant_name: '',
      agency: '',
      amount: 0,
      status: 'researching',
      application_url: '',
      due_date: '',
      linked_business: '',
      notes: '',
    },
  ])

  const addGrant = () => {
    setGrants(prev => [...prev, {
      id: Date.now().toString(),
      grant_name: '', agency: '', amount: 0, status: 'researching',
      application_url: '', due_date: '', linked_business: '', notes: '',
    }])
  }

  const updateGrant = (id: string, field: keyof Grant, val: string | number) => {
    setGrants(prev => prev.map(g => g.id === id ? { ...g, [field]: val } : g))
  }

  const removeGrant = (id: string) => {
    setGrants(prev => prev.filter(g => g.id !== id))
  }

  const totalPotential = grants.reduce((s, g) => s + (g.amount || 0), 0)
  const submitted = grants.filter(g => g.status === 'submitted').length
  const approved = grants.filter(g => g.status === 'approved').length

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard label="Grants Tracked" value={grants.length} />
        <StatCard label="Total Potential" value={`$${totalPotential.toLocaleString()}`} color="#22c55e" />
        <StatCard label="Submitted" value={submitted} color="#f59e0b" />
        <StatCard label="Approved" value={approved} color="#22c55e" />
      </div>

      {/* Aussie Grant Programs */}
      <div className="bg-[#111118] border border-[#6c63ff]/30 rounded-xl p-5 mb-6">
        <h4 className="text-white font-semibold mb-3">🇦🇺 Key Australian Grant Programs to Research</h4>
        <div className="grid grid-cols-3 gap-4 text-sm">
          {[
            { name: 'Federal Jobs & Skills Exchange', agency: 'Dept of Employment', note: 'Hiring wage subsidies' },
            { name: 'Export Market Development Grants', agency: 'Austrade', note: 'Up to $150k for exporters' },
            { name: 'R&D Tax Incentive', agency: 'AusIndustry', note: '43.5% for eligible R&D' },
            { name: 'Accelerating Commercialisation', agency: 'AusIndustry', note: 'Up to $1M for commercialisation' },
            { name: 'CSIRO Kick-Start', agency: 'CSIRO', note: 'Up to $50k for startups' },
            { name: 'State Business Development Grants', agency: 'WA/NSW/VIC/QLD', note: 'Varies by state' },
          ].map(g => (
            <div key={g.name} className="bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg p-3">
              <p className="text-white text-xs font-medium">{g.name}</p>
              <p className="text-[#6c63ff] text-xs">{g.agency}</p>
              <p className="text-[#71717a] text-xs mt-1">{g.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <button onClick={addGrant}
          className="px-4 py-2 bg-[#6c63ff] hover:bg-[#5a52d5] text-white rounded-lg text-sm font-medium transition-colors">
          + Track New Grant
        </button>
      </div>

      <div className="space-y-4">
        {grants.map(grant => (
          <div key={grant.id} className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-white font-semibold">
                {grant.grant_name || 'New Grant Application'}
              </h3>
              <div className="flex gap-2 items-center">
                <select value={grant.status} onChange={e => updateGrant(grant.id, 'status', e.target.value)}
                  className="bg-[#0a0a0f] text-xs border border-[#1e1e2e] rounded px-2 py-1"
                  style={{ color: grant.status === 'approved' ? '#22c55e' : grant.status === 'rejected' ? '#ef4444' : '#71717a' }}>
                  {GRANT_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <button onClick={() => removeGrant(grant.id)} className="text-[#3f3f46] hover:text-red-400 text-xs">✕</button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Input label="Grant Name" value={grant.grant_name} onChange={v => updateGrant(grant.id, 'grant_name', v)} placeholder="Export Market Development Grant" />
              <Input label="Agency" value={grant.agency} onChange={v => updateGrant(grant.id, 'agency', v)} placeholder="Austrade, AusIndustry..." />
              <Input label="Amount ($)" value={grant.amount?.toString() || ''} onChange={v => updateGrant(grant.id, 'amount', parseFloat(v) || 0)} type="number" />
              <Input label="Due Date" value={grant.due_date} onChange={v => updateGrant(grant.id, 'due_date', v)} type="date" />
              <Input label="Application URL" value={grant.application_url} onChange={v => updateGrant(grant.id, 'application_url', v)} placeholder="https://..." />
              <Input label="Linked Business" value={grant.linked_business} onChange={v => updateGrant(grant.id, 'linked_business', v)} placeholder="Which entity" />
            </div>
            <div className="mt-4">
              <Textarea label="Eligibility / Notes" value={grant.notes} onChange={v => updateGrant(grant.id, 'notes', v)} placeholder="Eligibility criteria, required documents, deadlines..." rows={2} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- PROCESSES ---
function ProcessesTab() {
  const [processes, setProcesses] = useState<Process[]>([
    {
      id: '1',
      process_name: '',
      category: 'content',
      description: '',
      steps: [''],
      owner: '',
      tools: [],
      integrations: [],
      status: 'draft',
    },
  ])

  const addProcess = () => {
    setProcesses(prev => [...prev, {
      id: Date.now().toString(),
      process_name: '', category: 'content', description: '', steps: [''],
      owner: '', tools: [], integrations: [], status: 'draft',
    }])
  }

  const updateProcess = (id: string, field: keyof Process, val: string | string[]) => {
    setProcesses(prev => prev.map(p => p.id === id ? { ...p, [field]: val } : p))
  }

  const updateStep = (pid: string, idx: number, val: string) => {
    setProcesses(prev => prev.map(p => {
      if (p.id !== pid) return p
      const newSteps = [...p.steps]
      newSteps[idx] = val
      return { ...p, steps: newSteps }
    }))
  }

  const addStep = (pid: string) => {
    setProcesses(prev => prev.map(p => {
      if (p.id !== pid) return p
      return { ...p, steps: [...p.steps, ''] }
    }))
  }

  const removeProcess = (id: string) => {
    setProcesses(prev => prev.filter(p => p.id !== id))
  }

  const CATEGORIES = ['content', 'outreach', 'sales', 'audit', 'build', 'research', 'general']

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Processes" value={processes.length} />
        <StatCard label="Active" value={processes.filter(p => p.status === 'active').length} color="#22c55e" />
        <StatCard label="Draft" value={processes.filter(p => p.status === 'draft').length} color="#f59e0b" />
        <StatCard label="Categories" value={new Set(processes.map(p => p.category)).size} />
      </div>

      <div className="flex gap-3 mb-6">
        <button onClick={addProcess}
          className="px-4 py-2 bg-[#6c63ff] hover:bg-[#5a52d5] text-white rounded-lg text-sm font-medium transition-colors">
          + Create Process Flow
        </button>
      </div>

      <div className="space-y-6">
        {processes.map(proc => (
          <div key={proc.id} className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex gap-3">
                <input
                  value={proc.process_name}
                  onChange={e => updateProcess(proc.id, 'process_name', e.target.value)}
                  placeholder="Process name (e.g. Content Flywheel)"
                  className="bg-transparent text-white text-lg font-semibold border-b border-[#1e1e2e] focus:border-[#6c63ff] focus:outline-none placeholder-[#3f3f46]"
                />
              </div>
              <div className="flex gap-2">
                <select value={proc.category} onChange={e => updateProcess(proc.id, 'category', e.target.value)}
                  className="bg-[#0a0a0f] text-xs border border-[#1e1e2e] rounded px-2 py-1 text-[#71717a]">
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select value={proc.status} onChange={e => updateProcess(proc.id, 'status', e.target.value)}
                  className="bg-[#0a0a0f] text-xs border border-[#1e1e2e] rounded px-2 py-1">
                  {PROCESS_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <button onClick={() => removeProcess(proc.id)} className="text-[#3f3f46] hover:text-red-400 text-xs">✕</button>
              </div>
            </div>

            <div className="mb-4">
              <input
                value={proc.description}
                onChange={e => updateProcess(proc.id, 'description', e.target.value)}
                placeholder="What does this process do?"
                className="w-full bg-transparent text-[#a1a1aa] text-sm border border-[#1e1e2e] rounded-lg px-3 py-2 focus:outline-none focus:border-[#6c63ff] placeholder-[#3f3f46]"
              />
            </div>

            {/* Steps Builder */}
            <div className="mb-4">
              <label className="block text-xs text-[#71717a] mb-2">Process Steps</label>
              <div className="space-y-2">
                {proc.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-2 items-start">
                    <span className="w-6 h-6 bg-[#1e1e2e] text-[#6c63ff] text-xs rounded flex items-center justify-center flex-shrink-0 mt-1.5">{idx + 1}</span>
                    <input
                      value={step}
                      onChange={e => updateStep(proc.id, idx, e.target.value)}
                      placeholder={`Step ${idx + 1} description...`}
                      className="flex-1 bg-[#0a0a0f] text-white text-sm border border-[#1e1e2e] rounded-lg px-3 py-2 focus:outline-none focus:border-[#6c63ff] placeholder-[#3f3f46]"
                    />
                  </div>
                ))}
              </div>
              <button onClick={() => addStep(proc.id)}
                className="mt-2 text-[#6c63ff] hover:text-[#5a52d5] text-xs font-medium">
                + Add Step
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[#71717a] mb-1">Owner</label>
                <input value={proc.owner} onChange={e => updateProcess(proc.id, 'owner', e.target.value)}
                  placeholder="Who owns this?"
                  className="w-full bg-[#0a0a0f] text-white text-sm border border-[#1e1e2e] rounded-lg px-3 py-2 focus:outline-none focus:border-[#6c63ff]" />
              </div>
              <div>
                <label className="block text-xs text-[#71717a] mb-1">Tools (comma sep)</label>
                <input value={proc.tools?.join(', ') || ''} onChange={e => updateProcess(proc.id, 'tools', e.target.value.split(',').map(s => s.trim()))}
                  placeholder="Claude, Zapier, Calendly..."
                  className="w-full bg-[#0a0a0f] text-white text-sm border border-[#1e1e2e] rounded-lg px-3 py-2 focus:outline-none focus:border-[#6c63ff]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- SYSTEMS ---
function SystemsTab() {
  const [systems, setSystems] = useState<System[]>([
    {
      id: '1',
      system_name: '',
      category: 'content',
      description: '',
      content_flow: '',
      cta_text: '',
      cta_url: '',
      free_resource_name: '',
      free_resource_url: '',
      audit_trigger: '',
      integrations: [],
      status: 'active',
    },
  ])

  const addSystem = () => {
    setSystems(prev => [...prev, {
      id: Date.now().toString(),
      system_name: '', category: 'content', description: '', content_flow: '',
      cta_text: '', cta_url: '', free_resource_name: '', free_resource_url: '',
      audit_trigger: '', integrations: [], status: 'active',
    }])
  }

  const updateSystem = (id: string, field: keyof System, val: string | string[]) => {
    setSystems(prev => prev.map(s => s.id === id ? { ...s, [field]: val } : s))
  }

  const removeSystem = (id: string) => {
    setSystems(prev => prev.filter(s => s.id !== id))
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Active Systems" value={systems.filter(s => s.status === 'active').length} color="#22c55e" />
        <StatCard label="Total Systems" value={systems.length} />
        <StatCard label="Integrations Used" value={new Set(systems.flatMap(s => s.integrations || [])).size} />
      </div>

      <div className="flex gap-3 mb-6">
        <button onClick={addSystem}
          className="px-4 py-2 bg-[#6c63ff] hover:bg-[#5a52d5] text-white rounded-lg text-sm font-medium transition-colors">
          + Add System
        </button>
      </div>

      <div className="bg-[#111118] border border-[#f59e0b]/30 rounded-xl p-5 mb-6">
        <h4 className="text-white font-semibold mb-2">⚙️ Standard EMVY Content System</h4>
        <div className="grid grid-cols-4 gap-4 text-xs text-[#71717a]">
          <div className="text-center">
            <p className="text-[#6c63ff] font-medium">Content</p>
            <p className="mt-1">YouTube video (1x/week)</p>
          </div>
          <div className="text-center">
            <p className="text-[#6c63ff] font-medium">→</p>
            <p className="mt-1">LinkedIn posts (3x/week)</p>
          </div>
          <div className="text-center">
            <p className="text-[#6c63ff] font-medium">→</p>
            <p className="mt-1">X posts (5-10x/week)</p>
          </div>
          <div className="text-center">
            <p className="text-[#6c63ff] font-medium">→</p>
            <p className="mt-1">Substack article (1x/week)</p>
          </div>
        </div>
        <div className="mt-3 text-center">
          <span className="text-xs text-[#f59e0b]">CTA in every post →</span>
          <span className="text-xs text-[#22c55e] ml-2">Free resource (AI audit checklist)</span>
          <span className="text-xs text-[#6c63ff] ml-2">→ Audit at end of sequence</span>
        </div>
      </div>

      <div className="space-y-4">
        {systems.map(sys => (
          <div key={sys.id} className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <input
                value={sys.system_name}
                onChange={e => updateSystem(sys.id, 'system_name', e.target.value)}
                placeholder="System name (e.g. Lead Magnet Funnel)"
                className="bg-transparent text-white text-lg font-semibold border-b border-[#1e1e2e] focus:border-[#6c63ff] focus:outline-none placeholder-[#3f3f46]"
              />
              <div className="flex gap-2">
                <select value={sys.category} onChange={e => updateSystem(sys.id, 'category', e.target.value)}
                  className="bg-[#0a0a0f] text-xs border border-[#1e1e2e] rounded px-2 py-1 text-[#71717a]">
                  {['content', 'outreach', 'sales', 'audit', 'lead-magnet', 'general'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <button onClick={() => removeSystem(sys.id)} className="text-[#3f3f46] hover:text-red-400 text-xs">✕</button>
              </div>
            </div>

            <Textarea
              label="Description"
              value={sys.description}
              onChange={v => updateSystem(sys.id, 'description', v)}
              placeholder="What this system does..."
              rows={2}
            />

            <div className="grid grid-cols-2 gap-4 mt-4">
              <Input label="Content Flow" value={sys.content_flow} onChange={v => updateSystem(sys.id, 'content_flow', v)} placeholder="YouTube → LinkedIn → X → Substack" />
              <Input label="CTA Text" value={sys.cta_text} onChange={v => updateSystem(sys.id, 'cta_text', v)} placeholder="Get your free AI audit" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Input label="CTA URL" value={sys.cta_url} onChange={v => updateSystem(sys.id, 'cta_url', v)} placeholder="https://emvy.ai/audit" />
              <Input label="Free Resource Name" value={sys.free_resource_name} onChange={v => updateSystem(sys.id, 'free_resource_name', v)} placeholder="50 AI Agent Prompts" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Input label="Free Resource URL" value={sys.free_resource_url} onChange={v => updateSystem(sys.id, 'free_resource_url', v)} placeholder="https://..." />
              <Input label="Audit Trigger" value={sys.audit_trigger} onChange={v => updateSystem(sys.id, 'audit_trigger', v)} placeholder="After 3rd touchpoint" />
            </div>
            <div className="mt-4">
              <Input
                label="Integrations (comma sep)"
                value={sys.integrations?.join(', ') || ''}
                onChange={v => updateSystem(sys.id, 'integrations', v.split(',').map(s => s.trim()))}
                placeholder="Cal.com, VAPI, Gmail, Supabase..."
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- APIs ---
function ApisTab() {
  const [apis, setApis] = useState<ApiIntegration[]>([
    {
      id: '1',
      api_name: '',
      provider: '',
      purpose: '',
      key_ref: '',
      status: 'active',
      rate_limit: '',
      monthly_cost: 0,
      docs_url: '',
      notes: '',
    },
  ])

  const addApi = () => {
    setApis(prev => [...prev, {
      id: Date.now().toString(),
      api_name: '', provider: '', purpose: '', key_ref: '',
      status: 'active', rate_limit: '', monthly_cost: 0, docs_url: '', notes: '',
    }])
  }

  const updateApi = (id: string, field: keyof ApiIntegration, val: string | number) => {
    setApis(prev => prev.map(a => a.id === id ? { ...a, [field]: val } : a))
  }

  const removeApi = (id: string) => {
    setApis(prev => prev.filter(a => a.id !== id))
  }

  const totalCost = apis.reduce((s, a) => s + (a.monthly_cost || 0), 0)

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard label="APIs Tracked" value={apis.length} />
        <StatCard label="Active" value={apis.filter(a => a.status === 'active').length} color="#22c55e" />
        <StatCard label="Monthly Cost" value={`$${totalCost.toLocaleString()}`} color="#f59e0b" />
        <StatCard label="Rate Limited" value={apis.filter(a => a.status === 'limited').length} color="#ef4444" />
      </div>

      {/* Suggested APIs */}
      <div className="bg-[#111118] border border-[#6c63ff]/30 rounded-xl p-5 mb-6">
        <h4 className="text-white font-semibold mb-3">🔌 Suggested API Stack (Minimize Problems, Maximize Time)</h4>
        <div className="grid grid-cols-4 gap-3">
          {[
            { name: 'VAPI', category: 'Voice/Calls', purpose: 'Outbound/inbound calls, Callie', status: '✅ Live' },
            { name: 'Cal.com', category: 'Scheduling', purpose: 'Booking links in CTAs', status: '✅ Live' },
            { name: 'Supabase', category: 'Database', purpose: 'Leads, pipeline, all data', status: '✅ Live' },
            { name: 'Gmail SMTP', category: 'Email', purpose: 'Dusk sends personally', status: '✅ Live' },
            { name: 'NVIDIA API', category: 'LLM', purpose: 'AI inference for research', status: '✅ Live' },
            { name: 'Resend', category: 'Email', purpose: 'Automated sequences (pending)', status: '⏳ To add' },
            { name: 'Google Places', category: 'Lead Gen', purpose: 'Find businesses near me', status: '⏳ In progress' },
            { name: 'TailScale', category: 'Networking', purpose: 'Connect home device', status: '⏳ To set up' },
          ].map(api => (
            <div key={api.name} className="bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg p-3">
              <p className="text-white text-xs font-medium">{api.name}</p>
              <p className="text-[#6c63ff] text-xs">{api.category}</p>
              <p className="text-[#71717a] text-xs mt-1">{api.purpose}</p>
              <p className="text-xs mt-1" style={{ color: api.status.includes('✅') ? '#22c55e' : '#f59e0b' }}>{api.status}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <button onClick={addApi}
          className="px-4 py-2 bg-[#6c63ff] hover:bg-[#5a52d5] text-white rounded-lg text-sm font-medium transition-colors">
          + Add API Integration
        </button>
      </div>

      <div className="space-y-4">
        {apis.map(api => (
          <div key={api.id} className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <input
                value={api.api_name}
                onChange={e => updateApi(api.id, 'api_name', e.target.value)}
                placeholder="API name"
                className="bg-transparent text-white text-lg font-semibold border-b border-[#1e1e2e] focus:border-[#6c63ff] focus:outline-none placeholder-[#3f3f46]"
              />
              <div className="flex gap-2">
                <select value={api.status} onChange={e => updateApi(api.id, 'status', e.target.value)}
                  className="bg-[#0a0a0f] text-xs border border-[#1e1e2e] rounded px-2 py-1">
                  {API_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <button onClick={() => removeApi(api.id)} className="text-[#3f3f46] hover:text-red-400 text-xs">✕</button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Input label="Provider" value={api.provider} onChange={v => updateApi(api.id, 'provider', v)} placeholder="OpenAI, Anthropic..." />
              <Input label="Purpose" value={api.purpose} onChange={v => updateApi(api.id, 'purpose', v)} placeholder="What it's used for" />
              <Input label="Key Reference" value={api.key_ref} onChange={v => updateApi(api.id, 'key_ref', v)} placeholder="env var name or location" />
              <Input label="Rate Limit" value={api.rate_limit} onChange={v => updateApi(api.id, 'rate_limit', v)} placeholder="1000 req/min" />
              <Input label="Monthly Cost ($)" value={api.monthly_cost?.toString() || ''} onChange={v => updateApi(api.id, 'monthly_cost', parseFloat(v) || 0)} type="number" />
              <Input label="Docs URL" value={api.docs_url} onChange={v => updateApi(api.id, 'docs_url', v)} placeholder="https://docs..." />
            </div>
            <div className="mt-4">
              <Textarea label="Notes" value={api.notes} onChange={v => updateApi(api.id, 'notes', v)} placeholder="Setup quirks, token saved in config.yaml, gotchas..." rows={2} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- LEADS (existing ops page simplified) ---
function LeadsTab() {
  const PIPE_STAGES = [
    { id: 'new', label: 'New Lead', color: '#3f3f46' },
    { id: 'qualified', label: 'Qualified', color: '#71717a' },
    { id: 'discovery', label: 'Discovery Call Booked', color: '#6c63ff' },
    { id: 'audit_sent', label: 'Audit Proposal Sent', color: '#6c63ff' },
    { id: 'won', label: 'Client — Won', color: '#22c55e' },
    { id: 'lost', label: 'Lost', color: '#ef4444' },
  ]

  const [leads, setLeads] = useState<Record<string, string>[]>([
    { name: '', email: '', company: '', stage: 'new', source: '', notes: '', lastContact: '', createdAt: new Date().toLocaleDateString() },
  ])

  const updateLead = (i: number, field: string, val: string) => {
    setLeads(prev => prev.map((l, idx) => idx === i ? { ...l, [field]: val } : l))
  }

  const addLead = () => {
    setLeads(prev => [...prev, { name: '', email: '', company: '', stage: 'new', source: '', notes: '', lastContact: '', createdAt: new Date().toLocaleDateString() }])
  }

  const removeLead = (i: number) => {
    setLeads(prev => prev.filter((_, idx) => idx !== i))
  }

  const wonLeads = leads.filter(l => l.stage === 'won').length
  const activeLeads = leads.filter(l => !['won', 'lost'].includes(l.stage)).length

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Active Leads" value={activeLeads} />
        <StatCard label="Clients Won" value={wonLeads} color="#22c55e" />
        <StatCard label="Revenue Pipeline" value={`$${wonLeads * 1500}`} color="#6c63ff" />
      </div>

      <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6 mb-8">
        <h2 className="text-white font-semibold mb-4">Pipeline Stages</h2>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {PIPE_STAGES.map(s => (
            <div key={s.id} className="flex-shrink-0 px-4 py-2 rounded-lg border text-sm" style={{ borderColor: s.color, color: s.color }}>
              <p className="font-medium">{s.label}</p>
              <p className="text-xs mt-0.5 opacity-60">{leads.filter(l => l.stage === s.id).length}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#1e1e2e]">
                {['Name', 'Email', 'Company', 'Stage', 'Source', 'Last Contact', 'Notes', ''].map(h => (
                  <th key={h} className="text-left text-[#71717a] font-medium px-4 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, i) => (
                <tr key={i} className="border-b border-[#1e1e2e]/50 last:border-0">
                  {['name', 'email', 'company', 'stage', 'source', 'lastContact'].map(field => (
                    <td key={field} className="px-4 py-3">
                      {field === 'stage' ? (
                        <select value={lead[field]} onChange={e => updateLead(i, field, e.target.value)}
                          className="bg-transparent text-white text-sm border border-[#1e1e2e] rounded px-2 py-1">
                          {PIPE_STAGES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                        </select>
                      ) : (
                        <input value={lead[field]} onChange={e => updateLead(i, field, e.target.value)}
                          className="bg-transparent text-white text-sm w-full max-w-[160px] border border-[#1e1e2e] rounded px-2 py-1 focus:outline-none focus:border-[#6c63ff]" />
                      )}
                    </td>
                  ))}
                  <td className="px-4 py-3">
                    <textarea value={lead.notes} onChange={e => updateLead(i, 'notes', e.target.value)}
                      className="bg-transparent text-[#a1a1aa] text-sm w-full max-w-[200px] resize-none border border-[#1e1e2e] rounded px-2 py-1 focus:outline-none focus:border-[#6c63ff]" rows={1} />
                  </td>
                  <td className="px-4 py-3">
                    <button onClick={() => removeLead(i)} className="text-[#3f3f46] hover:text-red-400 text-xs">✕</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-[#1e1e2e]">
          <button onClick={addLead} className="text-[#6c63ff] hover:text-[#5a52d5] text-sm font-medium">+ Add Lead</button>
        </div>
      </div>
    </div>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function OpsPage() {
  const [tab, setTab] = useState<Tab>('warm')

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <header className="border-b border-[#1e1e2e] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="https://emvyai.vercel.app" className="text-xl font-bold text-white tracking-tight">EMVY</a>
            <span className="text-xs text-[#6c63ff] bg-[#6c63ff]/10 px-2 py-0.5 rounded">OPS HUB</span>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <a href="https://emvyai.vercel.app" className="text-[#71717a] hover:text-white transition-colors">Website</a>
            <a href="https://cal.com/jake-emvy/15-min-ai-chat" className="text-[#71717a] hover:text-white transition-colors">Book Call</a>
          </nav>
        </div>
      </header>

      {/* Sub-nav */}
      <div className="border-b border-[#1e1e2e] px-6">
        <div className="max-w-7xl mx-auto flex gap-1 overflow-x-auto py-2">
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                tab === t.id ? 'bg-[#6c63ff] text-white' : 'text-[#71717a] hover:text-white hover:bg-[#1e1e2e]'
              }`}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {tab === 'leads' && <LeadsTab />}
        {tab === 'warm' && <WarmLeadsTab />}
        {tab === 'business' && <BusinessTab />}
        {tab === 'domains' && <DomainsTab />}
        {tab === 'grants' && <GrantsTab />}
        {tab === 'processes' && <ProcessesTab />}
        {tab === 'systems' && <SystemsTab />}
        {tab === 'apis' && <ApisTab />}
      </main>

      {/* TailScale Setup Notice */}
      <div className="border-t border-[#1e1e2e] mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="bg-[#111118] border border-[#22c55e]/30 rounded-xl p-5">
            <div className="flex items-start gap-4">
              <span className="text-2xl">🔒</span>
              <div className="flex-1">
                <h4 className="text-white font-semibold">TailScale Setup — Connect Everything to Your Home Device</h4>
                <p className="text-[#71717a] text-sm mt-1">
                  Set up TailScale on this server and your home device to create a secure VPN. Access all services from anywhere, 
                  keep everything on a private network, no exposed ports.
                </p>
                <div className="mt-3 bg-[#0a0a0f] rounded-lg p-3 font-mono text-xs text-[#a1a1aa]">
                  <p># 1. Install TailScale on server:</p>
                  <p className="text-[#22c55e] mt-1">curl -fsSL https://tailscale.com/install.sh | sh</p>
                  <p className="mt-2"># 2. Authenticate (gets your auth key from login.tailscale.com):</p>
                  <p className="text-[#22c55e] mt-1">sudo tailscale up --authkey &lt;YOUR_AUTH_KEY&gt;</p>
                  <p className="mt-2"># 3. On your home device, install TailScale and log in</p>
                  <p className="mt-2"># 4. Both devices will appear in your TailScale admin console</p>
                  <p className="mt-2"># 5. Access this dashboard via your TailScale IP (e.g. 100.x.x.x)</p>
                </div>
                <div className="mt-3 flex gap-3 flex-wrap">
                  <a href="https://login.tailscale.com/fetch-api-key" target="_blank"
                    className="text-xs bg-[#22c55e]/10 text-[#22c55e] px-3 py-1.5 rounded-lg hover:bg-[#22c55e]/20 transition-colors">
                    Get TailScale Auth Key →
                  </a>
                  <span className="text-xs text-[#71717a]">TailScale admin: login.tailscale.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
