import React, { useContext } from 'react'
import fuelcontex from '../../Statemagemant/Fuelstate/Fuelstate'
import Updateprice from './Updateprice';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { AddbuymentUpdate } from './Addbuyment';

// src/Table.js

export const Tables = () => {
  const {datafuelgas} = useContext(fuelcontex)
  return (
    <table class="min-w-full text-left text-sm font-light">
      <thead class="border-b font-medium text-gray-400 dark:border-neutral-500">
      <tr className=' capitalize text-sm'>
        <th scope="col" class="px-2 py-4">Date</th>
        <th scope="col" class="px-2 py-4">category</th>
        <th scope="col" class="px-2 py-4">price</th>
        <th scope="col" class="px-2 py-4">quantity</th>
        <th scope="col" class="px-2 py-4">Action</th>
     </tr>
      </thead>
      <tbody>
      {
          datafuelgas.map((item , i) =>{
            return(
              <tr class="border-b dark:border-neutral-500" key={i}>
              <td class="whitespace-nowrap px-2 py-2 font-medium">{item.date}</td>
              <td class="whitespace-nowrap px-2 py-2 font-medium">{item.category}</td>
              <td class="whitespace-nowrap px-2 py-2 font-medium">{item.price}</td>
              <td class="whitespace-nowrap px-2 py-2 font-medium">{item.quantity}</td>
              <td class="whitespace-nowrap px-2 py-2 font-medium flex space-x-2 items-center">
                <AddbuymentUpdate
                name={item.category}
                price={item.price}
                quantity={item.quantity}/>
                <AiOutlineDelete/>
              </td>
              </tr>
            )})}
      </tbody>
    </table>
  );
};
export const TableLoan = () => {
  const {Loand} = useContext(fuelcontex)
  return (
    <table class="min-w-full text-left text-sm font-light">
    <thead class="border-b font-medium text-gray-400 dark:border-neutral-500">
    <tr className=' capitalize text-sm'>
          <th scope="col" class="px-2 py-4">date</th>
          <th scope="col" class="px-2 py-4">category</th>
          <th scope="col" class="px-2 py-4">price</th>
          <th scope="col" class="px-2 py-4">quantity</th>
          <th scope="col" class="px-2 py-4">Action</th>
        </tr>
      </thead>
      <tbody>
      {
          Loand.map((item , i) =>{
            return(
        <tr class="border-b dark:border-neutral-500" key={i}>
           <td class="whitespace-nowrap px-2 py-2 font-medium">{item.date}</td>
           <td class="whitespace-nowrap px-2 py-2 font-medium">{item.category}</td>
           <td class="whitespace-nowrap px-2 py-2 font-medium">${item.price}</td>
           <td class="whitespace-nowrap px-2 py-2 font-medium">LT{item.quantity}</td>
           <td class="whitespace-nowrap px-2 py-2 font-medium flex items-center space-x-1">
            <AiOutlineEdit/>
            <AiOutlineDelete/>
           </td>
        </tr>
            )})}
      </tbody>
    </table>
  );
};


export const Tablepricelast = () => {
  const {fuelprice} = useContext(fuelcontex)
  return (
    <table class="min-w-full text-left text-sm font-light">
      <thead class="border-b font-medium text-gray-400 dark:border-neutral-500">
      <tr className=' capitalize text-sm'>
        <th scope="col" class="px-2 py-4">category</th>
        <th scope="col" class="px-2 py-4">price</th>
        <th scope="col" class="px-2 py-4">quantity</th>
        <th scope="col" class="px-2 py-4">action</th>
        </tr>
      </thead>
      <tbody>
      {
          fuelprice.map((item , i) =>{
            return(
              <tr class="border-b dark:border-neutral-500" key={i}>
              <td class="whitespace-nowrap px-2 py-2 font-medium">{item.category}</td>
              <td class="whitespace-nowrap px-2 py-2 font-medium">{item.price}</td>
              <td class="whitespace-nowrap px-2 py-2 font-medium">{item.price}</td>
              <td class="whitespace-nowrap px-2 py-2 font-medium flex space-x-2 items-center">
              <Updateprice 
              id={item._id}
              category={item.category}  
              price={item.price} 
              quantity={item.quantity}/>
              <AiOutlineDelete/>
              </td>
        </tr>
            )})}
      </tbody>
    </table>
  );
};


const Table = () => {
  const {datafuelgas} = useContext(fuelcontex)
  return (
    <div>
    <div class="flex flex-col">
     <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
    <div className='p-2 flex justify-between '>
      <input type='text' placeholder='search results' className='p-2 darks outline-none w-[30%] text-black rounded'/>
    </div>
    <table class="min-w-full text-left text-sm font-light">
      <thead class="border-b font-medium dark:border-neutral-500">
        <tr>
          <th scope="col" class="px-6 py-4">#</th>
          <th scope="col" class="px-6 py-4">category</th>
          <th scope="col" class="px-6 py-4">price $</th>
          <th scope="col" class="px-6 py-4">quantity LT</th>
          <th scope="col" class="px-6 py-4">quantity LT</th>
        </tr>
      </thead>
      <tbody>
        {
          datafuelgas.map((item , i) =>{
            return(
              <tr class="border-b dark:border-neutral-500" key={i}>
              <td class="whitespace-nowrap px-6 py-4 font-medium">{item.date}</td>
              <td class="whitespace-nowrap px-6 py-4">{item.category}</td>
              <td class="whitespace-nowrap px-6 py-4">{item.price}</td>
              <td class="whitespace-nowrap px-6 py-4">{item.quantity}</td>
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

export default Table