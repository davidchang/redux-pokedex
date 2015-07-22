import React, { Component, PropTypes } from 'react';
import PokemonItem from './PokemonItem';

export default class PokemonList extends Component {
  static propTypes = {
    pokemon: PropTypes.array.isRequired,
    caughtPokemon: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const {pokemon, caughtPokemon, actions} = this.props;

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Stage</th>
            <th>Species</th>
            <th>Caught?</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map(pokemonObject =>
            <PokemonItem
              key={pokemonObject.name}
              pokemon={pokemonObject}
              caught={caughtPokemon.indexOf(pokemonObject.name) > -1}
              actions={actions} />
          )}
        </tbody>
      </table>
    );
  }
}
