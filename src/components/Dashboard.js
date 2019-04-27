import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Dock from './Dock';
import { addFeature, removeFeature } from '../actionCreators/FeatureActionCreators';
import { STORE_FEATURES } from '../constants/reducerTypes';
import loginSelected from '../assets/images/LoginSelected.png';
import loginUnselected from '../assets/images/LoginUnselected.png';
import navbarSelected from '../assets/images/NavbarSelected.png';
import navbarUnselected from '../assets/images/NavbarUnselected.png';
import adminPanelSelected from '../assets/images/AdminPanelSelected.png';
import adminPanelUnselected from '../assets/images/AdminPanelUnselected.png';
import accountDetailsSelected from '../assets/images/AccountDetailsSelected.png';
import accountDetailsUnselected from '../assets/images/AccountDetailsUnselected.png';
import homePageSelected from '../assets/images/HomePageSelected.png';
import homePageUnselected from '../assets/images/HomePageUnselected.png';
import dashboardSelected from '../assets/images/DashboardSelected.png';
import dashboardUnselected from '../assets/images/DashboardUnselected.png';

const styles = ({
  buttonOutlineActive: {
    position: 'absolute',
    display: 'inline-block',
    width: '130px',
    height: '40px',
    transform: 'translate(-50%, 0%)',
    bottom:' 25px',
    background: 'linear-gradient(to top,  #ff5d72, #fb675d, #fd7045, #fe8711, #fd9808, #fdc530, #ecd644, #fad640, #9dce59, #5fcc63)',
    filter: 'blur(2px)',
    borderRadius: '5px',
  },
  buttonOutlineUnactive: {
    position: 'absolute',
    display: 'inline-block',
    width: '130px',
    height: '40px',
    transform: 'translate(-50%, 0%)',
    bottom: '25px',
    background: 'linear-gradient(to top, #585858 0%,#585858 100%)',
    filter: 'blur(2px)',
    borderRadius: '5px',
  },
  buttonUnactive: {
    position: 'absolute',
    display: 'inline-block',
    width: '125px',
    height: '37px',
    transform: 'translate(-50%, 0%)',
    bottom: '27px',

  },
  buttonActive: {
    position: 'absolute',
    display: 'inline-block',
    width: '125px',
    height: '37px',
    transform: 'translate(-50%, 0%)',
    bottom: '27px',
  },
  asd: {
    backgroundColor: '#f8f8f8',
    '&:hover':{
      backgroundColor: '#f8f8f8',
    }
  }
});

class Dashboard extends Component {
  state= {
    
  }

  onClickHandler = async (buttonId) => {
    await this.setState({[buttonId]: !this.state[buttonId]})
    if (this.state[buttonId]){
      this.props.addFeature({feature: buttonId, settings: []})
    } else {
      this.props.removeFeature(buttonId)
    }
  }

  render() {

    const { classes } = this.props;
    return (
      <div className="Dashboard">
        <div className='FeatureContainer'>
          <div className='FeatureIcon' style={
            this.state.login === true 
            ? {backgroundImage: `url(${loginSelected})`} 
            : {backgroundImage: `url(${loginUnselected})`}}
          >
            <div className={
              classNames({
                [classes.buttonOutlineUnactive] : !this.state.login, 
                [classes.buttonOutlineActive] : this.state.login
              })}
            />
            <Button variant='contained' className={
              classNames(classes.asd, {
                [classes.buttonUnactive] : !this.state.login, 
                [classes.buttonActive] : this.state.login
              })} onClick={() => this.onClickHandler("login")}
            >
              <div className={
                classNames({
                  'TextFillUnactive' : !this.state.login,
                  'TextFillActive' : this.state.login
                })}
              >
              Click!
              </div>
            </Button>
          </div>
          <div className='FeatureIcon' style={
            this.state.accountDetails === true 
            ? {backgroundImage: `url(${accountDetailsSelected})`} 
            : {backgroundImage: `url(${accountDetailsUnselected})`}}
          >
            <div className={
              classNames({
                [classes.buttonOutlineUnactive] : !this.state.accountDetails, 
                [classes.buttonOutlineActive] : this.state.accountDetails
              })}
            />
            <Button variant='contained' className={
              classNames(classes.asd, {
                [classes.buttonUnactive] : !this.state.accountDetails, 
                [classes.buttonActive] : this.state.accountDetails
              })} onClick={() => this.onClickHandler("accountDetails")}
            >
              <div className={
                classNames({
                  'TextFillUnactive' : !this.state.accountDetails,
                  'TextFillActive' : this.state.accountDetails
                })}
              >
              Click!
              </div>
            </Button>
          </div>
          <div className='FeatureIcon' style={
            this.state.navbar === true 
            ? {backgroundImage: `url(${navbarSelected})`} 
            : {backgroundImage: `url(${navbarUnselected})`}}
          >
            <div className={
              classNames({
                [classes.buttonOutlineUnactive] : !this.state.navbar, 
                [classes.buttonOutlineActive] : this.state.navbar
              })}
            />
            <Button variant='contained' className={
              classNames(classes.asd, {
                [classes.buttonUnactive] : !this.state.navbar, 
                [classes.buttonActive] : this.state.navbar
              })} onClick={() => this.onClickHandler("navbar")}
            >
              <div className={
                classNames({
                  'TextFillUnactive' : !this.state.navbar,
                  'TextFillActive' : this.state.navbar
                })}
              >
              Click!
              </div>
            </Button>
          </div>
          <div className='FeatureIcon' style={
            this.state.homePage === true 
            ? {backgroundImage: `url(${homePageSelected})`} 
            : {backgroundImage: `url(${homePageUnselected})`}}
          >
            <div className={
              classNames({
                [classes.buttonOutlineUnactive] : !this.state.homePage, 
                [classes.buttonOutlineActive] : this.state.homePage
              })}
            />
            <Button variant='contained' className={
              classNames(classes.asd, {
                [classes.buttonUnactive] : !this.state.homePage, 
                [classes.buttonActive] : this.state.homePage
              })} onClick={() => this.onClickHandler("homePage")}
            >
              <div className={
                classNames({
                  'TextFillUnactive' : !this.state.homePage,
                  'TextFillActive' : this.state.homePage
                })}
              >
              Click!
              </div>
            </Button>
          </div>
          <div className='FeatureIcon' style={
            this.state.adminPanel === true 
            ? {backgroundImage: `url(${adminPanelSelected})`} 
            : {backgroundImage: `url(${adminPanelUnselected})`}}
          >
            <div className={
              classNames({
                [classes.buttonOutlineUnactive] : !this.state.adminPanel, 
                [classes.buttonOutlineActive] : this.state.adminPanel
              })}
            />
            <Button variant='contained' className={
              classNames(classes.asd, {
                [classes.buttonUnactive] : !this.state.adminPanel, 
                [classes.buttonActive] : this.state.adminPanel
              })} onClick={() => this.onClickHandler("adminPanel")}
            >
              <div className={
                classNames({
                  'TextFillUnactive' : !this.state.adminPanel,
                  'TextFillActive' : this.state.adminPanel
                })}
              >
              Click!
              </div>
            </Button>
          </div>
          <div className='FeatureIcon' style={
            this.state.dashboard === true 
            ? {backgroundImage: `url(${dashboardSelected})`} 
            : {backgroundImage: `url(${dashboardUnselected})`}}
          >
            <div className={
              classNames({
                [classes.buttonOutlineUnactive] : !this.state.dashboard, 
                [classes.buttonOutlineActive] : this.state.dashboard
              })}
            />
            <Button variant='contained' className={
              classNames(classes.asd, {
                [classes.buttonUnactive] : !this.state.dashboard, 
                [classes.buttonActive] : this.state.dashboard
              })} onClick={() => this.onClickHandler("dashboard")}
            >
              <div className={
                classNames({
                  'TextFillUnactive' : !this.state.dashboard,
                  'TextFillActive' : this.state.dashboard
                })}
              >
              Click!
              </div>
            </Button>
          </div>
        </div>
        <Dock/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  storeFeatures : state[STORE_FEATURES]
})

const mapDispatchToProps = {
  addFeature,
  removeFeature,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
  withRouter,
)(Dashboard);
