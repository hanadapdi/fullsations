const mongoose = require('mongoose');
const Account = mongoose.Schema({
    usernameAccount : String,
    passwordAccount : String
})

module.exports = mongoose.model('Account' , Account);