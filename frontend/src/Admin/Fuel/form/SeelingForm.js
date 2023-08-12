import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SeelingForm = () => {
  const [category , setcategory] = useState('')
  const [Quantity , setQuantity] = useState(Number)
  const [price , setprice] = useState(Number)
  const [dates , setdates] = useState('')
  const categorychange = (e) => setcategory(e.target.value);
  const quantitychange = (e) => setQuantity(e.target.value);
  const pricechange = (e) => setprice(e.target.value);
  const dateschange = (e) => setdates(e.target.value);

  const buymentfuelsave = (e) =>{
    e.preventDefault();
    if(category !== '' || Quantity !== "" || price !== ""){
      try {
        fetch('http://localhost:4000/buymentgasprices',{
          method:'post',
             headers:{
              "Content-Type" : "application/json"
             },
             body:JSON.stringify({
                 category , Quantity , price , dates
          })
        })
      } catch (error) {
        console.log('halkan waa buymenyfuelsave hada error aya jira')
      }
    }
  }
  return (
    <div className='w-full p-4 '>
        <div className='font-press capitalize '>Selling form </div>
        <form className='w-full mt-6 text-black'>

             <select className='w-full border darks  rounded p-3 outline-none'
             onChange={categorychange}>
                <option value="" >Select</option>
                <option value="Pertol" >Pertol</option>
                <option value="navato" >Navato</option>
                <option value="gas" >Gas</option>
             </select>
             <input 
             type="number"
             placeholder='Enter Quantity'
             className='w-full  darks p-3 border outline-none mt-4 rounded'
             onChange={quantitychange}/>

             <input 
             type="number"
             placeholder='Enter price'
             className='w-full p-3  border outline-none mt-4 rounded'
             onChange={pricechange}/>
             <input 
             type="date"
             placeholder='Enter  Quantity'
             className='w-full p-3  border outline-none mt-4 rounded'
             onChange={dateschange}/>

             <button className='p-3 w-full  mt-6 rounded text-xl font-press font-semibold text-white btn' 
             onClick={buymentfuelsave}>buy</button>

        </form>
    </div>
  )
}

export default SeelingForm