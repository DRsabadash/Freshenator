import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, TextField, createMuiTheme, FormControlLabel, Select, OutlinedInput, MenuItem } from '@material-ui/core';
import { editFeature } from '../../../actionCreators/FeatureActionCreators';
import { STORE_FEATURES } from '../../../constants/reducerTypes';
import classNames from 'classnames';
import makeGetFeatureSettings from '../../../selectors/featureSettingsSelector';
import styles from '../../../styles/cellStyles';
import { element } from 'prop-types';

class AdminBottomCell extends Component {
  state= {
    numButtons: 1,
    selectedButton: 1,
    menuItems: []
  }

  componentDidMount() {
    this.setState({
      numButtons: this.props.featureSettings.numButtons ? this.props.featureSettings.numButtons.value : 1
    })
  }

  handleChange = (setting, value) => {
    value >= 8
      ? this.props.editFeature({feature: 'navbar', setting, value: 8})
      : this.props.editFeature({feature: 'navbar', setting, value})
  }

  handleNameButtons = (value) => {
    console.log(value)
    // let values = [];
    // if (this.props.featureSettings.buttonNames) {
    //   values = this.props.featureSettings.buttonNames.value
    // }
    // values[this.state.selectedButton] = value
    // this.props.editFeature({feature: 'navbar', setting: 'buttonNames', value: values})

  }

  handleSetNumButtons = (value) => this.setState({ numButtons: value })

  handleSelectButton = (value) => this.setState({selectedButton: value})
  
  render() {
    const { classes, featureSettings } = this.props;
    const { selectedButton } = this.state;
    let iterator = 1;
    let obj = []
    let menuClass;

    while (iterator <= (this.props.featureSettings && this.props.featureSettings.numButtons ? this.props.featureSettings.numButtons.value : 1)){
      switch (iterator) {

        case 1:
          //Fall through
        case 5:
          menuClass = classes.menu1
          break;

        case 2:
          //Fall through
        case 6:
          menuClass = classes.menu2
          break;

        case 3:
          //Fall through
        case 7:
          menuClass = classes.menu3
          break;

        case 4:
          //Fall through
        case 8:
          menuClass = classes.menu4
          break;
        
          default: 
          menuClass= classes.menu1
      }
      obj.push(<MenuItem value={iterator} className={menuClass}>{iterator}</MenuItem>)
      iterator ++;
    }
    const primaryTheme = createMuiTheme({
      typography: {
        useNextVariants: true,
        suppressDeprecationWarnings: true,
      },
      palette: {
        primary: {
          main: '#5fcc63'
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
        <MuiThemeProvider theme={primaryTheme}>
          <TextField
            InputProps={{
              className:  classNames(classes.menu3, classes.inputWidth),
            }}
            variant="outlined"
            label='Number of buttons'
            placeholder='1'
            value={this.state.numButtons}
            type="number"
            onChange={(event) => this.handleSetNumButtons(event.target.value)}
            onBlur={(event) => this.handleChange('numButtons', event.target.value)}
          />
        </MuiThemeProvider>
        <MuiThemeProvider theme={primaryTheme}>
          <FormControlLabel
            label="Link Selected"
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
                value={selectedButton}
                onChange={(event) => this.handleSelectButton(event.target.value)}
                input={
                  <OutlinedInput 
                    name="Direction" 
                    className={
                      selectedButton === 1 || selectedButton === 5
                        ? classes.menu1
                        : selectedButton === 2 || selectedButton === 6
                        ? classes.menu2
                        : selectedButton === 3 || selectedButton === 7
                        ? classes.menu3
                        : selectedButton === 4 || selectedButton === 8
                        ? classes.menu4
                        : classes.menu1
                    } 
                    classes={{
                      root: classes.selectWidth
                    }}
                  />
                }
              >
                {
                 obj.map(element => {
                   return element
                 })
                }
              </Select>
            }
          />
        </MuiThemeProvider>
        <MuiThemeProvider theme={primaryTheme}>
          <TextField
            InputProps={{
              className:  classes.inputColor
            }}
            variant="outlined"
            label='Link Name'
            placeholder='Business Page'
            value={featureSettings.buttonNames && featureSettings.buttonNames.value[0] ? featureSettings.buttonNames.value[0] : ''}
            onChange={(event) => this.handleNameButtons('buttonNames', event.target.value)}
          />
        </MuiThemeProvider>
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