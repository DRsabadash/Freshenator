import React, { Component } from 'react';

import AccountBottomCell from  './AccountBottomCell';
import AdminBottomCell from './AdminBottomCell';
import DashboardBottomCell from './DashboardBottomCell';
import HomeBottomCell from './HomeBottomCell';
import LoginBottomCell from './LoginBottomCell';
import NavbarBottomCell from './NavbarBottomCell';

class DockBottomCell extends Component {
  render() {
    const Bottom = () => {
      switch (this.props.feature) {

        case 'login':
          return <LoginBottomCell />;

        case 'accountDetails':
          return <AccountBottomCell />;

        case 'navbar':
          return <NavbarBottomCell />;

        case 'homePage':
          return <HomeBottomCell />;

        case 'adminPanel':
          return <AdminBottomCell />;

        case 'dashboard':
          return <DashboardBottomCell />;

        default:
          return <div/>
      }
    }
    
    return (
      <div>
        <Bottom/>
      </div>
    )
  }
}

export default DockBottomCell;