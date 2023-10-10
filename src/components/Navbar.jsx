import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Theme from './Theme'

function Navbar() {
  return (
    <div className='bg-neutral-content'>
    <div className='align-element flex justify-between items-center py-3'>
        <h1  className='text-3xl text-black'>Mover</h1>
        <Theme/>
        <div className='flex gap-10 '>
        <button className='btn btn-link'>
          <NavLink to={"/"} >Trending</NavLink>
        </button>
        <button className='btn btn-link'>
          <NavLink to={"movies"}>Movies</NavLink>
        </button>
        
        </div>
    </div>
    </div>
  )
}

export default Navbar