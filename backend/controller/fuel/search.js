const buymentgas = require("../../model/buymentgas");
const CustomerSellingGas = require("../../model/CustomerSellingGas");
const fuelGas = require("../../model/fuelGas");
const fuelprice = require('../../model/Fuelprice')
exports.petrolserch = async( req , res) =>{
    const petrol = await buymentgas.find({category : 'petrol'})
    if(petrol){
        res.json(petrol);
     }
    else return console.log('search error');
}
exports.navato = async( req , res) =>{
    const navto = await buymentgas.find({category : 'navato'})
    if(navto){
        res.json(navto);
     }
   else  return console.log('search error');
}
exports.Gass = async( req , res) =>{
    const gas = await buymentgas.find({category : 'gas'})
    if(gas){
        res.json(gas);
     }
   else  return console.log('search error');
}



exports.petrolserchforgasfuel = async( req , res) =>{
    const petrol = await fuelGas.find({category : 'petrol'})
    if(petrol){
        res.json(petrol);
     }
    else return console.log('search error');
}
exports.navatoforgasfuel = async( req , res) =>{
    const navto = await fuelGas.find({category : 'navato'})
    if(navto){
        res.json(navto);
     }
   else  return console.log('search error');
}
exports.Gassforgasfuel = async( req , res) =>{
    const gas = await fuelGas.find({category : 'gas'})
    if(gas){
        res.json(gas);
     }
   else  return console.log('search error');
}

// soo dabicida qiimaha petrolka
exports.pricepetrolsearch = async (req , res) =>{
    const petrol = await fuelprice.find({category : 'Pertol'}).sort({ _id: -1 }).limit(1)
    if(petrol){
        res.json(petrol);
     }
   else  return console.log('search error');
}
// soo dabicida qiimaha navto
exports.pricenavtosearch = async (req , res) =>{
    const navto = await fuelprice.find({category : 'navato'}).sort({ _id: -1 }).limit(1)
    if(navto){
        res.json(navto);
     }
   else  return console.log('search error');
}
exports.pricegassearch = async (req , res) =>{
    const gas = await fuelprice.find({category : 'gas'}).sort({ _id: -1 }).limit(1)
    if(gas){
        res.json(gas);
     }
   else  return console.log('search error');
}



exports.petrolserchcustomer = async( req , res) =>{
    const petrol = await CustomerSellingGas.find({Gas : 'petrol'})
    if(petrol){
        res.json(petrol);
     }
    else return console.log('search error');
}
exports.navatocustomer = async( req , res) =>{
    const navto = await CustomerSellingGas.find({Gas : 'navato'})
    if(navto){
        res.json(navto);
     }
   else  return console.log('search error');
}
exports.Gasscustomer = async( req , res) =>{
    const gas = await CustomerSellingGas.find({Gas : 'gas'})
    if(gas){
        res.json(gas);
     }
   else  return console.log('search error');
}