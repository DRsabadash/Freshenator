import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Select, MenuItem, OutlinedInput, MuiThemeProvider, createMuiTheme, FormControlLabel } from '@material-ui/core';

import { editFeature } from '../../../actionCreators/FeatureActionCreators';
import { STORE_FEATURES } from '../../../constants/reducerTypes';
import makeGetFeatureSettings from '../../../selectors/featureSettingsSelector';
import styles from '../../../styles/cellStyles';

class AccountBottomCell extends Component {

  handleChange = (setting, value) => {
    this.props.editFeature({feature: 'accountDetails', setting, value})
  }
  
  render() {
    const { classes, featureSettings } = this.props;
    const selectTheme = createMuiTheme({
      typography: {
        useNextVariants: true,
        suppressDeprecationWarnings: true,
      },
      palette: {
        primary: {
          main:'#5fcc63'
        },
        text: {
          primary: '#ff5d72',
          secondary: "#5fcc63",
          disabled: "rgba(0, 0, 0, 0.38)",
          hint: "#aaaaff",
        },
      },
    });

    return (
      <div className="gridCellBottomContainer">
        {
          featureSettings.drawer 
          ? featureSettings.drawer.value === true
            ?
            <MuiThemeProvider theme={selectTheme}>
              <FormControlLabel
                label="Side of screen drawer expands from"
                classes={{
                  root: classes.selectRoot,
                  label: classes.labelMargin}}
                control={
                  <Select
                    MenuProps={{
                      classes: {
                        paper: classes.menuColor
                      }
                    }}

                    value={featureSettings.drawerDirection ? featureSettings.drawerDirection.value : 'right'}
                    onChange={(event) => this.handleChange('drawerDirection', event.target.value)}
                    input={
                      <OutlinedInput 
                        name="Direction" 
                        className={
                          featureSettings.drawerDirection
                            ? featureSettings.drawerDirection.value === 'right'
                              ? classes.menu1
                              : featureSettings.drawerDirection.value === 'left'
                              ? classes.menu2
                              : featureSettings.drawerDirection.value === 'top'
                              ? classes.menu3
                              : featureSettings.drawerDirection.value === 'bottom'
                              ? classes.menu4
                              : classes.menu1
                            : classes.menu1
                        } 
                        classes={{
                          root: classes.selectWidth
                        }}
                      />
                    }
                  >
                    <MenuItem value='right' className={classes.menu1} >Right</MenuItem>
                    <MenuItem value='left'className={classes.menu2} >Left</MenuItem>
                    <MenuItem value='top'className={classes.menu3} >Top</MenuItem>
                    <MenuItem value='bottom'className={classes.menu4} >Bottom</MenuItem>
                  </Select>
                }
              />
            </MuiThemeProvider>
            : null
          : null
        }
        
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
)(AccountBottomCell);