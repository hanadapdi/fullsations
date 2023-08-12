const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const singup = require('./controller/Auth/Singup');
const Login = require('./controller/Auth/Login');
const allegtusers = require('./controller/Auth/allgetusers');
const Userupdate = require('./controller/Auth/Userupdate');
const getallbuymentfuelprice = require('./controller/fuel/getallbuymentfuelprice');
const fuelgas = require('./controller/fuel/fuelGas');
const {getallfuelpricess , getlastprice} = require('./controller/fuel/getfuelprice')
const { petrolserch, navato, Gass, petrolserchforgasfuel, navatoforgasfuel, Gassforgasfuel, pricepetrolsearch, pricenavtosearch, pricegassearch, petrolserchcustomer, navatocustomer, Gasscustomer } = require('./controller/fuel/search');
const { createcustomers, getallcustomercreate, cutomerdelet, Updatecustomer } = require('./controller/Customer.jx/createcustomer');
const { DeletUser, updateuser } = require('./controller/Auth/Userdel');
const { creatEmplooye, allgetEmplooye, updateEmployee, DeletEmlpoye, attedanceEm, getAttandance } = require('./controller/Emplooye/Emplooye');
const { allgetfuelgas, allgetfuelgass, allgetfuelgaslast } = require('./controller/fuel/getallfuelprice');
const { exchange, getExchange } = require('./controller/Exchange/Exchange');
const { SalarySave, getallSalry, ESsave, Saveloans, getallloand, getallSalryEmplooye, Updatesalary, uptateEmplooyesalary, Deletemployesalary } = require('./controller/Salary/Salary');
const { profilering, getprofile } = require('./controller/profiles/profiles');
const { savefuelprice, Updateprice } = require('./controller/fuel/fuelprice');
const { buymentgasprice, customerBuyment, getcustomerbuyment, customerbuymentUpdate, buymentdel, buymentgaspriceUpdate, Customerdelbuyment } = require('./controller/fuel/buymentgas');
const { RegisterDatas, getRegisterData } = require('./controller/RegisterDAta/RegisterDAta');
const app = express();
app.use(bodyParser.json());
app.use(cors())
// 
mongoose.connect('mongodb://127.0.0.1/fuel_station')
// mongoose.connect("mongodb+srv://hanad:hanad13@crud.7nnhshh.mongodb.net/fuel_station")
app.post('/resgister', singup)
app.post('/Login', Login)
app.get('/allusers' , allegtusers)
app.post('/deletes' , DeletUser)
app.put('/updateuser' , updateuser)

app.post('/RegisterDatas' , RegisterDatas)
app.get('/registersdata' , getRegisterData)

app.post('/registerfuelprice' , savefuelprice)
app.put('/updatepricefuelgas' , Updateprice)
app.get('/getfuelprice' , getlastprice)
app.post('/buymentgasprices' , buymentgasprice)
app.post('/buymentgaspricesupdate' , buymentgaspriceUpdate)

app.post('/customerBuyments' , customerBuyment)
app.put('/customerSellingUpdate' , customerbuymentUpdate)
app.get('/customergetbuyment' , getcustomerbuyment)
app.post('/Customerdelbuyments' , Customerdelbuyment)
app.post('/deletebuymentgas' , buymentdel)

app.post('/fuelgas' , fuelgas)
app.get('/allgetfuel' , allgetfuelgas)
app.get('/getfuelgaslast' , allgetfuelgaslast)
app.get('/allgetfuels' , allgetfuelgass)
app.get('/searcgpetrolforgasfuel' , petrolserchforgasfuel)
app.get('/serachnavatoforgasfuel' , navatoforgasfuel)
app.get('/searchgasforgasfuel' , Gassforgasfuel)

app.get('/searchpetrol' ,petrolserch)
app.get('/searchnavto' , navato)
app.get('/searchgas' , Gass)

app.get('/searchcustomerpetrol',petrolserchcustomer)
app.get('/searchcustomernavto',navatocustomer)
app.get('/searchcustomergas',Gasscustomer)

app.get('/pricepetrolsearch/api' , pricepetrolsearch)
app.get('/pricenavtosearch/api' , pricenavtosearch)
app.get('/pricegassearch/api' , pricegassearch)

app.get('/getbuymentgasprice' , getallbuymentfuelprice)
app.post('/Emlooyee' ,creatEmplooye )
app.get('/getallEmployee' , allgetEmplooye)
app.put('/updateEmployees' , updateEmployee)
app.post('/Empolyedlet' , DeletEmlpoye)
app.post('/emAttedance' , attedanceEm)
app.get('/getEmAttedance' , getAttandance)

app.post('/createcustomer' , createcustomers)
app.get('/getallcustomers' , getallcustomercreate)
app.post('/cutomerdelets' , cutomerdelet)
app.put('/customerupdates' , Updatecustomer)

app.post('/exchange' , exchange)
app.get('/getexchange' , getExchange)

app.post('/savesalary' , SalarySave)
app.put('/uptateEmplooyesalarys' , uptateEmplooyesalary)
app.get('/getallSalrys' , getallSalry)
app.get('/getallSalryEmplooyes' , getallSalryEmplooye)
app.post('/esavesalary' , ESsave)
app.put('/Updatesalarys' , Updatesalary)
app.post('/Deletemployesalarys' , Deletemployesalary)

app.post('/loansave' , Saveloans)
app.get('/loandget' , getallloand)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Store files in the "uploads" folder
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Use unique filenames
    },
  });
  
  const upload = multer({ storage });
app.put('/api/profiles' ,profilering );
app.get('/api/getpro' ,getprofile );
app.listen(4000 , (req , res) => {
    console.log('server listening on port')
});