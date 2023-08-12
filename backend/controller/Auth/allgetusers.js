const mongoose = require('mongoose')
const Account = require('../../model/Account')
const allegtusers = async (req, res) => {
   const getall = await Account.find();
   res.json(getall)
}
module.exports = allegtusers;
