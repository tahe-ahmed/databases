const mysql = require('mysql');
const util = require('util');

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    multipleStatements: true,
});
DB.connect();

// Using util.promisify that return a promise and no need for then 
const execQuery = util.promisify(DB.query.bind(DB));

async function createAuthTab(){
    // create the DB and use it 
    const createDB = `CREATE DATABASE IF NOT EXISTS AuthorDB; USE AuthorDB;`;

    // create authors table 
    const createAuthTable = `
    CREATE TABLE IF NOT EXISTS Authors (
        author_no INT PRIMARY KEY,
        author_name VARCHAR(250),
        university VARCHAR(250),
        date_of_birth DATETIME,
        h_index INT,
        gender ENUM('m', 'f')
    );
    `;
    // create a column for the FK
    const createColu = `ALTER TABLE Authors ADD COLUMN Collaborator INT;`;
    // create the FK
    const addFK = `ALTER TABLE authors ADD FOREIGN KEY(Collaborator) REFERENCES authors(author_no);`;

    try {
        await Promise.all[execQuery(createDB), execQuery(createAuthTable), execQuery(createColu), execQuery(addFK)];
    } catch (error) {
        console.error(error);
    }
    DB.end();
}

createAuthTab();