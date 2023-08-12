import React, { useContext } from 'react'
import UserContex from '../../../../Statemagemant/creater/creater'
import fuelcontex from '../../../../Statemagemant/Fuelstate/Fuelstate'
const FormEmplooye = () => {
  const { enamechange, ebchange , ejchange , ewchange , eschange , enchange , emlooyeesave , showModal, setShowModal} = useContext(UserContex)

  const {salary } = useContext(fuelcontex)
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
           Create Emlooyee
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
                       Create Emlooyee
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
                               <input 
                               required
                               type="text"  
                               onChange={enamechange}
                               placeholder="Enter Fullname" 
                               className='p-2.5 w-full border-gray-300 border outline-none darks rounded'
                               />
                               <input 
                               required
                               type="text"  
                               placeholder="Enter age" 
                               onChange={ebchange}
                               className='p-2.5 w-full border-gray-300 border outline-none mt-2 darks rounded'
                               />
                            
                                 <select 
                               required
                               type="text"  
                               onChange={ejchange}
                               placeholder="Enter Job" 
                               className='p-2.5 w-full border-gray-300 border outline-none mt-2 darks rounded'
                               >
                                 {salary.map((item , i) =>{
                                   return(
                                       <option value={item.Tittle}>{item.Tittle}</option>
                                   )
                                 })}
                               </select>
                               <input 
                               required
                               type="Time"  
                               onChange={ewchange}
                               placeholder="Enter Fullname" 
                               className='p-2.5 w-full border-gray-300 border outline-none mt-2 darks rounded'
                               />
                               <select 
                               required
                               type="text"  
                               onChange={eschange}
                               placeholder="Enter Salary" 
                               className='p-2.5 w-full border-gray-300 border outline-none mt-2 darks rounded'
                               >
                                 {salary.map((item , i) =>{
                                   return(
                                       <option value={item.SalaryEmplooyer}>${item.SalaryEmplooyer + "  " +item.Tittle}</option>
                                   )
                                 })}
                               </select>
                               <input 
                               required
                               type="text"  
                               onChange={enchange}
                               placeholder="Enter NATIONALITY" 
                               className='p-2.5 w-full border-gray-300 border outline-none mt-2 darks rounded'
                               />
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
                          onClick={emlooyeesave}
                        >
                          Save Employee
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </>


    </div>
  )
}

export default FormEmplooye