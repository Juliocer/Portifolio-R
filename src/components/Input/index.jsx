import React from 'react'
import { InputContainer, InputText, TextareaText } from './styles'; // Importe TextareaText

const Input = ({name, isTextarea, ...rest}) => {
  if (isTextarea) {
     return (
        <InputContainer {...rest}>
          <TextareaText name={name} {...rest} />
        </InputContainer>
     )
  }
  return (
    <>
      <InputContainer {...rest}> {/* Passe rest para InputContainer também, para o variant */}
        <InputText name={name} {...rest} />
      </InputContainer>
    </>
  )
}
export { Input };