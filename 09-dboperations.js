const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const path = require('path');

// Function to manage the Databases
async function manageDatabase() {
    try {
        // Open the Databases
        const db = await open({
            filename: path.join(__dirname, 'products.db'),
            driver: sqlite3.Database
        });

        // Create the products table
        await db.exec(`
            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                price REAL NOT NULL
            );
        `);
        console.log('Products table created.');

        // Insert a new product
        const productName = 'Laptop';
        const productPrice = 999.99;
        await db.run('INSERT INTO products (name, price) VALUES (?, ?)', [productName, productPrice]);
        console.log(`Inserted product: ${productName}, Price: ${productPrice}`);

        // Retrieve all products
        const products = await db.all('SELECT * FROM products');
        console.log('Products in Databases:', products);

        // Close the Databases
        await db.close();
    } catch (error) {
        console.error('Error:', error);
    }
}

manageDatabase();

console.log('This log runs before the Databases operations are completed.');
