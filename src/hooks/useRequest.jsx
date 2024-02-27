import useSWR from "swr";

// store API url in variable
const baseUrl = 'https://pokeapi.co/api/v2';


export function useRequest(path, name) {
    if (!path) {
        throw new Error('Path is required')
    }
    
    const url = name ? baseUrl + path + '/' + name + `?limit=20&offset=20` : baseUrl + path
    // We use the useSWR hook to fetch the data based on the key
    // that is provided as well as the fetcher function
    // The key with useSWR is the url that you want to fetch from.
    // useSWR does use caching as well.
    // The url will be the key in useSWR's cache
    const { data, error } = useSWR(url)
    
    return { data, error }
}

// Custom Hook Function Explanation
//  The code checks if the **`path`** parameter is provided. If not, it throws an error indicating that the path is required.
 

//  Based on the provided **`path`** and **`name`**, the hook constructs a URL to fetch data from the PokeAPI.

// If **`name`** is provided, it appends it to the **`path`** along with query parameters (**`limit`** and **`offset`**) to fetch paginated data.

// The hook uses **`useSWR`** to fetch data from the constructed URL.

// **`useSWR`** takes the URL as its argument and returns an object containing **`data`** and **`error`**.

// **`data`** represents the fetched data, while **`error`** holds any error encountered during the fetching process.

// The hook returns the **`data`** and **`error`** obtained from **`useSWR`**.