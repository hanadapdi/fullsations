import React, { useContext } from 'react'
import Formprofile from './Formprofile'
import gas  from '../.././img/gas.jpg'
import prState from '../../Statemagemant/Profilestate'
const Profiles = () => {
    const {profileimage ,profiledata} = useContext(prState)
    console.log(profiledata)
    const Leftpage = ({profiledata}) =>{
        return(
            <div className='w-full'>
              {profiledata.map((item ,i) =>{

               return(
                <div className=' w-full' key={i}>
                <h1>Email: {item.Email}</h1>
                <h1>Number: {item.number}</h1>
                <h1>Address:{item.address}</h1>
            </div>
               )
              })}
            </div>
        )
    }
    const Rightpage =() =>{
        return(
            <div className='w-full h-[70vh]'>
                <img src={gas} className='w-full h-full' />
            </div>
        )
    }
  return (
    <div className='w-[70%] m-auto'>
          <div className='pb-2 text-sm capitalize font-press  text-gray-400'>
            <h1>Profile</h1>
        </div>
        <div className='p-4  w-full rounded darks flex justify-between sm:space-x-4'>
            <div className='darks p-4 w-full'><Leftpage  profiledata={profiledata}/></div>
            <div className='darks p-4 w-full '><Formprofile/></div>
        </div>
    </div>
  )
}

export default Profiles