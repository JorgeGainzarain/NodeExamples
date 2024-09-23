function delayedTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task Completed");
        }, 2000)
    });
}

async function printTask() {
    let result = await delayedTask();
    console.log(result);
}

printTask();
