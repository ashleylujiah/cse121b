const doggyElement = document.querySelector("#doggies");
let doggies = [];
let germanShepherdDoggies = [];
let labradorDoggies = [];
let bassetHoundDoggies = [];
let havaneseDoggies = [];
/* let huskyDoggies = [];
let malteseDoggies = [];
let pitbullDoggies = [];
let goldenRetrieverDoggies = [];
let miniatureSchnauzerDoggies = [];
let wheatenTerrierDoggies = []; */

function displayDoggies() {
    doggies.forEach(doggy => {
        const doggyArticle = document.createElement("article");
        const doggyBreedH3 = document.createElement("h3");
        const doggyImage = document.createElement("#img");
        doggyImage.setAttribute("src", sortBy(breed));
        doggyElement.append(doggyArticle);
        doggyElement.append(doggyBreedH3);
        doggyElement.append(doggyImage);
    });
};


async function getGermanShepherdDoggies() {
    const response = await fetch("https://dog.ceo/api/breed/Germanshepherd/images/random");
    germanShepherdDoggies = await response.json();
    displayDoggies(germanShepherdDoggies);
};

async function getLabradorDoggies() {
    const response = await fetch("https://dog.ceo/api/breed/Labrador/images/random");
    labradorDoggies = await response.json();
    displayDoggies(labradorDoggies);
};

async function getBassetHoundDoggies() {
    const response = await fetch("https://dog.ceo/api/breed/Bassethound/images/random");
    bassetHoundDoggies = await response.json();
    displayDoggies(bassetHoundDoggies);
};

async function getHavaneseDoggies() {
    const response = await fetch("https://dog.ceo/api/breed/Havanese/images/random");
    havaneseDoggies = await response.json();
    displayDoggies(havaneseDoggies);
};


function reset() {
    document.querySelector("#doggies").textContent = ""
};

let breed = "";
function sortBy(breed) {
    reset();
    const filter = document.querySelector("#whichBreed").option;
    switch(filter) {
        case "German Shepherd":
            displayDoggies(germanShepherd);
            break;
        case "Labrador":
            displayDoggies(labrador);
            break;
        case "Basset Hound":
            displayDoggies(bassetHound);
            break;
        case "Havanese":
            displayDoggies(havanese);
            break;        
    };
};

document.querySelector("#whichBreed").addEventListener("change", () => {sortBy(breed)});

/*https://dog.ceo/api/breed/Germanshepherd/images/random*/;
