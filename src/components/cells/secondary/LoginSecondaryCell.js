import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { editFeature } from '../../../actionCreators/FeatureActionCreators';
import { STORE_FEATURES } from '../../../constants/reducerTypes';
import makeGetFeatureSettings from '../../../selectors/featureSettingsSelector';
import styles from '../../../styles/cellStyles';
import checkboxUnchecked from '../../../assets/images/CheckboxUnchecked.png';
import checkboxChecked from '../../../assets/images/CheckboxChecked.png';


class LoginSecondaryCell extends Component {

  handleChange = (setting, value) => {
    this.props.editFeature({feature: 'login', setting, value})
  }
  
  render() {
    const { classes, featureSettings } = this.props;

    return (
      <div>
        <div className={classes.fullWidth}>
          <FormControlLabel
            classes={{label: classes.label}}
            control={
              <Checkbox
                className={classes.checkbox}
                icon={
                  <img 
                    className="checkboxIcon" 
                    src={checkboxUnchecked} 
                  />
                }
                checkedIcon={
                  <img 
                    className="checkboxIcon" 
                    src={checkboxChecked} 
                  />
                }
                checked={featureSettings.google ? featureSettings.google.value : false}
                onChange={(event) => this.handleChange('google', event.target.checked)} 
              />
            }
            label="Google login"
          />
        </div>
        <div className={classes.fullWidth}>
          <FormControlLabel
            classes={{label: classes.label}}
            control={
              <Checkbox
                className={classes.checkbox}
                icon={
                  <img 
                    className="checkboxIcon" 
                    src={checkboxUnchecked} 
                  />
                }
                checkedIcon={
                  <img 
                    className="checkboxIcon" 
                    src={checkboxChecked} 
                  />
                }
                checked={featureSettings.facebook ? featureSettings.facebook.value : false}
                onChange={(event) => this.handleChange('facebook', event.target.checked)} 
              />
            }
            label="Facebook login"
          />
        </div>
      </div>
    )
  }
}

const makeMapStateToProps = () => {
  const getFeatureSettings = makeGetFeatureSettings()
  const mapStateToProps = (state) => ({
    featureSettings: getFeatureSettings(state[STORE_FEATURES], 'login')
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