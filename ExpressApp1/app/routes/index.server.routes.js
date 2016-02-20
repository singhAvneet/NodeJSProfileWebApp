//This uses CommonJS module pattern to export a single module function.
//This function takes an express object as argument 
//Then it requires the index controller and uses its render() method
//as a middleware to GET requests made to the root path.

module.exports = function (app) {
    var index = require('../controllers/index.server.controller');
    var about = require('../controllers/about.server.controller');
    var login = require('../controllers/login.server.controller');
    app.get('/', index.render);
    app.get('/about', about.render);
    app.get('/login', login.render);
};
