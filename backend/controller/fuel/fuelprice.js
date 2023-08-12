const mongoose = require('mongoose');
const Fuelprice = require('../../model/Fuelprice');
exports.savefuelprice = async (req, res) => {
    const dates = new Date();
    try {
        const { Category , Quantity , Price , Date} = req.body
    // const prices = await  Fuelprice.updateOne( { category:Category },{ $set: { price: Price , date:Date}})
    const prices = await Fuelprice.create({
        // category : 'gas' , quantity : 1 , price : 9500 , date : 'hhhhhhh'
    category : Category , quantity : Quantity , 
    price : Price , date : Date
    })
    if(prices){
        res.json({message : 'data already successfully' , data : prices})
    }
    else return res.json({message : 'data not found'});
    } catch (error) {
        res.json({message :'error aya jira data'})
    }
}




exports.Updateprice = async (req, res) =>{
    try {
      const {   Category , Quantity , Price , Date , id} = req.body
      const item = await Fuelprice.updateOne( { _id: id}, 
        { $set: 
        { 
            category : Category , quantity : Quantity , 
            price : Price , date : Date 
        } 
      } ) 
      res.send({ message: 'Item updated successfully' });
    } catch (error) {
      res.status(500).send({ error: 'Internal server error' + id});
    }
  }



