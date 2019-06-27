import React, { Component } from 'react';

import AccountSecondaryCell from  './AccountSecondaryCell';
import AdminSecondaryCell from './AdminSecondaryCell';
import DashboardSecondaryCell from './DashboardSecondaryCell';
import HomeSecondaryCell from './HomeSecondaryCell';
import LoginSecondaryCell from './LoginSecondaryCell';
import NavbarSecondaryCell from './NavbarSecondaryCell';

class DockSecondaryCell extends Component {
  render() {
    const Secondary = () => {
      switch (this.props.feature) {

        case 'login':
          return <LoginSecondaryCell/>;

        case 'accountDetails':
          return <AccountSecondaryCell/>;

        case 'navbar':
          return <NavbarSecondaryCell/>;

        case 'homePage':
          return <HomeSecondaryCell/>;

        case 'adminPanel':
          return <AdminSecondaryCell/>;

        case 'dashboard':
          return <DashboardSecondaryCell/>;

        default:
          return <div/>
      }
    }
    
    return (
      <div>
        <Secondary/>
      </div>
    )
  }
}

export default DockSecondaryCell;