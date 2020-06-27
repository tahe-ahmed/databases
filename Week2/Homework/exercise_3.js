const mysql = require('mysql');

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'AuthorDB',
});
DB.connect();

const query_1 = 
`SELECT a.author_no, a.author_name, c.author_name AS Collaborator
FROM authors a
JOIN authors c ON a.collaborator = c.author_no;`

DB.query(query_1, (error, results) => {
    if (error) throw error;
    console.table(results);
});

const query_2 = 
`
SELECT a.author_no, a.author_name, a.university, a.h_index, a.gender, a.Collaborator, rp.paper_title
FROM authors a
LEFT JOIN authors_papers ap USING(author_no)
LEFT JOIN research_papers rp ON rp.paper_id = ap.paper_id;
`

DB.query(query_2, (err, results) => {
    if (err) throw err;
    console.table(results);
});

DB.end();