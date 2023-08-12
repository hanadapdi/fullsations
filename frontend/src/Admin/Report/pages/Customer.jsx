import React, { useContext, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import logo from '../../../img/Logopng.png'
import searchfuelgas from '../../../Statemagemant/Fuelstate/Searchgasforstate';
import fuelcontex from '../../../Statemagemant/Fuelstate/Fuelstate';
import prState from '../../../Statemagemant/Profilestate';
import { SellTablereport } from '../../Fuel/Table/SellingTable';
import Footer from '../Footer';
const Customer = () => {
  const { petrolquentityforgas,  navtofuctionmap ,Gasquentitys} = useContext(searchfuelgas)
  const { fuelprice , petrolquentity, Navtoquentity ,Gasquentity ,totalgasbuyment ,formattedDate , Gastoquentitycus, navtoquentitycus,  petrolquentitycus} = useContext(fuelcontex)
  const {profiledata} = useContext(prState)
  const petroltototalQuantity = petrolquentity + petrolquentitycus;
  const gastototalQuantity = Gasquentity + Gastoquentitycus;
  const navtototalQuantity = Navtoquentity+ navtoquentitycus;

      const pTotal = petroltototalQuantity / petrolquentityforgas * 100;
      const nTotal = navtototalQuantity / navtofuctionmap * 100;
      const gTotal = gastototalQuantity / Gasquentitys * 100;

      const total = totalgasbuyment;
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
             {formattedDate}
          </div>
          <div className='mt-10'>
         <SellTablereport className='mt-10'/>
          </div>
         <div className='flex justify-between mt-4  btn2 items-center p-2'>
           <h1 className='font-press font-semibold text-[12px]'>term 30 day  from issue</h1>
           <h1 className='flex justify-between space-x-8'>
            <p>Total</p>
            <p>${total}</p>
           </h1>
         </div>
         <div className='mt-10'>
          <h1 className='text-sm uppercase'> Buyment INfromation</h1>
          <div className='mt-2 grid grid-cols-3 gap-10'>
            <div className=' p-2  btn2 rounded-sm py-4'>
               <h1 className='text-[12px]'>Petrol </h1>
               <h1 className='text-[12px]'>LT:{petroltototalQuantity}</h1>
               <h1 className='text-[12px]'>{pTotal}%</h1>
            </div>
            <div className=' p-2  btn2 rounded-sm py-4'>
               <h1 className='text-[12px]'>Navato </h1>
               <h1 className='text-[12px]'>LT:{navtototalQuantity}</h1>
               <h1 className='text-[12px]'>{nTotal}%</h1>
            </div>
            <div className=' p-2  btn2 rounded-sm py-4'>
               <h1 className='text-[12px]'>Gas </h1>
               <h1 className='text-[12px]'>LT:{gastototalQuantity}</h1>
               <h1 className='text-[12px]'>{pTotal}%</h1>
            </div>
          </div>
         </div>
         <Footer/>
        </div>
       </div>
    </div>
  )
}

export default Customer