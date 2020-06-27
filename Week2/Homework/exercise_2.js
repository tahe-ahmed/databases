const util = require('util');
const mysql = require('mysql');
const authors = require('./inserts/authors');
const authors = require('./authors');
const papers = require('./papers');
const author_papers = require('./auth_papers');

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'AuthorDB'
});
DB.connect();

const execQuery = util.promisify(DB.query.bind(DB));

async function createPapersTab(){


    // Research_Papers Table
    const createPapersTable = `
    CREATE TABLE IF NOT EXISTS Research_Papers(
        paper_id INT PRIMARY KEY AUTO_INCREMENT,
        paper_title VARCHAR(250),
        conference VARCHAR(250),
        publish_date DATETIME
    );
    `;

    // it is many-to-many relationships so we need a Junction table
    const auth_to_papers = `
    CREATE TABLE IF NOT EXISTS authors_papers(
        author_no INT,
        paper_id INT,
        Constraint FOREIGN KEY(author_no) REFERENCES authors(author_no),
        Constraint FOREIGN KEY(paper_id) REFERENCES research_papers(paper_id)
    );
    `

  try {
    await Promise.all[execQuery(createPapersTable),execQuery(auth_to_papers)];
  } catch (error) {
    console.error(error);
  }
  insertDATA();
  DB.end();
}

// function to insert data to the tables that was created
async function insertDATA(){
    try {    
        await Promise.all(authors.map(author =>
            execQuery('INSERT INTO authors SET ?', author)
        ));
    
        await Promise.all(papers.map(paper =>
          execQuery('INSERT INTO Research_Papers SET ?', paper)
        ));
    
        await Promise.all(author_papers.map(author_paper =>
          execQuery('INSERT INTO authors_papers SET ?', author_paper)
        ));
    
      } catch (error) {
        console.error(error);
    }

}

createAuthorTable();