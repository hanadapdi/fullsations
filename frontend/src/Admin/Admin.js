import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import Slider from '../components/slidebar/Slidebar'
import Navbar from '../components/Nav/Navbar'
import SlidestateManagement from '../Statemagemant/SlideState'
import { Navcontex } from '../Statemagemant/Navcontex'
import { Profilestate } from '../Statemagemant/Profilestate'
import { Notivication } from '../Statemagemant/Notivication'
import Footer from '../components/Footer/Footer'
import { MessageState } from '../Statemagemant/MessageState'
import { Outlet } from 'react-router-dom'
const Admin = () => {
   const {slidebar , setSlidebar} =useContext(SlidestateManagement)
    const variants = {
      open: { opacity: 1, x: 0 },
      closed: { opacity: 0, x: "-100%" },
    }
  return (
    <div>
       <div className='flex duration-300 w-full h-screen bg-[#FAFAFE]'>

            {/* slidebar */}
           <div className={slidebar ? 'showslide ':'hideslidebar '}>
             <div className='p-3 darks bg-white h-full  '>
             <Slider/>
             </div>
           </div>

            {/* container */}
            <div className='w-full h-full duration-300'>

              {/* navigationbar-container */}
            <div className='navbar bg-white darks '> 
              <Navcontex>
                <Notivication>
                 <MessageState>
                  <Navbar/>
                 </MessageState>
                </Notivication>
              </Navcontex>
            </div>

            {/* main components */}
            <main className='py-4 md:px-3 px-2 font-press md:h-[84vh] h-[100vh] overflow-y-scroll  scrollbar-hide '>
                <Outlet/>
            </main>
            {/* footer components */}
             <footer className='mb-aout'>
               <Footer/>
             </footer>
            </div>
          </div>
    </div>
  )
}

export default Admin