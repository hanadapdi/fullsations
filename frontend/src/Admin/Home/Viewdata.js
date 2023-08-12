import React, { useContext } from 'react'
import { FaEthereum } from 'react-icons/fa'
import { BsCurrencyDollar } from 'react-icons/bs'
import fuelcontex from '../../Statemagemant/Fuelstate/Fuelstate'
import searchfuelgas from '../../Statemagemant/Fuelstate/Searchgasforstate'

const Viewdata = () => {
    const { petrolquentityforgas,  navtofuctionmap ,Gasquentitys , } = useContext(searchfuelgas)
    const { fuelprice , petrolquentity, Navtoquentity ,Gasquentity , Gastoquentitycus , petrolquentitycus , navtoquentitycus}  = useContext(fuelcontex)

        const petroltototalQuantity = petrolquentity + petrolquentitycus;
        const gastototalQuantity = Gasquentity + Gastoquentitycus;
        const navtototalQuantity = Navtoquentity+ navtoquentitycus;

        const pTotal = petroltototalQuantity / petrolquentityforgas * 100;
        const nTotal = navtototalQuantity / navtofuctionmap * 100;
        const gTotal = gastototalQuantity / Gasquentitys * 100;

        const widhp = petroltototalQuantity / petrolquentityforgas ;
        const widhn =  navtototalQuantity / navtofuctionmap ;
        const widhg =   gastototalQuantity / Gasquentitys ;

     
        console.log( pTotal)
    const data =[  gTotal.toFixed(2)  , nTotal.toFixed(2) ,  pTotal.toFixed(2)]
  return (
    <div className='w-full h-full'>
        <ul>
            {
                fuelprice.map((item , i) =>{
                    return(
                        <div className='flex w-full darks space-x-3  items-center p-1 mb-16'>
                         <div className={'w-10 h-10 mt-2 flex justify-center btn shadow-lg rounded'}>
                           <div className='text-xl mt-2'>  <FaEthereum/></div>
                         </div>
                          <div className='text-sm w-full '>
                          <div className='flex justify-between font-press font-semibold'>
                          <h1 className=''>
                            <p className='font-press font-semibold text-[13px] capitalize'>{item.category} </p>
                            <p className='text-[10px] textbtn'>the selling price</p>
                          </h1>
                          <p className='text-[10px] font-semibold '>{data[i]}%</p>
                          </div>
                             <p className='flex  items-center'> 
                             <div className=" w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class="bg-[#4aac93] text-sm h-[5px] font-medium text-blue-100 text-center  leading-none rounded-full" style={{width:data[i]+'%'}}> </div>
                             </div>
                             </p>
                         </div>
                        </div>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Viewdata