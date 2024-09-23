function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(url.startsWith('https://')) {
                resolve(`Data fetched successfully from ${url}`);
            }
            else {
                reject(new Error(`Invalid URL: ${url} -- Must start with https://`));
            }
        },1000)
    })
}

async function fetchMultipleURLS(urls) {
    try {
        for(let url of urls) {
            let data = await fetchData(url)
            console.log(data);
        }
    }
    catch(error) {
        console.error(error.message);
    }

}

urls = ['https://example.com','htps://invalid' , 'htp://invalid', 'https://example2.com', 'https://example3.com', 'https://example4.com', 'https://example5.com'  ];
urls = urls.sort(() => Math.random() - 0.5); // Sort the URLS randomly

fetchMultipleURLS(urls);