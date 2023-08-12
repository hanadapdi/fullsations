const mongoose = require('mongoose');
const Loan =  mongoose.Schema({
    category : String ,
    price : Number ,
    quantity : Number ,
    date : String ,
})
module.exports = mongoose.model('Loan' , Loan);
