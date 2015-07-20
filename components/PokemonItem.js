import React, { Component, PropTypes } from 'react';

export default class PokemonItem extends Component {
  static propTypes = {
    pokemon: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const {pokemon, actions} = this.props;

    return (
      <tr>
        <td>{pokemon.name}</td>
        <td>{pokemon.type}</td>
        <td>{pokemon.stage}</td>
        <td>{pokemon.species}</td>
        <td>
          {pokemon.caught ?
            'Caught!' :
            <button onClick={() => actions.markCaught(pokemon.name)}>Catch</button>
          }
        </td>
      </tr>
    );
  }
}
