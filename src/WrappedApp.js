import React from 'react';
import Pokemon from './pokemon';
import App from './App.js';

export default class WrappedApp extends React.Component {
  state = {
    caughtPokemon: [],
    pokemon: Pokemon,
    searchTerm: '',
  };

  searchTermChanged = searchTerm => {
    this.setState({ searchTerm });
  };

  markCaught = newlyCaughtPokemon => {
    this.setState({
      caughtPokemon: [...this.state.caughtPokemon, newlyCaughtPokemon],
    });
  };

  filter(pokemon, searchTerm) {
    return searchTerm
      ? Pokemon.filter(
          pokemon =>
            pokemon.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1,
        )
      : Pokemon;
  }

  render() {
    const { caughtPokemon, pokemon, searchTerm } = this.state;

    return (
      <App
        caughtPokemon={caughtPokemon}
        pokemon={this.filter(pokemon, searchTerm)}
        searchTerm={searchTerm}
        markCaught={this.markCaught}
        searchTermChanged={this.searchTermChanged}
      />
    );
  }
}
