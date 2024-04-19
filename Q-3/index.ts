let personName: string = "Muhammad Khizer";
let lowercaseName: string = personName.toLowerCase();
let uppercaseName: string = personName.toUpperCase();
let titlecaseName: string = personName.replace(/b\w/g, (char) => char.toUpperCase());
console.log(lowercaseName);
console.log(uppercaseName);
console.log(titlecaseName);