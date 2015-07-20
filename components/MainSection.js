import React, { Component, PropTypes } from 'react';
import PokemonItem from './PokemonItem';

export default class MainSection extends Component {
  static propTypes = {
    pokemon: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { pokemon, actions } = this.props;

    return (
      <section className='main'>
        <table className='pokemon-list'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Stage</th>
              <th>Species</th>
              <th>Caught</th>
            </tr>
          </thead>
          <tbody>
            {pokemon.pokemon.map(pokemon =>
              <PokemonItem key={pokemon.name} pokemon={pokemon} />
            )}
          </tbody>
        </table>
      </section>
    );
  }

}
