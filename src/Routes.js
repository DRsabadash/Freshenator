import React from 'react';
import { Route, Switch } from 'react-router';
import * as routes from './constants/routes';
import Frame from './components/Frame';
import Home from './components/Home';
import Dashboard from './components/Dashboard';


const Routes = (props) => {
  return (
    <div>
      <Route path={routes.DASHBOARD} component={Frame} />
      <Switch>
        <Route exact path={routes.HOME} component={Home}/>
        <Route exact path={routes.DASHBOARD} component={Dashboard}/>
        <Route render={(props) => <div>{console.log(props)}404 - Not Found</div>} />
      </Switch>
    </div>
  )
}

export default Routes
