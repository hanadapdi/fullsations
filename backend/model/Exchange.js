const mongoose = require('mongoose');
const Exchnage = mongoose.Schema({
    Date : String,
    Cashmony : Number,
    Dollarmony: Number,
})

module.exports = mongoose.model('Exchnage' , Exchnage);