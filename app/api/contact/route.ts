import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const filePath = join(process.cwd(), 'data', 'messages.json')
    let messages: any[] = []

    if (existsSync(filePath)) {
      try {
        messages = JSON.parse(readFileSync(filePath, 'utf-8'))
      } catch {
        messages = []
      }
    }

    messages.push({ name, email, subject, message, receivedAt: new Date().toISOString() })
    writeFileSync(filePath, JSON.stringify(messages, null, 2))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
