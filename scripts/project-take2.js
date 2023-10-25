const doggyElement = document.querySelector("#doggies");
let doggies = [];
let germanShepherdDoggies = [];
let labradorDoggies = [];
let bassetHoundDoggies = [];
let havaneseDoggies = [];

const displayDoggies = (doggies) => {
    console.log(doggies);
    doggies.forEach((doggy) => {
        const doggyArticle = document.createElement("article");
        const doggyBreedH3 = document.createElement("h3");
        const doggyImage = document.createElement("img");
        doggyImage.setAttribute("src", doggy.message);
        doggyArticle.append(doggyBreedH3);
        doggyArticle.append(doggyImage);
        doggyElement.append(doggyArticle);
        
    });
};

async function getDoggies() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    doggies = await response.json();
    displayDoggies(doggies);
};

function reset() {
    document.querySelector("#doggies").innerHTML = ""
};

getDoggies();

/*fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => console.log(data));*/