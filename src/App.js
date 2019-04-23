import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import configureStore from './store/store';
import Routes from './Routes';

export const store = configureStore();

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <HashRouter>
          <Routes />
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
