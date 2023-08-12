import React, { useContext, useRef } from 'react'
import Gasprintpage from '../pages/Gasprintpage'
import Modelcontex from '../../../Statemagemant/ModelState'
import { FaGasPump, FaUserAlt } from 'react-icons/fa'
import { useReactToPrint } from 'react-to-print'
import Emplooye from '../pages/Emplooye'
import Customer from '../pages/Customer'
import { FiUsers } from 'react-icons/fi'

const Customermodel = () => {
  const {customer , setcustomer} = useContext(Modelcontex)
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
     <div className='flex  space-x-2 px-3 darks py-7  items-center rounded'>
            <div><FiUsers className='text-6xl text-[#4aac93]'/></div>
            <div className='w-full' onClick={()=> setcustomer(true)}>
                <h1 className='font-press font-semibold text-[#4aac93]  darks'>Customer</h1>
                <p className='text-sm'>Buyment Customer</p>
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div class="btn text-sm h-1 font-medium text-blue-100 text-center  
                  leading-none rounded-full" style={{width:"90%"}}> </div>
                </div>
            </div>
        </div>
       {customer ? (
         <>
           <div
             className="justify-center text-gray-600 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
           >
             <div className="relative w-auto my-6 mx-auto max-w-2xl">
               {/*content*/}
               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white  darks outline-none focus:outline-none">
                 {/*header*/}
                 <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                   <h3 className="text-xl font-semibold capitalize text-gray-500">
                    customer selling form 
                   </h3>
                   <button
                     className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                     onClick={() => setcustomer(false)}
                   >
                     <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                       ×
                     </span>
                   </button>
                 </div>
                 {/*body*/}
                 <div className="relative py-6 flex-auto" ref={componentRef}>
                  <Customer/>
                 </div>
                 {/*footer*/}
                 <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                   <button
                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                     type="button"
                     onClick={() => {
                       setcustomer(false)}
                     }
                   >
                     Close
                   </button>
                   <button
                     className="bg-[#3262a981] text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                     type="button" onClick={handlePrint}>
                     Print 
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

export default Customermodel