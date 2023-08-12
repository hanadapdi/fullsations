import React from 'react'
import { Link } from 'react-router-dom'

const Notivication = () => {
  return (
    <div className='fixed right-16  top-16 w-[18%]'>
    
        <ul className='w-full py-3 darks bg-white mt-2 rounded text-sm font-press '>
        <div className='mx-3 font-semibold font-press'>PROJECT STATUS</div>
            <li className='px-3 py-[6px] hover mt-1 cursor-pointer'>
             <div className='flex justify-between font-press items-center'>
              <h1 className='font-semibold'>Petrol</h1> <h1>90%</h1>
             </div>
             <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
               <div class="bg-orange-600 text-sm h-1 font-medium text-blue-100 text-center  leading-none rounded-full" style={{width:"90%"}}> </div>
             </div>
            </li>
            <li className='px-3 py-[6px] hover mt-1 cursor-pointer'>
             <div className='flex justify-between font-press items-center'>
              <h1 className='font-semibold'>navato</h1> <h1>60%</h1>
             </div>
             <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
               <div class="bg-orange-600 text-sm h-1 font-medium text-blue-100 text-center  leading-none rounded-full" style={{width:"60%"}}> </div>
             </div>
            </li>
            <li className='px-3 py-[6px] hover mt-1 cursor-pointer'>
             <div className='flex justify-between font-press items-center'>
              <h1 className='font-semibold'>Gas</h1> <h1>50%</h1>
             </div>
             <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
               <div class="bg-orange-600 text-sm h-1 font-medium text-blue-100 text-center  leading-none rounded-full" style={{width:"50%"}}> </div>
             </div>
            </li>
          
        </ul>
    </div>
  )
}

export default Notivication