import React, { createContext, useState } from 'react'

// iconsslide
import {AiOutlineDashboard ,AiOutlineBarChart ,AiOutlinePaperClip ,AiOutlineUser ,AiOutlineSetting, AiOutlineMenu} from 'react-icons/ai'
import {RiBuilding2Line} from 'react-icons/ri'
import {BiMessageAltDetail, } from 'react-icons/bi'
import { RiWaterFlashLine} from 'react-icons/ri'
import {CiLogout} from 'react-icons/ci'
import {FiUsers} from 'react-icons/fi'
import {BsEnvelopePaper} from 'react-icons/bs'
import {SlFrame} from 'react-icons/sl'
import { MdDoneAll} from 'react-icons/md'
const SlidestateManagement = createContext()

export const SlideContex = ({children}) => {
    const [slidebar , setSlidebar] = useState(false)
const showslides = () =>{
  setSlidebar(!slidebar)
}

  const [slide , setSlide] = useState([
    {name: "Dashboard" , icon : <AiOutlineDashboard/> , path: '/layout/admin' , style:'slideListbig'},
    {name: "Fuel" , icon :      <RiWaterFlashLine/> , path: '/layout/admin/fuel' , style:'slideList'},
    {name: "Analytics" , icon : <AiOutlineBarChart/> , path: '/layout/Admin/Anlayzices' , style:'slideList'},
    {name: "Creater" , icon :   <FiUsers/> , path: '/layout/Admin/Createuser' , style:'slideList'},
    {name: "atendance" , icon : <MdDoneAll/> , path: '/layout/Admin/Atendance' , style:'slideList'},
    {name: "Salary" , icon :    <SlFrame/> , path: '/layout/Admin/Salary' , style:'slideList'},
    {name: "Report" , icon :    <AiOutlinePaperClip/> , path: '/layout/Admin/Report' , style:'slideList'},

]);
  const [slideUser , setSlideUser] = useState([
    {name: "Fuel" , icon :      <RiWaterFlashLine/> , path: '/layout/User' , style:'slideList'},
    {name: "atendance" , icon : <MdDoneAll/> , path: '/layout/User/Atendance' , style:'slideList'},
    {name: "Customer" , icon : <FiUsers/> , path: '/layout/User/Customer' , style:'slideList'},

]);



  return (
    <SlidestateManagement.Provider value={{slide , setSlide , slidebar , setSlidebar , showslides , slideUser }}>
        {children}
    </SlidestateManagement.Provider>
  )
}

export default SlidestateManagement