import { State } from '@/common'

const submitForm = async (formstate: State) => {
  const {
    boddIUtland: _boddIUtland,
    inntektVsaHelPensjon: _inntektVsaHelPensjon,
    ...apiPayload
  } = formstate
  console.log('Api payload', apiPayload)

  const response = await fetch('/pensjon/kalkulator-uinnlogget/api/simuler', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(apiPayload),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw {
      message: errorData.message || 'Failed to submit form',
      status: response.status,
    }
  }

  return response.json()
}

export default submitForm
