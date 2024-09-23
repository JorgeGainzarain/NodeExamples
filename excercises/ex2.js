function processArray(arr=[1,2,3,4,5], callback) {
    callback(arr.map(i => i * 2));
}

// Example usage with a [1,10,20,30,40] array and a log function as callback to show the results
let nums = [1,10,20,30,40]
processArray(nums, (doubledArray) => {
    console.log("Original Array:\t" , nums, "\nNew Array:\t" , doubledArray);
})
