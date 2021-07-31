import React from 'react';

import Sidenav from 'components/Navbar/Sidenav';
import { Viewport } from 'components/Utilities/Utils';
import * as Styled from './Dashboard.element';

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
      <Styled.Dashboard>
        <Sidenav user={user} sidenavLinks={sidenavLinks} />
        <Styled.DashboardView>{children}</Styled.DashboardView>
      </Styled.Dashboard>
    </Viewport>
  );
};

export default TheDashboard;
