"use strict";
function cities_country(city, country = "Pakistan") {
    console.log(`${city}, ${country}.`);
}
cities_country("Karachi", "Pakistan");
cities_country("tehran", "iran");
cities_country("Tokyo", "Japan");
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
