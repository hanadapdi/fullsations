import React from 'react'

const FormSalary = () => {
  return (
    <div>
        <form className=''>
  <div className="mb-3">
    <input 
    required
    type="text"  
    placeholder="Enter Fullname" 
    className='p-2.5 w-full border-gray-300 border outline-none darks rounded'
    />
    <input 
    required
    type="text"  
    placeholder="Enter Fullname" 
    className='p-2.5 w-full border-gray-300 border outline-none mt-2 darks rounded'
    />
    <input 
    required
    type="text"  
    placeholder="Enter Fullname" 
    className='p-2.5 w-full border-gray-300 border darks outline-none mt-2 rounded'
    />

  </div>
 
  <button type="submit" className="text-white bg-blue-400 p-2  drks rounded">Register new account</button>
</form>
    </div>
  )
}

export default FormSalary