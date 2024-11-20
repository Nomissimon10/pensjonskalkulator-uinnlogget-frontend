import { NextRequest, NextResponse } from 'next/server'
import { requestAzureClientCredentialsToken } from '@navikt/oasis'

const generateBearerToken = async (): Promise<string> => {
  const clientCredentials = await requestAzureClientCredentialsToken(
    'api://dev-gcp.pensjonskalkulator.pensjonskalkulator-backend/.default'
  )

  if (clientCredentials.ok) {
    return clientCredentials.token
  } else {
    console.error('Failed to generate token: ', clientCredentials)
    throw new Error('Failed to generate token')
  }
}

export async function GET(req: NextRequest) {
  if (req.method !== 'GET') {
    return NextResponse.json({ message: 'Method not allowed' })
  }

  try {
    const token = await generateBearerToken()
    return NextResponse.json(token, {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch {
    return NextResponse.json({ error: 'failed' }, { status: 500 })
  }
}
