import React, {  createContext, useEffect, useState } from 'react'
 const prState = createContext();
 export const Profilestate = ({children}) => {
  const [profiledata , setprofiledate] = useState([])
    const [profile , setprofile] = useState(false);
    const [profileimage , setprofileimage] = useState(null)
    const proshow = () => {
        setprofile(!profile)
    }

    useEffect(() =>{
      fetch('http://localhost:4000/api/getpro').then((response) => response.json())
      .then(REs => {
        setprofiledate(REs);
      })
    },[])

    const pic = profiledata.map((pro => profile.Picture));

  return (
    <prState.Provider value={{proshow , profile ,profileimage , setprofileimage ,profiledata ,pic}}>{children}</prState.Provider>
  )
}

export default prState