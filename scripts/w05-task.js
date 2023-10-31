/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples"); 

let templeList = [];


/* async displayTemples Function */

const displayTemples = (temples) => {
    reset();
    console.log("TEMPLE OUTPUT PARAM", templeList);
    temples.forEach((temple) => {
        const templeArticle = document.createElement("article");       
        const templeNameH3 = document.createElement("h3");
        console.log("temple", temple);
        templeNameH3.innerText = temple.templeName;        
        const templeImage = document.createElement("img");
        templeImage.setAttribute("src", temple.imageUrl);
        templeImage.setAttribute("alt", temple.location); 
        templeArticle.appendChild(templeNameH3);   
        templeArticle.appendChild(templeImage);
        templesElement.appendChild(templeArticle);       
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
    let data = await response.json();
    templeList = data.results;
    sortBy();
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
    document.querySelector("#temples").innerHTML = ""
};

/* sortBy Function */
function sortBy() {
    reset();
    const filter = document.querySelector("#sortBy").value;
    switch(filter) {
        case "utah":
            displayTemples(templeList.filter((temple) => temple.location.includes("Utah")
            ));
            break;
        case "notutah":
            displayTemples(templeList.filter((temple) => !temple.location.includes("Utah")
            ));
            break;
        case "older":
            displayTemples(templeList.filter((temple) => temple.dedicated < new Date(1950, 0, 1)
            ));
            break;
        case "all":
            displayTemples(templeList);
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
document.querySelector("#sortBy").addEventListener("change", sortBy);