import { List, Map } from 'immutable';
import {
  LIST_ITEM,
  GET_ITEM,
  REMOVE_ITEM
} from 'redux/constants/item';

const initialState = {
  itemList: List(),
  item: Map(),
  loaded: false
};

export default function item(state = initialState, action = {}) {
  switch(action.type) {
    case LIST_ITEM:
      return {
        ...state,
        itemList: List(action.result)
      }
    case GET_ITEM:
      return {
        ...state,
        loaded: true,
        item: Map(action.result)
      }
    case REMOVE_ITEM:
      return {
        ...state,
        reload: true
      }
    default:
      return initialState;
  }
}
