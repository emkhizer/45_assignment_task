function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

function displayMagicians(magicians: string[]) {
    magicians.forEach(function(magician) {
        console.log(magician);
    });
}

let magicians: string[] = ["Harry Potter", "Hermione Granger", "Ron Weasley"];

make_great(magicians); // Modifies the original array
displayMagicians(magicians); // Shows modified names
