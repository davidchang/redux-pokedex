import React, { Component, PropTypes } from 'react';

export default class PokemonItem extends Component {
  static propTypes = {
    pokemon: PropTypes.object.isRequired
  };

  render() {
    const {pokemon} = this.props;

    return (
      <tr>
        <td>{pokemon.name}</td>
        <td>{pokemon.type}</td>
        <td>{pokemon.stage}</td>
        <td>{pokemon.species}</td>
        <td>{pokemon.caught ? 'Yes' : 'No'}</td>
      </tr>
    );
  }
}
