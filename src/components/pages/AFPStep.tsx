import React, { forwardRef, useContext, useImperativeHandle } from 'react'
import FormWrapper from '../FormWrapper'
import { Radio, RadioGroup, ReadMore } from '@navikt/ds-react'
import { FormContext } from '@/contexts/context'
import { ContextForm, StepRef } from '@/common'
import addState from '@/helpers/addState'

const AFPStep = forwardRef<StepRef>((props, ref) => {
  const { states, setState } = useContext(FormContext) as ContextForm
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null)

  useImperativeHandle(ref, () => ({
    onSubmit() {
      if (!states.afp?.state) {
        setErrorMsg('Du må velge et alternativ')
        return false
      }
      return true
    }
  })) 

  return (
    <FormWrapper>
      <h2>AFP (avtalefestet pensjon)</h2>
      <p>
        For å få AFP må arbeidsgiveren din ha en slik avtale og du må
        kvalifisere til å få den.
      </p>
      <ReadMore header='Om AFP i offentlig sektor'>
        AFP i offentlig sektor: er en livsvarig pensjon kan tas ut sammen med
        arbeid kan tas ut sammen med alderspensjon fra folketrygden (NAV) og
        tjenestepensjon De fleste statlige, fylkeskommunale og kommunale
        arbeidsgivere har avtale om livsvarig AFP. Sjekk hos arbeidsgiveren din
        hva som gjelder for deg.
      </ReadMore>
      <RadioGroup
        legend=''
        defaultValue={states.afp?.state || undefined}
        onChange={(val) => addState(val, setState, 'afp')}
        error={errorMsg}
      >
        <Radio value={'ja'}>Ja</Radio>
        <Radio value={'nei'}>Nei</Radio>
      </RadioGroup>
    </FormWrapper>
  )
})

export default AFPStep
