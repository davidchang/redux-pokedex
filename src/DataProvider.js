import React, { createContext } from 'react';
import Pokemon from './pokemon';

const DEFAULT_STATE = {
  caughtPokemon: [],
  allPokemon: Pokemon,
  searchTerm: '',
};

const { Provider, Consumer } = createContext(DEFAULT_STATE);

export const DataConsumer = Consumer;

export default class DataProvider extends React.Component {
  state = DEFAULT_STATE;

  searchTermChanged = searchTerm => {
    this.setState({ searchTerm });
  };

  markCaught = newlyCaughtPokemon => {
    this.setState({
      caughtPokemon: [...this.state.caughtPokemon, newlyCaughtPokemon],
    });
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          searchTermChanged: this.searchTermChanged,
          markCaught: this.markCaught,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
