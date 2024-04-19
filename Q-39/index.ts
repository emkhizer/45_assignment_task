//first way
function cities_country(city: string, country: string = "Pakistan") {
    console.log(`${city}, ${country}.`);
}

cities_country("Karachi","Pakistan");
cities_country("tehran","iran");
cities_country("Tokyo", "Japan");

//2nd way
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));