import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { logContext } from '../contexts/LogContexts';
import axios from 'axios'

const AdminLogin = () => {
  const[obj,setObj] = useState({});
  const{setLoggedIn} = useContext(logContext);
  const nav = useNavigate();

  const handleInput =(e)=>{
    setObj(obj=>({...obj,[e.target.id]:e.target.value}))
  }

  const handleLogin=(e)=>{
    e.preventDefault();
    // const result = await axios.post("url",{
    //   headers:{'Content-Type':'application/json'},
    //   body:JSON.stringify(userObj)
    // })
    
    // if(result.status){
    //   setLoggedIn(true);
    //   // set token in localstorage
    //   nav('/posts');
    // }
    // else{
    //   alert("Error in Logging Process, Try Again!");
    //   nav('/user/login');
    // }
    nav('/posts');
    localStorage.setItem("token","serdxgcfhvcedfgvb");
    localStorage.setItem("logged_type","admin");
    setLoggedIn(true);
  }

  return (
    <>
      <h2>Enter your valid credentials to login.</h2>
      <form>
        <label for="adminId">Admin Id : </label>
        <input type="text" id="adminId" placeholder="admin id" onChange ={handleInput} required />
        <br />

        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Password" onChange ={handleInput} required />
        <br />

        <button id="loginBtn" onClick={handleLogin}>Login</button>
      </form>

      <p>If you do not have an account, <NavLink to={'/user/register'}>Register here</NavLink>.</p>
    </>
  )
}

export default AdminLogin