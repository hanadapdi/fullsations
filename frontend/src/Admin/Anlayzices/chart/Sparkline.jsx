import React, { useContext, useState } from 'react'
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import {BiBarChart, BiCategory} from 'react-icons/bi'
import { MdTimeline } from 'react-icons/md';
import { BsBarChart, BsBarChartSteps } from 'react-icons/bs';
import UserContex from '../../../Statemagemant/creater/creater';
import fuelcontex from '../../../Statemagemant/Fuelstate/Fuelstate';
import searchfuelgas from '../../../Statemagemant/Fuelstate/Searchgasforstate';
const Sparkline = () => {
  const {totalSalary} = useContext(UserContex);
  const {totalpricegasbeforbuy ,totalgasbuyment , buymentcus} = useContext(fuelcontex)
  const {LoandLT , Loandpr ,navtoquentitycus , Gastoquentitycus ,petrolquentitycus} = useContext(fuelcontex)
  const {petrolquentity ,petrollprice ,  Navtoquentity , Navtoprice , Gasprice , Gasquentity ,cash ,pprice , nprice ,gprice} = useContext(fuelcontex)
  //saerch contextual
  const {petrolquentityforgas , pricepetrolfuelgas , navtofuctionmap ,navtoReduceprice , GasReduceprice , Gasquentitys ,} = useContext(searchfuelgas)
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
     return petroltotal.toFixed(2)
   }
   const petroltototalsub = petrolTotalCash(petroltototalQuantity).then(res =>{
     setpetrolCash(res);
   })

   
   const [buymentcusomer ,setbuymentcusomer] = useState([])
   const buymentcua = async(buymentcus) =>{
    const data = await buymentcus
    return data
   }
  const calling =  buymentcua(buymentcus).then(res =>{
    setbuymentcusomer(res.toFixed(2))
  });
  
   const [buymenty ,setbuy] = useState([])
   const buymen = async(buymenty) =>{
    const data = await buymenty.toFixed(2)
    return data
   }
  const calling2 =  buymen(totalgasbuyment).then(res =>{
    setbuy(res)
  });

  const sampleData=[1,12,33,14,51,6,71,8]    
  return (
   <div>
     <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        <div className='w-full darks p-4 rounded'>
            <div className='flex justify-between items-center'>
              <p><BiCategory className='text-4xl'/></p> <p className='text-right'><p className='text-[12px]'>Total Salary</p>
              <p className={totalSalary > 0 ? 'font-press text-[#4aac93] font-bold pb-1': 'font-press text-red-400 font-bold pb-1'}>{totalSalary <0 ? '$' + totalSalary : '$' + totalSalary}</p>
              </p>
            </div>
            <div>
            <Sparklines data={sampleData} >
              <SparklinesLine style={{ fill: "none" }}   color="#4aac93"/>
              <SparklinesSpots />
            </Sparklines>
            </div>
        </div>
        <div className='w-full darks p-4 rounded'>
            <div className='flex justify-between items-center'>
            <p><MdTimeline className='text-4xl'/></p> <p className='text-right'><p className='text-[12px]'>Total for sale</p>
            <p className={totalpricegasbeforbuy > 0 ? 'font-press text-[#4aac93] font-bold pb-1': 'font-press text-red-400 font-bold pb-1'}>{totalpricegasbeforbuy <0 ? '$' + totalpricegasbeforbuy : '$' + totalpricegasbeforbuy}</p>
              </p>
            </div>
            <div>
            <Sparklines data={sampleData}>
              <SparklinesLine style={{ fill: "none" }} color="#4aac93" />
              <SparklinesSpots />
            </Sparklines>
            </div>
        </div>
        <div className='w-full darks p-4 rounded'>
            <div className='flex justify-between items-center'>
               <p><BiBarChart className='text-4xl'/></p> <p className='text-right'><p className='text-[12px]'>Total for buyment</p>
               <p className={totalgasbuyment > 0 ? 'font-press text-[#4aac93] font-bold pb-1': 'font-press text-red-400 font-bold pb-1'}>
                {totalgasbuyment <0 ? '$' - buymenty : '$'  + buymenty
                }</p>
              </p>
            </div>
            <div>
            <Sparklines data={sampleData}>
              <SparklinesLine style={{ fill: "none" }}  color="#4aac93" />
              <SparklinesSpots />
            </Sparklines>
            </div>
        </div>
        <div className='w-full darks p-4 rounded'>
            <div className='flex justify-between items-center'>
               <p><BsBarChartSteps className='text-4xl'/></p> <p className='text-right'><p className='text-[12px]'>Customer Buymeny </p>
               <p className={buymentcus > 0 ? 'font-press text-[#4aac93] font-bold pb-1': 'font-press text-red-400 font-bold pb-1'}>{buymentcus <0 ? '- $' + buymentcusomer : '+ $' + buymentcusomer}</p>
              </p>
            </div>
            <div>
            <Sparklines data={sampleData}>
              <SparklinesLine style={{ fill: "none" }}   color="#4aac93" />
              <SparklinesSpots />
            </Sparklines>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Sparkline