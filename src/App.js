import React, { Component } from 'react';
// import {Button, Input} from 'antd'
import {
  Route, BrowserRouter as Router, Switch, Redirect,
} from 'react-router-dom';
import Layouts from './layouts/Layouts';
import Login from './views/login';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/index" component={Layouts} />
          <Redirect to="/index" />
        </Switch>
      </Router>
    );
  }
}

export default App;
