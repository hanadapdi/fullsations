import React from 'react'
import { BiLogOut, BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Profiles = () => {

  return (
    <div className='fixed right-16 top-16 w-[18%]'>
        <ul className='w-full py-4 darks mt-2 rounded text-sm font-press '>
            <li className='px-3 py-2 hover mt-1 cursor-pointer'>
                <Link to={'/layout/Admin/Profiles'} className='flex space-x-2 items-center '>
                    <BiUser className='text-xl'/>
                    <p className='font-semibold'>Profiles</p>
                </Link>
            </li>
           
           
        </ul>
    </div>
  )
}

export default Profiles