const mongoose = require('mongoose')
const Account = require('../../model/Account')
const jwt = require('jsonwebtoken');
const Userupdate = async ( req , res) =>{
    const id = req.params.id;
    const  { firstName , ages , skill } = req.body;
    try {
        const todo = await singin.updateOne( { _id: id }, { $set: { name: firstName , age : ages , skill : skill} } ) 
        console.log(id)
      res.send(todo);
      console.log(todo);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
}

module.exports = Userupdate;