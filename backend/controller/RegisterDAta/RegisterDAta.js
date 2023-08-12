const Datafuels = require('../../model/RegisterData');
exports.RegisterDatas = async ( req , res) =>{
     try {
        const {option , date ,   Totalgas , totalgasprice , totalgaybuyment ,  totalbuymentprice 
            ,Exchange , profit , description} = req.body;
            const DataRegister = await Datafuels.create({
            Type:option,
            Date : date , 
            TotalGas : Totalgas,
            ToTalGasprice : totalgasprice,
            Gasbuyment : totalgaybuyment,
            Gasbuyprice : totalbuymentprice,
            DailyExchange : Exchange,
            ProfitGas : profit,
            Description : description
        });
       if(DataRegister){
          res.json({ DataRegister : DataRegister});
       }
      } catch (error) {
        console.log(error.message)
      }
  }
  
  exports.getRegisterData = async (req , res) =>{
    const Data = await Datafuels.find();
   if(Data){
    res.json(Data);
   }
   else{
    console.log('empty register data')
   }
  }