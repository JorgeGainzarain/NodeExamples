function downloadFile(filename) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`FIle ${filename} downloaded successfully!`);
        }, 1000);
    })
}

downloadFile('File 1')
    .then((result) => {
        console.log(result)
        return downloadFile('File 2')
    })
    .then((result) => {
        console.log(result);
        return downloadFile('File 3')
    })
    .then((result) => {
        console.log(result);
    })