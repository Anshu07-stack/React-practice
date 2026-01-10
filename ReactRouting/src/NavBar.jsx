import React from 'react'
import { Link,NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='bg-[lightseagreen] p-5 flex gap-5'>
      <NavLink
       to="/" 
       className={({isActive})=>isActive ? 'text-red-500':''}>
        HOME
        </NavLink>
      <NavLink
       to="/about" 
       className={({isActive})=>isActive ? 'text-red-500':''}>
        ABOUT
        </NavLink>
      <NavLink
       to="/contact"
       className={({isActive})=>isActive ? 'text-red-500':''}
       >CONTACT
       </NavLink>
      <NavLink
       to="/help" 
       className={({isActive})=>isActive ? 'text-red-500':''}>
        HELP
        </NavLink>
    </div>
  )
}

export default NavBar
