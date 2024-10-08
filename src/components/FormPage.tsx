'use client'

import { FormValueResult, FormValues } from '@/common'
import AFPStep from '@/components/pages/AFPStep'
import AlderStep from '@/components/pages/AlderStep'
import InntektStep from '@/components/pages/InntektStep'
import UtlandsStep from './pages/UtlandsStep'
import { FormContext } from '@/contexts/context'
import useMultiStepForm from '@/helpers/useMultiStepForm'

import React, { useState } from 'react'
import EktefelleStep from './pages/EktefelleStep'
import submitForm from '@/functions/submitForm'
import Beregn from './pages/Beregn'
import LoadingComponent from './LoadingComponent'
import FormContainerComponent from './FormContainerComponent'

export const initialFormState: FormValues = {
  simuleringType: undefined,
  foedselAar: 0,
  sivilstand: 'UGIFT',
  epsHarInntektOver2G: undefined,
  epsHarPensjon: undefined,
  boddIUtland: '', // fjernes fra ApiPayloaded
  inntektVsaHelPensjon: '', // fjernes fra ApiPayloaded
  utenlandsAntallAar: 0,
  inntektOver1GAntallAar: 0, //Spør espen om dette. Hva er denne verdien og hvilket intervall kan den være mellom. Fiks useErrorHandling.ts i henhold til dette.
  aarligInntektFoerUttakBeloep: 0,
  gradertUttak: {
    grad: 0,
    uttakAlder: {
      aar: 0,
      maaneder: -1,
    },
    aarligInntektVsaPensjonBeloep: 0,
  },
  heltUttak: {
    uttakAlder: {
      aar: 0,
      maaneder: -1,
    },
    aarligInntektVsaPensjon: {
      beloep: 0,
      sluttAlder: {
        aar: 0,
        maaneder: -1,
      },
    },
  },
}

interface FormPageProps {
  grunnbelop: number
}

interface Pages {
  [key: string]: JSX.Element
}

function FormPage({ grunnbelop }: FormPageProps) {
  const [formState, setFormState] = useState<FormValues>(initialFormState)
  const [loading, setLoading] = useState(false)
  const [beregnResult, setBeregnResult] = useState<FormValueResult>()
  const [showBeregnPage, setShowBeregnPage] = useState(false)

  const pagesDict: Pages = {
    alder: <AlderStep key="alder" />,
    utland: <UtlandsStep key="utland" />,
    inntekt: <InntektStep key="inntekt" />,
    ektefelle: <EktefelleStep grunnbelop={grunnbelop} key="ektefelle" />,
    afp: <AFPStep key="afp" />,
  }
  const pagesNames = Object.keys(pagesDict)

  const { curStep, step, next, back, goTo } = useMultiStepForm(pagesDict)
  const length = pagesNames.length

  const handleSubmit = async () => {
    if (curStep === length - 1) {
      setLoading(true)
      try {
        const resultData = await submitForm(formState)
        setBeregnResult(JSON.parse(resultData))
        console.log(resultData)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
        setShowBeregnPage(true)
      }
    }
  }

  return (
    <FormContext.Provider
      value={{
        setState: setFormState,
        states: formState,
        formPageProps: {
          curStep,
          length,
          back,
          onStepChange: goTo,
          handleSubmit,
          next,
        },
      }}
    >
      {showBeregnPage && beregnResult ? (
        <Beregn beregnResult={beregnResult} />
      ) : (
        <>
          {loading ? (
            <LoadingComponent />
          ) : (
            <FormContainerComponent
              totalSteps={length}
              activeStep={curStep + 1}
              back={back}
              onStepChange={(i) => goTo(i)}
              handleSubmit={handleSubmit}
              step={step}
              curStep={curStep}
              length={length}
            />
          )}
        </>
      )}
    </FormContext.Provider>
  )
}

export default FormPage
