import React, { useContext, useState } from 'react'
import fuelcontex from '../../../Statemagemant/Fuelstate/Fuelstate';

const Exchange = () => {
  const {setShowalert} = useContext(fuelcontex)
    const [showModal, setShowModal] = useState(false);
    const [ date , setdate] = useState('')
    const [cashmony , setcashmony ] = useState('')
    const [Dollar , setDollar] = useState('')
    const datechange = (e) => setdate(e.target.value);
    const cashmonyChange = (e) => setcashmony(e.target.value);
    const Dollarchange = (e) => setDollar(e.target.value);
    const ExchangeSave =async (e) =>{
        e.preventDefault();
        if(date !== '' || cashmony !== '' || Dollar !== ''){
            fetch('http://localhost:4000/exchange' , {
                method: 'POST',
                headers:{
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    date , cashmony , Dollar
                })
            }).then(res =>{
                console.log(res)
                setShowalert(true);
            })
        }
        setShowModal(false)
    }
    const isInputDisabled = true;
    return (
        <>
          <button
            className=" text-[#4c987b]  font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
          Exchange
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
                      <h3 className="text-1xl font-semibold">
                      buy it gas form
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
                    <div className='w-full px-4 '>
                    <form className='w-full mt-1 text-black'>
                         
                          <input 
                          type="number"
                          placeholder='Enter Cash mony'
                          className='w-full darks   p-3 border outline-none mt-6 rounded'
                          onChange={cashmonyChange}/>                    
                          <input 
                          type="text"
                          value={1}
                          disabled={isInputDisabled}
                          placeholder='Enter Dollar mony'
                          className='w-full darks p-3  border outline-none mt-6 rounded'
                          onChange={Dollarchange}/>
                          <input 
                          type="date"
                          placeholder='Enter Cash mony'
                          className='w-full darks p-3  border outline-none mt-6 rounded'
                          onChange={datechange}/>
                      </form>
                       </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                            className="bg-emerald-300 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={ExchangeSave}
                          >
                           Buy Gas
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

export default Exchange