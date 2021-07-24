import React from 'react';

import { FormGroup } from './Form.element';

interface FormGroupProps {
  children: React.ReactNode;
}

const TheFormGroup: React.FC<FormGroupProps> = ({ children }) => {
  return <FormGroup>{children}</FormGroup>;
};

export default TheFormGroup;
