import React, { useEffect, useState } from 'react'
import {FaMoon , FaSun} from 'react-icons/fa' 
function getThemeFromLocalSorage (){
 return localStorage.getItem("theme") || 'light'
}

const Theme = () => {
    const [mode, setMode] = useState(getThemeFromLocalSorage)

    useEffect(()=>{
      document.documentElement.dataset.theme = mode
      localStorage.setItem("theme" , mode)
    },[mode])

    const changeMode = () =>{
       
        setMode((prev) =>{
            return prev == "light" ? "dark" : "light"
        })
        
    }
    
  return (
    <p className='cursor-pointer text-black' onClick={changeMode}>
        {mode == "light" ? <FaMoon/> : <FaSun/>}
    </p>
  )
}

export default Theme