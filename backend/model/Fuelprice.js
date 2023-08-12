const mongoose = require('mongoose');
const fuelprice = mongoose.Schema({
    category: String,
    quantity: Number,
    price : Number,
    date: String
})

module.exports = mongoose.model('fuelprice' , fuelprice);