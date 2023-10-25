let characterList = [];

const displayCharacterInfo = (characters) => {
    const swapi = document.querySelector("#swapi");
    characterList.forEach((character) => {
        const characterInfo = document.createElement("p");
        const characterName = character.name;
        const characterGender = character.gender;
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
    displayCharacterInfo();
};

function reset() {
    document.querySelector("#swapi").innerHTML = ""
};

function sortBy(characterList) {
    reset();
    const filter = document.querySelector("#whichCharacter").value;
    switch(filter) {
        case "Luke Skywalker":
            displayCharacterInfo(characterList.filter(character => {
                return character.name.includes("Luke Skywalker");
            }));
            break;
        case "C-3PO":
            displayCharacter(characterList.filter(character => {
                return character.name.includes("C-3PO");
            }));
            break;
        case "R2-D2":
            displayCharacter(characterList.filter(character => {
                return character.name==="R2-D2";
            }));
            break;
        case "Darth Vader":
            displayCharacter(characterList.filter(character => {
                return character.name==="Darth Vader"
            }));
            break;

    };
};

getCharacters();

document.querySelector("#whichCharacter").addEventListener("change", displayCharacterInfo);
