import React from 'react';
import { DataConsumer as ContextConsumer } from './DataProvider';

export default class DataConsumer extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <ContextConsumer>
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
      </ContextConsumer>
    );
  }
}
