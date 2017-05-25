var express = require('express');
var bodyParser = require('body-parser');
var logger = require('./Middleware/logger')
//var app = request('express')();
var app = express();

/*
sequelize.sync({force: true})
  .then(function() {
    console.log('Connection has been established successfully.');
    return User.create({
	    username: 'PK',
	    age: 36
	  });
  })
  .then(function(result) {
  	console.log('created', result.get({
      plain: true
  	}));
  })
  .catch(function(err) {
    console.error('Unable to connect to the database:', err);
  });
*/



app.use(logger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes.js')(app);
app.listen(1337);
console.log('App vs running on leet');

