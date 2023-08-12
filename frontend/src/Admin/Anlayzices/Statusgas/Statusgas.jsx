import React, { useContext, useEffect, useState } from 'react'
import { FaBalanceScaleLeft, FaEthereum } from 'react-icons/fa'
import fuelcontex from '../../../Statemagemant/Fuelstate/Fuelstate'
import searchfuelgas from '../../../Statemagemant/Fuelstate/Searchgasforstate'
import Exchange from '../Exchange/Exchange'
import CreateSalary from '../../Salary/CreateSalary';
import Loanforn from '../../Salary/Loanforn';
import { AiOutlineDollar } from 'react-icons/ai'
import { FaGasPump } from 'react-icons/fa'
import { FiArrowDownLeft, FiArrowUpRight } from 'react-icons/fi'
import Register from '../RegisterData/Register'




const Statusgas = () => {
  
  const {LoandLT , Loandpr ,navtoquentitycus , Gastoquentitycus ,petrolquentitycus ,totalpricegasbeforbuy ,totalgasbuyment ,buymentcus} = useContext(fuelcontex)
  const {petrolquentity ,petrollprice ,  Navtoquentity , Navtoprice , Gasprice , Gasquentity ,cash ,pprice , nprice ,gprice} = useContext(fuelcontex)
  //saerch contextual
  const {petrolquentityforgas , pricepetrolfuelgas , navtofuctionmap ,navtoReduceprice , GasReduceprice , Gasquentitys ,} = useContext(searchfuelgas)
  const Totalgases = petrolquentityforgas + navtofuctionmap+ Gasquentitys;

  const dataBuymentTotal =totalgasbuyment +buymentcus;

  console.log(dataBuymentTotal)

  const Component1 = ({}) =>{
    // The formula to calculate profit is:
    
    // Profit = (Selling Price - Cost Price) * Quantity
    // Where:
    // Selling Price is the price at which the product or service is sold.
    // Cost Price is the expense incurred in producing or acquiring the product or service.
    // Quantity is the number of products sold or units of the service provided.
    // By subtracting the cost price from the selling price and multiplying it by the quantity, you can determine the profit.

    //navto block

   const [cashNavto , setCashNavto] =useState('')
   const navtototalQuantity = Navtoquentity+ navtoquentitycus;
    const NavTotalCash = async (navtototalQuantity) =>{
      const navtopricetotal = navtototalQuantity *nprice;
      const navtotal = await navtopricetotal/cash;
      return navtotal.toFixed(2)
    }
    const navtototalsub = NavTotalCash(navtototalQuantity).then(res =>{
      setCashNavto(res);
    })

   const [GasCash , setGasCash] =useState('')
   const gastototalQuantity = Gasquentity + Gastoquentitycus;
    const GasTotalCash = async(gastototalQuantity) =>{
      const Gastopricetotal = gastototalQuantity *gprice;
      const Gastotal = await Gastopricetotal/cash;
      return Gastotal.toFixed(2)
    }
    const Gastototalsub = GasTotalCash(gastototalQuantity).then(res =>{
      setGasCash(res);
    })

   const [petrolCash , setpetrolCash] =useState('')
      const petroltototalQuantity = petrolquentity + petrolquentitycus;
      const petrolTotalCash = async(petroltototalQuantity) =>{
      const petroltopricetotal = petroltototalQuantity *pprice;
      const petroltotal = await petroltopricetotal/cash;
      return  petroltotal.toFixed(2)
    }
    const petroltototalsub = petrolTotalCash(petroltototalQuantity).then(res =>{
      setpetrolCash(res);
    })
    
//  block sale of the petroltot 
   

    const [Totalpetrolprofit , setTotalpetrolprofit] = useState('');
    const calulatepetrolprofitpwtrol = async () =>{
      const Selling_Price = pprice /cash;
      const Cost_Price = pricepetrolfuelgas / petrolquentityforgas;
      const subtrs_Price = Selling_Price - Cost_Price;
      const total = await subtrs_Price*petroltototalQuantity  ;
      return total.toFixed(2) 
    }
    const subtotal = calulatepetrolprofitpwtrol().then(res =>{
      setTotalpetrolprofit(res);
    })
    //proit navato 
    const [Totalnavtoprofit , setTotalnavtoprofit] = useState('');
    const calulatepetrolprofitnavto = async () =>{
      const Selling_Price = nprice /cash;
      const Cost_Price = navtoReduceprice / navtofuctionmap ;
      const subtrs_Price = Selling_Price - Cost_Price;
      const total = await subtrs_Price*navtototalQuantity  ;
      return total.toFixed(2) 
    }
    const subtotalnavto = calulatepetrolprofitnavto().then(res =>{
      setTotalnavtoprofit(res);
    })
    //profit gas
    const [Totalprofitgas  ,setTotalprofitgas ] = useState('');
    const calulatepetrolprofitgas = async () =>{
      const Selling_Price = gprice /cash;
      const Cost_Price = GasReduceprice / Gasquentitys;
      const subtrs_Price = Selling_Price - Cost_Price;
      const total = await subtrs_Price*gastototalQuantity  ;
      return total.toFixed(2) 
    }
    const subtotalgas = calulatepetrolprofitgas().then(res =>{
      setTotalprofitgas(res);
    })

      return (
          <div className='w'> 
              <ul className='w-full py-3 darks bg-white mt-4 rounded text-sm font-press '>
              <div className='mx-3 font-semibold text-gray-500 font-press'>STATUS GAS</div>
              <div>
                  <li className='px-3 py-[4px] text-gray-500 darks  mt-1 cursor-pointer'>
                  <div className='flex justify-between mb-2 font-press items-center'>
                   <h1 className='font-semibold text-gray-500'>
                    <p className='capitalize'>Pertol</p>
                    </h1> 
                    <h1>                      
                      <p className={petrolCash >0 ?'text-[14px] font-semibold flex  items-center text-[#4aac93]' :
                       'text-[14px] flex  font-semibold items-center'}>$ {petrolCash}</p>
                    </h1>
                  </div>
                  <div className='flex justify-between'>
                  <div className='text-[11px] flex items-center space-x-1'> <FaEthereum/><p>LT:{petrolquentityforgas}</p></div>
                  <div className='text-[11px] flex items-center space-x-1'> <p>LT:{petroltototalQuantity}</p></div>
                  </div>
                  <div className='flex items-center justify-between'>
                  <div  className={'text-[11px] flex items-center space-x-1'}>
                     <FaEthereum/>
                     <p>$:{pricepetrolfuelgas}</p>
                  </div>
                  <div className={Totalpetrolprofit < 0 ? 'text-[11px] text-[#ac4a63] flex items-center space-x-1' :
                   'text-[11px] text-[#4aac93] flex items-center space-x-1'}> 
                   <p>${Totalpetrolprofit}</p>
                   </div>
                  </div>
                  <div  className={petrolquentityforgas-petroltototalQuantity <= 0 ?'text-[11px] text-red-500 flex items-center space-x-1':'text-[11px]  flex items-center space-x-1'}>
                     <FaEthereum/>
                     <p>LT:{petrolquentityforgas-petroltototalQuantity}</p>
                     </div>
                  <div className=" w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-[#4aac93] text-sm h-1 font-medium text-blue-100 text-center  leading-none rounded-full" style={{width:"30%"}}> </div>
                  </div>
                  </li>

                  <li className='px-3 py-[4px] text-gray-500 darks  mt-1 cursor-pointer'>
                  <div className='flex justify-between mb-2 font-press items-center'>
                   <h1 className='font-semibold text-gray-500'>
                    <p className='capitalize'>Navato </p>
                    </h1> 
                    <h1>                      
                      <p className={cashNavto >0 ?'text-[14px] font-semibold flex  items-center text-[#4aac93]' : 
                      'text-[14px] flex  font-semibold items-center'}>$ {cashNavto}
                      </p>
                    </h1>
                  </div>
                  <div className='flex justify-between'>
                  <div className='text-[11px] flex items-center space-x-1'> <FaEthereum/><p>LT:{navtofuctionmap}</p></div>
                  <div className='text-[11px] flex items-center space-x-1'> <p>LT:{ navtototalQuantity }</p></div>
                  </div>
                  <div className='flex justify-between'>
                  <div className={'text-[11px]  flex items-center space-x-1'}>
                     <FaEthereum/>
                     <p>$:{navtoReduceprice}</p>
                  </div>
                  <div className={Totalnavtoprofit < 0 ? 'text-[11px] text-[#ac4a63] flex items-center space-x-1' :
                   'text-[11px] text-[#4aac93] flex items-center space-x-1'}> 
                   <p>${Totalnavtoprofit}</p>
                   </div>
                  </div>
                  <div  className={navtofuctionmap-Navtoquentity <= 0 ?'text-[11px] text-red-500 flex items-center space-x-1':'text-[11px]  flex items-center space-x-1'}> <FaEthereum/><p>LT:{navtofuctionmap-Navtoquentity -navtoquentitycus}</p></div>
                  <div className=" w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-[#4aac93] text-sm h-1 font-medium text-blue-100 text-center  leading-none rounded-full" style={{width:"60%"}}> </div>
                  </div>
                  </li>
                  <li className='px-3 py-[4px] text-gray-500 darks  mt-1 cursor-pointer'>
                  <div className='flex justify-between mb-2 font-press items-center'>
                   <h1 className='font-semibold text-gray-500'>
                    <p className='capitalize'>Gas</p>
                    </h1> 
                    <h1>                      
                      <p className={GasCash >0 ?'text-[14px] font-semibold flex  items-center text-[#4aac93]' : 'text-[14px] flex  font-semibold items-center'}>$ {GasCash}</p>
                    </h1>
                  </div>
                  <div className='flex justify-between'>
                  <div className='text-[11px] flex items-center space-x-1'> <FaEthereum/><p>LT:{Gasquentitys}</p></div>
                  <div className='text-[11px] flex items-center space-x-1'> <p>LT:{Gasquentity+ Gastoquentitycus}</p></div>
                  </div>
                  <div className='flex justify-between'>
                  <div  className={'text-[11px]  flex items-center space-x-1'}>
                     <FaEthereum/>
                     <p>$:{GasReduceprice}</p>
                  </div>
                  <div className={'text-[11px] text-[#4aac93] flex items-center space-x-1'}> 
                   <p>${Totalprofitgas}</p>
                   </div>
                  </div>
                  <div  className={Gasquentitys-gastototalQuantity <= 0 ?'text-[11px] text-red-500 flex items-center space-x-1':'text-[11px]  flex items-center space-x-1'}> <FaEthereum/><p>LT:{Gasquentitys-Gasquentity-Gastoquentitycus }</p></div>
                  <div className=" w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-[#4aac93] text-sm h-1 font-medium text-blue-100 text-center  leading-none rounded-full" style={{width:"60%"}}> </div>
                  </div>
                  </li>
              </div>
          <div className='px-3 py-[6px] mt-2 '>
          </div>
       </ul>
       </div>
      )
  }
    const Component2 = ({}) =>{
      // The formula to calculate profit is:
      // Profit = (Selling Price - Cost Price) * Quantity
      // Where:
      // Selling Price is the price at which the product or service is sold.
      // Cost Price is the expense incurred in producing or acquiring the product or service.
      // Quantity is the number of products sold or units of the service provided.
      // By subtracting the cost price from the selling price and multiplying it by the quantity, you can determine the profit.

      const [getdata, setgetdata] = useState([]);
      const [cashmonys , setcashmony] = useState(Number);

        useEffect(() =>{
          fetch('http://localhost:4000/getexchange' ).then((res) => res.json())
          .then((data) =>{
            setgetdata(data)
          })
        }, [])
        const values = getdata.map(item => item.Cashmony);
        const OneD = values;
    
        return (
            <div> 
                <ul className='w-full py-3 darks bg-white mt-4 rounded text-sm font-press '>
                <div className='mx-3 font-semibold text-gray-500 font-press'>STATUS EXCHANGE</div>
                <div>
                    <li className='px-3 py-[4px] mt-1  text-gray-500 darks   cursor-pointer'>
                    <div className='text-gray-400'>Dollar price</div>
                    <div className='flex justify-between mt-1'>
                    <div className='text-[11px] flex items-center space-x-1'> <FaEthereum/><p>1</p></div>
                    </div>
                    <div className='flex justify-between'>
                    <div className='text-[11px] flex items-center space-x-1 mt-1'> <FaEthereum/><p>10</p></div>
                    </div>
                    <div className='flex justify-between'>
                    <div className='text-[11px] flex items-center space-x-1 mt-1'> <FaEthereum/><p>100</p></div>
                    </div>
                    <div className=" w-full mt-2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-[#4aac93] text-sm h-1 font-medium text-blue-100 text-center  leading-none rounded-full" style={{width:"30%"}}> </div>
                    </div>
                    </li>
                    <li className='px-3 py-[4px] mt-3  text-gray-500 darks   cursor-pointer'>
                    <div className='text-gray-400'>Cash price</div>
                    <div className='flex justify-between mt-1'>
                    <div className='text-[11px] flex items-center mt-1 space-x-1 text-start'> <FaEthereum/><p>SL:{OneD*1}</p></div>
                    </div>
                    <div className='flex justify-between'>
                    <div className='text-[11px] flex items-center space-x-1 text-start'> <FaEthereum/><p>SL:{OneD*10}</p></div>
                    </div>
                    <div className='flex justify-between'>
                    <div className='text-[11px] flex items-center space-x-1 text-start'> <FaEthereum/><p>SL:{OneD*100}</p></div>
                    </div>
                    <div className=" w-full mt-2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-[#4aac93] text-sm h-1 font-medium text-blue-100 text-center  leading-none rounded-full" style={{width:"70%"}}> </div>
                    </div>
                    </li>

                  
                  <div className='px-3 py-[4px] mt-5 text-gray-500 darks   cursor-pointer'>
                    <Exchange/>
                  </div>
                </div>
            <div className='px-3 py-[6px] mt-2 '>
            </div>
         </ul></div>
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

      
      const [getdata, setgetdata] = useState([]);
      const [cashmonys , setcashmony] = useState(Number);
      const navtototalQuantity = Navtoquentity+ navtoquentitycus;
      const gastototalQuantity = Gasquentity + Gastoquentitycus;
      const petroltototalQuantity = petrolquentity + petrolquentitycus;
      //gaska aan ibinay
      // const totalgasbuys = [ navtoquentitycus,   Gastoquentitycus,   petrolquentitycus];
      const [totalnav , settotalnav ] = useState();
      const [totalgas , settotalgas ] = useState(Number);
      const [totalpetrol , settotalpetrol] = useState(Number);

      const navtotal =  Navtoquentity + navtoquentitycus;
      const gastotals =  Gasquentity + Gastoquentitycus;
      const petroltotals = petrolquentity + petrolquentitycus;


      const totalgasbuy = [navtotal , gastotals , petroltotals];
     
      const filteredArray = totalgasbuy.filter((value) => !isNaN(''));


      // const sum = filteredArray.reduce((accumulator, currentValue) => accumulator + currentValue)
      // const newData = totalgasbuy.map((element) => element.trim());
      const sum = totalgasbuy.reduce((acc, cur) => acc + Number(cur), 0);
      const [buymentTotalOne, setdatas] = useState(sum);
      // console.log(buymentTotalOne)
   
    

     
        useEffect(() =>{
          fetch('http://localhost:4000/getexchange' ).then((res) => res.json())
          .then((data) =>{
            setgetdata(data)
          })
        }, [])
        const values = getdata.map(item => item.Cashmony);
        const OneD = values;
    
        const [Totalpetrolprofit , setTotalpetrolprofit] = useState('');
        const calulatepetrolprofitpwtrol = async () =>{
          const Cost_Price = totalpricegasbeforbuy / Totalgases ;
          const Selling_Price =  Cost_Price * buymentTotalOne;
          const total = await dataBuymentTotal-Selling_Price  ;
          return total.toFixed(2) 
        }
        const subtotal = calulatepetrolprofitpwtrol().then(res =>{
          setTotalpetrolprofit(res);
        })
        return (
            <div> 
                <ul className='w-full py-3 darks bg-white mt-4 rounded text-sm font-press '>
                <div className='mx-3 font-semibold text-gray-500 font-press'>STATUS PROFIT</div>
                <div>
                    <li className='px-3 py-[4px] mt-1  text-gray-500 darks   cursor-pointer'>
                    <div className='text-gray-400'>Dollar Profit</div>
                    <div className='flex justify-between mt-2 '>
                    <div className='text-[11px] flex items-center space-x-1'> <FaGasPump/><p>{Totalgases} </p></div>
                    <div className='text-[11px] flex items-center space-x-1'> <FiArrowUpRight className='text-red-600'/>LT:<p>{buymentTotalOne} </p></div>
                    </div>
                    <div className='flex justify-between mt-2'>
                    <div className='text-[11px] flex items-center space-x-1 mt-1'> <AiOutlineDollar/><p>{totalpricegasbeforbuy}</p></div>
                    <div className='text-[11px] flex items-center space-x-1 mt-1'><FiArrowDownLeft className='text-green-600'/> <p>{dataBuymentTotal.toFixed(2)}</p></div>
                    </div>
                    <div className='flex justify-between mt-1'>
                    <div className='text-[11px] flex items-center space-x-1 mt-1'> <FaEthereum/><p>{Totalpetrolprofit}</p></div>
                    <div className='text-[11px] flex items-center space-x-1 mt-1'> <FaEthereum/><p>{Totalgases-buymentTotalOne}</p></div>
                    </div>
                    <div className=" w-full mt-2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-[#4aac93] text-sm h-1 font-medium text-blue-100 text-center  leading-none rounded-full" style={{width:"30%"}}> </div>
                    </div>
                    </li>
                    <li className='px-3 py-[4px] mt-1  text-gray-500 darks   cursor-pointer'>
                    <div className='text-gray-400'>Cash Profit</div>
                    <div className='flex justify-between mt-1 '>
                    <div className='text-[11px] flex items-center space-x-1'> <FaGasPump/><p>{Totalgases} </p></div>
                    <div className='text-[11px] flex items-center space-x-1'> <FiArrowUpRight className='text-red-600'/>LT:<p>{buymentTotalOne} </p></div>
                    </div>
                    <div className='flex justify-between mt-1'>
                    <div className='text-[11px] flex items-center space-x-1 mt-1'> SL:<p>{totalpricegasbeforbuy * cash}</p></div>
                    <div className='text-[11px] flex items-center space-x-1 mt-1'><FiArrowDownLeft className='text-green-600'/> <p>{dataBuymentTotal *cash.toFixed(2)}</p></div>
                    </div>
                    <div className='flex justify-between mt-1'>
                    <div className='text-[11px] flex items-center space-x-1 '> Sh:<p>{Totalpetrolprofit*cash}</p></div>
                    <div className='text-[11px] flex items-center space-x-1 '> <FaEthereum/><p>{Totalgases-buymentTotalOne}</p></div>
                    </div>
                    <div className=" w-full mt-2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-[#4aac93] text-sm h-1 font-medium text-blue-100 text-center  leading-none rounded-full" style={{width:"30%"}}> </div>
                    </div>
                      <div className='mt-5 px-5'>
                        <Register/>
                      </div>
                    </li>

            

                  
                  <div className='px-3 py-[4px] mt-3 text-gray-500 darks   cursor-pointer'>
                  </div>
                </div>
            <div className='px-3 py-[6px] mt-2 '>
            </div>
         </ul></div>
        )
    }

   
 
  return (
   <div className='grid sm:grid-cols-3 gap-4'>
        <Component1 />
        <Component2/>
        <Component3/>
   </div>
  )
}

export default Statusgas