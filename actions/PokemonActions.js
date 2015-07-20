import * as types from '../constants/ActionTypes';

export function searchTermChanged(searchTerm) {
  return {
    type: types.SEARCH_INPUT_CHANGED,
    searchTerm
  };
}

export function toggleFilter(filterType, filterLabel) {
  console.log('arguments', arguments);
  return {
    type: types.TOGGLE_FILTER,
    filterType,
    filterLabel
  };
}

export function markCaught(name) {
  return {
    type: types.MARK_CAUGHT,
    name
  };
}