import React from 'react';
import { ThemeContext } from './DataProvider';

export default class DataConsumer extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <ThemeContext.Consumer>
        {({
          caughtPokemon,
          allPokemon,
          searchTerm,
          searchTermChanged,
          markCaught,
        }) => {
          const pokemon = searchTerm
            ? allPokemon.filter(
                pokemon =>
                  pokemon.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                  -1,
              )
            : allPokemon;

          return React.Children.map(children, child =>
            React.cloneElement(child, {
              caughtPokemon,
              pokemon,
              searchTerm,
              searchTermChanged,
              markCaught,
            }),
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
