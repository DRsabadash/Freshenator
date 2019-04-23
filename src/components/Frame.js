import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import frame from '../assets/images/Frame.png';
import closeButton from '../assets/images/CloseButton.png';


class Frame extends Component {
  render() {
    console.log(this.props.history)
    return (
      <div className="Frame" style={{backgroundImage: `url(${frame})`}}>
        <button className="CloseButton" style={{backgroundImage: `url(${closeButton})`}}/>
      </div>
    );
  }
}

export default withRouter(Frame);
