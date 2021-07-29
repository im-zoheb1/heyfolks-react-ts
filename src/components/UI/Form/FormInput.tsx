import React from 'react';

import * as Styled from './Form.element';

interface FormInputProps {
  type?: string;
  placeholder?: string;
  required?: boolean;
  label?: string;
  size?: 'sm' | 'md' | 'lg'
}

const TheFormInput: React.FC<FormInputProps> = (props) => {
  return (
    <Styled.FormInputHolder>
      <Styled.FormInput
        type={props.type || 'text'}
        placeholder={props.placeholder}
        required={props.required}
        inputSize={props.size || 'lg'}
      ></Styled.FormInput>
      <Styled.FormInputBorder inputSize={props.size || 'lg'}></Styled.FormInputBorder>
      <Styled.FormInputLabel>{props.label}</Styled.FormInputLabel>
    </Styled.FormInputHolder>
  );
};

export default TheFormInput;
