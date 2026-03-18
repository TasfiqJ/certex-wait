import { NextRequest, NextResponse } from "next/server"

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email" },
        { status: 400 }
      )
    }

    // If no Google Script URL configured, just accept it (dev mode)
    if (!GOOGLE_SCRIPT_URL) {
      console.log(`[WAITLIST] New signup: ${email}`)
      return NextResponse.json({
        success: true,
        message: "You're on the list!",
      })
    }

    // Forward to Google Apps Script
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })

    const data = await res.json()

    return NextResponse.json({
      success: true,
      message: data.message || "You're on the list!",
    })
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Try again." },
      { status: 500 }
    )
  }
}
