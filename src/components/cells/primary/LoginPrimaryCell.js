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

class LoginPrimaryCell extends Component {

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
                checked={featureSettings.register ? featureSettings.register.value : false}
                onChange={(event) => this.handleChange('register', event.target.checked)} 
              />
            }
            label="Register account"
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
                checked={featureSettings.recover ? featureSettings.recover.value : false}
                onChange={(event) => this.handleChange('recover', event.target.checked)} 
              />
            }
            label="Recover account"
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
)(LoginPrimaryCell);