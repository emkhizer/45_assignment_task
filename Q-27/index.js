"use strict";
let alien_color;
alien_color = "green";
earnCoins(alien_color);
alien_color = "yellow";
earnCoins(alien_color);
alien_color = "red";
earnCoins(alien_color);
function earnCoins(alien_color) {
    if (alien_color == "green") {
        console.log("Congratulations, you earned 5 coins.");
    }
    else if (alien_color == "yellow") {
        console.log("Congratulations, you earned 10 coins.");
    }
    else if (alien_color == "red") {
        console.log("Congratulations, you earned 15 coins.");
    }
}
