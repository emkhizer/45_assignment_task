"use strict";
let guests = ["Minhaj", "Shery", "Hamza", "Jawad"];
let unableToAttend = "Jawad";
console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the guest
let newGuest = "Asad";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
