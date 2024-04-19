"use strict";
let countries = [
    {
        name: "USA",
        capital: "Washington D.C",
        language: "English",
    },
    {
        name: "Canada",
        capital: "Ottawa",
        language: "English, French"
    }
];
console.log("list of countries:");
for (let country of countries) {
    console.log(`country: ${country.name}, capital: ${country.capital}, language: ${country.language}`);
}
/*// Define an array of country objects
let countries: { name: string, capital: string, population: number, language: string }[] = [
    {
        name: "USA",
        capital: "Washington D.C.",
        population: 331449281,
        language: "English"
    },
    {
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        language: "English, French"
    },
    {
        name: "Japan",
        capital: "Tokyo",
        population: 126476461,
        language: "Japanese"
    },
    // Add more country objects as needed
];

// Output the list of countries
console.log("List of countries:");
for (let country of countries) {
    console.log(`Country: ${country.name}, Capital: ${country.capital}, Population: ${country.population}, Language: ${country.language}`);
}*/ 
