import React from 'react'
import { Link } from 'react-router-dom'
import ToggleDarkMode from './ToggleDarkMode'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center gap-2 font-semibold'>
        <Link to="/" className='flex items-center gap-2'>
            <img src="favicon.ico" alt="" />
            To-Do App
        </Link>

        <nav className='flex items-center gap-2'>
            <Link to="/about" className='cursor-pointer'>About</Link>
            <ToggleDarkMode />
        </nav>
    </div>
  )
}

export default Header