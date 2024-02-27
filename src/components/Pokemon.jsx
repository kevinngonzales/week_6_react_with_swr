import { useRequest } from "../hooks/useRequest";

export function Pokemon(pokemon) {
  // destructure name from the pokemon.pokemon object
  const { name, sprite, type } = pokemon.pokemon;
  const { data, error } = useRequest("/pokemon", name);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <div>{error}: There was an error with getting data</div>;
  }

  return (
    <>
      {data && (
        <div className="card">
          <span className="card-id">#{data.id}</span>
          <img
            className="card-sprite"
            src={data.sprites.front_default}
            alt={name}
          />
          <h2 className="card-name">{name}</h2>
          <span className="card-details">
            <h3>
              <i>Type</i>
            </h3>
            <ul className="types-list">
              {data.types.map((poke) => (
                <li key={poke.type.name}>{poke.type.name.toUpperCase()}</li>
              ))}
            </ul>
          </span>
        </div>
      )}
    </>
  );
}


// Inside the curly brackets `{}` we are using JSX to lay the grounds with JavaScript to check if `data` is not empty or `null` . If `data` is successfully received, we can create the HTML for our Pokemon details, with some JavaScript sprinkled in. If not, we will run the `ErrowHandling` function and render based on what sort of state our data is in.

// In another way, it is like we are typing `if (data != undefined) render(....) else ErrorHandling()`

// The double-ampersands `&&` allows us to check the condition of `data` AND render our JSX elements

// Important: Notice that there are parentheses `()` right after the  ampersands `&&` . The parentheses are what indicates to JSX that there will be JSX elements rendered at all, so if those are missing, you may experience errors

// The first `div` is the parent container to all the Pokemon details. We will use it in styling to separate each Pokemon from the other
 

// `[data.id](http://data.id)` will hold the first bit of Pokemon information, including the Pokemon’s `id` within the Pokedex…I mean, the Pokemon API.

// Following is an `img` tag with a `src`  pointing at `data.sprites.front_default`

// This is a property we are able to access when we first request the Pokemon’s `name`. Inside the `pokemon` object is a property called `sprites` and it has multiple perspectives of the Pokemon’s appearance.
// `alt` is an accessibility tag to describe what the `img` element contains. For now, we will use the Pokemon’s `name`

// Then we have the Pokemon’s `name`

// Inside the `ul` is more JavaScript allowing us to iterate over the `data` object we’ve received, and more specifically, we are accessing the `types` property inside that object, listing them out using an `li` and formatting them using `toUpperCase()`
