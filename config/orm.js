const connection = require('./connection');
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}


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
    updateOne: function(table, objColVals, status, callback) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += status;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        callback(result);
      });
    },
  };
  
  module.exports = orm;

  