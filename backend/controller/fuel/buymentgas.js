const mongoose = require('mongoose');
const buymentgas = require('../../model/buymentgas');
const CustomerSellingGas = require('../../model/CustomerSellingGas');
exports.buymentgasprice = async ( req , res) =>{
   try {
      const { category , Quantity , price , dates } = req.body;
      const buyment = await buymentgas.create({
        category : category , quantity : Quantity , price : price , date : dates
    });
     if(buyment){
        res.json({ message : buyment});
     }
    else  {
      // console.log('buymentgasprice error');
    }
    } catch (error) {
      console.log('error')
    }
}
exports.buymentgaspriceUpdate = async ( req , res) =>{
   try {
      const { category , Quantity , price , dates ,id} = req.body;
      const buyment = await buymentgas.updateOne({_id:id} , {$set:{
        category : category , quantity : Quantity , price : price , date : dates
    }});
     if(buyment){
        res.json({ message : buyment});
     }
    else  {
      // console.log('buymentgasprice error');
    }
    } catch (error) {
      console.log(error.message)
    }
}
exports.buymentdel = async(req , res) =>{
  try {
    const {userid} = req.body
    const del = await buymentgas.deleteOne({_id : userid})
    if(!del){
      return res.json('invalid request')
    }
    else{
      return res.json(del)
    }
  } catch (error) {
    console.log(error.message)
  }
} 



exports.customerBuyment = async(req , res) =>{
  try {
    const {  category ,    Quantity ,price , dates ,customerCarId , customername , customerLocation , customerNumber } = req.body;
    const buyment = await CustomerSellingGas.create({
      Gas : category , Gasprice : price, Adderss : customerLocation ,Date : dates,
      CarID : customerCarId  , Numbers: customerNumber ,customerName : customername 
      ,GasQuantity : Quantity
  });
   if(buyment){
      res.json({ message : buyment});
   }
  else  {
    console.log('buymentgasprice error');
  }
  } catch (error) {
    console.log('error' + error)
  }
}
exports.customerbuymentUpdate = async(req , res) =>{
  try {
    const {  category ,    Quantity ,price , dates ,customerCarId , customername , customerLocation , customerNumber , id} = req.body;
    const updatebuyment = await CustomerSellingGas.updateOne({_id: id} ,{
      $set:{
        Gas : category , Gasprice : price, Adderss : customerLocation ,Date : dates,
        CarID : customerCarId  , Numbers: customerNumber ,customerName : customername 
        ,GasQuantity : Quantity
      }
    })

   if(updatebuyment){
      res.json({ message : updatebuyment});
   }
  else  {
    console.log('buymentgasprice error');
  }
  } catch (error) {
    console.log('error' + error)
  }
}

exports.getcustomerbuyment = async(req , res) =>{
  const customer = await CustomerSellingGas.find();
  res.json(customer);
}

exports.Customerdelbuyment = async(req , res) =>{
  try {
    const {id} = req.body
    const del = await CustomerSellingGas.deleteOne({_id : id})
    if(!del){
      return res.json('invalid request')
    }
    else{
      return res.json(del)
    }
  } catch (error) {
    console.log(error.message)
  }
} 