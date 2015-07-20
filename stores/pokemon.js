import { APPLY_FILTER } from '../constants/ActionTypes';
import { Pokemon } from '../constants/Pokemon';

const initialState = {
  pokemon : Pokemon,
  searchTerm : ''
};

export default function todos(state = initialState, action) {
  switch (action.type) {
  case APPLY_FILTER:
    return {
      searchTerm : action.filter.searchTerm,
      pokemon : Pokemon.filter(pokemon => pokemon.name.indexOf(action.filter.searchTerm) > -1)
    };

  default:
    return state;
  }
}
