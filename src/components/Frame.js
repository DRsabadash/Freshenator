import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Frame extends Component {
  render() {
    console.log(this.props.history)
    return (
      <div className="Frame">

      </div>
    );
  }
}

export default withRouter(Frame);
