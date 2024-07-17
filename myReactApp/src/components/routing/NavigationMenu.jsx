import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const NavigationMenu = () => {

  const nav = useNavigate();

  return (
    <div>
      <nav>
        
        <ul className='ul'>
          <li className='li'><button onClick={()=>nav(-1)}>Back</button></li>
          <li className='li'><NavLink to={'/'}>Home</NavLink></li>
          <li className='li'><NavLink to={'/books'}>Books</NavLink></li>
          <li className='li'><NavLink to={'/about'}>About</NavLink></li>
          <li className='li'><NavLink to={'/contact'}>Contact</NavLink></li>
          <li className='li'><NavLink to={'/register'}>Register</NavLink></li>
          <li className='li'><NavLink to={'/login'}>Login</NavLink></li>
          <li className='li'><button onClick={()=>nav(1)}>Next</button></li>
        </ul>
        
      </nav>
      <hr />
    </div>
  )
}

export default NavigationMenu