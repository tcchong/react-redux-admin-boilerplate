import React, { Component } from 'react';
import Home from './containers/Home';
import Test from './containers/Test';
import {
  Router,
  Route,
  Redirect,
  browserHistory
} from 'react-router';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      flag: 1
    };
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Router path='/' component={Home} />
        <Router path='/test' component={Test} />
      </Router>
      )
  }
}
