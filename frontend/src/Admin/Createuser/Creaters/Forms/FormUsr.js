import React, { useContext, useState } from 'react'
import UserContex from '../../../../Statemagemant/creater/creater'

const FormUsr = () => {
 const { usernamechange , passwordchange , usersave , user , confirmchnage ,showModal, setShowModal} =useContext(UserContex)
  return (
    <div>
       
       <>
            <button
              className="btn text-white  font-bold uppercase text-sm px-6 py-3 
              rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1
              mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
           Create User
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
                    darks outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid 
                      border-slate-200 rounded-t">
                        <h3 className="text-1xl font-semibold">
                       create user
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
                     
        <form className='' >
  <div className="mb-3">
  <select className='mt-[2vh] darks w-full h-12 outline-none p-2 border rounded'            
   onChange={usernamechange} >
                <option >Choce option</option>
                <option value="Superuser">Superuser</option>
                <option value="Admin">Admin</option>
            </select>
    <input 
    required
    type="password"  
    placeholder="Enter password"  
    onChange={passwordchange}
    className='p-2.5 w-full border-gray-300 border outline-none mt-2 darks rounded'
    />
    <input 
    required
    type="password"   
    placeholder="Enter cofirm Password"  
    onChange={confirmchnage}
    className='p-2.5 w-full border-gray-300 border darks outline-none mt-2 rounded'
    />

  </div>
 
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
                          onClick={usersave}
                        >
                          Save User
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

export default FormUsr