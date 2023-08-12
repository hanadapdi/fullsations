const mongoose = require('mongoose')
const Exchange = require('../../model/Exchange');
  exports.exchange  = async ( req , res) =>{
   try {
      const {date , cashmony , Dollar} = req.body;
      const Exchanges = await Exchange.create({Date : date , Cashmony:cashmony ,Dollarmony : Dollar });
     if(Exchanges){
        res.json({ Exchanges : Exchanges});
     }
    else return console.log('errrrrrrrr')
    } catch (error) {
      console.log('error')
    }
}

exports.getExchange = async (req, res) => {
 const getall = await Exchange.find().sort({_id: -1}).limit(1).then(data =>{
      res.json(data)
   })
}