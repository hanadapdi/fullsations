import React, { useContext } from 'react'
import Createbox from '../Createbox'
import { Outlet } from 'react-router-dom'
import SlidestateManagement from '../../../Statemagemant/SlideState'
import UserContex, { Usercreater } from '../../../Statemagemant/creater/creater'

const Creaters = () => {
  const {slidebar , setSlidebar} = useContext(SlidestateManagement)
  const {AlertCreater ,AlertCreaterDelet ,AlertCreaterUpdate} = useContext(UserContex)
  

  return (
    <div  className={slidebar ? '' : 'lg:mx-32 md:mx-24 sm:mx-5'}>
        <div className=''>
        
             {/* <AlertCreater create={'hello world'}/> */}
        <Createbox/>
        </div>
        <div className='w-full mt-4 '>
          <Outlet />
        </div>
    </div>
  )
}

export default Creaters