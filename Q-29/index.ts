// Array of favorite fruits
const favoriteFruits: string[] = ['apple', 'banana', 'orange', 'kiwi', 'strawberry'];

// Function to check if a fruit is included in the favorite fruits array
function checkFavoriteFruit(fruit: string): boolean {
    return favoriteFruits.includes(fruit.toLowerCase());
}

// Example usage
const fruitToCheck = 'banana';
if (checkFavoriteFruit(fruitToCheck)) {
    console.log(`${fruitToCheck} is one of your favorite fruits!`);
} else {
    console.log(`${fruitToCheck} is not one of your favorite fruits.`);
}
