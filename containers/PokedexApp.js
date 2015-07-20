import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import MainSection from '../components/MainSection';
import * as PokemonActions from '../actions/PokemonActions';

export default class PokedexApp extends Component {
  render() {
    return (
      <Connector select={state => ({ pokemon: state.pokemon })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ pokemon, dispatch }) {
    const actions = bindActionCreators(PokemonActions, dispatch);
    return (
      <div>
        <MainSection pokemon={pokemon} actions={actions} />
      </div>
    );
  }
}
