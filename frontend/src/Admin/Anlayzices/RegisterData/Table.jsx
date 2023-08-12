import React, { useEffect, useState } from 'react'

const TableRegister = () => {
    const [DataRegistration , setDataRegistration] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/registersdata').then( res => res.json())
        .then(result =>{
            setDataRegistration(result)
        })
    })
  return (
    <div>
    <div class="flex flex-col">
     <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
    <table class="min-w-full text-left text-sm font-press ">
      <thead class="border-b  dark:border-neutral-500">
        <tr>
          <th scope="col" class="px-3 py-2">Type</th>
          <th scope="col" class="px-3 py-2">TotalGas LT</th>
          <th scope="col" class="px-3 py-2">Gasprice $</th>
          <th scope="col" class="px-3 py-2">Gasbuyment LT</th>
          <th scope="col" class="px-3 py-2">Gasbuyprice $</th>
          <th scope="col" class="px-3 py-2">DailyExchange </th>
          <th scope="col" class="px-3 py-2">ProfitGas </th>
          <th scope="col" class="px-3 py-2">Description </th>
        </tr>
      </thead>
      <tbody>
        {
          DataRegistration.map((item , i) =>{
            return(
              <tr class="border-b dark:border-neutral-500" key={i}>
              <td class="whitespace-nowrap px-3 py-2 font-medium">{item.Type}</td>
              <td class="whitespace-nowrap px-3 py-2">{item.TotalGas}</td>
              <td class="whitespace-nowrap px-3 py-2">{item.ToTalGasprice}</td>
              <td class="whitespace-nowrap px-3 py-2">{item.Gasbuyment}</td>
              <td class="whitespace-nowrap px-3 py-2">{item.Gasbuyprice}</td>
              <td class="whitespace-nowrap px-3 py-2">{item.DailyExchange}</td>
              <td class="whitespace-nowrap px-3 py-2">{item.ProfitGas}</td>
              <td class="whitespace-nowrap px-3 py-2">{item.Description}</td>
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

export default TableRegister