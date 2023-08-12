import React, { useContext } from 'react'
import Sparkline from './chart/Sparkline'
import Lines from '../Home/Line/Line'
import { Barchart } from '../Home/Barchar/Bar'
import Table, { TableLoan, Tablepricelast, Tables } from './Table'
import Fuelform from './form/Fuelform'
import SlidestateManagement from '../../Statemagemant/SlideState'
import Addbuyment from './Addbuyment'
import Pricefuel from './Pricefuel'
import fuelcontex from '../../Statemagemant/Fuelstate/Fuelstate'
import { FaEthereum } from 'react-icons/fa'
import Statusgas from './Statusgas/Statusgas'
import UserContex from '../../Statemagemant/creater/creater'
import searchfuelgas from '../../Statemagemant/Fuelstate/Searchgasforstate'
import CustomerTable from '../Fuel/Table/CostumerTable'
import Loanforn from '../Salary/Loanforn'
import CreateSalary from '.././Salary/CreateSalary';
import Circlechar  from './chart/Circlechar'
// class
const Anlayzices = () => {
  const {slidebar , setSlidebar} = useContext(SlidestateManagement)
  const {LoandLT , Loandpr,petrolquentity ,petrollprice , navtoquentitycus , Gastoquentitycus ,petrolquentitycus,  Navtoquentity , Navtoprice , Gasprice , Gasquentity ,cash ,pprice , nprice ,gprice ,fuelprice , getallfuelgas ,Showalert ,Alert} = useContext(fuelcontex)
  const {petrolquentityforgas , pricepetrolfuelgas , navtofuctionmap ,navtoReduceprice , GasReduceprice , Gasquentitys ,} = useContext(searchfuelgas)
  const {EAlert2} =useContext(UserContex)
  const navtototalQuantity = Navtoquentity+ navtoquentitycus;
  const gastototalQuantity = Gasquentity + Gastoquentitycus;
  const petroltototalQuantity = petrolquentity + petrolquentitycus;
  const progaress =[
    'bg-orange-600 text-sm h-1 mt-4 font-medium text-blue-100 text-center  leading-none rounded-full' , 
    'bg-green-600 text-sm h-1 mt-4 font-medium text-blue-100 text-center  leading-none rounded-full' , 
    'bg-red-600 text-sm h-1 mt-4 font-medium text-blue-100 text-center  leading-none rounded-full' , 
  ]
  const progaress2 =[
    'bg-orange-600 text-sm h-1 mt-3 font-medium text-blue-100 text-center  leading-none rounded-full' , 
    'bg-green-600 text-sm h-1 mt-3 font-medium text-blue-100 text-center  leading-none rounded-full' , 
    'bg-red-600 text-sm h-1 mt-3 font-medium text-blue-100 text-center  leading-none rounded-full' , 
  ]
  const width = ["90%" , "79%" , "60%"];
  const widths = ["80%" , "69%" , "40%"];
  const Addprice = () =>{
    return(
      <div>
           <ul className='w-full py-3 darks bg-white mt-4 rounded text-sm font-press '>
           <div className='mx-3 font-semibold text-gray-500 font-press uppercase'>Price STATUS</div>
           {
            fuelprice.map((item , i) =>{
              return(
               <div>
                 <li className='px-3 py-[6px]  mt-3 cursor-pointer'>
                <div className='flex justify-between font-press items-center'>
                 <h1 className='font-semibold text-gray-500 capitalize'>{item.category}</h1> 
                 <h1 className='text-[12px]'>SL:{item.price}</h1>
                </div>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={progaress[i]} style={{width:width[i]}}> </div>
                </div>
               </li>
               </div>
              )
            })
           }
           
          
           <div className='px-3 py-[6px] mt-4 '>
           <Pricefuel/>
           </div>
        </ul>
      </div>
    )
  }
  const Buymentfuel = () =>{
    // const price = fuelprice.map(item = Number(price) =>{})
    return(
      <div>
           <ul className='w-full py-3 darks bg-white mt-4 rounded text-sm font-press '>
           <div className='mx-3 font-semibold text-gray-500 font-press'>PROJECT STATUS</div>
          
               <div>
                 <li className='px-3 py-[4px]  mt-1 cursor-pointer'>
                <div className='flex justify-between font-press items-center'>
                 <h1 className='font-semibold text-gray-500'>
                  <p className='capitalize mt-1'>Petrol</p>
                  <p className='text-[10px] flex  items-center'><FaEthereum/> {petrolquentityforgas-petroltototalQuantity }</p>
                  </h1> 
                  <h1 className='text-[12px]  font-press text-gray-400'>${pricepetrolfuelgas}</h1>
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
                  <h1 className='text-[12px] font-press  text-gray-400'>${navtoReduceprice}</h1>
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
                  <h1 className='text-[12px] font-press   text-gray-400'>${GasReduceprice}</h1>
                </div>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className={ 'bg-orange-600 text-sm h-1 mt-2 font-medium text-blue-100 text-center  leading-none rounded-full'} 
                  style={{width:'30%'}}> </div>
                </div>
               </li>
               </div>
            
           <div className='px-3 py-[6px] mt-2 '>
           <Addbuyment/>
           </div>
        </ul>
      </div>
    )
  }
   const Component3 = ({}) =>{
    // The formula to calculate profit is:
    // Profit = (Selling Price - Cost Price) * Quantity
    // Where:
    // Selling Price is the price at which the product or service is sold.
    // Cost Price is the expense incurred in producing or acquiring the product or service.
    // Quantity is the number of products sold or units of the service provided.
    // By subtracting the cost price from the selling price and multiplying it by the quantity, you can determine the profit.
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
      return (
          <div> 
              <ul className='w-full  mt-2 rounded text-sm font-press '>
                <li className='w-full '>
                   
                   <div className="max-w-sm p-3 py-4 bg-white darks rounded-sm ">
                       <a href="#">
                       <h5 className="mb-1 text-xl  tracking-tight text-gray-900 dark:text-white"
                           > Salary of {currentYear} </h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                       >Write a salary note by completing the writing process requirements.</p>
                   <div className='mt-8'>
                   <CreateSalary/>
                   </div>
                      
                   </div>

                </li>
                <li className='w-full mt-2 '>
                   
                   <div className="max-w-sm p-3  py-4 bg-white darks rounded-sm ">
                       <a href="#">
                           <h5 className="mb-1 text-xl  tracking-tight text-gray-900 dark:text-white"
                           > Loan of {currentYear} </h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" >
                        <p className='mt-3'>LT : {LoandLT} </p>
                        <div className=" w-full mt- bg-gray-200 rounded-full dark:bg-gray-700">
                         <div className="bg-[#4aac93] text-sm h-1 font-medium text-blue-100 text-center  leading-none rounded-full" style={{width:"70%"}}> </div>
                        </div>
                        <p className={Loandpr < 0 ?'mt-3 mb-2' :'mt-3 mb-2 text-red-600'}>Total Cash : {Loandpr} </p>
                        <div className=" w-full  bg-gray-200 rounded-full dark:bg-gray-700">
                         <div className="bg-[#4aac93] text-sm h-1 font-medium text-blue-100 text-center  leading-none rounded-full" style={{width:"70%"}}> </div>
                        </div>
                       </p>
                       <div className='mt-2'>
                       <Loanforn/>
                       </div>
                      
                   </div>

                </li>
                <div>
                </div>
            </ul>
       </div>
      )
  }
  return (
    <div  className={slidebar ? 'sm:mx-5 ' : 'lg:mx-28 md:mx-24 sm:mx-5 '}>
        <div className='pb-2 text-sm capitalize font-press  text-gray-400'>
            <h1>Anlaytics</h1>
        </div>
        {Showalert === true ? <Alert className='mt-2' dataproperty={'save data success full '}/> : null}
        <div>
          <Sparkline/>
        </div>
        <div>
          <Statusgas/>
        </div>
        <div className='grid md:grid-cols-12  grid-cols-1 w-full mt-4 md:gap-4 gap-4'>
            <div className='w-full sm:col-start-1 sm:col-end-9  rounded'>
            <div className='mt-2  text-md p-2 btn2 mb-2 text-white rounded capitalize font-press  '>
                <h1>view data</h1>
               </div>
                    <div className='grid sm:grid-cols-2 gap-4 w-full'>
                       <div className='w-full h-full darks rounded'>
                            <Buymentfuel/>
                       </div>
                       <div className='w-full h-full darks rounded'>
                        <Addprice/>
                       </div>
                    </div>
            </div>
            <div className='w-full  sm:col-start-9 sm:col-end-13  rounded'>
                <div className='  h-full flex rounded justify-center'>
                    <Component3/>
                </div>
            </div>
        </div>
        
        <div className='grid md:grid-cols-12 grid-cols-1 w-full mt-4 md:gap-4 gap-4'>
            <div className='w-full  sm:col-start-1 sm:col-end-8   rounded'>
               <div className='mt-2  text-md p-2 btn2 mb-2 text-white rounded capitalize font-press  '>
                <h1>view data Buyment</h1>
               </div>
                    <div className='darks rounded p-2 h-[60vh] overflow-y-scroll scrollbar-hide'>
                    <Tables/>
                    </div>
               <div className='mt-2  text-md p-2 btn2 mb-2 text-white rounded capitalize font-press  '>
                <h1>view data buyment customer</h1>
               </div>
                    <div className='darks rounded p-2 h-[60vh] overflow-y-scroll scrollbar-hide'>
                    <CustomerTable/>
                    </div>
             
            </div>
            <div className='w-full  sm:col-start-8 sm:col-end-13  '>
            <div className='mt-2  text-md p-2 btn2 mb-2 text-white rounded capitalize font-press  '>
                <h1>view data price chart</h1>
               </div>
               <div className='darks rounded p-2 flex justify-between overflow-auto scrollbar-hide'>
                       <Circlechar/>
               </div>
               <div className='mt-2  text-md p-2 btn2 mb-2 text-white rounded capitalize font-press  '>
                <h1>view data price Gas</h1>
               </div>
               <div className='darks rounded p-2 overflow-auto scrollbar-hide'>
                       <Tablepricelast/>
               </div>
               <div className='mt-2  text-md p-2 btn2 mb-2 text-white rounded capitalize font-press  '>
                <h1>view data Loan</h1>
               </div>
                    <div className='darks rounded p-2 mt-2  overflow-auto scrollbar-hide'>
                    <TableLoan/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Anlayzices