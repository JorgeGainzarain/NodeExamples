// Asynchronous function that takes time and uses a callback to return the result
function performAsyncOperation(callback) {
    console.log('Text1...');

    // Simulate an asynchronous operation with setTimeout
    setTimeout(() => {
        console.log('Text2...');
        callback('Text3...');
    }, 2000); // Simulate that the operation takes 2 seconds
}

// Call the async operation with a callback to process the result
performAsyncOperation((result) => {
    console.log('Callback: Received result ->', result);
});

console.log('Text4...');
