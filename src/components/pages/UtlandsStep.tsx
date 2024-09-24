import React, {
  forwardRef,
  Ref,
  useContext,
  useImperativeHandle,
  useState,
} from "react";
import { Radio, RadioGroup, ReadMore, TextField, VStack } from "@navikt/ds-react";
import FormWrapper from "../FormWrapper";
import { ContextForm, FormValues, StepRef } from "@/common";
import { FormContext } from "@/contexts/context";
import Substep from "../Substep";
import useErrorHandling from '../../helpers/useErrorHandling'

const UtlandsStep = forwardRef<StepRef>((props, ref) => {
  const { states, setState } = useContext(FormContext) as ContextForm;
  const [errorFields, { validateFields, clearError }] = useErrorHandling(states)

  const handleFieldChange = (field: keyof FormValues, value: number | null) => {
    setState((prev: FormValues) => ({
      ...prev,
      [field]: value,
    }));
    clearError(field);
  }

  useImperativeHandle(ref, () => ({
    onSubmit() {
      const hasErrors = validateFields("UtlandsStep");
      if(!hasErrors){
        if(states.boddIUtland === "nei") states.utenlandsAntallAar = 0;
        return true;
      }   
      return false;
    },
  }));

  return (
    <>
      <FormWrapper>
        <h2>Utland</h2>
        <div>
          <RadioGroup
            legend="Har du bodd eller arbeidet utenfor Norge?"
            value={states.boddIUtland}
            onChange={(it) => handleFieldChange('boddIUtland', it)}
            error={errorFields.boddIUtland}
          >
            <Radio value={"ja"}>Ja</Radio>
            <Radio value={"nei"}>Nei</Radio>
          </RadioGroup>
          <ReadMore header="Om opphold utenfor Norge">
            Hvis du har bodd eller arbeidet utenfor Norge, kan det påvirke
            pensjonen din. Hvis du har bodd i utlandet, kan du ha rett til
            pensjon fra det landet du har bodd i.
          </ReadMore>
          {states.boddIUtland === "ja" && (
            <Substep>
              <TextField
                onChange={(it) => handleFieldChange('utenlandsAntallAar', it.target.value === '' ? 0 : parseInt(it.target.value, 10))}
                type='number'
                inputMode='numeric'
                label="Hvor mange år har du bodd i utlandet?"
                value={states.utenlandsAntallAar === 0 ? "" : states.utenlandsAntallAar}
                error={errorFields.utenlandsAntallAar}
              ></TextField>
            </Substep>
          )}
        </div>
      </FormWrapper>
    </>
  );
});

UtlandsStep.displayName = "UtlandsStep";
export default UtlandsStep;
