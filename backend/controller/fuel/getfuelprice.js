const mongoose = require('mongoose')
const Fuelprice = require('../../model/Fuelprice');
exports.getallfuelpricess = async (req, res) => {
    // db.collection.findOne({}, {sort: {_id: -1}})
    // .sort({_id: -1}).limit(3)
   const getall = await Fuelprice.find()
   res.json(getall)
}

exports.getlastprice = async ( req , res) =>{
    const getall = await Fuelprice.find().sort({ _id: -1 }).limit(3)
   res.json(getall)
}