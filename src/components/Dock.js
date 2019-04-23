
import React, { Component } from 'react';
import { compose } from 'redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, List, IconButton, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRightRounded';

const drawerWidth = 250;

const styles = theme => ({
  '@global': {
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
      backgroundColor: '#FFF',
      backgroundImage: '-webkit-repeating-linear-gradient(top, #5fcc63, #9dce59,#000000,#ff5d72, #fb675d, #fd7045, #fe8711, #fd9808, #fdc530, #ecd644, #fad640, #9dce59, #5fcc63);'
    }
  },
  scrollBarWrap: {
    position: 'absolute',
    display: 'inline-block',
    height: "100%",
    width: '25px',
  },
  coverBar: {
    position: 'absolute',
    backgroundColor: 'green',
    height: '100%',
    width: '25px',
    top: '0%',
    zIndex: '9999',
    right: '-50px',
    '-webkit-transition': 'all .7s',

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    boxShadow: "10px 10px 5px #aaaaaa",
  },
  drawerOpen: {
    borderTopLeftRadius: '10px',
    backgroundColor: '#252525',
    boxShadow: "10px 40px 30px 5px #aaaaaa",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
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
      backgroundColor: '#FFF',
      backgroundImage: 'none'
    }
      
    },
  },
    borderTopLeftRadius: '10px',
    backgroundColor: '#252525',
    boxShadow: "10px 40px 30px 5px #aaaaaa",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: "50px",
    [theme.breakpoints.up('sm')]: {
      width: "50px",
    },
  },
  drawerPaper: {
    width: drawerWidth,
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
    open: false
  }

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    // <div className={classes.coverBar}/>


    return (
      <div style={{display: "flex"}}>
        <div className={classes.scrollBarWrap}>
          <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
              }),
            }}
            open={this.state.open}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerToggle} className={classes.expanderButton}>
              {this.state.open === true ? <ChevronLeftIcon fontSize="large" style={{position: 'absolute', float: 'center'}}/> : <ChevronRightIcon fontSize="large" style={{position: 'absolute', float: 'center'}}/>}
              </IconButton>
            </div>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
              elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
              hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
              velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
              Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
              viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
              Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
              at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
              ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>

            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
              consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
              sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
              In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
              et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
              sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
              viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
              ultrices sagittis orci a.
            </Typography>
            <Divider className={classes.divider}/>
          </Drawer>
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(styles)
)(Dock);