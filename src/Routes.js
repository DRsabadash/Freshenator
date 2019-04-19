import React from 'react';
import { Route, Switch } from 'react-router';
import * as routes from './constants/routes';
import Frame from './components/Frame';
import Home from './components/Home';

const Routes = (props) => {
  return (
    <div>
      {/* <Route path={routes.FRAME} component={Frame} /> */}
      <Switch>
        <Route path={routes.FRAME} component={Home}/>
        <Route render={(props) => <div>{console.log(props)}404 - Not Found</div>} />
      </Switch>
    </div>
  )
}

export default Routes
