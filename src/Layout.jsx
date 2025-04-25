import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <main className='w-full flex flex-col justify-between items-center min-h-screen p-2.5 m-0 mx-auto'>
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}

export default Layout