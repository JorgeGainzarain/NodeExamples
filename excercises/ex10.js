const sqlite3 = require('promised-sqlite3');
const readlinePromises = require('node:readline/promises');
const {READONLY} = require("sqlite3");

// Cooldown between logins
cooldown = true;
cd = 1.5; // How many seconds between logins

// Sample data
const data = {
    users: [
        {name: 'Jorge_Garcia', password: 'passwordJorge', role_id: 1},
        {name: 'Pepe_Garcia', password: 'passwordPepe', role_id: 1},
        {name: 'Maria_Gonzalez', password: 'passwordMaria', role_id: 2},
        {name: 'Jose_Gonzalez', password: 'passwordJose', role_id: 2}
    ],

    roles: [
        {role_id: 1, role_name: 'Admin'},
        {role_id: 2, role_name: 'User'}
    ]
};

// Users to test the login
usersLogin = {
    validUser: ['Jorge_Garcia', 'passwordJorge'],
    nonExistingUser: ['Invalid_User', 'invalidPassword'],
    existingUserWithWrongName: ['Invalid_User', 'passwordMaria'],
    existingUserWithWrongPassword: ['Maria_Gonzalez', 'invalidPassword']
}

// Promisify db.run
function runSql(db, sql) {
    return db.run(sql)
        .then(() => console.log(`SQL executed successfully: ${sql}`))
        .catch(err => console.log(`Error running SQL (${sql})\n${err.message}`))
}

// Function to create tables
async function createTables(db) {

    await runSql(db, `CREATE TABLE roles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
        )`
    );

    await runSql(db, `CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role_id INTEGER,
        FOREIGN KEY (role_id) REFERENCES roles (id)
        )`
    );
}

// Function to insert data
async function insertData(db, data) {

    for (let role of data.roles) {
        await runSql(db, `INSERT INTO 
            roles (
                id, 
                name
            )
            VALUES (
                '${role.role_id}', 
                '${role.role_name}'
            )`
        );
    }

    for (let user of data.users) {
        await runSql(db, `INSERT INTO 
            users (
                   name, 
                   email, 
                   password, 
                   role_id
            )
            VALUES (
                    '${user.name}', 
                    '${user.name}@example.com', 
                    '${user.password}', 
                    '${user.role_id}'
            )`
        );
    }
}

// Function to check if the database exists
function checkDatabaseExists(dbPath) {
    return sqlite3.AsyncDatabase.open(dbPath, READONLY)
        .then(async (db) => {
            await db.close()
            return true;
        })
        .catch(() => {
            return false;
        })
}

// Function to create the database
async function createDatabase(dbPath) {

    let dbExists = await checkDatabaseExists(dbPath);
    let db = await sqlite3.AsyncDatabase.open(dbPath)

    if (!dbExists) {
        await createTables(db);
        await insertData(db, data);
    }

    return db;
}

async function login(username, password, db) {
    let row = await db.get(`SELECT * FROM users WHERE name = '${username}' AND password = '${password}'`);
    if(row) {
        console.log(`Login successful, welcome user ${row.name}!`);
    }
    else {
        console.log('Invalid username or password');
    }
    return row;
}

function loginTerminal(db) {
    return new Promise(async (resolve, reject) => {
        const rl = readlinePromises.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        console.log('\n\n\n\nManual login test');


        rl.on('message', async (msg) => {
            switch(msg.toLocaleLowerCase()) {
                case 'login' :
                    let username = await rl.question('Enter your username: ')
                    let password = await rl.question('Enter your password: ')
                    let data = await login(username, password, db)
                    break;

                default:
                    console.log("Command not recognized");
            }

            let response = await rl.question('Press Enter to continue or write quit to exit:');
            if(response.toLowerCase() === 'quit') {
                rl.close();
            }
        })
    })
}


// Create and initialize the database
createDatabase('./Databases/myDb.db')
    .then(async (db) => {
        await loginTerminal(db)

        /*
        let i = 1;
        for (let user in usersLogin) {
            setTimeout(() => {
                console.log(`\n\n\nTesting login for user: ${user}`);
                login(usersLogin[user][0], usersLogin[user][1], db);
            }, cd * 1000 * i)
            if(cooldown) {
                i++;
            }
        }
         */

    })

