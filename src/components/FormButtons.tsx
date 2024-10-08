import { ContextForm } from '@/common'
import { FormContext } from '@/contexts/context'
import { Button, HStack } from '@navikt/ds-react'
import React, { useContext } from 'react'

function FormButtons() {
  const context = useContext(FormContext) as ContextForm

  const { curStep, onStepChange, length, back } = context.formPageProps

  return (
    <HStack gap={'2'} marginBlock="2">
      <Button type="submit" variant="primary">
        {curStep === length! - 1 ? 'Send' : 'Neste'}
      </Button>

      {curStep !== 0 && (
        <Button type="button" variant="secondary" onClick={back}>
          Tilbake
        </Button>
      )}
    </HStack>
  )
}

export default FormButtons
