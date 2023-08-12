const mongoose = require('mongoose')    

const profiles =  mongoose.Schema({
    Email : String,
    number : Number,
    address : String,
});

module.exports = mongoose.model('profile', profiles)


