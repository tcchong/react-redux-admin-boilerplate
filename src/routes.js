import React, { Component } from 'react';
import {
  Router,
  Route,
  IndexRoute,
  Redirect,
  browserHistory
} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Login from 'containers/Login/Login';
import App from 'containers/App/App';
import Home from 'containers/Home/Home';
import SimpleListView from 'containers/SimpleList/SimpleListView';
import SimpleListEditView from 'containers/SimpleList/SimpleListEditView';

export default (store) => {

  const history = syncHistoryWithStore(browserHistory, store);

  return (
      <Router history={history}>
        <Router path="/" component={App}>
          <IndexRoute component={Home}/>
          <Router path="crud">
            <Router path="simple-list" component={SimpleListView} />
            <Router path="simple-list/edit/:id" component={SimpleListEditView} />
          </Router>
        </Router>
        <Router path="login" component={Login} />
      </Router>
    )
}
