const mysql = require('mysql');
const util = require('util');

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'DB_week3'
});

// random acounts data
const accounts = [
    {
        account_number: 101,
        balance: 17000
    },
    {
        account_number: 102,
        balance: 18000
    },
    {
        account_number: 103,
        balance: 65000
    },
];
// random changes data
const account_changes = [
    {
        account_number: 101,
        amount: 3450,
        changed_date: '2020-06-26',
        remark: 'bonus'
    },
    {
        account_number: 103,
        amount: 3450,
        changed_date: '2020-06-26',
        remark: 'bonus'
    },
]


const execQuery = util.promisify(DB.query.bind(DB));

async function insertData(){
    DB.connect();
    try {
        accounts.map( account =>
            execQuery('INSERT INTO account SET ?', account));

        account_changes.map( change =>
            execQuery('INSERT INTO account_changes SET ?', change));

    } catch (error) {
        console.error(error);
    }
    DB.end();
}

insertData();