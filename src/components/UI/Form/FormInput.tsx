import React from 'react';

import { FormInputHolder, FormInput, FormInputBorder, FormInputLabel } from './Form.element';

interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  label: string;
}

const TheFormInput: React.FC<FormInputProps> = (props) => {
  return (
    <FormInputHolder>
      <FormInput
        type={props.type || 'text'}
        placeholder={props.placeholder}
        required={props.required}
      ></FormInput>
      <FormInputBorder></FormInputBorder>
      <FormInputLabel>{props.label}</FormInputLabel>
    </FormInputHolder>
  );
};

export default TheFormInput;
