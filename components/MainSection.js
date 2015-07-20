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
        <div>
          <input
            type="text"
            name="search"
            placeholder="Search Pokedex"
            value={pokemon.searchTerm}
            onChange={e => actions.searchTermChanged(e.target.value)} />
        </div>

        <div>
          {pokemon.filterOptions.type.map(type => (
            <span key={type.label}>
              <input type="checkbox" id={type.label} checked={type.checked} onChange={e => actions.toggleFilter('type', type.label)} />
              <label htmlFor={type.label}>{type.label}</label>
            </span>
          ))}
        </div>

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
              <PokemonItem key={pokemon.name} pokemon={pokemon} actions={actions} />
            )}
          </tbody>
        </table>
      </section>
    );
  }

}
