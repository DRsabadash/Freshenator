import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Dock from './Dock';

const styles = ({
  button: {
  },
});

class Dashboard extends Component {
  render() {

    const { classes } = this.props;
    return (
      <div className="Dashboard" >
        <div style={{position: 'absolute',
    backgroundColor: 'green',
    height: '100px',
    width: '250px',
    top: '50%',
    left: '-10%',
    zIndex: '9999',
    }}/>
        <Dock/>
      </div>
    );
  }
}

export default compose(
  withRouter,
)(Dashboard);
