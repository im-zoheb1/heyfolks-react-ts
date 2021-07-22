import React from 'react';
import { EntryHelper, EntryHelperText, EntryHelperButton } from './EntryHelper.elements';
import Logo from 'components/Logo';

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
