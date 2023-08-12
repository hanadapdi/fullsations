import React, { useContext, useState } from 'react'
import UserContex from '../../Statemagemant/creater/creater';
import fuelcontex from '../../Statemagemant/Fuelstate/Fuelstate';

const Left = () => {
    const [showModal, setShowModal] = useState(false);
    const [Tittel , setTittel] = useState('')
    const [Fullname , setFullname] = useState(Number)
    const [Salary , setSalary] = useState(Number)
    const [NumberE , setNumberE] = useState(Number)
    const [dates , setdates] = useState('')
    const Tittelchange = (e) => setTittel(e.target.value);
    const Fullnamechange = (e) => setFullname(e.target.value);
    const Salarychange = (e) => setSalary(e.target.value);
    const NUmberEchange = (e) => setNumberE(e.target.value);
    const dateschange = (e) => setdates(e.target.value);
    const {Emplooydate } = useContext(UserContex)
    const {salary} = useContext(fuelcontex);
    console.log(Fullname , Tittel  ,Salary)
    const buymentfuelsave = (e) =>{
      setShowModal(false) 
      if(Tittel !== '' || Fullname !== "" || Salary !== ""){
        try {
          e.preventDefault();
          fetch('http://localhost:4000/esavesalary',{
            method:'post',
               headers:{
                "Content-Type" : "application/json"
               },
               body:JSON.stringify({
                   Tittel , Fullname , Salary , dates , NumberE
            })
          })
        } catch (error) {
          console.log('halkan waa buymenyfuelsave hada error aya jira')
        }
      }
    }
    return (
      <>
        <button
          className="btn  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full darks outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-md font-semibold darks">
                    Salary form
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
                  <div className="relative p-6 flex-auto">
                     <form className='w-full  text-black'>
                       <div className='textbtn font-semibold opacity-80 capitalize'>Title</div>
                        <select className='w-full border darks   rounded p-3 outline-none'
                                onChange={Tittelchange}>
                          {
                            salary.map((item , i) =>{
                              return(
                                   <option value={item.Tittle}  key={i}>{item.Tittle}</option>
                                   )
                            })
                          }
                               
                          </select>
                          <div className='textbtn font-semibold opacity-80 capitalize mt-3'>fullname</div>

                        <select className='w-full border darks  rounded p-3 outline-none'
                                onChange={Fullnamechange}>
                          {
                            Emplooydate.map((item , i) =>{
                              return(
                                   <option value={item.fullname}  key={i}>{item.fullname}</option>
                                   )
                            })
                          }
                               
                          </select>
                          <div className='textbtn font-semibold opacity-80 capitalize mt-3'>Salary</div>
                        <select className='w-full border darks   rounded p-3 outline-none'
                                onChange={Salarychange}>
                          {
                            salary.map((item , i) =>{
                              return(
                                   <option value={item.SalaryEmplooyer}  key={i}>${item.SalaryEmplooyer}</option>
                                   )
                            })
                          }
                               
                          </select>

                          <div className='textbtn font-semibold opacity-80 capitalize mt-3'>number</div>
                        <input 
                        type="number"
                        placeholder='Enter Numebr Emplooyer'
                        className='w-full p-3 darks  border outline-none  rounded'
                        onChange={NUmberEchange}/>
                        
                        <input 
                        type="date"
                        placeholder='Enter  Salary'
                        className='w-full p-3  darks border outline-none mt-4 rounded'
                        onChange={dateschange}/>
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

export default Left