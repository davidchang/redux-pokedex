import { SEARCH_INPUT_CHANGED, TOGGLE_FILTER, MARK_CAUGHT } from '../constants/ActionTypes';
import { Pokemon } from '../constants/Pokemon';

const initialState = {
  pokemon : Pokemon,
  searchTerm : '',
  filterOptions : {
    type : Array.from(new Set(Pokemon.map(pokemon => pokemon.type))).map(type => ({label : type, checked : true})),
    species : Array.from(new Set(Pokemon.map(pokemon => pokemon.species))).map(species => ({label : species, checked : true}))
  }
};

export default function pokemon(state = initialState, action) {

  var doFilter = (searchTerm=state.searchTerm, filters=state.filterOptions) => {
    var filtered = Pokemon;
    if (searchTerm) {
      filtered = Pokemon.filter(pokemon => pokemon.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    }

    filters.type.forEach(type => {
      if (!type.checked) {
        filtered = filtered.filter(pokemon => pokemon.type !== type.label)
      }
    });

    filters.species.forEach(species => {
      if (!species.checked) {
        filtered = filtered.filter(pokemon => pokemon.species !== species.label)
      }
    });

    return filtered;
  };

  switch (action.type) {
  case SEARCH_INPUT_CHANGED:
    return {
      ...state,
      searchTerm : action.searchTerm,
      pokemon : doFilter(action.searchTerm)
    };

  case TOGGLE_FILTER:

    let newFilterOptions = {
      ...state.filterOptions,
      [action.filterType] : state.filterOptions[action.filterType].map(filterObj =>
        filterObj.label === action.filterLabel ?
          { ...filterObj, checked: !filterObj.checked } :
          filterObj
      )
    };

    return {
      ...state,
      filterOptions : newFilterOptions,
      pokemon : doFilter(state.searchTerm, newFilterOptions)
    };

  case MARK_CAUGHT:

    return {
      ...state,
      pokemon : state.pokemon.map(pokemon =>
        pokemon.name === action.name ?
          { ...pokemon, caught: true } :
          pokemon
      )
    };

  default:
    return state;
  }
}
