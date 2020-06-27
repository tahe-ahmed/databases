const mysql = require('mysql');

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'AuthorDB',
});
DB.connect();

const query_1 = 
`SELECT rp.paper_title, count(a.author_no) AS all_authors 
FROM research_papers rp
JOIN authors_papers ap USING(paper_id)
JOIN authors a USING(author_no);
`

DB.query(query_1, (err, results) => {
    if (err) throw err;
    console.table(results);
});

const query_2 = 
`SELECT count(ap.paper_id) AS all_papers_with_females
FROM authors a
JOIN authors_papers ap USING(author_no) WHERE a.gender = 'f';
`

DB.query(query_2, (err, results) => {
    if (err) throw err;
    console.table(results);
});

const query_3 = 
`SELECT university, avg(h_index) as avg_h_index
FROM authors GROUP BY university;
`
DB.query(query_3, (err, results) => {
    if (err) throw err;
    console.table(results);
});

const query_4 = 
`SELECT a.university, count(ap.paper_id) AS all_papers_with_university
FROM authors a
JOIN authors_papers ap USING(author_no)
JOIN research_papers rp USING(paper_id)
GROUP BY a.university;
`
DB.query(query_4, (err, results) => {
    if (err) throw err;
    console.table(results);
});


DB.end();