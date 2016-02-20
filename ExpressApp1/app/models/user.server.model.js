// Load the Mongoose module and Schema object
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// Define a new 'UserSchema'
var UserSchema = new Schema({
   
    username: {        type: String, trim: true, unique: true , required: true , index:true, match: /.+\@.+\..+/   },
    password: {
        type: String,
        validate: [
                    function (password) {
                    return password.length >= 6;
                 }, 
                'Password should be longer'
                ]
    }
});

UserSchema.statics.findOneByUsername = function (username, callback) {
    // Use the 'findOne' method to retrieve a user document
    this.findOne({
        username: new RegExp(username, 'i')
    }, callback);
};
UserSchema.methods.authenticate = function (password) { return this.password === password; };

mongoose.model('login', UserSchema);


var feedbackSchema = new Schema({
    firstName: { type: String, trim: true , required: true  }, 
    lastName: { type: String, trim: true,  required: true  },
    email: { type: String, trim: true, unique: true , required: true, index: true, match: /.+\@.+\..+/ },   
    edu: { type: String },
    skills: { type: String },
    desp: { type: String },
    author: { type: Schema.ObjectId, ref: 'login' },

});
mongoose.model('feedback', feedbackSchema);