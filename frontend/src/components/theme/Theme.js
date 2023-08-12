import React, { useContext, useEffect, useState } from 'react'
import { BsSun } from 'react-icons/bs'
import { MdOutlineDarkMode } from 'react-icons/md'
import stateNav from '../../Statemagemant/Navcontex'
import stateTheme from '../../Statemagemant/ThemeState'

const Theme = ({onhendel , enabled , hiSmall}) => {
        return (
                <div className="flex">
                    <label class="inline-flex relative items-center  cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={enabled}
                            readOnly
                        />
                        <div
                            onClick={()=> {hiSmall() ;}}
                            className="w-14 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  
                            peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
                            after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 
                            after:border after:rounded-full after:h-5 after:w-[26px] after:transition-all 
                            peer-checked:bg-gray-600"
                        ></div>
                        
                    </label>
                </div>
        );
    }

export default Theme