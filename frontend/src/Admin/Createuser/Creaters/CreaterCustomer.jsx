import React from 'react'
import TablesCustomer from '../Tables/TablesCustomer'
import Form from './Forms/CustomerForm'

const CreaterCustomer = () => {
  return (
    <div className=''>
        <div className='pb-2 text-sm capitalize font-press  text-gray-400'>
            <h1>CreaterCustomer</h1>
        </div>
        <div className=' p-4 darks gap-4 scrollbar-hide '>
            <div className=' w-full'>
              <div className='flex justify-between mb-3'>
              <input  placeholder='search user '
              className='p-2 border rounded outline-none darks'
               />  
               <Form />
              </div>
                <TablesCustomer />
            </div>
        </div>
        
    </div>
  )
}

export default CreaterCustomer