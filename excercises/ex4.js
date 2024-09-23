function delayedTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task Completed");
        }, 2000)
    });
}
delayedTask()
    .then((txt) => {
        console.log(txt);
    })
