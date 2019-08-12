import React, { Component } from 'react';
import {
  Route, Switch, withRouter, Redirect,
} from 'react-router-dom';
import Home from '../views/home';
import DashBoard from '../views/DashBoard';
import Monitor from '../views/Monitor';

import Forms from '../views/Forms';

@withRouter
class Routers extends Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    const { match } = this.props;

    return (
      <Switch>
        <Route exact path={`${match.path}`} component={Home} />
        <Route path={`${match.path}/dashboard`} component={DashBoard} />
        <Route path={`${match.path}/monitor`} component={Monitor} />
        <Route path={`${match.path}/form`} component={Forms} />
        <Redirect to={`${match.path}`} />
      </Switch>
    );
  }
}
export default Routers;
