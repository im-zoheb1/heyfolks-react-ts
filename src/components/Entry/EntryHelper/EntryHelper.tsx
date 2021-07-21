import React from 'react';

import Logo from 'components/Utilities/Logo';

interface Props {
  text: String;
  children: React.ReactNode;
}

const EntryHelper = ({ text, children }: Props) => {
  return (
    <div className="entry-helper">
      <div className="entry-helper__logo">
        <Logo />
      </div>
      <div className="entry-helper--text text--big">{text}</div>
      <div className="entry-helper--btn">{children}</div>
    </div>
  );
};

export default EntryHelper;
