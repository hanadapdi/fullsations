const mongoose = require('mongoose');
const buymentgas = require('../../model/buymentgas');
const getallbuymentfuelprice = async (req, res) => {
    // db.collection.findOne({}, {sort: {_id: -1}})
    // .sort({_id: -1}).limit(3)
   const getall = await buymentgas.find()
   res.json(getall)
}
module.exports = getallbuymentfuelprice;
