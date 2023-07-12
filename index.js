const select_teamname = document.querySelector("#teamname");
select_teamname.eventListener("change"), (event) => {

    teamChosen = document.getElementById("teamname");

    if (teamChosen = none) { document.getElementById("teamname").style.backgroundColor = "red"; }
    else if (teamChosen === "Instinct") { document.getElementById("teamname").style.backgroundImage = "url('Assets/4024146-middle.png')"; }
    else if (teamChosen === "Mystic") { document.getElementById("teamname").style.backgroundImage = "url('Assets/4024146-middle.png')"; }
    else if (teamChosen === "Valor") { document.getElementById("teamname").style.backgroundImage = "url('Assets/4024146-middle.png')"; }
    else { document.getElementById("bgi").style.backgroundImage = "url('Assets/selectateam.jpeg')"; }
}

const options = {
    method: 'Get',
    headers: {
        'X-RapidAPI-Key': '740ed91875msh031c2a94c5bac10p1ea857jsnc595262bf611',
        'X-RapidAPI-Host': 'pokemon-go1.p.rapidapi.com'
    }

};

fetch("https://pokemon-go1.p.rapidapi.com/type_effectiveness.json")
    .then(response => response.json())
    .then((JSONresponse) => {
        console.log(JSONresponse)
        const fetchedPokemon = JSONresponse

        console.log(fetchedPokemon)
    })
    .catch((err) => {
        console.log(err)
    })


//Positioning Nav menu li by ID

// const getHome = document.getElementById("home");
// const getPokeCtr = document.getElementById("pokectr");
// const getPokeMart = document.getElementById("pokemart");
// const getPokeLounge = document.getElementById("pokelounge");

// getHome.style.left = "146px";
// getHome.style.top = "46px";



function displayCard() {




}


