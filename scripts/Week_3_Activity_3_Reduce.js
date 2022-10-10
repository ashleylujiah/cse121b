const grades = ["A", "B", "A"];
function convertToGPA(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    }
    if (grade === "B") {
        points = 3;
    }
    return points;
}

const gpaPoints = grades.map(convertToGPA);
// let pointsTotal = gpaPoints.reduce(function (total, item) {
//     return total + item;
// });
// let gpa = pointsTotal / gpaPoints.length;

// Simplify!
// const pointsTotal = gpaPoints.reduce((total, item) => total + item);
// const gpa = pointsTotal / gpaPoints.length;

// Simplify even more!
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;