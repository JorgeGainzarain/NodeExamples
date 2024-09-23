// Simulate an asynchronous operation that returns a promise
function asyncOperation() {
    return new Promise((resolve, reject) => {
        console.log('Starting async operation...');

        // Simulate success or failure with a random outcome
        setTimeout(() => {
            const success = Math.random() > 0.5; // 50% chance of success
            if (success) {
                resolve('Operation successful');
            } else {
                reject('Operation failed');
            }
        }, 2000); // Simulate that the operation takes 2 seconds
    });
}

// Call the asyncOperation and handle the result using .then() and .catch()
asyncOperation()
    .then((result) => {
        console.log('Success:', result);
    })
    .catch((error) => {
        console.log('Error:', error);
    });

console.log('This log runs before the async operation completes.');
