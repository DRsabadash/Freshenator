
import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, List, IconButton, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRightRounded';
import { editFeature } from '../actionCreators/FeatureActionCreators';
import { STORE_FEATURES } from '../constants/reducerTypes';
import loginIcon from '../assets/images/LoginIcon.png';
import accountDetailsIcon from '../assets/images/AccountDetailsIcon.png';
import navbarIcon from '../assets/images/NavbarIcon.png';
import homePageIcon from '../assets/images/HomePageIcon.png';
import adminPanelIcon from '../assets/images/AdminPanelIcon.png';
import dashboardIcon from '../assets/images/DashboardIcon.png';


const drawerWidth = 400;

const styles = theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      borderRadius: '60px',
      width: '12px',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      transition: 'all, 2s'

    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
      transition: 'all, 2s'

    },
    '*::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      backgroundColor: ' rgba(0, 0, 0, 0)',
      backgroundImage: 'none',

    }
  },
  drawer: {
    flexShrink: 0,
    boxShadow: "10px 10px 5px #aaaaaa",
    '&:hover' :{
      '@global':{
        '*::-webkit-scrollbar': {
          borderRadius: '60px',
          width: '12px',
          backgroundColor: 'rgba(0, 0, 0, 0)',
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          backgroundColor: ' rgba(0, 0, 0, 0)',
          backgroundImage: 'none',
        },
        '*::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          backgroundColor: '#FFF',
          backgroundImage: '-webkit-repeating-linear-gradient(top, #5fcc63, #9dce59, #000000, #ff5d72, #fb675d, #fd7045, #fe8711, #fd9808, #fdc530, #ecd644, #fad640, #9dce59, #5fcc63)',
        }
      }
    },
  },
  drawerOpenFull: {
    borderTopLeftRadius: '10px',
    overflowX: 'hidden',
    backgroundColor: '#252525',
    boxShadow: "10px 40px 30px 5px #aaaaaa",
    width: 800,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerOpen: {
    borderTopLeftRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#252525',
    boxShadow: "10px 40px 30px 5px #aaaaaa",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    borderTopLeftRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#252525',
    boxShadow: "10px 40px 30px 5px #aaaaaa",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: "60px",
    [theme.breakpoints.up('sm')]: {
      width: "60px",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'inline-grid',
    'grid-template-columns': '60px 100px 100px',
    paddingTop: '20px',
    paddingBottom: '20px',
    height: "90px",
    alignItems: 'center',
    transition: theme.transitions.create('height', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    
  },
  drawerPaperFull: {
    width: drawerWidth,
    display: 'inline-grid',
    'grid-template-columns': '60px 100px 100px',
    paddingTop: '20px',
    paddingBottom: '40px',
    height: "200px",
    alignItems: 'center',
    transition: theme.transitions.create('height', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    
  },
  drawerIcon: {
    position: 'relative',
    backgroundSize: 'cover',
    height: '50px',
    marginLeft: '5px',
    marginRight: '5px',
    width: '50px', 
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  divider: {
    backgroundColor: 'rgb(97, 97, 97)' ,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  expanderButton: {
    color: '#aaaaaa',
    conent: "center",
    height: '30px',
    width: '30px',
    '&:hover': {
      backgroundColor: 'rgba(97, 97, 97, 0.6)',
    }
  }
});

class Dock extends Component {
  state = {
    open: 'close'
  }

  handleDrawerToggle = (openLevel) => {
    this.setState({ open: openLevel });
    
    // TODO: On Toggle, if open set overlay DIV with no click through, no scroll to remaining window width/height with .6 opacity, also add a full drawer option
  };

  getIcon = (featureName) => {
    switch (featureName) {
      case 'login':
        console.log('yep')
        return loginIcon;

      case 'accountDetails':
        return accountDetailsIcon;

      case 'navbar':
        return navbarIcon;

      case 'homePage':
        return homePageIcon;

      case 'adminPanel':
        return adminPanelIcon;

      case 'dashboard':
        return dashboardIcon;

      default:
        return ''
    }
  }
  

  render() {
    const { classes } = this.props;
    const sortOrder = ['login', 'accountDetails', 'navbar', 'homePage', 'adminPanel', 'dashboard'];
    let activeFeatures = []

    sortOrder.map(element => {
      activeFeatures.push(this.props.storeFeatures.data.find(item => item.feature === element))
    })

    activeFeatures = activeFeatures.filter(element => element != undefined)

    return (
      <div style={{display: "flex"}}>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open === 'open',
            [classes.drawerClose]: this.state.open === 'close',
            [classes.drawerOpenFull]: this.state.open === 'openest'
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open === 'open',
              [classes.drawerClose]: this.state.open === 'close',
              [classes.drawerOpenFull]: this.state.open === 'openest'
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.drawerHeader}>
            {this.state.open === 'close' 
            ?<IconButton onClick={() => this.handleDrawerToggle('open')} className={classes.expanderButton}>
              <ChevronRightIcon fontSize="large" style={{position: 'absolute', float: 'center'}}/>
            </IconButton>
            :this.state.open === 'open' 
            ?<div><IconButton onClick={() => this.handleDrawerToggle('close')} className={classes.expanderButton}>
              <ChevronLeftIcon fontSize="large" style={{position: 'absolute', float: 'center'}}/>
              </IconButton>
              <IconButton onClick={() => this.handleDrawerToggle('openest')} className={classes.expanderButton}>
              <ChevronRightIcon fontSize="large" style={{position: 'absolute', float: 'center'}}/>
              </IconButton>
            </div> 
            :<IconButton onClick={() => this.handleDrawerToggle('open')} className={classes.expanderButton}>
              <ChevronLeftIcon fontSize="large" style={{position: 'absolute', float: 'center'}}/>
            </IconButton>}
          </div>
          <Divider className={classes.divider}/>
          <Divider className={classes.divider} style={{marginTop: '3px'}}/>

          {
            activeFeatures.map((element, index) => (
            console.log(this.getIcon(element.feature)),
            console.log(loginIcon),
            <div style={{}}>
              <div className={
                classNames(classes.drawerPaper, {
                  [classes.drawerPaper]: this.state.open === 'close',
                  [classes.drawerPaper]: this.state.open === 'open',
                  [classes.drawerPaperFull]: this.state.open === 'openest'
                })}
              >
                {/* gridcell 1 */}
                <div className={classes.drawerIcon} style={{backgroundImage: `url(${this.getIcon(element.feature)})`}}/>
                {/* gridcell 2 */}
                <div style={{display: 'inline-flex', overflow: 'hidden' }}>
                  something
                </div>
                {/* gridcell 3 */}
                <div style={{display: 'inline-flex', overflow: 'hidden' }}>
               
                </div>
              </div>
              <Divider className={classes.divider}/>
              { 
                index % 2 === 1
                ? <Divider className={classes.divider} style={{marginTop: '3px'}}/>
                : <div/> 
              }
            </div>
            ))
          }

        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  storeFeatures : state[STORE_FEATURES]
})

const mapDispatchToProps = {
  editFeature
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Dock);