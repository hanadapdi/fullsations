const mongoose = require('mongoose')
const Emplooys = require('../../model/Emplooye');
const Attendance = require('../../model/Attendance');
exports.creatEmplooye = async ( req , res) =>{
  const now = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US").format(now);
   try {
      const {Emplooyename , Emplooyebirtghday ,  Ejojb , workrime , Salary , nationalty} = req.body;
      const Emplooy = await Emplooys.create({
        Date : formattedDate , 
        fullname : Emplooyename,
        birghtday : Emplooyebirtghday,
        job:Ejojb,
        workTime:workrime,
        Salary:Salary,
        nationalty:nationalty
      });
     if(Emplooy){
        res.json({ Emplooy : Emplooy});
     }
     return console.log('errrrrrrrr')
    } catch (error) {
      console.log('error')
    }
}

exports.allgetEmplooye = async (req, res) => {
  const getall = await Emplooys.find();
  res.json(getall)
}

exports.updateEmployee = async (req, res) =>{
  try {
    const { fullnameUpdate , ageupdate , jobupdate , workTimeupdate , salaryupdate , nationalityupdate , id} = req.body
    const item = await Emplooys.updateOne( { _id: id}, 
      { $set: 
      { 
        fullname: fullnameUpdate , 
        birghtday : ageupdate , 
        job: jobupdate , 
        workTime :workTimeupdate , 
        Salary : salaryupdate , 
        nationalty : nationalityupdate 
      } 
    } ) 
    res.send({ message: 'Item updated successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' + id});
  }
}


exports.DeletEmlpoye = async ( req , res) =>{
  try {
    const {id} = req.body
    const dels = await Emplooys.deleteOne({_id : id})
    if (!dels) {
      return res.status(401).json({ message: 'Invalid DeletUser credentials' });
    }
    res.json({ token  , user :dels });
  } catch (error) {
    console.log('error')
  }
}



  exports.attedanceEm  = async ( req , res) =>{
   try {
      const { Tittel  , Fullname ,dates ,AttendanceId } = req.body;
      const Exchanges = await Attendance.create({
         Tittel : Tittel,
         Name : Fullname,
         Date : dates,
         AttendanceId : AttendanceId
      });
     if(Exchanges){
        res.json({ Exchanges : Exchanges});
     }
    else return console.log('errrrrrrrr')
    } catch (error) {
      console.log('error')
    }
}

exports.getAttandance = async (req, res) => {
 const getall = await Attendance.find()
      res.json(getall)
}