import React, { createContext, useState } from 'react'
const stateNav = createContext();
export const Navcontex = ({children}) => {
     const [Setting , setSetting] = useState(false)
     const hendalsetting = () => setSetting(true)
     const closeStings = () => setSetting(false)
  return (
    <stateNav.Provider value={{hendalsetting , Setting , setSetting , closeStings}}>{children}</stateNav.Provider>
  )
}

export default stateNav