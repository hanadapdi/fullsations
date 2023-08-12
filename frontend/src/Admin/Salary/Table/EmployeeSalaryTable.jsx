import React, { useContext, useState } from 'react'
import fuelcontex from '../../../Statemagemant/Fuelstate/Fuelstate';
import UserContex from '../../../Statemagemant/creater/creater';

const UpdatesalaryEmployee =({Id}) =>{
    const [showModal, setShowModal] = useState(false);
    const [Tittel , setTittel] = useState('')
    const [Fullname , setFullname] = useState(Number)
    const [Salary , setSalary] = useState(Number)
    const [NumberE , setNumberE] = useState(Number)
    const [dates , setdates] = useState('')
    const Tittelchange = (e) => setTittel(e.target.value);
    const Fullnamechange = (e) => setFullname(e.target.value);
    const Salarychange = (e) => setSalary(e.target.value);
    const NUmberEchange = (e) => setNumberE(e.target.value);
    const dateschange = (e) => setdates(e.target.value);
    const {Emplooydate } = useContext(UserContex)
    const {salary} = useContext(fuelcontex);
    const uptateEmplooyesalary =async (e) =>{
      setShowModal(false) 
      if(Tittel !== '' || Fullname !== "" || Salary !== ""){
        try {
          e.preventDefault();
         const itemupdate =  fetch('http://localhost:4000/uptateEmplooyesalarys',{
            method:'Put',
               headers:{
                "Content-Type" : "application/json"
               },
               body:JSON.stringify({
                   Tittel , Fullname , Salary , dates , NumberE ,Id
            })
          })
        } catch (error) {
          console.log('halkan waa buymenyfuelsave hada error aya jira')
        }
      }
    }
    return (
        <>
        <button
          className="   text-sm outline-none transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
        Edit
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full darks outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-md font-semibold darks">
                    Salary form
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                     <form className='w-full  text-black'>
                       <div className='textbtn font-semibold opacity-80 capitalize'>Title</div>
                        <select className='w-full border darks   rounded p-3 outline-none'
                                onChange={Tittelchange}>
                          {
                            salary.map((item , i) =>{
                              return(
                                   <option value={item.Tittle}  key={i}>{item.Tittle}</option>
                                   )
                            })
                          }
                               
                          </select>
                          <div className='textbtn font-semibold opacity-80 capitalize mt-3'>fullname</div>

                        <select className='w-full border darks  rounded p-3 outline-none'
                                onChange={Fullnamechange}>
                          {
                            Emplooydate.map((item , i) =>{
                              return(
                                   <option value={item.fullname}  key={i}>{item.fullname}</option>
                                   )
                            })
                          }
                               
                          </select>
                          <div className='textbtn font-semibold opacity-80 capitalize mt-3'>Salary</div>
                        <select className='w-full border darks   rounded p-3 outline-none'
                                onChange={Salarychange}>
                          {
                            salary.map((item , i) =>{
                              return(
                                   <option value={item.SalaryEmplooyer}  key={i}>${item.SalaryEmplooyer}</option>
                                   )
                            })
                          }
                               
                          </select>

                          <div className='textbtn font-semibold opacity-80 capitalize mt-3'>number</div>
                        <input 
                        type="number"
                        placeholder='Enter Numebr Emplooyer'
                        className='w-full p-3 darks  border outline-none  rounded'
                        onChange={NUmberEchange}/>
                        
                        <input 
                        type="date"
                        placeholder='Enter  Salary'
                        className='w-full p-3  darks border outline-none mt-4 rounded'
                        onChange={dateschange}/>
                  </form>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false)}
                      }
                    >
                      Close
                    </button>
                    <button
                      className="btn text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                        onClick={uptateEmplooyesalary}
                    >
                      Save 
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    )
}
const EmployeeSalaryTable = () => {
    const {emplooyesalary ,Esprint} = useContext(fuelcontex)
    const {totalSalary} = useState(UserContex)
    const [ Show , setShow] = useState(false)
    const Alert = () => {
      return (
        <div
        class="mb-3 hidden w-full items-center rounded-lg bg-warning-100 px-6 py-5 text-base text-warning-800 data-[te-alert-show]:inline-flex"
        role="alert"
        data-te-alert-init
        data-te-alert-show>
        <strong class="mr-1">Holy guacamole! </strong> You should check in on
        some of those fields below.
        <button
          type="button"
          class="ml-auto box-content rounded-none border-none p-1 text-warning-900 opacity-50 hover:text-warning-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-alert-dismiss
          aria-label="Close">
          <span
            class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6">
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>
      </div>
      )
    }
    // totalSalaryEmplooye
  
    const delet =(Id) => {
      //  setShow(true)
      fetch('http://localhost:4000/Deletemployesalarys',{
        method:'POST',
           headers:{
            "Content-Type" : "application/json"
           },
           body:JSON.stringify({
              Id
        })
      })
    }
  return (
    <div class="relative overflow-x-autosm:rounded-lg">
   
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs darks uppercase  ">
            <tr className='border-b'>
                <th scope="col" class="px-4 py-3">
                    Date
                </th>
                <th scope="col" class="px-4 py-3">
                    Tittel
                </th>
                <th scope="col" class="px-4 py-3">
                    Fullname
                </th>
                <th scope="col" class="px-4 py-3">
                    Salary
                </th>
                <th scope="col" class="px-4 py-3">
                    Number
                </th>
                <th scope="col" class="px-4 py-3">
                    Action
                </th>
             
            </tr>
        </thead>
        <tbody>
            {
              
              emplooyesalary.map((item , i) =>{
               
                  // const values = salary.map(items => item.salary); // Extract the 'value' property values into a new array

               ; 
                    return (
                        <tr class="bg-white border-b darks" key={i}>
                          <td class="px-4 py-4">
                              {item.date}
                          </td>
                          <td class="px-4 py-4">
                              {item.Tittle}
                          </td>
                          <td class="px-4 py-4">
                              {item.Fullname}
                          </td>
                          <td class="px-4 py-4">
                              {item.Salarys}
                          </td>
                          <td class="px-4 py-4">
                              {item.Numbers}
                          </td>
                          <td class="px-4 py-4 flex justify-between cursor-pointer space-x-4">
                             <div><UpdatesalaryEmployee Id={item._id}/></div>
                             <div onClick={()=>delet(item._id)}>Delet</div>
                          </td>
                       </tr>
                    )
                })
            }
        </tbody>
    </table>
    <div className='flex justify-between mt-4  items-center bgn p-2 w-full   btn2 '>
           <h1 className='font-press font-semibold text-[12px]'>Salary Total</h1>
           <h1 className='flex justify-between space-x-8'>
            <p>Subtotal</p>
            <p>{ Esprint}</p>
           </h1>
         </div>
</div>
  )
}

export default EmployeeSalaryTable