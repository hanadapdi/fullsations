const mongoose = require('mongoose')
const Account = require('../../model/Account')
const jwt = require('jsonwebtoken');
const Login = async ( req , res) =>{
  try {
    const {  Username , Password } = req.body;
    const user = await Account.findOne({usernameAccount : Username , passwordAccount : Password});
    if (!user) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }
    else if (user.passwordAccount === Password) {
      const token = jwt.sign({ userId: user._id }, 'secret');
      res.json({ token  , user : user.usernameAccount  });
    }
  } catch (error) {
    console.log('error')
  }
}

module.exports = Login;