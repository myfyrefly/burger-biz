const orm = require('../config/orm');

var burger = {
    all: function(callback) {
      orm.selectAll("burgers", function(result) {
        callback(result);
      });
    },
    // The variables cols and vals are arrays.
    create: function(newBurger, callback) {
      orm.insertOne("burgers", newBurger, function(result) {
        callback(result);
      });
    },
    update: function(updateObj, objStatus, callback) {
      orm.updateOne("burgers", updateObj, objStatus, function(result) {
        callback(result);
      });
    }
  };
  
  module.exports = burger;