import React, { useContext } from 'react'
import Createbox from './Createbox'
import TableUser from './Tables/TableUser'
import TableEploye from './Tables/TableEploye'
import TablesCustomer from './Tables/TablesCustomer'
import SlidestateManagement from '../../Statemagemant/SlideState'

const Createuser = () => {
  const {slidebar , setSlidebar} = useContext(SlidestateManagement)
  return (
    <div className={slidebar ? 'sm:mx-5' : 'lg:mx-36 md:mx-24 sm:mx-5'}>
         <div className='pb-2 text-sm capitalize font-press  text-gray-400'>
            <h1>Creater</h1>
        </div>
        <div>
          <Createbox/>
        </div>
        
    </div>
  )
}

export default Createuser