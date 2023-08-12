import React, { useContext, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { FaClosedCaptioning } from 'react-icons/fa';
import fuelcontex from '../../Statemagemant/Fuelstate/Fuelstate';
export const UpdateSalary = ({idSalary}) =>{
  const [showModal, setShowModal] = useState(false);
    const [Tittle , setTittle] = useState('')
    const [Salary , setSalary] = useState(Number)
    const Tittlechange = (e) => setTittle(e.target.value);
    const Salarychange = (e) => setSalary(e.target.value);
  
    const Updatesalarys = async(e) =>{
      setShowModal(false) 
      if(Tittle !== ''  || Salary !== ""){
        e.preventDefault();
        try {
          const response = await fetch(`http://localhost:4000/Updatesalarys`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Tittle  , Salary , idSalary
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
        Edit
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
                     Update Salary
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

                        <select className='w-full border darks  rounded p-3 outline-none'
                        onChange={Tittlechange}>
                           <option value="" >Select</option>
                           <option value="Staff" >Staff</option>
                           <option value="Manager" >Manager</option>
                           <option value="Oparetion" >Oparetion</option>
                           <option value="Admin" >Admin</option>
                        </select>
                        <input 
                        type=""
                        placeholder='Enter  Salary'
                        className='w-full p-3 darks  border outline-none mt-4 rounded'
                        onChange={Salarychange}/>
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
    </div>
  )
}


const Chartsalary = () => {
  const{Showalert , setShowalert , Alert } =useContext(fuelcontex);
    const [showModal, setShowModal] = useState(false);
    const [Tittle , setTittle] = useState('')
    const [Salary , setSalary] = useState(Number)
    const Tittlechange = (e) => setTittle(e.target.value);
    const Salarychange = (e) => setSalary(e.target.value);
    const [dataalert , setdataalert] = useState('');
 
    const buymentfuelsave = (e) =>{
      setShowModal(false) 
      if(Tittle !== ''  || Salary !== ""){
        try {
          e.preventDefault();
          fetch('http://localhost:4000/savesalary',{
            method:'post',
               headers:{
                "Content-Type" : "application/json"
               },
               body:JSON.stringify({
                   Tittle  , Salary , 
            })
          }).then((response) => response.json()).then(data => {
            setShowalert(true);
            setdataalert('save data success full salary')
          })
        } catch (error) {
        }
      }
    }
    return (
      <>
      {Showalert === true ? <Alert className='mt-2' dataproperty={dataalert}/> : null}
        <button
          className=" btn font-bold uppercase text-sm text-white rounded-sm  px-4 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
        Salary
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
                     Create Salary
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

                        <select className='w-full border darks  rounded p-3 outline-none'
                        onChange={Tittlechange}>
                           <option value="" >Select</option>
                           <option value="Staff" >Staff</option>
                           <option value="Manager" >Manager</option>
                           <option value="Oparetion" >Oparetion</option>
                           <option value="Admin" >Admin</option>
                        </select>
                        <input 
                        type=""
                        placeholder='Enter  Salary'
                        className='w-full p-3 darks  border outline-none mt-4 rounded'
                        onChange={Salarychange}/>
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
                        onClick={buymentfuelsave}
                    >
                      Save 
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

export default Chartsalary