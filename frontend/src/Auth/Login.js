import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loginstatecontec from '../Statemagemant/LoginState/Loginstate'
const Login = () => {
  const { Passwordchange , Usernamechange , Username , Password ,Login , setLogin} = useContext(Loginstatecontec);
 
  const history = useNavigate();

  console.log(Login);
  useEffect(() =>{
  //   if(Login){
  //     if(Login === "Admin"){
  //       history('/layout/Admin');
  //     }
  //     if(Login === "Superuser"){
  //       history('/layout/user');
  //     }
  //  }
  //  else return  history('/');
  },[])

  const LoginChange = (e) =>{
    e.preventDefault();
     fetch('http://localhost:4000/Login' , {
      method : 'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body : JSON.stringify({
        Username , Password
      })
     }).then((response) => response.json())
     .then( data => {
          if(data.user === "Admin"){
            history('/layout/Admin');
            setLogin(data.user);

          }
          if(data.user === "Superuser"){
            history('/layout/user');
            setLogin(data.user);
       }
     })
  }
  return (
    <div className='w-full h-screen flex bg-[#ecfbfb]'>
        <div className='w-[100%] md:w-[40%] lg:w-[30%] m-auto  h-[50vh]' >
        <form className=' p-3 rounded sm:mx-0 bg-[#007ebd5e] w-full h-full'>
            <div className=' ' >
                <div className=''>
                  <h1 className='mt-3 text-xl text-white font-semibold font-press'>
                    Login
                  </h1>
                </div>
                
            </div>
            <select className='mt-[2vh] w-full h-12 outline-none p-2' 
            onChange={Usernamechange} 
            >
                <option >Choce option</option>
                <option value="Superuser">Superuser</option>
                <option value="Admin">Admin</option>
            </select>

            <input type={'password'} name='Password'
             placeholder='Enter Password'
             className='w-full h-12 outline-none p-2 mt-5'
             onChange={Passwordchange}
             />

             <button className='p-3 w-full font-semibold capitalize bg-white rounded-sm text-[#00334e] mt-3'
             onClick={LoginChange}>
              Login
             </button>

        </form>
        <div className=' p-2'>
          
            <h1 className='font-press text-center mt-[4vh]'>
            A user interface that allows users to enter their 
            credentials often makes up the login page.
             </h1>
        </div>
        </div>
    </div>
  )
}

export default Login