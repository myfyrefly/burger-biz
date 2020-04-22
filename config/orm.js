const connection = require('./connection');

var orm = {
    selectAll: function(tableName, callback) {
      connection.query("SELECT * FROM ??", [tableName], function(err, result) {
        if (err) {
            throw err;
        }
        callback(result);
      });
    },
    insertOne: function(tableName, newBurger, callback) {
        connection.query("INSERT INTO ?? SET ?", [tableName, newBurger], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
          });
    },
    updateOne: function(tableName, itemToUpdate, status, callback) {
        connection.query("UPDATE ?? SET ? WHERE ?", [tableName, itemToUpdate, status], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
          });
        }
  };
  
  module.exports = orm;