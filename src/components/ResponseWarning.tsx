import { FormContext } from '@/contexts/context'
import { Alert, BodyLong, Box, Button, Heading, VStack } from '@navikt/ds-react'
import React, { useContext } from 'react'

function ResponseWarning() {
  const { formPageProps } = useContext(FormContext)

  return (
    <Alert variant="warning">
      <Heading spacing size="small" level="3">
        Viktig informasjon
      </Heading>
      <VStack gap="3">
        <BodyLong spacing>
          Det ser ikke ut som du har fyllt inn riktig informasjon. Vennligst gå
          igjennom på nytt
        </BodyLong>
        <Box>
          <Button
            size="medium"
            variant="secondary-neutral"
            onClick={() => formPageProps.goTo(0)}
          >
            Endre
          </Button>
        </Box>
      </VStack>
    </Alert>
  )
}

export default ResponseWarning
