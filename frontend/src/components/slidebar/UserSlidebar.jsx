import React, { useContext, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import Logo from '../../img/logo.jpg';
import { Link } from 'react-router-dom';
import fuelState from '../../Statemagemant/Statemagemant';
import SlidestateManagement from '../../Statemagemant/SlideState';
const UserSliderbar = ({showslides}) => {
const {slideUser , setSlide , slidebar} = useContext(SlidestateManagement);

  return (
    <div className=' '>
        <div className='font-press flex justify-between duration-500'>
          {
            slidebar ? (
              <div>
               <h1 className='md:text-xl font-bold'>Feul Station</h1>
               <p className='text-sm font-press'>petrol bunk</p>
             </div>
            ):(
              <div>
                 <img src={Logo} className='rounded-full'/>
              </div>
            )
          }
        </div>
        <div className='h-full w-full '>
        <div className='mt-5'>
                {
                    slideUser.map((item , i) =>{
                        return(
                             <ul key={i}>
                               <Link to={item.path} >
                               <li className={item.style}>
                                    <span className='text-xl'>{item.icon}</span>
                                    <p className={slidebar ? 'inline duration-500' : 'hidden duration-500'}>{item.name}</p>
                                     
                                </li>
                               </Link>
                             </ul>
                        )
                    })
                }
        </div>
        {/* <div className='h-40 flex justify-center m-auto w-full bg-slide bg-cover bg-center blur-10 rounded mt-5'>
          <div className='mt-14 text-center font-press text-xl  text-white capitalize  font-semibold'>
                <h1>Subscrip</h1>
                <p>buy new product</p>
          </div>
        </div> */}

        <div>
       
        </div>
        </div>
    </div>
  )
}

export default UserSliderbar