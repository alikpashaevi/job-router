import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HelpLayout = () => {
  return (
    <div className='help-layout'>
      <h2>Website Help</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta officia sunt aliquam porro ipsa culpa perspiciatis </p>
      
      <nav>
        <NavLink to="faq">view the FAQ</NavLink>
        <NavLink to="contact">contact us</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

export default HelpLayout