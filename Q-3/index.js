var personName = "Muhammad Khizer";
var lowercaseName = personName.toLowerCase();
var uppercaseName = personName.toUpperCase();
var titlecaseName = personName.replace(/b\w/g, function (char) { return char.toUpperCase(); });
console.log(lowercaseName);
console.log(uppercaseName);
console.log(titlecaseName);
