const request = require('request-promise-native');

async function fetchDataFromAPI() {
    try {
        // Make a GET request to a public API
        const response = await request('https://jsonplaceholder.typicode.com/posts/1');

        // Parse and log the response data
        const data = JSON.parse(response);
        console.log('Data fetched from API:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchDataFromAPI();

console.log('This log runs before the API request is completed.');
