import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const data = await request.json()

        const { name, email, location, budget, vision } = data

        // Validate required fields
        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required' },
                { status: 400 }
            )
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            )
        }

        // TODO: Integrate with your preferred backend
        // Options:
        // - Send email via Resend/SendGrid/Nodemailer
        // - Save to Notion database
        // - Push to CRM (HubSpot, Airtable)
        // - Send Telegram notification

        // Simulate email sending
        console.log(`[Email Service] Sending inquiry to ${process.env.CONTACT_EMAIL || 'hello@terraform.design'}`)
        console.log(`[Email Service] From: ${name} <${email}>`)
        console.log(`[Email Service] Subject: New Inquiry - ${budget}`)
        console.log(`[Email Service] Body:`, {
            location,
            vision,
            timestamp: new Date().toISOString(),
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
