/* fetch => Function used for making HTTP requests to fetch resources.
            (JSON style data, images, files)
            Simplifies asynchronous data fetching in JS and
            used for interacting with APIs to retrieve and send
            data asynchronously over the web.
            fetch(url, {options})
*/


fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));