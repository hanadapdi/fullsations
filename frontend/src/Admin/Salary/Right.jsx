import React, { useContext, useState } from 'react'
import {FcSimCardChip } from 'react-icons/fc'
import {AiOutlineFieldTime} from 'react-icons/ai'
import { FaDollarSign, FaEthereum } from 'react-icons/fa'
import Left from './Left'
import TableEploye from '../Createuser/Tables/TableEploye'
import Loanforn from './Loanforn'
import TableSalary from './Table/TableSalary'
import EmployeeSalaryTable from './Table/EmployeeSalaryTable'
import fuelcontex from '../../Statemagemant/Fuelstate/Fuelstate'
import UserContex from '../../Statemagemant/creater/creater'
const Right = () => {
    const [ dates , setdates] = useState(Date.now())
    const {totalgasbuyment  ,buymentcus} = useContext(fuelcontex)
    const {  totalSalary} = useContext(UserContex)
    const dataBuymentTotal =totalgasbuyment +buymentcus;
    const sub_balance = dataBuymentTotal -totalSalary;
    const databuy = dataBuymentTotal.toFixed(2);
    const Card = () =>{
        return(
            <div className='w-full darks p-5 h-[33vh]  rounded'>
               <div className='flex items-center justify-between'>
               <div>
                    <h1>Balance</h1>
                    <h1>${databuy}</h1>
                </div>
                <FcSimCardChip className='text-5xl'/>
               </div>
               <div className='mt-5 flex justify-between'>
               <div>
                    <h1>Total salary</h1>
                    <h1 className='flex space-x-1 items-center text-sm font-press textbtn'><FaEthereum/><p>{totalSalary.toFixed(2)}</p></h1>
                </div>
               <div>
                    <h1>sub balance</h1>
                    <h1 className='flex space-x-1 items-center text-sm font-press textbtn'><FaEthereum/><p>{sub_balance.toFixed(2)}</p></h1>
                </div>
                </div>
            </div>
        )
    }
    const Charts =() =>{
        return(
            <div>

            </div>
        )
    }
    const now = Date.now();
    const formattedDate = new Intl.DateTimeFormat("en-US").format(now);
  return (
    <div className='p-4'>
        <div className='flex justify-between btn p-2 items-center rounded'>
        <div className='pb-2 text-md font-bold capitalize font-press  text-gray-200'>
            <h1>Salary</h1>
        </div>
        <div className=' flex justify-center space-x-2 items-center p-1  text-center rounded text-white'>
            <h1>{formattedDate}</h1>
            <AiOutlineFieldTime className='text-xl'/>
        </div>
        </div>
        <div className='sm:flex justify-between sm:space-x-4 h-[33vh]  mt-4'>
            <Card className='darks'/>
            <div className='w-full darks overflow-x-scroll scrollbar-hide'>
              <div>
                <TableSalary/>
              </div>
            </div>
        </div>
        <div className='mt-3  text-md p-2 btn text-white rounded capitalize font-press  '>
            <h1>Employee wage</h1>
        </div>
       <div className='grid sm:grid-cols-2 mt-3 grid-cols-1 gap-4 '>
       <ul className='w-full py-3 h-40 darks  bg-white 4 darks rounded text-sm font-press '>
           <div className='mx-3 font-semibold mt-2 text-gray-500 font-press uppercase'>Oparetor</div>
               <div>
                 <li className='px-3 py-[4px]  mt-1 cursor-pointer'>
                <div className='flex justify-between font-press items-center'>
                </div>
                <h1 className='mt-2'>salary : $300 </h1>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={'bg-orange-300 text-sm h-1 mt-1 font-medium text-blue-100 text-center  leading-none rounded-full'} 
                  style={{width:'60%'}}> </div>
                </div>
                <p className=' flex  mt-4 items-center'><FaEthereum/> TimeWork : 12:00 Hr</p>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={'bg-green-600 text-sm h-1 mt-1 font-medium text-blue-100 text-center  leading-none rounded-full'} 
                  style={{width:'40%'}}> </div>
                </div>
               </li>
               </div>
           </ul>
       <ul className='w-full py-3 h-40 darks bg-white m darks rounded text-sm font-press '>
           <div className='mx-3 font-semibold mt-2 text-gray-500 font-press uppercase'>Staff</div>
               <div>
                 <li className='px-3 py-[4px]  mt-1 cursor-pointer'>
                <div className='flex justify-between font-press items-center'>
                </div>
                <h1 className='mt-2'>salary : $300 </h1>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={'bg-orange-300 text-sm h-1 mt-1 font-medium text-blue-100 text-center  leading-none rounded-full'} 
                  style={{width:'60%'}}> </div>
                </div>
                <p className=' flex  mt-4 items-center'><FaEthereum/> TimeWork : 24:00 Hr</p>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={'bg-green-600 text-sm h-1 mt-1 font-medium text-blue-100 text-center  leading-none rounded-full'} 
                  style={{width:'40%'}}> </div>
                </div>
               </li>
               </div>
           </ul>
       <ul className='w-full py-3 h-40 darks bg-white m darks rounded text-sm font-press '>
           <div className='mx-3 font-semibold mt-2 text-gray-500 font-press uppercase'>Manger</div>
               <div>
                 <li className='px-3 py-[4px]  mt-1 cursor-pointer'>
                <div className='flex justify-between font-press items-center'>
                </div>
                <h1 className='mt-2'>salary : $500 </h1>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={'bg-orange-300 text-sm h-1 mt-1 font-medium text-blue-100 text-center  leading-none rounded-full'} 
                  style={{width:'60%'}}> </div>
                </div>
                <p className=' flex  mt-4 items-center'><FaEthereum/> TimeWork : 24:00 Hr</p>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={'bg-green-600 text-sm h-1 mt-1 font-medium text-blue-100 text-center  leading-none rounded-full'} 
                  style={{width:'40%'}}> </div>
                </div>
               </li>
               </div>
           </ul>
       <ul className='w-full py-3 h-40 darks bg-white m darks rounded text-sm font-press '>
           <div className='mx-3 font-semibold mt-2 text-gray-500 font-press uppercase'>Admin</div>
               <div>
                 <li className='px-3 py-[4px]  mt-1 cursor-pointer'>
                <div className='flex justify-between font-press items-center'>
                </div>
                <h1 className='mt-2'>salary : $700 </h1>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={'bg-orange-300 text-sm h-1 mt-1 font-medium text-blue-100 text-center  leading-none rounded-full'} 
                  style={{width:'60%'}}> </div>
                </div>
                <p className=' flex  mt-4 items-center'><FaEthereum/> TimeWork : 24:00 Hr</p>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={'bg-green-600 text-sm h-1 mt-1 font-medium text-blue-100 text-center  leading-none rounded-full'} 
                  style={{width:'40%'}}> </div>
                </div>
               </li>
               </div>
           </ul>

       </div>
       <div className='mt-3  text-md p-2 btn text-white rounded capitalize font-press  '>
            <h1>Employee Table</h1>
        </div>
       <div className='p-2 darks mt-3 rounded overflow-x-scroll scrollbar-hide'>
         <TableEploye/>
       </div>
       <div className='mt-3  text-md p-2 btn text-white rounded capitalize font-press  '>
            <h1>Employee Salary Table</h1>
        </div>
       <div className='p-2 darks mt-3 rounded overflow-x-scroll scrollbar-hide'>
         <EmployeeSalaryTable/>
       </div>
    </div>
  )
}

export default Right