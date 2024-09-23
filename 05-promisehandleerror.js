// Simulate an asynchronous operation that returns a promise
function asyncOperation1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Operation 1 completed.');
            resolve('Result of operation 1');
        }, 1000); // Simulate that the operation takes 1 second
    });
}

function asyncOperation2(previousResult) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Operation 2 failed.');
            reject('Error in operation 2'); // Simulate a failure in the second operation
        }, 1000); // Simulate that the operation takes 1 second
    });
}

function asyncOperation3(previousResult) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Operation 3 completed.');
            resolve(`${previousResult}, Result of operation 3`);
        }, 1000); // Simulate that the operation takes 1 second
    });
}

// Chain the promises with error handling
asyncOperation1()
    .then(result1 => {
        console.log('Received:', result1);
        return asyncOperation2(result1); // This will fail
    })
    .then(result2 => {
        console.log('Received:', result2);
        return asyncOperation3(result2);
    })
    .then(result3 => {
        console.log('Final result:', result3);
    })
    .catch(error => {
        console.error('Caught an error:', error);
    });

console.log('This log runs before any of the async operations complete.');
