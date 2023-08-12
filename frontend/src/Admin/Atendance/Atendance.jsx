import React, { useContext } from 'react'
import TableAtten, { Typelreturn } from './TableAtten'
import SlidestateManagement from '../../Statemagemant/SlideState'
import UserContex from '../../Statemagemant/creater/creater'

const Atendance = () => {
  const {slidebar , setSlidebar} = useContext(SlidestateManagement)
  const {AsearchE ,AsearchEs} = useContext(UserContex)
  return (
    <div className={'lg:mx-40 md:mx-20 mx-0'}>
        <div className='pb-2 text-sm capitalize font-press  text-gray-400'>
            <h1>Atendance</h1>
        </div>
    <div className=''>
        <div>
        <div className='py-4 px-3 darks flex justify-between'>
            <input 
            placeholder='search Emplooye '
            className='p-2 outline-none darks text-black border w-[30%] '
            onChange={AsearchE}/>
            <select 
            className='p-2 outline-none text-black darks border w-[15%] capitalize '
            onChange={AsearchE}>
              <option value='' >Select</option>
              <option value='staff' >staff</option>
              <option value='manager' > manager</option>
              <option value='oparetor' >  oparetor </option>
            </select>
          </div>
          <TableAtten/>
        </div>

    </div>
    <div className=' mt-4 '>
 
      <Typelreturn classNamemt ='mt-10'/>
    </div>
    </div>
  )
}

export default Atendance