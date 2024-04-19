let currentUsers: string[] =["ahmed","jawad","asad","ahsan","isamil"];
let newUsers: string[] =["Ahmed","jawad","Asad","ibtisam","umer"];

newUsers.forEach(newUser => {
    if (currentUsers.some(currentUser => currentUser.toLocaleLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else{
        console.log(`${newUser} is available.`);
    }
}
    
    );