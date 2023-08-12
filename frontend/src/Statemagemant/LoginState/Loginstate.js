
import React, { createContext, useState  } from 'react'
import { useNavigate } from 'react-router-dom';
const Loginstatecontec = createContext();
export const Loginstate = ({children}) => {
  const [Username , setUsername  ] = useState('');
  const [Password , setPassword  ] = useState('');
  const [Login , setLogin] = useState([]);
  const Usernamechange = (e) => {setUsername(e.target.value)};
  const Passwordchange = (e) => {setPassword(e.target.value)};

 
  return (
    <Loginstatecontec.Provider value={{ Passwordchange , Usernamechange , Username , Password ,Login , setLogin}}>
      {children}
    </Loginstatecontec.Provider>
  )
}

export default Loginstatecontec