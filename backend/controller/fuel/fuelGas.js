const mongoose = require('mongoose');
const fuelGas = require('../../model/fuelGas');
const fuelgas = async ( req , res) =>{
   try {
      const {  Category , Quantity , Price , Date } = req.body;
      const gas = await fuelGas.create({
        category : Category , quantity : Quantity , price : Price , date : Date
    });
     if(gas){
        res.json({ message : gas});
     }
     return console.log('fuelgas error');
    } catch (error) {
      console.log('error')
    }
}

module.exports = fuelgas;


