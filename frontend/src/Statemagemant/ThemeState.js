import React, { createContext, useEffect, useState } from 'react'
const stateTheme = createContext();
export const ThemeState = ({children}) => {
    const [enabled, setEnabled] = useState(false);
    const [Dark , setDark] = useState(false);
    useEffect(() =>{
        if(window.matchMedia('(prefers-color-Schems)').matches){
            setDark('dark');
        }
        else(
            setDark('light')
        )
    },[])
    
    useEffect(()=>{
        if(Dark == 'dark') {
            document.documentElement.classList.add('dark')
        }
        else(
            document.documentElement.classList.remove('dark')
        )
    },[Dark])

    const onhendel = () =>{
        setDark(Dark == "light" ? 'dark' : 'light')
     
        console.log(Dark)
    }
   const themewhite = () => setDark('light')
   const themeBlack = () => setDark('dark')
   const theme = {
    colors: {
      primary: '#FF0000',
      secondary: '#00FF00',
      // Add more colors as needed
    },
    // Add more theme properties as needed
  };
  return (
   <stateTheme.Provider value={{themewhite , themeBlack , onhendel ,enabled , setEnabled ,}}>
    {children}
   </stateTheme.Provider>
  )
}

export default stateTheme