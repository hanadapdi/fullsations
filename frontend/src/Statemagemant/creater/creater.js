import React, { createContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
const UserContex = createContext();
export const Usercreater = ({children}) => {
  const [username , setusername] = useState('');
  const [Password , setpassword] = useState('');
  const [confirm , setconfirm] = useState('');
  const [user , setuser] = useState([]);
  const [alerUser , setalerUser] = useState(false)
  const [numberofusers , setnumberofusers] = useState(Number);
  const [customer , setcustomer] = useState([]);
  const [AtTable , setatTable] = useState([]);
  const [searcheAttendees , setsearcheAttendees] = useState('');
  const [showModal, setShowModal] = React.useState(false);
  const [customerdelAlert , setCustomerdelAlert] = useState(false);
  const usernamechange = (e) => setusername(e.target.value);
  const passwordchange = (e) => setpassword(e.target.value);
  const confirmchnage = (e) => setconfirm(e.target.value);
  useEffect(() =>{
    fetch('http://localhost:4000/getallcustomers' ).then((res) => res.json())
    .then((data) =>{
     setcustomer(data)
    })
  }, [])
  useEffect(() =>{
    fetch('http://localhost:4000/getEmAttedance' ).then((res) => res.json())
    .then((data) =>{
     setatTable(data)
    })
  }, [])

  useEffect(() =>{
    fetch('http://localhost:4000/allusers' ).then((res) => res.json())
    .then((data) =>{
     setuser(data)
    })
  }, []);


//search employe attendees

const AsearchE =(e) => setsearcheAttendees(e.target.value);
const [searchs , setsearchs] =useState('')
const AsearchEs =(e) => setsearchs(e.target.value);

       
  const ondelet = (userid ) =>{
    fetch(`http://localhost:4000/deletes`,{
      method:'POST',
      headers:{
        "Content-Type" : "application/json"
      }
      , body:JSON.stringify({
        userid
      })
    })
    .then((res , e) =>{
      setalerUser(true)
    })
  console.log(userid)
  }

  const endelet = (userid ) =>{
    fetch(`http://localhost:4000/deletes`,{
      method:'POST',
      headers:{
        "Content-Type" : "application/json"
      }
      , body:JSON.stringify({
        userid
      })
    })
    .then((res , e) =>{
      alert(res)
    })
  console.log(userid)
  }

  setTimeout(() => {
    setCustomerdelAlert(false)
    setalerUser(false)
  }, 1000);

  const customerdlet = (userid ) =>{
    fetch(`http://localhost:4000/cutomerdelets`,{
      method:'POST',
      headers:{
        "Content-Type" : "application/json"
      }
      , body:JSON.stringify({
        userid
      })
    })
    .then((res , e) =>{
      setCustomerdelAlert(true)
    })
  console.log(userid)
  }

  const usersave = async (e) =>{
    e.preventDefault();
     if(confirm === Password) {
        fetch('http://localhost:4000/resgister',{
         method:'post',
            headers:{
             "Content-Type" : "application/json"
            },
            body:JSON.stringify({
             username , Password , 
         })
       }).then(res =>{
        setShowModal(false);
       })
     }
     else return false;
     }
  // customersatte
  const [Emplooyename , setEmplooyename] = useState('');
  const [Emplooyebirtghday , setEmplooyeebightdat] = useState('');
  const [Ejojb , setEjojb] = useState(''); 
  const [workrime , setworkrime] = useState('');
  const [Salary , setSalary] = useState('');
  const [nationalty , setnationalty] = useState('');
  const [EAlert2 , setEAlert2] = useState(false);
  const [Emplooydate , setEmplooydate] = useState([]);
  const enamechange = (e) => setEmplooyename(e.target.value);
  const ebchange = (e) => setEmplooyeebightdat(e.target.value);
  const ejchange = (e) => setEjojb(e.target.value);
  const ewchange = (e) => setworkrime(e.target.value);
  const eschange = (e) => setSalary(e.target.value);
  const enchange = (e) => setnationalty(e.target.value);

  console.log()
  useEffect(() =>{
    fetch('http://localhost:4000/getallEmployee' ).then((res) => res.json())
    .then((data) =>{
     setEmplooydate(data)
    
    })
  }, [])
  
  const totalSalary = Emplooydate.map(item => Number(item.Salary)).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  // console.log(totalSalary); // Output: 1300
  const chartsalary = Emplooydate.map((item) =>{
    return item.Salary;
  })
  // console.log(chartsalary); // Output:

 const [Showalert , setShowalert] = useState(false);
  const emlooyeesave = async (e) =>{
    e.preventDefault();
     if(Emplooyename !== '' || Emplooyebirtghday !== ""|| Ejojb !== "" || workrime !== "" || Salary !== "" || nationalty !== "" ) {
        fetch('http://localhost:4000/Emlooyee',{
         method:'post',
            headers:{
             "Content-Type" : "application/json"
            },
            body:JSON.stringify({
              Emplooyename , Emplooyebirtghday ,  Ejojb , workrime , Salary , nationalty
         })
       }).then(res => {
        setShowalert(true);
        setShowModal(false)
       })
       
     }
     else return false;
     setEmplooyename('')
     setEmplooyeebightdat('')
     setEjojb('')
     setworkrime('')
     setSalary('')
     setnationalty('')
     }
  
     const AlertCreater = ({create}) =>{
      return(
          <div id="alert-1" class="flex justify-between items-center p-4 mb-4 btn2 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <div class="ml-3 text-sm font-medium">
             {create}
              </div>
                <div className='flex justify-end text-xl'>
                <AiOutlineClose   onClick={() => setShowalert(false)}/>
                </div>
             </div>
      )
  }
  const [DelAlart , setDelAlart] = useState(false);
     const AlertCreaterDelet = ({create}) =>{
      return(
          <div id="alert-1" class="flex justify-between items-center p-4 mb-4 btn2 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <div class="ml-3 text-sm font-medium">
             {'delete'}
              </div>
                <div className='flex justify-end text-xl'>
                <AiOutlineClose   onClick={() => setShowalert(false)}/>
                </div>
             </div>
      )
  }
    
     const AlertCreaterUpdate = () =>{
      return(
          <div id="alert-1" class="flex p-4 mb-4 btn rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
          <span class="sr-only">Info</span>
            <div class="ml-3 text-sm font-medium">
              Save Emplooyee 
              </div>
             <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
             <span class="sr-only">Close</span>
             <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"
            ></path></svg>
             </button>
             </div>
      )
  }
  return (
    <UserContex.Provider 
    value={{ usernamechange , customer, passwordchange , usersave , user , confirmchnage ,
      enamechange, ebchange , ejchange , ewchange , eschange , enchange , emlooyeesave ,Emplooydate ,
       EAlert2 , setEAlert2, Emplooyename , ondelet , endelet  ,customerdlet , totalSalary ,chartsalary ,AsearchE,
       searcheAttendees ,AtTable ,showModal, setShowModal ,Showalert , setShowalert , alerUser
       ,AlertCreater ,AlertCreaterDelet ,AlertCreaterUpdate ,DelAlart ,setDelAlart , customerdelAlert}}>
        {children}
    </UserContex.Provider>
  )
}

export default UserContex