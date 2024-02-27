// import image and store in variable
import PokemonLogo from "/images/pokemon.png";
import "./styles/App.css";
import { useRequest } from "./hooks/useRequest";
import { Pokemon } from "./components/Pokemon";
import { AudioPlayer } from "./components/AudioPlayer";


// Destructuring to access properties fetched from the `/pokemon` endpoint

// `isLoading` will check the state of the fetch request (Remember: ‘Pending’, ‘fulfilled’, and ‘rejected’ - fulfilled/rejected fall under ‘settled’)

// `error` occurs if the fetch request is settled as ‘rejected’
// `data` is received when the fetch request is settled as ‘fulfilled’
//  Note: This includes `undefined` values, so it is important to check what data is being received, even if it’s considered successful

function App() {
  const { isLoading, data, error } = useRequest("/pokemon");

  function DisplayPokemon() {
    if (data) {
      return (
        <div className="row">
          {
            // <h2>{result.name}</h2>
            data.results.map((pokemon) => {
              return <Pokemon key={pokemon.name} pokemon={pokemon} />;
            })
          }
        </div>
      );
    }
  }


  // BreakDown:
  // In order to render at all, we need a `return ()`  function with the appropriate JSX inside, if the data has been successfully received

  // The JSX itself will be a `<div></div>` wrapping container

  // Nested in there using curly brackets `{}`, the data has a property called `results`. It is inside that property that all other Pokemon are stored

  // We need to iterate over the `results` object to access individual Pokemon, so we will use the JavaScript `map`method and render each Pokemon as an `<h2> ... </h2>`

  // Important: Each element requires a unique `key` which is why `key` has a value of `pokemon.name`

  function ErrorHandling() {
    if (isLoading) {
      return <div>Loading Pokemon data...</div>;
    }

    if (error) {
      return <div>{error}: There was an error with getting data</div>;
    }
  }

  return (
    <>
      <img className="pokemon-logo" src={PokemonLogo} />
      <AudioPlayer />
      {<DisplayPokemon />} : {<ErrorHandling />}
    </>
  );
}

export default App;
