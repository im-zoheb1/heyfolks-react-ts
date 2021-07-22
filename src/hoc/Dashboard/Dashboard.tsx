import React from 'react';

import Sidenav from 'components/Navbar/Sidenav';
import { Viewport } from 'components/Utilities/Utils';

interface Props {
  children: React.ReactNode;
}

const Dashboard = ({ children }: Props) => {
  return (
    <Viewport>
      <div className="dashboard">
        <Sidenav />
        {children}
      </div>
    </Viewport>
  );
};

export default Dashboard;
