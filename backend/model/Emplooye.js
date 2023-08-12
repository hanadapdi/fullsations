const mongoose = require('mongoose');
const Emplooye = mongoose.Schema({
    Date : Date , 
    fullname : String,
    birghtday : String,
    job : String,
    workTime : String,
    Salary : String,
    nationalty : String,
})

module.exports = mongoose.model('Emplooye' , Emplooye);