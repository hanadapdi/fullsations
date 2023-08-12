const mongoose = require('mongoose');
const fuelgas = mongoose.Schema({
    category: String,
    quantity: Number,
    price : Number,
    date: String
})

module.exports = mongoose.model('fuelgas' , fuelgas);


