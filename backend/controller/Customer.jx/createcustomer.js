const customers = require("../../model/customers");
exports.createcustomers = async( req , res) =>{
    const { fullname , number , nationalid , carID , Location} = req.body;
    const date = new Date();
   try {
    const customercreate= await customers.create({
        Date : date , 
        fullname : fullname,
        Numbers : number,
        NationalID :nationalid,
        CarID : carID,
        Location : Location,
    });
    if(customercreate){
        res.json({ customers : customercreate});
        console.log(customercreate)
     }
    else return console.log('errrrrrrrr')
   } catch (error) {
    console.log(error.message)
   }
}


exports.getallcustomercreate = async( req , res) =>{
    const customerget = await customers.find()
        res.json(customerget);
}

exports.cutomerdelet = async ( req , res) =>{
    try {
      const {userid} = req.body
      const dels = await customers.deleteOne({_id : userid})
      if (!dels) {
        return res.status(401).json({ message: 'Invalid DeletUser credentials' });
      }
      res.json({ user :dels });
    } catch (error) {
      console.log('error')
    }
  }


  exports.Updatecustomer = async (req, res) =>{
    try {
      const { fullname , number , nationalid , carID ,Location ,  id} = req.body
      const item = await customers.updateOne( { _id: id}, 
        { $set: 
        { 
          fullname: fullname , 
          Numbers : number , 
          NationalID: nationalid , 
          CarID :carID , 
          Location : Location , 
        } 
      } ) 
      res.send({ message: 'Item updated successfully' });
    } catch (error) {
      res.status(500).send({ error: 'Internal server error' + id});
    }
  }