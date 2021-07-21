import React from 'react';

import Sidenav from 'components/Navbar/Sidenav';

interface Props {
  children: React.ReactNode;
}

const Dashboard = ({ children }: Props) => {
  return (
    <div className="viewport">
      <div className="dashboard">
        <Sidenav />
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
