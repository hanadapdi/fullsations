import React, { useContext } from 'react'
import { WiEarthquake } from 'react-icons/wi'
import { BiNetworkChart } from 'react-icons/bi'
import { MdOutlineShowChart } from 'react-icons/md'
import fuelcontex from '../../Statemagemant/Fuelstate/Fuelstate'

const Price = () => {
    const {fuelprice} = useContext(fuelcontex)
    
    const icons =[ 
                 <WiEarthquake className='text-5xl'/> ,
                 <MdOutlineShowChart className='text-5xl'/>,
                 <BiNetworkChart className='text-5xl'/>
                 ]
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-4 w-full'>
        {
            fuelprice.map((item , i) =>{
                return(
                    <div className='w-full h-32 rounded darks p-5' key={i}>
                    <div className='flex justify-between items-center'>
                        <p>{icons[i]}</p>
                        <p className='text-xl font-press font-semibold'>SL: {item.price}</p>
                    </div>
                    <p className='mt-2 font-press text-[12px] text-gray-600 darks capitalize font-semibold'>
                        <p>{item.category} Total price</p>
                        <p className='mt-1 text-[10px]'> {' '+ item.quantity}:LT </p>
                    </p>
                </div>
                )
            })
        }
       
      
        
    </div>
  )
}

export default Price