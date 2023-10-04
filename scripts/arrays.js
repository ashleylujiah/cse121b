const numbers = ["one", "two", "three"];
const numbersHTML = numbers.map(function (number) {
    return <li>`${number}`</li>;
})
document.getElementById("myList").innerHTML = numbersHTML.join();

const steps = ["one", "two", "three"];
const stepsHTML = steps.map(function step {
    return <li>`${step}`</li>;
})
document.getElementById("myList").innerHTML = stepsHTML.join();

const grades = ["A", "B", "A"];
function convertToGradePoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4.0;
    }   else if (grade === "B") {
        points = 3.0;
    }
    return points
}

const gradePoints = grades.map(convertToGradePoints);

const pointsTotal = gradePoints.reduce((total, item) => total + item);
const GPA = pointsTotal / gradePoints.length;

const gpaPoints = grades.map(convertToGradePoints);
const GPA = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const longFruits = fruits.filter((fruit) => fruit.length > 6);
    
const values = [12, 34, 21, 54];
let luckyNumber = 21;

const luckyNumberInArray = values.indexOf(21);

