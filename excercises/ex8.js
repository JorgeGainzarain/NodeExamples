function downloadFile(filename) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`FIle ${filename} downloaded successfully!`);
        }, 1000);
    })
}

async function downloadMultipleFiles(files) {
    for (let file of files) {
        let fileData = await downloadFile(file);
        console.log(fileData);
    }
}

downloadMultipleFiles(['File 1', 'File 2', 'File 3'])