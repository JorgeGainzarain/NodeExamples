function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(url.startsWith('https://')) {
                resolve(`Data fetched successfully from ${url}`);
            }
            else {
                reject(new Error(`Invalid URL: ${url} -- Must start with https://`));
            }
        },2000)
    })
}

urls = ['https://example.com', 'invalid.url', 'https://example2.com'];
urls = urls.sort(() => Math.random() - 0.5);

fetchData(urls[0])
    .then(data => {
        console.log(data);
        return fetchData(urls[1]);
    })
    .then(data => {
        console.log(data);
        return fetchData(urls[2]);
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error.message);
    })