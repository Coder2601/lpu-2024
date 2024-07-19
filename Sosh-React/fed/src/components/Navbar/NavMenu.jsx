import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { logContext } from '../contexts/LogContexts';


const NavMenu = () => {
  
  const {isLoggedIn} = useContext(logContext);
  
  return (
    <>
        <ul>
            <li><NavLink to={'/posts'}>Posts</NavLink></li>
            <li><NavLink to={'/blogs'}>Blogs</NavLink></li>
            {!isLoggedIn ? <>
            <li><NavLink to={'/user/login'}>User Login</NavLink></li>
            <li><NavLink to={'/admin/login'}>Admin Login</NavLink></li>  
            <li><NavLink to={'/user/register'}>Register</NavLink></li>
            </>
            :
            <li><NavLink to={'/'} onClick={()=>localStorage.removeItem("token")}>Logout</NavLink></li>}
        </ul>
    </>
  )
}

export default NavMenu