import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <div className=''>
        <Navbar/>
        <main className='align-element py-8'>
            <Outlet/>
        </main>
        </div>
    </>
  )
}

export default MainLayout