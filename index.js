fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response => response.json())
    .then((JSONresponse) => {
        console.log(JSONresponse)
        const fetchedPokemon = JSONresponse
    })
    .catch((err) => {
        console.log(err)
    })