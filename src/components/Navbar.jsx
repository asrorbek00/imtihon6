import React from 'react'
import { Link,  } from 'react-router-dom'
import Theme from './Theme'

function Navbar() {
  return (
    <div className='bg-neutral-content'>
    <div className='align-element flex justify-between items-center py-3'>
    <Link to={"/"}>
        <h1  className='text-3xl text-black'>Mover</h1>
        </Link>
        <Theme/>
    </div>
    </div>
  )
}

export default Navbar