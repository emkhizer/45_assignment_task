"use strict";
function make_car(manufacturer, model, ...option) {
    let car = { manufacturer, model };
    option.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "camry", ["color", "white"], ["sunroof", true], ["year", 2022]));
console.log(make_car("Tesla", "cyber truck", ["color", "silver"], ["sunroof", false], ["year", 2023]));
