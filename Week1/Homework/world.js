const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'world'
});

db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('MySql Connected....');
});

//countries with population greater than 8 million
let sqlQuery = "SELECT name FROM country WHERE population > 8000000"
connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    console.log(results);
});

//countries with “land” in their names
const sqlQuery = "SELECT name FROM country WHERE name LIKE '%land%'";
connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    console.log(results);
});

//cities with population between 500,000 and 1 million
const sqlQuery = "SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000";
connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    console.log(results);
});

//the countries in Europe
const sqlQuery = "SELECT name FROM country WHERE continent = 'Europe'";
connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    console.log(results);
});

//countries descending order based on surface areas
const sqlQuery = "SELECT name, surfacearea FROM country ORDER BY surfacearea DESC";
connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    console.log(results);
});

//the cities in the Netherlands
const sqlQuery = "SELECT name FROM city WHERE countrycode = 'NLD'";
connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    console.log(results);
});

//population of Rotterdam
const sqlQuery = "SELECT population FROM city WHERE name = 'Rotterdam'";
connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    console.log(results);
});

//the top 10 countries based on Surface Area?
const sqlQuery = "SELECT name FROM country ORDER BY surfacearea DESC LIMIT 10";
connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    console.log(results);
});

//the top 10 most cities by population
const sqlQuery = "SELECT name FROM city ORDER BY population DESC LIMIT 10";
connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    console.log(results);
});

//the population of the world
const sqlQuery = "SELECT SUM(population) as the_world_total_population FROM country";
connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    console.log(results);
});

connection.end();