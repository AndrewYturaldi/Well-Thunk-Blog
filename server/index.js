 const express = require('express');
 const app = express();
 const cors = require('cors');
 const mysql = require('mysql');

 app.use(cors());

const db  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'Guitar9billion@2982',
  database        : 'Well_Thunk_DB'
});

 app.get('/', (req, res) => {
    db.query('SELECT * FROM your_table_name', (error, results, fields) => {
        if (error) {
            console.error('Error querying database:', error);
            res.status(500).send('Error querying database');
        } else {
            // Send the retrieved data as a JSON response
            res.json(results);
        }
    });
 })

 app.listen(8080, () => {
    console.log('server is listening on port 8080');
 })