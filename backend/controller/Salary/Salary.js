const Loan = require('../../model/Loan');
const Salarys = require('../../model/Salary');
const SaveEmployesalrey = require('../../model/SaveSalaryEmplooye');
exports.SalarySave = ( req , res) =>{
    const { Tittle  , Salary  } =req.body;
    const saveSalry = Salarys.create({
        Tittle : Tittle,
        SalaryEmplooyer: Salary,
    });
    if(saveSalry){
        res.json({ saveSalry : 'create employee salary' });
     }
    else return console.log('errrrrrrrr')
}

exports.Updatesalary = async (req, res) => {
    const { Tittle  , Salary , idSalary} = req.body;
    const Update = await Salarys.updateOne({_id: idSalary} , {$set: {Tittle : Tittle , SalaryEmplooyer : Salary}});
    if(Update){
        res.json({ message : 'Update employee salary' });
     }
    else return console.log('errrrrrrrr')
}


exports.getallSalry = async (req, res) => {
    const getall = await Salarys.find();
    if(getall){
        res.json(getall);
    }
    else return console.log('empty salary');
   }
   exports.ESsave = ( req , res) =>{
    const { Tittel , Fullname , Salary , dates ,NumberE } =req.body;
    const saveSalry = SaveEmployesalrey.create({
        Tittle : Tittel ,
        Fullname : Fullname,
        Salarys : Salary,
        Numbers : NumberE,
        date : dates
    });
    if(saveSalry){
        res.json({ saveSalry : 'create employee salary' });
     }
    else return console.log('errrrrrrrr')
}

exports.Deletemployesalary =  async (req , res) =>{
  const {Id} = req.body;
  const del = await SaveEmployesalrey.deleteOne({_id:Id});
  if(!del) returnres.json({message: 'Error deleting'})
  else return res.json({_id:Id})    ;
}



   exports.uptateEmplooyesalary = async ( req , res) =>{
    const { Tittel , Fullname , Salary , dates ,NumberE ,Id} =req.body;
    const saveSalry = await SaveEmployesalrey.updateOne({_id :Id }, {$set:
        {
            Tittle : Tittel ,
            Fullname : Fullname,
            Salarys : Salary,
            Numbers : NumberE,
            date : dates
        }
    });
    if(saveSalry){
        res.json({ saveSalry : 'create employee salary' });
     }
    else return console.log('errrrrrrrr')
}
   exports.Saveloans = ( req , res) =>{
    const { category  , price , quantity , date } =req.body;
    const Saveloan = Loan.create({
        category : category ,
         price : price ,
         quantity : quantity ,
         date : date ,
    });
    if(Saveloan){
        res.json({ Saveloan : 'create employee loan' });
     }
    else return console.log('errrrrrrrr')
}

exports.getallSalryEmplooye = async (req, res) => {
    const getall = await SaveEmployesalrey.find();
    if(getall){
        res.json(getall);
    }
    else return console.log('empty salary cannot save');
   }
   const currentDate = new Date();
//    const lastMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 1);
//    const lastMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
const currentMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
const currentMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

exports.getallloand = async (req, res) => {
    const getall = await Loan.find({
        date: {
            $gte: currentMonthStart.toISOString(),
            $lte: currentMonthEnd.toISOString()
          }
    });
    if(getall){
        res.json(getall);
    }
    else return console.log('empty Loan cannot save');
   }