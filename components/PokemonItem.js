import React, { Component, PropTypes } from 'react';

export default class PokemonItem extends Component {
  static propTypes = {
    pokemon: PropTypes.object.isRequired,
    caught: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const {pokemon, caught, actions} = this.props;

    return (
      <tr className={caught ? 'success' : ''}>
        <td>{pokemon.name}</td>
        <td>{pokemon.type}</td>
        <td>{pokemon.stage}</td>
        <td>{pokemon.species}</td>
        <td>
          {caught ?
            'Caught!' :
            <button
              type="button"
              onClick={() => actions.markCaught(pokemon.name)}
              className="btn btn-primary">
              Catch
            </button>
          }
        </td>
      </tr>
    );
  }
}
