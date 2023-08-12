import React, { useContext, useState } from 'react'
import UserContex from '../../../../Statemagemant/creater/creater'

const CustomerForm = () => {
  const {showModal, setShowModal} =useContext(UserContex)
  const [fullname , setfullname] = useState('')
  const [number , setnumber] = useState(Number)
  const [nationalid , setnationalid] = useState(Number)
  const [carID , setcarID] = useState(Number)
  const [Location , setLocation] = useState('')
  const [alerts , setalerts] = useState(false)
  const [alertdata , setalertdata] = useState(null)
  const fullnamechange = (e) => setfullname(e.target.value);
  const numberchange = (e) => setnumber(e.target.value);
  const carIDchange = (e) => setcarID(e.target.value);
  const Locationchange = (e) => setLocation(e.target.value);
  const nationalidchange = (e) => setnationalid(e.target.value);
  const customersave = (e) =>{
    e.preventDefault();
    if(fullnamechange !== "" || number !== "" || carID !== "" ||Location !== "") {
      fetch('http://localhost:4000/createcustomer',{
       method:'post',
          headers:{
           "Content-Type" : "application/json"
          },
          body:JSON.stringify({
           fullname , number ,nationalid , carID , Location
       })
     }).then((res) => res.json()).then((data) =>{
      if(data){
        setalerts(true);
        setShowModal(false)

      }
     })
   }
   else return false;
 
  }
if(alerts) {
  setTimeout(() => {
    setalerts(false)
  }, 3000);

}
  const Alert = () =>{
    return(
        <div id="alert-1" class="flex p-4 mb-4 text-white rounded-lg btn dark:bg-gray-800 dark:text-blue-400" role="alert">
        <span class="sr-only">Info</span>
          <div class="ml-3 text-sm font-medium">
           success full Saved Customer 
            </div>
           <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
           <span class="sr-only">Close</span>
           <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"
           onClick={() => setalerts(false)}></path></svg>
           </button>
           </div>
    )
}
  return (
    <div>
            <>
            <button
              className="btn text-white  font-bold uppercase text-sm px-6 py-3 
              rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1
              mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
           Create Customer
            </button>
            {showModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto 
                  fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-sm">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full 
                   darks outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid 
                      border-slate-200 rounded-t">
                        <h3 className="text-1xl font-semibold">
                       Add customer
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right 
                          text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none 
                          focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                      <div className='w-full px-4 '>
                   <form className='' >
                       <div className="mb-3">
                         <input 
                         required
                         type="text"  
                         placeholder="Enter Fullname" 
                         className='p-2.5 w-full border-gray-300 border outline-none darks rounded'
                         onChange={fullnamechange}
                         />
                         <input 
                         required
                         type="text"  
                         placeholder="Enter Number" 
                         className='p-2.5 w-full border-gray-300 border outline-none mt-2 darks rounded'
                         onChange={numberchange}
                         />
                         <input 
                         required
                         type="text"  
                         placeholder="Enter Nationalid" 
                         className='p-2.5 w-full border-gray-300 border darks outline-none mt-2 rounded'
                         onChange={nationalidchange}
                         />
                         <input 
                         required
                         type="text"  
                         placeholder="Enter Car Id" 
                         className='p-2.5 w-full border-gray-300 border darks outline-none mt-2 rounded'
                         onChange={carIDchange}
                         />
                         <input 
                         required
                         type="text"  
                         placeholder="Enter Location"  
                         className='p-2.5 w-full border-gray-300 border outline-none mt-2 darks rounded'
                         onChange={Locationchange}
                         />
                       </div>
 
                        </form>
                         </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={customersave}
                        >
                          Save Customer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </>


   <div className='fixed top-14 right-0 duration-50 sm:w-[50%] w-full'>  
  {alerts ?   <Alert/> : null}
   </div>
    </div>
  )
}

export default CustomerForm