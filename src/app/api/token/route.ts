import { NextRequest, NextResponse } from 'next/server'
import { generateBearerToken } from '../simuler/route'

export async function GET(req: NextRequest) {
  if (req.method !== 'GET') {
    return NextResponse.json({ message: 'Method not allowed' })
  }

  const token = await generateBearerToken()

  return NextResponse.json(token, {
    headers: { 'Content-Type': 'application/json' },
  })
}
