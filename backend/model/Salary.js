const mongoose = require('mongoose');
const Salarys =  mongoose.Schema({
    Tittle : String ,
    SalaryEmplooyer : Number,
})
module.exports = mongoose.model('Salary' , Salarys);
