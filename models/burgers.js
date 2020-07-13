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
    update: function(objID, callback) {
      var burgerObjId = objID;
      orm.updateOne("burgers", {
        devoured: true
      }, burgerObjId, callback);
    }
};
  
  module.exports = burger;