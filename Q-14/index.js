"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guests = void 0;
let guests = ["Ahmed", "Ismail", "Zaid", "Jawad"];
exports.guests = guests;
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for lunch?`);
});
