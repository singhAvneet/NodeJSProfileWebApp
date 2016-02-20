var User = require('mongoose').model('login');
var Feedback = require('mongoose').model('feedback');


exports.create = function (req, res, next) {
  
    var session = req.session;
    session.firstName = req.body.firstName;
    session.lastName = req.body.lastName;
    session.email = req.body.email;
   
    var user = new User();
    user.save();
    var feedback = new Feedback(req.body);
    feedback.author = user;
    feedback.save(function (err) {
        if (err) {
            return next(err);
        } else {
           res.end('done');
        }
    });
};
exports.read = function (req, res, next) {
    Feedback.find().populate('author').exe(function (err, posts) {
        if (err) {
            
            return next(err);
        } 
        else {
            res.json(posts);
           
        }
    
    });
    
/*
    Feedback.find({}, function (err, users) {
        if (err) {
            
            returnnext(err);
        } 
        else {
            res.json(users);
           
        }
    });*/
};