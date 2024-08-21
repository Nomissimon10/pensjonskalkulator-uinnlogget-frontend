import React, {
  forwardRef,
  ReactElement,
  Suspense,
  use,
  useContext,
  useEffect,
  useImperativeHandle,
  useState
} from 'react'
import FormWrapper from '../FormWrapper'
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  Select,
  TextField
} from '@navikt/ds-react'
import { FormContext } from '@/contexts/context'
import { ContextForm, FormValues, StepRef } from '@/common'
import { PlusCircleIcon } from '@navikt/aksel-icons'

import { getGrunnbelop } from '@/functions/functions'
import Substep from '../Substep'

const InntektStep = forwardRef<StepRef>((props, ref) => {
  const { states, setState } = useContext(FormContext) as ContextForm
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [inputArray, setInputArray] = useState<ReactElement[]>([])
  const [uttaksgrad, setUttaksgrad] = useState<number>(0)

  const addInputField = () => {
    return (
      <TextField
        onChange={(it) =>
          setState((prev: FormValues) => ({
            ...prev,
            inntekt: it.target.value
          }))
        }
        label='Inntekt'
        value={states.inntekt || ''}
        error={errorMsg}
        key={inputArray.length}
      />
    )
  }

  useImperativeHandle(ref, () => ({
    onSubmit() {
      if (!states.inntekt) {
        setErrorMsg('Du må fylle ut inntekt')
        return false
      }

      // Must not be negative
      if (parseInt(states.inntekt) < 0) {
        setErrorMsg('Inntekt kan ikke være negativ')
        return false
      }

      return true
    }
  }))

  return (
    <FormWrapper>
      <h2>Hva er din forventet inntekt?</h2>
      <div className='w-30'>
        <TextField
          onChange={(it) =>
            setState((prev: FormValues) => ({
              ...prev,
              inntekt: it.target.value
            }))
          }
          label='Inntekt'
          value={states.inntekt || ''}
          error={errorMsg}
        />
        {inputArray.map((input) => input)}
        <Button
          onClick={() => setInputArray((prev) => [...prev, addInputField()])}
          icon={<PlusCircleIcon />}
          variant='tertiary'
        >
          Legg til
        </Button>
        <Substep>
          <Select
            style={{ width: '5rem' }}
            label={
              'Hvor mange år forventer du å ha inntekt etter uttak av hel pensjon?'
            }
          >
            {Array.from({ length: 13 }, (_, i) => (
              <option value={i + 1} key={i}>
                {i + 1} år
              </option>
            ))}
            <option value={'livsvarig'}>livsvarig</option>
          </Select>
        </Substep>
        <Substep>
          <Select
            defaultValue={undefined}
            style={{ width: '5rem' }}
            label={'Hvilken uttaksgrad ønsker du?'}
            onChange={(it) => setUttaksgrad(parseInt(it.target.value))}
          >
            <option value={'0'}>----</option>
            <option value={'20'}>20%</option>
            <option value={'40'}>40%</option>
            <option value={'50'}>50%</option>
            <option value={'60'}>60%</option>
            <option value={'80'}>80%</option>
            <option value={'100'}>100%</option>
          </Select>
        </Substep>
        {uttaksgrad != 0 && (
          <Substep>
            <TextField
              // onChange={(it) =>
              //   setState((prev: FormValues) => ({
              //     ...prev,
              //     inntekt: it.target.value
              //   }))
              // }
              style={{ width: '10rem' }}
              label={`Hvor mange år forventer du å ha inntekt etter uttak av ${uttaksgrad}% pensjon?`}
            />
          </Substep>
        )}
      </div>
    </FormWrapper>
  )
})

InntektStep.displayName = 'InntektStep'
export default InntektStep
