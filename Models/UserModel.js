var Sequelize = require('sequelize');
var db = require('../Config/databaseConfig');


 var UserTable = db.define('user', {
  username: {
  	type : Sequelize.STRING,
  	primaryKey: true
  },
  age: Sequelize.INTEGER
});

db.sync({force: true});

module.exports = UserTable;