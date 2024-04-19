"use strict";
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
function displayMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
let magicians = ["Harry Potter", "Hermione Granger", "Ron Weasley"];
make_great(magicians); // Modifies the original array
displayMagicians(magicians); // Shows modified names
