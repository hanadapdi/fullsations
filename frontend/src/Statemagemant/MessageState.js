import React, { createContext, useState } from 'react'
const Mesagecontex = createContext();
export const MessageState = ({children}) => {
     const [mesageshow , setmesageshow] = useState(false)
     const handelmessage = () => setmesageshow(!mesageshow)
  return (
    <Mesagecontex.Provider value={{mesageshow , setmesageshow , handelmessage}}>{children}</Mesagecontex.Provider>
  )
}

export default Mesagecontex