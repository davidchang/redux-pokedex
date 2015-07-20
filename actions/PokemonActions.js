import * as types from '../constants/ActionTypes';

export function applyFilter(filter) {
  return {
    type: types.APPLY_FILTER,
    filter
  };
}
