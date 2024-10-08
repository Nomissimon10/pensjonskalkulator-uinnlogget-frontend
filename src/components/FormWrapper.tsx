import { FormContext } from '@/contexts/context'
import { VStack } from '@navikt/ds-react'
import React, { FormEvent, ReactNode } from 'react'

interface FormWrapperProps {
  children: ReactNode
  onSubmit: () => void
}

function FormWrapper({ children, onSubmit }: FormWrapperProps) {
  const context = useContext(FormContext)

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    context?.formPageProps.handleSubmit()
    onSubmit()
  }

  return (
    <VStack gap={'4'} paddingBlock={'3'}>
      <form onSubmit={handleOnSubmit}>{children}</form>
    </VStack>
  )
}

export default FormWrapper
