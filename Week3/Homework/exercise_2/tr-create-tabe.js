const util = require('util');
const mysql = require('mysql');

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    multipleStatements: 'true',
});

// again i use the util.promisify() to perform the queries as it was recommended by the lecture
const execQuery = util.promisify(DB.query.bind(DB));
async function createTables(){
    const createDB = `CREATE DATABASE IF NOT EXISTS DB_week3; USE DB_week3;`;

    const createAccTable = `CREATE TABLE IF NOT EXISTS account (
        account_number INT PRIMARY KEY,
        balance DECIMAL 
    );`;

    const createAccChangTable = `CREATE TABLE IF NOT EXISTS account_changes (
        change_number INT PRIMARY KEY AUTO_INCREMENT,
        account_number INT,
        amount DECIMAL,
        changed_date DATETIME,
        remark VARCHAR(250) 
    );
    `;

    DB.connect();
    try {
        // async multi query in the same time using Promise.all[]
        await Promise.all[execQuery(createDB),execQuery(createAccTable),execQuery(createAccChangTable)]; 
    } catch (error) {
        console.error(error);
    }
    DB.end();
}

createTables();
