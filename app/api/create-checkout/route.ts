import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

export async function POST(request: Request) {
  try {
    const { name, email, company } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email required' }, { status: 400 })
    }

    // TODO: Wire up Stripe
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    // const session = await stripe.checkout.sessions.create({ ... })
    // return NextResponse.json({ url: session.url })

    // Placeholder: save lead and return a message
    const dataDir = join(process.cwd(), 'data')
    mkdirSync(dataDir, { recursive: true })
    const filePath = join(dataDir, 'checkout-leads.json')

    let leads: any[] = []
    if (existsSync(filePath)) {
      try { leads = JSON.parse(readFileSync(filePath, 'utf-8')) } catch { leads = [] }
    }

    leads.push({ name, email, company, product: 'AI Audit $1,500', status: 'checkout_pending', createdAt: new Date().toISOString() })
    writeFileSync(filePath, JSON.stringify(leads, null, 2))

    return NextResponse.json({
      error: 'Stripe not configured yet. Email info@emvyai.com to pay directly.',
    }, { status: 501 })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
