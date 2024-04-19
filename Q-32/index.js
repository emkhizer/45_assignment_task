var currentUsers = ["ahmed", "jawad", "asad", "ahsan", "isamil"];
var newUsers = ["Ahmed", "jawad", "Asad", "ibtisam", "umer"];
newUsers.forEach(function (newUser) {
    if (currentUsers.some(function (currentUser) { return currentUser.toLocaleLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
