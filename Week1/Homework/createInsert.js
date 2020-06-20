const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    multipleStatements: true,
});

db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('MySql Connected....');
});

//create the database
db.query('DROP DATABASE IF EXISTS meetup; CREATE DATABASE meetup; USE meetup;', (err) => {
    if(err) throw err;
    console.log('meetup database created.');
})

// create tables
function createTables(){
    db.query('CREATE TABLE Invitee(invitee_no INT, invitee_name VARCHAR(255), invited_by VARCHAR(255))', (err) => {
        if(err) throw err;
        console.log('tables created.');
    })
    db.query('CREATE TABLE Room(room_no INT, room_name VARCHAR(255), floor_number INT)', (err) => {
        if(err) throw err;
        console.log('tables created.');
    })
    db.query('CREATE TABLE Meeting(meeting_no INT, meeting_title VARCHAR(255), starting_time TIME, ending_time TIME, room_no INT)', (err) => {
        if(err) throw err;
        console.log('tables created.');
    })
}

const Invitee = [
    [1, "tahe ahmed", "osama ahmed"],
    [2, "tahe ahmed", "osama ahmed"],
    [3, "tahe ahmed", "osama ahmed"],
    [4, "tahe ahmed", "osama ahmed"],
    [5, "tahe ahmed", "osama ahmed"],
]
const Room = [
    [1, "room ssdkf", 1],
    [2, "room ssdkf", 3],
    [3, "room ssdkf", 6],
    [4, "room ssdkf", 8],
    [5, "room ssdkf", 4],
]

const Meeting = [
    [12, "sfsddsf", "10:00", "01:00", 1],
    [42, "sfsddsf", "05:40", "00:00", 2],
    [2354, "sfsddsf", "10:00", "00:00", 3],
    [445, "sfsddsf", "16:00", "10:00", 4],
    [545, "sfsddsf", "19:00", "15:00", 5],
]

//insert the data into the tables
function insertData(Invitee, Room, Meeting){
    Invitee.forEach(row => {
        db.query(`INSERT INTO Invitee(invitee_no, invitee_name, invited_by) VALUES (?)`, [row], function(err) {
            if (err) console.log(err);
            else console.log("values inserted.");
        });
    });
    Room.forEach(row => {
        db.query(`INSERT INTO Room(room_no, room_name, floor_number) VALUES (?)`, [row], function(err) {
            if (err) console.log(err);
            else console.log("values inserted.");
        });
    });
    Meeting.forEach(row => {
        db.query(`INSERT INTO Meeting(meeting_no, meeting_title, starting_time, ending_time, room_no) VALUES (?)`, [row], function(err) {
            if (err) console.log(err);
            else console.log("values inserted.");
        });
    });
}

createTables();
insertData(Invitee, Room, Meeting);

db.end();