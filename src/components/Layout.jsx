import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <div className=" p-3 sm:p-5 md:p-8 lg:p-15 min-h-screen bg-amber-50">
      
      <div className=" h-full border-10 lg:border-18 rounded-2xl sm:rounded-3xl lg:rounded-4xl ">
    <Navbar />
    <div className='' >
      <Outlet/>
    </div>
    <Footer/>
    </div>
    </div>
  )
}

export default Layout