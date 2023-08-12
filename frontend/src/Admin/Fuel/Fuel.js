import React, { useContext, useState } from 'react'
import Price from './Price'
import From from './form/SeelingForm'
import Table from './Table/SellingTable'
import SellingTable from './Table/SellingTable'
import CustomerTable from './Table/CostumerTable'
import SeelingForm from './form/SeelingForm'
import CustomerCreateForm from './form/CustomerCreateForm'
import SlidestateManagement from '../../Statemagemant/SlideState'
import fuelcontex from '../../Statemagemant/Fuelstate/Fuelstate'
import { FaEthereum } from 'react-icons/fa'
import SellingFrom from './SellingForm'
import searchfuelgas from '../../Statemagemant/Fuelstate/Searchgasforstate'
import CustomersellingGasfrom from './CustomersellingGasfrom'

const Fuel = () => {
  const {slidebar , setSlidebar} = useContext(SlidestateManagement)
  const {fuelprice , getallfuelgas , navtoquentitycus , Gastoquentitycus ,petrolquentitycus , } = useContext(fuelcontex)
  const {petrolquentityforgas , pricepetrolfuelgas , navtofuctionmap ,navtoReduceprice , GasReduceprice , Gasquentitys ,} = useContext(searchfuelgas)
  const {petrolquentity ,petrollprice ,  Navtoquentity , Navtoprice , Gasprice , Gasquentity ,cash ,pprice , nprice ,gprice} = useContext(fuelcontex)
  const navtototalQuantity = Navtoquentity+ navtoquentitycus;
  const gastototalQuantity = Gasquentity + Gastoquentitycus;
  const petroltototalQuantity = petrolquentity + petrolquentitycus;
  const data = [Gasquentity  , Navtoquentity ,  petrolquentity ];
  console.log(data + 'hhhhhhhhhh');
  const progaress =[
    'bg-orange-300 text-sm h-1 w-[55%] mt-4 font-medium text-blue-100 text-center  leading-none rounded-full' , 
    'bg-green-600 text-sm h-1 w-[69%] mt-4 font-medium text-blue-100 text-center  leading-none rounded-full' , 
    'bg-red-600 text-sm h-1 w-[90%] mt-4 font-medium text-blue-100 text-center  leading-none rounded-full' , 
  ]
  const width = ["90%" , "79%" , "60%"];
  const [choose , setChoose] = useState('');
  return (
    <div className={slidebar ? 'sm:mx-5 ' : 'lg:mx-28 md:mx-24 sm:mx-5 '}>
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
          
                 <li className='px-3 py-[4px]  mt-1 cursor-pointer'>
                <div className='flex justify-between font-press items-center'>
                 <h1 className='font-semibold text-gray-500'>
                  <p className='capitalize mt-1'>Petrol</p>
                  <p className='text-[10px] flex  items-center'><FaEthereum/> {petrolquentityforgas-petroltototalQuantity }</p>
                  </h1> 
                </div>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={ 'bg-red-600 text-sm h-1 mt-2 font-medium text-blue-100 text-center  leading-none rounded-full'} 
                  style={{width:'90%'}}> </div>
                </div>
               </li>
                 <li className='px-3 py-[4px]  mt-1 cursor-pointer'>
                <div className='flex justify-between font-press items-center'>
                 <h1 className='font-semibold text-gray-500'>
                  <p className='capitalize mt-1'>Navato</p>
                  <p className='text-[10px] flex  items-center'><FaEthereum/> {navtofuctionmap-navtototalQuantity}</p>
                  </h1> 
                </div>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={ 'bg-green-600 text-sm h-1 mt-2 font-medium text-blue-100 text-center  leading-none rounded-full'} 
                  style={{width:'60%'}}> </div>
                </div>
               </li>
                 <li className='px-3 py-[4px]  mt-1 cursor-pointer'>
                <div className='flex justify-between font-press items-center'>
                 <h1 className='font-semibold text-gray-500'>
                  <p className='capitalize mt-1'>Gas</p>
                  <p className='text-[10px] flex  items-center'><FaEthereum/> {Gasquentitys-gastototalQuantity}</p>
                  </h1> 
                </div>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={ 'bg-orange-600 text-sm h-1 mt-2 font-medium text-blue-100 text-center  leading-none rounded-full'} 
                  style={{width:'30%'}}> </div>
                </div>
               </li>
       
            <div className=' py-[6px] mt-2 mx-2 justify-center flex'>
              <SellingFrom/>
              <CustomersellingGasfrom/>
            </div>
           </ul>
            </div>
            <div className='sm:w-[70%] overflow-auto sm:mx-4  scrollbar-hide mt-4 sm:mt-0 w-full  '>
            <div className='mt-0  text-md p-1 btn  rounded capitalize font-press flex justify-end  text-white '>
            <select onChange={(e)=> setChoose(e.target.value)} className='p-1 outline-none btn'>
                  <option value={'Table'}>Table </option>
                  <option value={'CustomerTable'}>Customer Table </option>
                </select>
               </div>
              {
                  choose === 'CustomerTable' ? <div className='darks rounded mt-2'><CustomerTable/></div>
                  :<div className='darks rounded mt-2'><SellingTable/></div>
              }
               
                
            </div>
        </div>
        
    </div>
  )
}

export default Fuel