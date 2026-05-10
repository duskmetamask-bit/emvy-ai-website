import { NextRequest, NextResponse } from 'next/server'

// POST /api/audit-questionnaire
// Receives discovery form submission and logs it.
// TODO: wire up to your preferred storage / notification backend.
// Options: Resend (email), Supabase (DB), Airtable, n8n webhook, etc.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Basic validation
    const required = ['contactEmail', 'contactName', 'businessName']
    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === '') {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    if (!body.contactEmail.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // ── Log the submission ────────────────────────────────
    const timestamp = new Date().toISOString()
    console.log(`\n${'═'.repeat(60)}`)
    console.log(`[AUDIT QUESTIONNAIRE] Submission at ${timestamp}`)
    console.log(`${'═'.repeat(60)}`)
    console.log(`Business:      ${body.businessName} (${body.industry})`)
    console.log(`Contact:       ${body.contactName} <${body.contactEmail}>`)
    console.log(`Team size:    ${body.teamSize || '—'} | Location: ${body.location || '—'}`)
    console.log(`\nTech stack:`)
    console.log(`  CRM:         ${body.crm || '—'}`)
    console.log(`  Accounting:  ${body.accounting || '—'}`)
    console.log(`  PM tools:    ${body.projectManagement || '—'}`)
    console.log(`  Other:       ${body.toolsPlatforms || '—'}`)
    console.log(`\nAI adoption:`)
    console.log(`  Tried:       ${body.aiTried || '—'}`)
    console.log(`  Worked:      ${body.aiSuccess || '—'}`)
    console.log(`  Failed:      ${body.aiFailed || '—'}`)
    console.log(`  Goals:       ${body.aiGoals || '—'}`)
    console.log(`\nPain points:   ${body.painPoints?.join(', ') || '—'}`)
    console.log(`  Other:       ${body.painOther || '—'}`)
    console.log(`\nAudit goals:   ${body.auditGoals?.join(', ') || '—'}`)
    console.log(`  Other:       ${body.auditGoalsOther || '—'}`)
    console.log(`  Biggest win: ${body.biggestWin || '—'}`)
    console.log(`\nBudget:        ${body.budget || '—'}`)
    console.log(`Timeline:      ${body.timeline || '—'}`)
    console.log(`\nDecision makers: ${body.decisionMakers || '—'}`)
    console.log(`Blockers:        ${body.blocker || '—'}`)
    console.log(`\nAnything else:   ${body.anythingElse || '—'}`)
    console.log(`${'═'.repeat(60)}\n`)

    // ── TODO: wire up your preferred notification channel ─
    // e.g. Resend email to Dusk:
    //   await resend.emails.send({ from: 'audit@emvyai.com', to: 'dusk@emvyai.com', ... })
    //
    // e.g. Supabase insert:
    //   await supabase.from('audit_questionnaires').insert(body)
    //
    // e.g. Airtable:
    //   await fetch('https://api.airtable.com/v0/appXXXX/Table', { ... })
    //
    // e.g. n8n webhook:
    //   await fetch('https://your-n8n.app/webhook/audit-questionnaire', { ... })

    return NextResponse.json({ ok: true, timestamp }, { status: 200 })

  } catch (err) {
    console.error('[audit-questionnaire API error]', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}