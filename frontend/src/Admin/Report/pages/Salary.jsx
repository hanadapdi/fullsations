import React, { useContext, useRef } from 'react';
import SellingTable, { SellTable } from '../../Fuel/Table/SellingTable';
import { useReactToPrint } from 'react-to-print';
import TableEploye from '../../Createuser/Tables/TableEploye';
import TablesCustomer from '../../Createuser/Tables/TablesCustomer';
import logo from '../../../img/Logopng.png'
import EmployeeSalaryTable from '../../Salary/Table/EmployeeSalaryTable';
import prState from '../../../Statemagemant/Profilestate';
import Footer from '../Footer';
const Salary = () => {
  const {profiledata} = useContext(prState)
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
 
  return (
    <div>
       <div className='sm:flex justify-between mt-10 '>
        <div className='h-full darks py-5 rounded px-4 '
        ref={componentRef} >
          <div className='flex justify-between items-center'>
            <div className='text-[#4aac93]'>
                <img src={logo} className='w-20'/>
              <h1 className='text-md capitalize font-press font-semibold'>Fuelstation</h1>
              <h1 className='text-[12px]'>Petrol bunk</h1>
            </div>
            <div className='text-[16px]  font-press text-[#4aac93] border-[#4aac93] rounded-sm border  p-2 px-4'>
            {profiledata.map((item ,i) =>{
               return(
                <div className=' w-full' key={i}>
                <h1>Email: {item.Email}</h1>
                <h1>Number: {item.number}</h1>
                <h1>Address:{item.address}</h1>
               </div>
               )
               })
               }
            </div>
          </div>
          <div className='w-full p-2  btn2 mt-10'>
             Time:
          </div>
          <div className='mt-10'>
         <EmployeeSalaryTable className=''/>
          </div>
          <Footer/>
        </div>
       </div>
    </div>
  )
}

export default Salary