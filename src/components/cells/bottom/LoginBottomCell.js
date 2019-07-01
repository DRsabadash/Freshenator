import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { TextField, IconButton, Button } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { editFeature } from '../../../actionCreators/FeatureActionCreators';
import { STORE_FEATURES } from '../../../constants/reducerTypes';
import makeGetFeatureSettings from '../../../selectors/featureSettingsSelector';
import styles from '../../../styles/cellStyles';
import checkboxUnchecked from '../../../assets/images/CheckboxUnchecked.png';
import checkboxChecked from '../../../assets/images/CheckboxChecked.png';

class LoginBottomCell extends Component {
  state = {
    primaryColor: '#000000' ,
    secondaryColor: 'rgba(255, 255, 255, 0.5)',
  }

  componentDidMount() {
    this.setState({
      primaryColor: this.props.featureSettings.primaryColor ? this.props.featureSettings.primaryColor.value : '#000000' ,
      secondaryColor: this.props.featureSettings.secondaryColor ? this.props.featureSettings.secondaryColor.value : 'rgba(255, 255, 255, 0.5)',
    })
  }

  handleChange = (setting, value) => this.setState({ [setting] : value})

  handleSubmit = () => {
    if ((
        /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.state.primaryColor) 
        || 
        /rgba?\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?\)/i.test(this.state.primaryColor) 
      )
      &&
      (
        /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.state.secondaryColor) 
        || 
        /rgba?\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?\)/i.test(this.state.secondaryColor) 
      )) {
        this.setState({ submitted: true })
        this.props.editFeature({ feature: 'login', setting: 'primaryColor', value: this.state.primaryColor })
        this.props.editFeature({ feature: 'login', setting: 'secondaryColor', value: this.state.secondaryColor })
    }
  }
  
  render() {
    const { classes, featureSettings } = this.props;
    const { primaryColor, secondaryColor } = this.state;
    const primaryTheme = createMuiTheme({
      typography: {
        useNextVariants: true,
        suppressDeprecationWarnings: true,
      },
      palette: {
        primary: {
          main: 
            /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(primaryColor) 
            || 
            /rgba?\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?\)/i.test(primaryColor) 
              ? primaryColor
              : '#aaaaaa'
        },
        text: {
          primary: '#ff5d72',
          secondary: "#5fcc63",
          disabled: "rgba(0, 0, 0, 0.38)",
          hint: "#aaaaff",
        },
      },
    });
    const secondaryTheme = createMuiTheme({
      typography: {
        useNextVariants: true,
        suppressDeprecationWarnings: true,
      },
      palette: {
        primary: {
          main: 
            /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(secondaryColor) 
            || 
            /rgba?\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?\)/i.test(secondaryColor) 
              ? secondaryColor
              : '#aaaaaa'
        },
        text: {
          primary: '#ff5d72',
          secondary: "#5fcc63",
          disabled: "rgba(0, 0, 0, 0.38)",
          hint: "#aaaaff",
        },
      },
    });
    const buttonTheme = createMuiTheme({
      typography: {
        useNextVariants: true,
        suppressDeprecationWarnings: true,
      },
      palette: {
        primary: {
          main:
          /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(featureSettings.primaryColor ? featureSettings.primaryColor.value : '') 
          || 
          /rgba?\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?\)/i.test(featureSettings.primaryColor ? featureSettings.primaryColor.value : '') 
            ? featureSettings.primaryColor 
              ? featureSettings.primaryColor.value 
              : ''
            : '#000000',
          contrastText:
          /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(featureSettings.secondaryColor ? featureSettings.secondaryColor.value : '') 
          || 
          /rgba?\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?\)/i.test(featureSettings.secondaryColor ? featureSettings.secondaryColor.value : '') 
            ? featureSettings.secondaryColor ? featureSettings.secondaryColor.value : ''
            : '#ffffff',
        },
      },
    });
    
    return (
      <div className="gridCellBottomContainer">
          <MuiThemeProvider theme={primaryTheme}>
            <TextField
              InputProps={{
                className:  classes.inputColor
              }}
              variant="outlined"
              label='Primary Color'
              placeholder='#000000'
              value={primaryColor}
              onChange={(event) => this.handleChange('primaryColor', event.target.value)}
            />
          </MuiThemeProvider>
          <div 
            className='colorBox'
            style={{ backgroundColor: primaryColor }}
          />
          <MuiThemeProvider theme={secondaryTheme}>
            <TextField
              InputProps={{
                className:  classes.inputColor
              }}
              variant="outlined"
              label="Secondary Color"
              placeholder="rgba(255, 255, 255, 0.5)"
              value={secondaryColor}
              onChange={(event) => this.handleChange('secondaryColor', event.target.value)}
            />
            <div 
              className='colorBox'
              style={{ backgroundColor: secondaryColor }}
            />
          </MuiThemeProvider>
          <div className='iconButton'>
            <IconButton
            onClick={this.handleSubmit}
            >
              <img 
                className="checkboxIcon" 
                src={featureSettings.primaryColor ? checkboxChecked : checkboxUnchecked} 
              />
            </IconButton>
            <MuiThemeProvider theme={buttonTheme}>
              <Button variant="contained" color="primary">
                Login
              </Button>
            </MuiThemeProvider>
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
)(LoginBottomCell);