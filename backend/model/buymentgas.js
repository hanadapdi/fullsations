const mongoose = require('mongoose');
const buymentgas = mongoose.Schema({
    category: String,
    quantity: Number,
    price : Number,
    date: String
})

module.exports = mongoose.model('buymentgas' , buymentgas);