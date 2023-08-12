import React from 'react'

const Tyble = () => {
  return (
    <div>
        <div class="flex flex-col">
       <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <div className='p-2 flex justify-between '>
          <input type='text' placeholder='search results' className='p-2 darks outline-none w-[30%] text-black rounded'/>
          <h1 className='text-lg font-press'>serach</h1>
        </div>
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">FullName</th>
              <th scope="col" class="px-6 py-4">Number	</th>
              <th scope="col" class="px-6 py-4">Car Id</th>
              <th scope="col" class="px-6 py-4">Loacation</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td class="whitespace-nowrap px-6 py-4">Kader hasan</td>
              <td class="whitespace-nowrap px-6 py-4">0634000000</td>
              <td class="whitespace-nowrap px-6 py-4">M2009</td>
              <td class="whitespace-nowrap px-6 py-4">Hargeisa</td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Tyble