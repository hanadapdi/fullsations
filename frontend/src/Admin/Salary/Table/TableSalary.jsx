import React, { useContext } from 'react'
import fuelcontex from '../../../Statemagemant/Fuelstate/Fuelstate';
import { UpdateSalary } from '../CreateSalary';

const TableSalary = () => {
    const {salary} = useContext(fuelcontex)

  return (
    <div class="relative overflow-x-autosm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs darks uppercase  ">
            <tr className='border-b'>
                <th scope="col" class="px-6 py-3">
                    Tittel
                </th>
                <th scope="col" class="px-6 py-3">
                    Salary
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
               
            </tr>
        </thead>
        <tbody className=' '>
            {
              
              salary.map((item , i) =>{
               
                  // const values = salary.map(items => item.salary); // Extract the 'value' property values into a new array

               ; 
                    return (
                        <tr class="bg-white border-b darks " key={i}>
                <td class="px-6 py-4">
                    {item.Tittle}
                </td>
                <td class="px-6 py-4">
                    $ {item.SalaryEmplooyer}
                </td>
                <td class="px-6 py-4">
                   <UpdateSalary idSalary={item._id}/>
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

export default TableSalary