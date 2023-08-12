import React, { useContext, useState } from 'react'
import prState from '../../Statemagemant/Profilestate'

const Formprofile = () => {
    const {profileimage , setprofileimage} = useContext(prState)
    const [email , setEmail] = useState('')
    const [Nymber , setNymber] = useState(Number)
    const [Address , setAddress] = useState('')
    const emailchange = (e)=> setEmail(e.target.value)
    const Numchnage = (e)=> setNymber(e.target.value)
    const Adchange = (e)=> setAddress(e.target.value)
    console.log( email , Nymber , Address)
  
    const Profile = (e) => {
      e.preventDefault()
      fetch('http://localhost:4000/api/profiles',{
        method:'put',
           headers:{
            "Content-Type" : "application/json"
           },
           body:JSON.stringify({
              email , Nymber , Address
              
        })
      }).then(res =>{
        if(res.lenght > 0){
          setAddress('')
          setNymber('')
          setEmail('')
        }
      })
     
    }
    
    // const handlePictureChange = (event) => {
    //   const file = event.target.files[0];
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //       setprofileimage(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // };
  
  return (
    <div className='h-[60vh] flex justify-center'>
    <div>
  <form className=''>
    <div>
        <h1 className='text-md font-press font-semibold text-[#007095]'>Account</h1>
    </div>
  <div className="mb-3">
    <input 
    required
    type="text"  
    placeholder="Enter Email" 
    onChange={emailchange}
    className='p-2.5 w-full mt-2 border-gray-300 border outline-none darks rounded'
    />
    <input 
    required
    type="text"  
    placeholder="Enter Number" 
    onChange={Numchnage}
    className='p-2.5 w-full border-gray-300 border outline-none mt-4 darks rounded'
    />
    <input 
    required
    type="text"  
    placeholder="Enter Adders" 
    onChange={Adchange}
    className='p-2.5 w-full border-gray-300 border darks outline-none mt-4 rounded'
    />
      {/* <input type="file" 
      className="text-sm text-grey-500 mt-4 w-32 file:mr-5 file:py-2 file:px-6
      file:rounded-full file:border-0 file:text-sm file:font-medium
      file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer
     hover:file:bg-amber-50 hover:file:text-amber-700 " 
      onChange={(e) => setprofileimage(e.target.files[0])}
      /> */}
  </div>
 
  <button type="submit" className="text-white bg-[#007095]  p-2 mt-3  drks rounded"
  onClick={Profile}> update account</button>
</form>
    </div>
    </div>
  )
}

export default Formprofile