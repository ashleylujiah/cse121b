/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Ashley Steed",
    photo: "images/IMG_6758BW.jpg",
    favoriteFoods: ["Chocolate", "Pizza", "Roasted Vegetables", "Protein Shakes"],
    hobbies: ["Jogging", "Reading", "Cooking", "Watching my kids' activities"],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
    place: "Iowa",
    length: "18 years",
    }   
);

myProfile.placesLived.push(
    {
        place: "Uruguay",
        length: "1.5 years",
    }
);

myProfile.placesLived.push(
    {
        place: "Utah",
        length: "21 years",
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(placesLived => {
    let dt = document.createElement("place");
    dt.textContent = placesLived.place;
    document.querySelector("#places-lived").appendChild(dt);
});

myProfile.placesLived.forEach(placesLived => {
    let dd = document.createElement("length");
    dd.textContent = placesLived.length;
    document.querySelector("#places-lived").appendChild(dd);
});

/*document.querySelector("#places-lived").append("dt","dd");*/


