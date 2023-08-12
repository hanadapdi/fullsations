import React, { useContext, useState } from 'react'
import fuelcontex from '../../Statemagemant/Fuelstate/Fuelstate';

const Updateprice = ({category ,price ,quantity , id}) => {
        const {setShowalert} = useContext(fuelcontex)
        const [showModal, setShowModal] = React.useState(false);
        const [Category , setCategory] = useState(category)
        const [Quantity , setQuantity] = useState(quantity)
        const [Price , setPrice] = useState(price)
        const [Date , setDate] = useState('');
        const Categorychange = (e) => setCategory(e.target.value)
        const Quantitychange = (e) => setQuantity(e.target.value)
        const Pricechange = (e) => setPrice(e.target.value)
        const Datechange = (e) => setDate(e.target.value)
        
        const saveprice = async (e) =>{
            e.preventDefault();
               const update = await fetch('http://localhost:4000/updatepricefuelgas',{
                 method:'PUT',
                    headers:{
                     "Content-Type" : "application/json"
                    },
                    body:JSON.stringify({
                        Category , Quantity , Price , Date , id
                 })
               }).then(res =>{
                setShowalert(true);
               })
            
            console.log(Category , Quantity , Price , Date);
            setShowModal(false)
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
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto 
                  fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative  w-auto my-6 mx-auto max-w-sm">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full 
                    bg-white darks outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid 
                      border-slate-200 rounded-t">
                        <h3 className="text-1xl font-semibold">
                         Update price 
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
                      <div className="w-full relative p-6 flex-auto">
                      <div className='w-full px-6 '>
                        <form className='w-full mt-1 text-black'>
    
                             <select className='w-full border darks  rounded p-3 outline-none'
                             onChange={Categorychange}>
                                <option value="category" >{category}</option>
                                <option value="" >Select</option>
                                <option value="Pertol" >Pertol</option>
                                <option value="navato" >Navato</option>
                                <option value="gas" >Gas</option>
                             </select>
                             <br />
                             <input 
                             type="number"
                             value={Quantity}
                             onChange={Quantitychange}
                             placeholder='Enter Quantity'
                             className='w-full  darks p-3 border outline-none mt-3 rounded'/>
                             <br />
    
                             <input 
                             type="number"
                             value={Price}
                             onChange={Pricechange}
                             placeholder='Enter price '
                             className='w-full p-3  darks border outline-none mt-3 rounded'/>
                             <br />

                             <input 
                             type="date"
                             onChange={Datechange}
                             placeholder='Enter  Quantity'
                             className='w-full p-3  darks border outline-none mt-3 rounded'/>
                        </form>
                         </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
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
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 dark:bg-white bg-black"></div>
              </>
            ) : null}
          </>
        );
      }

export default Updateprice