import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { editFeature } from '../../../actionCreators/FeatureActionCreators';
import { STORE_FEATURES } from '../../../constants/reducerTypes';
import makeGetFeatureSettings from '../../../selectors/featureSettingsSelector';
import styles from '../../../styles/cellStyles';

class AdminBottomCell extends Component {

  handleChange = (setting, value) => {
    this.props.editFeature({feature: 'navbar', setting, value})
  }
  
  render() {
    const { classes, featureSettings } = this.props;
    return (
      <div>
      </div>
    )
  }
}

const makeMapStateToProps = () => {
  const getFeatureSettings = makeGetFeatureSettings()
  const mapStateToProps = (state) => ({
    featureSettings: getFeatureSettings(state[STORE_FEATURES], 'navbar')
  })
  return mapStateToProps
}

const mapDispatchToProps = {
  editFeature
}

export default compose(
  connect(makeMapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(AdminBottomCell);