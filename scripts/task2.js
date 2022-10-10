/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = "Ashley Steed";
const nameElement = document.querySelector("#name");

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
nameElement.innerHTML = myName;

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = new Date().getFullYear();
const yearElement = document.querySelector("#year")

// Step 4: place the value of the current year variable into the HTML file
yearElement.innerHTML = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let picture = "images/IMG_6517be.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src", picture);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favFoods = ["Chocolate", " Tacos", " Pizza"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").innerHTML = favFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
let newFavFood = "chicken salad";

// Step 4: add the variable holding another favorite food to the favorite food array
favFoods.push(newFavFood);

// Step 5: repeat Step 2
document.querySelector("#food").innerHTML = favFoods;

// Step 6: remove the first element in the favorite foods array
favFoods.shift();

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = favFoods;

// Step 8: remove the last element in the favorite foods array
favFoods.pop();

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = favFoods;


