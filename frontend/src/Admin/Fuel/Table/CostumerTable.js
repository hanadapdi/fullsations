import React, { useContext, useState } from 'react'
import fuelcontex from '../../../Statemagemant/Fuelstate/Fuelstate'
import { AiFillDelete, AiFillEdit, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import Editcustomermodel from '../form/models/Editcustomermodel';

export const Customertabepulish = () => {
  const {customerservice ,cash} = useContext(fuelcontex);
  console.log(customerservice)
  return (
    <div>
           <table class="min-w-full text-left text-sm font-light">
    <thead class="border-b font-medium dark:border-neutral-500">
      <tr className=' capitalize'>
        <th scope="col" class="px-6 py-4">fullname</th>
        <th scope="col" class="px-6 py-4">CarId </th>
        <th scope="col" class="px-6 py-4">Category</th>
        <th scope="col" class="px-6 py-4">quantity</th>
        <th scope="col" class="px-6 py-4">price </th>
        <th scope="col" class="px-6 py-4">Total $ </th>
      </tr>
    </thead>
    <tbody>
     {
        customerservice.map((item , i) =>{
          const dollar = item.Gasprice *item.GasQuantity /cash;
          return(
            <tr class="border-b dark:border-neutral-500" key={i}>
            <td class="whitespace-nowrap px-6 py-4 font-medium">{item.customerName}</td>
            <td class="whitespace-nowrap px-6 py-4">{item.CarID}</td>
            <td class="whitespace-nowrap px-6 py-4">{item.Gas}</td>
            <td class="whitespace-nowrap px-6 py-4">{item.GasQuantity}</td>
            {/* <td class="whitespace-nowrap px-6 py-4">{item.Numbers}</td> */}
            <td class="whitespace-nowrap px-6 py-4">SH:{item.Gasprice}</td>
            <td class="whitespace-nowrap px-6 py-4">$:{dollar.toFixed(2)}</td>
          </tr>
          )
        })
     }
   
    </tbody>
  </table>
    </div>
  )
}

const CustomerTable = () => {
  const {customerservice ,cash} = useContext(fuelcontex);
  const [alerts ,  setAlert] = useState(false)
  const AlertComponents = () =>{
    return (
      <div>
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
              <p> deleted success full </p>
               </span>
             </div>
          </div>
    )
  }
  setTimeout(() => {
    setAlert(false);
  }, (1000));
  // console.log(customerservice)
  const del = async (id) =>{
    try {
      fetch('http://localhost:4000/Customerdelbuyments', {
        method:'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({id})
      }).then(res =>{
        setAlert(true);
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      {
        alerts === true ? <div className='fixed top-16 right-10 w-[30%]'> <AlertComponents/></div> : null
      }
           <table class="min-w-full text-left text-sm font-light">
    <thead class="border-b font-medium text-gray-400 dark:border-neutral-500">
      <tr className=' capitalize text-sm'>
        <th scope="col" class="px-2 py-4">fullname</th>
        <th scope="col" class="px-2 py-4">CarId </th>
        <th scope="col" class="px-2 py-4">Category</th>
        <th scope="col" class="px-2 py-4">quantity</th>
        <th scope="col" class="px-2 py-4">price </th>
        <th scope="col" class="px-2 py-4">Total $ </th>
        <th scope="col" class="px-2 py-4">Action </th>

      </tr>
    </thead>
    <tbody>
     {
        customerservice.map((item , i) =>{
          const dollar = item.Gasprice *item.GasQuantity /cash;
          return(
            <tr class="border-b dark:border-neutral-500" key={i}>
            <td class="whitespace-nowrap px-2 py-2 font-medium">{item.customerName}</td>
            <td class="whitespace-nowrap px-2 py-2">{item.CarID}</td>
            <td class="whitespace-nowrap px-2 py-2">{item.Gas}</td>
            <td class="whitespace-nowrap px-2 py-2">{item.GasQuantity}</td>
            {/* <td class="whitespace-nowrap2px-62py-4">{item.Numbers}</td> */}
            <td class="whitespace-nowrap px-2 py-2">SH:{item.Gasprice}</td>
            <td class="whitespace-nowrap px-2 py-2">$:{dollar.toFixed(2)}</td>
            <td class="whitespace-nowrap px-2 py-2 flex items-center space-x-2">
              <Editcustomermodel
                name={item.customerName}
                car={item.CarID}
                gas={item.Gas}
                Quantitys={item.GasQuantity}
                prices={item.Gasprice}
                number={item.Numbers}
                Location={item.Adderss}
                datess={item.Date}
                id={item._id }
              />
              <AiOutlineDelete onClick={() => del(item._id)}/>
            </td>
          </tr>
          )
        })
     }
   
    </tbody>
  </table>
    </div>
  )
}

export default CustomerTable