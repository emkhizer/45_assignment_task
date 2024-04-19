let guests: string = ["Minhaj","Arham","Aslam","Abrar","Kamran"];
console.log("Great news! I found a bigger dinner table!");

//Add More Guests

guests.unshift("Asad"); //add asad in begining
guests.splice(guests.length / 2,0,  "Raza"); // add raza in middle
guests.push("Shery"); //add shery at the end

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

