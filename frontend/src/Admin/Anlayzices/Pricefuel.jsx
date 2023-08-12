import React, { useContext, useState } from 'react'
import fuelcontex from '../../Statemagemant/Fuelstate/Fuelstate';

const Pricefuel = () => {
        const {setShowalert} = useContext(fuelcontex)
        const [showModal, setShowModal] = React.useState(false);
        const [Category , setCategory] = useState('')
        const [Quantity , setQuantity] = useState(Number)
        const [Price , setPrice] = useState('')
        const [Date , setDate] = useState('');
        const Categorychange = (e) => setCategory(e.target.value)
        const Quantitychange = (e) => setQuantity(e.target.value)
        const Pricechange = (e) => setPrice(e.target.value)
        const Datechange = (e) => setDate(e.target.value)
        
        const saveprice = (e) =>{
            e.preventDefault();
            if(Category !== '' || Quantity !== '' || Price !== '' || Date !== '') {
                fetch('http://localhost:4000/registerfuelprice',{
                 method:'post',
                    headers:{
                     "Content-Type" : "application/json"
                    },
                    body:JSON.stringify({
                        Category , Quantity , Price , Date
                 })
               }).then(res =>{
                setShowalert(true);
               })
             }
             else return false;
            console.log(Category , Quantity , Price , Date);
            setShowModal(false)
        }

        return (
          <>
            <button
              className="btn text-white  font-bold uppercase text-sm px-6 py-3 
              rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1
              mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
            Add price gas
            </button>
            {showModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto 
                  fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-sm">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full 
                    bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid 
                      border-slate-200 rounded-t">
                        <h3 className="text-1xl font-semibold">
                        price gas
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right 
                          text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none 
                          focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                      <div className='w-full px-4 '>
                        <form className='w-full mt-1 text-black'>
    
                             <select className='w-full border darks  rounded p-3 outline-none'
                             onChange={Categorychange}>
                                <option value="" >Select</option>
                                <option value="Pertol" >Pertol</option>
                                <option value="navato" >Navato</option>
                                <option value="gas" >Gas</option>
                             </select>
                             <input 
                             type="number"
                             onChange={Quantitychange}
                             placeholder='Enter Quantity'
                             className='w-full  darks p-3 border outline-none mt-6 rounded'/>
    
                             <input 
                             type="number"
                             onChange={Pricechange}
                             placeholder='Enter price '
                             className='w-full p-3  border outline-none mt-6 rounded'/>
                             <input 
                             type="date"
                             onChange={Datechange}
                             placeholder='Enter  Quantity'
                             className='w-full p-3  border outline-none mt-6 rounded'/>
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
                          onClick={saveprice}
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

export default Pricefuel