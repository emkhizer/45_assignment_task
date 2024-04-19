// Array of usernames
var usernames = ["john", "jane", "admin", "alice"];
// Loop through each username
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    // Check if the username is 'admin' and greet accordingly
    if (username === "admin") {
        console.log("Hello ".concat(username, ", welcome back!"));
    }
    else {
        console.log("Hello ".concat(username, ", nice to see you!"));
    }
}
