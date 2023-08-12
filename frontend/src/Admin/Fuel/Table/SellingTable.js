import React, { useContext, useState } from 'react'
import fuelcontex from '../../../Statemagemant/Fuelstate/Fuelstate';
import Updateselling from '../Updateselling';
import { AiOutlineDelete, AiOutlineUndo } from 'react-icons/ai';
import { HiArrowPath } from 'react-icons/hi';
import { FaUndoAlt } from 'react-icons/fa';

export const SellTablereport = () =>{
  const {getallbuymentfuelprice , customerservice ,cash} = useContext(fuelcontex);
  const [itemsearch , setitemsearch] = useState('');
  const [data2 , setdate2] = useState(customerservice);
  console.log(data2)
  return (
    <table class="min-w-full text-sm  text-left font-light">
    <thead class="border-b text-gray-400 dark:border-neutral-500">
      <tr className=' capitalize'>
        <th scope="col" class="px-4 py-2">Dates</th>
        <th scope="col" class="px-4 py-2">Category</th>
        <th scope="col" class="px-4 py-2">quantity</th>
        <th scope="col" class="px-4 py-2">price SHL</th>
        <th scope="col" class="px-4 py-2">Cash SHL</th>
        <th scope="col" class="px-4 py-2"> Cash $</th>
      </tr>
    </thead>
    <tbody>
     {
        getallbuymentfuelprice.filter((val) =>{
          if(val === ""){
            return val
          }
          else if(val.category.toLowerCase().includes(itemsearch.toLowerCase())){
            return val
          }
        }).
        map((item , i) =>{
          const total =  item.price * item.quantity;
          const doler =  total / 8500;
          return(
            <tr class="border-b dark:border-neutral-500 text-gray-600" key={i}>
            <td class="whitespace-nowrap px-4 py-2 font-medium">{item.date}</td>
            <td  class="whitespace-nowrap px-4p y-2">{item.category}</td>
            <td  class="whitespace-nowrap px-4p y-2">{item.quantity}</td>
            <td  class="whitespace-nowrap px-4p y-2">{item.price}</td>
            <td  class="whitespace-nowrap px-4p y-2">SHL : {item.quantity *item.price}</td>
            <td  class="whitespace-nowrap px-4p y-2">$ {doler.toFixed(2)}</td>
          </tr>
          )
        })
     }
    </tbody>
  </table>
  )
}

const SellingTable = () => {
  const {getallbuymentfuelprice ,cash} = useContext(fuelcontex);
  const [itemsearch , setitemsearch] = useState('');
  const [Alerts , setAlert] = useState(false);
  const [drop , setdrop] = useState(false);
  const [undo , setundo] = useState(false);
  



  const Apidelet = (userid ) =>{
    setundo(true);
      fetch(`http://localhost:4000/deletebuymentgas`,{
        method:'POST',
        headers:{
       "Content-Type" : "application/json"
        }
       , body:JSON.stringify({
         userid
         })
       })
       .then((res , e) =>{
        setAlert(true);
       
        })
   
  }

  setTimeout(() => {
    setAlert(false);
  }, 1000);



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
    <div>
           {
                  Alerts === true ? 
                  <div className='fixed w-[50%] top-10 right-10'>
                   <Alertsshow/>
                  </div> : null
                }
        <div class="flex flex-col">
       <div class="overflow-x-auto scrollbar-hide sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <div className='p-4 flex justify-between '>
          <input type='text' placeholder='search results' 
          className='p-2 outline-none w-[30%] darks border-gray-300 border rounded'
          onChange={(e) => setitemsearch(e.target.value)}/>
        </div>
       < table class="min-w-full text-left text-sm font-light">
    <thead class="border-b font-medium text-gray-400 dark:border-neutral-500">
      <tr className=' capitalize text-sm'>
              <th  scope="col" class="px-2 py-4">Dates</th>
              <th  scope="col" class="px-2 py-4">Category</th>
              <th  scope="col" class="px-2 py-4">quantity</th>
              <th  scope="col" class="px-2 py-4"> SHL</th>
              <th  scope="col" class="px-2 py-4">Cash SHL</th>
              <th  scope="col" class="px-2 py-4"> Cash $</th>
              <th  scope="col" class="px-2 py-4"> Action</th>
            </tr>
          </thead>
          <tbody>
           {
              getallbuymentfuelprice.filter((val) =>{
                if(val === ""){
                  return val
                }
                else if(val.category.toLowerCase().includes(itemsearch.toLowerCase())){
                  return val
                }
              }).
              map((item , i) =>{
                const total =  item.price * item.quantity;
                const doler =  total / cash;
                return(
                  <tr class="border-b dark:border-neutral-500" key={i}>
                  <td class="whitespace-nowrap px-2 py-2 font-medium">{item.date}</td>
                  <td class="whitespace-nowrap px-2 py-2">{item.category}</td>
                  <td class="whitespace-nowrap px-2 py-2">{item.quantity}</td>
                  <td class="whitespace-nowrap px-2 py-2">{item.price}</td>
                  <td class="whitespace-nowrap px-2 py-2">SHL : {item.quantity *item.price}</td>
                  <td class="whitespace-nowrap px-2 py-2">$ {doler.toFixed(2)}</td>
                  <td class="whitespace-nowrap px-2 py-2 flex space-x-2 items-center"><Updateselling
                  id={item._id}/>
                  <AiOutlineDelete  onClick={() => { Apidelet(item._id) }}/>:
                  </td>
                </tr>
                )
              })
           }
         
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
           

    </div>
  )
}

export default SellingTable