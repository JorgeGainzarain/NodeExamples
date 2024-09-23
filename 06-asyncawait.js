// Simulate an asynchronous operation that returns a promise
function asyncOperation1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Operation 1 completed.');
            resolve('Result of operation 1');
        }, 1000); // Simulate that the operation takes 1 second
    });
}

function asyncOperation2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Operation 2 completed.');
            resolve('Result of operation 2');
        }, 1000); // Simulate that the operation takes 1 second
    });
}

// Use async/await to handle asynchronous operations
async function runAsyncOperations() {
    console.log('Starting async operations...');

    try {
        // Await the completion of the first async operation
        const result1 = await asyncOperation1();
        console.log('Received:', result1);

        // Await the completion of the second async operation
        const result2 = await asyncOperation2();
        console.log('Received:', result2);

        console.log('All operations completed.');
    } catch (error) {
        console.error('Caught an error:', error);
    }
}

runAsyncOperations();

console.log('This log runs before any of the async operations complete.');
