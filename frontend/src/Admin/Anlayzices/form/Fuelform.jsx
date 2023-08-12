import React, { useState } from 'react'

const Fuelform = () => {

  return (
    <div className='w-full p-4 '>
        <div className='font-press capitalize '>petrol price </div>
        <form className='w-full mt-6 text-black'>

             <select className='w-full border darks  rounded p-3 outline-none'>
                <option value="" >Select</option>
                <option value="petrol" >petrol</option>
                <option value="navato" >Navato</option>
                <option value="gas" >Gas</option>
             </select>

             <input 
             type="number"
             placeholder='Enter price'
             className='w-full  darks p-3 border outline-none mt-6 rounded'/>

             <input 
             type="date"
             className='w-full p-3  border outline-none mt-6 rounded'/>
             <button className='p-3 w-full  mt-6 rounded text-xl font-press font-semibold text-white btn' >Add</button>

        </form>
    </div>
  )
}

export default Fuelform