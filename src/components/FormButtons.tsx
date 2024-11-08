import { FormContext } from '@/contexts/context'
import { Button, HStack } from '@navikt/ds-react'
import React, { useContext } from 'react'

function FormButtons() {
  const context = useContext(FormContext)

  const { curStep, length, goBack, goTo } = context.formPageProps

  return (
    <HStack gap={'2'} marginBlock="2">
      <Button type="submit" variant="primary">
        {curStep === length - 1 ? 'Send' : 'Neste'}
      </Button>

      {curStep !== 0 && (
        <Button type="button" variant="secondary" onClick={goBack}>
          Tilbake
        </Button>
      )}
      <Button
        type="button"
        variant="secondary"
        onClick={() => {
          goTo(4)
        }}
      >
        Til siste
      </Button>
    </HStack>
  )
}

export default FormButtons
