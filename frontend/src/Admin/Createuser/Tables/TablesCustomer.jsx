import React, { useContext, useState } from 'react'
import UserContex from '../../../Statemagemant/creater/creater'
import CustomerForm from '../Creaters/Forms/CustomerForm';

export const Tablecustomerrepot = () =>{
  const {Emplooydate , customer ,user , customerdlet} = useContext(UserContex);
  return (
    <div>
      <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b font-medium dark:border-neutral-500">
        <tr>
          <th scope="col" className="px-6 py-4">FullName</th>
          <th scope="col" className="px-6 py-4">Number</th>
          <th scope="col" className="px-6 py-4">national id</th>
          <th scope="col" className="px-6 py-4">Car Id</th>
          <th scope="col" className="px-6 py-4">Loacation</th>
        </tr>
      </thead>
      <tbody>
       {
        customer.map((item , i) =>{
            return(
                <tr className="border-b dark:border-neutral-500" key={i}>
                <td className="whitespace-nowrap px-6 py-4">{item.fullname}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.Numbers}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.Numbers}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.CarID}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.Location}</td>
              </tr>
            )
        })
       }
        
      </tbody>
    </table>
    <div className='flex justify-between mt-4  items-center bgn p-2 w-full   btn2 '>
           <h1 className='font-press font-semibold text-[12px]'>customer Total</h1>
           <h1 className='flex justify-between space-x-8'>
            <p>Subtotal</p>
            <p>{customer.length}</p>
           </h1>
         </div>
    </div>
  )
}
const TablesCustomer = () => {
  const {Emplooydate , customer ,user , customerdlet , customerdelAlert} = useContext(UserContex);
  const Alertsshow = () =>{
    return(
      <div
      className="mb-3 shadow-sm inline-flex justify-between w-full items-center rounded-lg btn dark:text-neutral-500 px-6 py-3 text-base text-neutral-50 dark:bg-white"
      role="alert">
      <span className="mr-2 flex items-center space-x-1">
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

  const  Modal=({id}) => {
    const [showModal, setShowModal] =useState(false);
    const [fullname , setfullname] = useState('')
    const [number , setnumber] = useState(Number)
    const [nationalid , setnationalid] = useState(Number)
    const [carID , setcarID] = useState(Number)
    const [Location , setLocation] = useState('')
    const [alerts , setalerts] = useState(false)
    const [alertdata , setalertdata] = useState(null)
    const fullnamechange = (e) => setfullname(e.target.value);
    const numberchange = (e) => setnumber(e.target.value);
    const carIDchange = (e) => setcarID(e.target.value);
    const Locationchange = (e) => setLocation(e.target.value);
    const nationalidchange = (e) => setnationalid(e.target.value);
    const customerupdate = async (e) =>{
      e.preventDefault();
      try {
          const response = await fetch(`http://localhost:4000/customerupdates`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               fullname , number , nationalid , carID ,Location ,  id
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
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl font-semibold">
                     Selling Form
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
                  <div className="relative p-6 flex-auto w-full">
                  <form className='' >
                     <div className="mb-3">
                        <input 
                        required
                        type="text"  
                        placeholder="Enter Fullname" 
                        className='p-2.5 w-full border-gray-300 border outline-none darks rounded'
                        onChange={fullnamechange}
                        />
                        <br/>
                        <input 
                        required
                        type="text"  
                        placeholder="Enter Number" 
                        className='p-2.5 w-full border-gray-300 border outline-none mt-2 darks rounded'
                        onChange={numberchange}
                        />
                            <br/>
                    
                        <input 
                        required
                        type="text"  
                        placeholder="Enter Nationalid" 
                        className='p-2.5 w-full border-gray-300 border darks outline-none mt-2 rounded'
                        onChange={nationalidchange}
                        />
                            <br/>
                    
                        <input 
                        required
                        type="text"  
                        placeholder="Enter Car Id" 
                        className='p-2.5 w-full border-gray-300 border darks outline-none mt-2 rounded'
                        onChange={carIDchange}
                        />
                            <br/>
                    
                        <input 
                        required
                        type="text"  
                        placeholder="Enter Location"  
                        className='p-2.5 w-full border-gray-300 border outline-none mt-2 darks rounded'
                        onChange={Locationchange}
                        />
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
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                        onClick={customerupdate}
                    >
                      Save Changes
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
      {
        customerdelAlert === true ? <div className='fixed top-16 right-10'> <Alertsshow/> </div>: null
      }
         <div>
    <div className="flex flex-col">
   <div className="overflow-x-auto scrollbar-hide sm:-mx-6 lg:-mx-8">
 <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
  <div className="overflow-hidden">
    
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b font-medium dark:border-neutral-500">
        <tr>
          <th scope="col" className="px-6 py-4">FullName</th>
          <th scope="col" className="px-6 py-4">Number</th>
          <th scope="col" className="px-6 py-4">national id</th>
          <th scope="col" className="px-6 py-4">Car Id</th>
          <th scope="col" className="px-6 py-4">Location</th>
          <th scope="col" className="px-6 py-4">Action</th>
        </tr>
      </thead>
      <tbody>
       {
        customer.map((item , i) =>{
            return(
                <tr className="border-b dark:border-neutral-500" key={i}>
                <td className="whitespace-nowrap px-6 py-4">{item.fullname}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.Numbers}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.Numbers}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.CarID}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.Location}</td>
                <td className="whitespace-nowrap px-6 py-4 flex space-x-2">
                    <div>
                      <Modal id={item._id}/>
                    </div>
                    <div className=' cursor-pointer' onClick={() => customerdlet(item._id)}>Delet</div>
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
    </div>
  )
}

export default TablesCustomer