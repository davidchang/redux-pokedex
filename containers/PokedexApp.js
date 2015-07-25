import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import MainSection from '../components/MainSection';
import * as PokemonActions from '../actions/PokemonActions';

export default class PokedexApp extends Component {
  render() {
    return (
      <Connector select={state => ({ pokemonStore : state.pokemon })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ pokemonStore, dispatch }) {
    const actions = bindActionCreators(PokemonActions, dispatch);
    return (
      <div>
        <MainSection data={pokemonStore} actions={actions} />
      </div>
    );
  }
}
