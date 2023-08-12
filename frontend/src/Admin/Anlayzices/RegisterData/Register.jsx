import React, { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai';

const Register = () => {
    const [showModal, setShowModal] = useState(false);
    const [option , setoption] = useState('');
    const [date , setdate] = useState('');
    const [Totalgas , setTotalgas] = useState('');
    const [totalgasprice , settotalgasprice] = useState('');
    const [totalgaybuyment , settotalgaybuyment] = useState('');
    const [totalbuymentprice , setttotalbuymentprice] = useState('');
    const [Exchange , setExchange] = useState('');
    const [profit , setprofit] = useState('');
    const [description , setdescription] = useState('');

    const optionchange = (e) => setoption(e.target.value);
    const datechange  = (e) => setdate(e.target.value);
    const totalgaschange = (e) => setTotalgas(e.target.value);
    const totalgaspricechange = (e) => settotalgasprice(e.target.value);
    const totalbuymentpricechange = (e) => settotalgaybuyment(e.target.value);
    const totalgaybuymentpricechnage = (e) => setttotalbuymentprice(e.target.value);
    const Echange = (e) => setExchange(e.target.value);
    const profitchaneg = (e) => setprofit(e.target.value);
    const deschange = (e) => setdescription(e.target.value);

    const change = (e) =>{
        console.log(option + date + Totalgas + Totalgas + totalgasprice + totalgaybuyment+ totalbuymentprice+Exchange+profit+description)
    }
    const SaveRegister = async () =>{
      try {
        fetch('http://localhost:4000/RegisterDatas' , {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(
            {option , date , Totalgas , Totalgas , 
            totalgasprice , totalgaybuyment, 
            totalbuymentprice , Exchange , 
            profit , description
            }
          )
        }).then(res => res.json()).then(
          result =>{
            console.log(result);
          }
        )
        
      } catch (error) {
        console.log(error.message)
      }
    } 

    return (
        <>
          <p  onClick={() => setShowModal(true)} className='flex space-x-2 items-center '>
            <p className='textbtn uppercase font-semibold'>RegisterData</p>
          </p>
          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-[100%] my-6 mx-auto max-w-sm">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full darks bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-1xl font-semibold">
                      RegisterDataConsole.log("Console.log("");");
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
                    <div className="relative p-4 flex-auto">
                    <div className='w-full px-4 '>
                    <form className='w-full mt-1 text-black'>
                          <div className='flex space-x-2'>
                          <select className='w-full border darks  rounded p-2 outline-none'
                          onChange={optionchange} required>
                             <option value="Daily" >Daily</option>
                             <option value="Monly" >Monly</option>
                             <option value="Yearly" >Yearly</option>
                          </select>
                          <br />
                          <input 
                          type="date"
                          onChange={datechange}
                          className='w-full  darks p-2 border outline-none  rounded'
                          required/>          
                         </div>  

                          <div className='flex space-x-2 mt-1'>
                          <input 
                          onChange={totalgaschange}
                          placeholder='Enter Total Gas'
                          type="number"
                          className='w-full p-2 darks border outline-none mt-3 rounded'
                          required/>

                          <input 
                          type="number"
                          onChange={totalgaspricechange}
                          placeholder='Enter Gas Price'
                          className='w-full p-2 darks border outline-none mt-3 rounded'
                          required/>
                          </div>

                          <div className='flex space-x-2 mt-1'>
                          <input 
                          placeholder='Enter Gas Buyment'
                          onChange={totalbuymentpricechange}
                          type="number"
                          className='w-full p-2 darks border outline-none mt-3 rounded'
                          required/>
                          </div>

                          <input 
                          type="number"
                          onChange={totalgaybuymentpricechnage}
                          placeholder='Enter Gas buyment price'
                          className='w-full p-2 darks border outline-none mt-3 rounded'
                          required/>

                          <div className='flex space-x-2 mt-1'>
                          <input 
                          type="number"
                          onChange={Echange}
                          placeholder='Enter price Exchanger'
                          className='w-full p-2 darks border outline-none mt-3 rounded'
                          required/>
                          <input 
                          type="number"
                          onChange={profitchaneg}
                          placeholder='Enter profit'
                          className='w-full p-2 darks border outline-none mt-3 rounded'
                          required/>
                          </div>
                          <input 
                          type="text"
                          onChange={deschange}
                          placeholder='Enter description'
                          className='w-full p-2 darks border outline-none mt-4 rounded'
                          required/>
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
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={SaveRegister}
                          >
                           save
                          </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 dark:bg-white bg-white"></div>
            </>
          ) : null}
        </>
      );
}

export default Register