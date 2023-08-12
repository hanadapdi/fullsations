import React, { useContext, useEffect } from 'react'
import {GrFormClose} from 'react-icons/gr'
import stateNav from '../../Statemagemant/Navcontex';
import SlidestateManagement, { SlideContex } from '../../Statemagemant/SlideState';
import Theme from '../theme/Theme';
import stateTheme from '../../Statemagemant/ThemeState';
import { FaWindowClose } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
const Seting = () => {
    const {closeStings} = useContext(stateNav);
    const { setSlidebar , slidebar} = useContext(SlidestateManagement);
    const {themewhite , themeBlack , onhendel , enabled , setEnabled} = useContext(stateTheme)

    const hiSmall = () => {
        setSlidebar(!slidebar);
        setEnabled(!enabled);
    }
 
  return (
    <div className='w-full fixed right-0 top-0 h-full sm:top-16 font-press font-semibold border border-white text-gray-400 '>
        <div className='w-full  fixed right-0 top-0  sm:top-14 border sm:w-[100%] darks h-full bg-white '>
            <div className='btn justify-between w-full py-6 px-2'>
               <div className='flex  items-center justify-between text-white font-press'>
                 <h1>Seting</h1>
                 <div>
                    <MdClose className='text-3xl text-white' onClick={closeStings}/>
                 </div>
               </div>
            </div>
          <ul className='h-full  w-full'>
          <ul className='py-2 px-4 '>
                <li 
                className='mt-2 cursor-pointer' 
                onClick={() =>{themewhite(); setSlidebar(true); }}
                >Light background
                </li>

                <li 
                 className='mt-2 cursor-pointer' 
                 onClick={() =>{themeBlack(); setSlidebar(true); }}
                 >Dark background
                 </li>
                <li 
                className='mt-2 cursor-pointer' 
                onClick={()=> setSlidebar(false)}
                >Small sideba
                </li>
            </ul>
            <ul className='py-2 mt-4 px-4 '>
                <li className='font-bold '>TOGGLE SIDEBAR</li>
                <li className='mt-3'>
                    <Theme onhendel={onhendel} enabled={enabled} hiSmall={hiSmall}/>
                </li>
            </ul>
            <ul className='py-2 mt-2 px-4'>
                <li className='font-bold '>Colors</li>
                <li>background</li>
                <li className='flex sapce-x-4 mt-4'>
                    <li className='bg-white rounded-full h-6 w-6 shadow' onClick={themewhite}></li>
                    <li className='bg-black rounded-full h-6 w-6 shadow-white shadow ml-2' onClick={themeBlack}></li>
                    <li className='bg-white rounded-full h-6 w-6 shadow ml-2' onClick={themewhite}></li>
                    <li className='bg-black rounded-full h-6 w-6 shadow-white shadow ml-2' onClick={themeBlack}></li>
                </li>
            </ul>
            <li className='px-3 py-2  mt-1 cursor-pointer'>
                <Link to={'/'} className='flex space-x-2 items-center '>
                    <BiLogOut className='text-xl'/>
                    <p className='font-semibold'>Logauto</p>
                </Link>
            </li>
          </ul>
            
        </div>
    </div>
  )
}

export default Seting