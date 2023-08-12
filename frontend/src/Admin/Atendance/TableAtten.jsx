import React, { useContext, useState } from 'react'
import UserContex from '../../Statemagemant/creater/creater'
import fuelcontex from '../../Statemagemant/Fuelstate/Fuelstate';


export const Typelreturn =  () =>{
  const {AtTable} = useContext(UserContex);
  return(
 <div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 darks">
        <tr>
            <th scope="col" class="px-4 py-3">
               Attedance
            </th>
            <th scope="col" class="px-4 py-3">
                Name
            </th>
            <th scope="col" class="px-4 py-3">
                Tittle
            </th>
            <th scope="col" class="px-4 py-3">
                Date
            </th>
        </tr>
    </thead>
    <tbody>
        {
          
            AtTable
            .map((item , i) =>{
                
                return (
                    <tr class="bg-white border-b darks">
            <td class="w-4 p-4">
                <div class="flex items-center">
                    <input 
                    type="checkbox" 
                    checked={item.AttendanceId}
                    disabled={true} 
                    id="checkbox-table-search-3" 
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                </div>
            </td>
            <td class="px-4 py-4">
          {item.Name}  
            </td>
            <td class="px-4 py-4">
          {item.Tittel}   
            </td>
            <td class="px-4 py-4">
          {item.Date}  
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

const TableAtten = () => {
    const  data = [1,2,3,4,5,6,7,8,9,10,11]
    const {Emplooydate ,searcheAttendees ,AtTable} = useContext(UserContex);
    const [Tittela , setTittel] = useState('')
    const [Fullname , setFullname] = useState(Number)
    const [Salary , setSalary] = useState(Number)
    const [NumberE , setNumberE] = useState(Number)
    const [dates , setdates] = useState('')
    const Tittelchange = (e) => setTittel(e.target.value);
    const Fullnamechange = (e) => setFullname(e.target.value);
    const Salarychange = (e) => setSalary(e.target.value);
    const NUmberEchange = (e) => setNumberE(e.target.value);
    const dateschange = (e) => setdates(e.target.value);
    const {salary} = useContext(fuelcontex);
    

    
    const EAttendencefrom = ({names , title}) =>{
            const [showModal, setShowModal] = useState(false);
            const [Fullname , setFullname] = useState(names)
            const [Tittel , setTittel] = useState(title)
            const [dates , setdates] = useState('')
            const [AttendanceId , setAttendanceId] = useState(null)

            const Tittelchange = (e) => setTittel(e.target.value);
            const Fullnamechange = (e) => setFullname(e.target.value);
            const dateschange = (e) => setdates(e.target.value);
            const [Date , setDate] = useState('')
            console.log(Fullname, Tittel , dates , AttendanceId)
            
              const Updatesalarys = async(e) =>{
                setShowModal(false) 
                if(Tittel !== ''  || Fullname !== ""){
                  e.preventDefault();
                  try {
                    const response = await fetch(`http://localhost:4000/emAttedance`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        Fullname  , Tittel ,dates ,AttendanceId
                      }),
                    });
                  } catch (error) {
                    console.log('halkan waa updatesalary hada error aya jira')
                  }
                }
              }
            return (
              <div>
                    <>
                  <button
                    className=" ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                  Attendance
                  </button>
                  {showModal ? (
                    <>
                      <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                      >
                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full darks bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <h3 className="text-xl ">
                              Attendance 
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none  outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                            <form className='w-full  text-black'>
                        <select className='w-full border darks   rounded p-3 outline-none'
                                onChange={Tittelchange}
                                >
                       
                                     <option value={Tittel}>{Tittel}</option>
                        
                          </select>

                        <select className='w-full border darks mt-2 rounded p-3 outline-none'
                                onChange={Fullnamechange}>
                      
                                   <option value={Fullname}>{Fullname}</option>
                            
                               
                          </select>
                        <input 
                        type="date"
                        placeholder='Enter  Salary'
                        className='w-full p-3  darks border outline-none mt-4 rounded'
                        onChange={dateschange}/>
                           <div className='flex space-x-4'>
                           <div class="flex items-center mt-4">
                                 <input 
                                  type="checkbox" 
                                  id="checkbox-table-search-3" 
                                  onChange={()=>setAttendanceId(true)}
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                  <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                  <div className='ml-3'>jooga</div>
                                 </div>
                                <div class="flex items-center mt-4">
                                 <input 
                                  type="checkbox" 
                                  id="checkbox-table-search-3" 
                                  onChange={()=>setAttendanceId(false)} 
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                  <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                  <div className='ml-3'>Maqan</div>
                                 </div>
                           </div>
                  </form>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  setShowModal(false)}
                                }
                              >
                                Close
                              </button>
                              <button
                                className="btn text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                  onClick={Updatesalarys}
                              >
                                Attendance 
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                </>
              </div>
            )
          }
          
 

  return (
    <div>
    <div class="relative overflow-x-autosm:rounded-lg rounded">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 darks">
                <tr>
                    <th scope="col" class="px-4 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-4 py-3">
                        Age
                    </th>
                    <th scope="col" class="px-4 py-3">
                        job
                    </th>
                    <th scope="col" class="px-4 py-3">
                        work time
                    </th>
                    <th scope="col" class="px-4 py-3">
                      salary
                    </th>
                    <th scope="col" class="px-4 py-3">
                    Nationality
                    </th>
                    <th scope="col" class="px-4 py-3">
                       Attedance
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    Emplooydate.filter((val) =>{
                        if(val === "") {
                            return val
                        }
                        else if( val.job.toLowerCase().includes(searcheAttendees.toLowerCase()) ) {
                            return val
                        }
                    })
                    .map((item , i) =>{
                        
                        return (
                            <tr class="bg-white border-b darks">
                    <td class="px-4 py-4">
                  {item.fullname}   
                    </td>
                    <td class="px-4 py-4">
                  {item.birghtday}  
                    </td>
                    <td class="px-4 py-4">
                  {item.job}  
                    </td>
                    <td class="px-4 py-4">
                  {item.workTime}  
                    </td>
                    <td class="px-4 py-4">
                  {item.Salary} 
                    </td>
                    <td class="px-4 py-4">
                  {item.nationalty} 
                    </td>
                    
                
                    <td class="flex items-center px-4 py-4 space-x-3">
                       <EAttendencefrom names={item.fullname} title={item.job}/>
                    </td>
                </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    <div>
        
    </div>
    </div>
  )
}

export default TableAtten