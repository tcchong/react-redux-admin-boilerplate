import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux/configureStore';
import configureApp from './routes';

const store = configureStore();
const App = configureApp(store);

ReactDOM.render(
  <Provider store={store}>
    {App}
  </Provider>,
  document.getElementById('app')
  );
