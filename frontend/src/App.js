import React from 'react'
import { Link, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Statemagemant } from './Statemagemant/Statemagemant'
import { Admin , Login , User , Singup , Layout, CreatersUsers, CreateEmpoyee, CreateCustomer, Profiles, Gasprintpage, Emplooye ,Customer ,Salarys} from './Eportpages'
// emport admin pages
import {Home , Fuel , Anlayzices , Atendance , Createuser  , Salary ,Report, Creaters ,} from './Eportpages'
// Userpages
import {CustomerUser} from './Eportpages'

import { SlideContex } from './Statemagemant/SlideState'
import { Loginstate } from './Statemagemant/LoginState/Loginstate'
import { ThemeState } from './Statemagemant/ThemeState'
import { Profilestate } from './Statemagemant/Profilestate'
import { Usercreater } from './Statemagemant/creater/creater'
import { Searchgasforstate } from './Statemagemant/Fuelstate/Searchgasforstate'
import { ModelState } from './Statemagemant/ModelState'

const rooter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
       <Route  path='/' >
         <Route path='/' element={<Login/>}/>
         <Route path='/Singin' element={<Singup/>}/>
       </Route>

       <Route  path='/layout' element={<Layout/>}>
         <Route path='/layout/Admin' element={<Admin/>}>

          <Route path='/layout/Admin' element={<Home/>}/>
          <Route path='/layout/Admin/Profiles' element={<Profiles/>}/>
          <Route path='/layout/Admin/fuel' element={<Fuel/>}/>
          <Route path='/layout/Admin/Anlayzices' element={<Anlayzices/>}/>
          <Route path='/layout/Admin/Atendance' element={<Atendance/>}/>

          <Route path='/layout/Admin/Createuser' element={<Creaters/>}>
            <Route path='/layout/Admin/Createuser/Creater' element={<CreatersUsers/>}/>
            <Route path='/layout/Admin/Createuser/Creater/update/:id' element={<CreatersUsers/>}/>
            <Route path='/layout/Admin/Createuser/Creater/Eployee' element={<CreateEmpoyee/>}/>
            <Route path='/layout/Admin/Createuser/Creater/customer' element={<CreateCustomer/>}/>
          </Route>

          <Route path='/layout/Admin/Salary' element={<Salary/>}/>
          <Route path='/layout/Admin/Report' element={<Report/>}>
            {/* <Route path='/layout/Admin/Report/Gasprintpage' element={<Gasprintpage/>}/>
            <Route path='/layout/Admin/Report/Emplooye' element={<Emplooye/>}/>
            <Route path='/layout/Admin/Report/Customer' element={<Customer/>}/>
            <Route path='/layout/Admin/Report/Salary' element={<Salarys/>}/> */}
          </Route>

         </Route>
         <Route path='/layout/User' element={<User/>}>
          
         <Route path='/layout/User' element={<Fuel/>}/>
         <Route path='/layout/User/Atendance' element={<Atendance/>}/>
         <Route path='/layout/User/Customer' element={<CustomerUser/>}/>
         </Route>
       </Route>
      
    </Route>
  )
)
function App () {
  return (
   <Statemagemant>
    <SlideContex>
    <Loginstate>
    <ThemeState>
    <Profilestate>
      <Usercreater>
        <Searchgasforstate>
          <ModelState>
         <RouterProvider router={rooter}/>
          </ModelState>
        </Searchgasforstate>
      </Usercreater>
    </Profilestate>
    </ThemeState>
    </Loginstate>
    </SlideContex>
   </Statemagemant>
  )
}

export default App