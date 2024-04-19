function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("The ".concat(city, " is a part of ").concat(country));
}
describe_city("karachi");
describe_city("islamabad");
describe_city("tokyo", "Japan");
