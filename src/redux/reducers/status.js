import * as actionTypes from 'redux/constants/status';

const intialState = {
  loading: false
};

export default function status(state = intialState, action = {}) {
  switch (action.type) {
    case actionTypes.LOADING:
      return {
        loading: true
      };
    case actionTypes.LOAD_FAIL:
      return {
        loading: false,
        error: action.error
      };
    default:
      return intialState;
  }
}
