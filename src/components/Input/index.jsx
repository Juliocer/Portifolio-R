import React from 'react'

import { InputContainer, InputText, ErrorText} from './styles';
import { Controller } from 'react-hook-form';

const Input = ({name, ...rest}) => {
  return (
    <>
      <InputContainer>
        <InputText {...rest} />
      </InputContainer>
    </>
  )
}

export { Input };

