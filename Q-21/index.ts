let countries: {name: string, capital: string, language: string }[] =[
    {
        name:"USA",
        capital:"Washington D.C",
        language:"English",
    },
    {
        name: "Canada",
        capital: "Ottawa",
        language: "English, French"
    }
]

console.log("list of countries:")
for (let country of countries){
    console.log(`country: ${country.name}, capital: ${country.capital}, language: ${country.language}`);
}