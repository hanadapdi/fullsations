import { useContext, useState } from 'react';
import fuelcontex from '../../../../Statemagemant/Fuelstate/Fuelstate';
import searchfuelgas from '../../../../Statemagemant/Fuelstate/Searchgasforstate';
import UserContex from '../../../../Statemagemant/creater/creater';
import { AiOutlineEdit } from 'react-icons/ai';
const Editcustomermodel = ({name , car ,gas , Quantitys, prices, number ,Location ,datess , id}) => {
  const {petrolquentity ,petrollprice ,  Navtoquentity , Navtoprice , Gasprice , Gasquentity ,cash ,pprice , nprice ,gprice} = useContext(fuelcontex)
  const {petrolquentityforgas , pricepetrolfuelgas , navtofuctionmap ,navtoReduceprice , GasReduceprice , Gasquentitys ,} = useContext(searchfuelgas)
  const {customer} = useContext(UserContex);
    const [showModal, setShowModal] = useState(false);
    const [category , setcategory] = useState('')
    const [Quantity , setQuantity] = useState(Number)
    const [price , setprice] = useState(Number)
    const [dates , setdates] = useState('')
    const [customername , setcustomername] = useState('')
    const [customerNumber , setcustomerNumber] = useState(Number)
    const [customerCarId , setcustomerCarId] = useState('')
    const [customerLocation , setcustomerLocation] = useState('')

    const categorychange = (e) => setcategory(e.target.value);
    const quantitychange = (e) => setQuantity(e.target.value);
    const pricechange = (e) => setprice(e.target.value);
    const dateschange = (e) => setdates(e.target.value);
    const customerCarIdchange = (e) => setcustomerCarId(e.target.value);
    const customerNamechnage = (e) => setcustomername(e.target.value);
    const customerNumberchange = (e) => setcustomerNumber(e.target.value);
    const customerLocationchnage = (e) => setcustomerLocation(e.target.value)
  
    const [Warning , setWarning] = useState(false)
    const  Waringin = () =>{
      return (
        <div className=' fixed top-14 right-10 z-50'>
          <div class="flex p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Info</span>
        <div>
        <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
       </div>
       </div>
        </div>
      )
    }
    const [suces , setSuces] = useState(false)
    const  Success = () =>{
      return (
        <div className=' fixed top-14 right-10 z-50'>
        <div class="flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Info</span>
  <     div>
         <span class="font-medium">Success Update!</span> Change a few things up and try submitting again.
        </div>
        </div>
        </div>
      )
    }


    setTimeout(() => {
      setWarning(false);
    }, 4000);
    const add = () => {
        console.log(customerCarId , customername , customerLocation , customerNumber , Quantity , category , price , dates)
    };

    const  quantityp  = petrolquentityforgas-petrolquentity;
    const  chekingpetrol = quantityp -Quantity;
    const  quantityn  = navtofuctionmap-Navtoquentity;
    const  chekingnavto = quantityn -Quantity;
    const  quantityg  = Gasquentitys-Gasquentity ;
    const  chekinggas = quantityg -Quantity;
    const buymentApiUpdate = () => {
       setShowModal(false) 
      fetch('http://localhost:4000/customerSellingUpdate',{
        method:'put',
           headers:{
            "Content-Type" : "application/json"
           },
           body:JSON.stringify({
            customerCarId , customername , customerLocation , customerNumber , Quantity , category , price , dates , id
        })
      })
      console.log(  customerCarId , customername , customerLocation , customerNumber , Quantity , category , price , dates , id)
    }
    const buymentUpdate = (e) =>{
      try {
        e.preventDefault();
      if(category !=' ' && Quantity !=" "&& price !=" " &&dates  !=" "
       && customerNumber !=" " && customerCarId !=" " && customerLocation != " " && customername !=" " ) {
        switch (category) {
          case "petrol": if(chekingpetrol >=0){
            buymentApiUpdate();
            setSuces(true);
          }
          else return setWarning(true)
            break;
          case "navato": if(chekingnavto >=0){
            buymentApiUpdate();
            setSuces(true);
          }
          else return setWarning(true)
            break;
          case "gas": if(chekinggas >=0){
            buymentApiUpdate();
            setSuces(true);
          }
          else return setWarning(true)
            break;
        }
      }
      else return alert('please wait')
    } catch (error) {
      console.log('halkan waa buymenyfuelsave hada error aya jira' + error)
    }
    }
    return (
      <>
     <div className='z-50'>
       {Warning === true ? <Waringin/> : null}
     </div>
     <div className='z-50'>
       {suces === true ? <Success/> : null}
     </div>
 
       <AiOutlineEdit onClick={() => setShowModal(true)}/>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white  darks outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl font-semibold capitalize text-gray-500">
                     customer selling Update from 
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

                        <select className='w-full border darks  rounded p-3 outline-none'
                        onChange={categorychange}>
                           <option value={gas} >{gas}</option>
                           <option value="petrol" >petrol</option>
                           <option value="navato" >Navato</option>
                           <option value="gas" >Gas</option>
                        </select>
                        <br />

                        <select className='w-full border darks mt-3 rounded p-3 outline-none'
                        onChange={customerNamechnage}>
                           <option value={name} >{name}</option>
                           {customer.map((item , i) =>{
                            return(
                                <option value={item.fullname} key={i}>{item.fullname}</option>
                            )
                           })}
                          
                        </select>
                        <br />

                        <select className='w-full border darks mt-3 rounded p-3 outline-none'
                        onChange={customerCarIdchange}>
                           <option value={car} >{car}</option>
                           {customer.map((item , i) =>{
                            return(
                                <option value={item.CarID} key={i}>{item.CarID}</option>
                            )
                           })}
                          
                        </select>
                        <br />

                      <div className='flex items-center space-x-2'>
                      <select className='w-full border darks mt-3 rounded p-3 outline-none'
                        onChange={customerNumberchange}>
                           <option value={number}>{number}</option>
                           {customer.map((item , i) =>{
                            return(
                                <option value={item.Numbers} key={i}>{item.Numbers}</option>
                            )
                           })}
                          
                        </select>
                        <br />
                        <select className='w-full border darks mt-3 rounded p-3 outline-none'
                        onChange={customerLocationchnage}>
                           <option value={Location} >{Location}</option>
                           {customer.map((item , i) =>{
                            return(
                                <option value={item.Location} key={i}>{item.Location}</option>
                            )
                           })}
                          
                        </select>
                        <br />

                      </div>
                    
                       <div className='flex space-x-2 items-center'>
                       <input 
                        type="number"
                        placeholder='Enter Quantity'
                        // value={Quantitys}
                        className='w-full  darks p-3 border outline-none mt-4 rounded'
                        onChange={quantitychange}/>
                        
                        <input 
                        type="number"
                        placeholder='Enter price'
                        // value={prices}
                        className='w-full p-3 darks border outline-none mt-4 rounded'
                        onChange={pricechange}/>
                       </div>
                        <input 
                        type="date"
                        placeholder='Enter  Date'
                        className='w-full p-3 darks border outline-none mt-4 rounded'
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
                      type="button" onClick={buymentUpdate}>
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

export default Editcustomermodel