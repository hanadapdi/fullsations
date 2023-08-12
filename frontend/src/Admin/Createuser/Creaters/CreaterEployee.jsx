import React, { useContext, useState } from 'react'
import TableEploye from '../Tables/TableEploye'
import FormEmplooye from './Forms/FormEmplooye'
import { motion} from 'framer-motion'
import UserContex from '../../../Statemagemant/creater/creater'
import fuelcontex from '../../../Statemagemant/Fuelstate/Fuelstate'

const CreaterEployee = () => {
    const {EAlert ,setEAlert ,Emplooyename ,AlertCreater ,AlertCreaterDelet ,Showalert , DelAlart ,setDelAlart } = useContext(UserContex)
  const {salary} = useContext(fuelcontex)

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
      }

  return (
    <div className=''>
        <div>
        <div className='right-0 w-[40%] top-10 fixed '>
           {Showalert === true ? <AlertCreater create={'hello world'}/> : null}
         </div>
        <div className='right-0 w-[40%] top-10 fixed '>
           {DelAlart === true ? <AlertCreaterDelet create={'hello world'}/> : null}
         </div>
        </div>
        <div className='pb-2 text-sm capitalize font-press  text-gray-400'>
            <h1>CreateEmplooye</h1>
        </div>
        <div className=' p-4 darks gap-4 scrollbar-hide '>
            <div className=' w-full'>
              <div className='flex justify-between mb-3'>
              <input  placeholder='search user '
              className='p-2 border rounded outline-none darks'
               />  
               <FormEmplooye salary={salary}/>
              </div>
                <TableEploye setDelAlart={setDelAlart}/>
            </div>
        </div>
    </div>
  )
}

export default CreaterEployee