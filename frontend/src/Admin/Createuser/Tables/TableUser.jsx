import React, { useContext, useState } from 'react'
import UserContex from '../../../Statemagemant/creater/creater'
import { Link } from 'react-router-dom'

const TableUser = () => {
  const {user , ondelet , alerUser}  = useContext(UserContex)

  const Updatefrom = ({id}) => {
    const [showModal, setShowModal] = useState(false);
    const [usernameUpdate , setusernameUpdate] = useState('')
    const [passupdate , setpassupdate] = useState('')
    const [confirmupdate , setconfirmupdate] = useState('');
    const userupdatechange = (e) => setusernameUpdate(e.target.value);
    const passupdatechange = (e) => setpassupdate(e.target.value);
    const confirmupdatechange = (e) => setconfirmupdate(e.target.value);
    console.log(usernameUpdate , passupdate , confirmupdate);
    const updateuser = async (e) =>{
      e.preventDefault();
      try {
        if(passupdate === confirmupdate){
          const response = await fetch(`http://localhost:4000/updateuser`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              usernameUpdate , passupdate , id
            }),
          });
          const data = await response.json();
          if(data){
            setShowModal(false)
          }
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
                    <h3 className="text-xl font-semibold">
                     Update User Form
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
                     <form className=' w-full text-black'>
                       <select className='mt-[2vh] w-full border rounded h-12 outline-none p-2' 
                       onChange={userupdatechange} 
                       >
                       <option >Choce option</option>
                       <option value="Superuser">Superuser</option>
                       <option value="Admin">Admin</option>
                       </select>

                      
                        <br/>
                        <input 
                        type="text"
                        placeholder='Enter Password'
                        onChange={passupdatechange}
                        className='w-full   p-3 border outline-none mt-4 rounded'
                        />
                        <br/>
                        <input 
                        type="text"
                        placeholder='Enter confirm Password'
                        onChange={confirmupdatechange}
                        className='w-full p-3  border outline-none mt-4 rounded'
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
                      type="button" onClick={updateuser}
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
     
    <div class="flex flex-col">
   <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
  <div class="overflow-hidden p-5">
    <table class="min-w-full text-left text-sm font-light">
      <thead class="border-b font-medium dark:border-neutral-500">
        <tr>
          <th scope="col" class="px-6 py-4">UserName</th>
          <th scope="col" class="px-6 py-4">Password</th>
          <th scope="col" class="px-6 py-4">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          // to={'update/' + item._id}
            user.map((item , i) =>{
                return(
                     <tr class="border-b dark:border-neutral-500" key={i}>
                       <td class="whitespace-nowrap px-6 py-4">{item.usernameAccount}</td>
                       <td class="whitespace-nowrap px-6 py-4">{item.passwordAccount}</td>
                      <td class="whitespace-nowrap px-6 py-4 flex space-x-2 cursor-pointer">
                      <Link >
                      <div  className='hover:text-blue-300 duration-300'>
                        <Updatefrom id={item._id}/>
                      </div>
                      </Link>
                      <div onClick={() => ondelet(item._id)} className='hover:text-blue-300  cursor-pointer duration-300'>delet</div>
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
  )
}

export default TableUser