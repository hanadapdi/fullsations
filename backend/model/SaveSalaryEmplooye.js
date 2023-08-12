const mongoose = require('mongoose');
const SaveEmployesalrey =  mongoose.Schema({
    Tittle : String ,
    Fullname : String,
    Salarys : String,
    Numbers : Number,
    date : String
})
module.exports = mongoose.model('EmplooyeSalary' , SaveEmployesalrey);
