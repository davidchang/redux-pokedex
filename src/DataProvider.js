import React from 'react';
import Pokemon from './pokemon';
import App from './App.js';
import createReactContext from 'create-react-context';

const DEFAULT_STATE = {
  caughtPokemon: [],
  allPokemon: Pokemon,
  searchTerm: '',
};

export const ThemeContext = createReactContext(DEFAULT_STATE);

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
      <ThemeContext.Provider
        value={{
          ...this.state,
          searchTermChanged: this.searchTermChanged,
          markCaught: this.markCaught,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
