import React, { Component } from 'react';
import {
  Router,
  Route,
  IndexRoute,
  Redirect,
  browserHistory
} from 'react-router';
import Login from 'containers/Login/Login';
import Dashboard from 'containers/Dashboard/Dashboard';
import Home from 'containers/Home/Home';
import Users from 'containers/IAM/Users';
import Roles from 'containers/IAM/Roles';

export default class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Router path="/" component={Dashboard}>
          <IndexRoute component={Home}/>

          <Router path="iam">
            <Router path="users" component={Users} />
            <Router path="roles" component={Roles} />
          </Router>
        </Router>
        <Router path="login" component={Login} />
      </Router>
      )
  }
}
