import React from 'react';

import { Form, FormTitle } from './Form.element';

interface FormProps {
  children: React.ReactNode;
  title?: string;
  onSubmit(): void;
}

const TheForm: React.FC<FormProps> = ({ title, children, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      {title && <FormTitle>{title}</FormTitle>}
      {children}
    </Form>
  );
};

export default TheForm;
