import React, { useContext, useState } from 'react'
import {AiOutlineMenu ,AiOutlineSetting ,AiOutlineDashboard} from 'react-icons/ai'
import {BiMessage} from 'react-icons/bi'
import { motion } from 'framer-motion'
import {HiOutlineSearch} from 'react-icons/hi'
import {BsSun} from 'react-icons/bs'
import {IoMdNotificationsOutline} from 'react-icons/io'
import SlidestateManagement from '../../Statemagemant/SlideState'
import { ThemeState } from '../../Statemagemant/ThemeState'
import prState from '../../Statemagemant/Profilestate'
import Profiles from '../profile/Profiles'
import stateNav from '../../Statemagemant/Navcontex'
import Seting from '../setting/Setting'
const UserNavigation = () => {
    const {slidebar , setSlidebar ,showslides} =useContext(SlidestateManagement);
    const {hendalsetting , Setting , setSetting , closeStings}=useContext(stateNav)
    const {proshow ,profile} = useContext(prState)
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
      }
  return (

    <div className='w-full  '>
    <div className=' w-full flex'>

    <div className='flex md:mx-5  mx-2 justify-between w-full h-full  items-center '>
        
        <ul className={slidebar ? 'flex items-center ' : 'flex items-center md:space-x-16' } >
          
            <div className='flex items-center space-x-4'>
            <li onClick={showslides} className={'py2 rounded-full transition ease-in-out'}>
                <AiOutlineMenu className='text-2xl'/>
            </li>
             <div className=' space-x-2 px-2 sm:flex hidden dark:text-gray-600 bg-gray-100 border rounded-3xl items-center '>
                <input 
                placeholder='search'
                className='py-1 px-2 bg-gray-100  md:w-full rounded-3xl outline-none'
                />
                <HiOutlineSearch className='text-2xl'/>
             </div>
            </div>
       
        </ul>
        
        <ul className='flex space-x-2 text-xl items-center'>
           <div 
           className='w-8 h-8 rounded-full hidden sm:inline border border-green-400 bg-slate-400'
           onClick={proshow}
           ></div>

           <li onClick={hendalsetting} 
           className={'p-2  rounded-full transition ease-in-out '}>
           <AiOutlineSetting className='text-xl'/>
           </li>
           
        </ul>
    </div>
    </div>
      <motion.nav className='sm:top-2  top-0 z-10 fixed right-0 h-full  w-full sm:w-[22%]'
        animate={ Setting? "open" : "closed"}
        variants={variants}>
             <div className='right-0 w-full '>
              {
               Setting ? <Seting/>  : null
              }
             </div>
           </motion.nav>
     <div>
     {
        profile ? <div 
                   className='sm:top-13 fixed darks  duration-300 right-0 h-full   '
                   >
                    <Profiles/>
                 </div>
                : null
      }
     </div>
   
    </div>

  )
}

export default UserNavigation