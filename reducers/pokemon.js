import { SEARCH_INPUT_CHANGED, MARK_CAUGHT } from '../constants/ActionTypes';
import { Pokemon } from '../constants/Pokemon';

const initialState = {
  pokemon : Pokemon,
  searchTerm : '',
  caughtPokemon : []
};

export default function pokemon(state = initialState, action) {

  var doFilter = (searchTerm=state.searchTerm, filters=state.filterOptions) => {
    var filtered = Pokemon;
    if (searchTerm) {
      filtered = Pokemon.filter(pokemon => pokemon.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    }

    return filtered;
  };

  switch (action.type) {
  case SEARCH_INPUT_CHANGED:
    return {
      ...state,
      searchTerm : action.searchTerm,
      pokemon : doFilter(action.searchTerm)
    };

  case MARK_CAUGHT:

    return {
      ...state,
      caughtPokemon : [
        ...state.caughtPokemon,
        action.name
      ]
    };

  default:
    return state;
  }
}
