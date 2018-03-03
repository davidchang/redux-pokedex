import React from 'react';

function App({
  caughtPokemon,
  markCaught,
  pokemon,
  searchTerm,
  searchTermChanged,
}) {
  return (
    <section>
      <h1>Pokedex in React state</h1>

      <form>
        <div>
          <input
            style={{ width: '100%' }}
            type="text"
            name="search"
            placeholder="Search Pokedex"
            value={searchTerm}
            onChange={e => searchTermChanged(e.target.value)}
          />
        </div>
      </form>

      <table style={{ width: '100%' }}>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th>Name</th>
            <th>Type</th>
            <th>Stage</th>
            <th>Species</th>
            <th>Caught?</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map(curPokemon => (
            <tr key={curPokemon.name}>
              <td>{curPokemon.name}</td>
              <td>{curPokemon.type}</td>
              <td>{curPokemon.stage}</td>
              <td>{curPokemon.species}</td>
              <td>
                {caughtPokemon.includes(curPokemon.name) ? (
                  'Caught!'
                ) : (
                  <button
                    type="button"
                    onClick={() => markCaught(curPokemon.name)}
                  >
                    Catch
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default App;
