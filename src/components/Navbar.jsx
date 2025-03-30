import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <h1>Rifat's Blog</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/NewBlog">NewBlog</NavLink>
    </div>
  )
}

export default Navbar;