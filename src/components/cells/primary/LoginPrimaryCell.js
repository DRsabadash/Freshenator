import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { editFeature } from '../../../actionCreators/FeatureActionCreators';
import { STORE_FEATURES } from '../../../constants/reducerTypes';

const styles = theme => ({

})

class LoginPrimaryCell extends Component {
  state = {
    
  }
  
  render() {
    return (
      <div>
        Hallo
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  storeFeatures : state[STORE_FEATURES]
})

const mapDispatchToProps = {
  editFeature
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(LoginPrimaryCell);