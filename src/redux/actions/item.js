import {
  LOADING,
  LOAD_FAIL
} from 'redux/constants/status';
import {
  LIST_ITEM,
  GET_ITEM,
  REMOVE_ITEM
} from 'redux/constants/item';

export function listItem() {
  return {
    types: [LOADING, LIST_ITEM, LOAD_FAIL],
    query: {
      method: 'GET',
      url: 'sample_list'
    }
  }
}

export function getItem(id) {
  return {
    types: [LOADING, GET_ITEM, LOAD_FAIL],
    query: {
      method: 'GET',
      url: `sample_list/${id}`
    }
  }
}

export function createItem(item) {
  return {
    types: [LOADING, GET_ITEM, LOAD_FAIL],
    query: {
      method: 'POST',
      url: 'sample_list',
      data: item
    }
  }
}

export function updateItem(id, item) {
  return {
    types: [LOADING, GET_ITEM, LOAD_FAIL],
    query: {
      method: 'PUT',
      url: `sample_list/${id}`,
      data: item
    }
  }
}

export function removeItem(id) {
  return {
    types: [LOADING, REMOVE_ITEM, LOAD_FAIL],
    query: {
      method: 'DELETE',
      url: `sample_list/${id}`
    }
  }
}
