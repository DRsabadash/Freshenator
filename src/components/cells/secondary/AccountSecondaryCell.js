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

class AccountSecondaryCell extends Component {

  handleChange = (setting, value) => {
    this.props.editFeature({feature: 'accountDetails', setting, value})
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
                checked={featureSettings.upload ? featureSettings.upload.value : false}
                onChange={(event) => this.handleChange('upload', event.target.checked)} 
              />
            }
            label="Upload profile image"
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
                checked={featureSettings.logout ? featureSettings.logout.value : false}
                onChange={(event) => this.handleChange('logout', event.target.checked)} 
              />
            }
            label="Logout button"
          />
        </div>
      </div>
    )
  }
}

const makeMapStateToProps = () => {
  const getFeatureSettings = makeGetFeatureSettings()
  const mapStateToProps = (state) => ({
    featureSettings: getFeatureSettings(state[STORE_FEATURES], 'accountDetails')
  })
  return mapStateToProps
}

const mapDispatchToProps = {
  editFeature
}

export default compose(
  connect(makeMapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(AccountSecondaryCell);