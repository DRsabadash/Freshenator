import React, { Component } from 'react';

import AccountPrimaryCell from  './AccountPrimaryCell';
import AdminPrimaryCell from './AdminPrimaryCell';
import DashboardPrimaryCell from './DashboardPrimaryCell';
import HomePrimaryCell from './HomePrimaryCell';
import LoginPrimaryCell from './LoginPrimaryCell';
import NavbarPrimaryCell from './NavbarPrimaryCell';

class DockPrimaryCell extends Component {
  render() {
    const Primary = () => {
      switch (this.props.feature) {

        case 'login':
          return <LoginPrimaryCell/>;

        case 'accountDetails':
          return <AccountPrimaryCell/>;

        case 'navbar':
          return <NavbarPrimaryCell/>;

        case 'homePage':
          return <HomePrimaryCell/>;

        case 'adminPanel':
          return <AdminPrimaryCell/>;

        case 'dashboard':
          return <DashboardPrimaryCell/>;

        default:
          return <div/>
      }
    }
    
    return (
      <div>
        <Primary/>
      </div>
    )
  }
}

export default DockPrimaryCell;