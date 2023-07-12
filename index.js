const select_teamname = document.querySelector("#teamname");
select_teamname.eventListener("change"), (event) => {

    teamChosen = document.getElementById("teamname");

    if (teamChosen = none) { document.getElementById("teamname").style.backgroundColor = "red"; }
    else if (teamChosen === "Instinct") { document.getElementById("teamname").style.backgroundImage = "url('Assets/4024146-middle.png')"; }
    else if (teamChosen === "Mystic") { document.getElementById("teamname").style.backgroundImage = "url('Assets/4024146-middle.png')"; }
    else if (teamChosen === "Valor") { document.getElementById("teamname").style.backgroundImage = "url('Assets/4024146-middle.png')"; }
    else { document.getElementById("bgi").style.backgroundImage = "url('Assets/selectateam.jpeg')"; }
}

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response => response.json())
    .then((JSONresponse) => {
        console.log(JSONresponse)
        const fetchedPokemon = JSONresponse
    })
    .catch((err) => {
        console.log(err)
    })




function displayCard() {




}


