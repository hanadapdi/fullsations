const mongoose = require('mongoose');
const profilers = require('../../model/profilers');
exports.profilering = async ( req , res) =>{
   try {
      const {  email , Nymber , Address} = req.body;
      const uploade = await profilers.updateOne({_id: '64abafae975bfb2192d1d438'}, {$set:{
        Email:email , number: Nymber , address : Address
      }});
     if(uploade){
        res.json({ message : 'success' });
     }
    else  {
      console.log('profile error');
    }
    } catch (error) {
      console.log('error profile')
    }
}


exports.getprofile = async (req, res) => {
    const getall = await profilers.find()
    res.json(getall)
 }
