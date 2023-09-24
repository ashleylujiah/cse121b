/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Ashley Steed";

let currentYear = new Date().getFullYear();

let profilePicture = "images/IMG_6758BW.jpg";

/* Step 3 - Element Variables */

let nameElement = document.getElementById("name");

let foodElement = document.getElementById("food");

let yearElement = document.querySelector("#year");

let imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = `${currentYear}`;

imageElement.setAttribute("src", `${profilePicture}`);

imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

let favFoods = ["Chocolate","Protein Shakes","Pizza"];

foodElement.innerHTML = favFoods;

let newFavFood = "Chicken Salad";

favFoods.push(newFavFood);

foodElement.innerHTML += `<br>${favFoods}`;

favFoods.shift();

foodElement.innerHTML += `<br>${favFoods}`;

favFoods.pop();

foodElement.innerHTML += `<br>${favFoods}`;











