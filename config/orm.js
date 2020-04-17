const connection = require('./connection');

// code from party activity, method names changed, 'guts' need modification still
var orm = {
    selectAll: function(tableName, callback) {
      connection.query("SELECT * FROM ??", [tableName], function(err, result) {
        if (err) {
            throw err;
        }
        callback(result);
      });
    },
    insertOne: function(tableName, callback) {
        connection.query("INSERT INTO ?? SET ??", [tableName], function(err, result) {
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