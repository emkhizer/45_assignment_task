// Array of usernames
const usernames: string[] = ["john", "jane", "admin", "alice"];

// Loop through each username
for (let username of usernames) {
    // Check if the username is 'admin' and greet accordingly
    if (username === "admin") {
        console.log(`Hello ${username}, welcome back!`);
    } else {
        console.log(`Hello ${username}, nice to see you!`);
    }
}
