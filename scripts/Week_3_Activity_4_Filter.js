const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const longNameFruits = fruits.filter(function (fruit) {
    return fruit.length > 6;
});

// Simplify
// const longNameFruits = fruits.filter((fruit) => word.length > 6);