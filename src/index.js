import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var path = window.PARSE_DASHBOARD_PATH || '/';
ReactDOM.render(
  <App path={path} />, document.getElementById('browser_mount')
  );