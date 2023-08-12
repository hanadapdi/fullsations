import React, { useContext } from 'react'
import {FaFileInvoice, FaFileInvoiceDollar, FaGasPump, FaUserAlt} from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Modelcontex from '../../Statemagemant/ModelState'
import Gasbuyments from './models/Gasbuyments'
import Employemodel from './models/Employemodel'
import Customermodel from './models/Customermodel'
import Salarymodel from './models/Salarymodel'

const RepotsBox = () => {
  return (
    <div className='grid sm:grid-cols-4 gap-4 text-gray-600'>
        <Gasbuyments/>
        <Employemodel/>
        <Customermodel/>
        <Salarymodel/>
        
    </div>
  )
}

export default RepotsBox