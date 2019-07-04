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

class NavbarPrimaryCell extends Component {

  handleChange = (setting, value) => {
    this.props.editFeature({feature: 'navbar', setting, value})
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
                checked={featureSettings.editAccount ? featureSettings.editAccount.value : false}
                onChange={(event) => this.handleChange('logo', event.target.checked)} 
              />
            }
            label="App Logo with link to 'Home'"
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
                checked={featureSettings.editAccount ? featureSettings.editAccount.value : false}
                onChange={(event) => this.handleChange('viewableFromHome', event.target.checked)} 
              />
            }
            label="Viewable from 'Home'"
          />
        </div>
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
)(NavbarPrimaryCell);