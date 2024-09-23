function downloadFile(filename) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`FIle ${filename} downloaded successfully!`);
        }, 1000);
    })
}

async function downloadMultipleFiles(files) {
    let results = [];
    for (let file of files) {
        results.push(downloadFile(file));
    }
    Promise.all(results).then ((resultsData) => {
        resultsData.forEach((result) => console.log(result));
    })
}

downloadMultipleFiles(['File 1', 'File 2', 'File 3'])