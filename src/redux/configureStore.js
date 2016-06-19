import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import createFetch from './middlewares/fetchMiddleware';

const fetchMiddleware = createFetch(fetch);
const router = routerMiddleware(browserHistory);
const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  fetchMiddleware,
  thunk,
  router,
  logger
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
