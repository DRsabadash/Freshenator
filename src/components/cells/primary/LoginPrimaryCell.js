import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { editFeature } from '../../../actionCreators/FeatureActionCreators';
import { STORE_FEATURES } from '../../../constants/reducerTypes';
import makeGetFeatureSettings from '../../../selectors/featureSettingsSelector';
import styles from '../../../styles/cellStyles';

class LoginPrimaryCell extends Component {

  handleChange = (setting, value) => {
    // this.setState({ [name]: event.target.checked})
    this.props.editFeature({feature: 'login', setting, value})
  }
  
  render() {
    const { classes, featureSettings } = this.props;
    // const dat = {...this.props.storeFeatures.data.find(element => element.feature === 'login').settings}
    return (
      <div>
        <FormControlLabel
          classes={{label: classes.label}}
          control={
            <Checkbox
              className={classes.checkbox}
              checked={featureSettings.register ? featureSettings.register.value : false}
              onChange={(event) => this.handleChange('register', event.target.checked)} 
            />
          }
          label="Register account button?"
        />
        <FormControlLabel
          classes={{label: classes.label}}
          control={
            <Checkbox
              className={classes.checkbox}
              checked={featureSettings.recover ? featureSettings.recover.value : false}
              onChange={(event) => this.handleChange('recover', event.target.checked)} 
            />
          }
          label="Recover account button?"
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
)(LoginPrimaryCell);