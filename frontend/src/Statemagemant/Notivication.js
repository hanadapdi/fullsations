import React, {  createContext, useState } from 'react'
 const Noticicationcontex = createContext();
 export const Notivication = ({children}) => {
    const [Notivic , setNotivic] = useState(false);
    const notivications = () => {
        setNotivic(!Notivic)
    }
  return (
    <Noticicationcontex.Provider value={{notivications , Notivic}}>{children}</Noticicationcontex.Provider>
  )
}

export default Noticicationcontex