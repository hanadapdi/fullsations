const fuelGas = require("../../model/fuelGas")

exports.allgetfuelgas = async (req, res) => {
    const getall = await fuelGas.find()
    res.json(getall)
 }
exports.allgetfuelgaslast = async (req, res) => {
    const getall = await fuelGas.find().sort({_id: -1}).limit(3)
    res.json(getall)
 }
exports.allgetfuelgass = async (req, res) => {
    const getall = await fuelGas.find()
    res.json(getall)
 }
//  waa gaska la soo ibiyo
