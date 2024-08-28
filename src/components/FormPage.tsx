'use client'

import { ContextForm, FormValues, StepRef } from '@/common'
import AFPStep from '@/components/pages/AFPStep'
import AlderStep from '@/components/pages/AlderStep'
import InntektStep from '@/components/pages/InntektStep'
import UtlandsStep from './pages/UtlandsStep'
import StepBox from '@/components/StepBox'
import { FormContext } from '@/contexts/context'
import useMultiStepForm from '@/helpers/useMultiStepForm'
import {
  Box,
  Button,
  FormProgress,
  HStack,
  ProgressBar
} from '@navikt/ds-react'
import Link from 'next/link'

import React, { cloneElement, FormEvent, useRef, useState } from 'react'
import EktefelleStep from './pages/EktefelleStep'
/*
simuleringType - kan være “ALDERSPENSJON” eller “ALDERSPENSJON_MED_AFP_PRIVAT” (det velges av brukeren).
sivilstand - kan være “UGIFT”, “GIFT” eller “SAMBOER”.
epsHarInntektOver2G - ektefelle/partner/samboer har inntekt på mer enn 2 ganger folketrygdens grunnbeløp (G).
epsHarPensjon - ektefelle/partner/samboer har startet uttak av pensjon.
gradertUttak - brukes bare om brukeren tar ut mindre enn 100 % pensjon (vil være null ellers).
heltUttak - brukes alltid. Det er når brukeren starter uttak av 100 % pensjon.
uttakAlder - er brukerens alder når uttaket startes. Alder angis i antall fylte år og antall fylte måneder (0–11).
aarligInntektVsaPensjonBeloep - er brukerens årlige inntekt ved siden av (Vsa) pensjon. Det er et kronebeløp.
sluttAlder - er brukerens alder (år og måneder) når inntekten slutter. */

const initialFormState: FormValues = {
  alder: '',
  inntekt: '',
  aarYrkesaktiv: '',
  alderTaUt: '',
  uttaksgrad: '',
  forventetInntektEtterUttak: '',
  forventetInntektEtterHeleUttak: '',
  utland: '',
  boddIUtland: '',
  AntallAarBoddINorge: '',
  rettTilAfp: '',
  sivilstand: 'UGIFT',
  tredjepersonStorreEnn2G: '',
  tredjepersonMottarPensjon: ''
}

interface FormPageProps {
  grunnbelop: number
}

function FormPage({ grunnbelop }: FormPageProps) {
  const [formState, setFormSate] = useState<FormValues>(initialFormState)
  const childRef = useRef<StepRef>(null) // Ref to access child component method

  const pages = [
    <AlderStep key='alder' />,
    <UtlandsStep key='utland' />,
    <InntektStep key='inntekt' />,
    <EktefelleStep grunnbelop={grunnbelop} key='ektefelle' />,
    <AFPStep grunnbelop={grunnbelop} key='afp' />,
  ]

  const { curStep, step, next, back, goTo } = useMultiStepForm(pages)

  const handleSubmit = /* async */ (e: FormEvent) => {
    e.preventDefault()
    if (curStep == pages.length - 1) {
      /* try {
        const response = await axios.post(
          'https://pensjonskalkulator-backend.intern.dev.nav.no/simulerAnonymAlderspensjonV1',
          formState
        );
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
      } */
      return
    }
    if (childRef.current?.onSubmit()) next()
  }

  return (
    <Box padding={{ lg: '10', sm: '5' }} width={'full'} background='bg-default'>
      <Box
        maxWidth={'40rem'}
        width={'100%'}
        marginInline={'auto'}
        borderColor='border-default'
        // borderWidth='1'
        padding={'4'}
        borderRadius={'large'}
      >
        <div className='mb-3 text-left'>
          <h2>Pensjonskalkulator</h2>
        </div>
        <Box width={'100%'} padding={'4'} background='bg-default'>
          <FormProgress
            totalSteps={pages.length}
            activeStep={curStep + 1}
            onStepChange={(newStep) => goTo(newStep - 1)}
          >
            <FormProgress.Step>Alder</FormProgress.Step>
            <FormProgress.Step>Utland</FormProgress.Step>
            <FormProgress.Step>Inntekt</FormProgress.Step>
            <FormProgress.Step>Ektefelle</FormProgress.Step>
            <FormProgress.Step>AFP</FormProgress.Step>
          </FormProgress>
          <form onSubmit={handleSubmit}>
            <FormContext.Provider
              value={{ setState: setFormSate, states: formState }}
            >
              {cloneElement(step, { ref: childRef })}
            </FormContext.Provider>
            <HStack gap={'2'} marginBlock='2'>
              <Button type='submit' variant='primary'>
                {curStep === pages.length - 1 ? 'Send' : 'Neste'}
              </Button>
              {curStep !== 0 && (
                <Button type='button' onClick={back} variant='tertiary'>
                  Forrige
                </Button>
              )}
            </HStack>
          </form>
          <div className='mt-6'>
            <Link href='https://staging.ekstern.dev.nav.no/pensjon/kalkulator/start#:~:text=Personopplysninger%20som%20brukes%20i%20pensjonskalkulator'>
              Personopplysninger som brukes i pensjonskalkulator
            </Link>
          </div>
        </Box>
      </Box>
      {/* </div> */}
    </Box>
  )
}

export default FormPage
