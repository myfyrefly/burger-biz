const orm = require('../config/orm');

var burger = {
    getAll: function(callback) {
      orm.selectAll("burgers", function(result) {
        callback(result);
      });
    },
    create: function(newBurger, callback) {
      orm.insertOne("burgers", newBurger, function(result) {
        callback(result);
      });
    },
    update: function(objColVals, status, callback) {
      orm.updateOne("burgers", objColVals, status, function(result) {
        callback(result);
      });
  }
};
  
  module.exports = burger;