const test = console.log;

const dontBodyShameMe = document.querySelector("body");
const mainSection = document.querySelector("main");
const headingOne = document.querySelector("h1");
const newForm = document.getElementById("myForm");
const submit = document.getElementById("submitBtn");
// const reset = document.getElementById("resetBtn");
const allFormInputs = document.querySelectorAll("#stockForm input");
const unorderedList = document.querySelector("ul");
const getTrainerName = document.getElementById("playername");
const getLevel = document.getElementById("level");
const getQR = document.getElementById("imageUrl");

const friendList = document.getElementById("friendList");
const inventList = document.getElementById("inventListSect");


document.getElementById("myForm").addEventListener("submit", (event) => {

    event.preventDefault();

    fetch("https://pokeapi.co/api/v2/type")
        .then(response => response.json())
        .then(data => {
            const fetchedTypes = data.results;

            fetchedTypes.forEach(type => {
                fetch(type.url)
                    .then(response => response.json())
                    .then(typeData => {
                        const typeName = typeData.name;
                        const damage = typeData.damage_relations;
                        const strengths = damage.double_damage_to.map(item => item.name);
                        const weaknesses = damage.double_damage_from.map(item => item.name)
                        const counters = {
                            strengths, weaknesses
                        };
                        console.log(`Counters for ${type.name}`)
                        console.log(counters)

                        displayCard(typeName, counters);
                    })
                    .catch((error) => test(error));
            });
        }).catch((error) => test(error));
});

function displayCard(typeName, counters) {
    const cardSection = document.createElement("article");
    cardSection.classList.add("card");

    const h2 = document.createElement("h2");
    h2.textContent = typeName;

    const strengthsH3 = document.createElement("h3");
    strengthsH3.textContent = "Strengths";

    const strengthsList = document.createElement("ul");
    counters.strengths.forEach(strength => {
        const strengthItem = document.createElement("li");
        strengthItem.textContent = strength;
        strengthsList.appendChild(strengthItem);
    })
    const weaknessesH3 = document.createElement("h3");
    weaknessesH3.textContent = "Weaknesses";
    const weaknessesList = document.createElement("ul");
    counters.weaknesses.forEach(weakness => {
        const weaknessItem = document.createElement("li");
        weaknessItem.textContent = weakness;
        weaknessesList.appendChild(weaknessItem);
    });

    cardSection.append(h2, strengthsH3, strengthsList, weaknessesH3, weaknessesList);
    mainSection.append(cardSection);
}




const select_teamname = document.querySelector("#teamname");
select_teamname.addEventListener("change", (event) => {

    const teamChosen = document.getElementById("teamname").value;
    const cardContainer = document.getElementById("card_js")

    if (teamChosen === "No Team") { document.getElementById("teamname").style.backgroundImage = "url('Assets/selectateam.jpeg')"; }
    else if (teamChosen === "Instinct") { document.getElementById("teamname").style.backgroundImage = "url('Assets/Instinct.png')"; }
    else if (teamChosen === "Mystic") { document.getElementById("teamname").style.backgroundImage = "url('Assets/Mystic.PNG')"; }
    else if (teamChosen === "Valor") { document.getElementById("teamname").style.backgroundImage = "url('Assets/Valor.PNG')"; }

});





//Positioning Nav menu li by ID

// const getHome = document.getElementById("home");
// const getPokeCtr = document.getElementById("pokectr");
// const getPokeMart = document.getElementById("pokemart");
// const getPokeLounge = document.getElementById("pokelounge");

// getHome.style.left = "146px";
// getHome.style.top = "46px";



const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const playerName = document.getElementById("playername").value;
    const level = document.getElementById("level").value;
    const teamName = document.getElementById("teamname").value;
    const imageUrl = getSelectedTeamImage(teamName);

    createBorderedImage(playerName, level, teamName, imageUrl);
});

function getSelectedTeamImage(teamName) {
    let imageUrl = "";
    if (teamName === "Instinct") {
        imageUrl = "Assets/instinct_image.png";
    } else if (teamName === "Mystic") {
        imageUrl = "Assets/mystic_image.png";
    } else if (teamName === "Valor") {
        imageUrl = "Assets/valor_image.png";
    }
    return imageUrl;
}

function createBorderedImage(playerName, level, teamName, imageUrl) {
    const cardContainer = document.getElementById("card_js");
    cardContainer.innerHTML = ""; // Clear any existing content

    const borderedImage = document.createElement("div");
    borderedImage.classList.add("bordered-image");

    const image = document.createElement("img");
    image.src = imageUrl;
    borderedImage.appendChild(image);

    const playerNameForCard = document.createElement("p");
    playerNameForCard.textContent = "Player Name: " + playerName;
    borderedImage.appendChild(playerNameForCard);

    const levelForCard = document.createElement("p");
    levelForCard.textContent = "Level: " + level;
    borderedImage.appendChild(levelForCard);

    const teamNameForCard = document.createElement("p");
    teamNameForCard.textContent = "Team: " + teamName;
    borderedImage.appendChild(teamNameForCard);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
        cardContainer.innerHTML = "";
    });

    borderedImage.appendChild(removeButton);
    cardContainer.appendChild(borderedImage);
}


function resetData() {
    const cardTitle = document.querySelector("#card_js .title_on_card");
    cardTitle.textContent = "";
}




