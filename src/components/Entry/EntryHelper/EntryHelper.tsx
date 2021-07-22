import React from 'react';
import Logo from 'components/Logo';
import { EntryHelper, EntryHelperText, EntryHelperButton } from './EntryHelper.elements';

interface Props {
  text: String;
  children: React.ReactNode;
}

const TheEntryHelper = ({ text, children }: Props) => {
  return (
    <EntryHelper>
      <Logo></Logo>
      <EntryHelperText>{text}</EntryHelperText>
      <EntryHelperButton>{children}</EntryHelperButton>
    </EntryHelper>
  );
};

export default TheEntryHelper;
