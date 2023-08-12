import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Fuelstate } from '../Statemagemant/Fuelstate/Fuelstate'

const Layout = () => {
  return (
    <div className='font-press '>
      <Fuelstate>
      <Outlet/>
      </Fuelstate>
    </div>
  )
}

export default Layout
