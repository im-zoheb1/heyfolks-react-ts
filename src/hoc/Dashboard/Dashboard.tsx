import React from 'react';

import Sidenav from 'components/Navbar/Sidenav';
import { Viewport } from 'components/Utilities/Utils';
import { Dashboard } from './Dashboard.element';

import ProfileImage from 'assets/images/user.png';
import sidenavLinks from 'data/navbarData';

interface Props {
  children: React.ReactNode;
}

const TheDashboard = ({ children }: Props) => {
  interface User {
    img: string;
    fullname: string;
    username: string;
  }

  const user: User = {
    img: ProfileImage,
    fullname: 'Zohaib Khan',
    username: 'im_zoheb',
  };

  return (
    <Viewport>
      <Dashboard>
        <Sidenav user={user} sidenavLinks={sidenavLinks} />
        {children}
      </Dashboard>
    </Viewport>
  );
};

export default TheDashboard;
