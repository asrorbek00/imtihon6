import React, { useState } from 'react'
import {FaMoon , FaSun} from 'react-icons/fa' 

const Theme = () => {
    const [mode, setMode] = useState("light")

    const changeMode = () =>{
        document.documentElement.dataset.theme = mode
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