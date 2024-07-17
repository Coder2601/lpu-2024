import React, { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const Books = () => {
  const nav = useNavigate();
  const[isBooks,setBooks] = useState(true);

  return (
  <>
  <button onClick={()=>nav(-1)}>Back</button>
  <button onClick={()=>nav(1)}>Next</button>
    <h2>Books</h2>
    <ul className='ul'>
        <li className='li' onClick={()=>setBooks(false)}><NavLink to={'fed'}>Frontend Books</NavLink></li>
        <li className='li' onClick={()=>setBooks(false)}><NavLink to={'bed'}>Backend Books</NavLink></li>
    </ul>

    {isBooks ?  
      <div>
        <h3>Lorem ipsum dolor sit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae rem facilis commodi consequuntur dolor. Vero placeat pariatur incidunt odio.</p>
        <hr />
        <h3>Lorem ipsum dolor sit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae rem facilis commodi consequuntur dolor. Vero placeat pariatur incidunt odio.</p>
      </div>
    :
    <Outlet />}
  </>
  )
}

export default Books