import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {HELP} from '../constants/routes';

class Home extends Component {
  render() {
    console.log(this.props.history)
    return (
      <div>      <button onClick={() => this.props.history.push(HELP)}/>
      Welcome to the FreshWorks React Boilerplate! - Home Page</div>
    );
  }
}

export default withRouter(Home);
