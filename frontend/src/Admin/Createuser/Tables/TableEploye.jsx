import React, { useContext, useState } from 'react'
import UserContex from '../../../Statemagemant/creater/creater'
export const TableEployeRepot = () =>{
  const {Emplooydate , endelet} = useContext(UserContex)
  return <div>
     <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b font-medium text-gray-400 dark:border-neutral-500">
      <tr classNameName=' capitalize text-sm'>
                    <th scope="col" className="px-4 py-4">
                        Name
                    </th>
                    <th scope="col" className="px-4 py-4">
                        Age
                    </th>
                    <th scope="col" className="px-4 py-4">
                        job
                    </th>
                    <th scope="col" className="px-4 py-4">
                        work time
                    </th>
                    <th scope="col" className="px-4 py-4">
                      salary
                    </th>
                    <th scope="col" className="px-4 py-4">
                    Nationality
                    </th>
                   
                </tr>
            </thead>
            <tbody>
                {
                  
                    Emplooydate.map((item , i) =>{
                      const salary = item.Salary;
                      console.log(salary)
                      // const values = salary.map(items => item.salary); // Extract the 'value' property values into a new array

                   ; 
                        return (
                            <tr className="bg-white border-b darks" key={i}>
                    <td className="px-4 py-4">
                        {item.fullname}
                    </td>
                    <td className="px-4 py-4">
                        {item.birghtday}
                    </td>
                    <td className="px-4 py-4">
                        {item.job}
                    </td>
                    <td className="px-4 py-4">
                        {item.workTime}
                    </td>
                    <td className="px-4 py-4">
                        {item.Salary}
                    </td>
                    <td className={'whitespace-nowrap px-2 py-4'}>
                        {item.nationalty}
                    </td>
                   
                </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <div className='flex justify-between mt-4  items-center bgn p-2 w-full   btn2 '>
           <h1 className='font-press font-semibold text-[12px]'>Emplooye Total</h1>
           <h1 className='flex justify-between space-x-8'>
            <p>Subtotal</p>
            <p>{Emplooydate.length}</p>
           </h1>
         </div>
  </div>
}

const TableEploye = ({setDelAlart}) => {
    const {Emplooydate , endelet ,setShowalert} = useContext(UserContex)
    const data = [1,2,3,4,5,6,7,8,9,10,11]

    const EmlpoyeesDelet = (id ) =>{
        fetch(`http://localhost:4000/Empolyedlet`,{
          method:'POST',
          headers:{
            "Content-Type" : "application/json"
          }
          , body:JSON.stringify({
            id
          })
        })
        .then((res , e) =>{
          setShowalert(true);
          setDelAlart(true)
        })
      }

    const Updatefrom = ({id , name , age, jobs , workTime , salarys , nationalty}) => {

    const [showModal, setShowModal] = useState(false);
       const [ fullnameUpdate , setfullnameUpdate ] = useState(name)
       const [ageupdate , setageupdate ] = useState(age)
       const [jobupdate , setjobupdate ] = useState(jobs)
       const [workTimeupdate , setworktimeupdate ] = useState(workTime)
       const [salaryupdate , setsalaryupdate ] = useState(salarys)
       const [nationalityupdate , setnationalityupdate ] = useState(nationalty)

       const fullnamechange = (e) => setfullnameUpdate(e.target.value);
       const agechange = (e) => setageupdate(e.target.value)
       const jobchange = (e) => setjobupdate(e.target.value)
       const worktimechange = (e) => setworktimeupdate(e.target.value)
       const salarychange = (e) => setsalaryupdate(e.target.value)
       const nationalitychange = (e) => setnationalityupdate(e.target.value)
       console.log(fullnameUpdate , ageupdate , jobupdate , workTimeupdate , salaryupdate , nationalityupdate)
        const updateEmployee = async (e) =>{
          e.preventDefault();
          try {
              const response = await fetch(`http://localhost:4000/updateEmployees`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullnameUpdate , ageupdate , jobupdate , workTimeupdate , salaryupdate , nationalityupdate , id
                }),
              });
              const data = await response.json();
              if(data){
                setShowModal(false)
              }
          else{
            console.log('please confirm your password')
          }
          } catch (error) {
            console.log(error)
          }
        }
        return (
          <>
            <button
              className=" text-sm  "
              type="button"
              onClick={() => setShowModal(true)}
            >
             edit
            </button>
            {showModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative  my-6 mx-auto max-w-sm w-full">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className=" font-semibold">
                         Update Emplooye Form
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative 2 flex-auto w-full">
                         <form className=' w-full text-black'>
                            <input 
                            type="text"
                            value={fullnameUpdate}
                            placeholder='Enter fullname'
                            onChange={fullnamechange}
                            className='w-full   p-3 border outline-none mt-4 rounded'
                            />
                            <br/>
                            <input 
                            type="text"
                            value={ageupdate}
                            placeholder='Enter birthday'
                            onChange={agechange}
                            className='w-full   p-3 border outline-none mt-4 rounded'
                            />
                            <br/>
                            <input 
                            type="text"
                            value={jobupdate}
                            placeholder='Enter work'
                            onChange={jobchange}
                            className='w-full   p-3 border outline-none mt-4 rounded'
                            />
                            <br/>
                            <input 
                            type="text"
                            value={workTimeupdate}
                            placeholder='Enter Worktime'
                            onChange={worktimechange}
                            className='w-full   p-3 border outline-none mt-4 rounded'
                            />
                            <br/>
                            <input 
                            type="text"
                            value={salaryupdate}
                            placeholder='Enter Salary'
                            onChange={salarychange}
                            className='w-full   p-3 border outline-none mt-4 rounded'
                            />
                            <br/>
                            <input 
                            type="text"
                            value={nationalityupdate}
                            placeholder='Enter confirm nactionality'
                            onChange={nationalitychange}
                            className='w-full p-3  border mb-2 outline-none mt-4 rounded'
                            />
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
                          className="text-white btn font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button" onClick={updateEmployee}
                        >
                          Update 
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </>
        );
      }
  return (
    <div>
    <div className="relative overflow-x-autosm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase  ">
                <tr classNameName='border-b'>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Age
                    </th>
                    <th scope="col" className="px-6 py-3">
                        job
                    </th>
                    <th scope="col" className="px-6 py-3">
                        work time
                    </th>
                    <th scope="col" className="px-2 py-4">
                      salary
                    </th>
                    <th scope="col" className="px-6 py-3 w-20">
                    Nationality
                    </th>
                    <th scope="col" className="px-6 py-3 w-20">
                    Action
                    </th>
                   
                </tr>
            </thead>
            <tbody>
                {
                  
                    Emplooydate.map((item , i) =>{
                      const salary = item.Salary;
                      console.log(salary)
                      // const values = salary.map(items => item.salary); // Extract the 'value' property values into a new array

                   ; 
                        return (
                            <tr className="bg-white border-b darks" key={i}>
                    <td className={'whitespace-nowrap px-6 py-4'}>
                        {item.fullname}
                    </td>
                    <td className={'whitespace-nowrap px-6 py-4'}>
                        {item.birghtday}
                    </td>
                    <td className={'whitespace-nowrap px-6 py-4'}>
                        {item.job}
                    </td>
                    <td className={'whitespace-nowrap px-6 py-4'}>
                        {item.workTime}
                    </td>
                    <td className={'whitespace-nowrap px-6 py-4'}>
                        {item.Salary}
                    </td>
                    <td className={'whitespace-nowrap px-6 py-4'}>
                        {item.nationalty}
                    </td>
                    <td className=" whitespace-nowrap px-6 py-4 flex space-x-2">
                        <span>
                          <Updatefrom 
                            id={item._id} 
                            name={item.fullname}  
                            age={item.birghtday} 
                            jobs={item.job} 
                            workTime={item.workTime} 
                            salarys={item.Salary}
                            nationalty={item.nationalty}/></span>
                        <span className=' cursor-pointer' onClick={() => EmlpoyeesDelet(item._id)}>delet</span>
                    </td>
                   
                </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default TableEploye