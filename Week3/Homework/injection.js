const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'world',
    multipleStatements: true
});

conn.connect();

function getPopulation(Country, name, code, cb) {
    // assuming that connection to the database is established and stored as conn
    conn.query(
      `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = ${code}`,
      function(err, result) {
        if (err) cb(err);
        if (result.length == 0) cb(new Error("Not found"));
        cb(null, result[0].name);
      }
    );
  }

// an example of how a user code use advantage of the multipleStatements as true and hack to the all information in the database
getPopulation('country', 'Yemen', "'YEM'; SELECT *from country;", (error, result) => {
    if (error) throw error;
    console.log(result);
});

//a possible solution to the previous problem 
function getPopulationPreventInjection(Country, name, code, cb) {
    conn.query(`SELECT Population FROM ${Country} WHERE Name = ? and code = ?`,
        [name, code],
        function(err, result){
            if (err) cb(err);
            if (result.length == 0) cb(new Error("Not found"));
            cb(null, result[0].name);
        }
    );
}
conn.end();