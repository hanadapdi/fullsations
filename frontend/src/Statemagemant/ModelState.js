import React, {  createContext, useState } from 'react'
const Modelcontex =createContext();
export const ModelState = ({children}) => {
    const [gasmodels , setgasmodles] = useState(false);
    const [emplooyes , setemployees] = useState(false);
    const [customer , setcustomer] = useState(false);
    const [salary , setsalary] = useState(false)    
  return (
    <Modelcontex.Provider value={{setgasmodles , gasmodels ,emplooyes , setemployees , customer , setcustomer , salary , setsalary}} >
        {children}
    </Modelcontex.Provider>
  )
}

export default Modelcontex