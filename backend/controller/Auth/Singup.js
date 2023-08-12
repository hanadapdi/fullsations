const mongoose = require('mongoose')
const Account = require('../../model/Account')
const singup = async ( req , res) =>{
   try {
      const {username , Password } = req.body;
      const user = await Account.create({usernameAccount : username , passwordAccount : Password});
     if(user){
        res.json({ user : user});
     }
     return console.log('errrrrrrrr')
    } catch (error) {
      console.log('error')
    }
}

// const allegtusers = async (req, res) => {
//    const getall = Account.find().then(data =>{
//       res.json(data)
//    })
// }
// module.exports = allegtusers;
module.exports = singup;