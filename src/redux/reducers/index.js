import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import item from './item';
import status from './status';

export default combineReducers({
  routing: routerReducer,
  form,
  status,
  item
});
