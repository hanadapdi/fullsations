import React, { createContext, useState } from 'react'


const fuelState = createContext()
export const Statemagemant = ({children}) => {


  return (
    <fuelState.Provider value={console.log('hanad')}>
        {children}
    </fuelState.Provider>
  )
}

export default fuelState