let users = [
    {'username': 'user1', 'password': 'pass1'},
    {'username': 'user2', 'password': 'pass2'},
    {'username': 'user3', 'password': 'pass3'}
];



function login(user, password, callback) {
    setTimeout(() => {
        let num = users.findIndex(u => u.username === user && u.password === password);
        if(num === -1) {
            console.log('User', user, 'not found. Please try again.');
        }
        else{
            console.log('User', user, 'logged in successfully.');
            callback(num);
        }
    }, 1000);
}
function getUserData(numUser, callback) {
    setTimeout(() => {
        callback(users[numUser]);
    }, 1000);
}
function displayUserData(userData) {
    setTimeout(() => {
        if(userData) {
            console.log('User Data: \n{\n\tUsername:', userData.username, '\n\tPassword:', userData.password, '\n}');
        }
        else {
            console.log('User not found');
        }
    }, 1000)
}

login('user1', 'pass1', (numUser) => {
    getUserData(numUser, (userData) => {
        displayUserData(userData);
    })
})