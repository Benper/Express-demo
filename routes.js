var UserController = require('./Controllers/UserController');

module.exports = function(app) {
	
	app.get('/users', UserController.readAll);
	app.get('/users/:id', UserController.read);
	app.post('/users', UserController.create);
};