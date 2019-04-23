import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { DASHBOARD } from '../constants/routes';
import logo from '../assets/images/FreshworksLogoAlpha.png';
import dialog from '../assets/images/DialogBox.png';
import Electron from 'electron';

const x = -50
const y = -50
const translate = 'translate('+x+'%, '+y+'%)'
const styles = ({
  button: {
    position: "absolute",
    display: "inline-block",
    top: "85%",
    left: "50%",
    transform: translate,
    backgroundColor: "rgba(88, 88, 88, 0.65)",
    color: "white",
    '&:hover': {
      color: "rgb(88, 88, 88)",
    }
  },
});

class Home extends Component {
  state ={
    textAreaContent: [],
  }

  textAreaRef= null

  componentDidMount() {
    //set ipcRenderer listeners here
    Electron.ipcRenderer.on("gitReturn", (event, arg) => {
      // set state to this.setState({ textAreaContent: [...this.state.textAreaContent].concat({name: this.state.inputContent}), disabled: true })
    })
  }

  onInputHandler = (event) => {
    this.setState({ inputContent: event.target.innerHTML }) 
  }
  
  onClickHandler = async() => {
    if (this.state.inputContent !== undefined){
      await this.setState({ textAreaContent: [...this.state.textAreaContent].concat({name: this.state.inputContent}), disabled: true })
      this.textAreaRef.scrollTop = this.textAreaRef.scrollHeight + 100
      Electron.ipcRenderer.sendSync('synchronous-message', 'ping')
      this.props.history.push(DASHBOARD)
    }
  }
  
  render() {


    const { classes } = this.props;
    return (
      <div>
        <div className="Dialog" style={{backgroundImage: `url(${dialog})`}}>
          <img className="Logo" src={logo} ></img>
          <div className="ScrollBarWrap">
            <div className="TextArea" ref={(input) => this.textAreaRef = input}>
            {this.state.textAreaContent.map((element, index) => (
              <li className={"List" + index % 10} key={element.index}> {element.name}</li>
            ))}
            </div>
            <div className="CoverBar"/>
          </div>
          <div className="DirectoryPathBackground" />
          <div className="DirectoryPathInput" contentEditable="true" placeholder="Git clone destination (don't provide long path, text box doesn't wrap!)" onInput={this.onInputHandler}></div>
          <Button variant="contained" className={classes.button} onClick={this.onClickHandler} disabled={this.state.textAreaContent[0]}>
            Start
          </Button>
        </div>
      </div>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles)
)(Home);
