let characterList = [];

const displayCharacterInfo = (characters) => {
    const swapi = document.querySelector("#swapi");
    reset();
    characters.forEach((character) => {
        const characterInfo = document.createElement("p");
        const characterName = character.name;
        let characterGender = character.gender;
        if (character.gender === "n/a") {
            characterGender = "droid";
        }  else {(characterGender !== "n/a") 
            characterGender === character.gender
        };
        const characterSkinColor = character.skin_color;
        characterInfo.innerHTML = `You chose ${characterName}! ${characterName} is a ${characterSkinColor} ${characterGender}.`;    
        swapi.append(characterInfo);
    });
};

async function getCharacters() {
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();
    characterList = data.results;
    console.log(characterList);
    /*displayCharacterInfo(characterList);*/
    sortBy();
};

function reset() {
    document.querySelector("#swapi").innerHTML = ""
};

function sortBy() {
    reset();
    const filter = document.querySelector("#whichCharacter").value;    
    switch(filter) {
        case "Luke Skywalker":
            displayCharacterInfo(characterList.filter((character) => {
                return character.name.includes("Luke Skywalker");
            }));
            break;
        case "C-3PO":
            displayCharacterInfo(characterList.filter((character) => {
                return character.name.includes("C-3PO");
            }));
            break;
        case "R2-D2":
            displayCharacterInfo(characterList.filter((character) => {
                return character.name==="R2-D2";
            }));
            break;
        case "Darth Vader":
            displayCharacterInfo(characterList.filter((character) => {
                return character.name==="Darth Vader"
            }));
            break;
        case "Leia Organa":
            displayCharacterInfo(characterList.filter((character) => {
                return character.name==="Leia Organa";
            }));
            break;
    swapi.innerHTML = characterList.filter;
    };
};

getCharacters();

document.querySelector("#whichCharacter").addEventListener("change", sortBy);
