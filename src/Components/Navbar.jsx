import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex" ,justifyContent:"space-between"}}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/create">Device Add</NavLink>
        {/* <NavLink to="/">Home</NavLink>
        <NavLink to="/">Home</NavLink> */}

    </div>
  )
}

export default Navbar