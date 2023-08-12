const mongoose = require('mongoose');
const Datafuel = mongoose.Schema({
    Type:String,
    Date : Date , 
    TotalGas : Number,
    ToTalGasprice : Number,
    Gasbuyment : Number,
    Gasbuyprice : Number,
    DailyExchange : Number,
    ProfitGas : Number,
    Description : String

})

module.exports = mongoose.model('Datafuel' , Datafuel);