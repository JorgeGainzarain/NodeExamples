// Simulate an asynchronous operation that takes time
function asyncOperation1(callback) {
    setTimeout(() => {
        console.log('Operation 1 completed.');
        callback();
    }, 1000); // Simulate that the operation takes 1 second
}

function asyncOperation2(callback) {
    setTimeout(() => {
        console.log('Operation 2 completed.');
        callback();
    }, 1000); // Simulate that the operation takes 1 second
}

function asyncOperation3(callback) {
    setTimeout(() => {
        console.log('Operation 3 completed.');
        callback();
    }, 1000); // Simulate that the operation takes 1 second
}

// Demonstrating callback hell by nesting asynchronous operations
asyncOperation1(() => {
    console.log('Starting operation 2...');
    asyncOperation2(() => {
        console.log('Starting operation 3...');
        asyncOperation3(() => {
            console.log('All operations completed.');
        });
    });
});

console.log('This log appears before any of the async operations complete.');
