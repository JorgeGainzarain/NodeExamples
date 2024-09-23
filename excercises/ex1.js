function timer(seconds, callback) {
    setTimeout(callback, seconds * 1000)
}

// Example usage with 2 seconds and a console.log function
let seconds = 2;
timer(seconds, () => {console.log("Waited for " + seconds + " seconds")})

