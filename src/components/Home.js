import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../assets/images/FreshworksLogoAlpha.png';
import logo from '../assets/images/FreshworksLogoAlpha.png'


class Home extends Component {
  render() {
    console.log(this.props.history)
    return (
      <div>
        <img src={logo} className="Logo"></img>
      </div>
    );
  }
}

export default withRouter(Home);