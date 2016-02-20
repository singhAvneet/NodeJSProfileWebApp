// Load the 'User' Mongoose model
var User = require('mongoose').model('login');

exports.create = function (req, res, next) {
    var session = req.session;
    session._id = req.body._id;
    var user = new User(req.body);
    // Use the 'User' instance's 'save' method to save a new user document
    user.save(function (err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            res.send('done');
          
        }
    });
};




exports.userByID = function (req, res, next, name) {
    //populating the req.userobject
    User.findOne({ username: req.params.name }, function (err, user) {
        if (err) {
       return next(new Error('Something went wrong :-('));
        } 
        else {
            req.user = user;
            next();
        }
    });
};
exports.read = function (req, res) {
    var session = req.user;
    var comment = "You are not registered";
    if (session) {
        res.render('feedback.ejs', { username: session.username });
    }
    else
          res.render('login.ejs', { welcome : comment }); 
    
};