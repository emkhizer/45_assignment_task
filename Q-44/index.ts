function summarizeSandwich(...ingredients: string[]): string{
    return `you ordered a sandwich with ${ingredients.join(',')}.`;
}

// Example usage
console.log(summarizeSandwich('ham', 'cheese', 'lettuce')); 
// Output: You ordered a sandwich with ham, cheese, lettuce.
console.log(summarizeSandwich('turkey', 'bacon', 'avocado', 'tomato')); 
// Output: You ordered a sandwich with turkey, bacon, avocado, tomato.