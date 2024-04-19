"use strict";
let guests = ["Minhaj", "Arham", "Aslam", "Abrar", "Kamran"];
console.log("Great news! I found a bigger dinner table!");
//Add More Guests
guests.unshift("Asad");
guests.splice(guests.length / 2, 0, "Raza");
guests.push("Shery");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
