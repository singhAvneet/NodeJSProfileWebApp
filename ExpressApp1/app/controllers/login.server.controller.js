exports.render = function (req, res) {
    var welcome = "Welcome to our company";
    var session = req.session;

    if (session.firstName) {
        res.render('thankYou.ejs', { first: session.firstName, last: session.lastName, email: session.email });
        req.session.destroy();
    }
    else {
        res.render('login.ejs', { welcome : welcome });
    }
   
   
}


   
 
