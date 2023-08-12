const mongoose = require('mongoose');
const customers = mongoose.Schema({
    Date : Date , 
    fullname : String,
    Numbers : Number,
    NationalID : Number,
    CarID : String,
    Location : String,
}); 
module.exports = mongoose.model('customers' , customers);