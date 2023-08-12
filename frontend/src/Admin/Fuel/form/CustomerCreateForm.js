import React from 'react'

const CustomerCreateForm = () => {
  return (
    <div className='w-full p-4 '>
        <div className='font-press capitalize font-semibold'>Selling form </div>
        <form className='w-full mt-6 text-black'>

             <select className='w-full rounded p-3 outline-none'>
                <option value="" >Select</option>
                <option value="Pertol" >Pertol</option>
                <option value="navato" >Navato</option>
                <option value="gas" >Gas</option>
             </select>
             <input 
             type="number"
             placeholder='Enter Quantity'
             className='w-full p-3 outline-none mt-6 rounded'/>

             <input 
             type="date"
             placeholder='Enter Quantity'
             className='w-full p-3 outline-none mt-6 rounded'/>
             <button className='p-3 w-full bg-blue-400 mt-6 rounded '>onClick</button>

        </form>
    </div>
  )
}

export default CustomerCreateForm