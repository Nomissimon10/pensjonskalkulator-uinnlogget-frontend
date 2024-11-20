import { requestAzureClientCredentialsToken } from '@navikt/oasis'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  if (req.method !== 'GET') {
    return NextResponse.json({ message: 'Method not allowed' })
  }

  const clientCredentials = await requestAzureClientCredentialsToken(
    'api://dev-gcp.pensjonskalkulator.pensjonskalkulator-backend/.default'
  )

  if (clientCredentials.ok) {
    return NextResponse.json(clientCredentials.token, {
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
