import React, { useContext } from 'react'
import Box from './Box'
import Viewdata from './Viewdata'
import Chart from './Chart'
import Circlechar from './Circlechart.js/Circlechar'
import Lines from './Line/Line'
import Table from './Data/Tyble'
import TableEmploye  from '../Createuser/Tables/TableEploye'
import { Barchart } from './Barchar/Bar'
import SlidestateManagement from '../../Statemagemant/SlideState'
import TableRegister from '../Anlayzices/RegisterData/Table'

const Home = () => {
    const {slidebar , setSlidebar} = useContext(SlidestateManagement)

  return (
    <div  className={slidebar ? 'sm:mx-5' : 'lg:mx-40 md:mx-24 sm:mx-5'}>
         <div className='pb-2 text-sm capitalize font-press  text-gray-400'>
            <h1>OverView</h1>
        </div>
        {/* Heders */}
        <div className=' sm:gap-3'>
        <div className='rounded sm:col-start-1 sm:col-end-6'>

        {/* <div className=' darks rounded bg-white py-3 '>
        <Circlechar/>
        </div>  */}

        </div>
        <div className='rounded sm:col-start-6 sm:col-end-13'>
            <div className='sm:grid grid-cols-2 gap-3'>
            <div className=' darks rounded w-full  bg-white  px-4 py-3 '>
                <Viewdata/>
            </div>
            <div className=' darks rounded bg-white py-3 flex justify-center '>
        <Circlechar/>
        </div> 
            {/* <div className='darks rounded bg-white  '>
                <Chart/>
            </div> */}
            </div>
                {/* body */}
                <div className='mt-10  text-md p-2 btn text-white rounded capitalize font-press  '>
                <h1>view data price</h1>
               </div>
               

              {/* <div className='darks rounded mt-10'>
                 <Lines/>
              </div> */}
              {/* <div className='mt-10  text-md p-2 btn text-white rounded capitalize font-press  '>
                <h1>view data</h1>
               </div> */}
               <div className=' darks mt-10 rounded'>
                    <Barchart/>
                </div>
                <div className='mt-10  text-md p-2 btn text-white rounded capitalize font-press  '>
                <h1>view Emplooye</h1>
               </div>
                <div className='mt-4 darks py-3 rounded'>
                        <TableEmploye/>
                 </div>
                 <div className='mt-5  text-md p-2 btn text-white rounded capitalize font-press  '>
                <h1>view data</h1>
               </div>
                 <div className='darks  mt-3  rounded px-2'>
                  <TableRegister/>
                </div>
        </div>
           
        </div>
       
 
        {/* <Box/> */}
    </div>
  )
}

export default Home