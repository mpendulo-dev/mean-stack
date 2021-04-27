const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

// model name is User
const User = mongoose.model('User', UserSchema);
module.exports = User;

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}
module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username};
    User.findOne(query, callback);
}
// adding user
module.exports.addUser = function(newUser, callback) {
    // hashing a password
    // console.log(newUser.password);
    bcrypt.genSalt(10,  function (err, salt) {
        bcrypt.hash(newUser.password, salt, (err, hash) =>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        })
    })
}
module.exports.comparePassword = function(candidatePassword, hash, callback) {

    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}