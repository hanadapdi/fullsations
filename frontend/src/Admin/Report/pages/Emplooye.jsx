import React, { useContext, useRef } from 'react';
import  { SellTable } from '../../Fuel/Table/SellingTable';
import { useReactToPrint } from 'react-to-print';
import TableEploye, { TableEployeRepot } from '../../Createuser/Tables/TableEploye';
import logo from '../../../img/Logopng.png'
import prState from '../../../Statemagemant/Profilestate';
import Footer from '../Footer';
const Emplooye = () => {
  const {profiledata} = useContext(prState)
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  var currentDate = new Date();
  var lastMonthDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
  return (
    <div>
       <div className='sm:flex justify-between mt-10 '>
        <div className='h-full w-full darks py-5 rounded px-4 '
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
         <TableEployeRepot className='mt-10'/>
         
          </div>
          <Footer/>
       
        </div>
       </div>
    </div>
  )
}

export default Emplooye