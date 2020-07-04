const mysql = require('mysql');
const util = require('util');

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'DB_week3'
});

const execQuery = util.promisify(DB.query.bind(DB));

const transaction = async () => {
    DB.connect();
    
    // change the default autocommit to 0 so it will never commit till i tell it to do so
    const autoCommit = `SET AUTOCOMMIT = 0;`;
    // start the transaction
    const lanuchTransaction = `START TRANSACTION;`;
    // substract from the 101 account balance
    const substractFromAccount101 = `UPDATE account SET balance = balance - 1000 WHERE account_number = 101;`;
    // add to the 102 account balance
    const addToAccount102 = `UPDATE account SET balance = balance + 1000 WHERE account_number = 102;`;
    // log the changes in the account changes table
    const logChangesToTheChangesTable = `INSERT INTO account_changes(account_number,amount,changed_date,remark) VALUES(101,1000,'2020-07-04', 'sending the loan'), (102,1000,'2020-07-04','receiving the loan');`;
    // stop the transaction
    const stopTransaction = `COMMIT;`


    try {
        // execute the queries
        await Promise.all[execQuery(autoCommit), execQuery(lanuchTransaction), execQuery(substractFromAccount101), execQuery(addToAccount102), execQuery(logChangesToTheChangesTable), execQuery(stopTransaction)];
    } catch (error) {
        console.error(error);
    }
    DB.end();

}

transaction();