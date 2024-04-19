function summarizeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    return "you ordered a sandwich with ".concat(ingredients.join(','), ".");
}
// Example usage
console.log(summarizeSandwich('ham', 'cheese', 'lettuce'));
// Output: You ordered a sandwich with ham, cheese, lettuce.
console.log(summarizeSandwich('turkey', 'bacon', 'avocado', 'tomato'));
// Output: You ordered a sandwich with turkey, bacon, avocado, tomato.
