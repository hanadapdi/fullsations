import React, { useContext } from 'react'
import TableUser from '../Tables/TableUser'
import FormUsr from './Forms/FormUsr'
import UserContex from '../../../Statemagemant/creater/creater'

const CreaterUsers = () => {
  const {alerUser} = useContext(UserContex)
  const Alertsshow = () =>{
    return(
      <div
      class="mb-3 shadow-sm inline-flex justify-between w-full items-center rounded-lg btn dark:text-neutral-500 px-6 py-3 text-base text-neutral-50 dark:bg-white"
      role="alert">
      <span class="mr-2 flex items-center space-x-1">
      <svg className=''
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="h-5 w-5">
      <path
        fill-rule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clip-rule="evenodd" />
     </svg>
     <p> A simple dark alert - check it out!</p>
      </span>
    </div>
    )
  }
  return (
    <div className=''>
       {
        alerUser === true ? <div className='fixed top-10 right-10 '> <Alertsshow/> </div> : null
      }
    <div className='pb-2 text-sm capitalize font-press  text-gray-400'>
        <h1>CreaterUsers</h1>
    </div>
    <div className=' p-4 darks gap-4 scrollbar-hide '>
            <div className=' w-full'>
              <div className='flex justify-between mb-3'>
              <input  placeholder='search user '
              className='p-2 border rounded outline-none darks'
               />  
               <FormUsr/>
              </div>
                <TableUser />
            </div>
        </div>
    
</div>
  )
}

export default CreaterUsers