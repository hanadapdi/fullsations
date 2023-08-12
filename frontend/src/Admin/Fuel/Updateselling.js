import React, { useState } from 'react'
import SeelingForm from './form/SeelingForm';

const Updateselling = ({id}) => {
    const [showModal, setShowModal] = React.useState(false);
    const [category , setcategory] = useState('')
    const [Quantity , setQuantity] = useState(Number)
    const [price , setprice] = useState(Number)
    const [dates , setdates] = useState('')
    const categorychange = (e) => setcategory(e.target.value);
    const quantitychange = (e) => setQuantity(e.target.value);
    const pricechange = (e) => setprice(e.target.value);
    const dateschange = (e) => setdates(e.target.value);
  
    const buymentfuelsave = async (e) =>{
      setShowModal(false) 
      if(category !== '' || Quantity !== "" || price !== ""){
        try {
          e.preventDefault();
          await fetch('http://localhost:4000/buymentgaspricesupdate',{
            method:'post',
               headers:{
                "Content-Type" : "application/json"
               },
               body:JSON.stringify({
                   category , Quantity , price , dates , id
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
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white  w-full outline-none focus:outline-none">
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
                     <form className='w-full  text-black'>

                        <select className='w-full border darks   rounded p-3 outline-none'
                        onChange={categorychange}>
                           <option value="" >Select</option>
                           <option value="petrol" >petrol</option>
                           <option value="navato" >Navato</option>
                           <option value="gas" >Gas</option>
                        </select>
                        <br/>
                        <input 
                        type="number"
                        placeholder='Enter Quantity'
                        className='w-full  darks p-3 border outline-none mt-4 rounded'
                        onChange={quantitychange}/>
                        <br/>

                        <input 
                        type="number"
                        placeholder='Enter price'
                        className='w-full p-3  border outline-none mt-4 rounded'
                        onChange={pricechange}/>
                        <br/>
                        <input 
                        type="date"
                        placeholder='Enter  Quantity'
                        className='w-full p-3  border outline-none mt-4 rounded'
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
                      className="bg-[#3262a981] text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button" onClick={buymentfuelsave}>
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

export default Updateselling