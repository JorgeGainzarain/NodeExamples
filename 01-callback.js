// Asynchronous function that takes time and uses a callback to return the result
function performAsyncOperation(callback) {
    console.log('Starting async operation...');

    // Simulate an asynchronous operation with setTimeout
    setTimeout(() => {
        console.log('Async operation completed.');
        callback('Result of the operation');
    }, 2000); // Simulate that the operation takes 2 seconds
}

// Call the async operation with a callback to process the result
performAsyncOperation((result) => {
    console.log('Callback: Received result ->', result);
});

console.log('This log runs after calling performAsyncOperation but before the async operation completes.');
