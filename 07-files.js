const fs = require('fs/promises');

async function readAndCombineFiles() {
    try {
        // Read from the first file
        const data1 = await fs.readFile('file1.txt', 'utf-8');
        console.log('Content of file1:', data1);

        // Read from the second file
        const data2 = await fs.readFile('file2.txt', 'utf-8');
        console.log('Content of file2:', data2);

        // Combine the contents of the two files
        const combinedData = `${data1}\n${data2}`;
        console.log('Combined content:', combinedData);

        // Write the combined result to a third file
        await fs.writeFile('combinedFile.txt', combinedData, 'utf-8');
        console.log('Combined content written to combinedFile.txt');
    } catch (error) {
        console.error('Error:', error);
    }
}

readAndCombineFiles();

console.log('This log runs before file operations are completed.');
