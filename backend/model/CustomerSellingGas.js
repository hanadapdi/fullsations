const mongoose = require('mongoose');
const CustomerSelling = mongoose.Schema({
    Date : Date , 
    Gas: String,
    customerName : String,
    CarID : String,
    Numbers : Number,
    Adderss : String,
    GasQuantity: Number,
    Gasprice: Number,
}); 
module.exports = mongoose.model('CustomerSelling' , CustomerSelling);