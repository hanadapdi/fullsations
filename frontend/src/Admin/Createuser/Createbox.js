import React, { useContext, useState } from 'react'
import {BiUser} from 'react-icons/bi'
import {RiUserStarLine} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import UserContex from '../../Statemagemant/creater/creater'
const Createbox = () => {
    const {user ,Emplooydate , customer}  = useContext(UserContex)


  return (
    <div>
         <div className='grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-4 w-full'>
        <Link to={'/layout/Admin/Createuser/Creater'} >
        <div className='w-full h-36 rounded darks p-5'>
            <div className='flex justify-between items-center'>
                <BiUser className='text-5xl'/>
                <p className='text-gray-600 text-3xl darks font-press font-semibold'>+{user.length}</p>
            </div>
            <p className='mt-6 '>Create User</p>
        </div>
        </Link>
        <Link to={'/layout/Admin/Createuser/Creater/Eployee'} >
        <div className='w-full h-36 rounded darks p-5'>
            <div className='flex justify-between items-center'>
            <RiUserStarLine className='text-5xl '/>
                <p className='text-gray-600 text-3xl darks font-press font-semibold'>+{Emplooydate.length}</p>
            </div>
            <p className='mt-6 '>Create Emplooye</p>
        </div>
        </Link>
        <Link to={'/layout/Admin/Createuser/Creater/customer'} >
        <div className='w-full h-36 rounded darks p-5'>
            <div className='flex justify-between items-center'>
                 <FiUsers className='text-5xl '/>
                <p className='text-gray-600 text-3xl darks font-press font-semibold'>+{customer.length}</p>
            </div>
            <p className='mt-6 '>Create Customer</p>
        </div>
        </Link>
        </div>

    </div>
  )
}

export default Createbox