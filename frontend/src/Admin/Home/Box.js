import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import {FaEthereum} from 'react-icons/fa'
const Box = () => {
  return (
    <div>
         <div className='w-full px-3 py-2 md:px-4  lg:h-[27vh] text-white bg-estate1 bg-center bg-cover rounded-md'>
               <div className='flex justify-between items-center mt-24'>
                 <div className=''>
                   <h1 className='text-sm font-semibold '>Name : Hanad abdinasir </h1>
                   <p className='flex font-press mt-2'>
                    <FaEthereum/>
                    <p>1.44 ether</p>
                    </p>
                 </div>
                  <div className=' w-10 h-10 rounded-full bg-gray-700'></div>
               </div>
         </div>
    </div>
  )
}

export default Box