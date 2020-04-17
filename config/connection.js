const mysql = require('mysql');
// const util = require('util');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "R3ydeTigres!",
  database: "burgers_db"
});

connection.connect(function(err) {
    if(err) {
        console.log('an error occured' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;


