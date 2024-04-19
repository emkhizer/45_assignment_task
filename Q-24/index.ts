// Tests evaluating to True

console.log(10 >= 10); // True - 10 is equal to 10
console.log("banana" !== "orange"); // True - strings are different
console.log(20 === 20.0); // True - both numbers are equal numerically
console.log(3 + 4 === 7); // True - 3 plus 4 equals 7
console.log(1 || 0 === 1); // True - logical OR, at least one condition is true

// Tests evaluating to False

console.log(10 < 10); // False - 10 is not less than 10
console.log("banana" === "banana"); // False - strings are identical
console.log(20 !== 20.0); // False - both numbers are equal numerically
console.log(3 + 4 !== 7); // False - 3 plus 4 equals 7
console.log(0 && 1 === 1); // False - logical AND, both conditions must be true
