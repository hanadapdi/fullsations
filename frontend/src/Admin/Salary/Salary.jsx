import React, { useContext } from 'react'
import Left from './Left'
import Right from './Right'
import TableEploye from '../Createuser/Tables/TableEploye'
import { FaEthereum } from 'react-icons/fa'
import SlidestateManagement from '../../Statemagemant/SlideState'
import Chartsalary from './CreateSalary'

const Salary = () => {
  const {slidebar , setSlidebar} = useContext(SlidestateManagement)

  return (
    <div className={slidebar ? 'sm:mx-5' : 'lg:mx-32 md:mx-24 sm:mx-5'}>
       
        <div className='mt-4 grid rounded-none sm:grid-cols-12 sm:gap-1'>
          <div className='rounded sm:col-start-1 sm:col-end-5 '>
          <ul className='w-full py-3 darks bg-white mt-4 darks rounded text-sm font-press '>
           <div className='mx-3 font-semibold text-gray-500 font-press uppercase'>Salary STATUS</div>
     
               <div>
                 <li className='px-3 py-[4px]  mt-1 cursor-pointer'>
                <div className='flex justify-between font-press items-center'>
                 <h1 className='font-semibold text-gray-500'>
                  <p className='capitalize mt-2'>Titel : Oparetor</p>
                  </h1> 
                </div>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={'btn text-sm h-1 mt-1 font-medium text-blue-100 text-center  leading-none rounded-full'} 
                  style={{width:'60%'}}> </div>
                </div>
                <h1 className='mt-4'>salary : $300 </h1>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={'btn text-sm h-1 mt-1 font-medium text-blue-100 text-center  leading-none rounded-full'} 
                  style={{width:'60%'}}> </div>
                </div>
                <p className=' flex  mt-4 items-center'><FaEthereum/> TimeWork : 12:00 Hr</p>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={'bg btn text-sm h-1 mt-1 font-medium text-blue-100 text-center  leading-none rounded-full'} 
                  style={{width:'40%'}}> </div>
                </div>
               </li>
               </div>
        
            <div className='px-3 py-[6px] mt-2 '>
              <Left/>
            </div>
           </ul>
          </div>
          <div className='rounded sm:col-start-5 sm:col-end-13 '>
            <Right/>
          </div>
        </div>
    </div>
  )
}

export default Salary