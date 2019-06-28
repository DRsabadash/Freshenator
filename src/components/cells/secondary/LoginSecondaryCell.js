import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { editFeature } from '../../../actionCreators/FeatureActionCreators';
import { STORE_FEATURES } from '../../../constants/reducerTypes';
import makeGetFeatureSettings from '../../../selectors/featureSettingsSelector';
import styles from '../../../styles/cellStyles';

class LoginSecondaryCell extends Component {

  handleChange = (setting, value) => {
    // this.setState({ [name]: event.target.checked})
    this.props.editFeature({feature: 'login', setting, value})
  }
  
  render() {
    const { classes, featureSettings } = this.props;

    return (
      <div>
        <FormControlLabel
          classes={{label: classes.label}}
          control={
            <Checkbox
              className={classes.checkbox}
              checked={featureSettings.register ? featureSettings.register.value : false}
              onChange={(event) => this.handleChange('google', event.target.checked)} 
            />
          }
          label="Google login option?"
        />
        <FormControlLabel
          classes={{label: classes.label}}
          control={
            <Checkbox
              className={classes.checkbox}
              checked={featureSettings.recover ? featureSettings.recover.value : false}
              onChange={(event) => this.handleChange('facebook', event.target.checked)} 
            />
          }
          label="Facebook login option?"
        />
      </div>
    )
  }
}

const makeMapStateToProps = () => {
  const getFeatureSettings = makeGetFeatureSettings()
  const mapStateToProps = (state) => ({
    featureSettings: getFeatureSettings(state[STORE_FEATURES], 'login')
    //storeFeatures : state[STORE_FEATURES]
  })
  return mapStateToProps
}

const mapDispatchToProps = {
  editFeature
}

export default compose(
  connect(makeMapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(LoginSecondaryCell);