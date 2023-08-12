import React, { useContext } from 'react'
import RepotsBox from './RepotsBox'
import SlidestateManagement from '../../Statemagemant/SlideState'
import { Outlet } from 'react-router-dom'
const Report = () => {
  const {slidebar , setSlidebar} = useContext(SlidestateManagement)

  return (
    <div className={slidebar ? 'sm:mx-5' : 'lg:mx-36 md:mx-24 sm:mx-5'}>
        <div className='pb-2 text-sm capitalize font-press  text-gray-400'>
            <h1>Report</h1>
        </div>
        <div>
          <RepotsBox/>
        </div>
        <div>
           <Outlet/>
        </div>
    </div>
  )
}

export default Report