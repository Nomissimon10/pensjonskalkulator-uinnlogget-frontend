import type { components } from './types/schema.d.ts'

export type SchemaFormValues = components['schemas']['AnonymSimuleringSpecV1']

export type State = SchemaFormValues & {
  boddIUtland: string // fjernes fra ApiPayloaden
  inntektVsaHelPensjon: string // fjernes fra ApiPayloaden
}

export type Simuleringsresultat =
  components['schemas']['AnonymSimuleringResultV1']

export type AnonymSimuleringError =
  components['schemas']['AnonymSimuleringErrorV1']

export type StepName =
  | 'AlderStep'
  | 'UtlandsStep'
  | 'InntektStep'
  | 'EktefelleStep'
  | 'AFPStep'

export type ErrorFields = {
  foedselAar?: string
  inntektOver1GAntallAar?: string
  boddIUtland?: string
  utenlandsAntallAar?: string
  aarligInntektFoerUttakBeloep?: string
  uttaksgrad?: string
  gradertInntekt?: string
  gradertAar?: string
  gradertMaaneder?: string
  heltUttakAar?: string
  heltUttakMaaneder?: string
  helPensjonInntekt?: string
  heltUttakSluttAlderMaaneder?: string
  inntektVsaHelPensjon?: string
  sivilstand?: string
  epsHarInntektOver2G?: string
  epsHarPensjon?: string
  simuleringType?: string
}

export interface ContextForm {
  state: State
  setState: Dispatch<React.SetStateAction<FormValues>>
  formPageProps: NavigationProps
}

export interface StepRef {
  onSubmit: () => void
}

export interface NavigationProps {
  curStep: number
  length: number
  goBack: () => void
  onStepChange: (step: number) => void
  handleSubmit?: () => void
  goToNext: () => void
}
