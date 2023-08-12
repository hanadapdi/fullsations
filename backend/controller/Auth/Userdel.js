
const mongoose = require('mongoose')
const Account = require('../../model/Account')
const jwt = require('jsonwebtoken');
exports.DeletUser = async ( req , res) =>{
  try {
    const {userid} = req.body
    const dels = await Account.deleteOne({_id : userid})
    if (!dels) {
      return res.status(401).json({ message: 'Invalid DeletUser credentials' });
    }
    res.json({ token  , user :dels });
  } catch (error) {
    console.log('error')
  }
}


exports.updateuser = async (req, res) =>{
  try {
    const { usernameUpdate , passupdate , id} = req.body
    const item = await Account.updateOne( { _id: id}, { $set: { usernameAccount: usernameUpdate , passwordAccount : passupdate } } ) 
    res.send({ message: 'Item updated successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' + id});
  }
}