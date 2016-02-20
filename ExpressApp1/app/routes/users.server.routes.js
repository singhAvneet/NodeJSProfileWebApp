// Load the 'users' controller
var users = require('../../app/controllers/usersDb.server.controller');
var feedback = require('../../app/controllers/feedBackDb.server.controller');

// Define the routes module' method
module.exports = function (app) {
    // Set up the 'users' base routes
    // a post request to /users will execute create method in users.server.controller
    app.route('/usersDb').post(users.create);
    app.route('/feedbackDb').post(feedback.create).get(feedback.read);
 

    app.route('/usersDb/:name').get(users.read);
    app.param('name', users.userByID);
};

