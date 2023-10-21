/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples"); 

let templeList = [];


/* async displayTemples Function */

const displayTemples = (temples) => {
    console.log("TEMPLE OUTPUT PARAM", templeList);
    templeList.forEach(temple => {
        const templeArticle = document.createElement("article");
        templesElement.append(templeArticle);
        const templeNameH3 = document.createElement("h3");
        console.log("temple", temple);
        templeNameH3.innerText = temple.templeName;
        templesElement.append(templeNameH3);
        const templeImage = document.createElement("img");
        templeImage.setAttribute("src", temple.imageUrl);
        templeImage.setAttribute("alt", temple.location);    
        templesElement.append(templeImage);       
    })
}

/* FROM VIDEO
function outputTemples(templeList) {
    console.log("TEMPLE OUTPUT PARAM", templeList );
    const templeDiv = document.querySelector("#temples")

    templeList.forEach(temple => {
        const templeNameH3 = document.createElement("h3")
        console.log("temple", temple );
        templeNameH3.innerText = temple.templeName
        templeDiv.append(templeNameH3)
        })
    }

/* FROM SELF, FIRST ATTEMPT
const displayTemples = (temples) => {
    temples.forEach(temple => {
        document.createElement("article");
        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;
        let templeImage = document.createElement("img");
        templeImage.src = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
        templeImage.alt = temple.location;
        temples.append(templeName);
        document.querySelector("#article").appendChild(templeImage);
        templesElement.appendChild("#article");
        
    }
        ) */
        



/* async getTemples Function using fetch()*/
async function getTemples() {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
}
/* FROM SELF, FIRST ATTEMPT
const getTemples = async () => { */

/* FROM VIDEO
async function getTempleData() {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    templeList = await response.json() */

    /* FROM SELF, FIRST ATTEMPT
    displayTemples(templeList); */

    /* FROM VIDEO
    console.log("TEMPLE DATA: ", templeList );

    outputTemples(templeList) */


/* reset Function */
/*SECOND ATTEMPT BY SELF/HINT FROM TEACHER
const reset = () => {
    templesElement.textContent = "";
}; */

/* FROM VIDEO */
function reset() {
    document.querySelector("#temples").textContent = ""
} 

/* sortBy Function */
function sortBy(temples) {
    reset();
    const filter = document.querySelector("#sortBy").value;
    switch(filter) {
        case "utah":
            displayTemples(temples.filter(temple => {
                return temple.location.includes("Utah");
            }));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => {
                return !temple.location.includes("Utah");
            }));
            break;
        case "older":
            displayTemples(temples.filter(temple => {
                return temple.dedicated < newDate(1950, 0, 1);
            }));
            break;
        case "all":
            displayTemples(temples);
            break;

    };
};

/*FROM VIDEO
function sortTemples() {
    reset()
    const sortedTemples = templeList.sort(compare)
    console.log("SORTED LIST", sortedTemples);
    outputTemples(sortedTemples)
}

function compare(temple1, temple2) {
    console.log("TEMPLE1", temple1);
    if(temple1.templeName > temple2.templeName) {
        return 1
    }
    if(temple1.templeName < temple2.templeName) {
        return -1
    }
    else{
        return 0
    }
} */


getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });