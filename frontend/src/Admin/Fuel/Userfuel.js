import React, { useContext } from 'react'
import Price from './Price'
import From from './form/SeelingForm'
import Table, { SellTable } from './Table/SellingTable'
import SellingTable from './Table/SellingTable'
import CustomerTable from './Table/CostumerTable'
import SeelingForm from './form/SeelingForm'
import CustomerCreateForm from './form/CustomerCreateForm'
import SlidestateManagement from '../../Statemagemant/SlideState'
import fuelcontex from '../../Statemagemant/Fuelstate/Fuelstate'
import { FaEthereum } from 'react-icons/fa'
import SellingFrom from './SellingForm'
import searchfuelgas from '../../Statemagemant/Fuelstate/Searchgasforstate'

const Userfuel = () => {
  const {slidebar , setSlidebar} = useContext(SlidestateManagement)
  const {fuelprice , getallfuelgas} = useContext(fuelcontex)
  const {petrolquentityforgas , pricepetrolfuelgas , navtofuctionmap ,navtoReduceprice , GasReduceprice , Gasquentitys ,} = useContext(searchfuelgas)
  const {petrolquentity ,petrollprice ,  Navtoquentity , Navtoprice , Gasprice , Gasquentity ,cash ,pprice , nprice ,gprice} = useContext(fuelcontex)

  const data = [Gasquentity  , Navtoquentity ,  petrolquentity ];
  console.log(data + 'hhhhhhhhhh');
  const progaress =[
    'bg-orange-300 text-sm h-1 w-[55%] mt-4 font-medium text-blue-100 text-center  leading-none rounded-full' , 
    'bg-green-600 text-sm h-1 w-[69%] mt-4 font-medium text-blue-100 text-center  leading-none rounded-full' , 
    'bg-red-600 text-sm h-1 w-[90%] mt-4 font-medium text-blue-100 text-center  leading-none rounded-full' , 
  ]
  const width = ["90%" , "79%" , "60%"];
  return (
    <div className={slidebar ? 'sm:mx-5 ' : 'lg:mx-32 md:mx-24 sm:mx-5 '}>
          <div className='pb-2 text-sm capitalize font-press  text-gray-400'>
            <h1>Fuel Selling</h1>
        </div>
        <div className='w-full '>
            <Price/>
        </div>
        <div className='mt-3 sm:flex justify-between sm:space-x-4 '>
            <div className='darks rounded w-full  h-[60vh] sm:w-[35%]'>
            <ul className='w-full py-3 darks bg-white mt-4 rounded text-sm font-press '>
           <div className='mx-3 font-semibold text-gray-500 font-press uppercase'>Price STATUS</div>
           {
            getallfuelgas.map((item , i) =>{
              console.log(item)
              return(
               <div>
                 <li className='px-3 py-[4px]  mt-1 cursor-pointer'>
                <div className='flex justify-between font-press items-center'>
                 <h1 className='font-semibold text-gray-500'>
                  <p className='capitalize'>{item.category}</p>
                  <p className='text-[10px] flex  items-center'><FaEthereum/> {item.quantity - data[i]}</p>
                  </h1> 
                  {/* <h1>SL:{item.price}</h1> */}
                </div>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={item.category === 'gas' ? progaress[0] : item.category === 'navato' ? progaress[1] :progaress[2]} > </div>
                </div>
               </li>
               </div>
              )
            })
           }
            <div className='px-3 py-[6px] mt-2 '>
              <SellingFrom/>
            </div>
           </ul>
            </div>
            <div className='sm:w-[70%] overflow-auto sm:mx-4  scrollbar-hide mt-4 sm:mt-0 w-full rounded darks'>
                <SellTable/>
            </div>
        </div>
        
    </div>
  )
}

export default Userfuel