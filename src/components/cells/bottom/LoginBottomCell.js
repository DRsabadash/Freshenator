import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { TextField, IconButton } from '@material-ui/core';
import { editFeature } from '../../../actionCreators/FeatureActionCreators';
import { STORE_FEATURES } from '../../../constants/reducerTypes';
import makeGetFeatureSettings from '../../../selectors/featureSettingsSelector';
import styles from '../../../styles/cellStyles';
import checkboxChecked from '../../../assets/images/CheckboxChecked.png';

class LoginBottomCell extends Component {
  state = {
    primaryColor: '#FFFFFF' ,
    secondaryColor: 'rgba(255, 255, 255, 0.5)',
  }

  componentDidMount() {
    this.setState({
      primaryColor: this.props.featureSettings.primaryColor ? this.props.featureSettings.primaryColor.value : '#FFFFFF' ,
      secondaryColor: this.props.featureSettings.secondaryColor ? this.props.featureSettings.secondaryColor.value : 'rgba(255, 255, 255, 0.5)'
    })
  }

  handleChange = (setting, value) => {
    this.setState({ [setting] : value})
  }

  handleSubmit = () => {
    this.props.editFeature({ feature: 'login', setting: 'primaryColor', value: this.state.primaryColor })
    this.props.editFeature({ feature: 'login', setting: 'secondaryColor', value: this.state.secondaryColor })
  }
  
  render() {
    return (
      <div className="gridCellBottomContainer">
          <TextField
            variant='outlined'
            label='Primary Color'
            placeholder='#FFFFFF'
            value={this.state.primaryColor}
            onChange={(event) => this.handleChange('primaryColor', event.target.value)}
          />
          <div 
            className='colorBox'
            style={{ backgroundColor: this.state.primaryColor }}
          />
          <TextField
            variant='outlined'
            label='Primary Color'
            placeholder='rgba(255, 255, 255, 0.5)'
            value={this.state.secondaryColor}
            onChange={(event) => this.handleChange('secondaryColor', event.target.value)}
          />
          <div 
            className='colorBox'
            style={{ backgroundColor: this.state.secondaryColor }}
          />

          <div className='iconButton'>
            <IconButton
            onClick={this.handleSubmit}
            >
              <img 
                className="checkboxIcon" 
                src={checkboxChecked} 
              />
            </IconButton>
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