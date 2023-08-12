import React, { useContext } from 'react'
import Footer from '../components/Footer/Footer'
import SlidestateManagement from '../Statemagemant/SlideState'
import UserSliderbar from '../components/slidebar/UserSlidebar'
import UserNavigation from '../components/Nav/UserNavigation'
import { Outlet } from 'react-router-dom'
import { Navcontex } from '../Statemagemant/Navcontex'
import UserNav from '../components/Nav/UserNav'

const User = () => {
  const {slidebar , setSlidebar} =useContext(SlidestateManagement)
  return (
    <div>
       <div className='flex duration-300 w-full h-screen bg-[#FAFAFE]'>

            {/* slidebar */}
           <div className={slidebar ? 'showslide ':'hideslidebar '}>
             <div className='p-3 darks bg-white h-full  '>
              <UserSliderbar/>
             </div>
           </div>

            {/* container */}
            <div className='w-full h-full duration-300'>

              {/* navigationbar-container */}
            <div className='navbar bg-white darks '> 
             <Navcontex>
              <UserNav/>
             </Navcontex>
            </div>

            {/* main components */}
            <main className='py-4 md:px-3 px-2 md:h-[84vh] h-[100vh] overflow-y-scroll  scrollbar-hide '>
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

export default User