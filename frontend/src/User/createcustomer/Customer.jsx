import React, { useContext } from 'react'
import { FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Table from '../../Admin/Anlayzices/Table'
import TablesCustomer from '../../Admin/Createuser/Tables/TablesCustomer'
import { CreateCustomer } from '../../Eportpages'
import CustomerForm from '../../Admin/Createuser/Creaters/Forms/CustomerForm'
import UserContex from '../../Statemagemant/creater/creater'

const Customer = () => {
  const {customer} = useContext(UserContex)
  return (
    <div className='sm:w-[90%]  m-auto'>
        <div className='sm:flex sm:space-x-4 '>
         <div className='sm:w-[50%]'>
         <div className='w-full h-36 rounded darks p-5'>
            <div className='flex justify-between items-center'>
                 <FiUsers className='text-5xl '/>
                <p className='text-gray-600 text-3xl darks font-press font-semibold'>+{customer.length}</p>
            </div>
            <p className='mt-6 font-press'>Create Customer</p>
        </div>
        <div className='mt-4 darks p-4'>
            <CustomerForm/>
        </div>
         </div>
        <div className='darks sm:mt-0 mt-4  w-full'>
            <TablesCustomer/>
        </div>
        </div>
    </div>
  )
}

export default Customer